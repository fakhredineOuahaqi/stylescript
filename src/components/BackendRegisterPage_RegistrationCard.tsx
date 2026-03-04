'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import CryptoJS from 'crypto-js';
import { Loader2, ShieldCheck, Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Separator } from '@/components/ui/separator';

// Import types and entities proxy
import type { admin_user_without_PKs } from '@/server/entities.type';
import { entities } from '@/tools/entities-proxy';

// Define Zod schema for validation
const registrationSchema = z.object({
  username: z.string().min(3, {
    message: 'Username must be at least 3 characters'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters'
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
});
type RegistrationFormValues = z.infer<typeof registrationSchema>;
export default function BackendRegisterPage_RegistrationCard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Initialize form
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  // Handle form submission
  const onSubmit = async (data: RegistrationFormValues) => {
    setIsLoading(true);
    try {
      // 1. Hash the password
      const hashedPassword = CryptoJS.SHA256(data.password).toString();

      // 2. Prepare payload for creation
      const newUserPayload: admin_user_without_PKs = {
        username: data.username,
        email: data.email,
        password: hashedPassword,
        role: 'admin',
        // Default to 'admin' as per context, could be configurable
        status: 'active',
        created_at: new Date(),
        updated_at: new Date()
      };

      // 3. Call entity creation
      // Check for existing user first to provide better feedback (Optional but recommended UX)
      // Since we can't do complex logic in one transaction easily here without backend API wrapper,
      // we'll try to create directly. Real-world would check existence first.

      // Simulating a check or direct create. We will proceed to create.
      const result = await entities.admin_user.Create(newUserPayload);
      if (result) {
        toast.success('Registration successful! Redirecting to login...');
        // Wait a moment for the toast before redirecting
        setTimeout(() => {
          router.push('/backendloginpage');
        }, 1500);
      } else {
        throw new Error('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Registration failed. Username or email might already be taken.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-50 z-0" />
      
      {/* Main Card Container */}
      <Card className="relative z-10 w-full max-w-[440px] border-slate-200 shadow-xl bg-white">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="flex justify-center mb-2">
            <div className="h-12 w-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-900/20">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </div>
          <CardTitle className="text-h2 text-slate-900">Admin Registration</CardTitle>
          <CardDescription className="text-base text-slate-500">
            Create a new administrator account to manage the store.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              {/* Username Field */}
              <FormField control={form.control} name="username" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-caption font-semibold text-slate-700">Username</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="johndoe" className="pl-9 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 transition-all" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500 font-medium" />
                  </FormItem>} />

              {/* Email Field */}
              <FormField control={form.control} name="email" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-caption font-semibold text-slate-700">Email Address</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input type="email" placeholder="admin@kaira.com" className="pl-9 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 transition-all" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500 font-medium" />
                  </FormItem>} />

              {/* Password Field */}
              <FormField control={form.control} name="password" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-caption font-semibold text-slate-700">Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input type={showPassword ? 'text' : 'password'} placeholder="••••••••" className="pl-9 pr-9 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 transition-all" {...field} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 focus:outline-none">
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500 font-medium" />
                  </FormItem>} />

              {/* Confirm Password Field */}
              <FormField control={form.control} name="confirmPassword" render={({
              field
            }) => <FormItem>
                    <FormLabel className="text-caption font-semibold text-slate-700">Confirm Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                        <Input type={showConfirmPassword ? 'text' : 'password'} placeholder="••••••••" className="pl-9 pr-9 bg-slate-50 border-slate-200 focus:border-blue-500 focus:ring-blue-500/10 transition-all" {...field} />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 focus:outline-none">
                          {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs text-red-500 font-medium" />
                  </FormItem>} />

              <Button type="submit" disabled={isLoading} className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-6 mt-4 shadow-lg shadow-slate-900/10 transition-all duration-200">
                {isLoading ? <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registering...
                  </> : 'Create Account'}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-2">
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-500">Or</span>
            </div>
          </div>
          
          <div className="text-center w-full">
            <Link href="/backendloginpage" className="text-base text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors flex items-center justify-center gap-1">
              Already have an account? Log in
            </Link>
          </div>
        </CardFooter>
      </Card>

      {/* Footer Copyright/Info - Optional visual filler */}
      <div className="absolute bottom-6 text-center w-full text-caption text-slate-400">
        &copy; {new Date().getFullYear()} Kaira Admin Portal. All rights reserved.
      </div>
    </div>;
}
