import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
export function SectionHeader({ title, subtitle, className, dark = false }) {
    return (_jsxs("div", { className: cn("text-center mb-16 flex flex-col items-center", className), children: [subtitle && (_jsxs("div", { className: "flex flex-col items-center mb-6", children: [_jsx("span", { className: "text-[#FF7A00] font-bold text-sm md:text-base uppercase tracking-[0.3em] mb-3", children: subtitle }), _jsx("div", { className: "w-12 h-[3px] bg-[#FF7A00] rounded-full" })] })), _jsx("h2", { className: cn("text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-4xl mx-auto leading-[1.1]", dark ? "text-white" : "text-[#020617]"), children: title })] }));
}
