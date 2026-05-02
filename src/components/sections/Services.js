import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Plane, Building2, Map, Globe, MapPin, FileText } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'framer-motion';
export function Services() {
    const services = [
        { icon: Plane, title: 'Flight Booking' },
        { icon: Building2, title: 'Hotels Booking' },
        { icon: Map, title: 'Custom Tour Package' },
        { icon: Globe, title: 'International Tours' },
        { icon: MapPin, title: 'Domestic Tours' },
        { icon: FileText, title: 'Visa Services' }
    ];
    return (_jsxs("section", { id: "services", className: "py-24 bg-[#020617] relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF7A00]/5 blur-[120px] rounded-full pointer-events-none" }), _jsx("div", { className: "absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#FF7A00]/5 blur-[120px] rounded-full pointer-events-none" }), _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsx(SectionHeader, { subtitle: "OUR PREMIUM SERVICES", title: "Experience Luxury at Every Step", dark: true }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.5, delay: index * 0.1 }, whileHover: { scale: 1.05 }, className: "group p-8 text-center bg-white/5 border border-white/10 rounded-3xl hover:border-[#FF7A00]/50 hover:bg-white/[0.07] transition-all duration-300 relative overflow-hidden shadow-2xl", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#FF7A00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }), _jsxs("div", { className: "relative z-10 flex flex-col items-center", children: [_jsx("div", { className: "mb-6 p-4 rounded-2xl bg-white/5 group-hover:bg-[#FF7A00]/20 transition-colors", children: _jsx(service.icon, { className: "w-10 h-10 text-[#FF7A00] transition-transform duration-500 group-hover:rotate-12" }) }), _jsx("h3", { className: "text-xl font-medium text-white tracking-wide group-hover:text-[#FF7A00] transition-colors", children: service.title })] })] }, index))) })] })] }));
}
