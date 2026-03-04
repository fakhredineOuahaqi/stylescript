'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Terminal, Code2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import EditableImg from '@/@base/EditableImg';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
const HomePage_HeroBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const imageContentRef = useRef<HTMLDivElement>(null);
  const decorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state visibility handling
      gsap.set([textContentRef.current, imageContentRef.current], {
        autoAlpha: 1 // Ensure visibility
      });

      // Text Content Animation
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out'
        }
      });
      tl.fromTo('.hero-stagger-text', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2
      }).fromTo('.hero-cta-group', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, '-=0.4');

      // Image Parallax Effect on Scroll
      if (imageContentRef.current) {
        gsap.to(imageContentRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Decorative Elements Float
      if (decorRef.current) {
        gsap.to('.hero-decor-icon', {
          y: -15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            each: 0.5,
            from: 'random'
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, []);
  /* Extracted array: _items */
  const _items = [1, 2, 3];
  return <section ref={containerRef} className="relative w-full overflow-hidden bg-slate-50 border-b border-slate-200">
      {/* Background Decor - Subtle Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
         <div className="h-full w-full" style={{
        backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      </div>

      <div className="container mx-auto px-6 md:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[600px]">
          
          {/* Left Content: Text & CTA */}
          <div ref={textContentRef} className="lg:col-span-5 flex flex-col justify-center space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <div className="hero-stagger-text inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">New Collection 2026</span>
              </div>
              
              <h1 className="hero-stagger-text text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight">
                Wear Your <span className="text-blue-600">Code</span>. <br />
                Commit to <span className="text-slate-900">Style</span>.
              </h1>
              
              <p className="hero-stagger-text text-lg text-slate-600 max-w-lg leading-relaxed">
                Premium coding-themed hoodies and t-shirts designed for developers in Morocco. Debug your wardrobe with comfort and geek chic.
              </p>
            </div>

            <div className="hero-cta-group flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-12 text-base font-semibold shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5">
                <Link href="/productlistpage">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-slate-200 text-slate-900 hover:bg-slate-50 px-8 h-12 text-base font-semibold">
                <Link href="/productlistpage">
                  Explore Collection
                </Link>
              </Button>
            </div>

            <div className="hero-stagger-text pt-6 flex items-center gap-6 text-sm text-slate-500 font-medium border-t border-slate-200 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Fast Delivery in Morocco</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Premium Cotton Quality</span>
              </div>
            </div>
          </div>

          {/* Right Content: Visual & Imagery */}
          <div className="lg:col-span-7 relative h-full min-h-[400px] lg:min-h-[600px] order-1 lg:order-2 flex items-center justify-center lg:justify-end">
            
            {/* Main Image Container with Decorative Blob */}
            <div ref={imageContentRef} className="relative w-full max-w-[600px] aspect-[4/5] lg:aspect-square">
              {/* Decorative Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-100/50 rounded-full blur-3xl -z-10" />
              
              {/* Floating Icons Container */}
              <div ref={decorRef} className="absolute inset-0 z-20 pointer-events-none">
                <div className="hero-decor-icon absolute top-[10%] left-[-5%] bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hidden md:block">
                  <Terminal className="w-6 h-6 text-slate-700" />
                </div>
                <div className="hero-decor-icon absolute bottom-[20%] right-[-5%] bg-white p-3 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 hidden md:block">
                  <Code2 className="w-6 h-6 text-blue-600" />
                </div>
                <div className="hero-decor-icon absolute top-[40%] right-[-10%] bg-slate-900 p-2.5 rounded-xl shadow-xl shadow-slate-900/20 hidden lg:block">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Main Image Card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-[6px] border-white bg-slate-100">
                <EditableImg propKey="hero-main-visual" defaultImg="https://res.cloudinary.com/dr3znrr01/image/upload/v1772594881/Image_26_1_zjk2l7.webp" keywords="developer wearing hoodie coding workspace happy morocco modern lifestyle" description="A high-quality lifestyle shot of a young developer wearing a stylish hoodie, sitting in a modern, well-lit workspace with a laptop, smiling. The lighting is soft and natural, emphasizing the texture of the clothing." needLargeImage={true} className="w-full h-full object-cover object-center scale-105" />
                
                {/* Image Overlay Gradient for better contrast if needed (optional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Small Overlay Card - Social Proof/Highlight */}
              <div className="hero-stagger-text absolute -bottom-6 -left-4 md:bottom-8 md:-left-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-100 max-w-[240px] z-30 hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {_items.map((i, index) => <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-slate-200">
                         <EditableImg propKey={`avatar-user-${i}`} keywords={`portrait face developer ${i}`} className="w-full h-full object-cover" />
                      </div>)}
                  </div>
                  <div className="text-xs">
                    <p className="font-bold text-slate-900">1k+ Devs</p>
                    <p className="text-slate-500">Joined the squad</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HomePage_HeroBanner;
