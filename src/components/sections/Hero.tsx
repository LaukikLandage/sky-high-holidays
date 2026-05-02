import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1920';

export function Hero() {
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoFailed1, setVideoFailed1] = useState(false);
  const [videoFailed2, setVideoFailed2] = useState(false);

  const videos = [
    { src: '/videos/bg-dubai.mp4', failed: videoFailed2, setFailed: setVideoFailed2 },
    { src: '/videos/bgvideo.mp4', failed: videoFailed1, setFailed: setVideoFailed1 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-[calc(100vh-130px)] overflow-hidden flex items-center justify-center mt-[130px]"
    >
      {/* Fallback Image (z-0, always behind) */}
      <img 
        src={FALLBACK_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Background Videos (z-[1], above fallback image) */}
      <div className="absolute inset-0 z-[1] bg-black">
        {videos.map((video, idx) => (
          !video.failed && (
            <video 
              key={video.src}
              autoPlay 
              muted 
              loop 
              playsInline
              onError={() => video.setFailed(true)}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                videoIndex === idx ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <source src={video.src} type="video/mp4" />
            </video>
          )
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 flex flex-col items-center justify-center text-center pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-5"
        >
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-white/60 tracking-[0.25em] uppercase font-semibold mb-1"
          >
            Crafting Exceptional Travel Experiences Across the World
          </motion.p>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight mb-3"
          >
            Plan Your Dream <br className="hidden md:block" />
            Vacation Today
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed font-medium mb-4"
          >
            From curated international escapes to seamless domestic getaways, we design personalized journeys with premium stays, visa assistance, and complete travel support.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link to="/destinations">
              <Button size="lg" className="h-14 px-10 text-sm md:text-base font-semibold uppercase tracking-widest bg-white text-black hover:bg-[#FF7A00] hover:text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group">
                Explore Packages
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/enquiry">
              <Button size="lg" variant="outline" className="h-14 px-10 text-sm md:text-base font-semibold uppercase tracking-widest border-2 border-white text-white hover:bg-white hover:text-black rounded-full transition-all hover:scale-105 active:scale-95">
                Book Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
