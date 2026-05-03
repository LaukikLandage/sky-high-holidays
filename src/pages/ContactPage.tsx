import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-48 pb-24 min-h-screen bg-[#FDF5E6]/30">
      {/* Centered Heading */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-[#020617] tracking-tight mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-xl mx-auto font-medium"
        >
          We'd love to hear from you. Whether you have a question about travel packages or anything else, our team is ready to answer.
        </motion.p>
      </section>

      {/* Two Column Layout: Map + Form */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] w-full rounded-2xl overflow-hidden shadow-xl border border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.381395996614!2d73.8966563!3d18.5113947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1df5c3f912d%3A0x600f7e4e1f7a6f2!2sFatima%20Nagar%2C%20Wanowrie%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714571234567!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-110 brightness-105"
            ></iframe>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg shadow-black/5 border border-gray-100"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Contact Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 00000 00000" 
                    className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Topic of inquiry" 
                    className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Your Message</label>
                <textarea 
                  placeholder="How can we help?" 
                  className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition-all min-h-[100px] resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center pt-2">
                <button className="px-10 py-3 bg-[#020617] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF7A00] transition-all hover:shadow-lg hover:shadow-orange-200 hover:scale-105 active:scale-95 flex items-center gap-2">
                  Send Now
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Bottom: Contact Info Section */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <InfoCard 
            icon={Phone}
            title="Call"
            description="Available 24/7"
            detail="+91 8700558065"
            href="tel:+918700558065"
          />
          <InfoCard 
            icon={Mail}
            title="Email"
            description="Quick response"
            detail="ashwin@skyhightravelandtourism.com"
            href="mailto:ashwin@skyhightravelandtourism.com"
          />
          <InfoCard 
            icon={MapPin}
            title="Location"
            description="Visit our office"
            detail="Wanowrie, Pune"
            href="https://share.google/DfCq2DBjfqAv6ieIR"
          />
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon: Icon, title, description, detail, href }: any) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : '_self'}
      rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all duration-300"
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-50 mb-4 group-hover:bg-[#FF7A00] transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-lg font-bold text-[#020617] mb-1">{title}</h3>
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{description}</p>
      <p className="text-gray-600 font-medium text-sm">{detail}</p>
    </motion.a>
  );
}
