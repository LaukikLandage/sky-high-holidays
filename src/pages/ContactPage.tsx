import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    country: '',
    travelDates: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you! Your quote request has been sent to our travel experts.');
  };

  return (
    <div className="pt-40 md:pt-48 pb-24 min-h-screen bg-white font-poppins selection:bg-orange-100 selection:text-[#FF7A00]">
      
      {/* 1. Header Section */}
      <section className="max-w-4xl mx-auto px-6 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-gray-400 uppercase tracking-[0.3em] mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-bold text-[#020617] tracking-tight leading-[1.1] mb-8">
            Talk to our <br />
            <span className="text-[#FF7A00]">travel experts</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Planning a trip? Tell us a little about your plans and one of our travel experts will get back with a custom itinerary and pricing within 24 hours.
          </p>
        </motion.div>
      </section>

      {/* 2. Form Section */}
      <section className="max-w-5xl mx-auto px-6 mb-32">
        <motion.form 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Left Column */}
            <div className="space-y-12">
              <FormInput 
                label="Full name*" 
                placeholder="John Doe" 
                value={formData.fullName}
                onChange={(v) => setFormData({...formData, fullName: v})}
                required
              />
              <FormInput 
                label="Mobile number*" 
                placeholder="+91 98XXXXXXXX" 
                value={formData.mobileNumber}
                onChange={(v) => setFormData({...formData, mobileNumber: v})}
                required
                type="tel"
              />
              <FormInput 
                label="Preferred travel dates" 
                placeholder="e.g. 10 Oct 2025 – 17 Oct 2025" 
                value={formData.travelDates}
                onChange={(v) => setFormData({...formData, travelDates: v})}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              <FormInput 
                label="Email address*" 
                placeholder="you@domain.com" 
                value={formData.email}
                onChange={(v) => setFormData({...formData, email: v})}
                required
                type="email"
              />
              <div className="flex flex-col group">
                <label className="text-sm font-bold text-[#020617] mb-2">Country of residence</label>
                <div className="relative">
                  <select 
                    className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#FF7A00] transition-colors appearance-none text-gray-700 font-medium cursor-pointer"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                  >
                    <option value="" disabled>Select one...</option>
                    <option value="India">India</option>
                    <option value="UAE">UAE</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-focus-within:text-[#FF7A00] transition-colors" />
                </div>
              </div>
              <FormInput 
                label="Budget (per person)" 
                placeholder="e.g. $5,000 – $10,000" 
                value={formData.budget}
                onChange={(v) => setFormData({...formData, budget: v})}
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col">
            <label className="text-sm font-bold text-[#020617] mb-2">Message*</label>
            <textarea 
              required
              rows={1}
              placeholder="Tell us your destination, must-see places, special requests..."
              className="w-full bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#FF7A00] transition-colors text-gray-700 font-medium resize-none overflow-hidden min-h-[60px]"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
          </div>

          {/* Privacy & Submit */}
          <div className="space-y-8 pt-4">
            <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-2xl">
              We respect your privacy. Your details are used only to plan your trip and will not be shared. By submitting, you agree to receive emails/calls about your booking.
            </p>
            <button 
              type="submit"
              className="px-10 py-4 bg-[#FF7A00] text-white rounded-full font-bold text-sm hover:bg-[#e66e00] transition-all hover:shadow-xl hover:shadow-orange-100 active:scale-[0.98]"
            >
              Request a Quote
            </button>
          </div>
        </motion.form>
      </section>

      {/* 3. Contact Info Section */}
      <section className="bg-gray-50/50 py-24 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <InfoCard 
              icon={Phone}
              title="Call"
              description="AVAILABLE 24/7"
              detail="+91 8700558065"
              href="tel:+918700558065"
              iconBg="bg-orange-500 text-white"
            />
            <InfoCard 
              icon={Mail}
              title="Email"
              description="QUICK RESPONSE"
              detail="ashwin@skyhightravelandtourism.com"
              href="mailto:ashwin@skyhightravelandtourism.com"
              iconBg="bg-white text-[#FF7A00] shadow-sm border border-gray-100"
            />
            <InfoCard 
              icon={MapPin}
              title="Location"
              description="VISIT OUR OFFICE"
              detail="Wanowrie, Pune"
              href="https://share.google/DfCq2DBjfqAv6ieIR"
              iconBg="bg-white text-[#FF7A00] shadow-sm border border-gray-100"
            />
          </div>
        </div>
      </section>

      {/* 4. Map Section */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#020617] uppercase tracking-wider">Our Office Location</h2>
          <div className="w-12 h-1 bg-[#FF7A00] mx-auto mt-4 rounded-full"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-[450px] bg-gray-100 rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 grayscale hover:grayscale-0 transition-all duration-700"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.381395996614!2d73.8966563!3d18.5113947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1df5c3f912d%3A0x600f7e4e1f7a6f2!2sFatima%20Nagar%2C%20Wanowrie%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714571234567!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </section>

    </div>
  );
}

function FormInput({ label, placeholder, value, onChange, type = "text", required = false }: any) {
  return (
    <div className="flex flex-col group">
      <label className="text-sm font-bold text-[#020617] mb-2">{label}</label>
      <input 
        required={required}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-b border-gray-200 py-4 outline-none focus:border-[#FF7A00] transition-colors text-gray-700 font-medium placeholder:text-gray-300"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, description, detail, href, iconBg }: any) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group"
    >
      <div className={`w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${iconBg}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-bold text-[#020617] mb-2">{title}</h3>
      <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">{description}</p>
      <p className="text-gray-500 font-medium text-sm leading-relaxed max-w-[200px] break-words">{detail}</p>
    </motion.a>
  );
}
