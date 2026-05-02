import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Shield, CreditCard, Headphones, Award, Globe, Users } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { motion } from 'framer-motion';
export function WhyChooseUs() {
    const benefits = [
        {
            icon: Shield,
            title: 'Secure & Trusted',
            description: 'Your safety and security are our top priorities with verified partners'
        },
        {
            icon: CreditCard,
            title: 'Flexible Payment',
            description: 'Easy EMI options and multiple payment methods available'
        },
        {
            icon: Headphones,
            title: '24/7 Support',
            description: 'Round-the-clock assistance for all your travel needs'
        },
        {
            icon: Award,
            title: 'Best Price Guarantee',
            description: 'Competitive pricing with no hidden charges'
        },
        {
            icon: Globe,
            title: 'Global Network',
            description: 'Partnerships with premium hotels and airlines worldwide'
        },
        {
            icon: Users,
            title: 'Expert Team',
            description: 'Experienced travel consultants to guide your journey'
        }
    ];
    return (_jsx("section", { className: "py-24 bg-gradient-to-br from-[#F3F4F6] to-white overflow-hidden", children: _jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [_jsx(SectionHeader, { subtitle: "WHY CHOOSE US", title: "Your Trusted Travel Partner" }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [_jsxs(motion.div, { initial: { opacity: 0, x: -30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.6 }, children: [_jsx("p", { className: "text-gray-600 text-lg mb-10 leading-relaxed text-center lg:text-left", children: "We go beyond ordinary travel planning to deliver exceptional experiences that exceed your expectations, backed by industry expertise and global connections." }), _jsx("div", { className: "grid sm:grid-cols-2 gap-x-6 gap-y-8", children: benefits.map((benefit, index) => (_jsxs("div", { className: "flex gap-4 group", children: [_jsx("div", { className: "w-12 h-12 bg-[#FF7A00]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7A00]/20 transition-colors", children: _jsx(benefit.icon, { className: "w-6 h-6 text-[#FF7A00]" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-[#020617] mb-1", children: benefit.title }), _jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: benefit.description })] })] }, index))) })] }), _jsx(motion.div, { initial: { opacity: 0, x: 30 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, margin: "-50px" }, transition: { duration: 0.6 }, className: "relative flex items-center justify-center", children: _jsxs("div", { className: "relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]", children: [_jsx("div", { className: "absolute inset-0 bg-[#FF7A00]/10 rounded-full blur-[80px] scale-110 -z-10" }), _jsx(motion.div, { className: "w-full h-full mix-blend-multiply flex items-center justify-center", animate: {
                                            y: [0, -15, 0],
                                        }, transition: {
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }, children: _jsx("img", { src: "/images/globe_white.png", alt: "3D Travel Globe", className: "w-[90%] h-[90%] object-contain" }) }), _jsx(motion.div, { className: "absolute w-full h-full top-0 left-0", animate: { rotate: 360 }, transition: { duration: 20, repeat: Infinity, ease: "linear" }, children: _jsx("div", { className: "absolute top-[15%] left-[15%] text-4xl drop-shadow-lg -rotate-45", children: "\u2708\uFE0F" }) }), _jsx("div", { className: "absolute inset-[10%] border border-[#FF7A00]/10 rounded-full pointer-events-none" }), _jsx("div", { className: "absolute inset-[5%] border border-dashed border-[#FF7A00]/10 rounded-full pointer-events-none" }), _jsxs(motion.div, { initial: { scale: 0 }, whileInView: { scale: 1 }, viewport: { once: true }, transition: { delay: 0.4, type: "spring" }, className: "absolute bottom-4 right-4 bg-white rounded-2xl shadow-2xl p-5 text-center z-20 border border-gray-100", children: [_jsx("div", { className: "text-3xl font-black text-[#FF7A00] mb-0.5", children: "98%" }), _jsx("div", { className: "text-xs text-gray-500 font-bold uppercase tracking-widest", children: "Satisfaction" })] }), _jsxs(motion.div, { initial: { scale: 0 }, whileInView: { scale: 1 }, viewport: { once: true }, transition: { delay: 0.6, type: "spring" }, className: "absolute top-4 left-4 bg-white rounded-2xl shadow-2xl p-5 text-center z-20 border border-gray-100", children: [_jsx("div", { className: "text-3xl font-black text-[#020617] mb-0.5", children: "50+" }), _jsx("div", { className: "text-xs text-gray-500 font-bold uppercase tracking-widest", children: "Destinations" })] })] }) })] })] }) }));
}
