import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingContactButtons } from '../ui/FloatingContactButtons';
export function Layout({ children }) {
    const location = useLocation();
    // Scroll to top or hash on route change
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
        else {
            window.scrollTo(0, 0);
        }
    }, [location.pathname, location.hash]);
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-[#F3F4F6]", children: [_jsx(Navbar, {}), _jsx("main", { className: "flex-1", children: children }), _jsx(FloatingContactButtons, {}), _jsx(Footer, {})] }));
}
