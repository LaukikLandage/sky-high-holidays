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
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
