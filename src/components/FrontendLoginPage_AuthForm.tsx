'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'sonner';
import CryptoJS from 'crypto-js';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Loader2, ArrowRight } from 'lucide-react';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import { setuser_session, userSession } from '@/tools/SessionContext';

// ----------------------------------------------------------------------
// Types & Schemas
// ----------------------------------------------------------------------

const loginSchema = z.object({
  username: z.string().min(1, {
    message: 'Username is required'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters'
  })
});
type LoginFormValues = z.infer<typeof loginSchema>;

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------

export default function FrontendLoginPage_AuthForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  });

  // Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image fade in
      gsap.fromTo(imageContainerRef.current, {
        opacity: 0,
        x: -20
      }, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Form fade in
      gsap.fromTo(formContainerRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2,
        ease: 'power2.out'
      });
    });
    return () => ctx.revert();
  }, []);

  // Handle Login
  async function onSubmit(data: LoginFormValues) {
    setIsLoading(true);
    try {
      // 1. Encrypt Password
      const hashedPassword = CryptoJS.SHA256(data.password).toString();

      // 2. Query Database
      // We filter by username, password hash, and ensure status is active
      const users = await entities.user.GetAll({
        username: {
          equals: data.username
        },
        password: {
          equals: hashedPassword
        },
        status: {
          equals: 'active'
        },
        role: {
          equals: 'customer'
        } // Ensure only customers login here
      });

      // 3. Validate Result
      if (users && users.length > 0) {
        const user = users[0];

        // 4. Create Session
        const session = new userSession();
        session.token = `tk_${user.id}_${Date.now()}`; // Simple token generation for demo
        session.userId = user.id.toString();
        session.username = user.username;
        session.cart = []; // Initialize empty cart or fetch from DB if persistent

        // 5. Store Session
        setuser_session(session);
        toast.success('Login successful! Redirecting...');

        // 6. Redirect
        // Adding a small delay to allow the toast to be seen and session to set
        setTimeout(() => {
          router.push('/');
        }, 500);
      } else {
        // Handle invalid credentials
        toast.error('Invalid username or password, or account is suspended.');
        form.setValue('password', ''); // Clear password field
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }
  return <section className="w-full min-h-screen bg-white flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full min-h-[600px] shadow-2xl rounded-2xl overflow-hidden border border-slate-200 bg-white">
          
          {/* Left Column: Visual / Image */}
          <div ref={imageContainerRef} className="relative hidden lg:block bg-slate-900 h-full min-h-[600px]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            
            <div className="h-full w-full">
               <EditableImg propKey="auth-cover-image" keywords="fashion hoodie model streetwear morocco" description="A stylish model wearing a modern hoodie in an urban Moroccan setting, high fashion photography, moody lighting" needLargeImage={true} className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-0 left-0 z-20 p-12 text-white">
              <h2 className="text-h1 font-bold mb-4 tracking-tight">Kaira Fashion</h2>
              <p className="text-base text-slate-200 max-w-md leading-relaxed">
                Discover the latest trends in coding-themed apparel. Quality, comfort, and style designed for the modern developer.
              </p>
            </div>
          </div>

          {/* Right Column: Login Form */}
          <div ref={formContainerRef} className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-white">
            <div className="w-full max-w-md mx-auto space-y-8">
              
              {/* Header */}
              <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-h3 font-semibold text-slate-900">Welcome back</h1>
                <p className="text-slate-500 text-base">
                  Please enter your details to sign in.
                </p>
              </div>

              {/* Form */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Username Field */}
                  <FormField control={form.control} name="username" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-caption font-medium text-slate-700">Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your username" {...field} disabled={isLoading} className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>} />

                  {/* Password Field */}
                  <FormField control={form.control} name="password" render={({
                  field
                }) => <FormItem>
                        <div className="flex items-center justify-between">
                          <FormLabel className="text-caption font-medium text-slate-700">Password</FormLabel>
                          <Link href="#" className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors" onClick={e => {
                      e.preventDefault();
                      toast.info("Password recovery is currently unavailable.");
                    }}>
                            Forgot password?
                          </Link>
                        </div>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} disabled={isLoading} className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20" />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs" />
                      </FormItem>} />

                  {/* Submit Button */}
                  <Button type="submit" disabled={isLoading} className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                    {isLoading ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </> : <>
                        Sign In
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>}
                  </Button>
                </form>
              </Form>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400">Or continue with</span>
                </div>
              </div>
              
              {/* Footer / Register Link */}
              <div className="text-center pt-2">
                <p className="text-base text-slate-600">
                  Don&apos;t have an account?{' '}
                  <Link href="/frontendregisterpage" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                    Create an account
                  </Link>
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>;
}
