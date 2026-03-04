'use client';

import React, { useEffect, useState } from 'react';
import { DollarSign, ShoppingBag, Clock, RefreshCcw, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { entities } from '@/tools/entities-proxy';
import type { order } from '@/server/entities.type';
import { getadmin_session } from '@/tools/SessionContext';
import { toast } from 'sonner';

// --- Type Definitions ---
interface DashboardMetrics {
  totalRevenue: number;
  totalOrders: number;
  pendingOrders: number;
  refundRate: number;
}
interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ElementType;
  description: string;
  loading: boolean;
  trend?: string;
  variant?: 'default' | 'alert' | 'success';
}

// --- Helper Functions ---
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(amount);
};
const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};
const formatPercent = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    minimumFractionDigits: 1
  }).format(num / 100);
};

// --- Sub-Components ---
const KPICard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  description,
  loading,
  variant = 'default'
}) => {
  const getIconStyles = () => {
    switch (variant) {
      case 'alert':
        return 'text-amber-600 bg-amber-50';
      case 'success':
        return 'text-emerald-600 bg-emerald-50';
      default:
        return 'text-slate-600 bg-slate-100';
    }
  };
  return <Card className="border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-caption font-medium text-slate-500">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${getIconStyles()}`}>
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent>
        {loading ? <div className="space-y-2">
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-4 w-32" />
          </div> : <>
            <div className="text-h2 font-bold text-slate-900 tracking-tight">
              {value}
            </div>
            <p className="text-caption text-slate-500 mt-1">
              {description}
            </p>
          </>}
      </CardContent>
    </Card>;
};

// --- Main Component ---
const OrderManagementPage_KPISummary = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics>({
    totalRevenue: 0,
    totalOrders: 0,
    pendingOrders: 0,
    refundRate: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const session = getadmin_session();

        // Strict Admin Session Check
        if (!session || !session.token) {
          // In a real app, you might redirect here or show a restricted view.
          // For this component, we just stop loading.
          setLoading(false);
          return;
        }

        // Fetch all orders to compute client-side metrics
        // In a high-volume production environment, this should be an aggregation query.
        const allOrders = await entities.order.GetAll({});
        if (!allOrders || allOrders.length === 0) {
          setMetrics({
            totalRevenue: 0,
            totalOrders: 0,
            pendingOrders: 0,
            refundRate: 0
          });
          return;
        }

        // Calculate Metrics
        const totalOrders = allOrders.length;
        const totalRevenue = allOrders.reduce((acc: number, order: order) => {
          // Only count revenue for valid orders (not cancelled/refunded)
          if (order.status !== 'cancelled' && order.status !== 'refunded') {
            return acc + (order.total_amount || 0);
          }
          return acc;
        }, 0);
        const pendingOrders = allOrders.filter(o => o.status === 'pending').length;
        const refundedCount = allOrders.filter(o => o.status === 'refunded').length;
        const refundRate = totalOrders > 0 ? refundedCount / totalOrders * 100 : 0;
        setMetrics({
          totalRevenue,
          totalOrders,
          pendingOrders,
          refundRate
        });
      } catch (error) {
        console.error('Failed to fetch dashboard metrics:', error);
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);
  return <section className="w-full bg-slate-50/50 border-b border-slate-200">
      <div className="container mx-auto px-8 py-10">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="text-h2 font-semibold text-slate-900">
            Performance Overview
          </h2>
          <p className="text-base text-slate-500">
            Real-time insights into store performance and order processing status.
          </p>
        </div>

        {/* KPI Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Total Revenue */}
          <KPICard title="Total Revenue" value={formatCurrency(metrics.totalRevenue)} icon={DollarSign} description="Gross sales from fulfilled orders" loading={loading} variant="success" />

          {/* Total Orders */}
          <KPICard title="Total Orders" value={formatNumber(metrics.totalOrders)} icon={ShoppingBag} description="Lifetime orders received" loading={loading} variant="default" />

          {/* Pending Orders */}
          <KPICard title="Pending Actions" value={formatNumber(metrics.pendingOrders)} icon={Clock} description="Orders awaiting processing" loading={loading} variant={metrics.pendingOrders > 0 ? 'alert' : 'default'} />

          {/* Refund Rate */}
          <KPICard title="Refund Rate" value={formatPercent(metrics.refundRate)} icon={RefreshCcw} description="Percentage of refunded orders" loading={loading} variant="default" />

        </div>
      </div>
    </section>;
};
export default OrderManagementPage_KPISummary;
