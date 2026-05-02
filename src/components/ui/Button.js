import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { motion } from "framer-motion";
const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-[#FFC107] text-white hover:bg-[#e66d00] shadow-md hover:shadow-lg",
            secondary: "bg-[#000000] text-white hover:bg-[#0a3350] shadow-md",
            outline: "border border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20",
            ghost: "text-[#000000] hover:text-[#FFC107] hover:bg-black/5",
            ghostWhite: "text-white hover:text-[#FFC107]",
        },
        size: {
            default: "h-12 px-8 py-3",
            sm: "h-9 px-4 text-sm",
            lg: "h-14 px-10 text-lg",
            icon: "h-10 w-10",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
const Button = forwardRef(({ className, variant, size, asMotion = true, ...props }, ref) => {
    if (asMotion) {
        return (_jsx(motion.button, { className: cn(buttonVariants({ variant, size, className })), ref: ref, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, ...props }));
    }
    return (_jsx("button", { className: cn(buttonVariants({ variant, size, className })), ref: ref, ...props }));
});
Button.displayName = "Button";
export { Button, buttonVariants };
