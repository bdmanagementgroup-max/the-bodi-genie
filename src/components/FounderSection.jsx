import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, HeartHandshake, Calendar, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function FounderSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0c0e14] border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-[#CFA868]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Shardae & Award Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[380px] lg:max-w-none">
              {/* Main Photo of Shardae in Uniform */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
                <img
                  src="/images/shardae_rae.jpg"
                  alt="Shardae Rae — Founder & Specialist at The Bodi Genie"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                
                {/* Bottom Overlay Label */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CFA868] text-black font-bold text-xs uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Founder & Specialist
                  </div>
                  <h3 className="font-serif text-2xl font-bold">Shardae Rae Camacho</h3>
                  <p className="text-xs text-[#DEC293]">The Bodi Genie • Stafford, UK</p>
                </div>
              </div>

              {/* Floating Award Certificate Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute -bottom-6 -right-4 sm:-right-8 p-3.5 rounded-2xl bg-[#07080a]/95 backdrop-blur-xl border border-[#CFA868]/40 shadow-2xl max-w-[220px]"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                    2025 Finalist
                  </span>
                </div>
                <p className="text-[11px] text-gray-300 leading-snug">
                  Nominated for <strong className="text-[#CFA868]">Best Tummy Sculpt</strong> at Industry Leader Awards.
                </p>
              </motion.div>

              {/* Floating Verified Badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Fully Qualified & Insured</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" /> Meet Your Specialist
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
              "Sculpting Dreams <br />
              <span className="font-normal italic text-[#DEC293]">Into Reality."</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
              <p>
                Hello and welcome! I’m <strong className="text-white font-semibold">Shardae Rae</strong>, proud founder and lead practitioner at <strong className="text-[#DEC293] font-semibold">The Bodi Genie</strong>.
              </p>
              <p>
                I established The Bodi Genie at Gainsborough Works in Stafford with a clear mission: to provide a clean, calm, and private sanctuary where clients achieve genuine, life-changing body confidence without surgery, needles, or downtime.
              </p>
              <p>
                Every treatment—from our viral <strong className="text-white">Non-Surgical Tummy Tuck</strong> to our virtually pain-free ice-cooled <strong className="text-white">Diode Laser Hair Removal</strong>—is personally performed by me using industry-leading medical-grade technology. I don't believe in one-size-fits-all treatments; I tailor every session to your unique anatomy, schedule, and goals.
              </p>
            </div>

            {/* Credibility highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#CFA868] shrink-0" />
                <span>Industry Leader Awards 2025 Finalist</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#CFA868] shrink-0" />
                <span>100% 5-Star Verified Client Reviews</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#CFA868] shrink-0" />
                <span>Private Suite at Gainsborough Works</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#CFA868] shrink-0" />
                <span>Medical-Grade Ice-Chill Laser Tech</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#CFA868]/20 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Shardae</span>
              </button>

              <a
                href="https://wa.me/447858840783?text=Hi%20Shardae!%20I'd%20like%20to%20inquire%20about%20booking%20at%20The%20Bodi%20Genie."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/30 text-emerald-400 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-emerald-400" />
                <span>Chat Directly with Shardae (07858 840783)</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
