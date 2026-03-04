'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Area, AreaChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, ComposedChart, Legend } from 'recharts';
import { Loader2, TrendingUp, Calendar, DollarSign, ShoppingBag, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { toast } from "sonner";
import type { order } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';

// --- Types ---
type TimeRange = '7d' | '30d' | '90d' | '1y';
interface ChartDataPoint {
  date: string; // Display date (e.g., "Oct 24")
  fullDate: string; // ISO date for sorting/keys
  revenue: number;
  orders: number;
}

// --- Component ---
export default function AnalyticsPage_SalesTrendChart() {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<TimeRange>('30d');
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);

  // --- Helpers ---
  const formatCurrency = (value: number) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  }).format(value);
  const formatDate = (date: Date) => new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(date);
  const getStartDate = (rangeType: TimeRange): Date => {
    const now = new Date();
    const target = new Date(now);
    switch (rangeType) {
      case '7d':
        target.setDate(now.getDate() - 7);
        break;
      case '30d':
        target.setDate(now.getDate() - 30);
        break;
      case '90d':
        target.setDate(now.getDate() - 90);
        break;
      case '1y':
        target.setFullYear(now.getFullYear() - 1);
        break;
    }
    return target;
  };

  // --- Data Fetching ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 1. Auth Check
        const session = getadmin_session();
        if (!session || !session.token) {
          // In a real app, handle redirect or error appropriately
          setLoading(false);
          return;
        }

        // 2. Fetch Orders
        const startDate = getStartDate(range);

        // Use a filter to get only valid sales (exclude cancelled/refunded if desired, 
        // but for "Sales Trend" typically we want Confirmed/Delivered/Shipped/Pending)
        const orders = await entities.order.GetAll({
          created_at: {
            gte: startDate
          },
          status: {
            notIn: ['cancelled', 'refunded']
          }
        });

        // 3. Process Data
        const aggregated = new Map<string, {
          revenue: number;
          orders: number;
          dateObj: Date;
        }>();

        // Initialize aggregation map with all dates in range to ensure continuity (no gaps in chart)
        const currentDate = new Date(startDate);
        const endDate = new Date();
        while (currentDate <= endDate) {
          const dateKey = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD
          aggregated.set(dateKey, {
            revenue: 0,
            orders: 0,
            dateObj: new Date(currentDate)
          });
          currentDate.setDate(currentDate.getDate() + 1);
        }
        let revenueSum = 0;
        let orderCount = 0;
        orders.forEach(order => {
          const dateKey = new Date(order.created_at).toISOString().split('T')[0];
          if (aggregated.has(dateKey)) {
            const entry = aggregated.get(dateKey)!;
            entry.revenue += order.total_price || 0;
            entry.orders += 1;
            aggregated.set(dateKey, entry);
          }
          revenueSum += order.total_price || 0;
          orderCount += 1;
        });
        const chartData: ChartDataPoint[] = Array.from(aggregated.values()).sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime()).map((item, index) => ({
          date: formatDate(item.dateObj),
          fullDate: item.dateObj.toISOString(),
          revenue: item.revenue,
          orders: item.orders
        }));
        setData(chartData);
        setTotalRevenue(revenueSum);
        setTotalOrders(orderCount);
      } catch (err) {
        console.error("Failed to fetch sales data:", err);
        toast.error("Failed to load sales trends. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [range]);

  // --- Chart Configuration ---
  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "#0f172a" // Brand Primary
    },
    orders: {
      label: "Orders",
      color: "#3b82f6" // Accent Blue
    }
  } satisfies ChartConfig;

  // --- Render ---
  return <section className="w-full bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-8 py-10">
        
        <Card className="w-full shadow-sm border-slate-200 bg-white overflow-hidden">
          <CardHeader className="border-b border-slate-100 bg-white/50 px-6 py-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Sales Performance
                </CardTitle>
                <CardDescription className="text-sm text-slate-500">
                  Monitor revenue and order volume trends over time.
                </CardDescription>
              </div>
              
              <div className="flex items-center gap-3">
                 <div className="hidden md:flex items-center gap-4 text-sm mr-4 border-r border-slate-200 pr-4">
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Total Revenue</span>
                        <span className="font-bold text-slate-900">{formatCurrency(totalRevenue)}</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Total Orders</span>
                        <span className="font-bold text-slate-900">{totalOrders}</span>
                    </div>
                 </div>

                <Select value={range} onValueChange={(val: TimeRange) => setRange(val)} disabled={loading}>
                  <SelectTrigger className="w-[160px] h-10 border-slate-200 focus:ring-blue-500/20 bg-white text-slate-700 font-medium">
                    <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                    <SelectValue placeholder="Select Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7d">Last 7 Days</SelectItem>
                    <SelectItem value="30d">Last 30 Days</SelectItem>
                    <SelectItem value="90d">Last 3 Months</SelectItem>
                    <SelectItem value="1y">Last Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {loading ? <div className="h-[400px] w-full flex flex-col items-center justify-center text-slate-400 animate-pulse bg-slate-50/50 rounded-lg">
                <Loader2 className="w-8 h-8 animate-spin mb-3 text-blue-500" />
                <span className="text-sm font-medium">Analyzing sales data...</span>
              </div> : data.length === 0 ? <div className="h-[400px] w-full flex flex-col items-center justify-center text-slate-400 bg-slate-50/50 rounded-lg border border-dashed border-slate-200">
                <AlertCircle className="w-10 h-10 mb-3 text-slate-300" />
                <p className="text-sm font-medium text-slate-600">No sales data found for this period.</p>
                <p className="text-xs text-slate-400 mt-1">Try selecting a different time range.</p>
              </div> : <ChartContainer config={chartConfig} className="h-[400px] w-full">
                <ComposedChart data={data} margin={{
              top: 20,
              right: 20,
              left: 20,
              bottom: 0
            }}>
                  <defs>
                    <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f172a" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="#0f172a" stopOpacity={0.01} />
                    </linearGradient>
                  </defs>
                  
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" />
                  
                  <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} tick={{
                fill: '#64748b',
                fontSize: 12
              }} minTickGap={30} />
                  
                  <YAxis yAxisId="left" orientation="left" tickLine={false} axisLine={false} tick={{
                fill: '#64748b',
                fontSize: 12
              }} tickFormatter={value => `$${value}`} label={{
                value: 'Revenue',
                angle: -90,
                position: 'insideLeft',
                style: {
                  textAnchor: 'middle',
                  fill: '#94a3b8',
                  fontSize: 12,
                  fontWeight: 500
                }
              }} />
                  
                  <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{
                fill: '#64748b',
                fontSize: 12
              }} label={{
                value: 'Orders',
                angle: 90,
                position: 'insideRight',
                style: {
                  textAnchor: 'middle',
                  fill: '#94a3b8',
                  fontSize: 12,
                  fontWeight: 500
                }
              }} />

                  <ChartTooltip cursor={{
                fill: '#f1f5f9'
              }} content={({
                active,
                payload,
                label
              }) => {
                if (active && payload && payload.length) {
                  return <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xl">
                                <div className="mb-2 border-b border-slate-100 pb-2 text-xs font-semibold text-slate-500">
                                    {label}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-[#0f172a]" />
                                        <span className="text-xs font-medium text-slate-500">Revenue:</span>
                                        <span className="ml-auto text-xs font-bold text-slate-900">
                                            {formatCurrency(payload[0].value as number)}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-[#3b82f6]" />
                                        <span className="text-xs font-medium text-slate-500">Orders:</span>
                                        <span className="ml-auto text-xs font-bold text-slate-900">
                                            {payload[1]?.value}
                                        </span>
                                    </div>
                                </div>
                            </div>;
                }
                return null;
              }} />

                  <Area yAxisId="left" type="monotone" dataKey="revenue" name="Revenue" stroke="#0f172a" strokeWidth={2} fill="url(#fillRevenue)" activeDot={{
                r: 4,
                strokeWidth: 0,
                fill: '#0f172a'
              }} animationDuration={1000} />

                  <Bar yAxisId="right" dataKey="orders" name="Orders" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={40} opacity={0.8} animationDuration={1000} />

                </ComposedChart>
              </ChartContainer>}
          </CardContent>

          {/* Footer Summary / Insights */}
          {!loading && data.length > 0 && <div className="border-t border-slate-100 bg-slate-50/50 p-4">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <div className="p-2 bg-emerald-100 rounded-md">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-xs font-medium">Avg. Order Value</p>
                        <p className="text-slate-900 font-semibold mt-0.5">
                            {formatCurrency(totalOrders > 0 ? totalRevenue / totalOrders : 0)}
                        </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                    <div className="p-2 bg-blue-100 rounded-md">
                        <ShoppingBag className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-xs font-medium">Daily Avg. Orders</p>
                        <p className="text-slate-900 font-semibold mt-0.5">
                            {(totalOrders / data.length).toFixed(1)} <span className="text-xs text-slate-400 font-normal">/ day</span>
                        </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                     <div className="p-2 bg-amber-100 rounded-md">
                        <TrendingUp className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                        <p className="text-slate-500 text-xs font-medium">Peak Revenue</p>
                        <p className="text-slate-900 font-semibold mt-0.5">
                            {formatCurrency(Math.max(...data.map((d, index) => d.revenue)))}
                        </p>
                    </div>
                  </div>
               </div>
             </div>}

        </Card>
      </div>
    </section>;
}
