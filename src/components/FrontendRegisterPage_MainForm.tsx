'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import CryptoJS from 'crypto-js';
import gsap from 'gsap';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import EditableImg from '@/@base/EditableImg';
import { Loader2, Mail, Lock, User, ArrowRight } from 'lucide-react';

// Entity & Session Imports
import type { user_without_PKs } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';
import { setuser_session, userSession } from '@/tools/SessionContext';

// --- Validation Schema ---
const registerSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long"
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});
type RegisterFormValues = z.infer<typeof registerSchema>;
const FrontendRegisterPage_MainForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  // Animation Refs
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Form Setup
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  // GSAP Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out'
        }
      });

      // Initial state visibility check is handled by CSS or immediate set
      tl.fromTo(imageRef.current, {
        opacity: 0,
        x: -20
      }, {
        opacity: 1,
        x: 0,
        duration: 0.6
      }).fromTo(formRef.current, {
        opacity: 0,
        x: 20
      }, {
        opacity: 1,
        x: 0,
        duration: 0.6
      }, "-=0.4");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Submit Handler
  const onSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true);
    try {
      // 1. Check for existing user (Validation Logic)
      // Note: In a real scenario, the backend might throw a unique constraint error. 
      // We check here for better UX if the API allows.
      const existingUsers = await entities.user.GetAll({
        email: {
          equals: values.email
        }
      });
      if (existingUsers && existingUsers.length > 0) {
        toast.error("An account with this email already exists.");
        setIsLoading(false);
        return;
      }
      const existingUsername = await entities.user.GetAll({
        username: {
          equals: values.username
        }
      });
      if (existingUsername && existingUsername.length > 0) {
        form.setError('username', {
          message: 'Username is already taken'
        });
        setIsLoading(false);
        return;
      }

      // 2. Prepare Payload
      const hashedPassword = CryptoJS.SHA256(values.password).toString();
      const now = new Date();
      const newUserPayload: user_without_PKs = {
        username: values.username,
        email: values.email,
        password: hashedPassword,
        role: 'customer',
        status: 'active',
        created_at: now,
        updated_at: now,
        phone_number: null,
        avatar_url: null,
        last_login: now // Auto-login sets this
      };

      // 3. Create User
      const createdUser = await entities.user.Create(newUserPayload);
      if (!createdUser) {
        throw new Error("Registration failed. Please try again.");
      }

      // 4. Create Session (Auto-login)
      const sessionData = new userSession();
      sessionData.token = `mock-token-${createdUser.id}-${Date.now()}`; // Simulating token generation
      sessionData.userId = createdUser.id.toString();
      sessionData.username = createdUser.username;
      sessionData.cart = []; // Initialize empty cart

      setuser_session(sessionData);

      // 5. Success Feedback & Redirect
      toast.success("Account created successfully! Redirecting...");

      // Short delay for user to see success message
      setTimeout(() => {
        router.push('/');
      }, 1000);
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };
  return <section ref={sectionRef} className="w-full min-h-screen bg-[#f8fafc] flex items-center justify-center py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Brand Visual */}
          <div ref={imageRef} className="hidden lg:block relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
             <EditableImg propKey="register-hero-image" keywords="moroccan developer coding hoodie lifestyle workspace" description="A high quality, moody shot of a developer wearing a premium coding-themed hoodie in a modern workspace, showcasing the lifestyle aspect of the brand. Lighting should be cinematic with blue accents." className="w-full h-full object-cover object-center" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent flex flex-col justify-end p-8 text-white">
                <h2 className="text-3xl font-bold mb-2 tracking-tight">Join the Kaira Community</h2>
                <p className="text-slate-200 text-lg">Premium apparel designed for the modern developer in Morocco.</p>
             </div>
          </div>

          {/* Right Column: Registration Form */}
          <div ref={formRef} className="w-full max-w-md mx-auto lg:max-w-full">
            <Card className="border-slate-200 shadow-xl bg-white">
              <CardHeader className="space-y-1 pb-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-h1 text-[#0f172a]">Create an account</CardTitle>
                </div>
                <CardDescription className="text-base text-slate-500">
                  Enter your details below to create your account and start shopping.
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Username Field */}
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-caption font-semibold text-[#0f172a]">Username</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <Input id="username" placeholder="johndoe_dev" type="text" className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500" {...form.register('username')} />
                    </div>
                    {form.formState.errors.username && <p className="text-red-500 text-xs mt-1">{form.formState.errors.username.message}</p>}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-caption font-semibold text-[#0f172a]">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <Input id="email" placeholder="name@example.com" type="email" className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500" {...form.register('email')} />
                    </div>
                    {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-caption font-semibold text-[#0f172a]">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <Input id="password" placeholder="••••••••" type="password" className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500" {...form.register('password')} />
                    </div>
                    {form.formState.errors.password && <p className="text-red-500 text-xs mt-1">{form.formState.errors.password.message}</p>}
                  </div>

                   {/* Confirm Password Field */}
                   <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-caption font-semibold text-[#0f172a]">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                      <Input id="confirmPassword" placeholder="••••••••" type="password" className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500" {...form.register('confirmPassword')} />
                    </div>
                    {form.formState.errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{form.formState.errors.confirmPassword.message}</p>}
                  </div>

                  <Button type="submit" className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold py-6 mt-2 transition-all duration-200 shadow-md hover:shadow-lg" disabled={isLoading}>
                    {isLoading ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating account...
                      </> : <>
                        Create Account <ArrowRight className="ml-2 h-4 w-4" />
                      </>}
                  </Button>
                </form>
              </CardContent>
              
              <CardFooter className="flex flex-col items-center justify-center border-t border-slate-100 pt-6 pb-6 bg-slate-50/50 rounded-b-xl">
                <p className="text-base text-slate-500 text-center">
                  Already have an account?{' '}
                  <Link href="/frontendloginpage" className="text-blue-600 hover:text-blue-700 font-semibold transition-colors hover:underline underline-offset-4">
                    Login
                  </Link>
                </p>
                <p className="text-xs text-slate-400 mt-4 text-center max-w-xs">
                  By clicking continue, you agree to our Terms of Service and Privacy Policy.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default FrontendRegisterPage_MainForm;
