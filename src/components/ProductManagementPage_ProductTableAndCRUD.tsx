'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useForm, Controller, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Search, Plus, Filter, MoreHorizontal, Pencil, Trash2, X, UploadCloud, CheckCircle2, AlertCircle, Package, DollarSign, Tag, Loader2, Image as ImageIcon } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import type { product, product_without_PKs, category, product_status } from '@/server/entities.type';

// --- Constants ---
const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];
const COLORS = ['Black', 'White', 'Red', 'Blue', 'Green', 'Navy', 'Yellow', 'Grey', 'Beige'];

// --- Zod Schema ---
const productSchema = z.object({
  title: z.string().min(1, 'Product title is required'),
  name: z.string().min(1, 'Internal name is required'),
  sku: z.string().min(1, 'SKU is required'),
  category_id: z.coerce.number().min(1, 'Category is required'),
  price: z.coerce.number().min(0, 'Price must be positive'),
  sale_price: z.coerce.number().optional(),
  stock_quantity: z.coerce.number().int().min(0, 'Stock cannot be negative'),
  status: z.enum(['active', 'inactive', 'out_of_stock']),
  cover_image_url: z.string().url('Cover image must be a valid URL').or(z.literal('')).optional(),
  description_short: z.string().optional(),
  description_long: z.string().optional(),
  available_sizes: z.string().optional(),
  available_colors: z.string().optional(),
  image_url_list: z.string().optional()
});
type ProductFormValues = z.infer<typeof productSchema>;

declare global {
  interface Window {
    cloudinary?: {
      createUploadWidget: (options: Record<string, unknown>, callback: (error: unknown, result: any) => void) => {
        open: () => void;
      };
    };
  }
}

// --- Components ---

