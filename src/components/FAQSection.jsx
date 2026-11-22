import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronDown, HelpCircle } from 'lucide-react';
import { faqs } from '../data/faq';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0c0e14]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Clear Answers
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Frequently Asked <span className="italic font-normal text-[#DEC293]">Questions</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Everything you need to know about our body sculpting techniques, comfort levels, and protocol results.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-[#CFA868] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#CFA868]/20' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
