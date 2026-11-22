import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Clock, Check, ArrowRight, Info, Shield, Layers } from 'lucide-react';
import { services, categories } from '../data/services';

export default function ServicesSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = activeCategory === 'all'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#CFA868]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" /> High-Performance Aesthetics
          </motion.div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Curated Body Sculpting <span className="italic font-normal text-[#DEC293]">&</span> Contouring
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Clinically backed, non-invasive protocols individually tuned for fat metabolism, stubborn cellulite reduction, deep lymphatic flushing, and skin tightening.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#CFA868] text-black shadow-lg shadow-[#CFA868]/20 scale-105'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col group border border-white/10"
              >
                {/* Image Header with Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1117] via-transparent to-black/30"></div>

                  {service.popular && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-[#CFA868] text-black font-extrabold text-[10px] uppercase tracking-wider shadow-lg">
                      Most Requested
                    </span>
                  )}

                  <div className="absolute bottom-3 left-4 flex items-center gap-2 text-xs font-semibold text-gray-200">
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                      <Clock className="w-3 h-3 text-[#CFA868]" /> {service.duration}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#DEC293] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <span className="font-serif text-2xl font-bold text-[#CFA868] ml-2">
                        £{service.price}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-[#CFA868]/90">
                      {service.tagline}
                    </p>

                    <p className="text-xs text-gray-300 leading-relaxed pt-1">
                      {service.description}
                    </p>

                    {/* Key Benefits List */}
                    <div className="pt-3 space-y-1.5 border-t border-white/5">
                      {service.benefits.slice(0, 3).map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-gray-300">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <button
                      onClick={() => onOpenBooking(service.id)}
                      className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-md shadow-[#CFA868]/20"
                    >
                      <span>Book Slot</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-colors"
                      title="View Clinical Details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Clinical Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0f1218] border border-white/20 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl space-y-6 text-left"
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full bg-white/5"
              >
                ✕
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#CFA868]/10 flex items-center justify-center text-[#CFA868]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-xs text-[#CFA868]">{selectedService.duration} • £{selectedService.price}</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-300">
                <div>
                  <h4 className="text-white font-semibold mb-1">Overview & Protocol</h4>
                  <p className="leading-relaxed">{selectedService.description}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-1.5">Treatable Anatomical Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.areas.map((area, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-1">Recommended Frequency</h4>
                  <p className="text-gray-300 bg-white/[0.03] p-3 rounded-xl border border-white/5">
                    {selectedService.recommendedSessions}
                  </p>
                </div>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    const id = selectedService.id;
                    setSelectedService(null);
                    onOpenBooking(id);
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#CFA868] text-black font-bold text-sm hover:bg-[#DEC293] transition-colors flex items-center justify-center gap-2"
                >
                  Proceed to Reserve Slot (£{selectedService.price})
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
