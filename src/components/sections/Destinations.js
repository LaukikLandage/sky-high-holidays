import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { DestinationCard } from '../ui/DestinationCard';
import { Button } from '../ui/Button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDestinationStore } from '@/store/useDestinationStore';
export function Destinations() {
    const { destinations } = useDestinationStore();
    const internationalDestinations = destinations.filter(d => d.type === 'international');
    return (_jsx("section", { id: "international", className: "py-10 md:py-14 lg:py-16 bg-[#F9F9F9]", children: _jsxs("div", { className: "max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8", children: [_jsx(SectionHeader, { subtitle: "MOST LOVED DESTINATIONS", title: "Explore The World's Most Popular Destinations" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch", children: internationalDestinations.map((destination, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.5, delay: index * 0.1 }, className: "h-full", children: _jsx(Link, { to: `/international/${destination.slug}`, className: "block h-full", children: _jsx(DestinationCard, { destination: destination }) }) }, destination.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.5, delay: 0.3 }, className: "text-center mt-16", children: _jsx(Link, { to: "/destinations", children: _jsxs(Button, { size: "lg", className: "gap-2", children: ["View All Destinations", _jsx(ArrowRight, { className: "w-5 h-5" })] }) }) })] }) }));
}
