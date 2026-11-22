import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { storyHighlights } from '../data/instagram';
import { Sparkles, Eye, X, Play } from 'lucide-react';

export default function StoriesHighlights() {
  const [activeStory, setActiveStory] = useState(null);

  return (
    <section className="py-8 border-b border-white/10 bg-[#07080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Circle Carousel */}
        <div className="flex items-center gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar scroll-smooth justify-start md:justify-center">
          {storyHighlights.map((story) => (
            <motion.button
              key={story.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStory(story)}
              className="flex flex-col items-center gap-2 group shrink-0 focus:outline-none"
            >
              {/* Glowing Gradient Ring */}
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full p-[2.5px] bg-gradient-to-tr from-[#946E37] via-[#CFA868] to-[#F4ECD8] group-hover:shadow-[0_0_20px_rgba(207,168,104,0.4)] transition-all">
                <div className="w-full h-full rounded-full p-[2px] bg-[#07080a]">
                  <img
                    src={story.cover}
                    alt={story.title}
                    className="w-full h-full rounded-full object-cover filter brightness-95 group-hover:brightness-110 transition-all"
                  />
                </div>
              </div>

              <span className="text-xs font-medium text-gray-200 group-hover:text-[#DEC293] transition-colors">
                {story.title}
              </span>
            </motion.button>
          ))}
        </div>

      </div>

      {/* Story Viewer Modal */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-sm w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex flex-col justify-between p-4"
            >
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 6, ease: 'linear' }}
                  onAnimationComplete={() => setActiveStory(null)}
                  className="h-full bg-[#CFA868]"
                />
              </div>

              {/* Story Header */}
              <div className="flex items-center justify-between text-white pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold">@the_bodi_genie</span>
                  <span className="text-[11px] text-gray-400">• {activeStory.title}</span>
                </div>
                <button
                  onClick={() => setActiveStory(null)}
                  className="p-1 rounded-full bg-black/40 text-gray-300 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Background Image / Content */}
              <img
                src={activeStory.cover}
                alt={activeStory.title}
                className="absolute inset-0 w-full h-full object-cover -z-10"
              />

              {/* Bottom Caption Pill */}
              <div className="p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-center space-y-2">
                <p className="text-xs font-semibold text-[#DEC293]">
                  {activeStory.badge}
                </p>
                <p className="text-xs text-gray-200">
                  Tap link in bio to book your clinical consultation & custom body mapping session.
                </p>
                <a
                  href="#services"
                  onClick={() => setActiveStory(null)}
                  className="inline-block px-4 py-2 rounded-full bg-[#CFA868] text-black text-xs font-bold hover:bg-[#E9DAB9]"
                >
                  Explore Packages
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
