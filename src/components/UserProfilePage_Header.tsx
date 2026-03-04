'use client';

import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { User, Settings, ShieldCheck, CalendarDays, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { CardWithNoPadding } from '@/components/ui/card';
import EditableImg from '@/@base/EditableImg';
import { entities } from '@/tools/entities-proxy';
import { getuser_session } from '@/tools/SessionContext';
import type { user } from '@/server/entities.type';
import { toast } from 'sonner';
export default function UserProfilePage_Header() {
  const [userData, setUserData] = useState<user | null>(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  // Data Fetching
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const session = getuser_session();
        if (!session || !session.userId) {
          // Ideally redirect here, but for this component we show guest state or empty
          setLoading(false);
          return;
        }
        const id = parseInt(session.userId);
        if (isNaN(id)) {
          throw new Error('Invalid User ID');
        }
        const response = await entities.user.Get({
          id
        });
        if (response) {
          setUserData(response);
        } else {
          toast.error('User profile not found.');
        }
      } catch (err) {
        console.error('Failed to fetch user profile:', err);
        toast.error('Failed to load profile data.');
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  // Animation
  useEffect(() => {
    if (!loading && containerRef.current) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: {
            ease: 'power2.out'
          }
        });
        tl.fromTo(textRef.current, {
          opacity: 0,
          y: 20
        }, {
          opacity: 1,
          y: 0,
          duration: 0.6
        }).fromTo(infoRef.current, {
          opacity: 0,
          y: 15
        }, {
          opacity: 1,
          y: 0,
          duration: 0.5
        }, "-=0.4");
      }, containerRef);
      return () => ctx.revert();
    }
  }, [loading]);

  // Date formatter
  const formatDate = (date: Date | string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Render Loading State
  if (loading) {
    return <section className="w-full bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="container mx-auto px-8 py-10">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <Skeleton className="h-8 w-48 bg-slate-200" />
              <Skeleton className="h-5 w-96 bg-slate-200" />
            </div>
            <div className="flex items-center gap-6 mt-4">
              <Skeleton className="h-24 w-24 rounded-full bg-slate-200" />
              <div className="space-y-3">
                <Skeleton className="h-6 w-40 bg-slate-200" />
                <Skeleton className="h-4 w-32 bg-slate-200" />
              </div>
            </div>
          </div>
        </div>
      </section>;
  }

  // Render Guest/Empty State (Fallback)
  if (!userData) {
    return <section className="w-full bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="container mx-auto px-8 py-12 flex flex-col items-center justify-center text-center">
          <div className="h-16 w-16 bg-slate-200 rounded-full flex items-center justify-center mb-4 text-slate-400">
            <User size={32} />
          </div>
          <h1 className="text-h1 text-[#0f172a] mb-2">Sign In Required</h1>
          <p className="text-base text-[#64748b] mb-6 max-w-md">
            Please log in to view your account settings and manage your profile.
          </p>
          <Button className="bg-[#0f172a] hover:bg-[#1e293b] text-white px-8" onClick={() => window.location.href = '/login'}>
            Go to Login
          </Button>
        </div>
      </section>;
  }

  // Main Render
  return <section ref={containerRef} className="w-full bg-[#f8fafc] border-b border-[#e2e8f0] relative overflow-hidden">
      {/* Decorative Background Elements - kept subtle and within theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50/50 to-transparent rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="container mx-auto px-8 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          
          {/* Left Column: Headers & Identity */}
          <div className="flex-1 min-w-0">
            {/* Header Text Group */}
            <div ref={textRef} className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-[#3b82f6]">
                  <Settings size={18} />
                </span>
                <span className="text-caption font-semibold tracking-wide text-[#3b82f6] uppercase">
                  Account Overview
                </span>
              </div>
              <h1 className="text-h1 font-bold text-[#0f172a] tracking-tight mb-2">
                Account Settings
              </h1>
              <p className="text-base text-[#64748b] max-w-2xl">
                Manage your personal information, security preferences, and view your order history.
              </p>
            </div>

            {/* User Identity Card */}
            <CardWithNoPadding ref={infoRef} className="bg-white border-[#e2e8f0] shadow-sm rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Avatar Area */}
              <div className="relative shrink-0">
                <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-white shadow-md ring-1 ring-slate-100 relative bg-slate-50">
                   {userData.avatar_url ? <EditableImg propKey={`user-avatar-${userData.id}`} keywords={userData.avatar_url} description="User profile avatar image" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                       <User size={32} />
                     </div>}
                </div>
                <div className={`absolute bottom-0 right-0 h-5 w-5 rounded-full border-2 border-white ${userData.status === 'active' ? 'bg-[#10b981]' : 'bg-[#ef4444]'}`} />
              </div>

              {/* User Info Text */}
              <div className="flex-1 min-w-0 space-y-1.5">
                <div className="flex items-center flex-wrap gap-3">
                  <h3 className="text-h3 font-semibold text-[#0f172a] truncate">
                    {userData.username}
                  </h3>
                  <Badge variant="outline" className="bg-slate-50 text-[#64748b] border-slate-200 capitalize font-medium">
                    {userData.role.replace('_', ' ')}
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-y-1 gap-x-6 text-[#64748b] text-sm">
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#94a3b8]" />
                    <span className="truncate max-w-[200px]">{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays size={14} className="text-[#94a3b8]" />
                    <span>Member since {formatDate(userData.created_at)}</span>
                  </div>
                </div>
              </div>
            </CardWithNoPadding>
          </div>

          {/* Right Column: Key Stats / Quick Actions (Visual Only) */}
          <div className="flex flex-row lg:flex-col items-start lg:items-end gap-4 lg:pb-1">
             <div className="hidden lg:flex flex-col items-end gap-1 mb-2">
                 <span className="text-caption text-[#64748b]">Account Status</span>
                 <div className="flex items-center gap-2 text-[#0f172a] font-medium">
                    <ShieldCheck size={18} className="text-[#10b981]" />
                    <span>Verified & Secure</span>
                 </div>
             </div>
             
             {/* Note: This button is purely visual as per prompt instructions regarding no jump logic */}
             <Button variant="default" className="bg-[#0f172a] hover:bg-[#1e293b] text-white shadow-sm transition-all duration-200">
               Edit Profile
             </Button>
          </div>

        </div>
      </div>
    </section>;
}
