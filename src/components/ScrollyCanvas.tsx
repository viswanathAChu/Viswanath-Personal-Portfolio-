"use client";

import { useEffect, useRef } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 73;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Removed spring delay to ensure 0ms scrolling latency (zero scroll lag)
  
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Helper to render a frame on canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[index];
    if (!img) {
      // Find the nearest loaded frame to prevent any blank screen or flickering
      let closestDist = Infinity;
      let closestIdx = 0;
      let found = false;
      for (let i = 0; i < FRAME_COUNT; i++) {
        if (imagesRef.current[i]) {
          const dist = Math.abs(i - index);
          if (dist < closestDist) {
            closestDist = dist;
            closestIdx = i;
            found = true;
          }
        }
      }
      if (found) {
        img = imagesRef.current[closestIdx];
      }
    }
    
    if (!img) return; // Fallback if no images are loaded yet

    // Simulate object-fit: cover logic
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    // 1. Preload frame 0 first and render immediately to avoid initial black/empty state
    const img0 = new Image();
    img0.src = `/sequence/frame_00_delay-0.066s.webp`;
    img0.onload = () => {
      imagesRef.current[0] = img0;
      
      // Initial draw of first frame
      const canvas = canvasRef.current;
      if (canvas) {
        const dpr = typeof window !== "undefined" ? (window.devicePixelRatio || 1) : 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        renderFrame(0);
      }
    };

    // 2. Load other frames in the background in parallel
    for (let i = 1; i < FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;
      img.onload = () => {
        imagesRef.current[i] = img;
      };
    }

    // 3. Handle window resizing without resizing in the scroll event loop (lag prevention)
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = typeof window !== "undefined" ? (window.devicePixelRatio || 1) : 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      
      // Redraw frame matching current progress
      const latest = scrollYProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * (FRAME_COUNT - 1)))
      );
      renderFrame(frameIndex);
    };

    // Trigger initial sizing setup on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scrollYProgress]);

  // Handle scroll progress change events instantly
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * (FRAME_COUNT - 1)))
    );
    renderFrame(frameIndex);
  });

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <Overlay scrollYProgress={scrollYProgress} />
    </div>
  );
}
