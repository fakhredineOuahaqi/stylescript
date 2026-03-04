'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingBag, Users, Activity, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react";
import { toast } from "sonner";
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import type { order, order_status } from '@/server/entities.type';

// --- Types & Interfaces ---

interface KPIItem {
  title: string;
  value: string;
  trendValue: number; // percentage
  trendDirection: 'up' | 'down' | 'neutral';
  icon: React.ElementType;
  description: string;
}
interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  newUsers: number;
  averageOrderValue: number;
  prevTotalRevenue: number;
  prevTotalOrders: number;
  prevNewUsers: number;
  prevAverageOrderValue: number;
}

// --- Helper Components ---
/* Extracted array: _items */
const _items = [1, 2, 3, 4];
const KPISkeleton = () => <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {_items.map((i, index) => <Card key={i} className="border-border/50 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="h-4 w-24 bg-slate-100 animate-pulse rounded" />
                    <div className="h-4 w-4 bg-slate-100 animate-pulse rounded-full" />
                </CardHeader>
                <CardContent>
                    <div className="h-8 w-32 bg-slate-100 animate-pulse rounded mb-2" />
                    <div className="h-3 w-40 bg-slate-100 animate-pulse rounded" />
                </CardContent>
            </Card>)}
    </div>;

// --- Main Component ---

