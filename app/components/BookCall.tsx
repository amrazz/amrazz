"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BookCall() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".book-element", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="book-call"
      ref={containerRef}
      className="w-full bg-brand-bg py-24 md:py-32 flex flex-col items-center justify-center px-6 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-200 h-100 bg-brand-orange blur-[150px] opacity-[0.08] pointer-events-none rounded-full z-0"></div>

      <div className="max-w-4xl w-full flex flex-col items-center text-center relative z-10">
        <div className="book-element text-brand-orange text-sm font-bold tracking-widest mb-6 uppercase">
          {"// Let's connect"}
        </div>
        
        <h2 className="book-element text-4xl md:text-6xl lg:text-7xl font-display font-semibold text-white tracking-tight mb-6">
          Ready to turn your <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-linear-to-r from-gray-100 to-gray-500">ideas into reality?</span>
        </h2>
        
        <p className="book-element text-gray-400 text-base md:text-lg max-w-xl mx-auto mb-12">
          Whether you need a massive scale redesign or a complex SaaS architecture, let&apos;s hop on a brief, no-pressure discovery call to discuss your goals.
        </p>

        {/* Booking Options Container */}
        <div className="book-element w-full max-w-2xl bg-[#151515] border border-[#222] rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
          
          <div className="flex-1 w-full relative">
            <h3 className="text-2xl text-white font-medium mb-3">Book a Discovery Call</h3>
            <p className="text-sm text-gray-400 mb-8">
              Choose a time that works best for you. I highly recommend using <strong>Calendly</strong> or <strong>Cal.com</strong> for a seamless scheduling experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://calendly.com/amrazrafeek2020/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white font-medium rounded-full hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300"
              >
                Schedule via Calendly
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </a>
              <a 
                href="mailto:amrazrafeek2020@gmail.com"
                className="inline-flex items-center bg-white text-black justify-center gap-2 px-8 py-4  border border-white/20 font-medium rounded-full hover:-translate-y-1 transition-all duration-300"
              >
                Send Email Instead
              </a>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
