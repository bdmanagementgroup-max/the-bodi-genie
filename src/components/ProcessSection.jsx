import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Activity, Droplets, Target, Calendar } from 'lucide-react';

export default function ProcessSection({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      title: 'Digital Consultation & Body Mapping',
      icon: Compass,
      desc: 'We analyze your anatomical body composition, fluid retention triggers, skin elasticity, and exact target zones to map an optimal protocol.'
    },
    {
      num: '02',
      title: 'Targeted Ultrasonic & RF Cavitation',
      icon: Activity,
      desc: 'Focused ultrasonic acoustic pressure liquefies stubborn subcutaneous fat cells while multi-polar radiofrequency tightens dermal fibers.'
    },
    {
      num: '03',
      title: 'Brazilian Lymphatic Drainage',
      icon: Droplets,
      desc: 'Invigorating manual sculpt strokes flush metabolized lipid cells directly into the lymphatic system, delivering instant debloating and waist snatching.'
    },
    {
      num: '04',
      title: 'Definition & Maintenance Protocol',
      icon: Target,
      desc: 'We provide specialized hydration guidance and interval scheduling to ensure progressive muscle toning and sculpted permanence.'
    }
  ];

  return (
    <section id="method" className="py-24 relative overflow-hidden bg-[#0c0e14]">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[400px] bg-[#CFA868]/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> The Bodi Genie Standard
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            The 4-Step <span className="italic font-normal text-[#DEC293]">Sculpting</span> Architecture
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Every contouring journey is customized to your tissue density, personal aesthetic ambitions, and physiological response.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-3xl p-6 sm:p-7 relative border border-white/10 flex flex-col justify-between group hover:border-[#CFA868]/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#CFA868]/50 group-hover:text-[#DEC293] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#CFA868] group-hover:bg-[#CFA868]/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white mb-3 leading-snug group-hover:text-[#DEC293] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#CFA868] font-semibold">
                  <Sparkles className="w-3 h-3" /> Step Verified
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl glass-card border border-[#CFA868]/30 text-center max-w-3xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">
            Ready to Begin Your Transformation?
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-lg mx-auto">
            Book online in under 60 seconds. Select your preferred date, treatment specialist, and private sanctuary suite.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#CFA868]/20 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Reserve Private Session
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
