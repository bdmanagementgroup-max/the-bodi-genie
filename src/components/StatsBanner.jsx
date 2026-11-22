import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award, Users, HeartPulse, Clock, CheckCircle } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      icon: Award,
      value: '2025 Finalist',
      label: 'Industry Leader Awards',
      sub: 'Best Tummy Sculpt Nomination'
    },
    {
      icon: Sparkles,
      value: '5.0 ★',
      label: 'Client Satisfaction',
      sub: '100% 5-Star Reviews'
    },
    {
      icon: HeartPulse,
      value: '100%',
      label: 'Non-Surgical & Safe',
      sub: 'Zero needles, zero downtime'
    },
    {
      icon: Users,
      value: 'Shardae Rae',
      label: 'Lead Specialist & Owner',
      sub: '@the_bodi_genie'
    }
  ];

  return (
    <section className="relative py-12 border-y border-white/10 bg-[#0c0e14]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#CFA868]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#CFA868]/10 flex items-center justify-center text-[#CFA868] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#DEC293] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-gray-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-400">
                  {stat.sub}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
