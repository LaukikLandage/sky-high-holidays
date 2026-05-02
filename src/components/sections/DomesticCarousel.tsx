import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useDestinationStore } from '@/store/useDestinationStore';

export function DomesticCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { destinations } = useDestinationStore();
  const domesticDestinations = destinations.filter(d => d.type === 'domestic');

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="domestic" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader 
          subtitle="EXPLORE INDIA"
          title="Discover India"
        />
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
          >
            <p className="text-gray-600 text-base md:text-lg mt-6 font-medium leading-relaxed">
              Experience the incredible diversity of our beautiful nation. From snow-capped mountains to serene backwaters.
            </p>
          </motion.div>

          {/* Navigation Buttons (Desktop Only) */}
          <div className="hidden md:flex gap-4 mb-2">
            <button
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[#020617] hover:bg-[#020617] hover:text-white transition-all active:scale-90"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-[#020617] text-white shadow-lg flex items-center justify-center hover:bg-[#FF7A00] transition-all active:scale-90"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {domesticDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="min-w-[85%] sm:min-w-[45%] lg:min-w-[320px] snap-start"
            >
              <Link 
                to={`/international/${destination.slug}`}
                className="group relative block h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-orange-200/50"
              >
                {/* Background Image with Zoom */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-[#020617]/80 transition-all duration-500"></div>

                {/* Text Content (Bottom Left) */}
                <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl font-black mb-2 tracking-tight group-hover:text-[#FF7A00] transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-white/60 text-sm font-black uppercase tracking-[0.2em]">
                    {destination.location}
                  </p>
                </div>

                {/* View Details Badge */}
                <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Gradient Fades (Desktop Only) */}
      <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10 opacity-50"></div>
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 opacity-50"></div>
    </section>
  );
}

