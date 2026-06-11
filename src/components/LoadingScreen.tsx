"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  const [statusText, setStatusText] = useState("Initializing System...");

  // Update status messages as loading progress updates
  useEffect(() => {
    if (progress < 15) {
      setStatusText("Initializing portfolio assets...");
    } else if (progress < 45) {
      setStatusText("Downloading WebP animation sequence...");
    } else if (progress < 75) {
      setStatusText("Caching frames in browser memory...");
    } else if (progress < 95) {
      setStatusText("Optimizing scroll performance...");
    } else {
      setStatusText("Pre-rendering complete. Ready!");
    }
  }, [progress]);

  // Circle progress calculation (radius = 50, circumference = 2 * PI * r = 314.16)
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-neutral-950 flex flex-col items-center justify-center z-[9999] pointer-events-auto"
    >
      {/* Background soft glow elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="relative flex flex-col items-center max-w-md px-6 text-center select-none z-10">
        
        {/* Glow-enhanced SVG Progress Ring */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90">
            {/* Background Track Circle */}
            <circle
              cx="72"
              cy="72"
              r={radius}
              className="stroke-neutral-800"
              strokeWidth="4"
              fill="transparent"
            />
            {/* Foreground Progress Circle */}
            <motion.circle
              cx="72"
              cy="72"
              r={radius}
              className="stroke-primary drop-shadow-[0_0_12px_rgba(0,210,255,0.6)]"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray={circumference}
              animate={{ strokeDashoffset }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              strokeLinecap="round"
            />
          </svg>
          
          {/* Inner Percentage Counter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-extrabold tracking-tighter text-white font-mono">
              {progress}<span className="text-lg text-neutral-500 font-sans">%</span>
            </span>
          </div>
        </div>

        {/* Pulsing Status Text & Name Header */}
        <div className="mt-8 space-y-3">
          <h2 className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
            VISWANATH A S
          </h2>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
            <p className="text-sm font-medium tracking-wide text-neutral-400 font-mono min-h-[20px] transition-all duration-300">
              {statusText}
            </p>
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 z-10 text-xs tracking-widest text-neutral-600 uppercase font-mono">
        Personal Portfolio v2.0
      </div>
    </motion.div>
  );
}
