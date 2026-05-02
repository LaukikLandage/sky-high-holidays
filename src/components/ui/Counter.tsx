import { animate, useMotionValue, useTransform, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: string;
  duration?: number;
}

export function Counter({ value, duration = 2 }: CounterProps) {
  const target = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);
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
    return <span className="tabular-nums">{value}</span>;
  }

  return (
    <motion.span ref={ref} className="tabular-nums inline-flex items-center">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </motion.span>
  );
}
