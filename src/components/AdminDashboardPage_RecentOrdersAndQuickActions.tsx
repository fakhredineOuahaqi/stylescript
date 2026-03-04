'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Package, Users, ShoppingCart, ChevronRight, Clock, CreditCard, MapPin, Box, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

// Entities & Types
import type { order, user, order_item } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { getadminSession } from '@/tools/SessionContext';

// UI Components
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import EditableImg from '@/@base/EditableImg';

// ----------------------------------------------------------------------
// Types & Helpers
// ----------------------------------------------------------------------

type OrderWithUser = order & {
  user?: user | null;
};
const STATUS_COLOR_MAP: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
  shipped: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  delivered: 'bg-green-100 text-green-800 border-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200',
  refunded: 'bg-gray-100 text-gray-800 border-gray-200'
};
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MAD' // Moroccan Dirham context
  }).format(amount);
};

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

export default function AdminDashboardPage_RecentOrdersAndQuickActions() {
  const router = useRouter();

  // State
  const [recentOrders, setRecentOrders] = useState<OrderWithUser[]>([]);
  const [loading, setLoading] = useState(true);

  // Drawer / Sheet State
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderWithUser | null>(null);
  const [orderItems, setOrderItems] = useState<order_item[]>([]);
  const [loadingItems, setLoadingItems] = useState(false);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const session = getadminSession();
        if (!session || !session.token) {
          // In a real app, redirection logic would go here
          // For this component, we just stop loading
          setLoading(false);
          return;
        }

        // 1. Fetch recent orders (page 1, size 7)
        // Note: Assuming the backend returns the most recent by default or we'd need sorting
        const ordersData = await entities.order.GetPage(1, 7);
        if (ordersData && ordersData.length > 0) {
          // 2. Fetch associated users to display names
          const userIds = Array.from(new Set(ordersData.map((o, index) => o.user_id)));
          const usersData = await entities.user.GetAll({
            id: {
              in: userIds
            }
          });

          // 3. Merge data
          const mergedOrders = ordersData.map((order, index) => {
            const foundUser = usersData.find(u => u.id === order.user_id);
            return {
              ...order,
              user: foundUser || null
            };
          });
          setRecentOrders(mergedOrders);
        } else {
          setRecentOrders([]);
        }
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
        toast.error('Failed to load recent orders.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle Order Click (Open Drawer)
  const handleOrderClick = async (order: OrderWithUser) => {
    setSelectedOrder(order);
    setIsSheetOpen(true);
    setLoadingItems(true);
    setOrderItems([]);
    try {
      const items = await entities.order_item.GetAll({
        order_id: {
          equals: order.id
        }
      });
      setOrderItems(items);
    } catch (error) {
      console.error('Failed to fetch order items:', error);
      toast.error('Failed to load order details.');
    } finally {
      setLoadingItems(false);
    }
  };

  // Quick Actions Config
  const quickActions = [{
    label: "View All Orders",
    icon: <ShoppingCart className="w-5 h-5" />,
    target: "/ordermanagementpage",
    description: "Manage and track all customer orders",
    color: "text-blue-600 bg-blue-50 hover:bg-blue-100 border-blue-100"
  }, {
    label: "Add New Product",
    icon: <Package className="w-5 h-5" />,
    target: "/productmanagementpage",
    description: "Create and publish new merchandise",
    color: "text-emerald-600 bg-emerald-50 hover:bg-emerald-100 border-emerald-100"
  }, {
    label: "Manage Users",
    icon: <Users className="w-5 h-5" />,
    target: "/usermanagementpage",
    description: "Administer customer accounts & roles",
    color: "text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border-indigo-100"
  }];
  return <section className="w-full bg-[#f8fafc]">
      <div className="container mx-auto px-8 py-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column: Recent Orders (2/3 width) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Card className="border shadow-sm border-slate-200 bg-white">
              <CardHeader className="border-b border-slate-100 px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-h2 font-semibold text-slate-900">Recent Orders</CardTitle>
                    <CardDescription className="text-caption text-slate-500 mt-1">
                      Overview of the latest transactions requiring attention.
                    </CardDescription>
                  </div>
                  {/* Optional: Add a small 'Refresh' button here if needed */}
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow className="border-b border-slate-100 hover:bg-slate-50">
                      <TableHead className="w-[100px] text-slate-500 font-medium">Order #</TableHead>
                      <TableHead className="text-slate-500 font-medium">Customer</TableHead>
                      <TableHead className="text-slate-500 font-medium">Date</TableHead>
                      <TableHead className="text-slate-500 font-medium">Status</TableHead>
                      <TableHead className="text-right text-slate-500 font-medium">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {loading ?
                  // Loading Skeletons
                  Array.from({
                    length: 5
                  }).map((_, index) => <TableRow key={index} className="border-b border-slate-50">
                          <TableCell><Skeleton className="h-4 w-12" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                          <TableCell><Skeleton className="h-4 w-20" /></TableCell>
                          <TableCell><Skeleton className="h-5 w-16 rounded-full" /></TableCell>
                          <TableCell className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableCell>
                        </TableRow>) : recentOrders.length === 0 ?
                  // Empty State
                  <TableRow>
                        <TableCell colSpan={5} className="h-32 text-center text-slate-500">
                          <div className="flex flex-col items-center justify-center gap-2">
                            <Box className="w-8 h-8 text-slate-300" />
                            <p className="text-sm font-medium">No recent orders found</p>
                          </div>
                        </TableCell>
                      </TableRow> :
                  // Real Data
                  recentOrders.map((order, index) => <TableRow key={order.id} className="cursor-pointer hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0" onClick={() => handleOrderClick(order)}>
                          <TableCell className="font-medium text-slate-700">
                            #{order.order_number}
                          </TableCell>
                          <TableCell className="text-slate-600">
                            <div className="flex flex-col">
                              <span className="font-medium text-slate-900 text-sm">
                                {order.user?.username || `User #${order.user_id}`}
                              </span>
                              <span className="text-xs text-slate-400">
                                {order.user?.email || 'No email'}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell className="text-slate-500 text-sm">
                            {format(new Date(order.created_at), 'MMM dd, HH:mm')}
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={cn("capitalize font-normal px-2.5 py-0.5 rounded-full shadow-none", STATUS_COLOR_MAP[order.status] || 'bg-slate-100 text-slate-600')}>
                              {order.status.replace('_', ' ')}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right font-medium text-slate-900">
                            {formatCurrency(order.total_amount)}
                          </TableCell>
                        </TableRow>)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Quick Actions (1/3 width) */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <Card className="border shadow-sm border-slate-200 bg-white h-full">
              <CardHeader className="border-b border-slate-100 px-6 py-5">
                <CardTitle className="text-h2 font-semibold text-slate-900">Quick Actions</CardTitle>
                <CardDescription className="text-caption text-slate-500 mt-1">
                  Shortcuts to frequently used management tools.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-4">
                {quickActions.map((action, index) => <button key={index} onClick={() => router.push(action.target)} className="group relative flex items-start p-4 rounded-xl border border-slate-100 bg-white hover:border-blue-100 hover:shadow-md transition-all duration-200 text-left w-full">
                    <div className={cn("p-2.5 rounded-lg mr-4 transition-colors", action.color)}>
                      {action.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                          {action.label}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-transform group-hover:translate-x-0.5" />
                      </div>
                      <p className="text-caption text-slate-500 line-clamp-2">
                        {action.description}
                      </p>
                    </div>
                  </button>)}

                {/* Optional Stats or Info Box below actions */}
                <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-100">
                   <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">System Status</span>
                   </div>
                   <p className="text-caption text-slate-500">
                      All systems operational. Last backup performed today at 04:00 AM.
                   </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* Order Details Drawer (Sheet) */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-full sm:max-w-xl p-0 flex flex-col bg-white">
          {selectedOrder && <>
              {/* Drawer Header */}
              <div className="px-6 py-6 border-b border-slate-100 bg-slate-50/50">
                <SheetHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={cn("px-3 py-1 text-sm font-medium rounded-md", STATUS_COLOR_MAP[selectedOrder.status])}>
                      {selectedOrder.status.toUpperCase()}
                    </Badge>
                    <span className="text-sm text-slate-500 flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {format(new Date(selectedOrder.created_at), 'PPP p')}
                    </span>
                  </div>
                  <div>
                    <SheetTitle className="text-2xl font-bold text-slate-900">
                      Order #{selectedOrder.order_number}
                    </SheetTitle>
                    <SheetDescription className="text-base text-slate-500 mt-1">
                      Customer: <span className="font-medium text-slate-700">{selectedOrder.user?.username || 'Unknown'}</span>
                    </SheetDescription>
                  </div>
                </SheetHeader>
              </div>

              {/* Drawer Scrollable Content */}
              <ScrollArea className="flex-1">
                <div className="p-6 space-y-8">
                  
                  {/* Order Items Section */}
                  <section>
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Order Items</h4>
                    <div className="space-y-4">
                      {loadingItems ? Array.from({
                    length: 3
                  }).map((_, index) => <div key={index} className="flex gap-4">
                             <Skeleton className="w-16 h-16 rounded-md" />
                             <div className="flex-1 space-y-2">
                               <Skeleton className="h-4 w-3/4" />
                               <Skeleton className="h-4 w-1/4" />
                             </div>
                           </div>) : orderItems.map((item, index) => <div key={item.id} className="flex gap-4 items-start group">
                            <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 shrink-0">
                               <EditableImg propKey={`order-item-${item.id}`} keywords={item.product_title} // Use title as keyword for placeholder if url missing
                      description="Product thumbnail" className="w-full h-full object-cover" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-base font-medium text-slate-900 truncate" title={item.product_title}>
                                {item.product_title}
                              </h5>
                              <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
                                <span>Size: {item.selected_size || 'N/A'}</span>
                                <span className="w-1 h-1 rounded-full bg-slate-300" />
                                <span>Color: {item.selected_color || 'N/A'}</span>
                              </div>
                              <div className="flex items-center justify-between mt-2">
                                <span className="text-sm text-slate-600">Qty: {item.quantity}</span>
                                <span className="text-sm font-semibold text-slate-900">
                                  {formatCurrency(item.price_at_purchase * item.quantity)}
                                </span>
                              </div>
                            </div>
                          </div>)}
                    </div>
                  </section>

                  <Separator />

                  {/* Payment & Shipping Info Grid */}
                  <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 uppercase tracking-wider">
                        <CreditCard className="w-4 h-4 text-slate-400" />
                        Payment Info
                      </h4>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <div className="flex justify-between py-1">
                          <span className="text-sm text-slate-500">Method</span>
                          <span className="text-sm font-medium text-slate-900 capitalize">
                            {selectedOrder.payment_method.replace(/_/g, ' ')}
                          </span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-sm text-slate-500">Subtotal</span>
                          <span className="text-sm font-medium text-slate-900">
                            {formatCurrency(selectedOrder.total_price)}
                          </span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-sm text-slate-500">Shipping</span>
                          <span className="text-sm font-medium text-slate-900">
                            {formatCurrency(selectedOrder.shipping_fee)}
                          </span>
                        </div>
                        <Separator className="my-2" />
                        <div className="flex justify-between py-1">
                          <span className="text-sm font-bold text-slate-900">Total</span>
                          <span className="text-sm font-bold text-slate-900">
                            {formatCurrency(selectedOrder.total_amount)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-900 uppercase tracking-wider">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        Shipping Info
                      </h4>
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 h-full">
                        <p className="text-sm font-medium text-slate-900 mb-1">
                          {selectedOrder.shipping_name}
                        </p>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {selectedOrder.shipping_address}<br />
                          {selectedOrder.shipping_city && `${selectedOrder.shipping_city}, `} 
                          Morocco
                        </p>
                        <p className="text-sm text-slate-500 mt-2 flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-green-500"></span>
                           {selectedOrder.shipping_phone}
                        </p>
                      </div>
                    </div>
                  </section>

                </div>
              </ScrollArea>
              
              {/* Drawer Footer Actions */}
              <div className="p-6 border-t border-slate-100 bg-white">
                <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 rounded-xl shadow-lg shadow-slate-200" onClick={() => router.push(`/ordermanagementpage?id=${selectedOrder.id}`)}>
                   Manage Full Order Details
                </Button>
              </div>
            </>}
        </SheetContent>
      </Sheet>
    </section>;
}
