'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';
import { Loader2, Users, TrendingUp, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import type { user } from '@/server/entities.type';

// --- Type Definitions for Analytics ---

type MonthlyGrowthData = {
  month: string;
  count: number;
};
type StatusDistributionData = {
  name: string;
  value: number;
  fill: string;
};
type RoleDistributionData = {
  role: string;
  count: number;
  fill: string;
};

// --- Chart Configurations (Shadcn UI Pattern) ---

const growthChartConfig = {
  count: {
    label: "Registrations",
    color: "#3b82f6" // Brand Accent
  }
} satisfies ChartConfig;
const statusChartConfig = {
  active: {
    label: "Active",
    color: "#10b981" // Success
  },
  suspended: {
    label: "Suspended",
    color: "#f59e0b" // Warning
  },
  deleted: {
    label: "Deleted",
    color: "#ef4444" // Error
  }
} satisfies ChartConfig;
const roleChartConfig = {
  customer: {
    label: "Customers",
    color: "#0f172a" // Primary
  },
  admin: {
    label: "Admins",
    color: "#64748b" // Secondary
  },
  super_admin: {
    label: "Super Admins",
    color: "#3b82f6" // Accent
  }
} satisfies ChartConfig;
export default function AnalyticsPage_UserDemographics() {
  const router = useRouter();
  const [users, setUsers] = useState<user[]>([]);
  const [loading, setLoading] = useState(true);

  // --- Data Fetching ---

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const session = getadmin_session();

        // Logic Bifurcation: Check Admin Session
        if (!session || !session.token) {
          toast.error("Unauthorized access. Please login as admin.");
          // In a real app, might redirect here, but we just stop loading for the component
          setLoading(false);
          return;
        }

        // Fetch all users for client-side aggregation
        // Note: In a large-scale production app, aggregation should happen on the DB side.
        // Using GetAll here as per available entities proxy methods.
        const response = await entities.user.GetAll();
        setUsers(response || []);
      } catch (err) {
        console.error("Failed to fetch user demographics:", err);
        toast.error("Failed to load analytics data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // --- Data Processing (Memoized) ---

  const growthData = useMemo<MonthlyGrowthData[]>(() => {
    if (!users.length) return [];
    const last6Months = new Array(6).fill(0).map((_, index) => {
      const d = new Date();
      d.setMonth(d.getMonth() - index);
      return {
        key: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`,
        label: d.toLocaleString('en-US', {
          month: 'short',
          year: 'numeric'
        }),
        count: 0
      };
    }).reverse();
    const monthMap = new Map(last6Months.map((m, index) => [m.key, m]));
    users.forEach(u => {
      const date = new Date(u.created_at);
      const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      if (monthMap.has(key)) {
        monthMap.get(key)!.count++;
      }
    });
    return last6Months.map((m, index) => ({
      month: m.label,
      count: m.count
    }));
  }, [users]);
  const statusData = useMemo<StatusDistributionData[]>(() => {
    const counts = {
      active: 0,
      suspended: 0,
      deleted: 0
    };
    users.forEach(u => {
      if (u.status in counts) counts[u.status as keyof typeof counts]++;
    });
    return [{
      name: 'Active',
      value: counts.active,
      fill: statusChartConfig.active.color
    }, {
      name: 'Suspended',
      value: counts.suspended,
      fill: statusChartConfig.suspended.color
    }, {
      name: 'Deleted',
      value: counts.deleted,
      fill: statusChartConfig.deleted.color
    }].filter(d => d.value > 0);
  }, [users]);
  const roleData = useMemo<RoleDistributionData[]>(() => {
    const counts = {
      customer: 0,
      admin: 0,
      super_admin: 0
    };
    users.forEach(u => {
      if (u.role in counts) counts[u.role as keyof typeof counts]++;
    });
    return [{
      role: 'Customers',
      count: counts.customer,
      fill: roleChartConfig.customer.color
    }, {
      role: 'Admins',
      count: counts.admin,
      fill: roleChartConfig.admin.color
    }, {
      role: 'Super Admins',
      count: counts.super_admin,
      fill: roleChartConfig.super_admin.color
    }].filter(d => d.count > 0);
  }, [users]);
  const totalUsers = users.length;
  const activeRate = totalUsers > 0 ? (users.filter(u => u.status === 'active').length / totalUsers * 100).toFixed(1) : '0';

  // --- Event Handlers ---

  const handleNavigateToUsers = () => {
    router.push('/usermanagementpage');
  };

  // --- Render Helpers ---

  if (loading) {
    return <div className="w-full bg-slate-50 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
               <div className="h-8 w-1/3 bg-slate-200 rounded animate-pulse mb-6" />
               <div className="h-[400px] w-full bg-slate-200 rounded-xl animate-pulse" />
            </div>
            <div className="space-y-6">
               <div className="h-[190px] w-full bg-slate-200 rounded-xl animate-pulse" />
               <div className="h-[190px] w-full bg-slate-200 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>;
  }

  // --- Main Render ---

  return <section className="w-full bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-8 py-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-h2 font-bold text-slate-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              User Demographics
            </h2>
            <p className="text-base text-slate-500 mt-2 max-w-2xl">
              Visualizes the customer base composition and growth trends to inform platform optimization.
            </p>
          </div>
          <Button onClick={handleNavigateToUsers} className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm transition-all hover:shadow-md">
            View All Users
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {users.length === 0 ?
      // Empty State
      <Card className="w-full py-12 flex flex-col items-center justify-center text-center bg-white border-dashed border-2 border-slate-300 shadow-none">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-h2 text-slate-700 mb-2">No User Data Available</h3>
            <p className="text-base text-slate-500 max-w-md">
              There are currently no users registered in the system. Once users sign up, analytics will appear here.
            </p>
          </Card> :
      // Dashboard Grid
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart 1: Registration Trends (Main Feature) */}
            <Card className="lg:col-span-2 shadow-sm border-slate-200 bg-white flex flex-col">
              <CardHeader>
                <CardTitle className="text-h2 text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  Registration Trends
                </CardTitle>
                <CardDescription className="text-caption text-slate-500">
                  New user sign-ups over the last 6 months
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 min-h-[300px] pl-0">
                <ChartContainer config={growthChartConfig} className="h-full w-full">
                  <BarChart data={growthData} margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
              }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{
                  fill: '#64748b',
                  fontSize: 12
                }} dy={10} />
                    <YAxis tickLine={false} axisLine={false} tick={{
                  fill: '#64748b',
                  fontSize: 12
                }} dx={-10} />
                    <ChartTooltip cursor={{
                  fill: '#f1f5f9'
                }} content={<ChartTooltipContent indicator="dashed" />} />
                    <Bar dataKey="count" fill="var(--color-count)" radius={[6, 6, 0, 0]} barSize={40} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>

            {/* Right Column: Distribution Cards */}
            <div className="space-y-6 flex flex-col">
              
              {/* Chart 2: Status Distribution */}
              <Card className="shadow-sm border-slate-200 bg-white flex-1 flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-base font-semibold text-slate-900 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Account Status
                    </CardTitle>
                    <span className="text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                      {activeRate}% Active
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex items-center justify-center relative min-h-[200px]">
                  <ChartContainer config={statusChartConfig} className="h-[180px] w-full">
                    <PieChart>
                      <Pie data={statusData} cx="50%" cy="50%" innerRadius={55} outerRadius={75} paddingAngle={5} dataKey="value">
                        {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.fill} strokeWidth={0} />)}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                    </PieChart>
                  </ChartContainer>
                  {/* Center Text Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-2xl font-bold text-slate-900">{totalUsers}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Total</span>
                  </div>
                </CardContent>
                {/* Custom Legend */}
                <div className="px-6 pb-6 pt-0 flex flex-wrap gap-3 justify-center">
                  {statusData.map((item, index) => <div key={item.name} className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full" style={{
                  backgroundColor: item.fill
                }} />
                      <span className="text-caption text-slate-600">{item.name}</span>
                    </div>)}
                </div>
              </Card>

              {/* Chart 3: Role Composition */}
              <Card className="shadow-sm border-slate-200 bg-white flex-1 flex flex-col">
                 <CardHeader className="pb-2">
                    <CardTitle className="text-base font-semibold text-slate-900 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-blue-600" />
                      Role Breakdown
                    </CardTitle>
                 </CardHeader>
                 <CardContent className="pt-2">
                    <div className="space-y-4">
                      {roleData.map((item, index) => <div key={item.role} className="group">
                          <div className="flex justify-between text-sm mb-1.5">
                            <span className="text-slate-700 font-medium">{item.role}</span>
                            <span className="text-slate-500">{item.count} users</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className="h-full rounded-full transition-all duration-500 ease-out" style={{
                      width: `${item.count / totalUsers * 100}%`,
                      backgroundColor: item.fill
                    }} />
                          </div>
                        </div>)}
                    </div>
                 </CardContent>
              </Card>

            </div>
          </div>}
      </div>
    </section>;
}
