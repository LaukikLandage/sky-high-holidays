import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { animate, useMotionValue, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export function Counter({ value, duration = 2 }) {
    const target = parseInt(value.replace(/[^0-9]/g, ""));
    const suffix = value.replace(/[0-9]/g, "");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    useEffect(() => {
        if (isInView && !isNaN(target)) {
            animate(count, target, {
                duration: duration,
                ease: "easeOut"
            });
        }
    }, [isInView, target, duration, count]);
    if (isNaN(target)) {
        return _jsx("span", { className: "tabular-nums", children: value });
    }
    return (_jsxs(motion.span, { ref: ref, className: "tabular-nums inline-flex items-center", children: [_jsx(motion.span, { children: rounded }), suffix && _jsx("span", { children: suffix })] }));
}
