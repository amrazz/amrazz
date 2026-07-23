"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ProfileFooter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee animation
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative w-full min-h-screen bg-brand-bg overflow-hidden pt-24 pb-12 border-t border-gray-800/50 flex flex-col"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 flex justify-center items-end">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-linear-to-t from-brand-orange to-transparent opacity-20 blur-[100px] pointer-events-none rounded-t-[100%]"></div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 px-6 md:px-12 pb-16 mb-10 flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end pb-12">
          {/* Left Column - Socials & Contact */}
          <div className="flex flex-col h-full justify-end space-y-4">
            <div className="space-y-8 ">
              <div>
                <h3 className="text-white font-bold mb-2 text-sm">Socials</h3>
                <div className="flex flex-col space-y-1 text-brand-orange font-medium text-sm">
                  <a
                    href="https://www.linkedin.com/in/amrazrafeeque/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/amrazz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://x.com/AmrazRafee13679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Twitter/X
                  </a>
                  <a
                    href="https://www.instagram.com/amrazrafeek?igsh=NW91MDRjb281d3hz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold mb-2 text-sm">Contact me</h3>
                <div className="flex flex-col space-y-1 text-brand-orange font-medium text-sm">
                  <a
                    href="mailto:amrazrafeek2020@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    amrazrafeek2020@gmail.com
                  </a>
                  <a
                    href="tel:+919947620637"
                    className="hover:text-white transition-colors"
                  >
                    +91 9947620637
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-800 max-w-xs w-full">
              <p className="text-gray-500 text-sm mb-2">Got a project in mind?</p>
              <h2 className="text-2xl md:text-3xl font-display text-white font-medium leading-tight">
                Let&apos;s make
                <br />
                something
                <br />
                happen together
              </h2>
            </div>
          </div>

          {/* Right Column - Statement */}
          <div className="flex flex-col space-y-8 h-full justify-end items-start max-w-lg justify-self-end mt-12 md:mt-0">
            <p className="text-2xl lg:text-3xl font-display font-medium leading-tight text-white mb-4">
              As a software engineer, I believe in building meaningful
              experiences.
            </p>
            <p className="text-lg lg:text-xl font-display font-light leading-relaxed text-gray-400">
              Being a developer is about solving user problems. It&apos;s dedicating
              yourself to finding the right balance between user needs and
              business goals.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3 text-[11px] text-gray-600 font-sans tracking-wide">
          <p>© 2026 Amraz Rafeeque.All Rights Reserved.</p>
        </div>
      </div>

      {/* Giant Marquee at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden flex items-end pointer-events-none z-0">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap w-max font-display font-bold text-[10vw] leading-none text-white/5 tracking-tight uppercase"
          style={{ marginBottom: "-1.5vw" }}
        >
          <div className="px-8 flex items-center shrink-0">
            Let&apos;s work together{" "}
            <span className="text-brand-orange/30 mx-8 shrink-0">
              ✦
            </span>
          </div>
          <div className="px-8 flex items-center shrink-0">
            Available for hire{" "}
            <span className="text-brand-orange/30 mx-8 shrink-0">
              ✦
            </span>
          </div>
          <div className="px-8 flex items-center shrink-0">
            Let&apos;s work together{" "}
            <span className="text-brand-orange/30 mx-8 shrink-0">
              ✦
            </span>
          </div>
          <div className="px-8 flex items-center shrink-0">
            Available for hire{" "}
            <span className="text-brand-orange/30 mx-8 shrink-0">
              ✦
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
