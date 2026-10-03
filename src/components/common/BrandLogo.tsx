import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  variant?: 'header' | 'footer' | 'hero' | 'drawer';
  className?: string;
  linkToHome?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'header',
  className = '',
  linkToHome = true,
}) => {
  const isFooter = variant === 'footer';
  const isDrawer = variant === 'drawer';

  const logoContent = (
    <div
      className={`inline-flex items-center gap-3 group select-none transition-all duration-300 ${className}`}
    >
      {/* --- NEW LOGO IMAGE SECTION --- */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
          isFooter
            ? 'w-11 h-11 border border-[#C4A482]/40'
            : isDrawer
            ? 'w-10 h-10 border border-[#D4AF37]/50'
            : 'w-10 h-10 sm:w-11 sm:h-11 border border-[#B3874B]/50 shadow-sm'
        }`}
      >
        <img
          src="public/logo.png" // <-- MAKE SURE THIS MATCHES YOUR IMAGE NAME IN THE PUBLIC FOLDER
          alt="Glamour Makeup Studio Logo"
          className="w-full h-full object-contain" 
        />
      </div>
      {/* ---------------------------- */}

      {/* Clean Luxury Wordmark (Kept exactly as you had it) */}
      <div className="flex flex-col text-left justify-center">
        <span
          className={`font-serif tracking-[0.22em] font-semibold uppercase leading-tight transition-colors ${
            isFooter
              ? 'text-xl sm:text-2xl text-[#FAF8F5] group-hover:text-[#E5C384]'
              : isDrawer
              ? 'text-lg sm:text-xl text-[#1F1915] group-hover:text-[#8C7355]'
              : 'text-lg sm:text-xl text-[#1A1512] group-hover:text-[#8C7355]'
          }`}
        >
          GLAMOUR
        </span>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="h-[1px] w-2 bg-[#B3874B]/50" />
          <span
            className={`text-[8px] sm:text-[9px] tracking-[0.32em] uppercase font-sans font-medium leading-none ${
              isFooter ? 'text-[#C4A482]' : 'text-[#8C7355]'
            }`}
          >
            MAKEUP STUDIO
          </span>
        </div>
      </div>
    </div>
  );

  if (linkToHome) {
    return (
      <Link
        to="/"
        className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8C7355]"
        aria-label="Glamour Makeup Studio - Home"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};