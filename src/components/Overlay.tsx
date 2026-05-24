"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
  // Section 1: 0% to 25% (Starts hidden, fades in on scroll, then fades out)
  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.05, 0.25], [50, 0, -50]);

  // Section 2: 30% to 60%
  const opacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.5, 0.6], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6], [50, 0, -50]);

  // Section 3: 65% to 95%
  const opacity3 = useTransform(scrollYProgress, [0.65, 0.75, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.65, 0.75, 0.95], [50, 0, -50]);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        <motion.div style={{ opacity: opacity1, y: y1 }} className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center px-4">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight">VISWANATH A S</h1>
            <p className="text-lg sm:text-2xl md:text-3xl text-neutral-400 mt-4 font-light tracking-widest uppercase">AI Enthusiast & Developer.</p>
          </div>
        </motion.div>

        <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex items-center justify-end px-6 sm:px-12 md:px-32 text-right text-white">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold max-w-3xl leading-tight tracking-tight">
            Transforming complex <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">data into impactful solutions.</span>
          </h2>
        </motion.div>

        <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex items-center justify-start px-6 sm:px-12 md:px-32 text-white">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold max-w-4xl leading-tight tracking-tight">
            Specialized in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Machine Learning, Deep Learning, and Gen AI.</span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
