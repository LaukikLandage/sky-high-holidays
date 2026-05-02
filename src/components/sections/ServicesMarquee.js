import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Hotel, Map, Globe, Tag, Heart, Headphones } from 'lucide-react';
export function ServicesMarquee() {
    const services = [
        { name: "Premium Hotels", icon: Hotel },
        { name: "Custom Itineraries", icon: Map },
        { name: "Global Network", icon: Globe },
        { name: "Best Price Guarantee", icon: Tag },
        { name: "Personalized Service", icon: Heart },
        { name: "24/7 Support", icon: Headphones },
    ];
    const MarqueeBlock = () => (_jsx("div", { className: "flex items-center gap-12 md:gap-20 pr-12 md:pr-20", children: services.map((service, i) => (_jsxs("div", { className: "flex items-center gap-4 md:gap-6", children: [_jsx(service.icon, { className: "w-5 h-5 md:w-6 md:h-6 text-[#FF7A00]" }), _jsx("span", { className: "text-lg md:text-xl font-medium tracking-wide text-white whitespace-nowrap", children: service.name }), _jsx("span", { className: "text-[#FF7A00] font-bold text-xl ml-4", children: "\u2022" })] }, i))) }));
    return (_jsx("div", { className: "relative w-full bg-[#020617] py-8 md:py-10 overflow-hidden border-y border-white/5", children: _jsxs(motion.div, { className: "flex", animate: {
                x: ["-50%", "0%"],
            }, transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
            }, style: { width: "fit-content" }, children: [_jsx(MarqueeBlock, {}), _jsx(MarqueeBlock, {})] }) }));
}
