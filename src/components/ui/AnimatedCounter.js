import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useRef } from 'react';
export function AnimatedCounter({ value, suffix = '', prefix = '' }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    useEffect(() => {
        if (isInView && !hasAnimated) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            setHasAnimated(true);
            return controls.stop;
        }
    }, [isInView, hasAnimated, count, value]);
    return (_jsxs("span", { ref: ref, className: "inline-flex", children: [prefix, _jsx(motion.span, { children: rounded }), suffix] }));
}
