'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, Package, ArrowUpRight, AlertCircle, MoreHorizontal, DollarSign, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import EditableImg from '@/@base/EditableImg';
import type { product, order_item } from '@/server/entities.type';

// --- Types for Internal State ---
interface ProductPerformance {
  id: number;
  rank: number;
  title: string;
  sku: string;
  cover_image_url: string | null;
  stock_quantity: number;
  total_units_sold: number;
  total_revenue: number;
  status: 'active' | 'inactive' | 'out_of_stock';
}
export default function AnalyticsPage_TopProductsTable() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [rankingData, setRankingData] = useState<ProductPerformance[]>([]);

  // --- Data Fetching Logic ---
  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        setLoading(true);

        // 1. Auth Check
        const session = getadmin_session();
        if (!session || !session.token) {
          toast.error('Unauthorized access. Please login.');
          return;
        }

        // 2. Fetch All Order Items (To calculate sales)
        // In a real large-scale app, this aggregation should happen on the DB side.
        // Given constraints, we calculate client-side or assume manageable dataset.
        const allOrderItems = await entities.order_item.GetAll();
        if (!allOrderItems || allOrderItems.length === 0) {
          setRankingData([]);
          setLoading(false);
          return;
        }

        // 3. Aggregate Sales by Product ID
        const salesMap = new Map<number, {
          revenue: number;
          units: number;
        }>();
        allOrderItems.forEach((item: order_item) => {
          const pid = item.product_id;
          const current = salesMap.get(pid) || {
            revenue: 0,
            units: 0
          };
          salesMap.set(pid, {
            revenue: current.revenue + item.price_at_purchase * item.quantity,
            units: current.units + item.quantity
          });
        });

        // 4. Fetch Product Details for the items sold
        // We only care about products that have actually sold, or we could fetch Top N from the map keys.
        const productIds = Array.from(salesMap.keys());
        if (productIds.length === 0) {
          setRankingData([]);
          return;
        }
        const products = await entities.product.GetAll({
          id: {
            in: productIds
          }
        });

        // 5. Merge & Sort
        const mergedData: ProductPerformance[] = products.map((p, index) => {
          const stats = salesMap.get(p.id) || {
            revenue: 0,
            units: 0
          };
          return {
            id: p.id,
            rank: 0,
            // Will assign after sort
            title: p.title,
            sku: p.sku,
            cover_image_url: p.cover_image_url ?? null,
            stock_quantity: p.stock_quantity,
            total_units_sold: stats.units,
            total_revenue: stats.revenue,
            status: p.status
          };
        });

        // Sort by Revenue DESC
        mergedData.sort((a, b) => b.total_revenue - a.total_revenue);

        // Assign Rank
        const rankedData = mergedData.map((item, index) => ({
          ...item,
          rank: index + 1
        }));
        setRankingData(rankedData);
      } catch (err) {
        console.error('Failed to load analytics data:', err);
        toast.error('Failed to load top products data.');
      } finally {
        setLoading(false);
      }
    };
    fetchPerformanceData();
  }, []);

  // --- Handlers ---
  const handleManageClick = () => {
    // Specific business rule: Clicking 'Manage' navigates to Product Management page
    router.push('/productmanagementpage');
  };
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'MAD' // Moroccan Dirham as per context
    }).format(val);
  };

  // --- Render Helpers ---
  const renderRankBadge = (rank: number) => {
    if (rank === 1) return <Badge className="bg-yellow-500 hover:bg-yellow-600 text-white border-none w-6 h-6 flex items-center justify-center rounded-full p-0">1</Badge>;
    if (rank === 2) return <Badge className="bg-slate-400 hover:bg-slate-500 text-white border-none w-6 h-6 flex items-center justify-center rounded-full p-0">2</Badge>;
    if (rank === 3) return <Badge className="bg-orange-400 hover:bg-orange-500 text-white border-none w-6 h-6 flex items-center justify-center rounded-full p-0">3</Badge>;
    return <span className="text-caption font-medium w-6 text-center inline-block text-slate-500">#{rank}</span>;
  };
  const renderStockStatus = (stock: number, status: string) => {
    if (status === 'out_of_stock' || stock <= 0) {
      return <div className="flex items-center space-x-2 text-red-600 bg-red-50 px-2 py-1 rounded-md w-fit">
          <AlertCircle className="w-3 h-3" />
          <span className="text-xs font-semibold">Out of Stock</span>
        </div>;
    }
    if (stock < 10) {
      return <div className="flex items-center space-x-2 text-orange-600 bg-orange-50 px-2 py-1 rounded-md w-fit">
          <AlertCircle className="w-3 h-3" />
          <span className="text-xs font-semibold">Low Stock ({stock})</span>
        </div>;
    }
    return <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md w-fit">
        <Package className="w-3 h-3" />
        <span className="text-xs font-semibold">In Stock ({stock})</span>
      </div>;
  };
  return <div className="w-full bg-slate-50/50 min-h-[600px] pb-20">
      <div className="container mx-auto px-4 md:px-8 py-10">
        
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-h2 font-bold text-slate-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Top Performing Products
            </h2>
            <p className="text-base text-slate-500 max-w-2xl">
              A ranked overview of your best-selling inventory. Use these insights to identify high-demand items for restocking and marketing campaigns.
            </p>
          </div>
          <div className="flex items-center gap-2">
             <Button onClick={handleManageClick} variant="outline" className="border-slate-200 text-slate-700 hover:bg-white hover:text-blue-600 transition-colors">
                View Full Inventory
              </Button>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="border-slate-200 shadow-sm bg-white overflow-hidden">
          <CardHeader className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-lg font-semibold text-slate-900">Sales Leaderboard</CardTitle>
                <CardDescription className="text-slate-500 mt-1">
                  Ranked by total revenue generated
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-white border border-slate-200 text-slate-600 font-normal">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                  Live Data
                </Badge>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow className="border-slate-100 hover:bg-slate-50">
                  <TableHead className="w-[80px] text-center font-semibold text-slate-600">Rank</TableHead>
                  <TableHead className="w-[40%] font-semibold text-slate-600">Product Details</TableHead>
                  <TableHead className="text-right font-semibold text-slate-600">Units Sold</TableHead>
                  <TableHead className="text-right font-semibold text-slate-600">Total Revenue</TableHead>
                  <TableHead className="w-[180px] font-semibold text-slate-600">Stock Status</TableHead>
                  <TableHead className="w-[100px] text-right font-semibold text-slate-600">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ?
              // Loading Skeleton
              Array.from({
                length: 5
              }).map((_, index) => <TableRow key={index} className="border-slate-100">
                      <TableCell className="text-center"><Skeleton className="h-6 w-6 rounded-full mx-auto" /></TableCell>
                      <TableCell>
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-12 w-12 rounded-md" />
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-20" />
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right"><Skeleton className="h-4 w-16 ml-auto" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-4 w-20 ml-auto" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                      <TableCell className="text-right"><Skeleton className="h-8 w-8 ml-auto rounded-md" /></TableCell>
                    </TableRow>) : rankingData.length === 0 ?
              // Empty State
              <TableRow>
                    <TableCell colSpan={6} className="h-[300px] text-center">
                      <div className="flex flex-col items-center justify-center text-slate-400">
                        <Package className="w-12 h-12 mb-4 opacity-20" />
                        <p className="text-lg font-medium text-slate-900">No Sales Data Yet</p>
                        <p className="text-sm mt-1 mb-4">Start selling products to see ranking analytics.</p>
                        <Button onClick={handleManageClick} variant="default" className="bg-slate-900 text-white">
                          Manage Inventory
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow> :
              // Data Rows
              rankingData.map((product, index) => <TableRow key={product.id} className="group border-slate-100 hover:bg-slate-50/60 transition-colors">
                      <TableCell className="text-center align-middle">
                        <div className="flex justify-center">
                          {renderRankBadge(product.rank)}
                        </div>
                      </TableCell>
                      <TableCell className="align-middle">
                        <div className="flex items-center gap-4">
                          <div className="relative w-12 h-12 rounded-lg border border-slate-200 overflow-hidden bg-white shrink-0">
                             <EditableImg propKey={`prod-thumb-${product.id}`} keywords={product.cover_image_url || product.title} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <div className="text-base font-semibold text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                              {product.title}
                            </div>
                            <div className="text-caption text-slate-500 mt-0.5">
                              SKU: {product.sku}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right align-middle">
                        <div className="flex items-center justify-end gap-1 font-medium text-slate-700">
                           <ShoppingCart className="w-3.5 h-3.5 text-slate-400" />
                           {product.total_units_sold}
                        </div>
                      </TableCell>
                      <TableCell className="text-right align-middle">
                        <div className="font-bold text-slate-900 flex items-center justify-end gap-0.5">
                          {formatCurrency(product.total_revenue)}
                        </div>
                      </TableCell>
                      <TableCell className="align-middle">
                        {renderStockStatus(product.stock_quantity, product.status)}
                      </TableCell>
                      <TableCell className="text-right align-middle">
                        <Button onClick={handleManageClick} size="sm" variant="ghost" className="h-8 px-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50">
                          <span className="sr-only">Manage</span>
                          <span className="text-xs font-semibold mr-1 hidden lg:inline">Manage</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>)}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>;
}
