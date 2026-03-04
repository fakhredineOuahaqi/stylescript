'use client';

import React from 'react';
import AdminDashboardPage_KeyMetrics from '@/components/AdminDashboardPage_KeyMetrics';
import AdminDashboardPage_SalesAnalytics from '@/components/AdminDashboardPage_SalesAnalytics';
import AdminDashboardPage_RecentOrdersAndQuickActions from '@/components/AdminDashboardPage_RecentOrdersAndQuickActions';
const AdminDashboardPage: React.FC = () => {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <AdminDashboardPage_KeyMetrics />
      </section>
      
      <section className="w-full relative bg-[#f8fafc]">
        <AdminDashboardPage_SalesAnalytics />
      </section>
      
      <section className="w-full relative">
        <AdminDashboardPage_RecentOrdersAndQuickActions />
      </section>
    </main>;
};
export default AdminDashboardPage;
