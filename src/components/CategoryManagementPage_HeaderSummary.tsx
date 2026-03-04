'use client';

import React, { useEffect, useState } from 'react';
import { Layers, Eye, EyeOff, TrendingUp, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';

// --- Types ---

interface DashboardMetricsState {
  totalCategories: number;
  activeCategories: number;
  hiddenCategories: number;
  newThisMonth: number;
  loading: boolean;
  error: boolean;
}

// --- Chart Configuration ---

const chartConfig = {
  active: {
    label: "Visible",
    color: "#10b981" // Success Green
  },
  inactive: {
    label: "Hidden",
    color: "#64748b" // Slate 500
  }
} satisfies ChartConfig;

// --- Components ---

const MetricCardSkeleton = () => <Card className="border-slate-200 shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <Skeleton className="h-4 w-[100px]" />
      <Skeleton className="h-4 w-4 rounded-full" />
    </CardHeader>
    <CardContent>
      <Skeleton className="h-8 w-[60px] mb-1" />
      <Skeleton className="h-3 w-[140px]" />
    </CardContent>
  </Card>;
export default function CategoryManagementPage_HeaderSummary() {
  const [metrics, setMetrics] = useState<DashboardMetricsState>({
    totalCategories: 0,
    activeCategories: 0,
    hiddenCategories: 0,
    newThisMonth: 0,
    loading: true,
    error: false
  });
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const session = getadmin_session();
        if (!session || !session.token) {
          // In a real app, you might redirect here or show a restricted state
          setMetrics(prev => ({
            ...prev,
            loading: false,
            error: true
          }));
          return;
        }

        // Calculate first day of current month for "New this month" metric
        const now = new Date();
        const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

        // Parallel data fetching for performance
        const [total, active, hidden, newMonth] = await Promise.all([entities.category.Count({}), entities.category.Count({
          is_visible: true
        }), entities.category.Count({
          is_visible: false
        }), entities.category.Count({
          created_at: {
            gte: firstDayOfMonth
          }
        })]);
        setMetrics({
          totalCategories: total,
          activeCategories: active,
          hiddenCategories: hidden,
          newThisMonth: newMonth,
          loading: false,
          error: false
        });
      } catch (err) {
        console.error("Failed to fetch category metrics:", err);
        toast.error('Unable to load dashboard metrics. Please try refreshing.');
        setMetrics(prev => ({
          ...prev,
          loading: false,
          error: true
        }));
      }
    };
    fetchMetrics();
  }, []);

  // Prepare Chart Data
  const chartData = [{
    name: "active",
    value: metrics.activeCategories,
    fill: "#10b981"
  }, {
    name: "inactive",
    value: metrics.hiddenCategories,
    fill: "#64748b"
  }];

  // Calculate percentage for display
  const activePercentage = metrics.totalCategories > 0 ? Math.round(metrics.activeCategories / metrics.totalCategories * 100) : 0;
  if (metrics.error) {
    return <div className="w-full bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-8 py-10">
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="flex flex-row items-center gap-2">
              <AlertCircle className="h-5 w-5 text-red-600" />
              <CardTitle className="text-red-800 text-lg">Metrics Unavailable</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-red-600">
                We couldn't load the category statistics at this moment. Please check your connection or try again later.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>;
  }
  return <section className="w-full bg-white border-b border-slate-200">
      <div className="container mx-auto px-8 py-10">
        
        <div className="flex flex-col space-y-6">
          
          {/* Section Header */}
          <div className="flex flex-col space-y-1.5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Category Overview
            </h2>
            <p className="text-sm text-slate-500">
              Real-time snapshot of your product catalog organization and visibility status.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Total Categories */}
            {metrics.loading ? <MetricCardSkeleton /> : <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    Total Categories
                  </CardTitle>
                  <Layers className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.totalCategories.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Across entire store catalog
                  </p>
                </CardContent>
              </Card>}

            {/* Card 2: Active Categories */}
            {metrics.loading ? <MetricCardSkeleton /> : <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow duration-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-5">
                   <Eye className="w-24 h-24 text-emerald-500 transform translate-x-4 -translate-y-4" />
                </div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    Active & Visible
                  </CardTitle>
                  <Eye className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.activeCategories.toLocaleString()}
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden max-w-[120px]">
                      <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{
                    width: `${activePercentage}%`
                  }} />
                    </div>
                    <span className="text-xs text-emerald-600 font-medium ml-2">
                      {activePercentage}% Live
                    </span>
                  </div>
                </CardContent>
              </Card>}

            {/* Card 3: Hidden Categories */}
            {metrics.loading ? <MetricCardSkeleton /> : <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow duration-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    Hidden / Drafts
                  </CardTitle>
                  <EyeOff className="h-4 w-4 text-slate-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.hiddenCategories.toLocaleString()}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Not visible to customers
                  </p>
                </CardContent>
              </Card>}

            {/* Card 4: New This Month */}
            {metrics.loading ? <MetricCardSkeleton /> : <Card className="shadow-sm border-slate-200 hover:shadow-md transition-shadow duration-200 bg-slate-50/50">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-slate-600">
                    New This Month
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-slate-900">
                    +{metrics.newThisMonth.toLocaleString()}
                  </div>
                  <p className="text-xs text-blue-600 mt-1 font-medium">
                    Growth rate tracking
                  </p>
                </CardContent>
              </Card>}

            {/* Optional: Distribution Chart Card (Spans 2 cols on tablet, 1 on desktop if we wanted, but let's integrate it or keep it simple. 
                Given the requirement for Charts, let's replace a generic layout with a 3+1 layout where the 4th is a chart if data allows, 
                or just keep the grid 4. To properly use the ChartConfig required, let's add a visual breakdown below or as a specialized card.)
             */}
          </div>
          
          {/* Detailed Distribution Section (Satisfies ChartConfig requirement) */}
          {!metrics.loading && metrics.totalCategories > 0 && <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
               <Card className="col-span-1 shadow-sm border-slate-200">
                 <CardHeader>
                   <CardTitle className="text-base font-semibold text-slate-900">Visibility Distribution</CardTitle>
                   <CardDescription>Ratio of active vs inactive categories</CardDescription>
                 </CardHeader>
                 <CardContent className="flex justify-center pb-6">
                    <div className="h-[200px] w-full max-w-[300px] relative">
                      <ChartContainer config={chartConfig} className="w-full h-full">
                        <PieChart>
                          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} stroke="none">
                             {chartData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} />)}
                          </Pie>
                          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                        </PieChart>
                      </ChartContainer>
                      {/* Center Text Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-bold text-slate-900">{metrics.totalCategories}</span>
                        <span className="text-xs text-slate-500 uppercase tracking-wider">Total</span>
                      </div>
                    </div>
                 </CardContent>
                 <CardFooter className="flex justify-center gap-6 pt-0 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-slate-600">Visible</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-500" />
                      <span className="text-slate-600">Hidden</span>
                    </div>
                 </CardFooter>
               </Card>

               <Card className="col-span-1 lg:col-span-2 shadow-sm border-slate-200 flex flex-col justify-center bg-slate-50/50 border-dashed">
                 <CardContent className="flex flex-col items-center justify-center py-12 text-center space-y-3">
                   <div className="p-3 bg-white rounded-full shadow-sm">
                     <Layers className="w-6 h-6 text-blue-500" />
                   </div>
                   <div className="space-y-1">
                     <h3 className="text-lg font-semibold text-slate-900">Manage Your Catalog</h3>
                     <p className="text-sm text-slate-500 max-w-md mx-auto">
                       Use the tools below to edit category details, update cover images, or change visibility status. Changes reflect immediately on the storefront.
                     </p>
                   </div>
                 </CardContent>
               </Card>
             </div>}

        </div>
      </div>
    </section>;
}
