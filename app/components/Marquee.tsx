"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content1 = "FRONTEND DEVELOPMENT ✳ CREATIVE ENGINEERING ✳ UI/UX DESIGN ✳ FULL-STACK SOLUTIONS ✳ ";
const content2 = "INNOVATIVE WEB EXPERIENCES • PIXEL PERFECT DESIGN • SCALABLE ARCHITECTURE • PERFORMANCE OPTIMIZED • ";

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const slider1Ref = useRef<HTMLDivElement>(null);
  const slider2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create animations
      const tl1 = gsap.to(slider1Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 35, // Slower scrolling by default
        repeat: -1,
      });

      const tl2 = gsap.to(slider2Ref.current, {
        xPercent: -50,
        ease: "none",
        duration: 45, // Background is slightly slower
        repeat: -1,
      });

      // Tie speed to scroll
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: 0,
        end: document.body.scrollHeight,
        onUpdate: (self) => {
          // Adjust velocity sensitivity (make it less aggressive)
          const velocity = self.getVelocity();
          const targetTimeScale = 1 + Math.abs(velocity / 1500); 
          
          const direction = velocity < 0 ? -1 : 1;
          
          // Clear any existing delayed calls for resetting to avoid conflicts
          gsap.killTweensOf([tl1, tl2], "timeScale");
          
          gsap.to([tl1, tl2], {
            timeScale: targetTimeScale * direction,
            duration: 0.2, // Quick acceleration
            overwrite: true,
          });

          // Ease back to normal speed after a short delay
          gsap.to([tl1, tl2], {
            timeScale: direction > 0 ? 1 : -1,
            duration: 1.0,
            delay: 0.1,
            ease: "power3.out",
            overwrite: false,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-125 md:h-175 flex justify-center items-center overflow-hidden bg-brand-bg border-y border-brand-surface"
    >
      {/* Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-150 max-h-150 bg-brand-orange blur-[100px] opacity-20 pointer-events-none rounded-full z-0"></div>

      {/* Background/Blurred Ribbon */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] bg-black border-y border-[#222] py-4 md:py-6 -rotate-12 flex shadow-2xl z-10"
      >
        <div ref={slider2Ref} className="flex whitespace-nowrap w-max font-display font-medium text-4xl md:text-6xl text-white tracking-widest uppercase opacity-40 blur-[3px]">
          <div className="px-4">{Array(4).fill(content2).join('')}</div>
          <div className="px-4">{Array(4).fill(content2).join('')}</div>
        </div>
      </div>

      {/* Foreground/Orange Ribbon */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] bg-brand-orange py-6 md:py-8 rotate-[8deg] flex shadow-2xl z-20 box-decoration-break-clone"
      >
        <div ref={slider1Ref} className="flex whitespace-nowrap w-max font-display font-semibold text-5xl md:text-7xl text-white tracking-tighter uppercase drop-shadow-md">
          <div className="px-4">{Array(4).fill(content1).join('')}</div>
          <div className="px-4">{Array(4).fill(content1).join('')}</div>
        </div>
      </div>
      
      {/* Subtle overlay gradient to blend edges */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-brand-bg to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-brand-bg to-transparent z-30 pointer-events-none"></div>
    </section>
  );
}
