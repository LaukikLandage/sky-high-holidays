import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
export const Textarea = forwardRef(({ className, error, label, id, ...props }, ref) => {
    return (_jsxs("div", { className: "w-full space-y-2", children: [label && (_jsx("label", { htmlFor: id, className: "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300", children: label })), _jsx("textarea", { id: id, ref: ref, className: cn("flex min-h-[120px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm ring-offset-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC107] focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-[#020617] dark:ring-offset-[#020617] dark:placeholder:text-gray-400 dark:text-white transition-all resize-y", error && "border-red-500 focus-visible:ring-red-500", className), ...props }), error && _jsx("p", { className: "text-sm text-red-500 font-medium", children: error })] }));
});
Textarea.displayName = 'Textarea';
