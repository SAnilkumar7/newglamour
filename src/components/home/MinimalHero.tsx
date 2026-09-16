import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Star, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { SafeImage } from '../common/SafeImage';
import { studioBusinessInfo } from '../../data/businessData';

interface HeroSlide {
  id: string;
  image: string;
  category: string;
  tagline: string;
  title: string;
  description: string;
  link: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'bridal-karnataka',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85',
    category: 'Karnataka Bridal',
    tagline: 'Temple Gold & Silk Saree Artistry',
    title: 'Authentic South Indian Bridal Grace',
    description: 'Bespoke bridal makeup by Shwetha Subhash in Raichur — sweat-proof, natural radiant glow tailored for sacred Muhurtham ceremonies.',
    link: '/services/bridal',
  },
  {
    id: 'bridal-1',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    category: 'Signature Bridal',
    tagline: 'Royal Heritage Elegance',
    title: 'Royal Heritage Bridal Artistry',
    description: '16-hour sweat-proof HD base, antique gold shimmer eyes, and flawless heirloom jewelry setting.',
    link: '/services/bridal',
  },
  {
    id: 'engagement-2',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    category: 'Engagement',
    tagline: 'Luminous Candlelight Glow',
    title: 'Pastel Dewy Engagement Radiance',
    description: 'Glass-skin hydration prep, rose-champagne shimmer eyes, and romantic textured waves.',
    link: '/services/engagement',
  },
  {
    id: 'reception-3',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=85',
    category: 'Reception Glam',
    tagline: 'Red-Carpet Spotlight Ready',
    title: 'Sculpted Red-Carpet Reception Glam',
    description: 'Dramatic smoky eye architecture, velvet contouring, and zero camera flashback under stage lights.',
    link: '/services/reception',
  },
  {
    id: 'photoshoot-4',
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85',
    category: 'Editorial',
    tagline: '4K High-Definition Precision',
    title: 'Camera-Optimized Editorial Precision',
    description: 'Zero-flashback satin skin calibration designed for high-resolution 4K lenses and outdoor daylight.',
    link: '/services/photoshoot',
  },
  {
    id: 'party-5',
    image: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1200&q=85',
    category: 'Sangeet & Party',
    tagline: 'All-Night Dance Endurance',
    title: 'Luminous Cocktail & Festive Glamour',
    description: 'High-impact pigment formulations, tailored double lashes, and all-night celebration endurance.',
    link: '/services/party',
  },
];

