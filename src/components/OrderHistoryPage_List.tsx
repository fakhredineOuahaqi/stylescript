'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Package, Truck, CheckCircle2, XCircle, AlertCircle, Clock, ChevronRight, Calendar, CreditCard, MapPin, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CardWithNoPadding } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';
import type { order, order_item, order_status } from '@/server/entities.type';

// --- Types ---

interface OrderWithItems extends order {
  items: order_item[];
}

// --- Component: Status Badge ---

const StatusBadge = ({
  status
}: {
  status: order_status;
}) => {
  const styles = {
    pending: {
      bg: 'bg-yellow-100',
      text: 'text-yellow-700',
      icon: Clock,
      label: 'Processing'
    },
    confirmed: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      icon: CheckCircle2,
      label: 'Confirmed'
    },
    shipped: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-700',
      icon: Truck,
      label: 'Shipped'
    },
    delivered: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      icon: Package,
      label: 'Delivered'
    },
    cancelled: {
      bg: 'bg-red-100',
      text: 'text-red-700',
      icon: XCircle,
      label: 'Cancelled'
    },
    refunded: {
      bg: 'bg-gray-100',
      text: 'text-gray-700',
      icon: AlertCircle,
      label: 'Refunded'
    }
  };
  const currentStyle = styles[status] || styles.pending;
  const Icon = currentStyle.icon;
  return <Badge variant="outline" className={cn("flex items-center gap-1.5 px-2.5 py-0.5 border-0 font-medium", currentStyle.bg, currentStyle.text)}>
      <Icon className="w-3.5 h-3.5" />
      <span className="text-xs uppercase tracking-wide">{currentStyle.label}</span>
    </Badge>;
};

// --- Component: Empty State ---

const EmptyState = () => <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-slate-50 rounded-xl border border-slate-200 border-dashed">
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
      <ShoppingBag className="w-8 h-8 text-slate-400" />
    </div>
    <h3 className="text-h3 font-semibold text-slate-900 mb-2">No orders yet</h3>
    <p className="text-slate-500 max-w-md mb-6 text-sm">
      Looks like you haven&apos;t placed any orders yet. Start shopping to fill your wardrobe with our latest collection.
    </p>
    <Link href="/productlistpage">
      <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white">
        Start Shopping
      </Button>
    </Link>
  </div>;

// --- Component: Order Card ---

