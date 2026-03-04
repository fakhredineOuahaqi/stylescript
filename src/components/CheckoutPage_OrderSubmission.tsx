'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { gsap } from 'gsap';
import { Loader2, ArrowLeft, ShieldCheck, Truck, Package } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import EditableImg from "@/@base/EditableImg";
import type { cart, cart_item, product } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';

// --- Types & Schema ---

const checkoutSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name is required"
  }),
  phone: z.string().min(9, {
    message: "Valid phone number is required"
  }),
  address: z.string().min(5, {
    message: "Detailed address is required"
  }),
  city: z.string().min(2, {
    message: "City is required"
  }),
  postalCode: z.string().optional()
});
type CheckoutFormValues = z.infer<typeof checkoutSchema>;
interface CartItemWithProduct extends cart_item {
  product?: product | null;
}

// --- Component ---

export default function CheckoutPage_OrderSubmission() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // State
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [cartData, setCartData] = useState<cart | null>(null);
  const [cartItems, setCartItems] = useState<CartItemWithProduct[]>([]);
  const [userId, setUserId] = useState<number | null>(null);

  // Form Setup
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      address: "",
      city: "",
      postalCode: ""
    }
  });

  // --- 1. Data Fetching ---
  useEffect(() => {
    const initData = async () => {
      try {
        setLoading(true);
        const session = getuser_session();

        // 1. Check Session
        if (!session || !session.userId) {
          toast.error("Please login to proceed with checkout.");
          router.push('/frontendloginpage');
          return;
        }
        const currentUserId = parseInt(session.userId);
        if (isNaN(currentUserId)) {
          toast.error("Invalid user session.");
          return;
        }
        setUserId(currentUserId);

        // 2. Fetch Cart
        // Note: Assuming one active cart per user for simplicity or fetching the latest one.
        const carts = await entities.cart.GetAll({
          user_id: {
            equals: currentUserId
          }
        });
        if (!carts || carts.length === 0) {
          // Empty state handling
          setCartData(null);
          setCartItems([]);
          setLoading(false);
          return;
        }

        // Use the most recent cart
        const activeCart = carts[carts.length - 1];
        setCartData(activeCart);

        // 3. Fetch Cart Items
        const items = await entities.cart_item.GetAll({
          cart_id: {
            equals: activeCart.id
          }
        });
        if (!items || items.length === 0) {
          setCartItems([]);
          setLoading(false);
          return;
        }

        // 4. Fetch Products for each item (to get images and titles)
        const itemsWithProducts = await Promise.all(items.map(async (item, index) => {
          const prod = await entities.product.Get({
            id: item.product_id
          });
          return {
            ...item,
            product: prod
          };
        }));
        setCartItems(itemsWithProducts);
      } catch (err) {
        console.error("Failed to load checkout data:", err);
        toast.error("Failed to load your cart information.");
      } finally {
        setLoading(false);
      }
    };
    initData();
  }, [router]);

  // --- 2. Animations ---
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

  // --- 3. Form Submission Logic ---
  const onSubmit = async (values: CheckoutFormValues) => {
    if (!userId || !cartData || cartItems.length === 0) {
      toast.error("Cart is empty or invalid session.");
      return;
    }
    setSubmitting(true);
    try {
      // A. Generate Order Number
      const orderNumber = `ORD-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      // B. Create Order Record
      const newOrder = await entities.order.Create({
        order_number: orderNumber,
        user_id: userId,
        status: 'pending',
        // Initial status
        payment_method: 'cash_on_delivery',
        // Explicitly COD
        total_amount: cartData.total_price,
        // Final amount user pays
        total_price: cartData.subtotal_price,
        // Product total
        shipping_fee: cartData.shipping_fee,
        shipping_name: values.fullName,
        shipping_phone: values.phone,
        shipping_address: `${values.address}, ${values.city} ${values.postalCode || ''}`.trim(),
        shipping_city: values.city,
        tracking_number: null,
        refund_reason: null,
        created_at: new Date(),
        updated_at: new Date()
      });
      if (!newOrder) {
        throw new Error("Failed to create order record.");
      }

      // C. Create Order Items
      await Promise.all(cartItems.map((item, index) => entities.order_item.Create({
        order_id: newOrder.id,
        product_id: item.product_id,
        product_title: item.product?.title || 'Unknown Product',
        product_cover_image_url: item.product?.cover_image_url || null,
        quantity: item.quantity,
        unit_price: item.unit_price,
        price_at_purchase: item.unit_price,
        // Snapshot price
        selected_size: item.selected_size,
        selected_color: item.selected_color,
        created_at: new Date(),
        updated_at: new Date()
      })));

      // D. Success Handling
      toast.success("Order placed successfully!");

      // E. Redirect
      router.push('/orderhistorypage');
    } catch (error) {
      console.error("Order submission error:", error);
      toast.error("There was a problem placing your order. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // --- 4. Loading State ---
  if (loading) {
    return <div className="w-full min-h-[60vh] flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-slate-900" />
      </div>;
  }

  // --- 5. Empty State ---
  if (!cartData || cartItems.length === 0) {
    return <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-slate-50 gap-4">
              <Package className="w-16 h-16 text-slate-300" />
              <h2 className="text-h3 text-slate-900">Your cart is empty</h2>
              <p className="text-base text-slate-500">Add some coding gear before checking out.</p>
              <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white mt-4">
                  <Link href="/cartpage">Return to Shop</Link>
              </Button>
          </div>;
  }

  // --- 6. Main Render ---
  return <div className="w-full bg-slate-50 min-h-screen">
      <div ref={containerRef} className="container mx-auto px-4 md:px-8 py-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
                <Link href="/cartpage" className="flex items-center text-slate-500 hover:text-slate-900 transition-colors mb-2 text-sm font-medium">
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back to Cart
                </Link>
                <h1 className="text-h1 text-slate-900 font-bold tracking-tight">Checkout</h1>
            </div>
            <div className="hidden md:flex items-center text-slate-500 text-sm">
                <ShieldCheck className="w-4 h-4 mr-2 text-emerald-500" />
                Secure SSL Encrypted Transaction
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Shipping Form */}
          <div className="lg:col-span-7">
            <Card className="border-slate-200 shadow-sm bg-white">
                <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                         <CardTitle className="text-h3 text-slate-900">Shipping Details</CardTitle>
                         <Truck className="w-5 h-5 text-blue-500" />
                    </div>
                    <CardDescription className="text-slate-500">
                        Please enter your delivery information for Morocco shipping.
                    </CardDescription>
                </CardHeader>
                <Separator className="bg-slate-100" />
                <CardContent className="pt-6">
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        
                        {/* Name Field */}
                        <FormField control={form.control} name="fullName" render={({
                    field
                  }) => <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. Karim Bennani" className="bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>} />

                        {/* Phone Field */}
                        <FormField control={form.control} name="phone" render={({
                    field
                  }) => <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="e.g. +212 6XX XXX XXX" className="bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>} />

                        {/* Address Field */}
                        <FormField control={form.control} name="address" render={({
                    field
                  }) => <FormItem>
                              <FormLabel className="text-slate-700 font-medium">Detailed Address</FormLabel>
                              <FormControl>
                                <Input placeholder="Street name, Building No., Apt..." className="bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" {...field} />
                              </FormControl>
                              <FormMessage className="text-red-500" />
                            </FormItem>} />

                        {/* City & Zip Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <FormField control={form.control} name="city" render={({
                      field
                    }) => <FormItem>
                                  <FormLabel className="text-slate-700 font-medium">City</FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. Casablanca" className="bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" {...field} />
                                  </FormControl>
                                  <FormMessage className="text-red-500" />
                                </FormItem>} />

                            <FormField control={form.control} name="postalCode" render={({
                      field
                    }) => <FormItem>
                                  <FormLabel className="text-slate-700 font-medium">Postal Code <span className="text-slate-400 font-normal">(Optional)</span></FormLabel>
                                  <FormControl>
                                    <Input placeholder="e.g. 20000" className="bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" {...field} />
                                  </FormControl>
                                  <FormMessage className="text-red-500" />
                                </FormItem>} />
                        </div>

                        {/* Payment Method Notice */}
                        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-start gap-3">
                            <div className="bg-emerald-100 p-2 rounded-full">
                                <span className="text-emerald-700 font-bold text-xs">COD</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-semibold text-slate-900">Cash on Delivery (COD)</h4>
                                <p className="text-xs text-slate-500 mt-1">
                                    Pay securely in cash when your order arrives at your doorstep. No online payment required.
                                </p>
                            </div>
                        </div>

                        {/* Mobile Submit Button (Visible on Small Screens only) */}
                        <div className="lg:hidden pt-4">
                            <Button type="submit" disabled={submitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12 text-base shadow-lg shadow-slate-900/10">
                                {submitting ? <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Processing Order...
                                    </> : `Confirm Order - ${cartData.total_price.toFixed(2)} MAD`}
                            </Button>
                        </div>
                      </form>
                    </Form>
                </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN: Order Summary */}
          <div className="lg:col-span-5">
             <div className="sticky top-8">
                <Card className="border-slate-200 shadow-sm bg-slate-50/50">
                    <CardHeader className="bg-white border-b border-slate-100 rounded-t-xl">
                        <CardTitle className="text-h3 text-slate-900">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        {/* Cart Items List */}
                        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                            {cartItems.map((item, index) => <div key={item.id} className="flex gap-4 group">
                                    <div className="relative w-16 h-16 rounded-md overflow-hidden border border-slate-200 bg-white flex-shrink-0">
                                         <EditableImg propKey={`product-thumb-${item.product_id}`} keywords={item.product?.cover_image_url || `${item.product?.title} clothing`} description={`Thumbnail for ${item.product?.title}`} className="w-full h-full object-cover object-center" />
                                         <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded-bl-md font-medium">
                                            x{item.quantity}
                                         </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-slate-900 truncate">
                                            {item.product?.title || 'Product'}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {item.selected_size && <span className="mr-2">Size: {item.selected_size}</span>}
                                            {item.selected_color && <span>Color: {item.selected_color}</span>}
                                        </p>
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900">
                                        {(item.unit_price * item.quantity).toFixed(2)}
                                    </div>
                                </div>)}
                        </div>

                        <Separator className="my-6 bg-slate-200" />

                        {/* Calculations */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Subtotal</span>
                                <span className="text-slate-900 font-medium">{cartData.subtotal_price.toFixed(2)} MAD</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-slate-500">Shipping (Morocco)</span>
                                <span className="text-slate-900 font-medium">
                                    {cartData.shipping_fee === 0 ? 'Free' : `${cartData.shipping_fee.toFixed(2)} MAD`}
                                </span>
                            </div>
                        </div>

                        <Separator className="my-6 bg-slate-200" />

                        <div className="flex justify-between items-end mb-6">
                            <div>
                                <span className="text-sm text-slate-500">Total Amount</span>
                                <div className="text-xs text-slate-400 font-light">Inc. VAT</div>
                            </div>
                            <span className="text-2xl font-bold text-slate-900 tracking-tight">
                                {cartData.total_price.toFixed(2)} MAD
                            </span>
                        </div>

                        {/* Desktop Submit Button */}
                        <div className="hidden lg:block">
                            <Button onClick={form.handleSubmit(onSubmit)} disabled={submitting} className="w-full bg-slate-900 hover:bg-slate-800 text-white h-14 text-lg font-semibold rounded-lg shadow-xl shadow-slate-900/10 transition-all hover:translate-y-[-1px]">
                                {submitting ? <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                        Processing...
                                    </> : 'Confirm Order'}
                            </Button>
                        </div>
                        
                        <div className="mt-4 text-center">
                            <p className="text-xs text-slate-400">
                                By confirming, you agree to our Terms of Service & Privacy Policy.
                            </p>
                        </div>

                    </CardContent>
                </Card>
             </div>
          </div>

        </div>
      </div>
    </div>;
}
