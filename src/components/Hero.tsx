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
      className="relative w-full h-screen bg-brand-bg text-white overflow-hidden flex flex-col justify-between pt-6 pb-12 px-6 md:px-12"
    >
      {/* Top Navbar Simulation */}
      <div className="flex justify-between items-center text-xs md:text-sm font-medium tracking-wide z-10 mix-blend-difference pointer-events-none">
        <div className="pointer-events-auto">© Amraz Rafeek</div>
        <div className="hidden md:flex space-x-12 pointer-events-auto">
          <a
            href="#projects"
            className="hover:text-brand-orange transition-colors"
          >
            Projects
          </a>
          <a
            href="#about"
            className="hover:text-brand-orange transition-colors"
          >
            About
          </a>
        </div>
        <div className="flex items-center space-x-6 pointer-events-auto">
          <a
            href="#contact"
            className="hover:text-brand-orange transition-colors hidden sm:block"
          >
            Contact
          </a>
          <a
            href="#book-call"
            className="px-4 py-2 bg-white text-black font-semibold rounded-full hover:bg-brand-orange hover:text-white transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>

      {/* Main Center Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#111] via-transparent to-[#111] opacity-60 z-10"></div>
        <img
          ref={imgRef}
          src="/public/heroimg.jpeg"
          alt="Amraz Rafeek Portrait"
          className="w-full h-full object-cover object-[85%_top] md:object-[95%_top] opacity-90"
        />
      </div>

      <div className="relative z-10 flex flex-col items-end lg:items-start justify-center w-full mt-auto mb-auto pointer-events-none">
        <h1
          ref={textRef}
          className="font-display font-bold text-[14vw] md:text-[12vw] leading-[0.8] tracking-tighter text-right md:text-left uppercase"
        >
          <span className="block text-white mix-blend-difference">Amraz</span>
          <span className="block text-transparent text-stroke-1 md:text-stroke-2 text-stroke-white mt-1 md:mt-2">
            Rafeek
          </span>
        </h1>
      </div>

      {/* Bottom Content */}
      <div className="relative z-10 flex flex-row justify-between items-end w-full">
        <div className="flex flex-col space-y-1 md:space-y-2 text-xs md:text-sm mix-blend-difference text-white">
          <a
            href="https://www.linkedin.com/in/amrazrafeeque/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition-colors pointer-events-auto"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/AmrazRafee13679"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition-colors pointer-events-auto"
          >
            Twitter
          </a>
          <a
            href="https://github.com/amrazz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-orange transition-colors pointer-events-auto"
          >
            Github
          </a>
        </div>

        <div className="text-right font-display text-base sm:text-xl md:text-5xl font-semibold leading-tight mix-blend-difference text-white">
          // Web Developer <br /> SaaS Architect
        </div>
      </div>
    </section>
  );
}