const OrderCard = ({
  order
}: {
  order: OrderWithItems;
}) => {
  const router = useRouter();

  // Helper to format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MAD' // Moroccan Dirham as per context, or USD
    }).format(amount);
  };

  // Helper to format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(date));
  };
  const handleProductClick = (productId: number) => {
    router.push(`/productdetailpage?id=${productId}`);
  };
  return <CardWithNoPadding className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white">
      {/* Header Section */}
      <div className="bg-slate-50/80 px-6 py-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div>
            <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Order Placed</span>
            <div className="flex items-center gap-1.5 font-medium text-slate-800">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {formatDate(order.created_at)}
            </div>
          </div>
          <div>
            <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Total Amount</span>
            <div className="font-semibold text-slate-900">
              {formatCurrency(order.total_amount)}
            </div>
          </div>
          <div className="hidden sm:block">
             <span className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">Ship To</span>
             <div className="flex items-center gap-1.5 font-medium text-slate-800 truncate max-w-[150px]" title={order.shipping_name}>
                {order.shipping_name}
             </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right mr-2 hidden sm:block">
            <span className="block text-xs text-slate-400">Order # {order.order_number}</span>
          </div>
          <StatusBadge status={order.status} />
        </div>
      </div>

      {/* Items Section */}
      <div className="p-6">
        <div className="space-y-6">
          {order.items.map((item, index) => <div key={item.id} className="flex gap-4 sm:gap-6 group">
              {/* Product Image */}
              <div className="relative flex-shrink-0 w-20 h-24 sm:w-24 sm:h-28 bg-slate-100 rounded-md overflow-hidden border border-slate-100 cursor-pointer" onClick={() => handleProductClick(item.product_id)}>
                 <EditableImg propKey={`order-item-${item.id}`} keywords={item.product_cover_image_url || `clothing item ${item.product_title}`} description={`Thumbnail for ${item.product_title}, Color: ${item.selected_color || 'N/A'}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="text-base font-semibold text-slate-900 truncate cursor-pointer hover:text-[#3b82f6] transition-colors" onClick={() => handleProductClick(item.product_id)}>
                      {item.product_title}
                    </h4>
                    <span className="font-medium text-slate-900 whitespace-nowrap">
                      {formatCurrency(item.unit_price)}
                    </span>
                  </div>
                  
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500">
                    {item.selected_size && <span>Size: <span className="text-slate-700">{item.selected_size}</span></span>}
                    {item.selected_color && <span>Color: <span className="text-slate-700">{item.selected_color}</span></span>}
                    <span>Qty: <span className="text-slate-700">{item.quantity}</span></span>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-2">
                   <Button variant="link" className="h-auto p-0 text-[#3b82f6] text-xs font-medium hover:text-[#1e40af]" onClick={() => handleProductClick(item.product_id)}>
                     View Product
                   </Button>
                   <span className="text-slate-300">|</span>
                   <Button variant="link" className="h-auto p-0 text-slate-500 text-xs font-medium hover:text-slate-800">
                     Buy Again
                   </Button>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Footer / Actions */}
      <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
         <div className="flex items-center gap-4">
             {order.tracking_number && <div className="flex items-center gap-1.5 text-slate-600">
                 <Truck className="w-3.5 h-3.5" />
                 <span>Tracking: <span className="font-mono text-slate-800">{order.tracking_number}</span></span>
               </div>}
             <div className="flex items-center gap-1.5">
               <CreditCard className="w-3.5 h-3.5" />
               <span className="capitalize">{order.payment_method.replace(/_/g, ' ')}</span>
             </div>
         </div>
         <Button variant="ghost" size="sm" className="h-8 text-xs hover:bg-white hover:text-slate-900">
           Invoice
         </Button>
      </div>
    </CardWithNoPadding>;
};

// --- Main Component: OrderHistoryPage_List ---

const OrderHistoryPage_List = () => {
  const [orders, setOrders] = useState<OrderWithItems[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const session = getuser_session();
        if (!session || !session.userId) {
          // If no user session, redirect to login or show empty (safe fallback)
          setOrders([]);
          return;
        }
        const userId = parseInt(session.userId);
        if (isNaN(userId)) {
          toast.error("Invalid user session.");
          return;
        }

        // 1. Fetch Orders
        const ordersData = await entities.order.GetAll({
          user_id: {
            equals: userId
          }
        });
        if (!ordersData || ordersData.length === 0) {
          setOrders([]);
          return;
        }

        // 2. Fetch Items for each order
        // Note: In a real-world scenario with backend support, this would be a single joined query.
        // Here we simulate fetching items for each order to build the view model.
        const ordersWithItems = await Promise.all(ordersData.map(async (order, index) => {
          const items = await entities.order_item.GetAll({
            order_id: {
              equals: order.id
            }
          });
          return {
            ...order,
            items: items || []
          } as OrderWithItems;
        }));

        // Sort by date descending (newest first)
        ordersWithItems.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setOrders(ordersWithItems);
      } catch (error) {
        console.error("Failed to fetch order history:", error);
        toast.error("Failed to load order history. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [router]);
  /* Extracted array: _items */
  const _items = [1, 2, 3];
  return <section className="w-full bg-white text-[#0f172a]">
      {/* Container wraps content ensuring alignment */}
      <div className="container mx-auto px-4 sm:px-8 py-10 lg:py-16">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-h1 font-bold text-[#0f172a] tracking-tight mb-2">Order History</h1>
            <p className="text-base text-[#64748b]">
              Check the status of recent orders, manage returns, and discover similar products.
            </p>
          </div>
          
          <div className="hidden md:block">
            <Button variant="outline" className="text-sm font-medium border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50">
              Need Help?
            </Button>
          </div>
        </div>

        <Separator className="bg-slate-200 mb-8" />

        {/* Content Area */}
        <div className="w-full max-w-5xl mx-auto">
          {loading ? <div className="space-y-6">
                {_items.map((i, index) => <div key={i} className="border border-slate-200 rounded-xl p-6 bg-white">
                    <div className="flex justify-between mb-6">
                      <Skeleton className="h-6 w-32" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                    <div className="flex gap-6">
                      <Skeleton className="w-24 h-28 rounded-md" />
                      <div className="space-y-3 flex-1">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-1/4" />
                      </div>
                    </div>
                  </div>)}
             </div> : orders.length > 0 ? <div className="grid grid-cols-1 gap-8">
              {orders.map((order, index) => <OrderCard key={order.id} order={order} />)}
            </div> : <EmptyState />}
        </div>
      </div>
    </section>;
};
export default OrderHistoryPage_List;
