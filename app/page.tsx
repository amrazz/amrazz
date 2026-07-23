import type { Metadata } from "next";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import BookCall from "./components/BookCall";
import ProfileFooter from "./components/ProfileFooter";
import HomeClientWrapper from "./components/HomeClientWrapper";

export const metadata: Metadata = {
  title: "Amraz Rafeeque | Freelance Full-Stack Developer & SaaS Architect",
  description: "Senior freelance developer partnering with founders to build high-performance web applications, custom SaaS platforms, and creative visual experiences.",
  keywords: [
    "Web Developer",
    "Software Engineer",
    "SaaS Architect",
    "Next.js Developer",
    "React Developer",
    "Portfolio",
    "Custom Software",
    "Web Applications",
    "SaaS",
    "Business Websites"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Amraz Rafeeque | Freelance Full-Stack Developer & SaaS Architect",
    description: "Senior freelance developer partnering with founders to build high-performance web applications, custom SaaS platforms, and creative visual experiences.",
    url: "/",
    siteName: "Amraz Rafeeque Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/amraz.png",
        width: 1200,
        height: 630,
        alt: "Amraz Rafeeque Portrait",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amraz Rafeeque | Freelance Full-Stack Developer & SaaS Architect",
    description: "Senior freelance developer partnering with founders to build high-performance web applications, custom SaaS platforms, and creative visual experiences.",
    images: ["/amraz.png"],
    creator: "@AmrazRafee13679",
  },
};

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amraz Rafeeque",
    "url": "https://amraz.in",
    "image": "https://amraz.in/amraz.png",
    "jobTitle": "Freelance Full-Stack Developer & SaaS Architect",
    "sameAs": [
      "https://www.linkedin.com/in/amrazrafeeque/",
      "https://github.com/amrazz",
      "https://x.com/AmrazRafee13679",
      "https://www.instagram.com/amrazrafeek?igsh=NW91MDRjb281d3hz"
    ],
    "knowsAbout": [
      "Web Development",
      "SaaS Architecture",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Full-Stack Development",
      "UI/UX Design",
      "GSAP Animations",
      "API Development & Integration"
    ],
    "email": "amrazrafeek2020@gmail.com",
    "description": "Senior freelance developer specializing in custom SaaS and high-performance web applications."
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Amraz Rafeeque Portfolio",
    "url": "https://amraz.in",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://amraz.in/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Person",
      "name": "Amraz Rafeeque"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://amraz.in"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Amraz Rafeeque Custom Software & Engineering",
    "image": "https://amraz.in/amraz.png",
    "@id": "https://amraz.in/#services",
    "url": "https://amraz.in",
    "telephone": "+919947620637",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kochi",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "knowsAbout": [
      "SaaS Application Development",
      "Custom Websites & Landing Pages",
      "E-commerce & Shopify Stores",
      "Internal Dashboards & Portals",
      "API Integration & Development",
      "Performance Optimization"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <HomeClientWrapper>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Projects />
        <Testimonials />
        <BookCall />
        <ProfileFooter />
      </HomeClientWrapper>
    </>
  );
}


