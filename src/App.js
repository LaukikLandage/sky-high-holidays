import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ContactPage } from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import EnquiryPage from './pages/EnquiryPage';
import { ComponentLibraryPage } from './pages/ComponentLibraryPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminEditDestination from './pages/admin/AdminEditDestination';
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
}
function App() {
    return (_jsxs(Router, { children: [_jsx(ScrollToTop, {}), _jsx(Layout, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/enquiry", element: _jsx(EnquiryPage, {}) }), _jsx(Route, { path: "/destinations", element: _jsx(DestinationsPage, {}) }), _jsx(Route, { path: "/international/:slug", element: _jsx(DestinationDetailPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/design-system", element: _jsx(ComponentLibraryPage, {}) }), _jsx(Route, { path: "/admin", element: _jsx(AdminDashboard, {}) }), _jsx(Route, { path: "/admin/add", element: _jsx(AdminEditDestination, {}) }), _jsx(Route, { path: "/admin/edit/:id", element: _jsx(AdminEditDestination, {}) })] }) })] }));
}
export default App;
