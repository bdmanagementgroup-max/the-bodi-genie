import React from 'react';
import { Sparkles, Instagram, Calendar, ArrowUp, Heart } from 'lucide-react';
import { instagramProfile } from '../data/instagram';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 text-gray-400 text-xs">
      {/* Top Banner */}
      <div className="border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-2xl font-bold text-white">
              Elevate Your Silhouette with The Bodi Genie.
            </h3>
            <p className="text-gray-400 text-xs">
              Follow @the_bodi_genie on Instagram for daily client before & afters and clinic updates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/the_bodi_genie"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs flex items-center gap-2 transition-all"
            >
              <Instagram className="w-3.5 h-3.5 text-[#CFA868]" />
              <span>@the_bodi_genie</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-md shadow-[#CFA868]/20 transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-[#CFA868]/40 shadow-sm">
                <img src="/images/logo.jpg" alt="The Bodi Genie Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif font-bold text-base text-white tracking-wider">
                THE BODI GENIE
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-[11px]">
              Stafford's premier private clinic run by Shardae Rae Camacho. Specializing in award-nominated non-invasive body contouring, tummy tuck sculpting, and pain-free diode laser hair removal.
            </p>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Explore
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#services" className="hover:text-white transition-colors">Treatments & Pricing</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Before & After Slider</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Meet Shardae Rae</a></li>
              <li><a href="#method" className="hover:text-white transition-colors">The 4-Step Architecture</a></li>
              <li><a href="#instagram" className="hover:text-white transition-colors">Instagram Feed (@the_bodi_genie)</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Clinic & Gainsborough Works</a></li>
            </ul>
          </div>

          {/* Popular Protocols */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Signatures
            </h4>
            <ul className="space-y-2 text-[11px]">
              <li><span className="text-gray-300">Non-Surgical Tummy Tuck (Award Finalist)</span></li>
              <li><span className="text-gray-300">Medical-Grade Laser Hair Removal</span></li>
              <li><span className="text-gray-300">360° Ultrasonic Cavitation & RF</span></li>
              <li><span className="text-gray-300">Brazilian Sculpt & Lymphatic</span></li>
              <li><span className="text-gray-300">The Bodi Genie VIP Transformation</span></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px] mb-3">
              Stafford Clinic
            </h4>
            <div className="space-y-1.5 text-[11px]">
              <p className="text-gray-300">Gainsborough Works, Saint Patrick's St, Stafford ST16 2PN</p>
              <p className="text-gray-400">WhatsApp Shardae: +44 7858 840783</p>
              <p className="text-gray-400">Email: concierge@thebodigenie.co.uk</p>
              <p className="text-[#CFA868] font-semibold pt-1">Mon-Fri: 10:00 - 19:00 | Instant Booking</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <p>© {new Date().getFullYear()} The Bodi Genie Ltd. All rights reserved. Built for @the_bodi_genie on Instagram.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
