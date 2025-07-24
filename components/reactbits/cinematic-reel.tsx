"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image from 'next/image';

interface CinematicReelProps {
  className?: string;
}

const reelImages = [
  "/reel/image1.jpeg",
  "/reel/image2.jpeg",
  "/reel/image3.jpeg",
  "/reel/image4.jpeg",
  "/reel/image5.jpeg",
  "/reel/image6.jpeg",
];

export function CinematicReel({ className = "" }: CinematicReelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { 
    amount: 0.3, // Trigger when 30% of the element is visible
    once: false // Allow retriggering if user scrolls away and back
  });

  // Auto-start when in view
  useEffect(() => {
    if (isInView && !hasPlayed && !isPlaying) {
      setIsPlaying(true);
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed, isPlaying]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % reelImages.length);
      }, 250); // Slower cinematic effect - 250ms between images
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Auto-stop after 3 seconds
  useEffect(() => {
    if (isPlaying) {
      const timeout = setTimeout(() => {
        setIsPlaying(false);
        // Reset to allow replay if user scrolls away and back
        setTimeout(() => setHasPlayed(false), 2000);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isPlaying]);

  const manualStart = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setHasPlayed(true);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full bg-black overflow-hidden min-h-[300px] ${className}`}
    >
      {/* Film grain overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay z-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
      </div>

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="absolute inset-0"
          >
            <Image
              src={reelImages[currentImageIndex]}
              alt={`Political imagery ${currentImageIndex + 1}`}
              fill
              className="object-cover object-center"
              priority={currentImageIndex < 3}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Film strip borders */}
      <div className="absolute left-0 top-0 w-4 sm:w-6 md:w-8 h-full bg-black flex flex-col z-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex-1 border-b border-white/20"></div>
        ))}
      </div>
      <div className="absolute right-0 top-0 w-4 sm:w-6 md:w-8 h-full bg-black flex flex-col z-30">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="flex-1 border-b border-white/20"></div>
        ))}
      </div>

      {/* Optional manual replay button - only shows after auto-play finishes */}
      {!isPlaying && hasPlayed && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          onClick={manualStart}
          className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors group z-40"
        >
          <div className="w-0 h-0 border-l-3 sm:border-l-4 border-l-white border-y-2 sm:border-y-3 border-y-transparent ml-0.5"></div>
        </motion.button>
      )}

      {/* Loading indicator for first view */}
      {!hasPlayed && isInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 z-40"
        >
          <div className="text-white/60 text-xs sm:text-sm tracking-[0.2em]">
            PREPARING REEL...
          </div>
        </motion.div>
      )}

      {/* Scanlines effect */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)'
        }}
      ></div>
    </div>
  );
} 