export default function ProductManagementPage_ProductTableAndCRUD() {
  // Data State
  const [products, setProducts] = useState<product[]>([]);
  const [categories, setCategories] = useState<category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // UI State
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  // Drawer & Dialog State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<product | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState<product | null>(null);

  // Carousel Images State
  const [carouselImages, setCarouselImages] = useState<string[]>([]);

  // Form Setup
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema) as Resolver<ProductFormValues>,
    defaultValues: {
      title: '',
      name: '',
      sku: '',
      category_id: 0,
      price: 0,
      sale_price: 0,
      stock_quantity: 0,
      status: 'active',
      cover_image_url: '',
      description_short: '',
      description_long: '',
      available_sizes: '',
      available_colors: ''
    }
  });

  // --- Data Fetching ---
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const session = getadmin_session();
      if (!session || !session.token) {
        toast.error('Unauthorized access. Please login as admin.');
        setProducts([]);
        setCategories([]);
        return;
      }
      const [productsData, categoriesData] = await Promise.all([entities.product.GetAll(), entities.category.GetAll()]);
      setProducts(productsData || []);
      setCategories(categoriesData || []);
    } catch (error) {
      console.error('Failed to fetch data:', error);
      toast.error('Failed to load products. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // --- Handlers ---

  const cloudinaryCloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const cloudinaryUploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const canUseCloudinary = !!cloudinaryCloudName && !!cloudinaryUploadPreset;
  const isValidHttpUrl = (value: string) => {
    try {
      const u = new URL(value);
      return u.protocol === 'https:' || u.protocol === 'http:';
    } catch {
      return false;
    }
  };
  const handleCloudinaryUpload = () => {
    if (!canUseCloudinary) {
      toast.error('Cloudinary is not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME and NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET.');
      return;
    }
    if (!window.cloudinary?.createUploadWidget) {
      toast.error('Upload widget not loaded yet. Please retry in a moment.');
      return;
    }
    const widget = window.cloudinary.createUploadWidget({
      cloudName: cloudinaryCloudName,
      uploadPreset: cloudinaryUploadPreset,
      sources: ['local', 'url', 'camera'],
      resourceType: 'image',
      multiple: false,
      maxFileSize: 5_000_000,
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp']
    }, (error, result) => {
      if (error) {
        toast.error('Upload failed. Please try again.');
        return;
      }
      if (result?.event === 'success' && result?.info?.secure_url) {
        form.setValue('cover_image_url', result.info.secure_url, {
          shouldDirty: true,
          shouldValidate: true
        });
        toast.success('Image uploaded successfully');
      }
    });
    widget.open();
  };
  const toggleSelection = (currentValue: string, item: string): string => {
    const items = currentValue.split(',').map((s, index) => s.trim()).filter(s => s.length > 0);
    const _index = items.findIndex(i => i.toLowerCase() === item.toLowerCase());
    if (_index > -1) {
      items.splice(_index, 1);
    } else {
      items.push(item);
    }
    return items.join(', ');
  };
  const isSelected = (currentValue: string, item: string): boolean => {
    const items = currentValue.split(',').map((s, index) => s.trim().toLowerCase()).filter(s => s.length > 0);
    return items.includes(item.toLowerCase());
  };
  const handleOpenAdd = () => {
    setEditingProduct(null);
    setCarouselImages([]);
    form.reset({
      title: '',
      name: '',
      sku: '',
      category_id: undefined,
      price: 0,
      sale_price: 0,
      stock_quantity: 0,
      status: 'active',
      cover_image_url: '',
      description_short: '',
      description_long: '',
      available_sizes: '',
      available_colors: ''
    });
    setIsDrawerOpen(true);
  };
  const handleOpenEdit = (product: product) => {
    setEditingProduct(product);

    // Initialize carousel images from product data
    const imageList = product.image_url_list ? product.image_url_list.split('|').map((url, index) => url.trim()).filter(url => url.length > 0) : [];
    setCarouselImages(imageList);
    form.reset({
      title: product.title,
      name: product.name,
      sku: product.sku,
      category_id: product.category_id,
      price: product.price,
      sale_price: product.sale_price || 0,
      stock_quantity: product.stock_quantity,
      status: product.status,
      cover_image_url: product.cover_image_url || '',
      description_short: product.description_short || '',
      description_long: product.description_long || '',
      available_sizes: product.available_sizes || '',
      available_colors: product.available_colors || ''
    });
    setIsDrawerOpen(true);
  };
  const onSubmit = async (values: ProductFormValues) => {
    const session = getadmin_session();
    if (!session || !session.token) {
      toast.error('Session expired.');
      return;
    }

    // Join carousel images array to pipe-separated string
    const imageUrlList = carouselImages.length > 0 ? carouselImages.join('|') : null;
    try {
      if (editingProduct) {
        // Update
        await entities.product.Update({
          where: {
            id: editingProduct.id
          },
          data: {
            ...values,
            updated_at: new Date(),
            // Ensure optional fields are handled correctly
            sale_price: values.sale_price || null,
            cover_image_url: values.cover_image_url || null,
            description_short: values.description_short || null,
            description_long: values.description_long || null,
            available_sizes: values.available_sizes || null,
            available_colors: values.available_colors || null,
            image_url_list: imageUrlList
          } as product_without_PKs // Casting for partial optionality compatibility if strict
        });
        toast.success('Product updated successfully');
      } else {
        // Create
        await entities.product.Create({
          ...values,
          created_at: new Date(),
          updated_at: new Date(),
          // Default fields that form doesn't handle but are required by type if any
          sale_price: values.sale_price || null,
          cover_image_url: values.cover_image_url || null,
          description_short: values.description_short || null,
          description_long: values.description_long || null,
          available_sizes: values.available_sizes || null,
          available_colors: values.available_colors || null,
          hover_image_url: null,
          image_url_list: imageUrlList,
          material_info: null,
          care_instructions: null,
          size_chart_url: null,
          compare_at_price: null
        });
        toast.success('Product created successfully');
      }
      setIsDrawerOpen(false);
      fetchData();
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Failed to save product. Check console for details.');
    }
  };
  const handleDelete = async () => {
    if (!productToDelete) return;
    try {
      await entities.product.Delete({
        id: productToDelete.id
      });
      toast.success('Product deleted successfully');
      setIsDeleteDialogOpen(false);
      setProductToDelete(null);
      fetchData();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete product.');
    }
  };

  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'all' || product.category_id.toString() === categoryFilter;
      const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [products, searchTerm, categoryFilter, statusFilter]);
  const getCategoryName = (id: number) => {
    return categories.find(c => c.id === id)?.name || 'Unknown Category';
  };
  return <section className="w-full bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-8 py-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-h2 font-bold text-slate-900 mb-1">Products</h1>
            <p className="text-slate-500 text-base">
              Manage your product catalog, inventory, and pricing.
            </p>
          </div>
          <Button onClick={handleOpenAdd} className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all hover:shadow-md">
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        {/* Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-1 gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search products by name or SKU..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-10 border-slate-200 focus-visible:ring-slate-900 bg-slate-50/50" />
            </div>
            <div className="w-[180px] hidden sm:block">
               <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="border-slate-200">
                  <div className="flex items-center gap-2">
                    <Filter className="h-4 w-4 text-slate-500" />
                    <SelectValue placeholder="Category" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat, index) => <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
             {/* Mobile Category Select */}
             <div className="sm:hidden w-full">
               <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                   <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat, index) => <SelectItem key={cat.id} value={cat.id.toString()}>{cat.name}</SelectItem>)}
                </SelectContent>
              </Select>
             </div>

             <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-[150px] border-slate-200">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Draft</SelectItem>
                  <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                </SelectContent>
              </Select>
          </div>
        </div>

        {/* Data Grid */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {isLoading ? <div className="h-96 flex flex-col items-center justify-center text-slate-400">
              <Loader2 className="h-10 w-10 animate-spin mb-4" />
              <p>Loading products...</p>
            </div> : filteredProducts.length === 0 ? <div className="h-96 flex flex-col items-center justify-center text-slate-400">
              <Package className="h-16 w-16 mb-4 text-slate-200" />
              <h3 className="text-h2 font-semibold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 mb-6 max-w-sm text-center">
                We couldn't find any products matching your filters. Try adjusting your search or add a new product.
              </p>
              <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setCategoryFilter('all');
            setStatusFilter('all');
          }}>
                Clear Filters
              </Button>
            </div> : <Table>
              <TableHeader className="bg-slate-50 hover:bg-slate-50">
                <TableRow className="border-slate-100">
                  <TableHead className="w-[100px] pl-6 py-4">Image</TableHead>
                  <TableHead className="py-4">Product Name</TableHead>
                  <TableHead className="py-4 hidden md:table-cell">Category</TableHead>
                  <TableHead className="py-4 hidden sm:table-cell">Status</TableHead>
                  <TableHead className="py-4 text-right">Price</TableHead>
                  <TableHead className="py-4 text-right pr-6 hidden md:table-cell">Stock</TableHead>
                  <TableHead className="w-[80px] py-4"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product, index) => <TableRow key={product.id} className="group hover:bg-slate-50/50 transition-colors border-slate-100">
                    <TableCell className="pl-6 py-3">
                      <div className="h-12 w-12 rounded-lg overflow-hidden border border-slate-200 bg-slate-100 relative">
                        {product.cover_image_url ? <EditableImg propKey={`product-thumb-${product.id}`} keywords={product.cover_image_url} // Direct URL usage as per instructions
                  className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center text-slate-300">
                            <ImageIcon className="h-6 w-6" />
                          </div>}
                      </div>
                    </TableCell>
                    <TableCell className="py-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-900 text-base line-clamp-1">{product.title}</span>
                        <span className="text-caption text-slate-500 font-mono text-xs pt-1">SKU: {product.sku}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-3 hidden md:table-cell">
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200">
                        {getCategoryName(product.category_id)}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-3 hidden sm:table-cell">
                      <div className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full ${product.status === 'active' ? 'bg-emerald-500' : product.status === 'out_of_stock' ? 'bg-amber-500' : 'bg-slate-300'}`} />
                        <span className="text-sm capitalize text-slate-700">
                           {product.status.replace(/_/g, ' ')}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right py-3 font-medium text-slate-900">
                      ${product.price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right pr-6 py-3 hidden md:table-cell">
                      <span className={`text-sm ${product.stock_quantity === 0 ? 'text-red-500 font-medium' : 'text-slate-600'}`}>
                        {product.stock_quantity}
                      </span>
                    </TableCell>
                    <TableCell className="py-3">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="h-4 w-4 text-slate-400" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-40">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={() => handleOpenEdit(product)} className="cursor-pointer">
                            <Pencil className="mr-2 h-4 w-4" /> Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => {
                      setProductToDelete(product);
                      setIsDeleteDialogOpen(true);
                    }} className="text-red-600 focus:text-red-600 cursor-pointer">
                            <Trash2 className="mr-2 h-4 w-4" /> Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>}
        </div>
      </div>

      {/* --- CRUD Drawer (Sheet) --- */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-full sm:max-w-xl md:max-w-2xl overflow-y-auto bg-white p-0 flex flex-col">
          <SheetHeader className="px-6 py-5 border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white">
                {editingProduct ? <Pencil className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </div>
              <div>
                <SheetTitle className="text-h2 text-slate-900">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </SheetTitle>
                <SheetDescription className="text-slate-500 mt-1">
                  {editingProduct ? 'Update product details, pricing, and inventory.' : 'Fill in the information to create a new product item.'}
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto px-6 py-6">
            <form id="product-form" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              {/* Image Upload Section */}
              <div className="space-y-4">
                 <Label className="text-base font-semibold text-slate-900">Cover Image</Label>
                 <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition-colors group relative">
                    <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <UploadCloud className="h-6 w-6" />
                    </div>
                    <div className="text-center mb-4">
                      <p className="text-sm font-medium text-slate-900">Upload product image</p>
                      <p className="text-xs text-slate-500 mt-1">Cloudinary widget upload (max 5MB, png/jpg/jpeg/webp)</p>
                    </div>
                    <Button type="button" variant="outline" className="max-w-sm" onClick={handleCloudinaryUpload}>
                      <UploadCloud className="h-4 w-4 mr-2" />
                      Upload with Cloudinary
                    </Button>
                    {!canUseCloudinary && <p className="text-xs text-amber-600 max-w-sm text-center">
                        Cloudinary env vars are missing. Use URL paste mode for now.
                      </p>}
                    {form.watch('cover_image_url') && <div className="mt-4 w-full max-w-sm">
                        <div className="relative w-full h-32 rounded-lg overflow-hidden border border-slate-200">
                          <img src={form.watch('cover_image_url')} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      </div>}
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="cover_image_url">Or paste image URL</Label>
                   <Input id="cover_image_url" {...form.register('cover_image_url')} placeholder="https://example.com/image.jpg" />
                   <p className="text-xs text-slate-500">Use HTTPS image URLs for production</p>
                   {form.watch('cover_image_url') && !isValidHttpUrl(form.watch('cover_image_url') || '') && <p className="text-xs text-red-500">Please enter a valid HTTP/HTTPS image URL.</p>}
                 </div>
              </div>

              {/* Carousel / Gallery Images Section */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <Label className="text-base font-semibold text-slate-900">Carousel / Gallery Images</Label>
                <p className="text-xs text-slate-500">Add multiple images for product gallery or carousel display</p>
                
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input id="carousel_image_input" placeholder="Enter image URL and click Add" onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      const input = e.currentTarget;
                      const url = input.value.trim();
                      if (url && isValidHttpUrl(url) && !carouselImages.includes(url)) {
                        setCarouselImages([...carouselImages, url]);
                        input.value = '';
                        toast.success('Image added to carousel');
                      } else if (url && !isValidHttpUrl(url)) {
                        toast.error('Please add a valid image URL');
                      }
                    }
                  }} />
                    <Button type="button" variant="outline" onClick={() => {
                    const input = document.getElementById('carousel_image_input') as HTMLInputElement;
                    const url = input?.value.trim();
                    if (url && isValidHttpUrl(url) && !carouselImages.includes(url)) {
                      setCarouselImages([...carouselImages, url]);
                      input.value = '';
                      toast.success('Image added to carousel');
                    } else if (url && !isValidHttpUrl(url)) {
                      toast.error('Please add a valid image URL');
                    }
                  }}>
                      <Plus className="h-4 w-4 mr-1" /> Add
                    </Button>
                    <Button type="button" variant="ghost" onClick={() => {
                    const cover = form.watch('cover_image_url')?.trim();
                    if (!cover || !isValidHttpUrl(cover)) {
                      toast.error('Set a valid cover image URL first.');
                      return;
                    }
                    if (!carouselImages.includes(cover)) {
                      setCarouselImages([...carouselImages, cover]);
                      toast.success('Cover image added to carousel.');
                    }
                  }}>
                      Use cover image
                    </Button>
                  </div>
                  
                  {carouselImages.length > 0 && <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                      {carouselImages.map((url, index) => <div key={index} className="relative group">
                          <div className="aspect-square rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                            <img src={url} alt={`Carousel ${index + 1}`} className="w-full h-full object-cover" onError={e => {
                        e.currentTarget.src = 'https://placehold.co/200x200/png?text=Invalid+Image';
                      }} />
                          </div>
                          <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2 h-7 w-7 p-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => {
                      setCarouselImages(carouselImages.filter((_, i) => i !== index));
                      toast.info('Image removed from carousel');
                    }}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>)}
                    </div>}
                  
                  {carouselImages.length === 0 && <div className="text-center py-8 border-2 border-dashed border-slate-200 rounded-lg bg-slate-50/30">
                      <ImageIcon className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                      <p className="text-sm text-slate-500">No carousel images added yet</p>
                    </div>}
                </div>
              </div>

              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                  <Tag className="h-4 w-4 text-blue-500" /> Basic Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Product Title</Label>
                    <Input id="title" {...form.register('title')} placeholder="e.g. Classic Coding Hoodie" />
                    {form.formState.errors.title && <p className="text-red-500 text-xs">{form.formState.errors.title.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" {...form.register('sku')} placeholder="e.g. HOOD-001" className="font-mono text-sm" />
                    {form.formState.errors.sku && <p className="text-red-500 text-xs">{form.formState.errors.sku.message}</p>}
                  </div>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="name">Internal Name</Label>
                    <Input id="name" {...form.register('name')} placeholder="System reference name" />
                    {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                  </div>
                <div className="space-y-2">
                    <Label>Category</Label>
                    <Controller control={form.control} name="category_id" render={({
                  field
                }) => <Select onValueChange={val => field.onChange(Number(val))} value={field.value ? field.value.toString() : ''}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                             {categories.map((c, index) => <SelectItem key={c.id} value={c.id.toString()}>{c.name}</SelectItem>)}
                          </SelectContent>
                        </Select>} />
                    {form.formState.errors.category_id && <p className="text-red-500 text-xs">{form.formState.errors.category_id.message}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description_short">Short Description</Label>
                  <Textarea id="description_short" {...form.register('description_short')} placeholder="Brief summary for list views..." className="h-20" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="description_long">Full Description</Label>
                  <Textarea id="description_long" {...form.register('description_long')} placeholder="Detailed product specifications..." className="h-32" />
                </div>
              </div>

              {/* Product Attributes */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                  <Package className="h-4 w-4 text-purple-500" /> Product Attributes
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="available_sizes">Available Sizes</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        {form.watch('available_sizes') || 'Select sizes...'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuLabel>Select Sizes</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {SIZES.map((size, index) => <DropdownMenuItem key={size} onSelect={e => e.preventDefault()} onClick={() => {
                      const newValue = toggleSelection(form.watch('available_sizes') || '', size);
                      form.setValue('available_sizes', newValue);
                    }} className="cursor-pointer">
                          {isSelected(form.watch('available_sizes') || '', size) && <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500" />}
                          <span className={isSelected(form.watch('available_sizes') || '', size) ? 'font-medium' : ''}>
                            {size}
                          </span>
                        </DropdownMenuItem>)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <p className="text-xs text-slate-500">Click to toggle size selection</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="available_colors">Available Colors</Label>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        {form.watch('available_colors') || 'Select colors...'}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-full">
                      <DropdownMenuLabel>Select Colors</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      {COLORS.map((color, index) => <DropdownMenuItem key={color} onSelect={e => e.preventDefault()} onClick={() => {
                      const newValue = toggleSelection(form.watch('available_colors') || '', color);
                      form.setValue('available_colors', newValue);
                    }} className="cursor-pointer">
                          {isSelected(form.watch('available_colors') || '', color) && <CheckCircle2 className="mr-2 h-4 w-4 text-blue-500" />}
                          <span className={isSelected(form.watch('available_colors') || '', color) ? 'font-medium' : ''}>
                            {color}
                          </span>
                        </DropdownMenuItem>)}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <p className="text-xs text-slate-500">Click to toggle color selection</p>
                </div>
              </div>

              {/* Pricing & Inventory */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-base font-semibold text-slate-900 flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-emerald-500" /> Pricing & Inventory
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($)</Label>
                    <Input id="price" type="number" step="0.01" {...form.register('price')} placeholder="0.00" />
                    {form.formState.errors.price && <p className="text-red-500 text-xs">{form.formState.errors.price.message}</p>}
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="sale_price">Sale Price ($)</Label>
                    <Input id="sale_price" type="number" step="0.01" {...form.register('sale_price')} placeholder="0.00" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="stock_quantity">Stock Quantity</Label>
                    <Input id="stock_quantity" type="number" {...form.register('stock_quantity')} placeholder="0" />
                    {form.formState.errors.stock_quantity && <p className="text-red-500 text-xs">{form.formState.errors.stock_quantity.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Status</Label>
                     <Controller control={form.control} name="status" render={({
                    field
                  }) => <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="inactive">Draft</SelectItem>
                            <SelectItem value="out_of_stock">Out of Stock</SelectItem>
                          </SelectContent>
                        </Select>} />
                  </div>
                </div>
              </div>

            </form>
          </div>

          <SheetFooter className="px-6 py-4 bg-slate-50 border-t border-slate-200">
            <SheetClose asChild>
              <Button variant="secondary" className="mr-2">Cancel</Button>
            </SheetClose>
            <Button type="submit" form="product-form" className="bg-slate-900 hover:bg-slate-800 text-white min-w-[120px]">
              {editingProduct ? 'Save Changes' : 'Create Product'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* --- Delete Confirmation Dialog --- */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <div className="mx-auto w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <DialogTitle className="text-center text-slate-900">Delete Product?</DialogTitle>
            <DialogDescription className="text-center pt-2">
              Are you sure you want to delete <span className="font-semibold text-slate-900">"{productToDelete?.title}"</span>? This action cannot be undone and will remove the product from your store permanently.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center gap-3 mt-4">
             <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} className="w-full sm:w-auto">
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete} className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
              Delete Product
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </section>;
}
