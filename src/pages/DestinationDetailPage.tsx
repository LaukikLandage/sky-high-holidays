import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Clock, ChevronRight, ArrowLeft,
  CheckCircle2, XCircle, ChevronDown, ChevronUp
} from 'lucide-react';
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
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${isOpen ? 'bg-[#FF7A00] text-white' : 'bg-orange-50 text-[#FF7A00] group-hover:bg-[#FF7A00] group-hover:text-white'}`}>
            D{day}
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
    alert('Thank you for your enquiry! Our travel experts will get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-48 font-sans text-[#020617]">
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
                
                <button 
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-[#FF7A00] text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 shadow-lg"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % gallery.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 hover:bg-[#FF7A00] text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex gap-[12px] overflow-x-auto pb-2 no-scrollbar items-center snap-x">
                {gallery.map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveImageIndex(i)}
                    className={`relative shrink-0 w-[120px] h-[80px] rounded-[12px] overflow-hidden transition-all duration-300 snap-center ${
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
                    <MapPin className="w-4 h-4 text-[#FF7A00]" />
                    {destination.location}
                  </span>
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

              {/* Inclusions & Exclusions */}
              {(destination.inclusions?.length > 0 || destination.exclusions?.length > 0) && (
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                      Inclusions
                    </h4>
                    <ul className="space-y-4">
                      {destination.inclusions?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5 opacity-50" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white p-8 rounded-[20px] shadow-sm border border-gray-100">
                    <h4 className="text-xl font-bold mb-6 flex items-center gap-3">
                      <XCircle className="w-6 h-6 text-red-500" />
                      Exclusions
                    </h4>
                    <ul className="space-y-4">
                      {destination.exclusions?.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm font-medium">
                          <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5 opacity-50" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
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
              
              {/* Package Poster Image */}
              <div className="w-full aspect-[4/5] bg-gray-100 rounded-[24px] overflow-hidden shadow-2xl border-4 border-white group relative">
                <img 
                  src={destination.image} 
                  alt={`${destination.name} Package Poster`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Enquiry Form */}
              <div className="bg-white rounded-[20px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-semibold text-[#020617] mb-2 font-poppins">Enquire Now</h2>
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
                    Send Enquiry
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
  );
}
