import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight, Sparkles, Pause, Play, Star, ShieldCheck, Heart } from 'lucide-react';
import { WhatsAppButton } from '../common/WhatsAppButton';

export interface HeroSlide {
  id: string;
  category: string;
  tagline: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  badge: string;
  statBadge: string;
  serviceLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    category: 'Signature Bridal Masterpiece',
    tagline: '7+ Years of Royal Bridal Heritage',
    titleLine1: 'Where Heritage Meets',
    titleLine2: 'Modern Radiance',
    description: 'Bespoke South Asian & Indian bridal makeup tailored with long-wear HD formulations that honor your heritage, emotion, and individuality.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85',
    badge: 'Flagship Bridal Artistry',
    statBadge: '500+ Brides Celebrated',
    serviceLink: '/services/bridal',
  },
  {
    id: 'slide-2',
    category: 'Ethereal Engagement Glamour',
    tagline: 'Luminous Glass Skin & Romantic Shimmer',
    titleLine1: 'Dewy Radiance,',
    titleLine2: 'Untouched Elegance',
    description: 'Soft champagne tones, sculpted cheekbones, and effortless romantic curls curated for your intimate engagement ceremonies and ring exchanges.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=2000&q=85',
    badge: 'Soft Glam & Cocktail',
    statBadge: 'Custom Color Palette',
    serviceLink: '/services/engagement',
  },
  {
    id: 'slide-3',
    category: 'Red-Carpet Evening Reception',
    tagline: 'Dramatic Majesty Under Stage Lights',
    titleLine1: 'Sculpted Opulence,',
    titleLine2: 'Unforgettable Grace',
    description: 'High-impact evening contours, statement smoky eyes, and transfer-resistant sealing designed to look breathtaking on stage and in 4K photography.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=2000&q=85',
    badge: 'Grand Stage & Reception',
    statBadge: 'Transfer-Proof Base',
    serviceLink: '/services/reception',
  },
  {
    id: 'slide-4',
    category: 'Editorial & Pre-Wedding Shoots',
    tagline: 'Precision In Every Frame & Lens',
    titleLine1: 'Camera-Ready Precision,',
    titleLine2: 'Zero Flashback',
    description: 'Specialized photographic makeup with calibrated optical balance to look sensational both in golden hour sunlight and high-power strobe lighting.',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=2000&q=85',
    badge: 'Fashion & Lookbooks',
    statBadge: 'High-Definition Optics',
    serviceLink: '/services/photoshoot',
  },
  {
    id: 'slide-5',
    category: 'Luxury Beauty Atelier',
    tagline: 'Intimate Masterclass & Personal Care',
    titleLine1: 'Beauty Should Still',
    titleLine2: 'Feel Like You',
    description: 'Unhurried trials, premium international kits (Dior, Charlotte Tilbury, Huda Beauty), and a caring touch that keeps you relaxed on your biggest day.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=2000&q=85',
    badge: 'The Glamour Promise',
    statBadge: '100% Bespoke Formulation',
    serviceLink: '/about',
  }
];

