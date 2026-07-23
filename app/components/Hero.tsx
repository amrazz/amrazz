"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let xTo: gsap.QuickToFunc;
    let yTo: gsap.QuickToFunc;

    const imgDelay = 0.6;
    const textDelay = 1.2;

    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: textDelay,
      });

      // We set the base scale slightly larger to avoid revealing edges during parallax
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15, opacity: 0 },
        {
          scale: 1.05,
          opacity: 0.9,
          duration: 2,
          ease: "power3.out",
          delay: imgDelay,
        },
      );

      xTo = gsap.quickTo(imgRef.current, "xPercent", {
        duration: 0.8,
        ease: "power3",
      });
      yTo = gsap.quickTo(imgRef.current, "yPercent", {
        duration: 0.8,
        ease: "power3",
      });
    }, containerRef);

    const handleMouseMove = (e: MouseEvent) => {
      if (!xTo || !yTo) return;

      const xRatio = e.clientX / window.innerWidth - 0.5;
      const yRatio = e.clientY / window.innerHeight - 0.5;

      // Move image in opposite direction for parallax depth
      xTo(-xRatio * 3);
      yTo(-yRatio * 3);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-brand-bg text-white overflow-hidden flex flex-col justify-between pt-6 pb-6 px-6 md:px-12"
    >
      {/* Top Navbar Simulation */}
      <div className="flex justify-between items-center text-xs md:text-sm font-medium tracking-wide z-40 mix-blend-difference pointer-events-none w-full">
        <div className="pointer-events-auto">
          <img
            src="/logo.png"
            alt="Amraz Rafeeque"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        <div className="flex items-center space-x-6 pointer-events-auto">
          <a
            href="#book-call"
            className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-brand-orange hover:text-white transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Name in the Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-start pointer-events-none z-10 select-none overflow-hidden pt-[15vh] md:pt-16">
        <h1
          ref={textRef}
          className="font-antonio font-bold text-[28vw] md:text-[23vw] leading-none tracking-tighter text-center uppercase text-transparent bg-clip-text bg-linear-to-b from-brand-orange via-brand-orange/60 to-transparent scale-y-[1.6] md:scale-y-[1.4] transform origin-center select-none"
        >
          Portfolio
        </h1>
      </div>

      {/* Main Center Content (Portrait Overlaying the Name) */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-20">
        {/* Subtle orange background glow behind the portrait but in front of PORTFOLIO to blend them nicely */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-[50%] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-linear-to-b from-[#111]/30 via-transparent to-[#111] opacity-90 z-30"></div>
        <img
          ref={imgRef}
          src="/amraz.png"
          alt="Amraz Rafeeque Portrait"
          className="h-full w-auto max-w-full object-contain object-bottom opacity-95 select-none z-20"
        />
      </div>

      {/* Foreground Content Overlays (Name, Details, Stats) */}
      <div className="relative z-30 grid grid-cols-1 md:grid-cols-12 w-full gap-8 px-2 md:px-6 mt-auto mb-4 pointer-events-none">
        {/* Left Column: Stacked Name & Tags */}
        <div className="md:col-span-5 flex flex-col items-start justify-end pointer-events-auto text-left">
          <span className="font-caveat text-brand-orange text-2xl md:text-3xl italic mb-1 select-none">
            Hello, I&apos;m
          </span>
          <h2 className="font-antonio font-bold text-[13vw] md:text-[6.5vw] leading-none tracking-tight text-white uppercase mb-4">
            <span className="block">Amraz</span>
            <span className="block mt-1">Rafeeque</span>
          </h2>
          
          <div className="font-sans text-[3.2vw] md:text-xs font-black tracking-widest text-brand-orange uppercase mb-3">
            Full-Stack Developer & SaaS Architect
          </div>
          
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-sm leading-relaxed mb-6 hidden md:block">
            I design and build stylish, user-focused web experiences that combine creativity with strategy. Passionate about clean design, smooth interactions, and details that make a difference.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
              Available Worldwide
            </div>

            {/* Micro Socials Footer inside Left Column */}
            <div className="flex flex-row flex-wrap items-center gap-x-3 gap-y-1 text-[10px] md:text-xs text-gray-500 font-semibold uppercase pt-3 border-t border-white/10 w-full">
              <a href="https://www.linkedin.com/in/amrazrafeeque/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">LinkedIn</a>
              <span className="text-white/10 select-none">/</span>
              <a href="https://x.com/AmrazRafee13679" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Twitter</a>
              <span className="text-white/10 select-none">/</span>
              <a href="https://github.com/amrazz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Github</a>
              <span className="text-white/10 select-none">/</span>
              <a href="https://www.instagram.com/amrazrafeek?igsh=NW91MDRjb281d3hz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">Instagram</a>
            </div>
          </div>
        </div>

        {/* Center Column: Empty spacer to clear portrait */}
        <div className="hidden md:block md:col-span-3"></div>

        {/* Right Column: Badge & Stats */}
        <div className="hidden md:flex md:col-span-4 flex-col items-stretch md:items-end justify-end pointer-events-auto text-left md:text-right">
          {/* Badge & Tagline */}
          

          {/* Divider Line & Stats */}
          <div className="flex flex-col w-full max-w-70 md:max-w-60  md:ml-auto">
            {/* Stat 1 */}
            <div className="flex items-center justify-between border-b border-white/10 py-3">
              <span className="font-antonio text-3xl md:text-4xl font-bold text-brand-orange leading-none">2+</span>
              <span className="text-[9px] tracking-widest text-gray-400 uppercase text-right leading-tight max-w-30">
                Years Experience
              </span>
            </div>
            {/* Stat 2 */}
            <div className="flex items-center justify-between border-b border-white/10 py-3">
              <span className="font-antonio text-3xl md:text-4xl font-bold text-brand-orange leading-none">10+</span>
              <span className="text-[9px] tracking-widest text-gray-400 uppercase text-right leading-tight max-w-30">
                Projects Completed
              </span>
            </div>
            {/* Stat 3 */}
            <div className="flex items-center justify-between border-b border-white/10 py-3">
              <span className="font-antonio text-3xl md:text-4xl font-bold text-brand-orange leading-none">10+</span>
              <span className="text-[9px] tracking-widest text-gray-400 uppercase text-right leading-tight max-w-30">
                Happy Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
