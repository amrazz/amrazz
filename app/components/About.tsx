"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const pContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('span > span');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          { y: '100%', opacity: 0 },
          {
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 85%',
            },
            y: '0%',
            opacity: 1,
            duration: 1.2,
            stagger: 0.015,
            ease: 'power4.out',
          }
        );
      }

      if (pContainerRef.current) {
        gsap.from(pContainerRef.current.children, {
          scrollTrigger: {
            trigger: pContainerRef.current,
            start: 'top 85%',
          },
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderWords = (text: string, isOrange: boolean = false) => {
    return text.split(/\s+/).filter(Boolean).map((word, i) => (
      <span key={i} className="inline-block overflow-hidden mr-[0.2em] py-1">
        <span className={`inline-block ${isOrange ? 'text-brand-orange' : 'text-brand-text'}`}>
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="w-full min-h-screen bg-brand-bg pt-24 pb-32 px-6 md:px-12 flex flex-col border-b border-[#222]"
    >
      <div className="text-brand-orange text-sm font-bold tracking-widest mb-16 md:mb-32">
        {"// Intro"}
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-end">
        <h2 
          ref={textRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-brand-text mb-12 md:mb-24"
        >
          {renderWords("I'm a versatile")}
          {renderWords("developer who partners with founders to turn ideas into real products.", true)}
          {renderWords("I focus on robust architecture, clean code, and fast execution.")}
        </h2>

        <div ref={pContainerRef} className="w-full md:w-5/12 flex flex-col items-start gap-8">
          <p className="text-sm md:text-base text-gray-400 leading-relaxed font-sans">
            Bringing your vision to life quickly and efficiently, whether it&apos;s custom SaaS platforms, e-commerce applications, or modern software solutions, I&apos;ve got it covered, delivering smooth and scalable code from start to finish.
          </p>
          <a 
            href="#projects" 
            className="px-6 py-3 rounded-full bg-white text-black border border-gray-600 text-sm font-medium hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-colors duration-300"
          >
            See my Work
          </a>
        </div>
      </div>
    </section>
  );
}
