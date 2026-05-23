"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import Overlay from "./Overlay";

const FRAME_COUNT = 73;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 40,
    stiffness: 300,
    restDelta: 0.001
  });
  
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      // Files are named frame_00_delay-0.066s.webp, frame_01_delay-0.066s.webp, etc.
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;
      
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
          // Initial draw
          if (canvasRef.current) {
            renderFrame(0, loadedImages);
          }
        }
      };
      loadedImages.push(img);
    }
    
    // Handle resize
    const handleResize = () => {
      if (loadedImages.length === FRAME_COUNT) {
        // Redraw current frame based on current scroll position
        const latest = smoothProgress.get();
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(latest * FRAME_COUNT))
        );
        renderFrame(frameIndex, loadedImages);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [smoothProgress]);

  const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imgArray[index];
    if (!img) return;

    // Set canvas dimensions to match display size for sharp rendering
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Simulate object-fit: cover logic
    const canvasAspect = canvas.width / canvas.height;
    const imgAspect = img.width / img.height;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasAspect > imgAspect) {
      // Canvas is relatively wider than the image
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgAspect;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      // Canvas is relatively taller than the image
      drawHeight = canvas.height;
      drawWidth = canvas.height * imgAspect;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (images.length === FRAME_COUNT) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * (FRAME_COUNT - 1)))
      );
      renderFrame(frameIndex, images);
    }
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute inset-0 bg-black/10" /> {/* Subtle darkening to make text readable */}
      </div>
      <Overlay scrollYProgress={smoothProgress} />
    </div>
  );
}
