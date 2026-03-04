'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Filter, Search, X, ChevronDown, ShoppingCart, Heart, Eye, SlidersHorizontal } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardWithNoPadding } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Skeleton } from "@/components/ui/skeleton";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EditableImg from '@/@base/EditableImg';

// Entity Imports
import type { product, category, filtered_product } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
gsap.registerPlugin(ScrollTrigger);

// --- Constants & Config ---
const COLOR_OPTIONS = ['Black', 'White', 'Navy', 'Gray', 'Red', 'Blue', 'Green', 'Yellow'];
const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const ITEMS_PER_PAGE = 9;

// --- Types ---
type FilterState = {
  search: string;
  categoryIds: number[];
  priceRange: [number, number];
  colors: string[];
  sizes: string[];
  sort: string;
};

// --- Component: ProductListPage_Catalog ---

export default function ProductListPage_Catalog() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // --- State ---
  const [products, setProducts] = useState<product[]>([]);
  const [categories, setCategories] = useState<category[]>([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Combined Filter State
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    categoryIds: [],
    priceRange: [0, 500],
    // Default range
    colors: [],
    sizes: [],
    sort: 'newest'
  });

  // Debounced Search Term for API calls
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // --- Effects ---

  // 1. Initial Load: Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const cats = await entities.category.GetAll({
          is_visible: true
        });
        setCategories(cats);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        toast.error("Failed to load categories");
      }
    };
    fetchCategories();
  }, []);

  // 2. Debounce Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(filters.search);
      setPage(1); // Reset to page 1 on search change
    }, 500);
    return () => clearTimeout(timer);
  }, [filters.search]);

  // 3. Fetch Products (Main Data Logic)
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Build Query Object
        const query: filtered_product = {
          status: {
            equals: 'active'
          }
        };

        // Search
        if (debouncedSearch) {
          query.title = {
            contains: debouncedSearch
          };
        }

        // Categories
        if (filters.categoryIds.length > 0) {
          // Since the type definition for category_id usually expects a single number or NumberFilter,
          // and standard 'in' filter logic applies:
          query.category_id = {
            in: filters.categoryIds
          };
        }

        // Price
        query.price = {
          gte: filters.priceRange[0],
          lte: filters.priceRange[1]
        };

        // Colors
        if (filters.colors.length > 0) {
          // Fallback: Just taking the first one to demonstrate backend call structure
          query.available_colors = {
            contains: filters.colors[0]
          };
        }
        if (filters.sizes.length > 0) {
          query.available_sizes = {
            contains: filters.sizes[0]
          };
        }

        // Execute Fetch
        const [fetchedProducts, count] = await Promise.all([entities.product.GetPage(page, ITEMS_PER_PAGE, query), entities.product.Count(query)]);

        // Client-side Sort (if API doesn't support sort param in GetPage)
        let sorted = [...fetchedProducts];
        if (filters.sort === 'price_asc') {
          sorted.sort((a, b) => a.price - b.price);
        } else if (filters.sort === 'price_desc') {
          sorted.sort((a, b) => b.price - a.price);
        } else {
          // Default newest
          sorted.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        }
        setProducts(sorted);
        setTotalProducts(count);

        // Animate Entrance
        if (gridRef.current) {
          gsap.fromTo(gridRef.current.children, {
            opacity: 0,
            y: 20
          }, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: "power2.out",
            clearProps: "all"
          });
        }
      } catch (error) {
        console.error("Product fetch error:", error);
        toast.error("Failed to load products. Please try again.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [page, debouncedSearch, filters.categoryIds, filters.priceRange, filters.colors, filters.sizes, filters.sort]);

  // --- Event Handlers ---

  const handleCategoryToggle = (id: number) => {
    setFilters(prev => {
      const newIds = prev.categoryIds.includes(id) ? prev.categoryIds.filter(c => c !== id) : [...prev.categoryIds, id];
      return {
        ...prev,
        categoryIds: newIds
      };
    });
    setPage(1);
  };
  const handleColorToggle = (color: string) => {
    setFilters(prev => {
      const newColors = prev.colors.includes(color) ? prev.colors.filter(c => c !== color) : [...prev.colors, color];
      return {
        ...prev,
        colors: newColors
      };
    });
    setPage(1);
  };
  const handleSizeToggle = (size: string) => {
    setFilters(prev => {
      const newSizes = prev.sizes.includes(size) ? prev.sizes.filter(s => s !== size) : [...prev.sizes, size];
      return {
        ...prev,
        sizes: newSizes
      };
    });
    setPage(1);
  };
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [value[0], value[1]]
    }));
    // Note: We might want to debounce this in a real app, but slider usually releases onEnd
  };
  const clearFilters = () => {
    setFilters({
      search: '',
      categoryIds: [],
      priceRange: [0, 1000],
      colors: [],
      sizes: [],
      sort: 'newest'
    });
    setPage(1);
  };
  const navigateToDetail = (productId: number) => {
    router.push(`/productdetailpage?productId=${productId}`);
  };

  // --- Sub-components ---

  const SidebarContent = () => <div className="space-y-8">
      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-h3 font-semibold text-slate-900">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat, index) => <div key={cat.id} className="flex items-center space-x-2">
              <Checkbox id={`cat-${cat.id}`} checked={filters.categoryIds.includes(cat.id)} onCheckedChange={() => handleCategoryToggle(cat.id)} className="border-slate-300 data-[state=checked]:bg-slate-900 data-[state=checked]:border-slate-900" />
              <label htmlFor={`cat-${cat.id}`} className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-slate-600 hover:text-slate-900 transition-colors">
                {cat.name}
              </label>
            </div>)}
          {categories.length === 0 && <p className="text-caption text-slate-400">No categories found.</p>}
        </div>
      </div>

      <div className="w-full h-px bg-slate-200" />

      {/* Price Range */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-h3 font-semibold text-slate-900">Price</h3>
          <span className="text-caption font-medium text-slate-500">
            ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </span>
        </div>
        <Slider defaultValue={[0, 500]} value={[filters.priceRange[0], filters.priceRange[1]]} max={1000} step={10} onValueCommit={handlePriceChange} // Trigger only when user stops dragging
      className="py-4" />
      </div>

      <div className="w-full h-px bg-slate-200" />

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-h3 font-semibold text-slate-900">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {COLOR_OPTIONS.map((color, index) => {
          const isSelected = filters.colors.includes(color);
          return <button key={color} onClick={() => handleColorToggle(color)} className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center transition-all ${isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:border-slate-400'}`} title={color} style={{
            backgroundColor: color.toLowerCase()
          }}>
                {isSelected && <span className={`block w-2 h-2 rounded-full ${['White', 'Yellow'].includes(color) ? 'bg-slate-900' : 'bg-white'}`} />}
              </button>;
        })}
        </div>
      </div>

      <div className="w-full h-px bg-slate-200" />

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="text-h3 font-semibold text-slate-900">Sizes</h3>
        <div className="grid grid-cols-3 gap-2">
          {SIZE_OPTIONS.map((size, index) => <button key={size} onClick={() => handleSizeToggle(size)} className={`px-3 py-2 text-sm font-medium rounded-md border transition-colors ${filters.sizes.includes(size) ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}>
              {size}
            </button>)}
        </div>
      </div>

       {/* Reset Button */}
       <Button variant="outline" onClick={clearFilters} className="w-full mt-4 border-slate-200 hover:bg-slate-50 text-slate-900">
          Reset All Filters
        </Button>
    </div>;
  return <div className="w-full bg-white relative">
      <div className="container mx-auto px-8 py-10" ref={containerRef}>
        
        {/* Header: Title & Mobile Filter Trigger & Sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-h1 font-bold text-slate-900 mb-2">Shop Catalog</h1>
            <p className="text-base text-slate-500">
              Discover our latest collection of coding-themed apparel.
            </p>
          </div>

          <div className="flex items-center gap-3">
             {/* Search Bar (Desktop - can be integrated better but keeps layout clean) */}
             <div className="hidden md:block relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input placeholder="Search products..." className="pl-9 bg-slate-50 border-slate-200 focus:ring-blue-500" value={filters.search} onChange={e => setFilters(prev => ({
              ...prev,
              search: e.target.value
            }))} />
             </div>

            {/* Mobile Filter Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="lg:hidden gap-2 border-slate-200">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader className="mb-6">
                  <SheetTitle className="text-h3 text-slate-900">Filter Products</SheetTitle>
                </SheetHeader>
                <SidebarContent />
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <Select value={filters.sort} onValueChange={val => setFilters(prev => ({
            ...prev,
            sort: val
          }))}>
              <SelectTrigger className="w-[160px] border-slate-200 text-slate-700">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest Arrivals</SelectItem>
                <SelectItem value="price_asc">Price: Low to High</SelectItem>
                <SelectItem value="price_desc">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
           {/* Mobile Search (visible only on mobile) */}
           <div className="md:hidden relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search products..." className="pl-9 bg-slate-50 border-slate-200" value={filters.search} onChange={e => setFilters(prev => ({
            ...prev,
            search: e.target.value
          }))} />
           </div>
        </div>

        {/* Main Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-1 h-fit sticky top-24">
            <SidebarContent />
          </aside>

          {/* Product Grid Area */}
          <main className="lg:col-span-3">
            {loading ?
          // Skeleton Loading State
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => <div key={index} className="space-y-4">
                    <Skeleton className="h-[300px] w-full rounded-xl bg-slate-100" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-2/3 bg-slate-100" />
                      <Skeleton className="h-4 w-1/4 bg-slate-100" />
                    </div>
                  </div>)}
              </div> : products.length > 0 ? <div className="space-y-10">
                {/* Grid */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((product, index) => <div key={product.id} className="group relative">
                      <CardWithNoPadding className="h-full border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden bg-white flex flex-col cursor-pointer" onClick={() => navigateToDetail(product.id)}>
                        {/* Image Container with Hover Effect */}
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
                          {/* Main Image */}
                          <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                            <EditableImg propKey={`product-cover-${product.id}`} keywords={product.cover_image_url || `${product.title} clothing`} description={`Front view of ${product.title}`} className="w-full h-full object-cover" />
                          </div>
                          
                          {/* Hover Image (Second View) */}
                          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                             <EditableImg propKey={`product-hover-${product.id}`} keywords={product.hover_image_url || product.image_url_list?.split('|')[0] || `${product.title} detail`} description={`Detail view of ${product.title}`} className="w-full h-full object-cover" />
                          </div>

                          {/* Quick Action Badges / Overlays */}
                          <div className="absolute top-3 left-3 flex flex-col gap-2">
                            {product.compare_at_price && product.compare_at_price > product.price && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                Sale
                              </span>}
                            {product.stock_quantity <= 0 && <span className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                                Sold Out
                              </span>}
                          </div>

                          {/* Hover Actions (Desktop) */}
                          <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden lg:flex gap-2 justify-center">
                            <Button size="sm" className="flex-1 bg-slate-900 text-white hover:bg-slate-800 shadow-lg" onClick={e => {
                        e.stopPropagation();
                        navigateToDetail(product.id);
                      }}>
                              <Eye className="w-4 h-4 mr-2" /> View Details
                            </Button>
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-4 flex-grow flex flex-col">
                          <div className="mb-1 text-caption text-slate-500 uppercase tracking-wide text-[10px]">
                            {categories.find(c => c.id === product.category_id)?.name || 'Apparel'}
                          </div>
                          <h3 className="text-h3 font-medium text-slate-900 mb-2 line-clamp-2 min-h-[1.5em] group-hover:text-blue-600 transition-colors">
                            {product.title}
                          </h3>
                          
                          <div className="mt-auto pt-2 flex items-center justify-between">
                            <div className="flex items-baseline gap-2">
                              <span className="text-base font-bold text-slate-900">
                                ${product.price.toFixed(2)}
                              </span>
                              {product.compare_at_price && product.compare_at_price > product.price && <span className="text-sm text-slate-400 line-through">
                                  ${product.compare_at_price.toFixed(2)}
                                </span>}
                            </div>
                            
                            {/* Color preview dots if available */}
                            {product.available_colors && <div className="flex -space-x-1">
                                {product.available_colors.split(',').slice(0, 3).map((color, index) => <div key={index} className="w-3 h-3 rounded-full border border-white ring-1 ring-slate-100" style={{
                          backgroundColor: color.toLowerCase().trim()
                        }} />)}
                                {product.available_colors.split(',').length > 3 && <span className="w-3 h-3 rounded-full bg-slate-100 flex items-center justify-center text-[8px] text-slate-500 border border-white">
                                    +
                                  </span>}
                              </div>}
                          </div>
                        </div>
                      </CardWithNoPadding>
                    </div>)}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-4 py-8 border-t border-slate-100">
                  <Button variant="outline" disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="border-slate-200 text-slate-700 hover:bg-slate-50 w-24">
                    Previous
                  </Button>
                  <span className="text-base text-slate-600 font-medium">
                    Page {page} of {Math.max(1, Math.ceil(totalProducts / ITEMS_PER_PAGE))}
                  </span>
                  <Button variant="outline" disabled={page >= Math.ceil(totalProducts / ITEMS_PER_PAGE)} onClick={() => setPage(p => p + 1)} className="border-slate-200 text-slate-700 hover:bg-slate-50 w-24">
                    Next
                  </Button>
                </div>
              </div> :
          // Empty State
          <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <Search className="w-8 h-8 text-slate-300" />
                </div>
                <h3 className="text-h3 font-semibold text-slate-900 mb-2">No products found</h3>
                <p className="text-base text-slate-500 max-w-md text-center mb-6">
                  We couldn't find any items matching your filters. Try adjusting your search or filter criteria.
                </p>
                <Button onClick={clearFilters} className="bg-slate-900 text-white hover:bg-slate-800">
                  Clear All Filters
                </Button>
              </div>}
          </main>
        </div>
      </div>
    </div>;
}
