/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import BookCall from './components/BookCall';
import ProfileFooter from './components/ProfileFooter';

export default function App() {
  const appRef = useRef<HTMLElement>(null);
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <>
      <CustomCursor />
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <SmoothScroll>
        <main ref={appRef} className="w-full min-h-screen bg-brand-bg">
          <Hero />
          <About />
          <Marquee />
          <Services />
          <Projects />
          <Testimonials />
          <BookCall />
          <ProfileFooter />
        </main>
      </SmoothScroll>
    </>
  );
}
