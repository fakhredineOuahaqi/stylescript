'use client';

import HomePage_HeroBanner from '@/components/HomePage_HeroBanner';
import HomePage_TrendingCategories from '@/components/HomePage_TrendingCategories';
import HomePage_NewArrivals from '@/components/HomePage_NewArrivals';
import HomePage_PromotionalBanner from '@/components/HomePage_PromotionalBanner';
import HomePage_BenefitsFeatures from '@/components/HomePage_BenefitsFeatures';
export default function HomePage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <HomePage_HeroBanner />
      </section>
      <section className="w-full relative bg-white">
        <HomePage_TrendingCategories />
      </section>
      <section className="w-full relative bg-[#f8fafc]">
        <HomePage_NewArrivals />
      </section>
      <section className="w-full relative bg-white">
        <HomePage_PromotionalBanner />
      </section>
      <section className="w-full relative bg-[#f8fafc]">
        <HomePage_BenefitsFeatures />
      </section>
    </main>;
}
