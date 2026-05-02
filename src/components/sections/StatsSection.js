import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Counter } from '../ui/Counter';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
export function StatsSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const stats = [
        { value: '1000+', label: 'Happy Travellers' },
        { value: '24/7', label: 'On-Trip Support' },
        { value: '98%', label: 'Customer Satisfaction' },
        { value: '350+', label: '5-Star Google Reviews' },
    ];
    return (_jsxs("section", { ref: ref, className: "py-24 bg-[#020617] border-y border-white/5 relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.08]", children: _jsx("img", { src: "https://upload.wikimedia.org/wikipedia/commons/e/ec/World_Map_Blank.svg", alt: "", className: "w-[150%] max-w-none animate-move-map grayscale invert brightness-200" }) }), _jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-[#FFC107]/5 to-transparent pointer-events-none z-1" }), _jsx("div", { className: "max-w-7xl mx-auto px-6 md:px-10 relative z-10", children: _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12", children: stats.map((stat, i) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: inView ? { opacity: 1, y: 0 } : {}, transition: { delay: i * 0.1, duration: 0.5 }, className: "text-center group", children: [_jsxs("div", { className: "relative inline-block", children: [_jsx("h3", { className: "text-4xl md:text-5xl font-black text-white mb-2", children: stat.value === '24/7' ? (_jsx("span", { children: stat.value })) : (_jsx(Counter, { value: stat.value })) }), _jsx("div", { className: "h-1 w-0 bg-[#FFC107] mx-auto transition-all duration-500 group-hover:w-full rounded-full" })] }), _jsx("p", { className: "text-gray-400 font-bold uppercase tracking-widest text-sm mt-4", children: stat.label })] }, i))) }) })] }));
}
