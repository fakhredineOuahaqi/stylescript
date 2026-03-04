'use client';

import React from 'react';
import ProductListPage_Header from '@/components/ProductListPage_Header';
import ProductListPage_Catalog from '@/components/ProductListPage_Catalog';
const ProductListPage: React.FC = () => {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <ProductListPage_Header />
      </section>
      <section className="w-full relative">
        <ProductListPage_Catalog />
      </section>
    </main>;
};
export default ProductListPage;
