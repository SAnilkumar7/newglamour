import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Calendar,
  Phone,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Camera,
  Film,
  Sparkle
} from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BrandLogo } from './BrandLogo';
import { studioBusinessInfo } from '../../data/businessData';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);

  // Mobile accordion open states
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobilePortfolioOpen, setMobilePortfolioOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPortfolioDropdownOpen(false);
    setMobileServicesOpen(false);
    setMobilePortfolioOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const serviceCategories = [
    { name: 'Bridal Artistry', path: '/services/bridal', tag: 'Royal Craft' },
    { name: 'Engagement & Roka', path: '/services/engagement', tag: 'Dewy Look' },
    { name: 'Reception Glam', path: '/services/reception', tag: 'Stage Majesty' },
    { name: 'Party & Sangeet', path: '/services/party', tag: 'Cocktail Glow' },
    { name: 'Editorial & Shoot', path: '/services/photoshoot', tag: 'Zero Flashback' },
    { name: 'Custom Makeup', path: '/services/custom', tag: 'Bespoke Art' },
    { name: 'All Services & How It Works', path: '/services', tag: 'Explore All' },
  ];

  const portfolioCategories = [
    { name: 'Photos', path: '/portfolio?type=photos', icon: Camera, tag: 'Gallery' },
    { name: 'Videos', path: '/portfolio?type=videos', icon: Film, tag: 'Reels' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' || location.pathname === '';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-[#FCFAF8]/95 backdrop-blur-md border-b border-[#EFE8DE] ${
          scrolled ? 'shadow-sm py-2.5 sm:py-3' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <BrandLogo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Home */}
            <Link
              to="/"
              className={`relative text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                location.pathname === '/' ? 'text-[#1A1512] font-semibold' : 'text-[#615449] hover:text-[#1A1512]'
              }`}
            >
              <span>Home</span>
              {location.pathname === '/' && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
              )}
            </Link>

            {/* Services Dropdown (Desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                to="/services"
                className={`relative inline-flex items-center gap-1 text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                  isActive('/services')
                    ? 'text-[#1A1512] font-semibold'
                    : 'text-[#615449] hover:text-[#1A1512]'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 text-[#B3874B] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                {isActive('/services') && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
                )}
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E8DFD5] py-2 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-[#F0EAE1] flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C6D46]">
                      Services Disciplines
                    </span>
                    <Link to="/services" className="text-[10px] text-[#B3874B] hover:underline">
                      View All
                    </Link>
                  </div>
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="flex items-center justify-between px-4 py-2.5 text-xs text-[#4A3F35] hover:text-[#181411] hover:bg-[#FAF8F5] transition-colors"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F2ECE3] text-[#7A6451]">
                        {cat.tag}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio Dropdown (Photos & Videos) */}
            <div
              className="relative"
              onMouseEnter={() => setPortfolioDropdownOpen(true)}
              onMouseLeave={() => setPortfolioDropdownOpen(false)}
            >
              <Link
                to="/portfolio"
                className={`relative inline-flex items-center gap-1 text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                  isActive('/portfolio') || isActive('/videos')
                    ? 'text-[#1A1512] font-semibold'
                    : 'text-[#615449] hover:text-[#1A1512]'
                }`}
              >
                <span>Portfolio</span>
                <ChevronDown className={`w-3 h-3 text-[#B3874B] transition-transform duration-200 ${portfolioDropdownOpen ? 'rotate-180' : ''}`} />
                {(isActive('/portfolio') || isActive('/videos')) && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
                )}
              </Link>

              {portfolioDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E8DFD5] py-2 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-[#F0EAE1]">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C6D46]">
                      Media Showcase
                    </span>
                  </div>
                  {portfolioCategories.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="flex items-center justify-between px-4 py-3 text-xs text-[#4A3F35] hover:text-[#181411] hover:bg-[#FAF8F5] transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-md bg-[#F4EFE9] flex items-center justify-center text-[#8C6D46]">
                            <IconComp className="w-3.5 h-3.5" />
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F2ECE3] text-[#7A6451]">
                          {item.tag}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Packages */}
            <Link
              to="/packages"
              className={`relative text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                isActive('/packages') ? 'text-[#1A1512] font-semibold' : 'text-[#615449] hover:text-[#1A1512]'
              }`}
            >
              <span>Packages</span>
              {isActive('/packages') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
              )}
            </Link>

            {/* About */}
            <Link
              to="/about"
              className={`relative text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                isActive('/about') ? 'text-[#1A1512] font-semibold' : 'text-[#615449] hover:text-[#1A1512]'
              }`}
            >
              <span>About</span>
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
              )}
            </Link>

            {/* Reviews */}
            <Link
              to="/reviews"
              className={`relative text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                isActive('/reviews') ? 'text-[#1A1512] font-semibold' : 'text-[#615449] hover:text-[#1A1512]'
              }`}
            >
              <span>Reviews</span>
              {isActive('/reviews') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
              )}
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`relative text-[12px] tracking-[0.18em] uppercase font-medium transition-colors py-2 ${
                isActive('/contact') ? 'text-[#1A1512] font-semibold' : 'text-[#615449] hover:text-[#1A1512]'
              }`}
            >
              <span>Contact</span>
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B3874B] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right Action CTAs (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Real Minimal WhatsApp CTA */}
            <a
              href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                "Hello Glamour Makeup Studio, I would like to inquire about booking a makeup session."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Book CTA */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1A1512] hover:bg-[#2E2620] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E5C384]" />
              <span>Book Studio</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Phone + WhatsApp + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${studioBusinessInfo.phone}`}
              aria-label="Call Glamour Studio"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F2ECE3] text-[#181411] hover:bg-[#EAE2D7] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#8C6D46]" />
            </a>

            <a
              href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                "Hello Glamour Makeup Studio, I would like to inquire about makeup services."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Glamour Studio"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#25D366]/15 text-[#128C7E] hover:bg-[#25D366]/25 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#181411] text-[#FAF8F5] hover:bg-[#2E2620] transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (With Services Dropdown & Portfolio Dropdown) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#FAF9F6]">
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAE3D9] bg-[#FFFFFF]">
            <BrandLogo variant="drawer" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[#F2ECE3] text-[#1A1512] hover:bg-[#DFD6CA] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-5 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Main Navigation Links with Accordion Dropdowns */}
              <nav className="space-y-2">
                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-serif tracking-wide transition-colors ${
                    location.pathname === '/'
                      ? 'bg-[#FFFFFF] text-[#181411] font-semibold shadow-xs border-l-4 border-l-[#B3874B]'
                      : 'text-[#4A3F35] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 text-[#B3874B] opacity-60" />
                </Link>

                {/* SERVICES DROPDOWN ACCORDION (REQUESTED BY USER) */}
                <div className="bg-[#FFFFFF] rounded-xl border border-[#E8DFD5] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-3.5 px-3.5 text-left text-base font-serif tracking-wide text-[#181411] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span>Services</span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F2ECE3] text-[#7A6451] font-sans font-semibold">
                        Options
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B3874B] transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 bg-[#FAF8F5] border-t border-[#F0EAE1] animate-fade-in">
                      {serviceCategories.map((service) => (
                        <Link
                          key={service.name}
                          to={service.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-medium text-[#4A3F35] hover:text-[#181411] hover:bg-[#FFFFFF] transition-colors"
                        >
                          <span>{service.name}</span>
                          <span className="text-[9px] uppercase tracking-wider text-[#8C6D46] bg-[#F2ECE3] px-2 py-0.5 rounded">
                            {service.tag}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* PORTFOLIO DROPDOWN ACCORDION (PHOTOS & VIDEOS - REQUESTED BY USER) */}
                <div className="bg-[#FFFFFF] rounded-xl border border-[#E8DFD5] overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setMobilePortfolioOpen(!mobilePortfolioOpen)}
                    className="w-full flex items-center justify-between py-3.5 px-3.5 text-left text-base font-serif tracking-wide text-[#181411] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span>Portfolio</span>
                      <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#F2ECE3] text-[#7A6451] font-sans font-semibold">
                        Photos & Videos
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B3874B] transition-transform duration-300 ${
                        mobilePortfolioOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {mobilePortfolioOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 bg-[#FAF8F5] border-t border-[#F0EAE1] animate-fade-in">
                      {portfolioCategories.map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center justify-between py-2.5 px-3 rounded-lg text-xs font-medium text-[#4A3F35] hover:text-[#181411] hover:bg-[#FFFFFF] transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <IconComponent className="w-3.5 h-3.5 text-[#8C6D46]" />
                              <span>{item.name}</span>
                            </div>
                            <span className="text-[9px] uppercase tracking-wider text-[#8C6D46] bg-[#F2ECE3] px-2 py-0.5 rounded">
                              {item.tag}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Packages */}
                <Link
                  to="/packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-serif tracking-wide transition-colors ${
                    isActive('/packages')
                      ? 'bg-[#FFFFFF] text-[#181411] font-semibold shadow-xs border-l-4 border-l-[#B3874B]'
                      : 'text-[#4A3F35] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <span>Packages</span>
                  <ArrowRight className="w-4 h-4 text-[#B3874B] opacity-60" />
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-serif tracking-wide transition-colors ${
                    isActive('/about')
                      ? 'bg-[#FFFFFF] text-[#181411] font-semibold shadow-xs border-l-4 border-l-[#B3874B]'
                      : 'text-[#4A3F35] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <span>About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#B3874B] opacity-60" />
                </Link>

                {/* Reviews */}
                <Link
                  to="/reviews"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-serif tracking-wide transition-colors ${
                    isActive('/reviews')
                      ? 'bg-[#FFFFFF] text-[#181411] font-semibold shadow-xs border-l-4 border-l-[#B3874B]'
                      : 'text-[#4A3F35] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <span>Reviews</span>
                  <ArrowRight className="w-4 h-4 text-[#B3874B] opacity-60" />
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-serif tracking-wide transition-colors ${
                    isActive('/contact')
                      ? 'bg-[#FFFFFF] text-[#181411] font-semibold shadow-xs border-l-4 border-l-[#B3874B]'
                      : 'text-[#4A3F35] hover:bg-[#F2ECE3]'
                  }`}
                >
                  <span>Contact & Booking</span>
                  <ArrowRight className="w-4 h-4 text-[#B3874B] opacity-60" />
                </Link>
              </nav>

            </div>

            {/* Quick Actions & Studio Details */}
            <div className="mt-8 pt-5 border-t border-[#E8DFD5] space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#181411] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] rounded-full shadow"
              >
                <Calendar className="w-4 h-4 text-[#E5C384]" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                  "Hello Glamour Makeup Studio, I would like to book a makeup appointment."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-[0.16em] rounded-full shadow transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat on WhatsApp</span>
              </a>

              <div className="text-center pt-2">
                <span className="text-[11px] text-[#7A6D61] block">
                  Studio Concierge: <strong className="text-[#1A1512]">{studioBusinessInfo.phoneDisplay}</strong>
                </span>
                <span className="text-[10px] text-[#9C8F84] uppercase tracking-wider block mt-0.5">
                  Raichur Atelier, Karnataka • Available for Destination Artistry
                </span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
