import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Quote, Sparkles, Instagram } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#090b0f] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Client Proof
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Loved by Influencers, Athletes <span className="italic font-normal text-[#DEC293]">&</span> Clients
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Real feedback from verified clients who completed their tailored body contouring journey at The Bodi Genie.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card rounded-3xl p-7 border border-white/10 flex flex-col justify-between relative group hover:border-[#CFA868]/30 transition-all shadow-xl"
            >
              <div className="space-y-4">
                {/* Top Row: Stars and Result Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    {item.result}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-200 leading-relaxed italic font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Service Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-xs sm:text-sm text-white">{item.client}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-400 fill-sky-400/20" />
                  </div>
                  <p className="text-[11px] text-[#CFA868]">{item.handle}</p>
                </div>

                <span className="text-[10px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-full">
                  {item.service.split('(')[0]}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
