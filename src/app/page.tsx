"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import ResumeTabs from "@/components/ResumeTabs";
import ContactFooter from "@/components/ContactFooter";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Disable scrolling on body while preloading is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isLoading]);

  return (
    <main id="home" className="bg-black min-h-screen text-neutral-100 relative">
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen progress={loadProgress} />
        )}
      </AnimatePresence>

      <Navbar />
      <ScrollyCanvas onProgress={setLoadProgress} onComplete={() => setIsLoading(false)} />
      <div className="relative bg-gradient-to-b from-[#0a0a0a] via-[#09090b] to-black pt-8">
        <div id="profile">
          <ResumeTabs />
        </div>
        <div id="contact">
          <ContactFooter />
        </div>
      </div>
    </main>
  );
}
