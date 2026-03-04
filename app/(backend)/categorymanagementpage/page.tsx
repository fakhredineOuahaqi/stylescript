'use client';

import React from 'react';
import CategoryManagementPage_HeaderSummary from '@/components/CategoryManagementPage_HeaderSummary';
import CategoryManagementPage_MainManager from '@/components/CategoryManagementPage_MainManager';
export default function CategoryManagementPage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <CategoryManagementPage_HeaderSummary />
      </section>
      <section className="w-full relative">
        <CategoryManagementPage_MainManager />
      </section>
    </main>;
}
