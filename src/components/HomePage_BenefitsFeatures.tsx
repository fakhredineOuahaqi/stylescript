'use client';

import React, { useRef } from 'react';
import { Truck, BadgeCheck, Banknote, RefreshCw } from 'lucide-react';
import { Card } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Feature Data Configuration
interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
}
const FEATURE_DATA: FeatureItem[] = [{
  id: 'feat-1',
  icon: Banknote,
  // High trust signal for Morocco
  title: 'Cash on Delivery',
  description: 'Shop with total confidence. Pay securely only when your order arrives at your doorstep.'
}, {
  id: 'feat-2',
  icon: BadgeCheck,
  // Emphasizing product quality
  title: 'Premium Cotton Quality',
  description: 'Crafted from 100% authentic, breathable cotton designed for lasting comfort and style.'
}, {
  id: 'feat-3',
  icon: Truck,
  // Logistics assurance
  title: 'Fast Local Shipping',
  description: 'Express delivery to Casablanca, Rabat, and nationwide within 24-48 hours.'
}, {
  id: 'feat-4',
  icon: RefreshCw,
  // Reducing purchase anxiety
  title: 'Easy Returns',
  description: 'Not the perfect fit? Enjoy hassle-free returns and exchanges within 14 days.'
}];
const HomePage_BenefitsFeatures = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Title Animation
    tl.fromTo(titleRef.current, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    });

    // Grid Items Stagger Animation
    // Check if grid exists to avoid null reference
    if (gridRef.current && gridRef.current.children) {
      tl.fromTo(Array.from(gridRef.current.children), {
        y: 40,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.2)'
      }, "-=0.3");
    }
  }, {
    scope: sectionRef
  });
  return <section ref={sectionRef} className="w-full bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6 py-16 md:py-24">
                
                {/* Section Header */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <h2 ref={titleRef} className="text-h1 text-slate-900 mb-4 opacity-0">
                        Why Shop With Us?
                    </h2>
                    <p className="text-base text-slate-500">
                        Experience a seamless shopping journey tailored for you, from premium materials to doorstep delivery.
                    </p>
                </div>

                {/* Features Grid */}
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {FEATURE_DATA.map((item, index) => <Card key={item.id} className="bg-white border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group py-8 px-6 flex flex-col items-center text-center opacity-0">
                            {/* Icon Container */}
                            <div className="mb-6 p-4 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                <item.icon strokeWidth={1.5} className="w-8 h-8" />
                            </div>

                            {/* Text Content */}
                            <h3 className="text-h3 text-slate-900 mb-3 font-semibold">
                                {item.title}
                            </h3>
                            <p className="text-base text-slate-500 leading-relaxed">
                                {item.description}
                            </p>
                        </Card>)}
                </div>
            </div>
        </section>;
};
export default HomePage_BenefitsFeatures;
