import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, MessageSquare, Instagram, Mail, Sparkles, Navigation } from 'lucide-react';

export default function ContactLocation({ onOpenBooking }) {
  return (
    <section id="location" className="py-24 relative overflow-hidden bg-[#07080a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFA868]/10 border border-[#CFA868]/30 text-xs font-semibold text-[#CFA868] uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Private Aesthetic Clinic
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            The Clinic <span className="italic font-normal text-[#DEC293]">&</span> Concierge
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
            Discreet, private treatment suites located at Gainsborough Works in Stafford. Bookings are strictly by advance reservation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-3xl p-7 border border-white/10 space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#CFA868]/10 flex items-center justify-center text-[#CFA868] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">The Bodi Genie Clinic</h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    Gainsborough Works, Saint Patrick's Street, Stafford ST16 2PN
                  </p>
                  <p className="text-[11px] text-[#CFA868] mt-1 font-semibold">
                    *Dedicated client parking at Gainsborough Works
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#CFA868]/10 flex items-center justify-center text-[#CFA868] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">Clinic Hours</h4>
                  <div className="text-xs text-gray-300 space-y-0.5 mt-0.5">
                    <p>Monday – Friday: 9:30 AM – 7:30 PM</p>
                    <p>Saturday: 10:00 AM – 5:30 PM</p>
                    <p>Sunday: Advance reservations on request</p>
                  </div>
                </div>
              </div>

              {/* Direct Concierge Contact */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#CFA868]/10 flex items-center justify-center text-[#CFA868] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">Shardae Rae • Direct Line</h4>
                  <p className="text-xs text-gray-300 mt-0.5">
                    +44 7858 840783
                  </p>
                  <p className="text-[11px] text-gray-400">
                    concierge@thebodigenie.co.uk
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onOpenBooking()}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md text-center"
                >
                  Reserve Suite
                </button>

                <a
                  href="https://wa.me/447858840783?text=Hi%20Shardae!%20I'd%20like%20to%20book%20a%20session%20at%20The%20Bodi%20Genie."
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-emerald-400 hover:bg-[#25D366]/30 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-emerald-400" />
                  <span>WhatsApp Shardae</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Visual / Map Interactive Card */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-[#0f1218]">
              {/* Studio Luxury Interior Photo */}
              <img
                src="/images/treatment_room.jpg"
                alt="The Bodi Genie Stafford Clinic Suite"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>

              {/* Pin Overlay Badge */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/15 max-w-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Stafford Private Clinic</span>
                </div>
                <p className="text-[11px] text-gray-300">
                  Custom treatment suite with medical-grade laser and body contouring technology.
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white">
                <span className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#CFA868]" />
                  <span>Stafford • Gainsborough Works, Saint Patrick's St</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Gainsborough+Works+Saint+Patricks+Street+Stafford+ST16+2PN"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#CFA868] hover:text-white font-semibold underline text-[11px]"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
