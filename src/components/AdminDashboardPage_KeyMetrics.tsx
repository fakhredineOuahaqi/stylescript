'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { DollarSign, ShoppingBag, Users, AlertTriangle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import { toast } from "sonner";

// --- Types ---
interface KeyMetricData {
  todaySales: number;
  todaySalesGrowth: number; // Placeholder for growth calculation
  newOrdersCount: number;
  newOrdersGrowth: number; // Placeholder for growth calculation
  totalUsersCount: number;
  totalUsersGrowth: number; // Placeholder for growth calculation
  lowStockCount: number;
}

// --- Helper Functions ---
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};
const formatNumber = (num: number) => {
  return new Intl.NumberFormat('en-US').format(num);
};

// --- Main Component ---
export default function AdminDashboardPage_KeyMetrics() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<KeyMetricData>({
    todaySales: 0,
    todaySalesGrowth: 0,
    newOrdersCount: 0,
    newOrdersGrowth: 0,
    totalUsersCount: 0,
    totalUsersGrowth: 0,
    lowStockCount: 0
  });
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const session = getadmin_session();
        if (!session || !session.token) {
          // In a real app, redirection logic might happen here or via middleware. 
          // Since this is a section component, we just stop fetching.
          return;
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        // 1. Calculate Today's Sales (Total amount of orders created today with status not cancelled/refunded usually, but for simplicity we take all valid sales)
        const todayOrders = await entities.order.GetAll({
          created_at: {
            gte: today,
            lt: tomorrow
          },
          status: {
            notIn: ['cancelled', 'refunded']
          }
        });
        const salesSum = todayOrders.reduce((acc, order) => acc + (order.total_price || 0), 0);

        // 2. New Orders Count (Created today)
        const newOrdersList = await entities.order.GetAll({
          created_at: {
            gte: today,
            lt: tomorrow
          }
        });
        const ordersCount = newOrdersList.length;

        // 3. Total Users
        const usersCount = await entities.user.Count({
          role: {
            equals: 'customer'
          }
        });

        // 4. Low Stock Alerts (Stock < 10 for example)
        const lowStockProductsCount = await entities.product.Count({
          stock_quantity: {
            lte: 10
          },
          status: {
            equals: 'active'
          }
        });

        // Mocking growth data for demonstration as historical comparison logic is complex
        // In a real scenario, we would query yesterday's data to calculate percentage.
        const mockGrowth = {
          sales: 12.5,
          orders: 8.2,
          users: 2.1
        };
        setData({
          todaySales: salesSum,
          todaySalesGrowth: mockGrowth.sales,
          newOrdersCount: ordersCount,
          newOrdersGrowth: mockGrowth.orders,
          totalUsersCount: usersCount,
          totalUsersGrowth: mockGrowth.users,
          lowStockCount: lowStockProductsCount
        });
      } catch (error) {
        console.error("Failed to fetch dashboard metrics", error);
        toast.error("Failed to load dashboard metrics.");
      } finally {
        setLoading(false);
      }
    };
    fetchMetrics();
  }, []);
  if (loading) {
    /* Extracted array: _items */
    const _items = [1, 2, 3, 4];
    return <section className="w-full bg-slate-50">
        <div className="container mx-auto px-8 py-10">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
             {_items.map((i, index) => <Card key={i} className="border-slate-200 shadow-sm">
                 <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                   <Skeleton className="h-4 w-[100px]" />
                   <Skeleton className="h-4 w-4 rounded-full" />
                 </CardHeader>
                 <CardContent>
                   <Skeleton className="h-8 w-[120px] mb-2" />
                   <Skeleton className="h-3 w-[80px]" />
                 </CardContent>
               </Card>)}
          </div>
        </div>
      </section>;
  }
  return <section className="w-full bg-slate-50">
      <div className="container mx-auto px-8 py-10">
        <h2 className="text-h2 font-bold text-slate-900 mb-6">Overview</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Card 1: Total Sales Today */}
          <MetricCard title="Total Sales Today" icon={<DollarSign className="h-4 w-4 text-slate-500" />} value={formatCurrency(data.todaySales)} description="+12.5% from yesterday" trend="up" />

          {/* Card 2: New Orders */}
          <MetricCard title="New Orders" icon={<ShoppingBag className="h-4 w-4 text-slate-500" />} value={formatNumber(data.newOrdersCount)} description="+8.2% from yesterday" trend="up" />

          {/* Card 3: Total Users */}
          <MetricCard title="Total Customers" icon={<Users className="h-4 w-4 text-slate-500" />} value={formatNumber(data.totalUsersCount)} description="+2.1% from last month" trend="up" />

          {/* Card 4: Low Stock Alerts */}
          <MetricCard title="Stock Alerts" icon={<AlertTriangle className="h-4 w-4 text-amber-500" />} value={formatNumber(data.lowStockCount)} description="Products with low stock" trend="neutral" warning={data.lowStockCount > 0} />
          
        </div>
      </div>
    </section>;
}

// --- Sub-Components ---

interface MetricCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  description: string;
  trend: 'up' | 'down' | 'neutral';
  warning?: boolean;
}
function MetricCard({
  title,
  icon,
  value,
  description,
  trend,
  warning = false
}: MetricCardProps) {
  return <Card className={`border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 ${warning ? 'border-l-4 border-l-amber-500' : ''}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        <div className="flex items-center pt-1">
            {trend === 'up' && <ArrowUpRight className="h-3 w-3 text-emerald-500 mr-1" />}
            {trend === 'down' && <ArrowDownRight className="h-3 w-3 text-rose-500 mr-1" />}
            <p className="text-xs text-slate-500">
                {description}
            </p>
        </div>
      </CardContent>
    </Card>;
}
