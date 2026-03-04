'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, ShoppingBag, Truck, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { getuser_session } from '@/tools/SessionContext';

/**
 * OrderHistoryPage_Header
 * 
 * A refined, modern page header for the Order History section.
 * adhering to the "Commercial Clarity First" principle.
 * 
 * Features:
 * - Clear hierarchy with .text-h1 for the main title.
 * - Contextual breadcrumb navigation.
 * - User personalization via session data.
 * - Responsive layout utilizing grid and flexbox.
 */
export default function OrderHistoryPage_Header() {
  const [username, setUsername] = useState<string>('');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  useEffect(() => {
    // Retrieve session data to personalize the header
    const session = getuser_session();
    if (session && session.token) {
      setIsLoggedIn(true);
      // Fallback to 'Customer' if username is empty but token exists
      setUsername(session.username || 'Valued Customer');
    }
  }, []);
  return <section className="w-full bg-[#f8fafc] border-b border-slate-200">
            <div className="container mx-auto px-8 py-12">
                {/* Breadcrumb / Navigation Context */}
                <div className="flex items-center gap-2 mb-6 text-sm text-slate-500 font-medium">
                    <Link href="/" className="hover:text-[#0f172a] transition-colors duration-200 flex items-center gap-1">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Store
                    </Link>
                    <span className="text-slate-300">/</span>
                    <span className="text-[#0f172a]">Account</span>
                    <span className="text-slate-300">/</span>
                    <span className="text-slate-900 font-semibold">Orders</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    {/* Left Column: Title & Description */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-h1 text-[#0f172a] tracking-tight">
                                Order History
                            </h1>
                            <p className="text-base text-slate-500 max-w-2xl leading-relaxed">
                                View the status of your recent purchases, track shipments, and manage returns. 
                                {isLoggedIn && <span className="block mt-1 text-slate-400">
                                        Welcome back, <span className="font-semibold text-slate-700">{username}</span>.
                                    </span>}
                            </p>
                        </div>
                        
                        {/* Quick Stats / Highlights (Visual Only - Static Context) */}
                        <div className="flex flex-wrap gap-6 mt-2">
                            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <Package className="w-4 h-4 text-[#3b82f6]" />
                                <span>Track Orders</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <Truck className="w-4 h-4 text-[#3b82f6]" />
                                <span>Shipping Updates</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                                <ShoppingBag className="w-4 h-4 text-[#3b82f6]" />
                                <span>Easy Reorder</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Actions */}
                    <div className="lg:col-span-4 flex flex-col lg:items-end justify-end pb-1">
                        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-[0px_1px_3px_rgba(15,23,42,0.08)] w-full lg:w-auto min-w-[280px]">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-slate-50 rounded-full text-[#0f172a]">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[#0f172a]">Need Help?</p>
                                    <p className="text-xs text-slate-500">Contact our support team</p>
                                </div>
                            </div>
                            <Button className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold transition-all duration-200 shadow-md hover:shadow-lg">
                                Contact Support
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>;
}
