import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
export function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (_jsx(AnimatePresence, { children: isVisible && (_jsx(motion.button, { initial: { opacity: 0, scale: 0.5, y: 20 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.5, y: 20 }, whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: scrollToTop, className: "fixed bottom-8 left-6 z-[60] w-12 h-12 bg-[#020617] text-white rounded-full flex items-center justify-center shadow-xl hover:bg-white hover:text-[#020617] border border-transparent hover:border-gray-200 transition-all duration-300 group", "aria-label": "Scroll to top", children: _jsx(ChevronUp, { className: "w-6 h-6 transition-transform group-hover:-translate-y-1" }) })) }));
}