export default function AnalyticsPage_KPISummary() {
  const [loading, setLoading] = useState(true);
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0
    }).format(amount);
  };
  const formatPercentage = (value: number) => {
    return `${Math.abs(value).toFixed(1)}%`;
  };
  const calculateGrowth = (current: number, previous: number) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return (current - previous) / previous * 100;
  };
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // 1. Session Validation
        const session = getadmin_session();
        if (!session || !session.token) {
          toast.error("Unauthorized access. Please login.");
          return;
        }

        // 2. Date Range Calculation (Current Month vs Last Month)
        const now = new Date();
        const currentMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const nextMonthStart = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        const lastMonthStart = new Date(now.getFullYear(), now.getMonth() - 1, 1);

        // 3. Define valid order statuses for revenue calculation
        const validStatuses: order_status[] = ['confirmed', 'shipped', 'delivered'];

        // 4. Parallel Data Fetching
        // Note: In a real high-volume app, we would use dedicated aggregation endpoints.
        // Here we fetch collections based on timestamps as per constraints.

        const [currentOrders, lastMonthOrders, currentUserCount, lastMonthUserCount] = await Promise.all([
        // Current Month Orders
        entities.order.GetAll({
          created_at: {
            gte: currentMonthStart,
            lt: nextMonthStart
          },
          status: {
            in: validStatuses
          }
        }),
        // Last Month Orders
        entities.order.GetAll({
          created_at: {
            gte: lastMonthStart,
            lt: currentMonthStart
          },
          status: {
            in: validStatuses
          }
        }),
        // Current Month New Users
        entities.user.Count({
          created_at: {
            gte: currentMonthStart,
            lt: nextMonthStart
          },
          role: {
            equals: 'customer'
          }
        }),
        // Last Month New Users
        entities.user.Count({
          created_at: {
            gte: lastMonthStart,
            lt: currentMonthStart
          },
          role: {
            equals: 'customer'
          }
        })]);

        // 5. Compute Metrics

        // Revenue
        const calcRevenue = (orders: order[]) => orders.reduce((sum, order) => sum + (order.total_price || 0), 0);
        const totalRevenue = calcRevenue(currentOrders);
        const prevTotalRevenue = calcRevenue(lastMonthOrders);

        // Order Volume
        const totalOrders = currentOrders.length;
        const prevTotalOrders = lastMonthOrders.length;

        // AOV
        const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
        const prevAverageOrderValue = prevTotalOrders > 0 ? prevTotalRevenue / prevTotalOrders : 0;
        setMetrics({
          totalRevenue,
          totalOrders,
          newUsers: currentUserCount,
          averageOrderValue,
          prevTotalRevenue,
          prevTotalOrders,
          prevNewUsers: lastMonthUserCount,
          prevAverageOrderValue
        });
      } catch (error) {
        console.error("Failed to fetch dashboard metrics:", error);
        toast.error("Unable to load dashboard data. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);

  // --- Render Logic ---

  if (loading) {
    return <div className="w-full bg-slate-50 border-b border-border/40">
                <div className="container mx-auto px-8 py-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="h-8 w-48 bg-slate-200 animate-pulse rounded" />
                        <div className="h-8 w-8 bg-slate-200 animate-pulse rounded" />
                    </div>
                    <KPISkeleton />
                </div>
            </div>;
  }
  if (!metrics) {
    return <div className="w-full bg-slate-50 min-h-[300px] flex items-center justify-center">
                 <div className="text-center space-y-4">
                    <div className="bg-slate-100 p-4 rounded-full inline-flex">
                        <RefreshCw className="h-6 w-6 text-slate-400" />
                    </div>
                    <h3 className="text-h3 font-medium text-slate-900">No Data Available</h3>
                    <p className="text-muted-foreground max-w-md">
                        We couldn't retrieve the dashboard metrics at this time. 
                    </p>
                 </div>
            </div>;
  }
  const kpiData: KPIItem[] = [{
    title: "Total Revenue",
    value: formatCurrency(metrics.totalRevenue),
    trendValue: calculateGrowth(metrics.totalRevenue, metrics.prevTotalRevenue),
    trendDirection: metrics.totalRevenue >= metrics.prevTotalRevenue ? 'up' : 'down',
    icon: DollarSign,
    description: "vs. last month"
  }, {
    title: "Total Orders",
    value: metrics.totalOrders.toLocaleString('en-US'),
    trendValue: calculateGrowth(metrics.totalOrders, metrics.prevTotalOrders),
    trendDirection: metrics.totalOrders >= metrics.prevTotalOrders ? 'up' : 'down',
    icon: ShoppingBag,
    description: "vs. last month"
  }, {
    title: "New Customers",
    value: metrics.newUsers.toLocaleString('en-US'),
    trendValue: calculateGrowth(metrics.newUsers, metrics.prevNewUsers),
    trendDirection: metrics.newUsers >= metrics.prevNewUsers ? 'up' : 'down',
    icon: Users,
    description: "vs. last month"
  }, {
    title: "Avg. Order Value",
    value: formatCurrency(metrics.averageOrderValue),
    trendValue: calculateGrowth(metrics.averageOrderValue, metrics.prevAverageOrderValue),
    trendDirection: metrics.averageOrderValue >= metrics.prevAverageOrderValue ? 'up' : 'down',
    icon: Activity,
    description: "vs. last month"
  }];
  return <section className="w-full bg-slate-50/50">
            <div className="container mx-auto px-8 py-10 space-y-8">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-h2 font-semibold text-slate-900 tracking-tight">Dashboard Overview</h2>
                        <p className="text-muted-foreground mt-1">
                            Real-time performance metrics for the current month.
                        </p>
                    </div>
                    
                    {/* Optional: Date Range Indicator */}
                    <div className="flex items-center space-x-2 text-sm text-slate-600 bg-white px-3 py-1.5 rounded-md border border-slate-200 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-medium">Live Updates</span>
                    </div>
                </div>

                {/* KPI Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {kpiData.map((item, index) => <Card key={index} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white overflow-hidden group">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium text-slate-600">
                                    {item.title}
                                </CardTitle>
                                <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-blue-50 transition-colors duration-200">
                                    <item.icon className="h-4 w-4 text-slate-600 group-hover:text-blue-600" />
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-slate-900 mb-1">
                                    {item.value}
                                </div>
                                <div className="flex items-center text-xs">
                                    <span className={`flex items-center font-medium ${item.trendDirection === 'up' ? 'text-emerald-600' : item.trendDirection === 'down' ? 'text-rose-600' : 'text-slate-600'}`}>
                                        {item.trendDirection === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : item.trendDirection === 'down' ? <ArrowDownRight className="h-3 w-3 mr-1" /> : <Activity className="h-3 w-3 mr-1" />}
                                        {formatPercentage(item.trendValue)}
                                    </span>
                                    <span className="text-muted-foreground ml-2">
                                        {item.description}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>)}
                </div>
            </div>
        </section>;
}
