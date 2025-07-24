"use client";

import { motion } from 'framer-motion';
import { CinematicReel } from '@/components/reactbits/cinematic-reel';

export function CinematicReelSection() {
  return (
    <section className="bg-black py-4 sm:py-6 md:py-8 relative overflow-hidden min-h-screen flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black to-gray-900/20"></div>
        <motion.div
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1]
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
        ></motion.div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center px-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-0 sm:mb-4 md:mb-6 lg:mb-8 px-4 flex-shrink-0"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white" style={{ fontFamily: 'serif' }}>
            THE REEL
          </h2>
        </motion.div>

        {/* Main cinematic reel - responsive heights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full flex-1 flex items-center justify-center min-h-0 mt-0"
        >
          <div className="w-full h-[60vh] sm:h-[65vh] md:h-[75vh] lg:h-[80vh] max-h-[500px] sm:max-h-none">
            <CinematicReel className="w-full h-full shadow-2xl" />
          </div>
        </motion.div>

        {/* Descriptive text below reel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center py-4 sm:py-5 md:py-6 px-4 flex-shrink-0"
        >
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/60 max-w-4xl mx-auto leading-relaxed">
            Glimpses of power. Fragments of influence. 
            The convergence of worlds that shape tomorrow.
          </p>
        </motion.div>

        {/* Decorative elements - responsive positioning */}
        <div className="absolute top-10 sm:top-16 md:top-20 left-2 sm:left-3 md:left-4 w-1 sm:w-1.5 md:w-2 h-10 sm:h-16 md:h-20 bg-gradient-to-b from-white/20 to-transparent"></div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 right-2 sm:right-3 md:right-4 w-1 sm:w-1.5 md:w-2 h-10 sm:h-16 md:h-20 bg-gradient-to-t from-white/20 to-transparent"></div>
        <div className="absolute top-1/2 left-0 w-10 sm:w-16 md:w-20 h-0.5 sm:h-1 md:h-2 bg-gradient-to-r from-white/20 to-transparent"></div>
        <div className="absolute top-1/2 right-0 w-10 sm:w-16 md:w-20 h-0.5 sm:h-1 md:h-2 bg-gradient-to-l from-white/20 to-transparent"></div>
      </div>
    </section>
  );
} 