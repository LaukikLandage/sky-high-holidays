import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
export function ServiceMarquee({ backgroundColor = '#FDF5E6' }) {
    const text = "Travel anywhere with Sky High Holidays";
    const isDark = backgroundColor === '#020617';
    // Content to repeat
    const MarqueeContent = () => (_jsx("div", { className: "flex items-center gap-8 md:gap-16 pr-8 md:pr-16", children: [...Array(4)].map((_, i) => (_jsxs("div", { className: "flex items-center gap-8 md:gap-16", children: [_jsx("span", { className: "text-4xl md:text-6xl font-medium tracking-widest uppercase italic whitespace-nowrap", style: {
                        WebkitTextStroke: isDark ? '2px rgba(255, 255, 255, 0.2)' : '2px rgba(0, 0, 0, 0.4)',
                        color: 'transparent',
                        fontFamily: 'Poppins, sans-serif'
                    }, children: text }), _jsx(Plane, { className: "w-8 h-8 md:w-12 md:h-12 text-[#FF7A00] rotate-45 shrink-0" })] }, i))) }));
    return (_jsx("div", { className: "relative w-full py-6 md:py-8 overflow-hidden border-y", style: {
            backgroundColor,
            borderColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'
        }, children: _jsxs(motion.div, { className: "flex", animate: {
                x: ["0%", "-50%"],
            }, transition: {
                duration: 35, // Slower premium speed
                repeat: Infinity,
                ease: "linear",
            }, style: { width: "fit-content" }, children: [_jsx(MarqueeContent, {}), _jsx(MarqueeContent, {})] }) }));
}
