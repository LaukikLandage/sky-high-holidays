import { useState } from 'react';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ServiceMarquee } from '../components/sections/ServiceMarquee';



export default function ReviewsPage() {
  const [playingId, setPlayingId] = useState<number | null>(null);

  const videoReviews = [
    {
      id: 1,
      title: "Guest Review",
      videoId: "cpZDj9yHIvo",
      active: true,
      thumbnail: "https://img.youtube.com/vi/cpZDj9yHIvo/maxresdefault.jpg"
    },
    { id: 2, title: "Coming Soon", active: false },
    { id: 3, title: "Coming Soon", active: false },
    { id: 4, title: "Coming Soon", active: false },
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-52 md:pt-60 font-poppins text-[#020617] overflow-x-hidden">
      
      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mb-16 text-center">
        <SectionHeader 
          subtitle="REVIEWS"
          title="What Our Travelers Say"
        />
        <p className="text-gray-500 text-lg max-w-2xl mx-auto -mt-10 font-medium px-4">
          Real experiences from real travelers who explored the world with Sky High Holidays
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
              className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100"
            >
              <div className="text-2xl md:text-4xl font-black text-[#FF7A00] mb-1">{stat.value}</div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Reviews Section */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 mt-24 mb-32">
        <SectionHeader 
          subtitle="VIDEO REVIEWS"
          title="Watch Travel Stories"
        />
        <p className="text-gray-500 text-center text-lg max-w-2xl mx-auto -mt-10 font-medium mb-16 px-4">
          Real travel videos and YouTube shorts from our satisfied customers
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {videoReviews.map((review, i) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
            >
              {review.active ? (
                <div 
                  className="block relative aspect-[9/16] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group bg-black"
                >
                  {playingId === review.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${review.videoId}?autoplay=1&rel=0&modestbranding=1`}
                      title={review.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <button 
                      onClick={() => setPlayingId(review.id)}
                      className="w-full h-full relative"
                    >
                      {/* Thumbnail Overlay */}
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                      <img 
                        src={review.thumbnail} 
                        alt={review.title} 
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Play Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#FF7A00] group-hover:text-white transition-all duration-500">
                          <PlayCircle className="w-8 h-8 md:w-10 md:h-10 text-[#FF7A00] group-hover:text-white transition-colors" />
                        </div>
                        <span className="text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs drop-shadow-lg">
                          {review.title}
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              ) : (
                <div className="relative aspect-[9/16] bg-white rounded-[24px] md:rounded-[32px] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center gap-4 group transition-all duration-500 shadow-sm">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-50 flex items-center justify-center transition-colors">
                    <PlayCircle className="w-6 h-6 md:w-8 md:h-8 text-gray-200" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-300">
                    Coming Soon
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-32">
        <ServiceMarquee backgroundColor="white" />
      </div>
    </div>
  );
}
