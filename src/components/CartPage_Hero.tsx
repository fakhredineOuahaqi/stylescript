'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';
export default function CartPage_Hero() {
  return <section className="w-full bg-[#f8fafc] border-b border-slate-200">
      <div className="container mx-auto px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          
          {/* Left: Title Area */}
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex items-center gap-3 text-[#3b82f6] mb-1">
              <ShoppingBag className="w-5 h-5" />
              <span className="text-caption font-semibold tracking-wide uppercase">Checkout Process</span>
            </div>
            <h1 className="text-display text-[#0f172a] leading-tight">
              Your Shopping Cart
            </h1>
            <p className="text-base text-[#64748b] max-w-lg">
              Review your selected coding gear. You are one step closer to upgrading your developer wardrobe.
            </p>
          </div>

          {/* Right: Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="w-full md:w-auto mb-1 md:mb-2">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="flex items-center text-[#64748b] hover:text-[#3b82f6] transition-colors duration-200">
                  <Home className="w-4 h-4" />
                  <span className="sr-only">Home</span>
                </Link>
              </li>
              
              <li className="text-[#94a3b8]">
                <ChevronRight className="w-4 h-4" />
              </li>
              
              <li>
                <span className="flex items-center text-[#0f172a] font-medium px-2 py-1 rounded-md bg-white border border-slate-200 shadow-sm text-caption" aria-current="page">
                  Cart
                </span>
              </li>

              <li className="text-[#94a3b8]">
                <ChevronRight className="w-4 h-4" />
              </li>

              <li>
                <span className="text-[#94a3b8] text-caption select-none cursor-not-allowed">
                  Checkout
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>;
}
