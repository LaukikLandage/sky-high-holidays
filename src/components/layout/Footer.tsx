import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { DESTINATIONS } from '@/lib/constants';

export function Footer() {
  const instagramImages = DESTINATIONS.slice(0, 6).map(d => d.image);

  return (
    <footer className="bg-[#020617] text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          
          {/* Section 1: Brand & Contact */}
          <div className="lg:col-span-4 space-y-10">
            <Link to="/" className="inline-block">
              <img 
                src="/logo.png" 
                alt="Sky High Holidays" 
                className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            
            <div className="space-y-6 text-gray-400">
              <a 
                href="https://share.google/DfCq2DBjfqAv6ieIR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00]/20 transition-colors">
                  <MapPin className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <span className="leading-relaxed hover:text-[#FF7A00] transition-colors">
                  Shop no 5, near Diamond Bakery Lane, Fatima Nagar, Wanowrie, Pune, Maharashtra 411013
                </span>
              </a>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00]/20 transition-colors">
                  <Phone className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <a href="tel:+918700558067" className="hover:text-[#FF7A00] transition-colors font-medium">+91 8700558067</a>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#FF7A00]/20 transition-colors">
                  <Mail className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <a href="mailto:ashwin@skyhightravelandtourism.com" className="hover:text-[#FF7A00] transition-colors font-medium">
                  ashwin@skyhightravelandtourism.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <SocialIcon icon={FaFacebookF} href="https://www.facebook.com/share/1AfG4C3U3a/?mibextid=wwXIfr" label="Facebook" />
              <SocialIcon icon={FaInstagram} href="https://www.instagram.com/skyhigh_holidays_?igsh=bXp3dm9pdGZ0bHZx" label="Instagram" />
              <SocialIcon icon={FaYoutube} href="https://youtube.com/@skyhigh_holidays?si=iXQ4H-RJq747JF2G" label="YouTube" />
              <SocialIcon icon={FaWhatsapp} href="https://wa.me/918700558067" label="WhatsApp" />
            </div>
          </div>

          {/* Section 2: Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 md:gap-16">
            <div className="space-y-8">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 inline-block whitespace-nowrap">Quick Links</h3>
              <ul className="space-y-5">
                <FooterLink to="/">Home</FooterLink>
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/#international">International</FooterLink>
                <FooterLink to="/#domestic">Domestic</FooterLink>
                <FooterLink to="/contact">Contact Us</FooterLink>
                <FooterLink to="/enquiry">Book a Trip</FooterLink>
              </ul>
            </div>
            <div className="space-y-8">
              <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 inline-block whitespace-nowrap">Support</h3>
              <ul className="space-y-5">
                <FooterLink to="/privacy">Privacy Policy</FooterLink>
                <FooterLink to="/cancellation">Cancellation Policy</FooterLink>
                <FooterLink to="/terms">Terms & Conditions</FooterLink>
              </ul>
            </div>
          </div>

          {/* Section 3: Instagram Grid */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white border-b border-white/10 pb-4 inline-block whitespace-nowrap">Instagram Feed</h3>
            <div className="grid grid-cols-3 gap-3">
              {instagramImages.map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden group relative shadow-2xl">
                  <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#FF7A00]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <FaInstagram className="text-white w-6 h-6 scale-75 group-hover:scale-100 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="border-t border-white/5 pt-12 mb-10 text-center">
          <h4 className="text-gray-400 text-xs font-bold uppercase tracking-[0.25em] mb-8">Payment Methods</h4>
          <div className="flex justify-center mb-10">
            <img 
              src="/payment_methods_strip.png" 
              alt="Payment Methods" 
              className="max-w-4xl w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm font-medium">
            <div>
              © {new Date().getFullYear()} Sky High Holidays. All Rights Reserved.
            </div>
            <div className="flex items-center gap-1">
              <span>Website by</span>
              <a 
                href="https://laukiklandage.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-[#FF7A00] hover:underline transition-all duration-300"
              >
                LaukikLandage.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon, href, label }: { icon: any, href: string, label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-11 h-11 bg-white/5 text-white rounded-xl flex items-center justify-center hover:bg-[#FF7A00] hover:text-white transition-all hover:scale-110 hover:-translate-y-1 shadow-lg border border-white/10">
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLink({ to, children }: { to: string, children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-gray-400 hover:text-[#FF7A00] transition-all flex items-center gap-3 group whitespace-nowrap">
        <ChevronRight className="w-4 h-4 text-[#FF7A00] opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1 shrink-0" />
        <span className="font-medium">{children}</span>
      </Link>
    </li>
  );
}
