'use client';

import React from 'react';
import AnalyticsPage_KPISummary from '@/components/AnalyticsPage_KPISummary';
import AnalyticsPage_SalesTrendChart from '@/components/AnalyticsPage_SalesTrendChart';
import AnalyticsPage_TopProductsTable from '@/components/AnalyticsPage_TopProductsTable';
import AnalyticsPage_UserDemographics from '@/components/AnalyticsPage_UserDemographics';
export default function AnalyticsPage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative">
        <AnalyticsPage_KPISummary />
      </section>
      <section className="w-full relative bg-[#f8fafc]">
        <AnalyticsPage_SalesTrendChart />
      </section>
      <section className="w-full relative">
        <AnalyticsPage_TopProductsTable />
      </section>
      <section className="w-full relative bg-[#f8fafc]">
        <AnalyticsPage_UserDemographics />
      </section>
    </main>;
}
