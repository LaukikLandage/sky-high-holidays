import { X, Tag } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';

export function PromoBanner() {
  const { promoBannerVisible, setPromoBannerVisible } = useAppStore();

  return (
    <AnimatePresence>
      {promoBannerVisible && (
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#FFC107] to-[#e66d00] text-white py-3 px-6 shadow-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <Tag className="w-4 h-4" />
              </div>
              <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                <span className="font-bold text-sm md:text-base tracking-wide">LIMITED TIME OFFER</span>
                <span className="hidden md:inline text-white/50">•</span>
                <span className="text-sm md:text-base font-medium">Get up to 25% OFF on International Packages</span>
                <span className="hidden md:inline text-white/50">•</span>
                <span className="font-bold text-sm md:text-base bg-white/20 px-4 py-1 rounded-full border border-white/30 tracking-wider">
                  Code: SKYHIGH20
                </span>
              </div>
            </div>
            <button
              onClick={() => setPromoBannerVisible(false)}
              className="ml-4 w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
