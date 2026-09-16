import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import { PortfolioItem } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  currentIndex: number;
  items: PortfolioItem[];
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  onNavigate?: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  currentIndex,
  items,
  onClose,
  onNext,
  onPrev,
  onNavigate,
}) => {
  const handleNext = () => {
    if (typeof onNext === 'function') {
      onNext();
    } else if (typeof onNavigate === 'function' && items.length > 0) {
      onNavigate((currentIndex + 1) % items.length);
    }
  };

  const handlePrev = () => {
    if (typeof onPrev === 'function') {
      onPrev();
    } else if (typeof onNavigate === 'function' && items.length > 0) {
      onNavigate((currentIndex - 1 + items.length) % items.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onNext, onPrev, onNavigate, currentIndex, items.length, onClose]);

  if (!isOpen || items.length === 0 || currentIndex < 0 || currentIndex >= items.length) {
    return null;
  }

  const currentItem = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Top Header Bar */}
      <div
        className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#221B16] border border-[#44382F] text-[#D8CEBE] text-xs uppercase tracking-widest font-medium">
            <Tag className="w-3 h-3 text-[#C4A482]" />
            {currentItem.category}
          </span>
          <span className="text-xs text-[#8C7A6B] font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          id="lightbox-close-btn"
          className="p-2.5 text-[#FAF8F5] hover:text-[#C4A482] bg-white/10 hover:bg-white/20 rounded-full transition-colors focus:outline-none"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        id="lightbox-prev-btn"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 text-[#FAF8F5] hover:text-[#C4A482] bg-black/40 hover:bg-black/80 rounded-full transition-colors z-10 focus:outline-none"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Main Image Container */}
      <div
        className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-h-[72vh] w-auto max-w-full object-contain rounded-sm shadow-2xl border border-white/10"
          loading="eager"
        />
        <div className="text-center mt-4">
          <h3 className="font-serif text-lg sm:text-xl text-[#FAF8F5] tracking-wide">
            {currentItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#A8998C] mt-1 max-w-lg mx-auto">
            {currentItem.description}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        id="lightbox-next-btn"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 text-[#FAF8F5] hover:text-[#C4A482] bg-black/40 hover:bg-black/80 rounded-full transition-colors z-10 focus:outline-none"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>
  );
};
