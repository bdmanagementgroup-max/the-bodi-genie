import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ShieldCheck, ArrowRight, Star, Heart, Instagram } from 'lucide-react';
import { instagramProfile } from '../data/instagram';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-br from-[#CFA868]/15 via-[#946E37]/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-[400px] h-[400px] bg-gradient-to-l from-amber-500/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-7"
          >
            {/* Top Pill / Social proof badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-md"
            >
              <div className="flex -space-x-1.5">
                <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-[10px] font-bold text-black ring-2 ring-[#0A0C10]">★</span>
                <span className="w-5 h-5 rounded-full bg-[#CFA868] flex items-center justify-center text-[10px] font-bold text-black ring-2 ring-[#0A0C10]">★</span>
                <span className="w-5 h-5 rounded-full bg-[#E9DAB9] flex items-center justify-center text-[10px] font-bold text-black ring-2 ring-[#0A0C10]">★</span>
              </div>
              <span className="text-xs font-medium text-gray-200">
                Stafford’s Premier Aesthetic & Body Contouring Clinic
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#CFA868]/20 text-[#DEC293] font-semibold border border-[#CFA868]/30">
                VIP Care
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              The Art of the{' '}
              <span className="font-semibold italic bg-gradient-to-r from-[#F4ECD8] via-[#CFA868] to-[#946E37] bg-clip-text text-transparent">
                Sculpted
              </span>{' '}
              Silhouette.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Welcome to <strong className="text-white font-medium">@the_bodi_genie</strong>. High-definition ultrasonic cavitation, Brazilian lymphatic snatching, medical-grade diode laser hair removal, and Colombian maderotherapy crafted to eliminate fluid, tone skin, and define natural curves without surgery or downtime.
            </p>

            {/* CTA Buttons & Social validation */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#CFA868] via-[#DEC293] to-[#B88F4C] text-black font-bold text-base shadow-xl shadow-[#CFA868]/25 hover:shadow-[#CFA868]/45 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-black" />
                <span>Book Your Session Now</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CFA868]/40 text-gray-200 font-semibold text-base transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Treatments</span>
              </a>
            </div>

            {/* Trust Markers */}
            <div className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="font-serif text-2xl font-bold text-white">14K+</p>
                <p className="text-xs text-gray-400">Instagram Community</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-gray-400">Non-Invasive</p>
              </div>
              <div>
                <p className="font-serif text-2xl font-bold text-[#CFA868]">5.0 ★★★★★</p>
                <p className="text-xs text-gray-400">Verified Client Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High Fashion Visual Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/15 group">
              {/* Main Visual Image - Shardae Rae */}
              <img
                src="/images/shardae_rae.jpg"
                alt="Shardae Rae — The Bodi Genie Stafford"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              {/* Instagram Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute top-5 left-5 right-5 flex items-center justify-between p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-amber-500 to-[#CFA868]">
                    <img
                      src={instagramProfile.avatar}
                      alt="@the_bodi_genie"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-white">@the_bodi_genie</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                    </div>
                    <span className="text-[11px] text-gray-400">Run by Shardae Rae</span>
                  </div>
                </div>

                <a
                  href="https://instagram.com/the_bodi_genie"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 rounded-full bg-[#CFA868] text-black text-[11px] font-bold hover:bg-[#E9DAB9] transition-colors"
                >
                  Follow
                </a>
              </motion.div>

              {/* Floating Bottom Card: Instant Snatch Metric */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0c0e13]/85 backdrop-blur-lg border border-[#CFA868]/30 shadow-xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-wider text-[#CFA868] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Award Finalist 2025
                  </span>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Best Tummy Sculpt
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-normal">
                  "The most popular non-surgical treatment at The Bodi Genie: The Tummy Tuck!"
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Specialist: Shardae Rae</span>
                  <button
                    onClick={() => onOpenBooking('tummy-tuck-signature')}
                    className="text-[#CFA868] hover:text-white font-semibold transition-colors flex items-center gap-1"
                  >
                    Book This <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
