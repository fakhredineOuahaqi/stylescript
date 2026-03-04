'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CardWithNoPadding } from '@/components/ui/card';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import type { product } from '@/server/entities.type';
import { Loader2 } from 'lucide-react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
export default function ProductDetailPage_RelatedProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentProductId = searchParams.get('productId');
  const containerRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Data Fetching Logic
  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        setIsLoading(true);
        let targetCategoryId: number | undefined = undefined;
        const currentIdNum = currentProductId ? parseInt(currentProductId) : NaN;

        // 1. Identify context (Category of current product)
        if (!isNaN(currentIdNum)) {
          const currentProduct = await entities.product.Get({
            id: currentIdNum
          });
          if (currentProduct) {
            targetCategoryId = currentProduct.category_id;
          }
        }

        // 2. Fetch Candidates
        // Prioritize same category, exclude current item
        const queryFilter: any = {
          status: {
            equals: 'active'
          } // Ensure we only show active products
        };
        if (targetCategoryId !== undefined) {
          queryFilter.category_id = {
            equals: targetCategoryId
          };
        }
        if (!isNaN(currentIdNum)) {
          queryFilter.id = {
            not: currentIdNum
          };
        }

        // Fetch page 1, limit 4 for grid
        const result = await entities.product.GetPage(1, 4, queryFilter);

        // 3. Fallback Mechanism
        // If category filter yields too few results, fetch general latest products
        if (!result || result.length === 0) {
          const fallbackResult = await entities.product.GetPage(1, 4, {
            status: {
              equals: 'active'
            },
            id: {
              not: isNaN(currentIdNum) ? undefined : currentIdNum
            }
          });
          setProducts(fallbackResult);
        } else {
          setProducts(result);
        }
      } catch (error) {
        console.error('Failed to load related products:', error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRelatedProducts();
  }, [currentProductId]);

  // Animation Logic
  useEffect(() => {
    if (!isLoading && products.length > 0 && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.product-card-item');

      // Reset state ensures cleanliness before animation
      gsap.set(cards, {
        opacity: 0,
        y: 30
      });
      gsap.fromTo(cards, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, [isLoading, products]);

  // Interaction Logic
  const handleProductClick = (productId: number) => {
    // Navigate to the product detail page
    router.push(`/productdetailpage?productId=${productId}`);
  };

  // Loading State
  if (isLoading) {
    return <section className="w-full bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-8 py-20">
          <div className="w-full flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 text-slate-400 animate-spin" />
          </div>
        </div>
      </section>;
  }

  // Empty State (Hide section if no products)
  if (products.length === 0) {
    return null;
  }
  return <section className="w-full bg-white border-t border-slate-100">
      <div ref={containerRef} className="container mx-auto px-8 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-10 lg:mb-14 text-center max-w-2xl mx-auto">
          <h3 className="text-h3 text-slate-900 font-bold mb-3 tracking-tight">
            You Might Also Like
          </h3>
          <p className="text-base text-slate-500">
            Discover more developer-focused apparel designed for your coding journey.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => <div key={product.id} className="product-card-item h-full">
              <CardWithNoPadding className="group relative h-full flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-blue-200 transition-all duration-300" onClick={() => handleProductClick(product.id)}>
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                  <EditableImg propKey={`related-product-${product.id}`} keywords={product.title} description={`Detailed shot of ${product.title}, ${product.available_colors || 'fashion'} apparel`} className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105" />
                  
                  {/* Stock Badge */}
                  {product.stock_quantity < 5 && product.stock_quantity > 0 && <div className="absolute bottom-3 left-3 bg-amber-500/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-caption font-medium">
                       Low Stock
                     </div>}
                  
                  {/* Sale Badge */}
                  {product.sale_price && product.sale_price < product.price && <div className="absolute top-3 left-3 bg-blue-600/90 backdrop-blur-sm text-white px-2.5 py-1 rounded text-caption font-medium shadow-sm">
                      Sale
                    </div>}
                </div>

                {/* Content Container */}
                <div className="flex flex-col flex-grow p-5">
                  <div className="mb-1">
                    <p className="text-caption text-slate-400 uppercase tracking-wider text-[11px] font-semibold">
                      {product.sku ? `SKU: ${product.sku}` : 'Apparel'}
                    </p>
                  </div>
                  
                  <h4 className="text-base font-semibold text-slate-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h4>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex flex-col">
                      {product.sale_price && product.sale_price > 0 ? <div className="flex items-center gap-2">
                          <span className="text-base font-bold text-slate-900">
                             ${product.sale_price.toFixed(2)}
                          </span>
                          <span className="text-caption text-slate-400 line-through decoration-slate-400">
                             ${product.price.toFixed(2)}
                          </span>
                        </div> : <span className="text-base font-bold text-slate-900">
                           ${product.price.toFixed(2)}
                        </span>}
                    </div>
                  </div>
                </div>
              </CardWithNoPadding>
            </div>)}
        </div>
      </div>
    </section>;
}
