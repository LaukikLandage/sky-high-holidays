import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { useDestinationStore } from '@/store/useDestinationStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export function DomesticCarousel() {
  const { destinations } = useDestinationStore();
  const domesticDestinations = destinations.filter(d => d.type === 'domestic');

  return (
    <section id="domestic" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
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
            className="max-w-2xl text-center md:text-left"
          >
            <p className="text-gray-600 text-lg md:text-xl mt-6 font-medium leading-relaxed">
              Experience the incredible diversity of our beautiful nation. From snow-capped mountains to serene backwaters.
            </p>
          </motion.div>

          {/* Navigation Buttons (Desktop Only) */}
          <div className="hidden md:flex gap-4 mb-2">
            <button
              className="domestic-prev w-14 h-14 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center text-[#020617] hover:bg-[#020617] hover:text-white transition-all active:scale-90 cursor-pointer z-20"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="domestic-next w-14 h-14 rounded-full bg-[#020617] text-white shadow-lg flex items-center justify-center hover:bg-[#FF7A00] transition-all active:scale-90 cursor-pointer z-20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative group">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.domestic-prev',
              nextEl: '.domestic-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="!overflow-visible md:!overflow-hidden"
          >
            {domesticDestinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={`/international/${destination.slug}`}
                    className="group relative block w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-500 hover:scale-[1.03] hover:shadow-orange-200/50"
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
                    <div className="absolute bottom-8 left-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl md:text-3xl font-black mb-1.5 tracking-tight group-hover:text-[#FF7A00] transition-colors">
                        {destination.name}
                      </h3>
                      <p className="text-white/60 text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                        {destination.location}
                      </p>
                    </div>

                    {/* View Details Badge */}
                    <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </Link>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}


