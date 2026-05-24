import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Working with Amraz transformed our online presence. He didn't just created a website; he architected a platform that helped us double our conversion rates. The transparency and dedication at every stage was incredible.",
    author: "Sarah Jenkins",
    role: "Founder, TechLaunch"
  },
  {
    quote: "Fast, reliable, and incredibly sharp. His ability to translate complex business needs into clean, functional software is unmatched. Truly a game changer for our SaaS product.",
    author: "David Chen",
    role: "CTO, FinFlow"
  },
  {
    quote: "An absolute master of his craft. The responsive layouts and intricate animations he delivered for our marketing site completely elevated our brand appeal.",
    author: "Elena Rodriguez",
    role: "Marketing Director, CreativePulse"
  },
  {
    quote: "We brought Amraz in for a complete overhaul of our legacy platform, and he delivered beyond our wildest expectations. Exceptional problem-solving skills.",
    author: "Marcus Thorne",
    role: "VP of Engineering, InnovateX"
  },
  {
    quote: "Detail-oriented, proactive, and technically brilliant. He took our rough concepts and built a robust, scalable application that our users genuinely love to use.",
    author: "James Wilson",
    role: "Product Manager, Apex Solutions"
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

      // Bento Grid Cards Animation
      const cards = gsap.utils.toArray('.testimonial-card');
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: (i % 3) * 0.1
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Defined grid spanning classes for each testimonial index to create a bento box effect
  const getBentoClasses = (index: number) => {
    switch(index) {
      case 0: return "md:col-span-2 md:row-span-1 lg:p-10";
      case 1: return "md:col-span-1 md:row-span-1 lg:p-8";
      case 2: return "md:col-span-1 md:row-span-1 lg:p-8";
      case 3: return "md:col-span-1 md:row-span-1 lg:p-8";
      case 4: return "md:col-span-1 md:row-span-1 lg:p-8";
      default: return "md:col-span-1 md:row-span-1 lg:p-8";
    }
  };

  return (
    <section 
      id="testimonials"
      ref={containerRef}
      className="w-full bg-brand-bg py-24 md:py-32 flex flex-col items-center border-b border-[#222] overflow-hidden"
    >
      <div ref={textRef} className="flex flex-col items-center w-full">
        <div className="text-brand-orange text-sm font-bold tracking-widest mb-6 uppercase">
          // Client Feedback
        </div>

        <div className="text-center mb-16 md:mb-20 px-6 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-semibold mb-3 text-white tracking-tight leading-tight">
            Impactful Successes
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto mt-4">
            Social proof from the leaders and teams we've partnered with to create digital excellence.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-fr">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`testimonial-card flex flex-col justify-between bg-[#111] border border-[#222] rounded-3xl p-6 hover:bg-[#151515] hover:border-[#333] transition-colors duration-500 ${getBentoClasses(i)}`}
            >
              <div className="mb-8">
                <svg className="w-8 h-8 text-brand-orange/40 mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
                <p className={`text-gray-300 font-medium ${i === 0 ? 'text-xl md:text-2xl lg:text-3xl leading-tight font-display' : 'text-base md:text-lg leading-relaxed'}`}>
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-brand-orange to-orange-800 flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-lg">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium uppercase text-sm tracking-wide">{t.author}</div>
                  <div className="text-brand-orange text-xs mt-1 font-medium">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
