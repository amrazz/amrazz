import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
  "Custom Websites & Landing Pages",
  "SaaS Application Development",
  "E-commerce & Shopify Stores",
  "Internal Dashboards & Portals",
  "API Integration & Development",
  "Performance Optimization"
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current?.children || [], {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="services" 
      ref={containerRef}
      className="w-full bg-brand-bg pt-24 pb-32 px-6 md:px-12 flex flex-col border-b border-[#222] overflow-hidden"
    >
      <div className="text-brand-orange text-sm font-bold tracking-widest mb-6">
        // Services
      </div>

      <div className="flex flex-col items-start w-full">
        {/* Content Side */}
        <div className="w-full flex flex-col mt-4">
          <div ref={contentRef} className="w-full">
            <h3 className="text-4xl md:text-5xl font-display font-semibold mb-6">Software & Engineering</h3>
            <p className="text-gray-400 text-sm md:text-base mb-12 max-w-lg leading-relaxed">
              Engineering that builds trust and drives scale through clean code architectures, 
              giving your users an unforgettable, lightning-fast online experience.
            </p>

            <div className="flex flex-col w-full border-t border-[#333]">
              {servicesList.map((service, index) => (
                <div 
                  key={index} 
                  className="w-full flex justify-between items-center py-6 border-b border-[#333] group hover:border-gray-400 transition-colors duration-300"
                >
                  <span className="text-lg md:text-xl font-medium group-hover:text-white transition-colors duration-300 text-gray-300">
                    {service}
                  </span>
                  <span className="text-sm font-mono text-gray-500 group-hover:text-brand-orange transition-colors duration-300">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
