"use client";

import { motion } from 'framer-motion';
import { LightRays } from '@/components/reactbits';

const pressArticles = [
  {
    publication: "FINANCIAL TIMES",
    headline: "The Mysterious Rise of Phenomena Global",
    date: "DECEMBER 2024",
    excerpt: "Sources close to international markets suggest..."
  },
  {
    publication: "THE ECONOMIST", 
    headline: "Power Players Gather for September Event",
    date: "NOVEMBER 2024",
    excerpt: "An exclusive invitation-only summit that could reshape..."
  },
  {
    publication: "WALL STREET JOURNAL",
    headline: "Tech Giants Align with New Global Initiative", 
    date: "OCTOBER 2024",
    excerpt: "Major technology companies have quietly committed..."
  },
  {
    publication: "BLOOMBERG",
    headline: "September 10th: The Date Everyone's Watching",
    date: "SEPTEMBER 2024", 
    excerpt: "Political and business leaders mark their calendars..."
  },
  {
    publication: "REUTERS",
    headline: "Phenomena Global Attracts International Attention",
    date: "AUGUST 2024",
    excerpt: "Diplomatic sources confirm unprecedented coordination..."
  }
];

export function PressSection() {
  return (
    <section className="bg-black py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Light Rays Background */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={2.5}
          pulsating={true}
          fadeDistance={1.8}
          saturation={1.0}
          followMouse={false}
          mouseInfluence={0.15}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-60"
        />
      </div>

      {/* Content overlay */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-4 sm:mb-6 md:mb-8" style={{ fontFamily: 'serif' }}>
            IN THE PRESS
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-px bg-white/60 mx-auto"></div>
        </motion.div>

        {/* Interactive covers grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16 lg:mt-20"
        >
          {pressArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="bg-white/5 border border-white/10 p-4 sm:p-5 md:p-6 h-64 sm:h-72 md:h-80 flex flex-col justify-between cursor-pointer group backdrop-blur-sm"
            >
              <div>
                <div className="text-xs tracking-[0.2em] text-white/40 mb-3 sm:mb-4">
                  {article.publication}
                </div>
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/10 group-hover:text-white/20 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-3">
                  {article.headline}
                </h4>
                <div className="text-xs tracking-[0.2em] text-white/40">
                  {article.date}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 