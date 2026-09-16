import React from 'react';
import { useLocation } from 'react-router-dom';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useBooking } from '../../context/BookingContext';

export const MobileBottomBar: React.FC = () => {
  const { generateWhatsAppLink } = useBooking();
  const whatsappUrl = generateWhatsAppLink();
  const location = useLocation();

  // Don't show on admin page
  if (location.pathname.startsWith('/admin')) {
    return null;
  }

  return (
    <aside
      aria-label="WhatsApp Quick Contact"
      className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-50 pointer-events-none"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="pointer-events-auto relative flex items-center group">
        {/* Desktop hover tooltip */}
        <div className="hidden lg:block absolute right-16 px-3.5 py-1.5 bg-[#120F0D] text-[#FAF8F5] text-xs font-medium rounded-full shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-white/10">
          Chat on WhatsApp
        </div>

        {/* Real WhatsApp Floating Action Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat directly on WhatsApp with Shwetha Subhash"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white shadow-[0_8px_24px_rgba(37,211,102,0.4)] active:scale-90 hover:scale-105 transition-all duration-200 cursor-pointer"
        >
          <WhatsAppIcon className="w-7 h-7 fill-white" />
        </a>
      </div>
    </aside>
  );
};
