import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-32">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-[12rem] md:text-[15rem] font-black text-[#020617]/5 leading-none select-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">404</h1>
          <div className="relative z-10">
            <div className="w-24 h-24 bg-orange-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 rotate-12 group hover:rotate-0 transition-transform duration-500 shadow-xl">
              <span className="text-5xl">🏝️</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#020617] mb-6 tracking-tight">Destination Not Found</h2>
            <p className="text-gray-500 text-xl max-w-lg mx-auto leading-relaxed mb-10 font-medium">
              It seems you've wandered off the map. Don't worry, even the best travelers get lost sometimes.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/">
            <Button size="lg" className="h-16 px-10 rounded-full font-black uppercase tracking-widest bg-[#020617] text-white hover:bg-[#FF7A00]">
              <Home className="w-5 h-5 mr-3" />
              Return Home
            </Button>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center gap-3 text-gray-400 hover:text-[#020617] font-black uppercase tracking-widest transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
