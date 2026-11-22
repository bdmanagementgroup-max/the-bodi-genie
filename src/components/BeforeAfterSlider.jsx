import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Sliders, CheckCircle2, ArrowLeftRight, Award } from 'lucide-react';
import { transformationData } from '../data/testimonials';

export default function BeforeAfterSlider({ onOpenBooking }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeTab, setActiveTab] = useState('tummy'); // 'tummy' | 'slimming'
  const containerRef = useRef(null);

  const transformations = {
    tummy: {
      title: "Signature Non-Surgical Tummy Tuck",
      badge: "Award Nominated 2025",
      beforeImage: "/images/tummy_before.jpg",
      afterImage: "/images/tummy_after.jpg",
      beforeLabel: "Baseline (Before)",
      afterLabel: "After Tummy Tuck Protocol",
      description: "Noticeable lower abdominal tightening, waistline cinching, and loose skin contraction with zero needles or surgical downtime."
    },
    slimming: {
      title: "Targeted Cavitation & RF Slimming",
      badge: "Real Inch Loss",
      beforeImage: "/images/slimming_before.jpg",
      afterImage: "/images/slimming_after.jpg",
      beforeLabel: "Before Treatment",
      afterLabel: "After 4 Sessions",
      description: "Subcutaneous fat breakdown and deep lymphatic drainage delivering loose-fitting clothing and visibly smoothed contours."
    }
  };

  const current = transformations[activeTab];

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="results" className="py-24 relative overflow-hidden bg-[#090b0f]">
      {/* Background radial highlight */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#CFA868]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Proven Transformations by Shardae Rae
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Authentic Clinical Results <span className="italic font-normal text-[#DEC293]">—</span> Before & After
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Drag the interactive divider to inspect authentic client results achieved at The Bodi Genie in Stafford.
          </p>

          {/* Transformation Switcher Tabs */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => {
                setActiveTab('tummy');
                setSliderPosition(50);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'tummy'
                  ? 'bg-[#CFA868] text-black shadow-lg shadow-[#CFA868]/20'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Non-Surgical Tummy Tuck (Award Nominated)</span>
            </button>

            <button
              onClick={() => {
                setActiveTab('slimming');
                setSliderPosition(50);
              }}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'slimming'
                  ? 'bg-[#CFA868] text-black shadow-lg shadow-[#CFA868]/20'
                  : 'bg-white/5 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cavitation Slimming & Debloat</span>
            </button>
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Slider Component */}
          <div className="lg:col-span-8 flex justify-center">
            <div
              ref={containerRef}
              className="relative aspect-[4/5] sm:aspect-[1/1] w-full max-w-[560px] rounded-3xl overflow-hidden shadow-2xl border border-white/20 select-none cursor-ew-resize group bg-[#050608] touch-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={(e) => handleMove(e.touches[0].clientX)}
              onTouchMove={handleTouchMove}
            >
              {/* After Image (Background) */}
              <img
                src={current.afterImage}
                alt={current.afterLabel}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />
              <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-emerald-500/30 text-[11px] sm:text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{current.afterLabel}</span>
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={current.beforeImage}
                  alt={current.beforeLabel}
                  className="absolute inset-0 w-full h-full object-cover object-center filter brightness-95"
                />
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-gray-200">
                  <span>{current.beforeLabel}</span>
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-gradient-to-b from-[#CFA868] via-white to-[#CFA868] shadow-[0_0_15px_rgba(207,168,104,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0C0E12] border-2 border-[#CFA868] shadow-2xl flex items-center justify-center text-[#CFA868]">
                  <ArrowLeftRight className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Bottom Instructions Badge */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] text-gray-300 pointer-events-none flex items-center gap-2 whitespace-nowrap max-w-[92%]">
                <Sliders className="w-3 h-3 text-[#CFA868] shrink-0" />
                <span className="truncate">Slide to inspect tissue transformation</span>
              </div>
            </div>
          </div>

          {/* Right Metrics & Details */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl glass-card border border-white/10 space-y-5">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#CFA868] px-2.5 py-1 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/20 inline-block mb-2">
                  {current.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {current.title}
                </h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  {current.description}
                </p>
              </div>
              
              <div className="space-y-3 pt-2">
                {transformationData.metrics.map((metric, i) => (
                  <div key={i} className="pb-2.5 border-b border-white/5 last:border-0 last:pb-0 flex items-center justify-between">
                    <p className="text-xs text-gray-400">{metric.label}</p>
                    <p className="text-xs font-bold text-[#DEC293]">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('tummy-tuck-signature')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#CFA868]/20 transition-all flex items-center justify-center gap-2"
                >
                  Book Tummy Tuck with Shardae
                </button>
              </div>
            </div>

            <p className="text-[11px] text-gray-400 italic text-center px-2">
              *Authentic untouched clinical photography of verified clients at The Bodi Genie Stafford.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
