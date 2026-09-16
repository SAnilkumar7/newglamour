import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

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
      {/* Luxury Minimal Crest Monogram */}
      <div
        className={`relative shrink-0 flex items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${
          isFooter
            ? 'w-11 h-11 bg-[#241C16] border border-[#C4A482]/40 text-[#E5C384]'
            : isDrawer
            ? 'w-10 h-10 bg-[#1F1915] border border-[#D4AF37]/50 text-[#FAF8F5]'
            : 'w-10 h-10 sm:w-11 sm:h-11 bg-[#1A1512] border border-[#B3874B]/50 text-[#FAF8F5] shadow-sm'
        }`}
      >
        <span className="font-serif italic font-bold text-lg sm:text-xl text-[#E5C384] leading-none">
          G
        </span>
        <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] absolute -top-0.5 -right-0.5" />
      </div>

      {/* Clean Luxury Wordmark */}
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
