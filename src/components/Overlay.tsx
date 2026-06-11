"use client";

import { useState, useEffect } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollY(currentScroll);
      
      // Hide overlay text when the canvas section is scrolled out of view (past 1.8 screen heights)
      if (currentScroll > window.innerHeight * 1.8) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section 1: 0% to 28% (Visible immediately at scroll 0, fades out as scrolled)
  // Forced clamping ensures Section 1 is 100% hidden (opacity 0) past 0.28
  const opacity1 = useTransform(scrollYProgress, [0, 0.12, 0.22, 0.28], [1, 1, 0.2, 0], { clamp: true });
  const y1 = useTransform(scrollYProgress, [0, 0.22, 0.28], [0, 0, -80], { clamp: true });
  const scale1 = useTransform(scrollYProgress, [0, 0.22, 0.28], [1, 0.95, 0.8], { clamp: true });

  // Section 2: 28% to 62%
  // Enters from bottom-right (y: 80, x: 120), becomes centered/right-aligned, and exits top-left (y: -80, x: -120)
  const opacity2 = useTransform(scrollYProgress, [0.28, 0.35, 0.52, 0.62], [0, 1, 1, 0], { clamp: true });
  const y2 = useTransform(scrollYProgress, [0.28, 0.35, 0.52, 0.62], [80, 0, 0, -80], { clamp: true });
  const x2 = useTransform(scrollYProgress, [0.28, 0.35, 0.52, 0.62], [120, 0, 0, -120], { clamp: true });
  const scale2 = useTransform(scrollYProgress, [0.28, 0.35, 0.52, 0.62], [0.85, 1, 1, 0.85], { clamp: true });

  // Section 3: 62% to 95%
  // Enters from bottom-left (y: 80, x: -120), becomes centered/left-aligned, and exits top-right (y: -80, x: 120)
  const opacity3 = useTransform(scrollYProgress, [0.62, 0.7, 0.85, 0.95], [0, 1, 1, 0], { clamp: true });
  const y3 = useTransform(scrollYProgress, [0.62, 0.7, 0.85, 0.95], [80, 0, 0, -80], { clamp: true });
  const x3 = useTransform(scrollYProgress, [0.62, 0.7, 0.85, 0.95], [-120, 0, 0, 120], { clamp: true });
  const scale3 = useTransform(scrollYProgress, [0.62, 0.7, 0.85, 0.95], [0.85, 1, 1, 0.85], { clamp: true });

  // Gate section visibility to prevent off-screen resets or incorrect flashing
  const showSection1 = typeof window !== "undefined" ? scrollY < window.innerHeight * 0.45 : true;
  const showSection2 = typeof window !== "undefined" ? (scrollY >= window.innerHeight * 0.35 && scrollY < window.innerHeight * 1.0) : false;
  const showSection3 = typeof window !== "undefined" ? (scrollY >= window.innerHeight * 0.85 && scrollY < window.innerHeight * 1.6) : false;

  return (
    <div 
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden"
      }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 sm:px-12 md:px-24">

        <motion.div 
          style={{ opacity: showSection1 ? opacity1 : 0, y: y1, scale: scale1 }} 
          className="absolute inset-0 flex items-center justify-center text-white"
        >
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-6xl md:text-8xl font-extrabold tracking-tight">VISWANATH A S</h1>
            <p className="text-sm sm:text-2xl md:text-3xl text-neutral-400 mt-4 font-light tracking-widest uppercase">AI Enthusiast & Developer.</p>
          </div>
        </motion.div>

        <motion.div 
          style={{ opacity: showSection2 ? opacity2 : 0, y: y2, x: x2, scale: scale2 }} 
          className="absolute inset-0 flex items-center justify-center md:justify-end px-6 sm:px-12 md:px-32 text-center md:text-right text-white"
        >
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-extrabold max-w-3xl leading-tight tracking-tight">
            Transforming complex <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">data into impactful solutions.</span>
          </h2>
        </motion.div>

        <motion.div 
          style={{ opacity: showSection3 ? opacity3 : 0, y: y3, x: x3, scale: scale3 }} 
          className="absolute inset-0 flex items-center justify-center md:justify-start px-6 sm:px-12 md:px-32 text-center md:text-left text-white"
        >
          <h2 className="text-2xl sm:text-5xl md:text-7xl font-extrabold max-w-4xl leading-tight tracking-tight">
            Specialized in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Machine Learning, Deep Learning, and Gen AI.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
