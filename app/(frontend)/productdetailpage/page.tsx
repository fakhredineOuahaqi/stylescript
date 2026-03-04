'use client';

import React from 'react';
import ProductDetailPage_MainViewer from '@/components/ProductDetailPage_MainViewer';
import ProductDetailPage_DescriptionTabs from '@/components/ProductDetailPage_DescriptionTabs';
import ProductDetailPage_Reviews from '@/components/ProductDetailPage_Reviews';
import ProductDetailPage_RelatedProducts from '@/components/ProductDetailPage_RelatedProducts';
export default function ProductDetailPage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative bg-white">
        <ProductDetailPage_MainViewer />
      </section>

      <section className="w-full relative bg-[#f8fafc]">
        <ProductDetailPage_DescriptionTabs />
      </section>

      <section className="w-full relative bg-white">
        <ProductDetailPage_Reviews />
      </section>

      <section className="w-full relative bg-[#f8fafc]">
        <ProductDetailPage_RelatedProducts />
      </section>
    </main>;
}
