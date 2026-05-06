import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, ChevronRight, ArrowLeft, ChevronLeft,
  CheckCircle2, XCircle, ChevronDown, ChevronUp, Bed,
  Utensils, Hotel, Plane, CarTaxiFront, Ticket, BadgeCheck,
  ShieldX, Wallet, CircleOff
} from 'lucide-react';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaLink } from 'react-icons/fa';
import { Button } from '../components/ui/Button';
import { useDestinationStore } from '@/store/useDestinationStore';
import { ServiceMarquee } from '../components/sections/ServiceMarquee';

// Reusable Accordion Component for Itinerary
function AccordionItem({ day, title, content, isOpen, onClick }: { day: number, title: string, content: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden mb-4 shadow-sm hover:shadow-md transition-shadow duration-300">
      <button 
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-auto px-4 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${isOpen ? 'bg-[#FF7A00] text-white' : 'bg-orange-50 text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white'}`}>
            Day {day}
          </div>
          <h4 className="text-lg font-bold text-[#020617]">{title}</h4>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[#FF7A00]" /> : <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-[#FF7A00]" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 text-gray-600 border-t border-gray-50 leading-relaxed">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Icon mapping helper
const iconMap: Record<string, any> = {
  Utensils, Hotel, Plane, CarTaxiFront, Ticket, BadgeCheck,
  ShieldX, Wallet, CircleOff, CheckCircle2, XCircle
};

function ItemIcon({ name, className }: { name?: string, className?: string }) {
  const IconComponent = name ? iconMap[name] : null;
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}

export function DestinationDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { getDestinationBySlug } = useDestinationStore();

  const destination = getDestinationBySlug(slug || '');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    travelers: '2',
    message: ''
  });

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);
  const [openAccordionDay, setOpenAccordionDay] = useState<number | null>(1);

  // Auto-slide gallery
  useEffect(() => {
    if (!destination || isGalleryHovered) return;
    const galleryLen = destination.gallery?.length || 0;
    if (galleryLen === 0) return;
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % galleryLen);
    }, 4000);
    return () => clearInterval(interval);
  }, [destination, isGalleryHovered]);

  // --- NOT FOUND ---
  if (!destination) {
    return (
      <div className="pt-48 min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-3xl font-black text-[#020617]">Destination Not Found</h2>
          <p className="text-gray-600 font-medium">Sorry, we couldn't find the destination: <strong>{slug}</strong></p>
          <Button 
            onClick={() => navigate('/destinations')}
            className="w-full h-14 rounded-xl bg-[#020617] text-white hover:bg-[#FF7A00] transition-all shadow-xl font-bold uppercase tracking-widest text-xs"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </Button>
        </div>
      </div>
    );
  }

  // Safe gallery array
  const gallery = destination.gallery?.length > 0 ? destination.gallery : [destination.image];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Enquiry Data:', formData);
    alert('Thank you for your booking request! Our travel experts will get back to you within 24 hours.');
  };

  return (
    <>
      <div className="min-h-screen bg-[#F9FAFB] pt-48 font-poppins text-[#020617]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
          <Link to="/" className="hover:text-[#FF7A00] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/#international" className="hover:text-[#FF7A00] transition-colors">Destinations</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#020617]">{destination.name}</span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 pt-10 md:pt-14 lg:pt-16">
        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          
          {/* LEFT SIDE: Gallery + Details */}
          <div className="lg:col-span-7 space-y-16">
            {/* 
                IMPORTANT: Gallery scrolling applies ONLY to gallery section. 
                Do NOT add scroll to cover/poster. 
                Use correct folders — cover, poster, gallery.
            */}
            
            {/* 1. IMAGE GALLERY */}
            <section 
              className="space-y-4"
              onMouseEnter={() => setIsGalleryHovered(true)}
              onMouseLeave={() => setIsGalleryHovered(false)}
            >
              <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden shadow-xl group bg-gray-100">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={gallery[activeImageIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    src={gallery[activeImageIndex]} 
                    alt={`${destination.name} Image ${activeImageIndex + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows - Visible on all sizes */}
                <button 
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-[#FF7A00] text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % gallery.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/40 hover:bg-[#FF7A00] text-white rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-lg"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Horizontal Scrollable Thumbnails - ONLY for Gallery */}
              <div className="flex gap-[12px] overflow-x-auto pb-4 no-scrollbar items-center snap-x scroll-smooth">
                {gallery.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative shrink-0 w-[100px] md:w-[120px] h-[65px] md:h-[80px] rounded-[12px] overflow-hidden transition-all duration-300 snap-center ${
                      activeImageIndex === i 
                        ? 'ring-2 ring-offset-2 ring-[#FF7A00] scale-[1.02] opacity-100 z-10' 
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </section>

            {/* 2. HEADER SECTION */}
            <section className="bg-white p-8 rounded-[24px] border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-[#020617] tracking-tight mb-3">
                  {destination.name}
                </h1>
                <div className="flex items-center gap-4 text-gray-500 font-medium text-sm">
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
                    <Clock className="w-4 h-4 text-[#FF7A00]" />
                    {destination.duration}
                  </span>
                </div>
              </div>
              <div className="md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-1">STARTING PRICE</div>
                <div className="text-4xl font-black text-[#FF7A00] tracking-tight">{destination.price}</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Per Adult</div>
              </div>
            </section>

            {/* 3. SECTIONS */}
            <div className="space-y-16">
              
              {/* Overview */}
              <section className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-center">Overview</h3>
                  <div className="w-12 h-1 bg-[#FF7A00] mx-auto mt-3 rounded-full"></div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg text-center max-w-4xl mx-auto">
                  {destination.overview}
                </p>
              </section>


              {/* Itinerary Accordion */}
              {destination.itinerary?.length > 0 && (
                <section className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-center uppercase tracking-wider">Itinerary</h3>
                    <div className="w-12 h-1 bg-[#FF7A00] mx-auto mt-3 rounded-full"></div>
                  </div>
                  <div className="max-w-4xl mx-auto">

                    {destination.itinerary.map((item) => (
                      <AccordionItem 
                        key={item.day}
                        day={item.day}
                        title={item.title}
                        content={item.content}
                        isOpen={openAccordionDay === item.day}
                        onClick={() => setOpenAccordionDay(openAccordionDay === item.day ? null : item.day)}
                      />
                    ))}
                  </div>
                </section>
              )}


              {/* Inclusions & Exclusions Card */}
              {(destination.inclusions?.length > 0 || destination.exclusions?.length > 0) && (
                <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    
                    {/* Inclusions Column */}
                    <div className="p-8 md:p-10 space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                        </div>
                        <h4 className="text-sm font-black text-[#020617] uppercase tracking-[0.2em]">Inclusions</h4>
                      </div>
                      <ul className="space-y-5">
                        {destination.inclusions?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 group cursor-default">
                            <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
                              <ItemIcon 
                                name={item.icon || 'CheckCircle2'} 
                                className="w-4 h-4 text-green-500/60 group-hover:text-green-500 transition-colors" 
                              />
                            </div>
                            <span className="text-[13px] font-bold text-gray-500 group-hover:text-[#020617] transition-colors leading-relaxed">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Exclusions Column */}
                    <div className="p-8 md:p-10 space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
                          <XCircle className="w-4 h-4 text-red-500" />
                        </div>
                        <h4 className="text-sm font-black text-[#020617] uppercase tracking-[0.2em]">Exclusions</h4>
                      </div>
                      <ul className="space-y-5">
                        {destination.exclusions?.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-4 group cursor-default">
                            <div className="mt-1 transition-transform duration-300 group-hover:scale-110">
                              <ItemIcon 
                                name={item.icon || 'XCircle'} 
                                className="w-4 h-4 text-red-500/60 group-hover:text-red-500 transition-colors" 
                              />
                            </div>
                            <span className="text-[13px] font-bold text-gray-500 group-hover:text-[#020617] transition-colors leading-relaxed">
                              {item.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              )}


              {/* Policies */}
              <section className="max-w-4xl mx-auto space-y-12 bg-white p-10 rounded-[24px] shadow-sm border border-gray-100">
                {destination.paymentPolicy?.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#020617] border-l-4 border-[#FF7A00] pl-4">Payment Policy</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm ml-4">
                      {destination.paymentPolicy.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                )}
                
                {destination.cancellationPolicy?.length > 0 && (
                  <div>
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#020617] border-l-4 border-[#FF7A00] pl-4">Cancellation Policy</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm ml-4">
                      {destination.cancellationPolicy.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                  </div>
                )}

                {destination.terms && (
                  <div>
                    <h4 className="text-lg font-bold mb-4 uppercase tracking-widest text-[#020617] border-l-4 border-[#FF7A00] pl-4">Terms & Conditions</h4>
                    <p className="text-xs text-gray-500 leading-relaxed ml-4">
                      {destination.terms}
                    </p>
                  </div>
                )}
              </section>

            </div>
          </div>

          {/* RIGHT SIDE: Poster + Enquiry Form */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              {/* Redesigned Accommodation Carousel */}
              {destination.accommodationDetails && destination.accommodationDetails.length > 0 && (
                <div className="space-y-8">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider">Accommodation Details</h3>
                    <div className="w-10 h-1 bg-[#FF7A00] mx-auto mt-3 rounded-full"></div>
                  </div>

                  <div className="relative group">
                    {/* Navigation Arrows (Desktop Only) */}
                    <button 
                      onClick={() => {
                        const container = document.getElementById('accommodation-carousel');
                        if (container) container.scrollBy({ left: -420, behavior: 'smooth' });
                      }}
                      className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl text-gray-400 hover:text-[#FF7A00] hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={() => {
                        const container = document.getElementById('accommodation-carousel');
                        if (container) container.scrollBy({ left: 420, behavior: 'smooth' });
                      }}
                      className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-gray-100 shadow-xl text-gray-400 hover:text-[#FF7A00] hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Carousel Container */}
                    <div 
                      className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 no-scrollbar snap-x snap-mandatory scroll-smooth"
                      id="accommodation-carousel"
                      onScroll={(e) => {
                        const container = e.currentTarget;
                        const scrollLeft = container.scrollLeft;
                        const cardWidth = container.offsetWidth - 32; // adjusted for padding
                        const newIndex = Math.round(scrollLeft / cardWidth);
                        const dots = document.querySelectorAll('.acc-dot');
                        dots.forEach((dot, idx) => {
                          if (idx === newIndex) {
                            dot.classList.add('bg-[#FF7A00]', 'w-6');
                            dot.classList.remove('bg-gray-200', 'w-2');
                          } else {
                            dot.classList.remove('bg-[#FF7A00]', 'w-6');
                            dot.classList.add('bg-gray-200', 'w-2');
                          }
                        });
                      }}
                    >
                      {destination.accommodationDetails.map((stay, index) => (
                        <div 
                          key={index}
                          className="min-w-full sm:min-w-[420px] snap-center px-2"
                        >
                          <motion.div 
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 h-full flex flex-col transition-all duration-500 hover:shadow-orange-200/20 group/card"
                          >
                            {/* Hotel Image with Gradient Overlay */}
                            <div className="relative h-48 md:h-56 overflow-hidden">
                              <img 
                                src={stay.image || `https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800`} 
                                alt={stay.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"></div>
                              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                                <div className="text-white">
                                  <span className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-1 block">Stay Details</span>
                                  <h4 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                                    {stay.name}
                                  </h4>
                                </div>
                                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 text-center shadow-lg">
                                  <span className="text-xl font-bold text-[#FF7A00] block leading-none">{stay.nights}</span>
                                  <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest mt-1 block">Nights</span>
                                </div>
                              </div>
                            </div>

                            <div className="p-8 md:p-10 flex flex-col justify-between flex-grow">
                              <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                  <div className="p-2.5 rounded-xl bg-orange-50/50">
                                    <Bed className="w-5 h-5 text-[#FF7A00]" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-black text-gray-400 block uppercase tracking-widest mb-0.5">Room Selection</span>
                                    <span className="text-sm md:text-base font-semibold text-gray-600">
                                      {stay.roomType}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-3">
                                  <div className="p-2.5 rounded-xl bg-orange-50/50">
                                    <Utensils className="w-5 h-5 text-[#FF7A00]" />
                                  </div>
                                  <div>
                                    <span className="text-[10px] font-black text-gray-400 block uppercase tracking-widest mb-0.5">Meal Plan</span>
                                    <span className="text-sm md:text-base font-semibold text-gray-600">
                                      {stay.meals || 'Daily Breakfast Included'}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-8 pt-6 border-t border-gray-50">
                                <p className="text-[10px] font-medium text-gray-400 italic leading-relaxed">
                                  Note: Hotels are subject to availability. Similar category hotels may be provided if unavailable.
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-2">
                      {destination.accommodationDetails.map((_, i) => (
                        <div 
                          key={i}
                          className={`acc-dot h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-[#FF7A00] w-6' : 'bg-gray-200 w-2'}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Share Feature */}
              <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 text-center">
                <h3 className="text-sm font-bold text-[#020617] uppercase tracking-widest mb-4">Send to Your Travel Buddy</h3>
                <div className="flex items-center justify-center gap-3">
                  <button 
                    onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(`Check out this travel package to ${destination.name}: ${window.location.href}`)}`, '_blank')}
                    className="w-10 h-10 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full flex items-center justify-center transition-all"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-10 h-10 bg-[#1877F2]/10 text-[#1877F2] hover:bg-[#1877F2] hover:text-white rounded-full flex items-center justify-center transition-all"
                  >
                    <FaFacebookF className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied! Share it on Instagram or anywhere else.');
                    }}
                    className="w-10 h-10 bg-[#E1306C]/10 text-[#E1306C] hover:bg-[#E1306C] hover:text-white rounded-full flex items-center justify-center transition-all"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }}
                    className="w-10 h-10 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-full flex items-center justify-center transition-all"
                  >
                    <FaLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="bg-white rounded-[20px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold text-[#020617] mb-2 font-poppins">Book Now</h2>
                  <div className="w-12 h-[3px] bg-[#FF7A00] rounded-full mx-auto" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-4">
                    <input 
                      required
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-5 py-3.5 rounded-[12px] bg-[#f5f5f5] border-2 border-transparent focus:bg-white focus:border-[#FF7A00] outline-none transition-all font-medium text-gray-700 text-sm"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      required
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full px-5 py-3.5 rounded-[12px] bg-[#f5f5f5] border-2 border-transparent focus:bg-white focus:border-[#FF7A00] outline-none transition-all font-medium text-gray-700 text-sm"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                    <input 
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-5 py-3.5 rounded-[12px] bg-[#f5f5f5] border-2 border-transparent focus:bg-white focus:border-[#FF7A00] outline-none transition-all font-medium text-gray-700 text-sm"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input 
                        required
                        type="number"
                        min="1"
                        placeholder="Travelers"
                        className="w-full px-5 py-3.5 rounded-[12px] bg-[#f5f5f5] border-2 border-transparent focus:bg-white focus:border-[#FF7A00] outline-none transition-all font-medium text-gray-700 text-sm"
                        value={formData.travelers}
                        onChange={e => setFormData({...formData, travelers: e.target.value})}
                      />
                      <input 
                        required
                        type="date"
                        className="w-full px-5 py-3.5 rounded-[12px] bg-[#f5f5f5] border-2 border-transparent focus:bg-white focus:border-[#FF7A00] outline-none transition-all font-medium text-gray-700 text-xs sm:text-sm"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <textarea 
                      placeholder="Any specific requirements?"
                      rows={4}
                      className="w-full px-5 py-3.5 rounded-[12px] bg-[#f5f5f5] border-2 border-transparent focus:bg-white focus:border-[#FF7A00] outline-none transition-all font-medium text-gray-700 text-sm resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full h-14 rounded-full bg-[#020617] text-white hover:bg-[#FF7A00] hover:text-[#020617] font-bold uppercase tracking-[0.1em] text-sm transition-all duration-300 mt-6"
                  >
                    Book Now
                  </Button>
                </form>

              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="mt-32">
        <ServiceMarquee backgroundColor="white" />
      </div>
    </div>
    </>
  );
}
