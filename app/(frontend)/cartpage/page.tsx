'use client';

import React from 'react';
import CartPage_Hero from '@/components/CartPage_Hero';
import CartPage_CartManager from '@/components/CartPage_CartManager';
export default function CartPage() {
  return <main className="w-full min-h-screen bg-white">
      <section className="w-full relative">
        <CartPage_Hero />
      </section>
      <section className="w-full relative">
        <CartPage_CartManager />
      </section>
    </main>;
}
