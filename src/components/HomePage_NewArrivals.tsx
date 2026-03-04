'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ShoppingBag, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { CardWithNoPadding } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EditableImg from "@/@base/EditableImg";
import { entities } from '@/tools/entities-proxy';
import type { product } from '@/server/entities.type';
import { toast } from 'sonner';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
export default function HomePage_NewArrivals() {
  const router = useRouter();
  const [products, setProducts] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<product | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 1. Data Fetching
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        // Fetch active products, simulating "New Arrivals" by taking the latest ones
        // In a real scenario, we might sort by created_at desc if the API supports it, 
        // here we just take the first 8 active products.
        const response = await entities.product.GetAll({
          status: {
            equals: 'active'
          }
        });

        // Slice to get top 8 for the carousel
        setProducts(response.slice(0, 8));
      } catch (error) {
        console.error('Failed to fetch products:', error);
        toast.error('Unable to load new arrivals.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // 2. GSAP Animations for Entry
  useEffect(() => {
    if (!isLoading && products.length > 0 && containerRef.current) {
      const ctx = gsap.context(() => {
        // Staggered entry animation for cards
        gsap.fromTo(cardsRef.current, {
          y: 40,
          opacity: 0
        }, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%"
          }
        });
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isLoading, products]);

  // 3. Hover Animation Logic (GSAP)
  const handleMouseEnter = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const imgContainer = card.querySelector('.product-img-container');
    const actionOverlay = card.querySelector('.action-overlay');
    const content = card.querySelector('.product-content');

    // Image Zoom
    if (imgContainer) {
      gsap.to(imgContainer, {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out"
      });
    }
    // Overlay Fade In
    if (actionOverlay) {
      gsap.to(actionOverlay, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    // Content Lift (Subtle)
    if (content) {
      gsap.to(content, {
        y: -4,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };
  const handleMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    const imgContainer = card.querySelector('.product-img-container');
    const actionOverlay = card.querySelector('.action-overlay');
    const content = card.querySelector('.product-content');
    if (imgContainer) {
      gsap.to(imgContainer, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out"
      });
    }
    if (actionOverlay) {
      gsap.to(actionOverlay, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        ease: "power2.out"
      });
    }
    if (content) {
      gsap.to(content, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  // 4. Navigation Handlers
  const handleProductClick = (productId: number) => {
    router.push(`/productdetailpage?productId=${productId}`);
  };
  const handleViewAllClick = () => {
    router.push('/productlistpage');
  };

  // 5. Carousel Navigation
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 344; // card width (320px) + gap (24px)
    const newScrollLeft = carouselRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  // 6. Add to Cart Handler
  const handleAddToCart = (product: product, e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    toast.success(`Added "${product.title}" to cart`);
  };

  // 7. Quick View Handler
  const handleQuickView = (product: product, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedProduct(product);
  };

  // 8. Render Loading or Empty State
  if (isLoading) {
    return <section className="w-full bg-white py-20">
        <div className="container mx-auto px-8">
          <div className="h-10 w-48 bg-slate-100 animate-pulse rounded mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => <div key={index} className="h-[400px] w-full bg-slate-50 animate-pulse rounded-xl" />)}
          </div>
        </div>
      </section>;
  }
  if (products.length === 0) {
    return null; // Don't render empty section
  }
  return <section ref={containerRef} className="w-full bg-white py-16 md:py-24 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-h1 text-slate-900 mb-2">New Arrivals</h2>
            <p className="text-base text-slate-500">
              Discover the latest coding-themed apparel fresh from our design studio.
            </p>
          </div>
          <Button onClick={handleViewAllClick} variant="ghost" className="group text-slate-900 hover:text-blue-600 hover:bg-slate-50 transition-colors duration-200">
            <span className="text-base font-semibold mr-2">View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Product Carousel / Scroll Container */}
        <div className="relative -mx-4 px-4 md:mx-0 md:px-0">
          {/* Carousel Navigation Buttons */}
          <button onClick={() => scrollCarousel('left')} className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors duration-200 border border-slate-200" aria-label="Previous products">
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <button onClick={() => scrollCarousel('right')} className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-3 hover:bg-slate-50 transition-colors duration-200 border border-slate-200" aria-label="Next products">
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>

          <div ref={carouselRef} className="flex flex-nowrap overflow-x-auto scroll-smooth snap-x snap-mandatory gap-6 pb-12 pt-4 hide-scrollbar">
            {products.map((product, index) => <div key={product.id} ref={el => {
            if (el) cardsRef.current[index] = el;
          }} className="flex-shrink-0 w-[280px] md:w-[320px] snap-start" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                <CardWithNoPadding className="h-full bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden cursor-pointer group" onClick={() => handleProductClick(product.id)}>
                  {/* Image Area */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                    <div className="product-img-container w-full h-full transform-gpu will-change-transform">
                      <EditableImg propKey={`product-card-img-${product.id}`} keywords={product.cover_image_url || `${product.title} clothing`} description={`Product image for ${product.title}, styling suitable for coding themed apparel.`} className="w-full h-full object-cover object-center" />
                    </div>

                    {/* Badge */}
                    {product.sale_price && <div className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Sale
                      </div>}
                    
                    {/* Hover Overlay Actions */}
                    <div className="action-overlay absolute inset-0 bg-slate-900/10 opacity-0 translate-y-2 flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-[1px] z-20">
                      <div className="relative bg-white p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-200 cursor-pointer" onClick={e => handleQuickView(product, e)}>
                        <Eye className="w-5 h-5" />
                      </div>
                      <div className="relative bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition-colors duration-200 cursor-pointer" onClick={e => handleAddToCart(product, e)}>
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="product-content p-5 bg-white relative z-10 transition-transform duration-300">
                    <h3 className="text-h3 text-slate-900 line-clamp-1 mb-1 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 mt-2">
                      {product.sale_price ? <>
                          <span className="text-lg font-bold text-red-600">
                            DH {product.sale_price.toFixed(2)}
                          </span>
                          <span className="text-sm text-slate-400 line-through">
                            DH {product.price.toFixed(2)}
                          </span>
                        </> : <span className="text-lg font-bold text-slate-900">
                          DH {product.price.toFixed(2)}
                        </span>}
                    </div>

                    {product.available_colors && <div className="mt-3 text-caption text-slate-500">
                        {product.available_colors.split(',').length} colors available
                      </div>}
                  </div>
                </CardWithNoPadding>
              </div>)}
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      {selectedProduct && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="relative">
              {/* Close Button */}
              <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors" aria-label="Close modal">
                <X className="w-5 h-5 text-slate-700" />
              </button>

              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
                {/* Product Image */}
                <div className="relative aspect-[4/5] bg-slate-100 rounded-xl overflow-hidden">
                  <EditableImg propKey={`modal-product-img-${selectedProduct.id}`} keywords={selectedProduct.cover_image_url || `${selectedProduct.title} clothing`} description={`Product image for ${selectedProduct.title}`} className="w-full h-full object-cover object-center" />
                  {selectedProduct.sale_price && <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                      Sale
                    </div>}
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-3">
                      {selectedProduct.title}
                    </h2>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-6">
                      {selectedProduct.sale_price ? <>
                          <span className="text-2xl font-bold text-red-600">
                            DH {selectedProduct.sale_price.toFixed(2)}
                          </span>
                          <span className="text-lg text-slate-400 line-through">
                            DH {selectedProduct.price.toFixed(2)}
                          </span>
                        </> : <span className="text-2xl font-bold text-slate-900">
                          DH {selectedProduct.price.toFixed(2)}
                        </span>}
                    </div>

                    {/* Description */}
                    {(selectedProduct.description_long || selectedProduct.description_short) && <div className="mb-6">
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
                          Description
                        </h3>
                        <p className="text-slate-600 leading-relaxed line-clamp-4">
                          {selectedProduct.description_long || selectedProduct.description_short}
                        </p>
                      </div>}

                    {/* Available Sizes */}
                    {selectedProduct.available_sizes && <div className="mb-6">
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                          Available Sizes
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.available_sizes.split(',').map((size, index) => <div key={index} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-colors cursor-pointer">
                              {size.trim()}
                            </div>)}
                        </div>
                      </div>}

                    {/* Available Colors */}
                    {selectedProduct.available_colors && <div className="mb-6">
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                          Available Colors
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProduct.available_colors.split(',').map((color, index) => <div key={index} className="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-colors cursor-pointer">
                              {color.trim()}
                            </div>)}
                        </div>
                      </div>}
                  </div>

                  {/* Add to Cart Button */}
                  <Button onClick={() => handleAddToCart(selectedProduct)} className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 text-lg font-semibold rounded-xl transition-colors duration-200 flex items-center justify-center gap-3">
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>}
      
      {/* Hide Scrollbar CSS Utility */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>;
}
