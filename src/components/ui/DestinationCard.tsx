import { Share2, Flame, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export interface Destination {
  id: string;
  name: string;
  location: string;
  price: string;
  rating?: number;
  image: string;
  duration: string;
  type?: 'international' | 'domestic';
  slug?: string;
  isTrending?: boolean;
}

interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps) {
  const navigate = useNavigate();

  const handleBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (destination.type === 'domestic') {
      // Domestic goes directly to enquiry
      navigate(`/enquiry?destination=${encodeURIComponent(destination.name)}`);
    } else {
      // International goes to details page
      const slug = destination.slug || destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      console.log("Navigating to international:", slug);
      navigate(`/international/${slug}`);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    let url = '';
    if (destination.type === 'domestic') {
      url = `${window.location.origin}/enquiry?destination=${encodeURIComponent(destination.name)}`;
    } else {
      const slug = destination.slug || destination.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      url = `${window.location.origin}/international/${slug}`;
    }
    
    if (navigator.share) {
      navigator.share({
        title: `Sky High Holidays - ${destination.name}`,
        text: `Check out this amazing travel package to ${destination.name}!`,
        url: url
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(url).then(() => {
        alert(`Link for ${destination.name} copied to clipboard!`);
      });
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all h-full flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden shrink-0">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        {/* Share Button (Moved to top-left) */}
        <button 
          onClick={handleShare}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full flex items-center justify-center shadow-md z-20 hover:bg-[#FF7A00] hover:text-white transition-all duration-300"
          title="Share Package"
        >
          <Share2 className="w-4 h-4" />
        </button>

        {/* Trending Badge (Top-right) */}
        {destination.isTrending && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 z-20"
          >
            <div className="relative group/badge">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF7A00] to-[#FFB800] rounded-full blur-md opacity-50 group-hover/badge:opacity-100 transition-opacity animate-pulse" />
              
              <div className="relative bg-gradient-to-r from-[#FF7A00] to-[#FFB800] text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                <Flame className="w-3.5 h-3.5 fill-white animate-bounce" style={{ animationDuration: '2s' }} />
                <span className="text-[10px] font-black uppercase tracking-wider">Trending</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title Container */}
        <div className="mb-2">
          <h3 className="text-xl font-bold text-[#020617] line-clamp-2 leading-tight">
            {destination.name}
          </h3>
        </div>

        {/* Price Section - Always pushed above button */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black">Starting from</div>
          <div className="text-2xl font-black text-[#FF7A00]">{destination.price}</div>
        </div>

        <Button 
          variant="secondary" 
          onClick={handleBooking}
          className="w-full mt-4 h-12 flex items-center justify-center gap-2 group-hover:gap-3 bg-[#020617] text-white hover:bg-[#FF7A00] transition-all rounded-xl font-bold uppercase tracking-widest text-xs"
        >
          Book Now
          <ArrowRight className="w-4 h-4 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
