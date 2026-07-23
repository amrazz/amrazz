"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    
    if (!cursor || !follower) return;

    // Center initially
    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(follower, { xPercent: -50, yPercent: -50, opacity: 0 });

    const xSetCursor = gsap.quickSetter(cursor, "x", "px");
    const ySetCursor = gsap.quickSetter(cursor, "y", "px");

    let hasMoved = false;

    const onMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        gsap.to([cursor, follower], { opacity: 1, duration: 0.3 });
        hasMoved = true;
      }

      xSetCursor(e.clientX);
      ySetCursor(e.clientY);
      
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full pointer-events-none z-10000 hidden lg:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/40 rounded-full pointer-events-none z-9999 hidden lg:block"
      />
    </>
  );
}
