'use client';

import React from 'react';
import OrderManagementPage_KPISummary from '@/components/OrderManagementPage_KPISummary';
import OrderManagementPage_MasterTable from '@/components/OrderManagementPage_MasterTable';
export default function OrderManagementPage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full">
        <OrderManagementPage_KPISummary />
      </section>
      <section className="w-full">
        <OrderManagementPage_MasterTable />
      </section>
    </main>;
}
