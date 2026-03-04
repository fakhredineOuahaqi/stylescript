'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import gsap from 'gsap';
import { Loader2, Minus, Plus, ShoppingBag, Heart, Share2, Check, AlertCircle, Truck, ShieldCheck, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CardWithNoPadding } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import EditableImg from '@/@base/EditableImg';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import type { product, cart_item_without_PKs } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';

// --- Types & Schemas ---

const addToCartSchema = z.object({
  quantity: z.number().min(1, 'Quantity must be at least 1'),
  selected_size: z.string().min(1, 'Please select a size'),
  selected_color: z.string().min(1, 'Please select a color')
});
type AddToCartFormValues = z.infer<typeof addToCartSchema>;

// --- Components ---

export default function ProductDetailPage_MainViewer() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const router = useRouter();
  const [productData, setProductData] = useState<product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0
  });
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Form setup
  const form = useForm<AddToCartFormValues>({
    resolver: zodResolver(addToCartSchema),
    defaultValues: {
      quantity: 1,
      selected_size: '',
      selected_color: ''
    }
  });
  const {
    watch,
    setValue,
    handleSubmit,
    formState: {
      errors
    }
  } = form;
  const currentQuantity = watch('quantity');
  const currentSize = watch('selected_size');
  const currentColor = watch('selected_color');

  // --- Data Fetching ---

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Ensure ID is a number
        const id = parseInt(productId, 10);
        if (isNaN(id)) {
          toast.error('Invalid product ID');
          setLoading(false);
          return;
        }
        const data = await entities.product.Get({
          id
        });
        if (data) {
          setProductData(data);
          // Set default color if available
          const colors = data.available_colors ? data.available_colors.split('|') : [];
          if (colors.length > 0) setValue('selected_color', colors[0]);
        }
      } catch (error) {
        console.error('Failed to fetch product:', error);
        toast.error('Failed to load product details.');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId, setValue]);

  // --- Animation ---
  useEffect(() => {
    if (!loading && productData) {
      gsap.fromTo('.product-content-animate', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }
  }, [loading, productData]);

  // --- Event Handlers ---

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    const {
      left,
      top,
      width,
      height
    } = mainImageRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width * 100;
    const y = (e.clientY - top) / height * 100;
    setZoomPosition({
      x,
      y
    });
  };
  const handleAddToCart = async (values: AddToCartFormValues) => {
    setIsAddingToCart(true);
    try {
      const session = getuser_session();

      // CASE A: Require Login for Purchase
      if (!session || !session.userId) {
        toast.error('Please login to add items to cart', {
          action: {
            label: 'Login',
            onClick: () => router.push('/login?redirect=' + encodeURIComponent(window.location.pathname + window.location.search))
          }
        });
        return;
      }
      const userId = parseInt(session.userId, 10);
      if (isNaN(userId)) {
        toast.error('Session error. Please re-login.');
        return;
      }

      // 1. Get or Create Cart
      let cartId: number | null = null;

      // Try to find an existing active cart for the user (Simplified logic: assuming 1 active cart per user)
      const existingCarts = await entities.cart.GetAll({
        user_id: {
          equals: userId
        }
      });

      // Sort to get the latest cart if multiple exist (though ideally should be handled by backend status)
      // For this simplified logic, we take the last created one or create new.
      let currentCart = existingCarts.length > 0 ? existingCarts[existingCarts.length - 1] : null;
      if (!currentCart) {
        currentCart = await entities.cart.Create({
          user_id: userId,
          subtotal_price: 0,
          total_price: 0,
          shipping_fee: 0,
          // Default shipping
          created_at: new Date(),
          updated_at: new Date()
        });
      }
      if (!currentCart) throw new Error('Failed to initialize cart');
      cartId = currentCart.id;

      // 2. Add Item to Cart
      if (!productData) return;
      const newItem: cart_item_without_PKs = {
        cart_id: cartId,
        product_id: productData.id,
        quantity: values.quantity,
        unit_price: productData.sale_price || productData.price,
        selected_size: values.selected_size,
        selected_color: values.selected_color,
        created_at: new Date(),
        updated_at: new Date()
      };
      await entities.cart_item.Create(newItem);

      // 3. Update Cart Totals (Simplified: In a real app, backend triggers or separate calculation service would handle this)
      // Here we just acknowledge the add.

      toast.success(`${productData.name} added to cart!`);

      // Optional: Refresh cart state in global context if exists
      // setGlobalCartState(...)
    } catch (error) {
      console.error('Add to cart failed:', error);
      toast.error('Failed to add item to cart. Please try again.');
    } finally {
      setIsAddingToCart(false);
    }
  };

  // --- Helper Functions ---

  const getImageList = () => {
    if (!productData) return [];
    const list = productData.image_url_list ? productData.image_url_list.split('|') : [];
    // Ensure cover image is first if not already in list or as fallback
    if (productData.cover_image_url && !list.includes(productData.cover_image_url)) {
      return [productData.cover_image_url, ...list];
    }
    return list.length > 0 ? list : [productData.cover_image_url || ''];
  };
  const images = getImageList().filter(Boolean) as string[];
  const sizes = productData?.available_sizes ? productData.available_sizes.split('|') : [];
  const colors = productData?.available_colors ? productData.available_colors.split('|') : [];

  // --- Render States ---

  if (loading) {
    return <div className="w-full min-h-[600px] flex items-center justify-center bg-white">
        <Loader2 className="w-10 h-10 animate-spin text-slate-900" />
      </div>;
  }
  if (!productData) {
    return <div className="w-full min-h-[600px] flex flex-col items-center justify-center bg-white gap-4">
        <h2 className="text-h3 text-slate-900">Product Not Found</h2>
        <p className="text-secondary text-slate-500">The product you are looking for does not exist or has been removed.</p>
        <Button onClick={() => router.push('/')} variant="outline">Back to Home</Button>
      </div>;
  }

  // Calculate discount percentage
  const discountPercentage = productData.compare_at_price && productData.sale_price ? Math.round((productData.compare_at_price - productData.sale_price) / productData.compare_at_price * 100) : 0;
  return <section className="w-full bg-white text-slate-900">
      <div className="container mx-auto px-4 md:px-8 py-10 lg:py-16">
        
        {/* Breadcrumbs Placeholder (Optional but good for UX) */}
        <div className="text-sm text-slate-500 mb-6 flex items-center gap-2">
          <span className="cursor-pointer hover:text-slate-900 transition-colors" onClick={() => router.push('/')}>Home</span>
          <span>/</span>
          <span className="cursor-pointer hover:text-slate-900 transition-colors">Shop</span>
          <span>/</span>
          <span className="text-slate-900 font-medium">{productData.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">
          
          {/* Left Column: Image Gallery */}
          <div className="flex flex-col gap-4">
            {/* Main Image Viewer */}
            <div ref={mainImageRef} className="relative w-full aspect-[4/5] bg-slate-50 rounded-xl overflow-hidden border border-slate-100 group cursor-crosshair" onMouseEnter={() => setIsZoomed(true)} onMouseLeave={() => setIsZoomed(false)} onMouseMove={handleMouseMove}>
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                 {productData.status === 'out_of_stock' && <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Sold Out
                    </span>}
                 {discountPercentage > 0 && <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      -{discountPercentage}%
                    </span>}
              </div>

              {/* Normal Image */}
              <div className={`w-full h-full transition-opacity duration-300 ${isZoomed ? 'opacity-0' : 'opacity-100'}`}>
                <EditableImg propKey={`product-main-${productData.id}-${activeImageIndex}`} keywords={images[activeImageIndex] || `${productData.title} coding merch`} className="w-full h-full object-cover object-center" alt={productData.name} needLargeImage={true} description={`Detailed shot of ${productData.name}, showing fabric texture and design details.`} />
              </div>

              {/* Zoomed Image Overlay */}
              {isZoomed && images[activeImageIndex] && <div className="absolute inset-0 w-full h-full pointer-events-none bg-no-repeat z-10" style={{
              backgroundImage: `url(${images[activeImageIndex]})`,
              // Note: In real scenarios, use a high-res version if available
              backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
              backgroundSize: '250%'
            }} />}
            </div>

            {/* Thumbnail Grid */}
            {images.length > 1 && <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {images.map((img, index) => <button key={index} onClick={() => setActiveImageIndex(index)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${activeImageIndex === index ? 'border-slate-900 ring-2 ring-slate-900/10' : 'border-transparent hover:border-slate-300'}`}>
                     <EditableImg propKey={`product-thumb-${productData.id}-${index}`} keywords={img || `${productData.title} view ${index}`} className="w-full h-full object-cover" alt={`Thumbnail ${index + 1}`} />
                  </button>)}
              </div>}
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col h-full">
            <div className="product-content-animate flex flex-col gap-1 mb-4">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
                {productData.sku || 'Kaira Collection'}
              </h3>
              <h1 className="text-h1 text-slate-900 font-bold leading-tight">
                {productData.name}
              </h1>
            </div>

            <div className="product-content-animate flex items-center gap-4 mb-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-slate-900">
                  ${(productData.sale_price || productData.price).toFixed(2)}
                </span>
                {productData.compare_at_price && productData.compare_at_price > (productData.sale_price || productData.price) && <span className="text-xl text-slate-400 line-through">
                    ${productData.compare_at_price.toFixed(2)}
                  </span>}
              </div>
              
              {/* Rating Placeholder */}
              <div className="flex items-center gap-1 text-sm text-slate-600 border-l border-slate-200 pl-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, index) => <span key={index}>{star}</span>)}
                </div>
                <span className="ml-1 text-slate-400">(42 Reviews)</span>
              </div>
            </div>

            <div className="product-content-animate mb-8 text-base text-slate-600 leading-relaxed">
              {productData.description_short || 'Elevate your coding sessions with this premium hoodie. Designed for developers who value comfort and style while debugging until 3 AM.'}
            </div>

            <Separator className="mb-8" />

            {/* Selection Form */}
            <div className="product-content-animate flex-1">
              {/* Colors */}
              {colors.length > 0 && <div className="mb-6">
                   <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-slate-900">Color: <span className="text-slate-500 font-normal">{currentColor}</span></span>
                   </div>
                   <div className="flex flex-wrap gap-3">
                      {colors.map((color, index) => <TooltipProvider key={color}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button type="button" onClick={() => setValue('selected_color', color)} className={`w-10 h-10 rounded-full border border-slate-200 shadow-sm flex items-center justify-center transition-all ${currentColor === color ? 'ring-2 ring-slate-900 ring-offset-2 scale-110' : 'hover:scale-105'}`} style={{
                        backgroundColor: color.toLowerCase()
                      }} aria-label={`Select ${color}`}>
                                {currentColor === color && <Check className={`w-5 h-5 ${['white', '#ffffff', 'cream'].includes(color.toLowerCase()) ? 'text-slate-900' : 'text-white'}`} />}
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{color}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>)}
                   </div>
                   {errors.selected_color && <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                       <AlertCircle className="w-3 h-3" /> {errors.selected_color.message}
                     </p>}
                </div>}

              {/* Sizes */}
              {sizes.length > 0 && <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                      <span className="text-sm font-medium text-slate-900">Size: <span className="text-slate-500 font-normal">{currentSize}</span></span>
                      {productData.size_chart_url && <button type="button" className="text-xs text-blue-600 underline hover:text-blue-800 transition-colors">
                          Size Guide
                        </button>}
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                    {sizes.map((size, index) => <button key={size} type="button" onClick={() => setValue('selected_size', size)} className={`h-12 border rounded-lg text-sm font-medium transition-all ${currentSize === size ? 'border-slate-900 bg-slate-900 text-white shadow-md' : 'border-slate-200 text-slate-700 hover:border-slate-400 hover:bg-slate-50'}`}>
                        {size}
                      </button>)}
                  </div>
                  {errors.selected_size && <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                       <AlertCircle className="w-3 h-3" /> {errors.selected_size.message}
                     </p>}
                </div>}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {/* Quantity */}
                <div className="flex items-center border border-slate-200 rounded-lg h-12 w-full sm:w-32 bg-white">
                  <button type="button" className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-l-lg transition-colors" onClick={() => setValue('quantity', Math.max(1, currentQuantity - 1))}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <input type="number" readOnly className="flex-1 w-full text-center border-none bg-transparent text-slate-900 font-medium focus:ring-0" value={currentQuantity} />
                  <button type="button" className="w-10 h-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-r-lg transition-colors" onClick={() => setValue('quantity', currentQuantity + 1)}>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Add to Cart */}
                <Button onClick={handleSubmit(handleAddToCart)} disabled={isAddingToCart || productData.status === 'out_of_stock'} className="flex-1 h-12 text-base shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed">
                  {isAddingToCart ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <ShoppingBag className="w-5 h-5 mr-2" />}
                  {productData.status === 'out_of_stock' ? 'Out of Stock' : 'Add to Cart'}
                </Button>

                {/* Wishlist / Share */}
                <div className="flex gap-2">
                   <Button variant="outline" className="h-12 w-12 px-0 rounded-lg border-slate-200 hover:bg-slate-50 text-slate-600">
                      <Heart className="w-5 h-5" />
                   </Button>
                   <Button variant="outline" className="h-12 w-12 px-0 rounded-lg border-slate-200 hover:bg-slate-50 text-slate-600">
                      <Share2 className="w-5 h-5" />
                   </Button>
                </div>
              </div>
            </div>

            {/* Extra Info Accordion */}
            <div className="product-content-animate mt-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="features">
                  <AccordionTrigger className="text-sm font-medium text-slate-900 hover:no-underline hover:text-blue-600">
                    <span className="flex items-center gap-3">
                       <ShieldCheck className="w-4 h-4 text-blue-500" /> Features & Material
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed">
                    {productData.material_info || '100% Cotton, Pre-shrunk, Bio-washed. High quality print that lasts up to 50 washes.'}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-sm font-medium text-slate-900 hover:no-underline hover:text-blue-600">
                    <span className="flex items-center gap-3">
                       <Truck className="w-4 h-4 text-blue-500" /> Shipping Information
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed">
                    Free standard shipping on all orders over $50. Estimated delivery within 3-5 business days across Morocco.
                  </AccordionContent>
                </AccordionItem>
                 <AccordionItem value="returns">
                  <AccordionTrigger className="text-sm font-medium text-slate-900 hover:no-underline hover:text-blue-600">
                    <span className="flex items-center gap-3">
                       <RotateCcw className="w-4 h-4 text-blue-500" /> Returns Policy
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-sm leading-relaxed">
                     30-day return policy. Items must be unworn and in original condition with tags attached.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>
    </section>;
}
