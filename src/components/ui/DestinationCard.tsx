import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export interface Destination {
  name: string;
  location: string;
  price: string;
  rating?: number;
  image: string;
  duration: string;
  type?: 'international' | 'domestic';
  slug?: string;
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

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all h-full flex flex-col"
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={destination.image}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
          <Star className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
          <span className="font-semibold text-sm">{destination.rating || 4.9}</span>
        </div>
        <div className="absolute top-4 left-4 bg-[#020617] text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          {destination.duration}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Title and Location Container - Fixed Height to prevent shifting */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-[#020617] mb-2 h-[56px] line-clamp-2 leading-tight">
            {destination.name}
          </h3>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4 shrink-0" />
            <span className="text-sm truncate">{destination.location}</span>
          </div>
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
