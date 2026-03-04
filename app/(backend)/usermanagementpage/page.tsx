'use client';

import React from 'react';
import UserManagementPage_StatsOverview from '@/components/UserManagementPage_StatsOverview';
import UserManagementPage_UserListSection from '@/components/UserManagementPage_UserListSection';
export default function UserManagementPage() {
  return <main className="min-h-screen bg-white">
      <section className="w-full relative bg-white">
        <UserManagementPage_StatsOverview />
      </section>
      <section className="w-full relative bg-[#f8fafc]">
        <UserManagementPage_UserListSection />
      </section>
    </main>;
}
