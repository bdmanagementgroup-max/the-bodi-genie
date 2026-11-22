import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StoriesHighlights from './components/StoriesHighlights';
import StatsBanner from './components/StatsBanner';
import ServicesSection from './components/ServicesSection';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import FounderSection from './components/FounderSection';
import ProcessSection from './components/ProcessSection';
import InstagramFeed from './components/InstagramFeed';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const handleOpenBooking = (serviceId = null) => {
    setSelectedServiceId(serviceId);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setSelectedServiceId(null);
  };

  return (
    <div className="min-h-screen bg-[#07080a] text-gray-100 flex flex-col font-sans selection:bg-[#CFA868] selection:text-black">
      {/* Top Floating Glass Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with Interactive Glow and Direct Actions */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Instagram Stories Highlights Circles */}
        <StoriesHighlights />

        {/* Key Metrics / Social Proof Banner */}
        <StatsBanner />

        {/* Services & Treatment Menu with Category Filtering */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Interactive Draggable Before / After Transformation Slider */}
        <BeforeAfterSlider onOpenBooking={handleOpenBooking} />

        {/* Meet Shardae Rae — Founder, Awards & Story */}
        <FounderSection onOpenBooking={handleOpenBooking} />

        {/* The 4-Step The Bodi Genie Architecture */}
        <ProcessSection onOpenBooking={handleOpenBooking} />

        {/* Interactive @the_bodi_genie Instagram Feed with Likes, Reels, Modal */}
        <InstagramFeed onOpenBooking={handleOpenBooking} />

        {/* Real Client Reviews & Social Validation */}
        <TestimonialsSection />

        {/* Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* Stafford Private Clinic & Location Concierge */}
        <ContactLocation onOpenBooking={handleOpenBooking} />
      </main>

      {/* Sleek Dark Minimalist Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Multi-step Interactive Booking Engine Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        defaultServiceId={selectedServiceId}
      />
    </div>
  );
}
