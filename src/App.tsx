import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { ScrollToTop, ScrollProgressBar } from './components/common/MotionWrapper';

// Page Imports
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MeetTheArtistPage } from './pages/MeetTheArtistPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PackagesPage } from './pages/PackagesPage';
import { AddOnsPage } from './pages/AddOnsPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { VideosPage } from './pages/VideosPage';
import { ClientStoriesPage } from './pages/ClientStoriesPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactBookingPage } from './pages/ContactBookingPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        {/* Automatic smooth scroll to top on page navigation */}
        <ScrollToTop />
        {/* Luxury top reading / scroll progress bar */}
        <ScrollProgressBar />

        <div className="min-h-screen flex flex-col bg-[#FCFAF8] text-[#120F0D] font-sans antialiased selection:bg-[#C9A050]/25 selection:text-[#120F0D]">
          {/* Main Top Navigation Header */}
          <Header />

          {/* Main Route Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/meet-the-artist" element={<MeetTheArtistPage />} />
              <Route path="/services" element={<ServicesHubPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/add-ons" element={<AddOnsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/client-stories" element={<ClientStoriesPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<ContactBookingPage />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Luxury Footer */}
          <Footer />

          {/* Single Unified Floating WhatsApp Quick-Action (Responsive for both Mobile and Desktop) */}
          <MobileBottomBar />
        </div>
      </BrowserRouter>
    </BookingProvider>
  );
}
