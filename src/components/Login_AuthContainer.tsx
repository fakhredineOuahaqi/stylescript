'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Loader2, AlertCircle, Lock, Mail, ArrowRight } from 'lucide-react';
import CryptoJS from 'crypto-js';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { entities } from '@/tools/entities-proxy';
import { setadmin_session, adminSession } from '@/tools/SessionContext';
import type { admin_user } from '@/server/entities.type';
import EditableImg from '@/@base/EditableImg';

// Define the form schema
const loginSchema = z.object({
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  })
});
type LoginFormValues = z.infer<typeof loginSchema>;
const Login_AuthContainer = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setError(null);
    try {
      // 1. Hash the password
      const hashedPassword = CryptoJS.SHA256(data.password).toString();

      // 2. Query the database for the admin user
      const users = await entities.admin_user.GetAll({
        email: {
          equals: data.email
        },
        password: {
          equals: hashedPassword
        },
        status: {
          equals: 'active'
        } // Ensure only active users can login
      });
      if (users && users.length > 0) {
        const adminUser = users[0];

        // 3. Create session object
        const sessionData = new adminSession();
        sessionData.token = `admin_token_${Date.now()}_${Math.random().toString(36).substr(2)}`; // Simulate token generation
        sessionData.adminId = adminUser.id.toString();
        sessionData.adminUsername = adminUser.username;

        // 4. Set session
        setadmin_session(sessionData);
        toast.success('Login successful! Redirecting to dashboard...');

        // 5. Redirect
        // Delay slightly for UX
        setTimeout(() => {
          router.push('/admindashboardpage');
        }, 800);
      } else {
        // Handle invalid credentials
        setError('Invalid email or password. Please try again.');
        // Also check if user exists but is suspended (optional security enhancement, usually handled generically)
        const suspendedCheck = await entities.admin_user.GetAll({
          email: {
            equals: data.email
          },
          status: {
            equals: 'suspended'
          }
        });
        if (suspendedCheck && suspendedCheck.length > 0) {
          setError('Your account has been suspended. Please contact support.');
        }
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="w-full min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-40 mix-blend-multiply animate-pulse" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-indigo-100 rounded-full blur-[100px] opacity-40 mix-blend-multiply" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full">
        {/* Left Column: Brand/Visual */}
        <div className="hidden lg:flex flex-col justify-center h-full space-y-8 pr-12">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-6 shadow-xl shadow-slate-200">
               <Lock className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Secure Access for <br />
              Store Administrators
            </h1>
            <p className="text-lg text-slate-600 max-w-md leading-relaxed">
              Manage your coding-themed apparel inventory, track orders, and oversee user activity from one centralized dashboard.
            </p>
          </div>
          
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
             <EditableImg propKey="login-hero-image" keywords="modern minimal office desk technology coding dark mode setup" description="A high quality, dark themed workspace setup with code on screens, representing the backend administration environment." className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-medium text-sm bg-white/10 backdrop-blur-md px-3 py-1 rounded-full inline-block border border-white/20">
                  Admin Portal v2.0
                </p>
             </div>
          </div>
        </div>

        {/* Right Column: Auth Form */}
        <div className="flex flex-col items-center justify-center w-full">
           <Card className="w-full max-w-md shadow-xl border-slate-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 pb-6">
              <div className="lg:hidden w-10 h-10 bg-slate-900 rounded-md flex items-center justify-center mb-4 shadow-lg">
                 <Lock className="w-5 h-5 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-slate-900">
                Welcome back
              </CardTitle>
              <CardDescription className="text-slate-500 text-base">
                Enter your credentials to access your account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {error && <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Authentication Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>}

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField control={form.control} name="email" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-slate-700 font-medium">Email</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                            <Input placeholder="admin@kaira.com" className="pl-10 h-11 bg-slate-50 border-slate-200 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  <FormField control={form.control} name="password" render={({
                  field
                }) => <FormItem>
                        <div className="flex items-center justify-between">
                            <FormLabel className="text-slate-700 font-medium">Password</FormLabel>
                            <a href="#" className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline">
                                Forgot password?
                            </a>
                        </div>
                        <FormControl>
                          <div className="relative group">
                            <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
                            <Input type="password" placeholder="••••••••" className="pl-10 h-11 bg-slate-50 border-slate-200 focus:bg-white transition-all duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500" {...field} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <Button type="submit" className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition-all duration-300" disabled={isLoading}>
                    {isLoading ? <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </> : <>
                        Sign In to Dashboard
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>}
                  </Button>
                </form>
              </Form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 pt-2 pb-8 border-t border-slate-100 bg-slate-50/50 rounded-b-xl mt-2">
              <div className="text-center text-sm text-slate-600 pt-4">
                Don't have an admin account?{' '}
                <a onClick={e => {
                e.preventDefault();
                router.push('/backendregisterpage');
              }} className="font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer transition-colors">
                  Request Access
                </a>
              </div>
              <p className="text-center text-xs text-slate-400">
                  &copy; {new Date().getFullYear()} Kaira Admin Portal. Secured by 256-bit encryption.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>;
};
export default Login_AuthContainer;
