'use client';

import React from 'react';
import ProductManagementPage_InventoryStats from '@/components/ProductManagementPage_InventoryStats';
import ProductManagementPage_ProductTableAndCRUD from '@/components/ProductManagementPage_ProductTableAndCRUD';
export default function ProductManagementPage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <ProductManagementPage_InventoryStats />
      </section>
      <section className="w-full relative">
        <ProductManagementPage_ProductTableAndCRUD />
      </section>
    </main>;
}
