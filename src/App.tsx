import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { lazy, Suspense } from 'react';
import { Layout } from './components/layout/Layout';
import { AeroplaneLoader } from './components/ui/AeroplaneLoader';

const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const DestinationsPage = lazy(() => import('./pages/DestinationsPage').then(m => ({ default: m.DestinationsPage })));
const DestinationDetailPage = lazy(() => import('./pages/DestinationDetailPage').then(m => ({ default: m.DestinationDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const EnquiryPage = lazy(() => import('./pages/EnquiryPage'));
const ComponentLibraryPage = lazy(() => import('./pages/ComponentLibraryPage').then(m => ({ default: m.ComponentLibraryPage })));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const AdminEditDestination = lazy(() => import('./pages/admin/AdminEditDestination'));
const NotFound = lazy(() => import('./pages/NotFound').then(m => ({ default: m.NotFound })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <AeroplaneLoader />
      <ScrollToTop />
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/enquiry" element={<EnquiryPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/international/:slug" element={<DestinationDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/design-system" element={<ComponentLibraryPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add" element={<AdminEditDestination />} />
            <Route path="/admin/edit/:id" element={<AdminEditDestination />} />

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
