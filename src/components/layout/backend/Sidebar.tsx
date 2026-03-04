'use client';

import { usePathname, useRouter } from 'next/navigation';
import { getadminSession, removeadminSession } from '@/tools/SessionContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LayoutDashboard, Package, FolderOpen, ShoppingCart, Users, BarChart3, LogOut, LogIn } from 'lucide-react';
const navigationItems = [{
  label: 'Dashboard',
  url: '/admindashboardpage',
  icon: LayoutDashboard
}, {
  label: 'Products',
  url: '/productmanagementpage',
  icon: Package
}, {
  label: 'Categories',
  url: '/categorymanagementpage',
  icon: FolderOpen
}, {
  label: 'Orders',
  url: '/ordermanagementpage',
  icon: ShoppingCart
}, {
  label: 'Users',
  url: '/usermanagementpage',
  icon: Users
}, {
  label: 'Analytics',
  url: '/analyticspage',
  icon: BarChart3
}];
export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const session = getadminSession();
  const isLoggedIn = !!session?.token;
  const isActive = (url: string) => {
    if (pathname === url) return true;
    const basePath = url.split('/')[1];
    if (basePath && pathname.startsWith(`/${basePath}`)) return true;
    return false;
  };
  const handleAuthAction = () => {
    if (isLoggedIn) {
      removeadminSession();
      router.push('/backendloginpage');
    } else {
      router.push('/backendloginpage');
    }
  };
  return <aside className="w-[240px] h-screen bg-[#f8fafc] border-r border-[#e2e8f0] flex flex-col flex-shrink-0">
      <div className="p-6 border-b border-[#e2e8f0]">
        <h1 className="text-[20px] font-semibold text-[#0f172a]">
          Moroccan Coding Tees
        </h1>
        <p className="text-[14px] text-[#64748b] mt-1">Admin Panel</p>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navigationItems.map((item, index) => {
          const Icon = item.icon;
          const active = isActive(item.url);
          return <li key={item.url}>
                <button onClick={() => router.push(item.url)} className={cn('w-full flex items-center gap-3 px-4 py-3 rounded-[8px] text-[14px] font-medium transition-all duration-200', active ? 'bg-[#0f172a] text-[#ffffff]' : 'text-[#0f172a] hover:bg-[#ffffff] hover:shadow-[0px_1px_3px_rgba(15,23,42,0.08)]')}>
                  <Icon className="w-[18px] h-[18px] flex-shrink-0" />
                  <span className="text-left">{item.label}</span>
                </button>
              </li>;
        })}
        </ul>
      </nav>

      <div className="p-4 border-t border-[#e2e8f0]">
        <Button onClick={handleAuthAction} className={cn('w-full flex items-center justify-start gap-3 px-4 py-3 rounded-[8px] text-[14px] font-semibold transition-all duration-200', isLoggedIn ? 'bg-[#ffffff] text-[#0f172a] border-2 border-[#e2e8f0] hover:bg-[#f8fafc] hover:border-[#cbd5e1]' : 'bg-[#0f172a] text-[#ffffff] hover:bg-[#1e293b] hover:shadow-[0px_4px_12px_rgba(15,23,42,0.12)]')}>
          {isLoggedIn ? <>
              <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-left">Logout</span>
            </> : <>
              <LogIn className="w-[18px] h-[18px] flex-shrink-0" />
              <span className="text-left">Login</span>
            </>}
        </Button>
      </div>
    </aside>;
}
