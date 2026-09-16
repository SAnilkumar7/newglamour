import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { studioBusinessInfo } from '../../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14100E] text-[#E8DFD5] border-t border-[#261E18] pt-16 pb-24 md:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#241C16]">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-8">
            <BrandLogo variant="footer" linkToHome={true} />
            
            <p className="text-sm text-[#A89889] leading-relaxed max-w-sm">
              Certified luxury bridal and celebration makeup artistry. Dedicated to bespoke skin prep, unhurried precision, and flashback-free elegance.
            </p>

            {/* Social Channels */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={studioBusinessInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
                className="w-9 h-9 rounded-full bg-[#201813] border border-[#2E241E] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#14100E] transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={studioBusinessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Facebook"
                className="w-9 h-9 rounded-full bg-[#201813] border border-[#2E241E] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#14100E] transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={studioBusinessInfo.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Subscribe on YouTube"
                className="w-9 h-9 rounded-full bg-[#201813] border border-[#2E241E] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#14100E] transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] block pb-1 border-b border-[#2A2019]">
              Explore
            </span>
            <ul className="space-y-2.5 text-xs text-[#B5A596]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Studio</Link>
              </li>
              <li>
                <Link to="/meet-the-artist" className="hover:text-white transition-colors">Meet the Artist</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services Directory</Link>
              </li>
              <li>
                <Link to="/portfolio?type=photos" className="hover:text-white transition-colors">Photos Gallery</Link>
              </li>
              <li>
                <Link to="/portfolio?type=videos" className="hover:text-white transition-colors">Video Reels</Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">Packages & Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Looks (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] block pb-1 border-b border-[#2A2019]">
              Our Artistry
            </span>
            <ul className="space-y-2.5 text-xs text-[#B5A596]">
              <li>
                <Link to="/services/bridal" className="hover:text-white transition-colors">Bridal Artistry</Link>
              </li>
              <li>
                <Link to="/services/engagement" className="hover:text-white transition-colors">Engagement & Roka</Link>
              </li>
              <li>
                <Link to="/services/reception" className="hover:text-white transition-colors">Reception Glam</Link>
              </li>
              <li>
                <Link to="/services/party" className="hover:text-white transition-colors">Party & Sangeet</Link>
              </li>
              <li>
                <Link to="/services/photoshoot" className="hover:text-white transition-colors">Editorial & Shoot</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:text-white transition-colors">Client Reviews</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#D4AF37] block pb-1 border-b border-[#2A2019]">
              Studio Concierge
            </span>
            <ul className="space-y-3 text-xs text-[#B5A596]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-snug">{studioBusinessInfo.address}, {studioBusinessInfo.city}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`tel:${studioBusinessInfo.phone}`} className="hover:text-white transition-colors">
                  {studioBusinessInfo.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={`mailto:${studioBusinessInfo.email}`} className="hover:text-white transition-colors truncate">
                  {studioBusinessInfo.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-1 text-xs text-[#D4AF37] hover:underline"
                >
                  <span>Frequently Asked Questions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#7A6B5E] gap-4">
          <p>© {new Date().getFullYear()} Glamour Makeup Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-[#E8DFD5] transition-colors">
              Studio Inquiries
            </Link>
            <Link to="/faq" className="hover:text-[#E8DFD5] transition-colors">
              Policies & Preparation
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
