'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
export default function Footer() {
  const quickLinks = [{
    label: 'Home',
    url: '/'
  }, {
    label: 'All Products',
    url: '/productlistpage'
  }, {
    label: 'Your Cart',
    url: '/cartpage'
  }, {
    label: 'Track Order',
    url: '/orderhistorypage'
  }, {
    label: 'My Account',
    url: '/userprofilepage'
  }];
  const customerService = [{
    label: 'Contact Us',
    url: '/contact'
  }, {
    label: 'Shipping Information',
    url: '/shipping'
  }, {
    label: 'Returns & Exchanges',
    url: '/returns'
  }, {
    label: 'Size Guide',
    url: '/size-guide'
  }];
  const policies = [{
    label: 'Privacy Policy',
    url: '/privacy'
  }, {
    label: 'Terms of Service',
    url: '/terms'
  }, {
    label: 'Refund Policy',
    url: '/refund'
  }];
  const socialLinks = [{
    icon: Facebook,
    url: 'https://facebook.com',
    label: 'Facebook'
  }, {
    icon: Instagram,
    url: 'https://instagram.com',
    label: 'Instagram'
  }, {
    icon: Twitter,
    url: 'https://twitter.com',
    label: 'Twitter'
  }];
  return <footer className="w-full bg-[#0f172a] text-white border-t border-[#1e293b]">
      <div className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-[18px] font-semibold text-white">Moroccan Coding Tees</h3>
            <p className="text-[14px] text-[#cbd5e1] leading-relaxed">
              Premium coding-themed hoodies and t-shirts for developers in Morocco. Quality meets comfort.
            </p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map((social, index) => <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-lg bg-[#1e293b] flex items-center justify-center hover:bg-[#3b82f6] transition-all duration-200" aria-label={social.label}>
                  <social.icon className="w-[18px] h-[18px]" />
                </a>)}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link, index) => <li key={link.url}>
                  <Link href={link.url} className="text-[14px] text-[#cbd5e1] hover:text-[#3b82f6] transition-colors duration-200 inline-block">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-semibold text-white">Customer Service</h4>
            <ul className="flex flex-col gap-2">
              {customerService.map((link, index) => <li key={link.url}>
                  <Link href={link.url} className="text-[14px] text-[#cbd5e1] hover:text-[#3b82f6] transition-colors duration-200 inline-block">
                    {link.label}
                  </Link>
                </li>)}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-[16px] font-semibold text-white">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] text-[#3b82f6] flex-shrink-0 mt-[2px]" />
                <span className="text-[14px] text-[#cbd5e1]">Casablanca, Morocco</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-[18px] h-[18px] text-[#3b82f6] flex-shrink-0" />
                <span className="text-[14px] text-[#cbd5e1]">+212 600 123 456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-[18px] h-[18px] text-[#3b82f6] flex-shrink-0" />
                <span className="text-[14px] text-[#cbd5e1]">support@moroccancodingtees.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e293b] mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] text-[#94a3b8] text-center md:text-left">
            © 2025 Moroccan Coding Tees. All rights reserved.
          </p>
          <div className="flex gap-6">
            {policies.map((policy, index) => <Link key={policy.url} href={policy.url} className="text-[14px] text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-200">
                {policy.label}
              </Link>)}
          </div>
        </div>
      </div>
    </footer>;
}
