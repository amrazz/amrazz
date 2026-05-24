import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from(pRef.current, {
        scrollTrigger: {
          trigger: pRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="w-full min-h-screen bg-brand-bg pt-24 pb-32 px-6 md:px-12 flex flex-col border-b border-[#222]"
    >
      <div className="text-brand-orange text-sm font-bold tracking-widest mb-16 md:mb-32">
        // Intro
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-end">
        <h2 
          ref={textRef}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-brand-text mb-12 md:mb-24"
        >
          I'm a versatile <span className="text-brand-orange">developer who partners with founders to turn ideas into real products.</span> I focus on robust architecture, clean code, and fast execution.
        </h2>

        <div className="w-full md:w-5/12 flex flex-col items-start gap-8">
          <p 
            ref={pRef}
            className="text-sm md:text-base text-gray-400 leading-relaxed font-sans"
          >
            Bringing your vision to life quickly and efficiently, whether it's custom SaaS platforms, e-commerce applications, or modern software solutions, I've got it covered, delivering smooth and scalable code from start to finish.
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
