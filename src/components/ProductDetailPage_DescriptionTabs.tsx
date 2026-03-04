'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Ruler, ShieldCheck, Shirt, Info, Package, RefreshCcw } from "lucide-react";
import EditableImg from "@/@base/EditableImg";
import { entities } from '@/tools/entities-proxy';
import type { product } from '@/server/entities.type';

// ----------------------------------------------------------------------
// Interfaces & Types
// ----------------------------------------------------------------------

interface TabItem {
  value: string;
  label: string;
  icon: React.ElementType;
}

// ----------------------------------------------------------------------
// Constants & Configuration
// ----------------------------------------------------------------------

const TABS: TabItem[] = [{
  value: 'description',
  label: 'Description',
  icon: Info
}, {
  value: 'material',
  label: 'Material & Care',
  icon: Shirt
}, {
  value: 'shipping',
  label: 'Shipping & Returns',
  icon: Package
}, {
  value: 'size',
  label: 'Size Guide',
  icon: Ruler
}];
const DEFAULT_SHIPPING_INFO = `
**Standard Shipping (Morocco)**
Delivery within 3-5 business days. Free shipping on orders over 500 MAD.

**Express Delivery**
Available for major cities (Casablanca, Rabat, Marrakech, Tangier). Delivery within 24-48 hours.

**Returns Policy**
We accept returns within 14 days of delivery. Items must be unworn, unwashed, and with original tags attached. Return shipping fees may apply unless the item is defective.
`;

// ----------------------------------------------------------------------
// Helper Components
// ----------------------------------------------------------------------
/* Extracted array: _items */
const _items = [1, 2, 3, 4];
const LoadingSkeleton = () => <div className="w-full space-y-6">
    <div className="flex gap-4 border-b border-slate-200 pb-2">
      {_items.map((i, index) => <Skeleton key={i} className="h-10 w-32 rounded-lg" />)}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-4">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
      <Skeleton className="h-64 w-full rounded-xl" />
    </div>
  </div>;
const EmptyState = () => <div className="w-full py-12 flex flex-col items-center justify-center text-center space-y-4 bg-slate-50 rounded-xl border border-dashed border-slate-200">
    <div className="p-4 bg-white rounded-full shadow-sm">
      <Info className="w-8 h-8 text-slate-400" />
    </div>
    <div className="space-y-1">
      <h3 className="text-h3 font-medium text-slate-900">Product Details Unavailable</h3>
      <p className="text-sm text-slate-500 max-w-sm mx-auto">
        We couldn't load the detailed information for this product. Please try refreshing the page.
      </p>
    </div>
  </div>;

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------