export const MinimalHero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  // Auto-swipe effect
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative bg-[#FCFAF8] pt-6 sm:pt-12 pb-14 sm:pb-20 border-b border-[#EFE8DE] overflow-hidden">
      {/* Radiant High-Fashion Ambient Glows */}
      <div className="absolute -top-32 right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-[#F5EAD9]/60 via-[#F3E2C8]/30 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] bg-gradient-to-tr from-[#EEDDC4]/40 via-[#FDF8F0]/50 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Editorial Typography & Mobile-First High-Level CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            
            {/* Playful Senior-Level Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E8DFC8] shadow-[0_2px_10px_rgba(200,160,80,0.08)] text-[11px] uppercase tracking-[0.2em] text-[#8C6839] font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A050]" />
              </span>
              <span className="font-semibold text-[#120F0D]">Raichur Atelier</span>
              <span className="text-[#D4AF37]">•</span>
              <span>7+ Yrs Luxury Bridal Artistry</span>
            </motion.div>

            {/* Main Luxury Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#120F0D] tracking-tight leading-[1.12]">
                Timeless Artistry for Your{' '}
                <span className="relative inline-block italic font-light text-[#9E783B]">
                  Most Cherished
                  <span className="absolute bottom-1.5 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#F1D8A2] rounded-full opacity-60" />
                </span>{' '}
                Celebration.
              </h1>
            </motion.div>

            {/* Senior-Level Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-[#4E443B] font-normal leading-relaxed max-w-xl"
            >
              Skin-first, luminous formulations tailored to your heritage, skin tone, and couture. Led by master artist{' '}
              <strong className="text-[#120F0D] font-semibold">Shwetha Subhash</strong> in Raichur, Karnataka — delivering 16-hour sweat-proof, camera-ready bridal perfection.
            </motion.p>

            {/* Mobile Feature Highlights Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-2 pt-1 text-xs text-[#38312B]"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EFE8DE] shadow-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]" />
                <span>16-Hr Waterproof HD</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EFE8DE] shadow-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]" />
                <span>Zero Flashback</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#EFE8DE] shadow-xs font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A050]" />
                <span>Global Luxury Kit</span>
              </span>
            </motion.div>

            {/* Action Buttons: Senior-Level Design & Mobile Optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Link
                id="hero-book-btn"
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-[0_8px_20px_rgba(18,15,13,0.18)] hover:shadow-[0_12px_28px_rgba(18,15,13,0.25)] active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37] transition-transform group-hover:scale-110" />
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                  "Hi Glamour Makeup Studio by Shwetha Subhash! I would like to check bridal / makeup slot availability."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all shadow-[0_6px_18px_rgba(37,211,102,0.22)] active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Concierge</span>
              </a>
            </motion.div>

            {/* Social Proof Trust Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-[#EFE8DE] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#6B5E53]"
            >
              <div className="flex items-center gap-2">
                <div className="flex text-[#D4AF37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                  ))}
                </div>
                <span className="font-semibold text-[#120F0D]">5.0 Star Rating</span>
              </div>
              <span className="text-[#D8CEBE]">•</span>
              <div>
                <strong className="text-[#120F0D] font-semibold">500+</strong> Real Brides Styled
              </div>
              <span className="hidden sm:inline text-[#D8CEBE]">•</span>
              <div className="hidden sm:block text-[#8C6839] font-medium">
                Raichur & Destination
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Senior-Level Box-Type Photos Auto-Swiper with Playful Micro-Interactions */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Quick-Switch Category Tabs (Playful on Mobile & Desktop) */}
            <div className="flex items-center gap-1.5 mb-3.5 overflow-x-auto max-w-full pb-1 scrollbar-none">
              {HERO_SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wider uppercase transition-all duration-300 shrink-0 ${
                    currentIndex === idx
                      ? 'bg-[#120F0D] text-[#FAF8F5] shadow-xs'
                      : 'bg-white text-[#6B5E53] hover:text-[#120F0D] border border-[#EFE8DE]'
                  }`}
                >
                  {slide.category}
                </button>
              ))}
            </div>

            {/* Luxury Swiper Frame */}
            <div
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,16,12,0.12)] border border-[#EAE0D2] bg-[#F2EDE4] select-none group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* Slides Container with Fade Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <SafeImage
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    fitMode="smart"
                    focalPoint="top"
                    className="w-full h-full"
                  />
                  {/* Subtle luxury vignette & bottom gradient for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#100D0B]/95 via-[#100D0B]/35 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Floating Top Category Pill */}
              <div className="absolute top-4 left-4 z-20">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-[10px] uppercase tracking-[0.2em] font-medium shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5C384] animate-pulse" />
                  <span>{currentSlide.category}</span>
                </div>
              </div>

              {/* Floating Verified Bride Seal Badge (Top Right) */}
              {/* <div className="absolute top-4 right-4 z-20">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur-md border border-white/60 text-[#8C6839] text-[10px] font-semibold shadow-md">
                  <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                  <span>100% Waterproof HD</span>
                </div>
              </div> */}

              {/* Bottom Information Card */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 text-left text-white">
                <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#E5C384] block mb-1">
                  {currentSlide.tagline}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] leading-snug mb-1">
                  {currentSlide.title}
                </h3>
                <p className="text-xs text-[#E5DCD2] font-light line-clamp-2 leading-relaxed mb-4">
                  {currentSlide.description}
                </p>

                {/* Progress Indicators & Navigation Controls */}
                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                  {/* Indicator Pills */}
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === currentIndex
                            ? 'w-7 bg-[#E5C384]'
                            : 'w-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center transition-all active:scale-90"
                      aria-label="Previous look photo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-sm border border-white/25 text-white flex items-center justify-center transition-all active:scale-90"
                      aria-label="Next look photo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
