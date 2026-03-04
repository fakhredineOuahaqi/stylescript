'use client';

import React from 'react';
import OrderHistoryPage_Header from '@/components/OrderHistoryPage_Header';
import OrderHistoryPage_List from '@/components/OrderHistoryPage_List';
const OrderHistoryPage: React.FC = () => {
  return <main className="min-h-screen bg-white">
      <section className="w-full">
        <OrderHistoryPage_Header />
      </section>
      <section className="w-full">
        <OrderHistoryPage_List />
      </section>
    </main>;
};
export default OrderHistoryPage;