export const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayDuration = 5500; // 5.5 seconds per slide

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Autoplay management
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayDuration);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide, currentIndex]);

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section
      className="relative min-h-[92vh] sm:min-h-[94vh] lg:min-h-[96vh] flex items-center justify-center bg-[#140E0A] text-[#FAF8F5] overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Glamour Makeup Studio Showcase Slideshow"
    >
      {/* Background Images Slider with Smooth Cross-Fade and Gentle Ken-Burns Zoom */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.titleLine1 + ' ' + slide.titleLine2}
                className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              {/* Luxury Multi-Layer Vignette & Color Grading */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E0A] via-[#140E0A]/60 to-[#140E0A]/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#140E0A]/90 via-[#140E0A]/50 to-transparent sm:max-w-4xl" />
              <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#140E0A]/20 to-[#140E0A]/80 pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Decorative Shimmering Gold Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C4A482]/10 blur-3xl pointer-events-none -z-0" />

      {/* Main Slide Content */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32 flex flex-col justify-between min-h-[92vh]">
        
        {/* Top Mini Trust Bar inside Hero */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#201712]/70 backdrop-blur-md border border-[#D4AF37]/30 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.25em] text-[#E5DACD]">
              {currentSlide.badge}
            </span>
          </div>

          {/* Autoplay & Slide Counter Pill */}
          <div className="flex items-center gap-2 bg-[#201712]/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-[#D8CEBE]">
            <span className="text-[#D4AF37] font-bold">0{currentIndex + 1}</span>
            <span className="text-white/30">/</span>
            <span>0{heroSlides.length}</span>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause auto-slide' : 'Play auto-slide'}
              className="ml-1.5 p-1 text-[#C4A482] hover:text-white transition-colors focus:outline-none"
              title={isPlaying ? 'Pause' : 'Resume'}
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3 fill-current" />}
            </button>
          </div>
        </div>

        {/* Center Editorial Headlines & Actions */}
        <div className="my-auto max-w-3xl pt-8 pb-12">
          
          <div className="flex items-center gap-2 mb-4">
            <span className="h-0.5 w-6 bg-[#D4AF37]" />
            <p className="text-xs sm:text-sm font-sans tracking-[0.3em] uppercase text-[#C4A482] font-semibold">
              {currentSlide.tagline}
            </p>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FAF8F5] leading-[1.06] mb-6 font-normal">
            {currentSlide.titleLine1} <br />
            <span
              className="italic font-light"
              style={{
                background: 'linear-gradient(135deg, #FAF8F5 30%, #E5DACD 70%, #D4AF37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {currentSlide.titleLine2}
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-[#D0C2B4] font-light max-w-2xl leading-relaxed mb-8 sm:mb-10 line-clamp-3 sm:line-clamp-none">
            {currentSlide.description}
          </p>

          {/* Interactive Call-To-Action Cluster */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
            <Link
              to="/contact"
              id="hero-slider-book-cta"
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#D4AF37] via-[#C4A482] to-[#B39371] hover:from-[#E5C384] hover:to-[#C4A482] text-[#140E0A] font-semibold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 rounded-xs group"
            >
              <Calendar className="w-4 h-4 text-[#140E0A]" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to={currentSlide.serviceLink}
              id="hero-slider-explore-cta"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-7 py-3.5 sm:py-4 bg-[#231A14]/70 hover:bg-[#FAF8F5] text-[#FAF8F5] hover:text-[#140E0A] border border-[#D4AF37]/40 hover:border-[#FAF8F5] font-medium text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md transition-all duration-300 rounded-xs"
            >
              <span>Explore Details</span>
            </Link>

            <div className="w-full sm:w-auto mt-1 sm:mt-0">
              <WhatsAppButton
                variant="brand"
                label="Chat on WhatsApp"
                className="!py-3.5 !px-5 text-xs sm:text-sm shadow-md"
              />
            </div>
          </div>

          {/* Floating Key Metrics Card */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 sm:gap-8 text-xs text-[#E5DACD]">
            <div className="flex items-center gap-2">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="font-semibold text-white">5.0 Star Rated</span>
              <span className="text-[#8C7A6B] hidden sm:inline">•</span>
              <span className="text-[#D0C2B4] hidden sm:inline">{currentSlide.statBadge}</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[#D0C2B4]">International Luxury Formulations</span>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#C4A482]" />
              <span className="text-[#D0C2B4]">Unhurried Personalized Care</span>
            </div>
          </div>

        </div>

        {/* Bottom Carousel Controls & Look Selector Pill Strip */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          
          {/* Slide Indicator Cards / Thumbnails */}
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto max-w-full pb-2 sm:pb-0 scrollbar-none">
            {heroSlides.map((slide, index) => {
              const isSelected = index === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`group flex items-center gap-2 px-3 py-2 rounded-sm text-left transition-all duration-300 shrink-0 ${
                    isSelected
                      ? 'bg-white/15 border border-[#D4AF37] text-white shadow-md'
                      : 'bg-black/30 border border-white/5 text-[#A8988B] hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={`Go to slide ${index + 1}: ${slide.category}`}
                >
                  <span
                    className={`text-[10px] font-mono font-bold ${
                      isSelected ? 'text-[#D4AF37]' : 'text-[#7A6D61]'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-serif font-medium leading-none whitespace-nowrap">
                      {slide.category.split(' ')[0]} {slide.category.split(' ')[1] || ''}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider text-[#A8988B] hidden md:inline">
                      {slide.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Arrows with Frosted Glass styling */}
          <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
            <button
              onClick={prevSlide}
              id="hero-prev-slide-btn"
              className="p-3 rounded-full bg-[#1F1915]/80 hover:bg-[#D4AF37] text-[#FAF8F5] hover:text-[#140E0A] border border-[#D4AF37]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Previous Slide"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              id="hero-next-slide-btn"
              className="p-3 rounded-full bg-[#1F1915]/80 hover:bg-[#D4AF37] text-[#FAF8F5] hover:text-[#140E0A] border border-[#D4AF37]/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
              aria-label="Next Slide"
              title="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Slide Auto-Advance Linear Progress Bar at Very Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-30 overflow-hidden">
        {isPlaying && (
          <div
            key={currentIndex}
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#FAF8F5] transition-all"
            style={{
              animation: `progressBarAnimation ${autoPlayDuration}ms linear`,
            }}
          />
        )}
      </div>

      {/* Progress animation keyframe injection */}
      <style>{`
        @keyframes progressBarAnimation {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};
