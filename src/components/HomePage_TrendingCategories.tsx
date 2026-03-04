'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CardWithNoPadding } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import EditableImg from '@/@base/EditableImg';
import { cn } from '@/lib/utils';

// Import Types and Entities
import type { category } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * HomePage_TrendingCategories
 * 
 * A visual grid displaying top product categories.
 * Each card represents a category filter leading to the product list page.
 */
export default function HomePage_TrendingCategories() {
  const router = useRouter();
  const [categories, setCategories] = useState<category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        // Fetch only visible categories
        const result = await entities.category.GetAll({
          is_visible: true
        });
        // Limit to top 6 for a balanced grid layout if many exist, or show all if few.
        // For this design, we'll take up to 6 to keep it compact.
        setCategories(result.slice(0, 6));
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // GSAP Animation
  useEffect(() => {
    if (!isLoading && categories.length > 0 && containerRef.current) {
      const ctx = gsap.context(() => {
        // Header Animation
        if (headerRef.current) {
          gsap.fromTo(headerRef.current.children, {
            opacity: 0,
            y: 30
          }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerRef.current,
              start: 'top 85%'
            }
          });
        }

        // Grid Items Animation
        const cards = containerRef.current?.querySelectorAll('.category-card');
        if (cards && cards.length > 0) {
          gsap.fromTo(cards, {
            opacity: 0,
            y: 50
          }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%'
            }
          });
        }
      }, containerRef);
      return () => ctx.revert();
    }
  }, [isLoading, categories]);

  // Handle Navigation
  const handleCategoryClick = (categoryId: number) => {
    router.push(`/productlistpage?id=${categoryId}`);
  };

  // Render Loading State
  if (isLoading) {
    return <section className="w-full bg-slate-50 py-24">
        <div className="container mx-auto px-8 flex flex-col items-center justify-center min-h-[400px]">
          <Loader2 className="h-8 w-8 animate-spin text-slate-900" />
          <p className="mt-4 text-slate-500 text-sm font-medium">Loading collections...</p>
        </div>
      </section>;
  }

  // Render Empty State
  if (!categories || categories.length === 0) {
    return <section className="w-full bg-slate-50 py-24">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-h3 text-slate-900 mb-4">No Categories Found</h2>
          <p className="text-base text-slate-500">
            It looks like we haven&apos;t added any product categories yet. Please check back later.
          </p>
        </div>
      </section>;
  }
  return <section className="w-full bg-white relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-8 py-20 lg:py-24">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-slate-100 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-h1 text-slate-900 font-bold tracking-tight mb-4">
              Trending Collections
            </h2>
            <p className="text-base text-slate-500 max-w-lg">
              Explore our premium coding-themed apparel. Designed for comfort during long coding sessions, styled for the modern developer.
            </p>
          </div>
          <div className="hidden md:block">
             <Button onClick={() => router.push('/productlistpage')} variant="outline" className="group border-slate-200 text-slate-900 hover:bg-slate-50 hover:text-blue-600 transition-colors">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          {categories.map((cat, index) => {
          // Determine if this card should span differently for layout variety (optional visual interest)
          // First item spans 2 rows on large screens if we have at least 3 items
          const isFeatured = index === 0 && categories.length >= 3;
          return <CardWithNoPadding key={cat.id} onClick={() => handleCategoryClick(cat.id)} className={cn("category-card group relative h-full w-full overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-slate-100", isFeatured ? "lg:col-span-1 lg:row-span-2 md:col-span-2 lg:h-full" : "")}>
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                  <EditableImg propKey={`category-cover-${cat.id}_man`} keywords={`${cat.name} developer fashion clothing, man, male model`} description={`High quality photography of a man wearing ${cat.name}, minimalistic, coding vibe, studio lighting`} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" needLargeImage={isFeatured} />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content Content */}
                <div className="relative z-10 flex flex-col justify-end h-full p-8">
                  <div className="transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                    <h3 className="text-h3 text-white font-bold mb-2 tracking-wide">
                      {cat.name}
                    </h3>
                    
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out">
                       <p className="text-slate-300 text-sm mb-4 line-clamp-2">
                        {cat.description || `Browse our latest collection of ${cat.name.toLowerCase()} designed for developers.`}
                      </p>
                      <span className="inline-flex items-center text-sm font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                        Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>

                     {/* Default visible indicator on mobile/inactive state */}
                    <div className="block group-hover:hidden mt-2">
                         <div className="h-1 w-12 bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </CardWithNoPadding>;
        })}
        </div>
        
        {/* Mobile View All Button (Visible only on small screens) */}
        <div className="mt-8 md:hidden w-full">
            <Button onClick={() => router.push('/productlistpage')} className="w-full bg-slate-900 text-white hover:bg-slate-800">
                View All Products
             </Button>
        </div>

      </div>
    </section>;
}
