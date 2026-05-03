import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Plane, Search, Globe } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 pt-32 md:pt-40 overflow-hidden relative font-poppins">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-orange-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-4xl w-full text-center relative z-10">
        {/* Minimal Animated Plane */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-sm border border-gray-100 relative group">
              <Plane size={40} className="text-[#FF7A00] -rotate-12 group-hover:scale-110 transition-transform duration-500" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#020617] mb-6 tracking-tight">
            Oops! You’ve <span className="text-[#FF7A00]">flown off course</span>
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 font-medium">
            The page you’re looking for doesn’t exist or has been moved. Even the best pilots need a navigation check sometimes!
          </p>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/" className="w-full sm:w-auto">
              <Button size="lg" className="w-full h-14 px-10 rounded-xl font-bold uppercase tracking-widest bg-[#020617] text-white hover:bg-[#FF7A00] transition-all duration-300">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <Link to="/destinations" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full h-14 px-10 rounded-xl font-bold uppercase tracking-widest border border-gray-200 text-[#020617] hover:border-[#FF7A00] hover:text-[#FF7A00] transition-all duration-300 bg-white">
                <Globe className="w-4 h-4 mr-2" />
                Explore Trips
              </Button>
            </Link>
          </div>

          {/* Search Bar - Minimal */}
          <div className="max-w-md mx-auto px-4">
            <div className="relative mb-10">
              <input 
                type="text" 
                placeholder="Search destinations..." 
                className="w-full h-14 pl-12 pr-6 rounded-xl bg-[#F9FAFB] border-none focus:ring-2 focus:ring-[#FF7A00]/20 transition-all text-sm font-medium"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-gray-400">
              <span>Quick Links:</span>
              <Link to="/international/the-maldives" className="hover:text-[#FF7A00] transition-colors">Maldives</Link>
              <Link to="/international/dubai-uae" className="hover:text-[#FF7A00] transition-colors">Dubai</Link>
              <Link to="/international/bali-indonesia" className="hover:text-[#FF7A00] transition-colors">Bali</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
