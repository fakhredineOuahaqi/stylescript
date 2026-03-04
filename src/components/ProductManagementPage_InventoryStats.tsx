'use client';

import React, { useEffect, useState } from 'react';
import { Package, AlertTriangle, DollarSign, TrendingUp, Archive, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { entities } from '@/tools/entities-proxy';
import { getadmin_session } from '@/tools/SessionContext';
import { toast } from 'sonner';
import type { product } from '@/server/entities.type';

// --- Types ---

interface InventoryStats {
  totalProducts: number;
  lowStockCount: number;
  totalValue: number;
  activeProducts: number;
}

// --- Component ---

export default function ProductManagementPage_InventoryStats() {
  const [stats, setStats] = useState<InventoryStats>({
    totalProducts: 0,
    lowStockCount: 0,
    totalValue: 0,
    activeProducts: 0
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        const session = getadmin_session();
        if (!session || !session.token) {
          // In a real app, you might redirect here or show an error state
          // For this component, we'll just stop loading to show empty/zero state or handle gracefully
          console.warn('Unauthorized: No admin session found.');
          setLoading(false);
          return;
        }

        // Fetch all products to calculate stats
        // Note: In a real-world scenario with thousands of products, 
        // this aggregation should happen on the backend (DB query).
        // Since we are limited to the provided entity methods, we fetch all.
        const allProducts = await entities.product.GetAll({});
        if (!allProducts) {
          throw new Error('Failed to fetch product data');
        }
        let totalValue = 0;
        let lowStockCount = 0;
        let activeCount = 0;
        allProducts.forEach((p: product) => {
          // Calculate Total Value (price * stock)
          const price = p.price || 0;
          const stock = p.stock_quantity || 0;
          totalValue += price * stock;

          // Calculate Low Stock (Threshold assumed < 10 for demo purposes)
          if (stock < 10) {
            lowStockCount++;
          }

          // Count Active Products
          if (p.status === 'active') {
            activeCount++;
          }
        });
        setStats({
          totalProducts: allProducts.length,
          lowStockCount,
          totalValue,
          activeProducts: activeCount
        });
      } catch (err) {
        console.error('Error fetching inventory stats:', err);
        toast.error('Failed to load inventory statistics.');
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // --- Render Helpers ---

  if (loading) {
    /* Extracted array: _items */
    const _items = [1, 2, 3, 4];
    return <section className="w-full bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-8 py-10">
           <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {_items.map((i, index) => <Card key={i} className="shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-4 w-4 rounded-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-8 w-[60px] mb-1" />
                  <Skeleton className="h-3 w-[120px]" />
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>;
  }
  return <section className="w-full bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-8 py-10">
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <h2 className="text-h2 font-semibold text-slate-900">Inventory Overview</h2>
            <p className="text-base text-slate-500">
              A quick snapshot of your store&apos;s current stock levels and value.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Total Products */}
            <Card className="bg-white border-slate-200 shadow-sm transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  Total Products
                </CardTitle>
                <Package className="h-4 w-4 text-slate-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stats.totalProducts}</div>
                <p className="text-xs text-slate-500 mt-1">
                  Items currently in catalog
                </p>
              </CardContent>
            </Card>

            {/* Card 2: Total Inventory Value */}
            <Card className="bg-white border-slate-200 shadow-sm transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  Total Inventory Value
                </CardTitle>
                <DollarSign className="h-4 w-4 text-emerald-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{formatCurrency(stats.totalValue)}</div>
                <p className="text-xs text-slate-500 mt-1">
                  Estimated retail value
                </p>
              </CardContent>
            </Card>

            {/* Card 3: Active Listings */}
            <Card className="bg-white border-slate-200 shadow-sm transition-all duration-200 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  Active Listings
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stats.activeProducts}</div>
                <p className="text-xs text-slate-500 mt-1">
                  Products visible on store
                </p>
              </CardContent>
            </Card>

            {/* Card 4: Low Stock Alert */}
            <Card className={`border-l-4 shadow-sm transition-all duration-200 hover:shadow-md ${stats.lowStockCount > 0 ? 'border-l-amber-500 bg-amber-50/50' : 'border-l-slate-200 bg-white'}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-slate-600">
                  Low Stock Alerts
                </CardTitle>
                <AlertTriangle className={`h-4 w-4 ${stats.lowStockCount > 0 ? 'text-amber-500' : 'text-slate-400'}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-slate-900">{stats.lowStockCount}</div>
                <div className="flex items-center mt-1">
                   {stats.lowStockCount > 0 ? <span className="flex items-center text-xs text-amber-600 font-medium">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Restock needed
                     </span> : <span className="text-xs text-slate-500">
                        Inventory healthy
                      </span>}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}