export default function ProductDetailPage_DescriptionTabs() {
  const searchParams = useSearchParams();
  const productId = searchParams.get('productId');
  const [productData, setProductData] = useState<product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');

  // GSAP Animation Ref
  const containerRef = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fetchProductData = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        // Ensure productId is parsed correctly as number if needed by your schema, 
        // assuming id is number based on schema provided.
        const id = parseInt(productId, 10);
        if (isNaN(id)) {
          console.error("Invalid product ID");
          setLoading(false);
          return;
        }
        const data = await entities.product.Get({
          id
        });
        setProductData(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [productId]);

  // Simple entry animation
  useEffect(() => {
    if (!loading && containerRef.current) {
      gsap.fromTo(containerRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, [loading]);
  if (loading) {
    return <div className="w-full bg-white">
        <div className="container mx-auto px-8 py-10">
          <LoadingSkeleton />
        </div>
      </div>;
  }
  if (!productData && !loading) {
    return <div className="w-full bg-white">
        <div className="container mx-auto px-8 py-10">
          <EmptyState />
        </div>
      </div>;
  }

  // Safe destructuring with defaults
  const {
    description_long,
    material_info,
    care_instructions,
    size_chart_url,
    title,
    cover_image_url
  } = productData!;
  return <section className="w-full bg-white border-t border-slate-100">
      <div ref={containerRef} className="container mx-auto px-4 md:px-8 py-12 lg:py-16">
        
        <Tabs defaultValue="description" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-hide">
            <TabsList className="bg-slate-50 p-1 border border-slate-200 rounded-lg inline-flex h-auto min-w-max">
              {TABS.map((tab, index) => <TabsTrigger key={tab.value} value={tab.value} className="data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm text-slate-500 px-6 py-2.5 rounded-md transition-all duration-200 text-sm font-medium flex items-center gap-2">
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </TabsTrigger>)}
            </TabsList>
          </div>

          {/* Content Area */}
          <div className="max-w-6xl mx-auto min-h-[400px]">
            <AnimatePresence mode="wait">
              
              {/* DESCRIPTION TAB */}
              <TabsContent value="description" className="mt-0 outline-none">
                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.3
              }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                  <div className="lg:col-span-7 space-y-8">
                    <div>
                      <h3 className="text-h3 font-semibold text-slate-900 mb-4">
                        About {title}
                      </h3>
                      <div className="prose prose-slate prose-lg text-slate-600 max-w-none">
                        {description_long ? <p className="whitespace-pre-line leading-relaxed">{description_long}</p> : <p className="text-slate-400 italic">No detailed description available for this product.</p>}
                      </div>
                    </div>
                    
                    {/* Feature Highlights (Static for layout demo, normally dynamic) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                      {[{
                      icon: ShieldCheck,
                      title: "Premium Quality",
                      desc: "Crafted with durable materials"
                    }, {
                      icon: RefreshCcw,
                      title: "Breathable Fabric",
                      desc: "Comfortable for all-day wear"
                    }].map((item, index) => <div key={index} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                          <div className="bg-white p-2.5 rounded-lg shadow-sm h-fit">
                            <item.icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                          </div>
                        </div>)}
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200">
                      <EditableImg propKey="product-desc-image" keywords={cover_image_url || `${title} details`} description={`Close up detailed shot of ${title} showing fabric texture and quality`} className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </motion.div>
              </TabsContent>

              {/* MATERIAL TAB */}
              <TabsContent value="material" className="mt-0 outline-none">
                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.3
              }} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                  <Card className="bg-slate-50 border-slate-200 shadow-none h-full">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                          <Shirt className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Material Composition</h3>
                      </div>
                      <div className="space-y-4 text-slate-600 leading-relaxed">
                         {material_info ? <p>{material_info}</p> : <p className="text-slate-400 italic">Material information not specified.</p>}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-slate-50 border-slate-200 shadow-none h-full">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center gap-3 mb-2">
                         <div className="p-2 bg-green-100 rounded-lg text-green-600">
                          <RefreshCcw className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-semibold text-slate-900">Care Instructions</h3>
                      </div>
                      <div className="space-y-4 text-slate-600 leading-relaxed">
                        {care_instructions ? <p>{care_instructions}</p> : <ul className="list-disc pl-5 space-y-2">
                             <li>Machine wash cold with like colors</li>
                             <li>Do not bleach</li>
                             <li>Tumble dry low</li>
                             <li>Cool iron if needed</li>
                           </ul>}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </TabsContent>

              {/* SHIPPING TAB */}
              <TabsContent value="shipping" className="mt-0 outline-none">
                <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.3
              }} className="max-w-3xl mx-auto">
                   <Card className="border-slate-200 shadow-sm">
                    <CardContent className="p-8 md:p-10">
                      <h3 className="text-h3 font-semibold text-slate-900 mb-6 flex items-center gap-3">
                        <Package className="w-6 h-6 text-blue-600" />
                        Shipping & Returns Policy
                      </h3>
                      <div className="prose prose-slate max-w-none text-slate-600">
                        <div className="whitespace-pre-line">
                          {DEFAULT_SHIPPING_INFO}
                        </div>
                      </div>
                    </CardContent>
                   </Card>
                </motion.div>
              </TabsContent>

              {/* SIZE GUIDE TAB */}
              <TabsContent value="size" className="mt-0 outline-none">
                 <motion.div initial={{
                opacity: 0,
                y: 10
              }} animate={{
                opacity: 1,
                y: 0
              }} exit={{
                opacity: 0,
                y: -10
              }} transition={{
                duration: 0.3
              }} className="flex flex-col items-center">
                  <div className="w-full max-w-4xl bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    {size_chart_url ? <div className="relative w-full aspect-[16/9] min-h-[300px] bg-slate-50">
                         <EditableImg propKey="size-chart-img" keywords={size_chart_url} description="Size chart reference guide" className="w-full h-full object-contain p-4" />
                      </div> : <div className="p-8 md:p-12 text-center">
                         <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-slate-600">
                                <thead className="text-xs text-slate-700 uppercase bg-slate-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 rounded-l-lg">Size</th>
                                        <th scope="col" className="px-6 py-3">Chest (cm)</th>
                                        <th scope="col" className="px-6 py-3">Length (cm)</th>
                                        <th scope="col" className="px-6 py-3 rounded-r-lg">Sleeve (cm)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b border-slate-100 hover:bg-slate-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">S</th>
                                        <td className="px-6 py-4">96-101</td>
                                        <td className="px-6 py-4">70</td>
                                        <td className="px-6 py-4">63</td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100 hover:bg-slate-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">M</th>
                                        <td className="px-6 py-4">101-106</td>
                                        <td className="px-6 py-4">72</td>
                                        <td className="px-6 py-4">64</td>
                                    </tr>
                                    <tr className="bg-white border-b border-slate-100 hover:bg-slate-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">L</th>
                                        <td className="px-6 py-4">106-111</td>
                                        <td className="px-6 py-4">74</td>
                                        <td className="px-6 py-4">65</td>
                                    </tr>
                                    <tr className="bg-white hover:bg-slate-50">
                                        <th scope="row" className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">XL</th>
                                        <td className="px-6 py-4">111-116</td>
                                        <td className="px-6 py-4">76</td>
                                        <td className="px-6 py-4">66</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="mt-4 text-xs text-slate-400 text-center italic">* General size guide. Please check product specific measurements if available.</p>
                        </div>
                      </div>}
                  </div>
                </motion.div>
              </TabsContent>

            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>;
}
