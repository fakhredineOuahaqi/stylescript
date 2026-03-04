'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { Menu, ShoppingCart, User } from 'lucide-react';
import { getuserSession, removeuserSession, userSession } from '@/tools/SessionContext';
const navigationLinks = [{
  label: 'Home',
  target_url: '/',
  external: false
}, {
  label: 'Shop',
  target_url: '/productlistpage',
  external: false
}, {
  label: 'Cart',
  target_url: '/cartpage',
  external: false
}, {
  label: 'My Orders',
  target_url: '/orderhistorypage',
  external: false
}];
const authLinks = [{
  label: 'Profile',
  target_url: '/userprofilepage',
  external: false
}, {
  label: 'Login',
  target_url: '/frontendloginpage',
  external: false
}, {
  label: 'Register',
  target_url: '/frontendregisterpage',
  external: false
}];
export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState<userSession | null>(null);
  const [cartCount, setCartCount] = useState(0);
  useEffect(() => {
    const userSession = getuserSession();
    setSession(userSession);
    if (userSession && userSession.cart) {
      const totalItems = userSession.cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(totalItems);
    }
  }, [pathname]);
  const isActive = (url: string) => {
    if (url === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(url);
  };
  const handleLogout = () => {
    removeuserSession();
    setSession(null);
    router.push('/frontendloginpage');
  };
  const handleNavigation = (url: string) => {
    setMobileOpen(false);
    router.push(url);
  };
  return <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a] shadow-[0px_1px_3px_rgba(15,23,42,0.08)] flex-shrink-0">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-[60px]">
            <div className="flex items-center">
              <Link href="/" className="text-[20px] font-semibold text-[#ffffff] hover:text-[#f8fafc] transition-colors duration-200">
                Moroccan Coding Tees
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {navigationLinks.map((link, index) => <Link key={link.target_url} href={link.target_url} className={`text-[16px] font-medium transition-all duration-200 ${isActive(link.target_url) ? 'text-[#ffffff] border-b-2 border-[#3b82f6]' : 'text-[#94a3b8] hover:text-[#ffffff]'}`}>
                  {link.label}
                </Link>)}
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => router.push('/cartpage')} className="relative text-[#ffffff] hover:text-[#f8fafc] hover:bg-[#1e293b] transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[#3b82f6] text-[#ffffff] text-[12px] font-semibold rounded-full w-[18px] h-[18px] flex items-center justify-center">
                    {cartCount}
                  </span>}
              </Button>

              {session && session.token ? <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-[#ffffff] hover:text-[#f8fafc] hover:bg-[#1e293b] transition-colors duration-200">
                      <User className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[200px] bg-[#ffffff] border border-[#e2e8f0]">
                    <DropdownMenuItem onClick={() => router.push('/userprofilepage')} className="text-[14px] text-[#0f172a] hover:bg-[#f8fafc] cursor-pointer transition-colors duration-200">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => router.push('/orderhistorypage')} className="text-[14px] text-[#0f172a] hover:bg-[#f8fafc] cursor-pointer transition-colors duration-200">
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-[#e2e8f0]" />
                    <DropdownMenuItem onClick={handleLogout} className="text-[14px] text-[#ef4444] hover:bg-[#f8fafc] cursor-pointer transition-colors duration-200">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> : <Button onClick={() => router.push('/frontendloginpage')} className="bg-[#3b82f6] text-[#ffffff] text-[14px] font-semibold px-6 py-3 rounded-[8px] hover:bg-[#2563eb] hover:shadow-[0px_4px_12px_rgba(59,130,246,0.24)] transition-all duration-200">
                  Login
                </Button>}
            </div>

            <div className="md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-[#ffffff] hover:bg-[#1e293b]">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] bg-[#ffffff] border-l border-[#e2e8f0] p-6">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                      {navigationLinks.map((link, index) => <button key={link.target_url} onClick={() => handleNavigation(link.target_url)} className={`text-left text-[16px] font-medium py-2 transition-colors duration-200 ${isActive(link.target_url) ? 'text-[#0f172a] border-l-4 border-[#3b82f6] pl-4' : 'text-[#64748b] hover:text-[#0f172a] pl-4'}`}>
                          {link.label}
                        </button>)}
                    </div>

                    <div className="h-[1px] bg-[#e2e8f0]" />

                    <div className="flex flex-col gap-4">
                      {session && session.token ? <>
                          <button onClick={() => handleNavigation('/userprofilepage')} className="text-left text-[16px] font-medium py-2 text-[#64748b] hover:text-[#0f172a] transition-colors duration-200 pl-4">
                            Profile
                          </button>
                          <button onClick={handleLogout} className="text-left text-[16px] font-medium py-2 text-[#ef4444] hover:text-[#dc2626] transition-colors duration-200 pl-4">
                            Logout
                          </button>
                        </> : <>
                          <button onClick={() => handleNavigation('/frontendloginpage')} className="text-left text-[16px] font-medium py-2 text-[#64748b] hover:text-[#0f172a] transition-colors duration-200 pl-4">
                            Login
                          </button>
                          <button onClick={() => handleNavigation('/frontendregisterpage')} className="text-left text-[16px] font-medium py-2 text-[#64748b] hover:text-[#0f172a] transition-colors duration-200 pl-4">
                            Register
                          </button>
                        </>}
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-[60px] flex-shrink-0" />
    </>;
}
