import { Heart, MessageCircle, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { TRAVEL_STORIES } from '@/lib/constants';
import { motion } from 'framer-motion';

export function TravelStories() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionHeader 
            subtitle="TRAVEL COMMUNITY"
            title="Real Travel Stories From Around The World"
          />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join our community of travelers sharing their incredible experiences and inspiring others to explore.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TRAVEL_STORIES.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={story.image}
                alt={`Travel story ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <div className="flex items-center gap-1.5 font-medium hover:text-[#FFC107] transition-colors">
                    <Heart className="w-5 h-5" />
                    <span>{story.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium hover:text-[#FFC107] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span>{story.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 text-[#000000] font-bold text-lg hover:text-[#FFC107] transition-colors group">
            View All Stories
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
