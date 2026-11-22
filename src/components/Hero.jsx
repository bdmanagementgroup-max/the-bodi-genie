import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { instagramProfile } from '../data/instagram';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-gradient-to-br from-[#CFA868]/15 via-[#946E37]/5 to-transparent rounded-full blur-[90px] sm:blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 -right-20 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-gradient-to-l from-amber-500/10 to-transparent rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
      
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] pointer-events-none opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7"
          >
            {/* Top Pill / Social proof badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/15 backdrop-blur-md max-w-full"
            >
              <div className="flex -space-x-1 shrink-0">
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-amber-400 flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-black ring-1 sm:ring-2 ring-[#0A0C10]">★</span>
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#CFA868] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-black ring-1 sm:ring-2 ring-[#0A0C10]">★</span>
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#E9DAB9] flex items-center justify-center text-[9px] sm:text-[10px] font-bold text-black ring-1 sm:ring-2 ring-[#0A0C10]">★</span>
              </div>
              <span className="text-[11px] sm:text-xs font-medium text-gray-200 truncate">
                Stafford’s Premier Aesthetic & Body Clinic
              </span>
              <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded-full bg-[#CFA868]/20 text-[#DEC293] font-semibold border border-[#CFA868]/30 shrink-0">
                VIP
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-7xl font-light tracking-tight text-white leading-[1.12] sm:leading-[1.08]">
              The Art of the{' '}
              <span className="font-semibold italic bg-gradient-to-r from-[#F4ECD8] via-[#CFA868] to-[#946E37] bg-clip-text text-transparent">
                Sculpted
              </span>{' '}
              Silhouette.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Welcome to <strong className="text-white font-medium">@the_bodi_genie</strong>. Run by fully qualified specialist <strong className="text-[#DEC293] font-semibold">Shardae Rae</strong> at Gainsborough Works, Stafford. Clinically proven non-surgical body contouring, our signature Tummy Tuck, and virtually pain-free diode laser hair removal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#CFA868] via-[#DEC293] to-[#B88F4C] text-black font-bold text-sm sm:text-base shadow-xl shadow-[#CFA868]/25 hover:shadow-[#CFA868]/45 transition-all duration-300 flex items-center justify-center gap-2.5 group"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                <span>Book Your Session Now</span>
                <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <a
                href="#services"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CFA868]/40 text-gray-200 font-semibold text-sm sm:text-base transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>Explore Treatments</span>
              </a>
            </div>

            {/* Trust Markers - Optimized for iPhone screens */}
            <div className="pt-3 grid grid-cols-3 gap-2 sm:gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center sm:text-left">
                <p className="font-serif text-lg sm:text-2xl font-bold text-white">2025</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Award Finalist</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-lg sm:text-2xl font-bold text-white">100%</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Non-Invasive</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="font-serif text-lg sm:text-2xl font-bold text-[#CFA868]">5.0 ★</p>
                <p className="text-[10px] sm:text-xs text-gray-400">Verified Rating</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High Fashion Visual Presentation with CLEAR UNCOVERED FACE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-[340px] sm:max-w-[400px] flex flex-col items-center">
              
              {/* Photo Frame - Displays Shardae's full face and uniform clearly without obstruction */}
              <div className="relative w-full aspect-[9/13] rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/15 group bg-[#050608]">
                {/* Main Visual Image - Shardae Rae */}
                <img
                  src="/images/shardae_rae.jpg"
                  alt="Shardae Rae — Founder & Specialist at The Bodi Genie"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle top shadow gradient only for top pill contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 pointer-events-none"></div>

                {/* Instagram Floating Top Header */}
                <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between p-2 sm:p-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/15 z-10">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 to-[#CFA868] shrink-0">
                      <img
                        src={instagramProfile.avatar}
                        alt="@the_bodi_genie"
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <div className="flex items-center gap-1">
                        <span className="text-[11px] font-bold text-white leading-tight">@the_bodi_genie</span>
                        <ShieldCheck className="w-3 h-3 text-sky-400 fill-sky-400/20" />
                      </div>
                      <span className="text-[10px] text-[#DEC293] leading-none block">Shardae Rae • Owner</span>
                    </div>
                  </div>

                  <a
                    href="https://instagram.com/the_bodi_genie"
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 rounded-full bg-[#CFA868] text-black text-[10px] font-bold hover:bg-[#E9DAB9] transition-colors"
                  >
                    Follow
                  </a>
                </div>
              </div>

              {/* Award Callout Box - Positioned OUTSIDE/BELOW the image so Shardae's face is 100% UNCOVERED */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="w-full mt-3 p-3.5 sm:p-4 rounded-2xl bg-[#0c0e14]/95 backdrop-blur-xl border border-[#CFA868]/35 shadow-xl text-left space-y-2 relative z-20"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#CFA868] font-bold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" /> Award Finalist 2025
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    Best Tummy Sculpt
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-normal leading-relaxed">
                  "The most popular non-surgical treatment at The Bodi Genie: The Tummy Tuck!"
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="text-white font-medium">Gainsborough Works, Stafford</span>
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
