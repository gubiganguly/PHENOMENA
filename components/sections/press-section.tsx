"use client";

import { motion } from 'framer-motion';
import { LightRays } from '@/components/reactbits';

const pressArticles = [
  {
    publication: "POLITICO",
    headline: "Helping Hollywood crack the Hill’s climate code",
    date: "JULY 2024",
    excerpt: "Helping Hollywood crack the Hill’s climate code",
    image: "https://www.politico.com/dims4/default/9b1e8ec/2147483647/resize/1524x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fee%2Fb4%2F7617a980436cb67cbdd45f4dad6b%2Ffilm-diversity-study-32014.jpg",
    link: "https://www.politico.com/newsletters/california-climate/2024/07/15/helping-hollywood-crack-the-hills-climate-code-00168503"
  },
  {
    publication: "AXIOS", 
    headline: "Exclusive: Ex-Biden staffer launches social impact Hollywood fund",
    date: "AUGUST 2024",
    excerpt: "Exclusive: Ex-Biden staffer launches social impact Hollywood fund",
    image: "https://images.axios.com/DCdw3hZPVMpiWHyvOYiOz_SFFrI=/0x0:1920x1080/1920x1080/2024/08/11/1723401372202.jpg?w=3840",
    link: "https://www.axios.com/pro/media-deals/2024/08/12/phenomena-global-hedge-fund-for-social-impact-hollywood-projects?utm_source=chatgpt.com"
  },
  {
    publication: "POLITICO",
    headline: "Biden, Harris alums have big Hollywood dreams", 
    date: "APRIL 2025",
    excerpt: "Biden, Harris alums have big Hollywood dreams",
    image: "https://www.politico.com/dims4/default/b766095/2147483647/resize/1524x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F2a%2Fb1%2F7ec42581473db666d1c2f585704d%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1833773757",
    link: "https://www.politico.com/newsletters/california-playbook/2025/04/04/biden-harris-alums-have-big-hollywood-dreams-00271779?utm_source=chatgpt.com"
  },
  {
    publication: "MYNEWSLA",
    headline: "New Firm Seeks to Pair Politics with Hollywood for Educational Entertainment",
    date: "JULY 2024", 
    excerpt: "New Firm Seeks to Pair Politics with Hollywood for Educational Entertainment",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=600&fit=crop",
    link: "https://mynewsla.com/business/2024/07/18/new-firm-seeks-to-pair-politics-with-hollywood-for-educational-entertainment/?utm_source=chatgpt.com#google_vignette"
  },
  {
    publication: "POLITICO",
    headline: "Lucas Jinkis joins California-based Phenomena Global Funds advisory board",
    date: "SEPTEMBER 2024",
    excerpt: "Lucas Jinkis joins California-based Phenomena Global Funds advisory board",
    image: "https://todotvnews.com/wp-content/uploads/2024/09/LucasJinkis1.jpg",
    link: "https://todotvnews.com/en/lucas-jinkis-joins-california-based-phenomena-global-funds-advisory-board/?utm_source=chatgpt.com"
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-white mb-4 sm:mb-6 md:mb-8" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 'bold' }}>
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
              className="bg-white/5 border border-white/10 h-64 sm:h-72 md:h-80 flex flex-col cursor-pointer group backdrop-blur-sm overflow-hidden relative"
              onClick={() => window.open(article.link, '_blank', 'noopener,noreferrer')}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 md:p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="text-xs tracking-[0.2em] text-white/60 mb-3 sm:mb-4">
                    {article.publication}
                  </div>
                  <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-white/20 group-hover:text-white/30 transition-colors">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-2 line-clamp-3">
                    {article.headline}
                  </h4>
                  <div className="text-xs tracking-[0.2em] text-white/60">
                    {article.date}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 