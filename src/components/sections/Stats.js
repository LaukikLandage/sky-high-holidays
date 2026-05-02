import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Users, Clock, Star, MessageSquare } from 'lucide-react';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { motion } from 'framer-motion';
export function Stats() {
    const stats = [
        { icon: Users, value: 1000, suffix: '+', label: 'Happy Travellers' },
        { icon: Clock, value: 24, suffix: '/7', label: 'Support Available' },
        { icon: Star, value: 98, suffix: '%', label: 'Satisfaction Rate' },
        { icon: MessageSquare, value: 350, suffix: '+', label: 'Positive Reviews' }
    ];
    return (_jsxs("section", { className: "py-16 bg-gradient-to-br from-[#000000] to-[#020617] relative overflow-hidden", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFC107]/30 to-transparent" }), _jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[#FFC107]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" }), _jsx("div", { className: "max-w-7xl mx-auto px-6 relative z-10", children: _jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12", children: stats.map((stat, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.5, delay: index * 0.1 }, className: "text-center group", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-[#FFC107]/10 border border-[#FFC107]/20 rounded-2xl mb-5 group-hover:bg-[#FFC107]/20 transition-all duration-300 group-hover:scale-110 shadow-lg", children: _jsx(stat.icon, { className: "w-8 h-8 text-[#FFC107]" }) }), _jsx("div", { className: "text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight", children: _jsx(AnimatedCounter, { value: stat.value, suffix: stat.suffix }) }), _jsx("div", { className: "text-gray-400 font-medium tracking-wide text-sm md:text-base", children: stat.label })] }, index))) }) })] }));
}
