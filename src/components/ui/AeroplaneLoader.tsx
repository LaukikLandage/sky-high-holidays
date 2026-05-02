import { motion, AnimatePresence } from 'framer-motion';
import { Plane } from 'lucide-react';
import { useState, useEffect } from 'react';

export function AeroplaneLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Clouds/Trails */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -100, y: Math.random() * 100 + "%" }}
                animate={{ x: "110vw" }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5
                }}
                className="absolute h-px w-64 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            ))}
          </div>

          <div className="relative flex flex-col items-center">
            {/* Aeroplane Animation */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -2, 2, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative mb-8"
            >
              <motion.div
                initial={{ x: -200, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Plane className="w-20 h-20 text-[#FF7A00] rotate-45" strokeWidth={1.5} />
              </motion.div>
              
              {/* Speed Lines */}
              <motion.div 
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-0.5 bg-[#FF7A00]/40 rounded-full"
              />
              <motion.div 
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, delay: 0.2 }}
                className="absolute -left-16 top-1/4 -translate-y-1/2 w-8 h-0.5 bg-[#FF7A00]/30 rounded-full"
              />
            </motion.div>

            {/* Brand Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-white text-3xl font-black uppercase tracking-[0.3em] mb-2">
                Sky High <span className="text-[#FF7A00]">Holidays</span>
              </h2>
              <p className="text-white/50 text-xs uppercase tracking-[0.5em] font-medium">
                Preparing Your Journey...
              </p>
            </motion.div>

            {/* Loading Bar */}
            <div className="mt-12 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-[#FF7A00] to-[#FFA04D]"
              />
            </div>
          </div>

          {/* Decorative Corner Elements */}
          <div className="absolute top-0 left-0 p-10 opacity-10">
            <div className="w-20 h-20 border-t-2 border-l-2 border-white rounded-tl-3xl" />
          </div>
          <div className="absolute bottom-0 right-0 p-10 opacity-10">
            <div className="w-20 h-20 border-b-2 border-r-2 border-white rounded-br-3xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
