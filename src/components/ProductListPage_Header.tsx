'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, Home, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
import type { category } from '@/server/entities.type';
// Tools
import { entities } from '@/tools/entities-proxy';

/**
 * ProductListPage_Header
 * 
 * A clean, modern header section for the product list page.
 * Displays breadcrumbs, the current category title, and description.
 * Adheres to the Kaira-like minimalist aesthetic with high contrast typography.
 */
export default function ProductListPage_Header() {
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const [currentCategory, setCurrentCategory] = useState<category | null>(null);
  const [loading, setLoading] = useState<boolean>(!!categorySlug);
  const [hasError, setHasError] = useState<boolean>(false);
  useEffect(() => {
    const fetchCategoryData = async () => {
      if (!categorySlug) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Fetch category by slug
        const response = await entities.category.GetAll({
          slug: {
            equals: categorySlug
          }
        });
        if (response && response.length > 0) {
          setCurrentCategory(response[0]);
        } else {
          // If slug is provided but not found, we might want to show an error or fallback
          console.warn('Category not found for slug:', categorySlug);
        }
      } catch (err) {
        console.error('Failed to fetch category context:', err);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryData();
  }, [categorySlug]);

  // Determine display text based on state
  const displayTitle = loading ? 'Loading...' : currentCategory?.name || 'All Products';
  const displayDescription = loading ? '' : currentCategory?.description || 'Explore our comprehensive collection of premium coding apparel. Designed for comfort, styled for developers.';

  // Breadcrumb Items
  const breadcrumbs = [{
    label: 'Home',
    href: '/'
  }, {
    label: 'Shop',
    href: '/productlistpage'
  }];
  if (currentCategory) {
    breadcrumbs.push({
      label: currentCategory.name,
      href: `/productlistpage?category=${currentCategory.slug}`
    });
  }
  return <section className="w-full bg-[#f8fafc] border-b border-[#e2e8f0]">
      <div className="container mx-auto px-8 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-[#64748b]">
            {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            return <React.Fragment key={item.label}>
                  {index > 0 && <ChevronRight className="w-4 h-4 text-[#94a3b8]" />}
                  {index === 0 ? <Link href={item.href} className="flex items-center hover:text-[#0f172a] transition-colors duration-200">
                        <Home className="w-4 h-4 mr-1" />
                        <span className="font-medium">{item.label}</span>
                     </Link> : isLast ? <span className="font-semibold text-[#0f172a] cursor-default">
                      {item.label}
                    </span> : <Link href={item.href} className="hover:text-[#0f172a] transition-colors duration-200 font-medium">
                      {item.label}
                    </Link>}
                </React.Fragment>;
          })}
          </nav>

          {/* Main Title Area */}
          <div className="space-y-4">
            {loading ? <div className="flex flex-col items-center justify-center space-y-4 py-4">
                <Loader2 className="h-8 w-8 animate-spin text-[#3b82f6]" />
                <span className="text-[#64748b] text-sm font-medium">Loading category...</span>
              </div> : <>
                <h1 className="text-h1 text-[#0f172a] tracking-tight">
                  {displayTitle}
                </h1>
                
                {displayDescription && <p className="text-base text-[#64748b] max-w-2xl mx-auto leading-relaxed">
                    {displayDescription}
                  </p>}
              </>}
          </div>

          {/* Error State Feedback (Subtle) */}
          {hasError && !loading && <div className="rounded-md bg-[#fee2e2] px-4 py-2 text-sm text-[#ef4444]">
              Unable to load category details. Showing all products instead.
            </div>}
        </div>
      </div>
    </section>;
}
