"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          onComplete();
        }
      });

      // Split the panels diagonally
      tl.to(topPanelRef.current, {
        yPercent: -100,
        xPercent: 20,
        duration: 1.6,
        ease: "power4.inOut",
        delay: 0.5
      })
      .to(bottomPanelRef.current, {
        yPercent: 100,
        xPercent: -20,
        duration: 1.6,
        ease: "power4.inOut",
      }, "<");

      // Hide container after animation
      tl.set(containerRef.current, { display: 'none' });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-9999 pointer-events-none flex flex-col overflow-hidden">
      {/* Top Panel - Top-Right heavy cut */}
      <div 
        ref={topPanelRef} 
        className="absolute inset-[-20%] bg-[#e0dcd2] pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 25%)' }}
      />

      {/* Bottom Panel - Bottom-Left heavy cut */}
      <div 
        ref={bottomPanelRef} 
        className="absolute inset-[-20%] bg-[#e0dcd2] pointer-events-auto shadow-[0_-20px_50px_rgba(0,0,0,0.3)]"
        style={{ clipPath: 'polygon(0 25%, 100% 75%, 100% 100%, 0 100%)' }}
      />
    </div>
  );
}
