"use client";

import { motion } from 'framer-motion';

export function QRSection() {
  return (
    <section className="bg-black py-32">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
            ACCESS.
          </h2>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-16" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
            UNLOCKED.
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* QR Code Placeholder */}
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-64 h-64 bg-white/10 border-2 border-white/20 flex items-center justify-center cursor-pointer group transition-all duration-300"
              >
                {/* QR Grid Pattern */}
                <div className="grid grid-cols-8 gap-1 w-48 h-48">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: Math.random() > 0.5 ? 1 : 0.1 }}
                      transition={{ delay: i * 0.01, duration: 0.3 }}
                      className="bg-white/60 group-hover:bg-white/80 transition-colors"
                    ></motion.div>
                  ))}
                </div>

                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-8 h-8 border-2 border-white/80"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-2 border-white/80"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-2 border-white/80"></div>
              </motion.div>

              {/* Scanning line animation */}
              <motion.div
                animate={{ y: [0, 256, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
                className="absolute left-0 w-full h-px bg-white/60 shadow-lg"
                style={{ boxShadow: '0 0 10px rgba(255,255,255,0.6)' }}
              ></motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-xl text-white/60 mb-4">
                SECURE VERIFICATION REQUIRED
              </p>
              <p className="text-sm text-white/40 tracking-wider">
                SCAN FOR AUTHENTICATED ACCESS • MEMBERS ONLY
              </p>
            </motion.div>
          </motion.div>

          {/* Status indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center gap-8 mt-16"
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2 h-2 bg-green-400 rounded-full"
              ></motion.div>
              <span className="text-sm text-white/60 tracking-wider">SECURE</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="w-2 h-2 bg-blue-400 rounded-full"
              ></motion.div>
              <span className="text-sm text-white/60 tracking-wider">ENCRYPTED</span>
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
                className="w-2 h-2 bg-purple-400 rounded-full"
              ></motion.div>
              <span className="text-sm text-white/60 tracking-wider">VERIFIED</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 