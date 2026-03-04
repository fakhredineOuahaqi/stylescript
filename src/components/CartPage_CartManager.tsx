'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Minus, Plus, Trash2, ArrowRight, ShoppingBag, Truck } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CardWithNoPadding } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import EditableImg from '@/@base/EditableImg';
import type { cart, cart_item, product } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';

// --- Types & Interfaces ---

interface ExtendedCartItem extends cart_item {
  product?: product | null;
}
interface CartState {
  cart: cart | null;
  items: ExtendedCartItem[];
  isLoading: boolean;
  isUpdating: boolean;
}

// --- Main Component ---

export default function CartPage_CartManager() {
  const router = useRouter();
  const [state, setState] = useState<CartState>({
    cart: null,
    items: [],
    isLoading: true,
    isUpdating: false
  });

  // --- Data Fetching ---

  const fetchCartData = async () => {
    try {
      const session = getuser_session();
      if (!session || !session.userId) {
        // Not logged in state handling could be added here or redirected at page level
        setState(prev => ({
          ...prev,
          isLoading: false
        }));
        return;
      }

      // 1. Get Cart
      const carts = await entities.cart.GetAll({
        user_id: {
          equals: parseInt(session.userId)
        }
      });
      if (!carts || carts.length === 0) {
        setState(prev => ({
          ...prev,
          cart: null,
          items: [],
          isLoading: false
        }));
        return;
      }
      const activeCart = carts[0];

      // 2. Get Cart Items
      const cartItems = await entities.cart_item.GetAll({
        cart_id: {
          equals: activeCart.id
        }
      });

      // 3. Get Products for each item
      const itemsWithProduct = await Promise.all(cartItems.map(async (item, index) => {
        const productData = await entities.product.Get({
          id: item.product_id
        });
        return {
          ...item,
          product: productData
        };
      }));
      setState({
        cart: activeCart,
        items: itemsWithProduct,
        isLoading: false,
        isUpdating: false
      });
    } catch (error) {
      console.error('Failed to fetch cart data:', error);
      toast.error('Unable to load your cart. Please try again later.');
      setState(prev => ({
        ...prev,
        isLoading: false
      }));
    }
  };
  useEffect(() => {
    fetchCartData();
  }, []);

  // --- Actions ---

  const handleUpdateQuantity = async (itemId: number, currentQty: number, delta: number) => {
    const newQty = currentQty + delta;
    if (newQty < 1) return;
    setState(prev => ({
      ...prev,
      isUpdating: true
    }));
    try {
      await entities.cart_item.Update({
        where: {
          id: itemId
        },
        data: {
          quantity: newQty
        } as any // Partial update
      });
      // Optimistic update or refetch
      await fetchCartData();
      toast.success('Cart updated');
    } catch (error) {
      console.error('Update quantity failed', error);
      toast.error('Failed to update quantity');
      setState(prev => ({
        ...prev,
        isUpdating: false
      }));
    }
  };
  const handleRemoveItem = async (itemId: number) => {
    setState(prev => ({
      ...prev,
      isUpdating: true
    }));
    try {
      await entities.cart_item.Delete({
        id: itemId
      });
      await fetchCartData();
      toast.success('Item removed from cart');
    } catch (error) {
      console.error('Remove item failed', error);
      toast.error('Failed to remove item');
      setState(prev => ({
        ...prev,
        isUpdating: false
      }));
    }
  };
  const handleCheckout = () => {
    if (!state.cart || state.items.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    router.push('/checkoutpage');
  };

  // --- Derived Calculations ---

  const subtotal = useMemo(() => {
    return state.items.reduce((acc, item) => {
      const price = item.product?.sale_price || item.product?.price || 0;
      return acc + price * item.quantity;
    }, 0);
  }, [state.items]);
  const shippingFee = subtotal > 1000 ? 0 : 50; // Example logic: Free shipping over 1000
  const total = subtotal + shippingFee;

  // --- Rendering ---

  if (state.isLoading) {
    return <CartSkeleton />;
  }
  if (!state.cart || state.items.length === 0) {
    return <EmptyCartState />;
  }
  return <section className="w-full bg-[#f8fafc] min-h-[calc(100vh-80px)]">
      <div className="container mx-auto px-4 md:px-8 py-10">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold text-[#0f172a] mb-2">Shopping Cart</h1>
          <p className="text-[#64748b]">
            Review your selected items and proceed to secure checkout.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-slate-50 border-b border-slate-100 text-sm font-medium text-[#64748b]">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              <div className="divide-y divide-slate-100">
                <AnimatePresence initial={false}>
                  {state.items.map((item, index) => <CartItemRow key={item.id} item={item} isUpdating={state.isUpdating} onUpdateQuantity={handleUpdateQuantity} onRemove={handleRemoveItem} />)}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <CardWithNoPadding className="bg-white border-slate-200 shadow-sm overflow-hidden">
                <div className="p-6 bg-slate-50 border-b border-slate-100">
                  <h3 className="text-lg font-semibold text-[#0f172a]">Order Summary</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#64748b]">Subtotal</span>
                    <span className="font-medium text-[#0f172a]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-[#64748b]">Shipping Estimate</span>
                    <span className="font-medium text-[#0f172a]">
                      {shippingFee === 0 ? <span className="text-emerald-600">Free</span> : `$${shippingFee.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <Separator className="bg-slate-100 my-4" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-base font-semibold text-[#0f172a]">Total</span>
                    <span className="text-xl font-bold text-[#0f172a]">${total.toFixed(2)}</span>
                  </div>

                  <p className="text-xs text-[#64748b] mt-2">
                    Taxes and shipping calculated at checkout
                  </p>

                  <Button className="w-full mt-6 bg-[#0f172a] hover:bg-[#1e293b] text-white h-12 text-base font-semibold shadow-md transition-all duration-200" onClick={handleCheckout} disabled={state.isUpdating}>
                    {state.isUpdating ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Updating...
                      </> : 'Proceed to Checkout'}
                  </Button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#64748b]">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </CardWithNoPadding>
            </div>
          </div>
        </div>
      </div>
    </section>;
}

// --- Subcomponents ---

function CartItemRow({
  item,
  isUpdating,
  onUpdateQuantity,
  onRemove
}: {
  item: ExtendedCartItem;
  isUpdating: boolean;
  onUpdateQuantity: (id: number, qty: number, delta: number) => void;
  onRemove: (id: number) => void;
}) {
  const product = item.product;
  if (!product) return null;
  const unitPrice = product.sale_price || product.price;
  const lineTotal = unitPrice * item.quantity;
  return <motion.div layout initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    height: 0
  }} className="p-4 md:p-6 group hover:bg-slate-50/50 transition-colors">
      <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:items-center">
        {/* Product Info */}
        <div className="col-span-6 flex gap-4">
          <Link href={`/productdetailpage?productId=${product.id}`} className="shrink-0">
            <div className="relative w-20 h-24 md:w-24 md:h-28 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
              <EditableImg propKey={`cart-item-${item.id}`} keywords={product.cover_image_url || `${product.title}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
          </Link>
          <div className="flex flex-col justify-between py-1">
            <div>
              <Link href={`/productdetailpage?productId=${product.id}`} className="text-[#0f172a] font-medium hover:text-[#3b82f6] transition-colors line-clamp-1">
                {product.title}
              </Link>
              <p className="text-sm text-[#64748b] mt-1 line-clamp-1">{product.sku}</p>
              {(item.selected_size || item.selected_color) && <div className="flex gap-2 mt-2 text-xs text-[#64748b]">
                  {item.selected_size && <span className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200">
                      Size: {item.selected_size}
                    </span>}
                  {item.selected_color && <span className="px-2 py-0.5 bg-slate-100 rounded border border-slate-200">
                      Color: {item.selected_color}
                    </span>}
                </div>}
            </div>
            {/* Mobile Price View */}
            <div className="md:hidden mt-2 font-medium text-[#0f172a]">
              ${unitPrice.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Price (Desktop) */}
        <div className="hidden md:block col-span-2 text-center font-medium text-[#0f172a]">
          ${unitPrice.toFixed(2)}
        </div>

        {/* Quantity Controls */}
        <div className="col-span-2 flex items-center justify-between md:justify-center">
          <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden shadow-sm w-fit">
            <button onClick={() => onUpdateQuantity(item.id, item.quantity, -1)} disabled={isUpdating || item.quantity <= 1} className="p-2 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-[#64748b] hover:text-[#0f172a] transition-colors" aria-label="Decrease quantity">
              <Minus className="w-3 h-3" />
            </button>
            <span className="w-8 text-center text-sm font-medium text-[#0f172a]">
              {item.quantity}
            </span>
            <button onClick={() => onUpdateQuantity(item.id, item.quantity, 1)} disabled={isUpdating} className="p-2 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed text-[#64748b] hover:text-[#0f172a] transition-colors" aria-label="Increase quantity">
              <Plus className="w-3 h-3" />
            </button>
          </div>
          
          {/* Mobile Delete */}
          <button onClick={() => onRemove(item.id)} disabled={isUpdating} className="md:hidden p-2 text-red-500 hover:text-red-600 transition-colors" aria-label="Remove item">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        {/* Total (Desktop) & Desktop Delete */}
        <div className="hidden md:flex col-span-2 items-center justify-end gap-4">
          <span className="font-bold text-[#0f172a]">${lineTotal.toFixed(2)}</span>
          <button onClick={() => onRemove(item.id)} disabled={isUpdating} className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-full hover:bg-red-50" aria-label="Remove item">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>;
}
function EmptyCartState() {
  return <section className="w-full min-h-[60vh] flex items-center justify-center bg-[#f8fafc]">
      <div className="container px-4 text-center max-w-lg mx-auto">
        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="w-10 h-10 text-slate-300" />
        </div>
        <h2 className="text-2xl font-semibold text-[#0f172a] mb-3">Your cart is empty</h2>
        <p className="text-[#64748b] mb-8">
          Looks like you haven't added any items to your cart yet. Explore our latest collection and find something you love.
        </p>
        <Link href="/">
          <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8 py-6 rounded-lg text-base font-semibold">
            Start Shopping
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </Link>
      </div>
    </section>;
}
function CartSkeleton() {
  /* Extracted array: _items */
  const _items = [1, 2, 3];
  return <div className="w-full bg-[#f8fafc] py-10 min-h-[80vh]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <div className="h-10 w-48 bg-slate-200 rounded-md animate-pulse mb-8" />
            {_items.map((i, index) => <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-24 h-28 bg-slate-100 rounded-lg animate-pulse" />
                <div className="flex-1 space-y-3 py-2">
                  <div className="h-4 w-1/3 bg-slate-100 rounded animate-pulse" />
                  <div className="h-4 w-1/4 bg-slate-100 rounded animate-pulse" />
                </div>
              </div>)}
          </div>
          <div className="w-full lg:w-96">
            <div className="bg-white p-6 rounded-xl border border-slate-200 h-80 space-y-4">
              <div className="h-6 w-1/2 bg-slate-100 rounded animate-pulse" />
              <div className="h-4 w-full bg-slate-100 rounded animate-pulse mt-8" />
              <div className="h-4 w-full bg-slate-100 rounded animate-pulse" />
              <div className="h-12 w-full bg-slate-100 rounded animate-pulse mt-8" />
            </div>
          </div>
        </div>
      </div>
    </div>;
}
