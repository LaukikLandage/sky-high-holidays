import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceMarquee } from '../components/sections/ServiceMarquee';



export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-48 font-sans text-[#020617]">
      
      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <SectionHeader 
          subtitle="REVIEWS"
          title="What Our Travelers Say"
        />
        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto -mt-10 font-medium">
          Real experiences from real travelers who explored the world with Sky High Holidays
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Happy Travelers' },
            { value: '4.9', label: 'Average Rating' },
            { value: '50+', label: 'Destinations' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100"
            >
              <div className="text-3xl md:text-4xl font-black text-[#FF7A00] mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>



      {/* Video Reviews Section — Placeholder for YouTube Shorts */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-24 mb-16">
        <SectionHeader 
          subtitle="VIDEO REVIEWS"
          title="Watch Travel Stories"
        />
        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto -mt-10 font-medium mb-16">
          Coming soon — real travel videos and YouTube shorts from our customers
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="aspect-[9/16] bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-4 group hover:border-[#FF7A00]/30 hover:bg-orange-50/30 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-orange-100 transition-shadow">
                <PlayCircle className="w-8 h-8 text-gray-300 group-hover:text-[#FF7A00] transition-colors" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#FF7A00]/60 transition-colors">
                Coming Soon
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <ServiceMarquee backgroundColor="white" />
      </div>
    </div>
  );
}
