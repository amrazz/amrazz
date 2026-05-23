import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    title: "AI Automation Agent",
    description: "Advanced AI-driven automation for enterprise workflows.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["AI", "Automation", "Enterprise"],
    link: "#",
  },
  {
    title: "Arrham Portfolio",
    description: "Clean, minimalist portfolio for international clients.",
    img: "/arrham.png",
    tags: ["React", "Tailwind", "Portfolio"],
    link: "https://arrham-group.vercel.app/",
  },
  {
    title: "Brown Beans Coffee",
    description: "Premium coffee shop website.",
    img: "/brownbeans.png",
    tags: ["Frontend", "Website", "Design"],
    link: "https://brownbeans.vercel.app/",
  },
  {
    title: "Cool Star AC Services",
    description: "Online platform for ac services",
    img: "/cool-star.png",
    tags: ["Services", "Platform", "Web"],
    link: "https://cool-star-ebon.vercel.app/",
  },
  {
    title: "Flower Grid Wellness",
    description: "Health and wellness care services",
    img: "/flowergrid.png",
    tags: ["Healthcare", "React", "Frontend"],
    link: "https://flowergrid.co.uk",
  },
  {
    title: "Grainora",
    description: "Bring together producers and buyers worldwide",
    img: "/grainora.png",
    tags: ["Platform", "B2B", "Web"],
    link: "https://grainora-group.com/",
  },
  {
    title: "Meliotis",
    description: "An intuitive e-commerce platform enabling users to seamlessly browse, search, add items to their cart, and place orders.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python Django", "Postgres SQL", "HTML", "CSS"],
    link: "https://github.com/",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Cards Animation
      const cards = gsap.utils.toArray('.project-card');
      cards.forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          delay: i % 2 === 0 ? 0 : 0.2 // Stagger odd/even slightly on same row
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="w-full bg-brand-bg py-20 flex flex-col items-center overflow-hidden"
    >
      <div ref={textRef} className="flex flex-col items-center w-full px-6 mb-16 max-w-7xl mx-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#222] pb-6">
          <div>
            <div className="text-brand-orange text-sm font-bold tracking-widest mb-4 uppercase">
              // Selected Work
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-white tracking-tight">
              Showcase
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-sm md:text-right">
            Explore a curated selection of recent work. Interactive, scalable,
            and beautifully designed.
          </p>
        </div>
      </div>

      <div 
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-24 w-full max-w-7xl mx-auto px-6 pb-20"
      >
        {projectsData.map((project, i) => {
          // Add margin top to every second item on desktop to create a masonry stagger effect
          const staggerClass = i % 2 !== 0 ? 'md:mt-24' : '';
          
          return (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`project-card group flex flex-col cursor-none ${staggerClass}`}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-4/3 bg-[#111] mb-6 border border-[#222]">
                {/* Parallax Image Image Container */}
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                {/* Card Hover Circle */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-brand-orange/90 flex items-center justify-center text-white font-medium transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-md">
                    View
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base max-w-lg mb-5 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 border border-[#333] rounded-full text-gray-400 bg-white/5 uppercase tracking-wider font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

