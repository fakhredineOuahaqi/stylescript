'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import type { promotion } from '@/server/entities.type';
import { Loader2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

/**
 * HomePage_PromotionalBanner
 * 
 * A full-width promotional section designed to break the visual rhythm of product grids.
 * Uses high-contrast design (Dark background vs Light text) to draw attention.
 */
export default function HomePage_PromotionalBanner() {
  const router = useRouter();
  const [promoData, setPromoData] = useState<promotion | null>(null);
  const [loading, setLoading] = useState(true);

  // Fallback data if no promotion exists in DB
  const fallbackPromo = {
    title: "Level Up Your Setup",
    subtitle: "Premium coding hoodies & accessories. Free Shipping on Orders Over 500 MAD.",
    cta: "Shop The Collection",
    bgKeyword: "dark minimalist coding workspace setup"
  };
  useEffect(() => {
    const fetchPromotion = async () => {
      try {
        setLoading(true);
        // Fetch the latest promotion. In a real scenario, we might filter by 'active' or date.
        // Assuming GetAll returns array, we take the last created one for "New Season Drop" logic.
        const allPromotions = await entities.promotion.GetAll({});
        if (allPromotions && allPromotions.length > 0) {
          // Sort by created_at desc to get the latest
          const latest = allPromotions.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
          setPromoData(latest);
        } else {
          setPromoData(null); // Will trigger fallback UI
        }
      } catch (error) {
        console.error("Failed to fetch promotions:", error);
        toast.error("Unable to load latest offers.");
      } finally {
        setLoading(false);
      }
    };
    fetchPromotion();
  }, []);
  const handleCtaClick = () => {
    router.push('/productlistpage');
  };

  // Content Resolution
  const title = promoData?.title || fallbackPromo.title;
  const subtitle = promoData?.subtitle || fallbackPromo.subtitle;
  const bgImageKeyword = promoData?.background_image_url || fallbackPromo.bgKeyword;
  const ctaText = "Shop Now"; // Standardized CTA

  if (loading) {
    return <section className="w-full h-[400px] bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </section>;
  }
  return <section className="relative w-full overflow-hidden bg-[#0f172a]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full">
        <EditableImg propKey={`promo-banner-${promoData?.id || 'default'}`} keywords={bgImageKeyword} description="Dark moody background with coding aesthetic, high contrast for white text overlay" className="w-full h-full object-cover object-center opacity-60" />
        {/* Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content Area */}
          <div className="flex flex-col gap-6 max-w-2xl">
            {/* Badge / Label */}
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse" />
              <span className="text-caption text-blue-400 font-medium tracking-wide uppercase">
                Limited Time Offer
              </span>
            </span>

            {/* Main Title - Using .text-h1 as it is a major section but not page Hero */}
            <h2 className="text-h1 text-white leading-tight">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-h3 text-slate-300 font-normal max-w-lg">
              {subtitle}
            </p>

            {/* Action Group */}
            <div className="mt-4 flex flex-wrap gap-4">
              <Button onClick={handleCtaClick} className="bg-white text-[#0f172a] hover:bg-slate-100 hover:shadow-lg transition-all duration-200 font-semibold px-8 py-6 h-auto text-base">
                {ctaText}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Side Visual Balance (Optional: Could be empty or hold a floating element) */}
          {/* Leaving empty to allow background image subject to shine through on the right, 
              or for maintaining clean 'negative space' as per design system guidelines. */}
          <div className="hidden lg:block h-full min-h-[300px]" />
        </div>
      </div>

      {/* Decorative Bottom Border (Matches Design System Border Color) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-slate-700/50" />
    </section>;
}
