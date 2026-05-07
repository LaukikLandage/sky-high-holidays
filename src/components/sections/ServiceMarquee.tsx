import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';

interface ServiceMarqueeProps {
  backgroundColor?: string;
}

export function ServiceMarquee({ backgroundColor = '#FDF5E6' }: ServiceMarqueeProps) {
  const text = "Travel anywhere with Sky High Holidays";
  const isDark = backgroundColor === '#020617';
  
  // Content to repeat
  const MarqueeContent = () => (
    <div className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex items-center gap-8 md:gap-16">
          <span 
            className="text-4xl md:text-6xl font-medium tracking-widest uppercase italic whitespace-nowrap"
            style={{
              WebkitTextStroke: isDark ? '2px rgba(255, 255, 255, 0.2)' : '2px rgba(0, 0, 0, 0.4)',
              color: 'transparent',
              fontFamily: 'Poppins, sans-serif'
            }}
          >
            {text}
          </span>
          <Plane className="w-8 h-8 md:w-12 md:h-12 text-[#FF7A00] rotate-45 shrink-0" />
        </div>
      ))}
    </div>
  );

  return (
    <div 
      className="relative w-full py-3 md:py-4 overflow-hidden border-y"
      style={{ 
        backgroundColor,
        borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
      }}
    >
      <motion.div
        className="flex"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 35, // Slower premium speed
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: "fit-content" }}
      >
        <MarqueeContent />
        <MarqueeContent />
      </motion.div>
    </div>
  );
}
