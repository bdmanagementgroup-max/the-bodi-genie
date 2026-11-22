import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Check, Calendar as CalendarIcon, Clock, Sparkles, User, 
  Phone, Mail, Instagram, ShieldCheck, ChevronRight, ChevronLeft, 
  CheckCircle, ArrowRight, Download, MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { services, addOns } from '../data/services';

export default function BookingModal({ isOpen, onClose, defaultServiceId }) {
  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(defaultServiceId || services[0].id);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  
  // Date & Time states
  const [selectedDate, setSelectedDate] = useState('2026-11-25');
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  
  // Client details
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    instagram: '',
    notes: ''
  });

  const [bookingRef, setBookingRef] = useState('');

  // Update selected service if prop changes
  useEffect(() => {
    if (defaultServiceId) {
      setSelectedServiceId(defaultServiceId);
    }
  }, [defaultServiceId]);

  const currentService = services.find(s => s.id === selectedServiceId) || services[0];

  // Calculate total price
  const addOnsTotal = selectedAddOns.reduce((sum, addOnId) => {
    const item = addOns.find(a => a.id === addOnId);
    return sum + (item ? item.price : 0);
  }, 0);

  const totalPrice = currentService.price + addOnsTotal;

  // Toggle AddOn
  const toggleAddOn = (id) => {
    setSelectedAddOns(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Available dates (next 7 days)
  const availableDates = [
    { label: 'Today', day: 'Wed', date: '25 Nov', value: '2026-11-25' },
    { label: 'Tomorrow', day: 'Thu', date: '26 Nov', value: '2026-11-26' },
    { label: 'Fri', day: 'Fri', date: '27 Nov', value: '2026-11-27' },
    { label: 'Sat', day: 'Sat', date: '28 Nov', value: '2026-11-28' },
    { label: 'Mon', day: 'Mon', date: '30 Nov', value: '2026-11-30' },
    { label: 'Tue', day: 'Tue', date: '01 Dec', value: '2026-12-01' },
  ];

  const timeSlots = [
    { time: '09:30 AM', category: 'Morning' },
    { time: '11:00 AM', category: 'Morning' },
    { time: '01:30 PM', category: 'Afternoon' },
    { time: '03:15 PM', category: 'Afternoon' },
    { time: '05:00 PM', category: 'Evening' },
    { time: '06:30 PM', category: 'Evening' },
  ];

  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!clientInfo.name || !clientInfo.phone) {
      alert('Please enter your name and contact phone number.');
      return;
    }

    const ref = 'BG-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(ref);
    setStep(4);

    // Fire celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CFA868', '#DEC293', '#FFFFFF', '#946E37']
    });
  };

  const handleDownloadCalendar = () => {
    const calendarData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:The Bodi Genie - ${currentService.title}\nDESCRIPTION:Appointment with @the_bodi_genie. Ref: ${bookingRef}\nLOCATION:The Bodi Genie Clinic, Gainsborough Works, Stafford ST16 2PN\nSTATUS:CONFIRMED\nEND:VEVENT\nEND:VCALENDAR`;
    const blob = new Blob([calendarData], { type: 'text/calendar;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `TheBodiGenie-${bookingRef}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openWhatsAppConfirmation = () => {
    const message = encodeURIComponent(
      `Hi Shardae! I just booked my session at The Bodi Genie.\n\nBooking Ref: ${bookingRef}\nService: ${currentService.title}\nDate: ${selectedDate} at ${selectedTime}\nName: ${clientInfo.name}\nTotal: £${totalPrice}\n\nLooking forward to seeing you at Gainsborough Works!`
    );
    window.open(`https://wa.me/447858840783?text=${message}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        className="bg-[#0c0e14] border border-white/15 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative my-8 text-left"
      >
        {/* Header Bar */}
        <div className="px-6 py-4 bg-white/[0.02] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#CFA868]/10 flex items-center justify-center text-[#CFA868]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">The Bodi Genie Booking Concierge</h3>
              <p className="text-[11px] text-[#CFA868]">Official VIP Reservation System</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator (Steps 1 to 3) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-[#08090d] border-b border-white/5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 1 ? 'bg-[#CFA868] text-black' : 'bg-white/10 text-gray-400'
              }`}>
                1
              </span>
              <span className={step === 1 ? 'text-white font-medium' : 'text-gray-400'}>Protocol</span>
            </div>
            <div className="w-8 h-[1px] bg-white/10"></div>
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 2 ? 'bg-[#CFA868] text-black' : 'bg-white/10 text-gray-400'
              }`}>
                2
              </span>
              <span className={step === 2 ? 'text-white font-medium' : 'text-gray-400'}>Slot</span>
            </div>
            <div className="w-8 h-[1px] bg-white/10"></div>
            <div className="flex items-center gap-2">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                step >= 3 ? 'bg-[#CFA868] text-black' : 'bg-white/10 text-gray-400'
              }`}>
                3
              </span>
              <span className={step === 3 ? 'text-white font-medium' : 'text-gray-400'}>Details</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-7 max-h-[75vh] overflow-y-auto">
          {/* STEP 1: Select Service & Add-ons */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 block">
                  Select Contouring Protocol
                </label>
                <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                  {services.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                        selectedServiceId === s.id
                          ? 'bg-[#CFA868]/15 border-[#CFA868] shadow-md'
                          : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedServiceId === s.id ? 'border-[#CFA868] bg-[#CFA868]' : 'border-gray-500'
                        }`}>
                          {selectedServiceId === s.id && <div className="w-1.5 h-1.5 rounded-full bg-black"></div>}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white">{s.title}</p>
                          <p className="text-[11px] text-gray-400">{s.duration} • {s.tagline}</p>
                        </div>
                      </div>
                      <span className="font-serif font-bold text-sm sm:text-base text-[#DEC293]">
                        £{s.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 block">
                  Enhance Your Session (Optional Add-ons)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {addOns.map((addon) => {
                    const isSelected = selectedAddOns.includes(addon.id);
                    return (
                      <div
                        key={addon.id}
                        onClick={() => toggleAddOn(addon.id)}
                        className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-[#CFA868]/15 border-[#CFA868]'
                            : 'bg-white/[0.02] border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div>
                          <p className="font-semibold text-white">{addon.name}</p>
                          <p className="text-[10px] text-gray-400">{addon.duration}</p>
                        </div>
                        <span className="text-[#CFA868] font-bold">+£{addon.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Total Bar */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-400">Total Investment</p>
                  <p className="font-serif text-2xl font-bold text-[#DEC293]">£{totalPrice}</p>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110 shadow-md"
                >
                  <span>Select Date</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Date & Slot Picker */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 block">
                  Select Appointment Date
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {availableDates.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setSelectedDate(item.value)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        selectedDate === item.value
                          ? 'bg-[#CFA868] text-black border-[#CFA868] font-bold shadow-md'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <p className="text-[10px] uppercase opacity-75">{item.day}</p>
                      <p className="text-xs font-bold my-0.5">{item.date}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-3 block">
                  Select Time Slot (Stafford Clinic)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => setSelectedTime(slot.time)}
                      className={`py-3 px-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                        selectedTime === slot.time
                          ? 'bg-[#CFA868]/20 border-[#CFA868] text-white shadow-sm'
                          : 'bg-white/[0.02] border-white/5 text-gray-300 hover:border-white/15'
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#CFA868]" />
                        {slot.time}
                      </span>
                      <span className="text-[10px] text-gray-400">{slot.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#CFA868] to-[#B88F4C] text-black font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:brightness-110 shadow-md"
                >
                  <span>Client Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Client Details */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              <form onSubmit={handleConfirmBooking} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-300 mb-1 block">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Davies"
                        value={clientInfo.name}
                        onChange={(e) => setClientInfo({ ...clientInfo, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CFA868]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 mb-1 block">Phone Number (WhatsApp) *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="tel"
                        required
                        placeholder="+44 7123 456789"
                        value={clientInfo.phone}
                        onChange={(e) => setClientInfo({ ...clientInfo, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CFA868]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 mb-1 block">Email Address *</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="email"
                        required
                        placeholder="jessica@example.com"
                        value={clientInfo.email}
                        onChange={(e) => setClientInfo({ ...clientInfo, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CFA868]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-300 mb-1 block">Instagram Handle</label>
                    <div className="relative">
                      <Instagram className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="@yourhandle"
                        value={clientInfo.instagram}
                        onChange={(e) => setClientInfo({ ...clientInfo, instagram: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CFA868]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-300 mb-1 block">Specific Aesthetic Goal or Target Areas</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Waist snatching prior to vacation, stomach skin tightening..."
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({ ...clientInfo, notes: e.target.value })}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#CFA868]"
                  />
                </div>

                {/* Summary Box */}
                <div className="p-4 rounded-2xl bg-[#12161f] border border-[#CFA868]/30 space-y-2 text-xs">
                  <div className="flex justify-between text-gray-300">
                    <span>Protocol:</span>
                    <span className="font-semibold text-white">{currentService.title}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Date & Time:</span>
                    <span className="font-semibold text-[#DEC293]">{selectedDate} @ {selectedTime}</span>
                  </div>
                  <div className="flex justify-between text-gray-300 pt-2 border-t border-white/10">
                    <span className="font-bold text-white">Deposit / Session Balance:</span>
                    <span className="font-serif text-lg font-bold text-[#CFA868]">£{totalPrice}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-gray-300 hover:text-white text-xs font-semibold flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#CFA868] via-[#DEC293] to-[#B88F4C] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#CFA868]/30 transition-all flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Confirm & Lock In Slot</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 4: Success Confirmation */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6 py-4"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-1.5">
                <h3 className="font-serif text-3xl font-bold text-white">Reservation Confirmed!</h3>
                <p className="text-xs text-gray-300">
                  Your private suite has been locked in for <strong className="text-white">{selectedDate} at {selectedTime}</strong>.
                </p>
                <div className="inline-block mt-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#DEC293]">
                  Booking Ref: <span className="font-bold text-white">{bookingRef}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={openWhatsAppConfirmation}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  <span>Sync via WhatsApp</span>
                </button>

                <button
                  onClick={handleDownloadCalendar}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/15 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Add to Calendar (.ics)</span>
                </button>
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                <p>We look forward to welcoming you to The Bodi Genie. Drink plenty of water prior to arrival.</p>
                <button
                  onClick={onClose}
                  className="mt-3 text-[#CFA868] hover:underline font-semibold"
                >
                  Close & Return to Website
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
