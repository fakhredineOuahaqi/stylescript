'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Plus, Search, Edit2, Trash2, MoreHorizontal, Loader2, Package, Eye, EyeOff, Image as ImageIcon, FolderOpen } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import EditableImg from "@/@base/EditableImg";
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import type { category, category_without_PKs } from '@/server/entities.type';

// --- Validation Schema ---
const categoryFormSchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  slug: z.string().min(1, 'Slug is required').regex(/^[a-z0-9-]+$/, 'Slug must be lowercase, numbers, and hyphens only'),
  description: z.string().optional(),
  cover_image_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  is_visible: z.boolean().default(true)
});
type CategoryFormValues = z.input<typeof categoryFormSchema>;

// --- Components ---

export default function CategoryManagementPage_MainManager() {
  // --- State ---
  const [categories, setCategories] = useState<category[]>([]);
  const [productCounts, setProductCounts] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Dialog States
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<category | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // --- Data Fetching ---
  const fetchCategories = useCallback(async () => {
    try {
      setLoading(true);
      const session = getadmin_session();
      if (!session || !session.token) {
        toast.error('Unauthorized access. Please login.');
        setLoading(false);
        return;
      }

      // 1. Fetch Categories
      const fetchedCategories = await entities.category.GetAll({
        name: searchTerm ? {
          contains: searchTerm
        } : undefined
      });

      // 2. Fetch Product Counts for each category (Parallel)
      // Note: In a real large-scale app, this should be an aggregation query on backend.
      // Here we simulate it by fetching counts individually as per provided CRUD constraints.
      const counts: Record<number, number> = {};
      await Promise.all(fetchedCategories.map(async (cat, index) => {
        const count = await entities.product.Count({
          category_id: {
            equals: cat.id
          }
        });
        counts[cat.id] = count;
      }));
      setCategories(fetchedCategories);
      setProductCounts(counts);
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      toast.error('Failed to load categories data.');
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    // Debounce search
    const timer = setTimeout(() => {
      fetchCategories();
    }, 500);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // --- Handlers ---

  const handleCreate = () => {
    setCurrentCategory(null);
    setIsAddDialogOpen(true);
  };
  const handleEdit = (category: category) => {
    setCurrentCategory(category);
    setIsAddDialogOpen(true);
  };
  const handleDeleteClick = (category: category) => {
    setCurrentCategory(category);
    setIsDeleteDialogOpen(true);
  };
  const handleConfirmDelete = async () => {
    if (!currentCategory) return;
    setIsSubmitting(true);
    try {
      await entities.category.Delete({
        id: currentCategory.id
      });
      toast.success('Category deleted successfully');
      setIsDeleteDialogOpen(false);
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error('Failed to delete category. It might contain products.');
    } finally {
      setIsSubmitting(false);
      setCurrentCategory(null);
    }
  };
  const handleFormSubmit = async (values: CategoryFormValues) => {
    setIsSubmitting(true);
    try {
      const payload: category_without_PKs = {
        name: values.name,
        slug: values.slug,
        description: values.description || null,
        cover_image_url: values.cover_image_url || null,
        is_visible: values.is_visible ?? true,
        created_at: currentCategory ? currentCategory.created_at : new Date(),
        updated_at: new Date()
      };
      if (currentCategory) {
        // Update
        await entities.category.Update({
          where: {
            id: currentCategory.id
          },
          data: payload
        });
        toast.success('Category updated successfully');
      } else {
        // Create
        await entities.category.Create(payload);
        toast.success('Category created successfully');
      }
      setIsAddDialogOpen(false);
      fetchCategories();
    } catch (error) {
      console.error(error);
      toast.error('Operation failed. Please check your inputs.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="w-full min-h-screen bg-slate-50/50">
      <div className="container mx-auto px-6 py-10 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-h2 font-semibold text-slate-900">Category Management</h1>
            <p className="text-base text-slate-500 mt-1">
              Organize your store's structure and manage product classifications.
            </p>
          </div>
          <Button onClick={handleCreate} className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all hover:shadow-md">
            <Plus className="mr-2 h-4 w-4" />
            Add Category
          </Button>
        </div>

        {/* Main Content Card */}
        <Card className="border-slate-200 shadow-sm bg-white overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-white px-6 py-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search categories..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-9 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
              </div>
              {/* Optional: Add Filters here if needed later */}
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="border-slate-100 hover:bg-slate-50">
                  <TableHead className="w-[80px] text-xs font-semibold uppercase text-slate-500 pl-6">Icon</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-slate-500">Name & Slug</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-slate-500">Products</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-slate-500">Status</TableHead>
                  <TableHead className="text-xs font-semibold uppercase text-slate-500">Last Updated</TableHead>
                  <TableHead className="w-[80px] text-right text-xs font-semibold uppercase text-slate-500 pr-6">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ?
              // Loading Skeleton
              Array.from({
                length: 5
              }).map((_, index) => <TableRow key={index} className="border-slate-100">
                      <TableCell className="pl-6"><div className="h-10 w-10 rounded-lg bg-slate-100 animate-pulse" /></TableCell>
                      <TableCell>
                        <div className="h-4 w-32 bg-slate-100 rounded animate-pulse mb-2" />
                        <div className="h-3 w-20 bg-slate-100 rounded animate-pulse" />
                      </TableCell>
                      <TableCell><div className="h-4 w-8 bg-slate-100 rounded animate-pulse" /></TableCell>
                      <TableCell><div className="h-6 w-16 bg-slate-100 rounded-full animate-pulse" /></TableCell>
                      <TableCell><div className="h-4 w-24 bg-slate-100 rounded animate-pulse" /></TableCell>
                      <TableCell className="pr-6"><div className="h-8 w-8 bg-slate-100 rounded ml-auto animate-pulse" /></TableCell>
                    </TableRow>) : categories.length === 0 ?
              // Empty State
              <TableRow>
                    <TableCell colSpan={6} className="h-[400px] text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <FolderOpen className="h-12 w-12 mb-4 text-slate-300" />
                        <h3 className="text-lg font-medium text-slate-900">No categories found</h3>
                        <p className="text-sm mt-1 mb-4 max-w-xs">
                          {searchTerm ? `No results for "${searchTerm}"` : "Get started by creating your first product category."}
                        </p>
                        {!searchTerm && <Button variant="outline" onClick={handleCreate}>
                            Create New Category
                          </Button>}
                      </div>
                    </TableCell>
                  </TableRow> :
              // Data Rows
              categories.map((category, index) => <TableRow key={category.id} className="group border-slate-100 hover:bg-slate-50/50 transition-colors">
                      <TableCell className="pl-6 py-4">
                        <div className="h-10 w-10 rounded-lg overflow-hidden border border-slate-200 bg-white relative">
                          {category.cover_image_url ? <EditableImg propKey={`category_icon_${category.id}`} keywords={category.cover_image_url} description={`Icon for ${category.name} category`} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-slate-50 text-slate-300">
                              <ImageIcon className="h-4 w-4" />
                            </div>}
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-slate-900 text-sm">{category.name}</span>
                          <span className="text-xs text-slate-500 font-mono mt-0.5">/{category.slug}</span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                        <div className="flex items-center gap-2">
                          <Package className="h-3.5 w-3.5 text-slate-400" />
                          <span className="text-sm text-slate-600 font-medium">
                            {productCounts[category.id] || 0}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-4">
                         {category.is_visible ? <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100 px-2.5 py-0.5 font-medium">
                             Active
                           </Badge> : <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 border-slate-200 px-2.5 py-0.5 font-medium">
                             Hidden
                           </Badge>}
                      </TableCell>
                      <TableCell className="py-4">
                        <span className="text-sm text-slate-500">
                          {new Date(category.updated_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                        </span>
                      </TableCell>
                      <TableCell className="pr-6 py-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-slate-100 data-[state=open]:bg-slate-100">
                              <MoreHorizontal className="h-4 w-4 text-slate-500" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-[160px]">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleEdit(category)} className="cursor-pointer">
                              <Edit2 className="mr-2 h-3.5 w-3.5 text-slate-500" />
                              Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDeleteClick(category)} className="text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer">
                              <Trash2 className="mr-2 h-3.5 w-3.5" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>)}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Add / Edit Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden gap-0">
          <DialogHeader className="p-6 pb-4 border-b border-slate-100 bg-slate-50/50">
            <DialogTitle className="text-h2 text-slate-900">
              {currentCategory ? 'Edit Category' : 'Create New Category'}
            </DialogTitle>
            <DialogDescription className="text-caption text-slate-500">
              {currentCategory ? 'Update existing category details.' : 'Add a new product category to your store.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="p-6">
            <CategoryForm defaultValues={currentCategory || undefined} onSubmit={handleFormSubmit} isSubmitting={isSubmitting} onCancel={() => setIsAddDialogOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-600">
              <Trash2 className="h-5 w-5" />
              Delete Category
            </DialogTitle>
            <DialogDescription className="pt-2">
              Are you sure you want to delete <span className="font-semibold text-slate-900">"{currentCategory?.name}"</span>? 
              This action cannot be undone and will affect products linked to this category.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-4 gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete} disabled={isSubmitting} className="bg-red-600 hover:bg-red-700">
              {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Delete Category
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

    </div>;
}

// --- Sub-components for Cleaner Code ---

interface CategoryFormProps {
  defaultValues?: category;
  onSubmit: (values: CategoryFormValues) => void;
  isSubmitting: boolean;
  onCancel: () => void;
}
function CategoryForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  onCancel
}: CategoryFormProps) {
  const form = useForm<CategoryFormValues>({
    resolver: zodResolver(categoryFormSchema) as Resolver<CategoryFormValues>,
    defaultValues: {
      name: defaultValues?.name || '',
      slug: defaultValues?.slug || '',
      description: defaultValues?.description || '',
      cover_image_url: defaultValues?.cover_image_url || '',
      is_visible: defaultValues?.is_visible ?? true
    }
  });

  // Auto-generate slug from name if slug is untouched
  const {
    watch,
    setValue,
    getValues,
    formState: {
      touchedFields
    }
  } = form;
  const watchedName = watch("name");
  React.useEffect(() => {
    if (watchedName && !touchedFields.slug && !defaultValues) {
      const slug = watchedName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setValue("slug", slug);
    }
  }, [watchedName, touchedFields.slug, setValue, defaultValues]);
  return <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        
        <div className="grid grid-cols-2 gap-4">
          <FormField control={form.control} name="name" render={({
          field
        }) => <FormItem className="col-span-2">
                <FormLabel className="text-slate-700">Category Name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Hoodies" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="slug" render={({
          field
        }) => <FormItem className="col-span-2 sm:col-span-1">
                <FormLabel className="text-slate-700">URL Slug</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. hoodies" {...field} className="font-mono text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>} />

          <FormField control={form.control} name="is_visible" render={({
          field
        }) => <FormItem className="col-span-2 sm:col-span-1 flex flex-col justify-end">
                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3 bg-slate-50/50 h-[42px]">
                  <FormLabel className="text-slate-700 text-sm m-0 cursor-pointer flex items-center gap-2">
                     {field.value ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                     {field.value ? 'Visible on store' : 'Hidden from store'}
                  </FormLabel>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </div>
              </FormItem>} />
        </div>

        <FormField control={form.control} name="description" render={({
        field
      }) => <FormItem>
              <FormLabel className="text-slate-700">Description (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Short description for SEO..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>} />

        <FormField control={form.control} name="cover_image_url" render={({
        field
      }) => <FormItem>
              <FormLabel className="text-slate-700">Icon Image URL</FormLabel>
              <FormControl>
                <div className="flex gap-3">
                  <Input placeholder="https://..." {...field} className="flex-1" />
                  <div className="h-10 w-10 shrink-0 rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden">
                    {field.value ?
              // eslint-disable-next-line @next/next/no-img-element
              <img src={field.value} alt="Preview" className="h-full w-full object-cover" /> : <ImageIcon className="h-4 w-4 text-slate-300" />}
                  </div>
                </div>
              </FormControl>
              <FormDescription className="text-xs">
                Provide a direct URL for the category icon (SVG or PNG recommended).
              </FormDescription>
              <FormMessage />
            </FormItem>} />

        <div className="flex justify-end gap-3 pt-2">
          <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting} className="bg-slate-900 text-white hover:bg-slate-800 min-w-[100px]">
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : defaultValues ? 'Save Changes' : 'Create Category'}
          </Button>
        </div>
      </form>
    </Form>;
}
