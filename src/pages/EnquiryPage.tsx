import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Send, MapPin, Calendar, Users, MessageSquare, Phone, User, Mail } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionHeader } from '../components/ui/SectionHeader';

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    travelers: '2',
    message: ''
  });

  useEffect(() => {
    const dest = searchParams.get('destination');
    if (dest) {
      // Basic sanitization: strip any characters that could be part of a script
      const sanitizedDest = dest.replace(/[<>{}()[\]]/g, '');
      setFormData(prev => ({ ...prev, destination: sanitizedDest }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry Submitted:', formData);
    // Add submission logic here
    alert('Thank you for your enquiry! Our team will contact you shortly.');
  };

  return (
    <div className="relative pt-52 md:pt-60 pb-24 bg-[#F9FAFB] min-h-screen overflow-hidden">
      {/* Background World Map Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 flex items-center justify-center overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/e/ec/World_Map_Blank.svg" 
          alt="World Map" 
          className="w-[150%] max-w-none animate-move-map grayscale"
        />
      </div>



      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <SectionHeader 
          subtitle="BOOKING FORM"
          title={formData.destination ? `Plan Your Trip to ${formData.destination}` : 'Plan Your Dream Trip'}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium mb-16">
            Fill in your details and our travel experts will get in touch with you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-200/20 p-8 md:p-12 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Full Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                    <input
                      required
                      type="email"
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Phone Number</label>
                  <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Destination */}
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Destination</label>
                  <div className="relative group">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Maldives"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      value={formData.destination}
                      onChange={e => setFormData({ ...formData, destination: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Travel Date */}
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Travel Date</label>
                  <div className="relative group">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                    <input
                      required
                      type="date"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium"
                      value={formData.travelDate}
                      onChange={e => setFormData({ ...formData, travelDate: e.target.value })}
                    />
                  </div>
                </div>

                {/* Travelers */}
                <div className="space-y-2">
                  <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Number of Travelers</label>
                  <div className="relative group">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                    <select
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium appearance-none"
                      value={formData.travelers}
                      onChange={e => setFormData({ ...formData, travelers: e.target.value })}
                    >
                      {[1, 2, 3, 4, 5, '6+'].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Traveler' : 'Travelers'}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-sm font-black text-[#020617] uppercase tracking-widest ml-1">Special Requests</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 group-focus-within:text-[#FF7A00] transition-colors" />
                  <textarea
                    rows={4}
                    placeholder="Tell us about your preferences..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#FF7A00] focus:ring-4 focus:ring-orange-50 outline-none transition-all font-medium resize-none"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-16 rounded-full text-lg font-black uppercase tracking-widest shadow-2xl hover:shadow-orange-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Book Now
                <Send className="w-5 h-5 ml-3" />
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center text-gray-400 font-bold uppercase tracking-widest text-xs">
            24/7 Support • Best Price Guarantee • Expert Planning
          </div>
        </motion.div>
      </div>
    </div>
  );
}
