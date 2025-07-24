"use client";

import { motion } from 'framer-motion';
import { Silk } from '@/components/reactbits/silk-background';
import { ScrollVelocity } from '@/components/reactbits/scroll-velocity';
import { CountdownTimer } from '@/components/reactbits/countdown-timer';

const brandLogos = [
  "APPLE", "GOOGLE", "TESLA", "META", "AMAZON", "MICROSOFT", "NVIDIA", "NETFLIX"
];

export function HeroSection() {
  return (
    <Silk 
      speed={2}
      scale={1}
      color="#333333"
      noiseIntensity={1}
      rotation={0}
      className="min-h-screen flex flex-col justify-center items-center py-8 sm:py-12 md:py-20"
    >
      {/* Main content container */}
      <div className="flex flex-col items-center text-center space-y-8 sm:space-y-12 md:space-y-16 px-4 sm:px-6 md:px-8">
        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[12rem] font-bold tracking-tighter text-white mb-4 sm:mb-6 md:mb-8"
            style={{ fontFamily: 'serif' }}
            initial={{ letterSpacing: '0.5em', opacity: 0 }}
            animate={{ letterSpacing: '-0.05em', opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            PHENOMENA
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-light tracking-[0.3em] text-white/80"
          >
            GLOBAL
          </motion.div>
        </motion.div>

        {/* Scrolling brand logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="overflow-hidden whitespace-nowrap py-4 sm:py-6 md:py-8 w-full"
        >
          <ScrollVelocity baseVelocity={-2} className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white/20 tracking-wider">
            {brandLogos.join(" • ")} •
          </ScrollVelocity>
        </motion.div>

        {/* Countdown timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center"
        >
          <div className="text-sm sm:text-base md:text-lg lg:text-xl tracking-[0.2em] text-white/60 mb-4 sm:mb-6 md:mb-8">
            LAUNCHING
          </div>
          <CountdownTimer 
            targetDate="2025-09-10T00:00:00Z" 
            className="text-white"
          />
        </motion.div>
      </div>
    </Silk>
  );
} 