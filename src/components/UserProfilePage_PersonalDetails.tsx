'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import gsap from 'gsap';
import { Loader2, Save, User, Mail, Phone, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';
import type { user_without_PKs } from '@/server/entities.type';

// ----------------------------------------------------------------------
// Types & Schema
// ----------------------------------------------------------------------

const personalDetailsSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone_number: z.string().optional().nullable(),
  avatar_url: z.string().url('Invalid URL').optional().or(z.literal(''))
});
type PersonalDetailsFormValues = z.infer<typeof personalDetailsSchema>;

// ----------------------------------------------------------------------
// Component
// ----------------------------------------------------------------------

export default function UserProfilePage_PersonalDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize form
  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    formState: {
      errors,
      isDirty
    }
  } = useForm<PersonalDetailsFormValues>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      username: '',
      email: '',
      phone_number: '',
      avatar_url: ''
    }
  });
  const currentAvatarUrl = watch('avatar_url');

  // ----------------------------------------------------------------------
  // Data Fetching
  // ----------------------------------------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const session = getuser_session();
        if (!session || !session.userId) {
          // Ideally redirect here, but strictly following component scope, we show empty/locked state
          toast.error('Please log in to view your profile.');
          setIsLoading(false);
          return;
        }
        const currentId = parseInt(session.userId, 10);
        if (isNaN(currentId)) {
          toast.error('Invalid user session.');
          setIsLoading(false);
          return;
        }
        setUserId(currentId);

        // Fetch User Data
        const userData = await entities.user.Get({
          id: currentId
        });
        if (userData) {
          reset({
            username: userData.username || '',
            email: userData.email || '',
            phone_number: userData.phone_number || '',
            avatar_url: userData.avatar_url || ''
          });
        } else {
          toast.error('User profile not found.');
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        toast.error('Failed to load profile data.');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [reset]);

  // ----------------------------------------------------------------------
  // Animations
  // ----------------------------------------------------------------------

  useEffect(() => {
    if (!isLoading && containerRef.current) {
      gsap.fromTo(containerRef.current, {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    }
  }, [isLoading]);

  // ----------------------------------------------------------------------
  // Form Submission
  // ----------------------------------------------------------------------

  const onSubmit = async (data: PersonalDetailsFormValues) => {
    if (!userId) return;
    try {
      setIsSaving(true);

      // We only update the fields allowed in this form.
      // Password, role, status etc are preserved or handled in different sections.
      // Since entities.user.Update requires the full data object or partial? 
      // The Type definition says `data: user_without_PKs`. 
      // We first need the EXISTING data to merge, or if the API supports partial updates implicitly.
      // Based on strict type definition, we usually need to fetch-merge-update if the backend requires full object.
      // However, usually Update handles partials if Prisma is used, but the type says `user_without_PKs`.
      // Let's assume we need to re-fetch to be safe or just send what we have if the backend handles merge.
      // SAFE STRATEGY: Fetch current -> Merge -> Update.

      const currentUser = await entities.user.Get({
        id: userId
      });
      if (!currentUser) {
        throw new Error('User not found during update.');
      }
      const updatePayload: user_without_PKs = {
        ...currentUser,
        // Keep existing fields like password, role, etc.
        username: data.username,
        // Email is typically immutable for users or requires verify, but we send it if changed in UI (though UI is disabled)
        email: data.email,
        phone_number: data.phone_number,
        avatar_url: data.avatar_url,
        updated_at: new Date()
      };
      const result = await entities.user.Update({
        where: {
          id: userId
        },
        data: updatePayload
      });
      if (result) {
        toast.success('Profile updated successfully!');
        reset(data); // Reset dirty state with new data
      } else {
        throw new Error('Update returned null.');
      }
    } catch (error) {
      console.error('Update failed:', error);
      toast.error('Failed to update profile. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  // ----------------------------------------------------------------------
  // Render
  // ----------------------------------------------------------------------

  if (isLoading) {
    return <div className="w-full min-h-[400px] flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
      </div>;
  }
  return <section className="w-full bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-8 py-10" ref={containerRef}>
        
        {/* Header Section */}
        <div className="mb-8 space-y-2">
          <h1 className="text-h1 text-slate-900">Personal Details</h1>
          <p className="text-base text-slate-500 max-w-2xl">
            Manage your public profile and private information. 
            Ensure your contact details are up to date for order notifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Avatar & Summary */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="border-slate-200 shadow-sm overflow-hidden bg-white">
              <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-6">
                <CardTitle className="text-h3 text-slate-900">Profile Picture</CardTitle>
                <CardDescription className="text-slate-500">
                  This image will be displayed on your public profile.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8 flex flex-col items-center text-center">
                <div className="relative group w-32 h-32 mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md ring-1 ring-slate-100 relative bg-slate-100">
                    {currentAvatarUrl ? <img src={currentAvatarUrl} alt="Profile Avatar" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                        <User className="w-12 h-12" />
                      </div>}
                    
                    {/* Overlay Hint */}
                    <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center rounded-full">
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white p-2 rounded-full shadow-lg border border-slate-100 text-slate-600">
                     <Camera className="w-4 h-4" />
                  </div>
                </div>

                <div className="w-full space-y-4">
                    <div className="space-y-2 text-left">
                        <Label htmlFor="avatar_url" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            Avatar URL
                        </Label>
                        <Controller name="avatar_url" control={control} render={({
                    field
                  }) => <Input {...field} value={field.value || ''} id="avatar_url" placeholder="https://example.com/avatar.jpg" className="text-sm bg-slate-50/50 focus:bg-white transition-colors" />} />
                         <p className="text-[11px] text-slate-400">
                            Paste a direct link to an image (JPG, PNG).
                        </p>
                        {errors.avatar_url && <p className="text-red-500 text-xs mt-1">{errors.avatar_url.message}</p>}
                    </div>
                </div>
              </CardContent>
            </Card>
            
             {/* Security Note */}
             <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
                <div className="mt-0.5">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div>
                    <h4 className="text-sm font-semibold text-blue-900">Privacy Check</h4>
                    <p className="text-xs text-blue-700 mt-1 leading-relaxed">
                        Your email address is managed securely. Contact support if you need to update your primary login email.
                    </p>
                </div>
             </div>
          </div>

          {/* Right Column: Main Form */}
          <div className="lg:col-span-8">
            <Card className="border-slate-200 shadow-sm bg-white h-full">
              <CardHeader className="border-b border-slate-100 pb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle className="text-h3 text-slate-900">Account Information</CardTitle>
                        <CardDescription className="text-slate-500 mt-1">
                        Update your account details and contact preferences.
                        </CardDescription>
                    </div>
                    {/* Status Indicator */}
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-green-700">Active Account</span>
                    </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Grid for Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Username */}
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-slate-700">Full Name / Username</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                        <Input id="username" {...register('username')} placeholder="e.g. John Doe" className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500" />
                      </div>
                      {errors.username && <p className="text-red-500 text-xs">{errors.username.message}</p>}
                    </div>

                    {/* Email (Read Only) */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                        <Input id="email" {...register('email')} disabled className="pl-10 bg-slate-50 text-slate-500 border-slate-200 cursor-not-allowed" />
                      </div>
                       <p className="text-[11px] text-slate-400">
                            Email cannot be changed directly for security reasons.
                        </p>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="phone" className="text-slate-700">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
                        <Controller name="phone_number" control={control} render={({
                        field
                      }) => <Input {...field} value={field.value || ''} id="phone" type="tel" placeholder="+212 600 000 000" className="pl-10 border-slate-200 focus:border-blue-500 focus:ring-blue-500 max-w-md" />} />
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Used for order updates and delivery coordination in Morocco.
                      </p>
                    </div>
                  </div>

                  <Separator className="bg-slate-100" />

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm text-slate-500 italic">
                        {isDirty ? 'You have unsaved changes' : 'All changes saved'}
                    </p>
                    <Button type="submit" disabled={isSaving || !isDirty} className="min-w-[140px] bg-slate-900 hover:bg-slate-800 text-white transition-all duration-200 shadow-md hover:shadow-lg">
                      {isSaving ? <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Saving...
                        </> : <>
                          <Save className="mr-2 h-4 w-4" />
                          Save Changes
                        </>}
                    </Button>
                  </div>

                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
}
