'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { type DateRange } from 'react-day-picker';
import { format } from 'date-fns';
import { Search, Filter, MoreHorizontal, Eye, AlertCircle, Package, Calendar as CalendarIcon, Truck, XCircle, CheckCircle2, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import EditableImg from "@/@base/EditableImg";
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import type { order, order_item, order_status, filtered_order } from '@/server/entities.type';

// --- Constants & Types ---

const ITEMS_PER_PAGE = 10;
const ORDER_STATUSES: order_status[] = ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled', 'refunded'];
const statusColors: Record<order_status, string> = {
  pending: 'bg-yellow-100 text-yellow-800 border-yellow-200 hover:bg-yellow-200',
  confirmed: 'bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200',
  shipped: 'bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200',
  delivered: 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200',
  cancelled: 'bg-red-100 text-red-800 border-red-200 hover:bg-red-200',
  refunded: 'bg-gray-100 text-gray-800 border-gray-200 hover:bg-gray-200'
};

// Zod Schema for Cancellation/Refund
const cancelOrderSchema = z.object({
  reason: z.string().min(5, {
    message: "Reason must be at least 5 characters long."
  })
});

// --- Main Component ---

export default function OrderManagementPage_MasterTable() {
  // State: Data
  const [orders, setOrders] = useState<order[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  // State: Pagination & Filters
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<order_status | 'all'>('all');
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  // State: Drawer (Details)
  const [selectedOrder, setSelectedOrder] = useState<order | null>(null);
  const [orderItems, setOrderItems] = useState<order_item[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [itemsLoading, setItemsLoading] = useState(false);

  // State: Dialog (Cancel)
  const [orderToCancel, setOrderToCancel] = useState<order | null>(null);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  // Form for cancellation
  const cancelForm = useForm<z.infer<typeof cancelOrderSchema>>({
    resolver: zodResolver(cancelOrderSchema),
    defaultValues: {
      reason: ''
    }
  });

  // --- Data Fetching ---

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const session = getadmin_session();
      if (!session || !session.token) {
        toast.error('Unauthorized access. Please login.');
        return;
      }
      const filters: filtered_order = {};
      if (searchTerm) {
        filters.order_number = {
          contains: searchTerm
        };
      }
      if (statusFilter !== 'all') {
        filters.status = {
          equals: statusFilter
        };
      }
      if (dateRange?.from) {
        filters.created_at = {
          gte: dateRange.from,
          ...(dateRange.to ? {
            lte: dateRange.to
          } : {})
        };
      }

      // Fetch Data
      const [data, count] = await Promise.all([entities.order.GetPage(currentPage, ITEMS_PER_PAGE, filters), entities.order.Count(filters)]);
      setOrders(data || []);
      setTotalCount(count || 0);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
      toast.error('Failed to load orders.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [currentPage, searchTerm, statusFilter, dateRange]);

  // Fetch items when an order is selected for the drawer
  const fetchOrderItems = async (orderId: number) => {
    try {
      setItemsLoading(true);
      const items = await entities.order_item.GetAll({
        order_id: {
          equals: orderId
        }
      });
      setOrderItems(items || []);
    } catch (error) {
      console.error('Failed to fetch items:', error);
      toast.error('Failed to load order items.');
    } finally {
      setItemsLoading(false);
    }
  };

  // --- Handlers ---

  const handleOpenDrawer = (order: order) => {
    setSelectedOrder(order);
    setIsDrawerOpen(true);
    fetchOrderItems(order.id);
  };
  const handleStatusChange = async (orderId: number, newStatus: order_status) => {
    try {
      const session = getadmin_session();
      if (!session) return;

      // Optimistic update
      setOrders(prev => prev.map((o, index) => o.id === orderId ? {
        ...o,
        status: newStatus
      } : o));
      await entities.order.Update({
        where: {
          id: orderId
        },
        data: {
          status: newStatus,
          order_number: orders.find(o => o.id === orderId)?.order_number || '',
          // Keep existing required fields
          user_id: orders.find(o => o.id === orderId)?.user_id || 0,
          payment_method: orders.find(o => o.id === orderId)?.payment_method || 'credit_card',
          total_amount: orders.find(o => o.id === orderId)?.total_amount || 0,
          total_price: orders.find(o => o.id === orderId)?.total_price || 0,
          shipping_fee: orders.find(o => o.id === orderId)?.shipping_fee || 0,
          shipping_name: orders.find(o => o.id === orderId)?.shipping_name || '',
          shipping_phone: orders.find(o => o.id === orderId)?.shipping_phone || '',
          shipping_address: orders.find(o => o.id === orderId)?.shipping_address || '',
          created_at: orders.find(o => o.id === orderId)?.created_at || new Date(),
          updated_at: new Date()
        }
      });
      toast.success(`Order status updated to ${newStatus}`);
      fetchOrders(); // Re-fetch to ensure consistency
    } catch (error) {
      console.error('Update failed:', error);
      toast.error('Failed to update status.');
      fetchOrders(); // Revert on fail
    }
  };
  const handleOpenCancelDialog = (order: order) => {
    setOrderToCancel(order);
    cancelForm.reset();
    setIsCancelDialogOpen(true);
  };
  const onCancelSubmit = async (data: z.infer<typeof cancelOrderSchema>) => {
    if (!orderToCancel) return;
    try {
      await entities.order.Update({
        where: {
          id: orderToCancel.id
        },
        data: {
          status: 'cancelled',
          refund_reason: data.reason,
          // Mandatory fields boilerplate to satisfy type (in real app, use partial update or spread existing)
          order_number: orderToCancel.order_number,
          user_id: orderToCancel.user_id,
          payment_method: orderToCancel.payment_method,
          total_amount: orderToCancel.total_amount,
          total_price: orderToCancel.total_price,
          shipping_fee: orderToCancel.shipping_fee,
          shipping_name: orderToCancel.shipping_name,
          shipping_phone: orderToCancel.shipping_phone,
          shipping_address: orderToCancel.shipping_address,
          created_at: orderToCancel.created_at,
          updated_at: new Date()
        }
      });
      toast.success('Order cancelled successfully.');
      setIsCancelDialogOpen(false);
      fetchOrders();
    } catch (error) {
      console.error('Cancel failed:', error);
      toast.error('Failed to cancel order.');
    }
  };

  // --- Render ---
  /* Extracted array: _items */
  const _items = [1, 2];
  return <div className="w-full min-h-screen bg-slate-50 text-slate-900 font-sans">
      <div className="container mx-auto px-8 py-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-h2 font-bold text-slate-900 tracking-tight">Order Management</h1>
            <p className="text-base text-slate-500 mt-1">
              Manage and fulfill customer orders efficiently.
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2" onClick={() => fetchOrders()}>
              <ArrowUpDown className="w-4 h-4" />
              Refresh
            </Button>
            <Button className="bg-slate-900 text-white hover:bg-slate-800 gap-2">
              <Package className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          
          {/* Search */}
          <div className="col-span-1 md:col-span-4">
            <label className="text-caption font-medium text-slate-700 mb-1.5 block">Search Order ID</label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <Input placeholder="Order #12345" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="pl-9 bg-slate-50 border-slate-200 focus:border-blue-500" />
            </div>
          </div>

          {/* Status Filter */}
          <div className="col-span-1 md:col-span-3">
             <label className="text-caption font-medium text-slate-700 mb-1.5 block">Status</label>
             <Select value={statusFilter} onValueChange={val => setStatusFilter(val as order_status | 'all')}>
              <SelectTrigger className="bg-slate-50 border-slate-200">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                {ORDER_STATUSES.map((status, index) => <SelectItem key={status} value={status} className="capitalize">
                    {status.replace('_', ' ')}
                  </SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          {/* Date Filter (Simplified Popover for Date Range) */}
          <div className="col-span-1 md:col-span-3">
            <label className="text-caption font-medium text-slate-700 mb-1.5 block">Order Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className={`w-full justify-start text-left font-normal bg-slate-50 border-slate-200 ${!dateRange && "text-muted-foreground"}`}>
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange?.from ? dateRange.to ? <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </> : format(dateRange.from, "LLL dd, y") : <span>Pick a date range</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar initialFocus mode="range" defaultMonth={dateRange?.from} selected={dateRange} onSelect={setDateRange} numberOfMonths={2} />
              </PopoverContent>
            </Popover>
          </div>

          {/* Reset Action */}
          <div className="col-span-1 md:col-span-2 flex justify-end">
            <Button variant="ghost" className="text-slate-500 hover:text-slate-900 w-full" onClick={() => {
            setSearchTerm('');
            setStatusFilter('all');
            setDateRange(undefined);
          }}>
              Reset Filters
            </Button>
          </div>
        </div>

        {/* Master Table */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="w-[150px] font-semibold text-slate-700">Order #</TableHead>
                <TableHead className="font-semibold text-slate-700">Customer</TableHead>
                <TableHead className="font-semibold text-slate-700">Date</TableHead>
                <TableHead className="font-semibold text-slate-700">Total</TableHead>
                <TableHead className="font-semibold text-slate-700">Payment</TableHead>
                <TableHead className="w-[180px] font-semibold text-slate-700">Status</TableHead>
                <TableHead className="text-right font-semibold text-slate-700 pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ?
            // Loading State
            Array.from({
              length: 5
            }).map((_, index) => <TableRow key={index}>
                    <TableCell><div className="h-4 w-24 bg-slate-100 rounded animate-pulse" /></TableCell>
                    <TableCell><div className="h-4 w-32 bg-slate-100 rounded animate-pulse" /></TableCell>
                    <TableCell><div className="h-4 w-20 bg-slate-100 rounded animate-pulse" /></TableCell>
                    <TableCell><div className="h-4 w-16 bg-slate-100 rounded animate-pulse" /></TableCell>
                    <TableCell><div className="h-4 w-24 bg-slate-100 rounded animate-pulse" /></TableCell>
                    <TableCell><div className="h-6 w-24 bg-slate-100 rounded-full animate-pulse" /></TableCell>
                    <TableCell className="text-right"><div className="h-8 w-8 bg-slate-100 rounded ml-auto animate-pulse" /></TableCell>
                  </TableRow>) : orders.length === 0 ?
            // Empty State
            <TableRow>
                  <TableCell colSpan={7} className="h-64 text-center">
                    <div className="flex flex-col items-center justify-center text-slate-400">
                      <Package className="w-12 h-12 mb-3 opacity-20" />
                      <p className="text-lg font-medium">No orders found</p>
                      <p className="text-sm">Try adjusting your filters.</p>
                    </div>
                  </TableCell>
                </TableRow> :
            // Data Rows
            orders.map((order, index) => <TableRow key={order.id} className="hover:bg-slate-50 transition-colors group">
                    <TableCell className="font-medium text-slate-900">
                      {order.order_number}
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="text-slate-900 font-medium">{order.shipping_name}</span>
                        <span className="text-xs text-slate-500">ID: {order.user_id}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600">
                      {format(new Date(order.created_at), 'MMM dd, yyyy')}
                    </TableCell>
                    <TableCell className="font-semibold text-slate-900">
                      ${order.total_price.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-slate-600 capitalize">
                      {order.payment_method.replace(/_/g, ' ')}
                    </TableCell>
                    <TableCell>
                      {/* Interactive Status Popover */}
                      <Popover>
                        <PopoverTrigger asChild>
                          <Badge variant="outline" className={`cursor-pointer transition-all ${statusColors[order.status]} flex items-center w-fit gap-1 pr-2`}>
                            {order.status === 'delivered' && <CheckCircle2 className="w-3 h-3" />}
                            {order.status === 'cancelled' && <XCircle className="w-3 h-3" />}
                            {order.status === 'pending' && <AlertCircle className="w-3 h-3" />}
                            {order.status === 'shipped' && <Truck className="w-3 h-3" />}
                            <span className="capitalize">{order.status}</span>
                          </Badge>
                        </PopoverTrigger>
                        <PopoverContent className="w-48 p-2" align="start">
                           <div className="space-y-1">
                             <h4 className="font-medium text-xs text-slate-500 px-2 py-1 uppercase tracking-wider">Update Status</h4>
                             {ORDER_STATUSES.map((s, index) => <div key={s} onClick={() => handleStatusChange(order.id, s)} className={`
                                  px-2 py-1.5 rounded-md text-sm cursor-pointer capitalize flex items-center justify-between
                                  ${s === order.status ? 'bg-slate-100 font-medium' : 'hover:bg-slate-50'}
                                `}>
                                 {s}
                                 {s === order.status && <CheckCircle2 className="w-3 h-3 text-slate-500" />}
                               </div>)}
                           </div>
                        </PopoverContent>
                      </Popover>
                    </TableCell>
                    <TableCell className="text-right">
                       <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => handleOpenDrawer(order)} className="cursor-pointer">
                              <Eye className="mr-2 h-4 w-4" /> View Details
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => handleOpenCancelDialog(order)} className="text-red-600 focus:text-red-600 cursor-pointer" disabled={['cancelled', 'refunded', 'delivered'].includes(order.status)}>
                              <XCircle className="mr-2 h-4 w-4" /> Refund / Cancel
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                  </TableRow>)}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="border-t border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between">
            <div className="text-sm text-slate-500">
              Showing <span className="font-medium">{orders.length}</span> of <span className="font-medium">{totalCount}</span> orders
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1 || loading} className="bg-white">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentPage(p => p + 1)} disabled={orders.length < ITEMS_PER_PAGE || loading} className="bg-white">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* --- Drawer: Order Details --- */}
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetContent className="w-[400px] sm:w-[540px] overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle className="text-h2">Order Details</SheetTitle>
              <SheetDescription>
                Order #{selectedOrder?.order_number} placed on {selectedOrder && format(new Date(selectedOrder.created_at), 'PPP')}
              </SheetDescription>
            </SheetHeader>

            {selectedOrder && <div className="space-y-8">
                {/* Shipping Info Card */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Shipping Information</h3>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm space-y-2">
                     <div className="flex justify-between">
                       <span className="text-slate-500">Recipient</span>
                       <span className="font-medium text-slate-900">{selectedOrder.shipping_name}</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-slate-500">Phone</span>
                       <span className="font-medium text-slate-900">{selectedOrder.shipping_phone}</span>
                     </div>
                     <Separator className="my-2" />
                     <div>
                       <span className="text-slate-500 block mb-1">Address</span>
                       <p className="text-slate-900 leading-relaxed">
                         {selectedOrder.shipping_address}
                         {selectedOrder.shipping_city && `, ${selectedOrder.shipping_city}`}
                       </p>
                     </div>
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Order Items</h3>
                  {itemsLoading ? <div className="space-y-2">
                       {_items.map((i, index) => <div key={i} className="h-16 bg-slate-100 rounded-lg animate-pulse" />)}
                    </div> : <div className="space-y-3">
                      {orderItems.map((item, index) => <div key={item.id} className="flex gap-4 p-3 border border-slate-200 rounded-lg bg-white items-center">
                          <div className="w-16 h-16 rounded-md overflow-hidden bg-slate-100 flex-shrink-0 relative border border-slate-100">
                             <EditableImg propKey={`product-thumb-${item.product_id}`} keywords={item.product_cover_image_url || item.product_title} description={`Thumbnail for ${item.product_title}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-slate-900 truncate">{item.product_title}</h4>
                            <p className="text-caption text-slate-500 mt-1">
                              {item.selected_size && `Size: ${item.selected_size}`}
                              {item.selected_color && ` • Color: ${item.selected_color}`}
                            </p>
                          </div>
                          <div className="text-right">
                             <p className="font-medium text-slate-900">${item.unit_price}</p>
                             <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                          </div>
                        </div>)}
                    </div>}
                </div>

                {/* Summary */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">Payment Summary</h3>
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-slate-500">Subtotal</span>
                      <span className="text-slate-900 font-medium">${(selectedOrder.total_amount - selectedOrder.shipping_fee).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-slate-500">Shipping</span>
                      <span className="text-slate-900 font-medium">${selectedOrder.shipping_fee.toFixed(2)}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between text-base font-bold text-slate-900">
                      <span>Total</span>
                      <span>${selectedOrder.total_price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

              </div>}
            
            <SheetFooter className="mt-8 flex-col sm:flex-row gap-2">
               <Button variant="outline" onClick={() => setIsDrawerOpen(false)} className="w-full">Close</Button>
               {selectedOrder && selectedOrder.status === 'pending' && <Button onClick={() => handleStatusChange(selectedOrder.id, 'confirmed')} className="w-full bg-slate-900 text-white hover:bg-slate-800">
                   Confirm Order
                 </Button>}
            </SheetFooter>
          </SheetContent>
        </Sheet>

        {/* --- Dialog: Cancel/Refund --- */}
        <Dialog open={isCancelDialogOpen} onOpenChange={setIsCancelDialogOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-h2">Cancel Order</DialogTitle>
              <DialogDescription>
                Are you sure you want to cancel order #{orderToCancel?.order_number}? This action cannot be undone.
              </DialogDescription>
            </DialogHeader>

            <Form {...cancelForm}>
              <form onSubmit={cancelForm.handleSubmit(onCancelSubmit)} className="space-y-4 py-4">
                <FormField control={cancelForm.control} name="reason" render={({
                field
              }) => <FormItem>
                      <FormLabel>Cancellation Reason</FormLabel>
                      <FormControl>
                        <Textarea placeholder="e.g. Customer requested cancellation, Out of stock..." className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                <DialogFooter>
                   <Button type="button" variant="outline" onClick={() => setIsCancelDialogOpen(false)}>Keep Order</Button>
                   <Button type="submit" variant="destructive">Confirm Cancellation</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>

      </div>
    </div>;
}
