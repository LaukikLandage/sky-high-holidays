import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';

// Section IDs that map to nav links on the homepage
const SCROLL_SECTIONS = ['home', 'about', 'international', 'domestic', 'contact'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>('home');
  const { isMenuOpen, setIsMenuOpen } = useAppStore();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  // Scroll-spy: track which sections are currently visible
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(null);
      return;
    }

    const visibleSections = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // If no sections visible → clear active
        if (visibleSections.size === 0) {
          setActiveSection(null);
        } else {
          // Pick the topmost visible section (by DOM order)
          for (const id of SCROLL_SECTIONS) {
            if (visibleSections.has(id)) {
              setActiveSection(id);
              break;
            }
          }
        }
      },
      {
        threshold: 0.15,
        rootMargin: '-100px 0px -40% 0px'
      }
    );

    const timer = setTimeout(() => {
      SCROLL_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    }, 300);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isHomePage, location.pathname]);

  // Scroll detection for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine active state for a nav link
  const getIsActive = useCallback((path: string) => {
    // No active section → nothing highlighted
    if (activeSection === null && isHomePage) return false;

    // On non-home pages, match by pathname
    if (!isHomePage) {
      if (path === '/about') return location.pathname === '/about';
      if (path === '/contact') return location.pathname === '/contact';
      return false;
    }
    
    // On home page, match by scroll-spy
    if (path === '/') return activeSection === 'home';
    if (path === '/about') return activeSection === 'about';
    if (path === '/#international') return activeSection === 'international';
    if (path === '/#domestic') return activeSection === 'domestic';
    return false;
  }, [isHomePage, activeSection, location.pathname]);

  // Handle nav link click — smooth scroll on home page
  const handleNavClick = useCallback((e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const sectionId = path.replace('/#', '');
      
      if (!isHomePage) {
        // Navigate to home first, then scroll
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 400);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActiveSection(sectionId);
    } else if (path === '/') {
      e.preventDefault();
      if (!isHomePage) {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      setActiveSection(null);
    }
    // For /about, /contact — let React Router handle normally
  }, [isHomePage, navigate]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'International', path: '/#international' },
    { name: 'Domestic', path: '/#domestic' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* Top Info Bar (Upper Strip) */}
        <div className="w-full bg-[#020617] text-white py-2.5 px-6 lg:px-10 border-b border-white/5">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center text-xs md:text-sm font-bold">
            <div className="flex items-center gap-8">
              <a href="mailto:ashwin@skyhightravelandtourism.com" className="flex items-center gap-3 hover:text-[#FF7A00] transition-colors">
                <Mail className="w-4 h-4 text-[#FF7A00]" />
                <span className="hidden sm:inline text-sm font-semibold tracking-tight">ashwin@skyhightravelandtourism.com</span>
              </a>
              <a href="tel:+918700558067" className="flex items-center gap-3 hover:text-[#FF7A00] transition-colors">
                <Phone className="w-4 h-4 text-[#FF7A00]" />
                <span className="text-sm font-semibold tracking-tight">+91 8700558067</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1AfG4C3U3a/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-[#FF7A00] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-orange-500/20 group">
                <FaFacebookF className="w-4 h-4 group-hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/skyhigh_holidays_?igsh=bXp3dm9pdGZ0bHZx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-[#FF7A00] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-orange-500/20 group">
                <FaInstagram className="w-5 h-5 group-hover:scale-110" />
              </a>
              <a href="https://youtube.com/@skyhigh_holidays?si=iXQ4H-RJq747JF2G" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white text-white hover:text-[#FF7A00] rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg hover:shadow-orange-500/20 group">
                <FaYoutube className="w-5 h-5 group-hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div 
          className={`w-full bg-white transition-all duration-300 border-b border-gray-100 ${
            isScrolled ? 'py-3 shadow-xl' : 'py-5 shadow-sm'
          }`}
        >
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo.png" 
                alt="Sky High Holidays" 
                className="h-10 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Nav Links */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => {
                const active = getIsActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className={`relative text-sm tracking-widest transition-all duration-300 group py-1 ${
                      active 
                        ? 'font-bold text-[#FF7A00]' 
                        : 'font-medium text-gray-500 hover:text-[#020617]'
                    }`}
                  >
                    {link.name}
                    {/* Underline indicator */}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF7A00] rounded-full transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Side: CTA */}
            <div className="hidden md:flex items-center gap-6">
              <Link to="/enquiry">
                <button className="bg-[#020617] text-white px-8 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-[#FF7A00] hover:shadow-2xl hover:shadow-orange-200 transition-all active:scale-95 hover:scale-105">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-[#020617] p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white pt-32 px-10 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const active = getIsActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      handleNavClick(e, link.path);
                      setIsMenuOpen(false);
                    }}
                    className={`text-4xl font-bold tracking-tight transition-colors ${
                      active ? 'text-[#FF7A00]' : 'text-[#020617]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="mt-auto mb-12">
              <button className="w-full bg-[#FF7A00] text-white py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest shadow-2xl shadow-orange-200">
                Enquire Now
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
