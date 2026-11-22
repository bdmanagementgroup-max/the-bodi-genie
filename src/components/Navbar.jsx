import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Instagram, Menu, X, Phone, Clock } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Treatments', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'About Shardae', href: '#about' },
    { name: 'The Method', href: '#method' },
    { name: 'Instagram', href: '#instagram' },
    { name: 'Clinic', href: '#location' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07080a]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[#CFA868]/40 shadow-lg shadow-[#CFA868]/20 group-hover:scale-105 transition-transform duration-300">
                <img src="/images/logo.jpg" alt="The Bodi Genie Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif tracking-wider text-xl font-bold text-white group-hover:text-[#DEC293] transition-colors">
                  THE BODI GENIE
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#CFA868] font-semibold -mt-1">
                  Aesthetic & Laser Clinic
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#CFA868] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://instagram.com/the_bodi_genie"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#CFA868]/40 text-gray-200 transition-all"
                title="Follow @the_bodi_genie on Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-[#CFA868]" />
                <span>@the_bodi_genie</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              </a>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenBooking()}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-semibold text-sm shadow-lg shadow-[#CFA868]/25 hover:shadow-[#CFA868]/40 transition-all duration-300 flex items-center gap-2"
              >
                <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <Calendar className="w-4 h-4 text-black" />
                <span>Book Appointment</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => onOpenBooking()}
                className="px-3 py-1.5 rounded-full bg-[#CFA868] text-black text-xs font-bold"
              >
                Book
              </motion.button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#0c0e13]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 md:hidden shadow-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-[#CFA868] py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://instagram.com/the_bodi_genie"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-200"
              >
                <Instagram className="w-4 h-4 text-[#CFA868]" />
                <span>Follow @the_bodi_genie on Instagram</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-sm shadow-lg shadow-[#CFA868]/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Instant Consultation</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
