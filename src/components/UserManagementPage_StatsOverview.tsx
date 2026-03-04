'use client';

import React, { useEffect, useState } from 'react';
import { Users, UserCheck, UserPlus, ShieldCheck, TrendingUp, TrendingDown, RotateCcw, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';

// ----------------------------------------------------------------------
// Types & Interfaces
// ----------------------------------------------------------------------

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  newUsersThisMonth: number;
  newUsersGrowth: number; // Percentage
  adminCount: number;
  activeRate: number; // Percentage
}

// ----------------------------------------------------------------------
// Component: UserManagementPage_StatsOverview
// ----------------------------------------------------------------------

export default function UserManagementPage_StatsOverview() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    totalUsers: 0,
    activeUsers: 0,
    newUsersThisMonth: 0,
    newUsersGrowth: 0,
    adminCount: 0,
    activeRate: 0
  });
  const fetchStats = async () => {
    try {
      setLoading(true);
      const session = getadmin_session();
      if (!session || !session.token) {
        // Fallback or redirect logic would go here in a real app
        // For this section, we just stop fetching to prevent errors
        setLoading(false);
        return;
      }

      // Date calculations for "New Users" trend
      const now = new Date();
      const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

      // Parallel data fetching for performance
      const [totalCount, activeCount, adminCount, newUsersCurrentMonth, newUsersLastMonth] = await Promise.all([entities.user.Count({}),
      // Total
      entities.user.Count({
        status: {
          equals: 'active'
        }
      }),
      // Active
      entities.user.Count({
        role: {
          equals: 'admin'
        }
      }),
      // Admins
      entities.user.Count({
        created_at: {
          gte: startOfCurrentMonth
        }
      }),
      // New This Month
      entities.user.Count({
        // New Last Month (for trend)
        created_at: {
          gte: startOfLastMonth,
          lt: startOfCurrentMonth
        }
      })]);

      // Calculations
      const activeRate = totalCount > 0 ? activeCount / totalCount * 100 : 0;
      let growth = 0;
      if (newUsersLastMonth > 0) {
        growth = (newUsersCurrentMonth - newUsersLastMonth) / newUsersLastMonth * 100;
      } else if (newUsersCurrentMonth > 0) {
        growth = 100; // 100% growth if started from 0
      }
      setStats({
        totalUsers: totalCount,
        activeUsers: activeCount,
        newUsersThisMonth: newUsersCurrentMonth,
        newUsersGrowth: growth,
        adminCount: adminCount,
        activeRate: activeRate
      });
    } catch (error) {
      console.error('Failed to fetch user statistics:', error);
      toast.error('Failed to load dashboard metrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStats();
  }, []);
  const handleRefresh = () => {
    fetchStats();
    toast.success('Dashboard metrics refreshed');
  };
  return <section className="w-full bg-[#f8fafc] border-b border-slate-200">
      <div className="container mx-auto px-8 py-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-h2 text-slate-900 font-semibold tracking-tight">
              User Overview
            </h2>
            <p className="text-caption text-slate-500 mt-1">
              Key performance indicators for user acquisition and engagement.
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={handleRefresh} disabled={loading} className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-all shadow-sm">
            {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <RotateCcw className="w-4 h-4 mr-2" />}
            Refresh
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Total Users */}
          <MetricCard title="Total Users" icon={<Users className="w-4 h-4 text-blue-600" />} value={stats.totalUsers} loading={loading} subtext="Registered accounts" footer={<div className="flex items-center text-caption text-slate-500">
                <span className="text-slate-400 mr-1">All time</span>
              </div>} />

          {/* Card 2: Active Users */}
          <MetricCard title="Active Users" icon={<UserCheck className="w-4 h-4 text-emerald-600" />} value={stats.activeUsers} loading={loading} subtext={`${stats.activeRate.toFixed(1)}% engagement rate`} footer={<div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500" style={{
            width: `${Math.min(stats.activeRate, 100)}%`
          }} />
              </div>} />

          {/* Card 3: New Users (Growth) */}
          <MetricCard title="New Users" icon={<UserPlus className="w-4 h-4 text-indigo-600" />} value={stats.newUsersThisMonth} loading={loading} subtext="Joined this month" footer={<div className={`flex items-center text-caption font-medium ${stats.newUsersGrowth >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {stats.newUsersGrowth >= 0 ? <TrendingUp className="w-3.5 h-3.5 mr-1" /> : <TrendingDown className="w-3.5 h-3.5 mr-1" />}
                {Math.abs(stats.newUsersGrowth).toFixed(1)}% from last month
              </div>} />

          {/* Card 4: System Admins */}
          <MetricCard title="Administrators" icon={<ShieldCheck className="w-4 h-4 text-amber-600" />} value={stats.adminCount} loading={loading} subtext="Privileged access" footer={<div className="flex items-center text-caption text-slate-500">
                <span className="px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[11px] font-medium border border-amber-100">
                  Security Level: High
                </span>
              </div>} />

        </div>
      </div>
    </section>;
}

// ----------------------------------------------------------------------
// Sub-component: Metric Card
// ----------------------------------------------------------------------

interface MetricCardProps {
  title: string;
  icon: React.ReactNode;
  value: number;
  loading: boolean;
  subtext?: string;
  footer?: React.ReactNode;
}
function MetricCard({
  title,
  icon,
  value,
  loading,
  subtext,
  footer
}: MetricCardProps) {
  return <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white overflow-hidden flex flex-col justify-between">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 pt-6 px-6">
        <CardTitle className="text-caption font-medium text-slate-600 uppercase tracking-wider">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        {loading ? <div className="space-y-3">
            <Skeleton className="h-8 w-24 bg-slate-100" />
            <Skeleton className="h-4 w-32 bg-slate-50" />
          </div> : <>
            <div className="text-3xl font-bold text-slate-900 tracking-tight">
              {value.toLocaleString('en-US')}
            </div>
            {subtext && <p className="text-caption text-slate-500 mt-1 mb-4">
                {subtext}
              </p>}
            {footer && <div className="mt-auto pt-2 border-t border-slate-50">
                {footer}
              </div>}
          </>}
      </CardContent>
    </Card>;
}
