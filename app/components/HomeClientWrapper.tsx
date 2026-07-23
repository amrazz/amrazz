"use client";

import React, { useState, useRef } from "react";
import CustomCursor from "./CustomCursor";
import Preloader from "./Preloader";
import SmoothScroll from "./SmoothScroll";

interface HomeClientWrapperProps {
  children: React.ReactNode;
}

export default function HomeClientWrapper({ children }: HomeClientWrapperProps) {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const appRef = useRef<HTMLElement>(null);

  return (
    <div>
      <CustomCursor />
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      <SmoothScroll>
        <main ref={appRef} className="w-full min-h-screen bg-brand-bg">
          {children}
        </main>
      </SmoothScroll>
    </div>
  );
}
