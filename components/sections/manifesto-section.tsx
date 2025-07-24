"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const manifestoPhrases = [
  "Power is not taken.",
  "It is granted by those who recognize its necessity.",
  "September 10th marks not an end,",
  "but the beginning of a new paradigm.",
  "The convergence of influence.",
  "The alignment of vision.",
  "The phenomena of change.",
  "Are you ready to witness history?"
];

export function ManifestoSection() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentPhraseIndex >= manifestoPhrases.length) return;

    const currentPhrase = manifestoPhrases[currentPhraseIndex];
    
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        } else {
          setIsTyping(false);
          // Pause before moving to next phrase
          setTimeout(() => {
            if (currentPhraseIndex < manifestoPhrases.length - 1) {
              setCurrentPhraseIndex(prev => prev + 1);
              setDisplayedText('');
              setIsTyping(true);
            }
          }, 2000);
        }
      }, 80);

      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentPhraseIndex, isTyping]);

  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-white via-transparent to-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-8 sm:mb-12 md:mb-16 lg:mb-20"
            style={{ fontFamily: 'serif' }}
          >
            MANIFESTO
          </motion.h2>

          {/* Typewriter container */}
          <div className="min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] flex items-center justify-center">
            <div className="text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPhraseIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4 sm:mb-6 md:mb-8 px-2"
                  style={{ fontFamily: 'serif' }}
                >
                  {displayedText}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="inline-block w-0.5 sm:w-1 h-5 sm:h-6 md:h-8 lg:h-12 bg-white ml-1 sm:ml-2"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Progress indicator */}
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                {manifestoPhrases.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      index <= currentPhraseIndex ? 'bg-white' : 'bg-white/20'
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ 
                      scale: index === currentPhraseIndex ? 1.5 : 1,
                      opacity: index <= currentPhraseIndex ? 1 : 0.3
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>

              {/* Completion message */}
              {currentPhraseIndex >= manifestoPhrases.length - 1 && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="mt-8 sm:mt-10 md:mt-12 lg:mt-16"
                >
                  <div className="w-px h-8 sm:h-10 md:h-12 lg:h-16 bg-gradient-to-b from-white to-transparent mx-auto mb-4 sm:mb-6 md:mb-8"></div>
                  <p className="text-sm sm:text-base md:text-lg text-white/60 tracking-[0.2em]">
                    PHENOMENA GLOBAL
                  </p>
                  <p className="text-xs sm:text-sm text-white/40 tracking-[0.3em] mt-1 sm:mt-2">
                    THE FUTURE AWAITS
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 