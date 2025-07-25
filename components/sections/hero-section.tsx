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
    <div className="relative min-h-screen">
      {/* Silk background covering the full hero section */}
      <div className="absolute inset-0">
        {/* Fallback background for mobile/devices that don't support WebGL */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        
        {/* Silk background with mobile optimizations */}
        <div className="absolute inset-0">
          <Silk 
            speed={2}
            scale={1}
            color="#111111"
            noiseIntensity={1}
            rotation={0}
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-8 sm:pt-12 md:pt-20 pb-0">
        {/* Main content container - centered in the full section */}
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
              style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'bold' }}
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: '-0.05em', opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              PHENOMENA
            </motion.h1>
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
      </div>

      {/* Scrolling brand logos - positioned slightly above the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-4 left-0 right-0 overflow-hidden whitespace-nowrap w-full z-20"
      >
        <div className="w-full">
          <ScrollVelocity baseVelocity={-2} className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white/20 tracking-wider">
            {brandLogos.join(" • ")} •
          </ScrollVelocity>
        </div>
      </motion.div>
    </div>
  );
} 