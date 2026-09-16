import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MoveHorizontal, Check, Calendar, SplitSquareVertical, Columns } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';
import { studioBusinessInfo } from '../../data/businessData';

interface TransformationLook {
  id: string;
  tabLabel: string;
  category: string;
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  techniques: string[];
  serviceLink: string;
}

const transformationLooks: TransformationLook[] = [
  {
    id: 'royal-bridal',
    tabLabel: 'Signature Royal Bridal',
    category: 'AUTHENTIC BRIDAL ARTISTRY',
    title: 'Signature South Indian Bridal Transformation',
    subtitle: 'Enhancing authentic skin warmth and natural beauty while creating a regal, temple-gold wedding presence.',
    beforeImage: '/uploads/reviews/beforeimage.jpg',
    afterImage: '/uploads/reviews/after.jpg',
    beforeAlt: 'Natural Indian bride bare skin portrait before bridal makeup',
    afterAlt: 'South Indian bride after royal bridal makeover in silk saree with gold temple jewelry',
    techniques: [
      'Multi-tier clinical skin hydration & tone calibration',
      'High-impact antique gold & champagne shimmer eye gradient',
      'Seamless royal bridal jewelry & dupatta anchoring',
      '16-hour sweat & tear-proof lock for long wedding rituals',
    ],
    serviceLink: '/services/bridal',
  },
  {
    id: 'dewy-engagement',
    tabLabel: 'Dewy Engagement Glow',
    category: 'LIGHT & LUMINOUS RADIANCE',
    title: 'Dewy Engagement & Roka Makeover',
    subtitle: 'Glass-skin hydration prep, pastel blush accents, and candlelight-catching radiance that looks natural in person and under 4K lenses.',
    beforeImage: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=1200&q=85',
    afterImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    beforeAlt: 'Natural Indian woman bare face portrait before engagement makeover',
    afterAlt: 'Regal Indian bride after engagement glam with ornate jewelry and lehenga',
    techniques: [
      'Multi-layer hyaluronic dermal priming for plump glass skin',
      'Feathered soft-glam winged liner with iris-brightening highlight',
      'Peach-champagne dimensional cheekbone strobing',
      'Weightless 12-hour setting glaze that stays fresh all night',
    ],
    serviceLink: '/services/engagement',
  },
  {
    id: 'reception-glam',
    tabLabel: 'Couture Reception Glam',
    category: 'EVENING RECEPTION MAJESTY',
    title: 'Couture Reception Glamour',
    subtitle: 'Sculpted facial contours, stage-calibrated velvet finish, and jewel-toned dramatic eye architecture designed for ballroom spotlights.',
    beforeImage: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?auto=format&fit=crop&w=1200&q=85',
    afterImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85',
    beforeAlt: 'Natural bare skin close-up portrait before reception makeover',
    afterAlt: 'Sculpted glamorous evening reception look with luminous finish',
    techniques: [
      'Zero-flashback high-definition complexion under 4K lenses',
      'Dimensional velvet smokey eye with diamond sparkle accents',
      'Precision contoured bone structure tailored for stage lights',
      'Hydra-matte transfer-proof lip artistry',
    ],
    serviceLink: '/services/reception',
  },
  {
    id: 'sangeet-cocktail',
    tabLabel: 'Sangeet & Party Shimmer',
    category: 'CELEBRATORY OCCASION GLAM',
    title: 'Sangeet & Celebration Shimmer Glow',
    subtitle: 'Vibrant celebratory hues, dance-proof sweat resistance, and voluminous hairstyles engineered to withstand high humidity.',
    beforeImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=85',
    afterImage: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1200&q=85',
    beforeAlt: 'Natural smiling Indian woman with no makeup before celebration makeover',
    afterAlt: 'Vibrant celebration party makeup with glowing radiance and sparkling eyes',
    techniques: [
      'Dance-floor friction and humidity resistance seal',
      'Crushed rose gold foil shimmer with smudge-proof kohl',
      'Voluminous Hollywood waves with anti-frizz serum',
      'Hydrating high-shine lip glaze with feather-proof liner',
    ],
    serviceLink: '/services/party',
  }
];

export const BeforeAfterComparison: React.FC = () => {
  const [activeLookId, setActiveLookId] = useState<string>('royal-bridal');
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<'slider' | 'side-by-side'>('slider');
  const [containerWidth, setContainerWidth] = useState<number>(600);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentLook = transformationLooks.find((l) => l.id === activeLookId) || transformationLooks[0];

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [viewMode, activeLookId]);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX);
    }
  };

  return (
    <section id="before-after-transformations" className="py-16 sm:py-24 bg-[#FCFAF8] border-b border-[#EFE8DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFC8] text-[#8C6839] text-xs uppercase tracking-widest font-semibold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span>Real Before & After Impressions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#120F0D] tracking-tight mb-3.5">
            Real Transformations, Unfiltered Artistry
          </h2>
          <p className="text-sm sm:text-base text-[#54483F] font-light leading-relaxed">
            Witness the natural beauty enhanced into regal bridal elegance. We celebrate authentic skin, natural warmth, and flawless high-definition makeup that never looks over-done or cakey.
          </p>

          {/* View Mode Toggle: Interactive Slider vs Side-by-Side */}
          <div className="inline-flex items-center gap-1.5 p-1 bg-[#FFFFFF] border border-[#E8DFD5] rounded-full mt-6 shadow-xs">
            <button
              type="button"
              onClick={() => setViewMode('side-by-side')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'side-by-side'
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-xs'
                  : 'text-[#615449] hover:text-[#120F0D]'
              }`}
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Side-by-Side</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('slider')}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                viewMode === 'slider'
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-xs'
                  : 'text-[#615449] hover:text-[#120F0D]'
              }`}
            >
              <SplitSquareVertical className="w-3.5 h-3.5" />
              <span>Split Slider</span>
            </button>
          </div>
        </div>

        {/* Top Look Selection Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10 sm:mb-12">
          {transformationLooks.map((look) => {
            const isActive = look.id === activeLookId;
            return (
              <button
                key={look.id}
                type="button"
                onClick={() => {
                  setActiveLookId(look.id);
                  setSliderPos(50);
                }}
                className={`px-4 sm:px-6 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-xs cursor-pointer ${
                  isActive
                    ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/40'
                    : 'bg-[#FFFFFF] text-[#54483F] hover:bg-[#F7F2EA] border border-[#E8DFD5]'
                }`}
              >
                {look.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Main Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Before / After Split Slider OR Side-by-Side */}
          <div className="lg:col-span-7">
            {viewMode === 'side-by-side' ? (
              /* SIDE-BY-SIDE VIEW */
              <div className="grid grid-cols-2 gap-3 sm:gap-5">
                {/* Before Box */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-md border border-[#E8DFD5] group bg-[#EDE5DB]">
                  <img
                    src={currentLook.beforeImage}
                    alt={currentLook.beforeAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] sm:text-xs uppercase tracking-widest font-semibold border border-white/20 shadow-xs">
                    BEFORE LOOK
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="text-white/80 text-[11px] font-light block">Natural Canvas</span>
                    <span className="font-semibold text-white truncate block">Pre-Artistry Natural Face</span>
                  </div>
                </div>

                {/* After Box */}
                <div className="relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-[#C9A050]/50 group ring-2 ring-[#C9A050]/20 bg-[#120F0D]">
                  <img
                    src={currentLook.afterImage}
                    alt={currentLook.afterAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#E5C384] text-[10px] sm:text-xs uppercase tracking-widest font-semibold border border-[#C9A050]/40 shadow-xs">
                    AFTER LOOK
                  </span>
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                    <span className="text-[#E5C384] text-[11px] font-medium block">Haute Transformation</span>
                    <span className="font-semibold text-white truncate block">{currentLook.title}</span>
                  </div>
                </div>
              </div>
            ) : (
              /* SLIDER VIEW */
              <div
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-[4/5] sm:aspect-[1/1] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD5] select-none cursor-ew-resize bg-[#14100D]"
              >
                {/* Layer 1: AFTER Image (Full background layer) */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={currentLook.afterImage}
                    alt={currentLook.afterAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center select-none pointer-events-none"
                    loading="eager"
                  />
                </div>

                {/* Layer 2: BEFORE Image (Clipped from left using width percentage) */}
                <div
                  className="absolute inset-0 top-0 left-0 bottom-0 overflow-hidden select-none pointer-events-none"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={currentLook.beforeImage}
                    alt={currentLook.beforeAlt}
                    referrerPolicy="no-referrer"
                    className="absolute top-0 left-0 h-full max-w-none object-cover object-center select-none pointer-events-none"
                    style={{
                      width: containerWidth > 0 ? `${containerWidth}px` : '100%',
                      height: '100%',
                    }}
                    loading="eager"
                  />
                </div>

                {/* Badges: BEFORE LOOK (Top Left) and AFTER LOOK (Top Right) */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold border border-white/15 shadow">
                    BEFORE LOOK
                  </span>
                </div>

                <div className="absolute top-4 right-4 z-20 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md text-[#E5C384] text-xs uppercase tracking-widest font-semibold border border-[#B3874B]/30 shadow">
                    AFTER LOOK
                  </span>
                </div>

                {/* Vertical Divider Line with Center Drag Handle */}
                <div
                  className="absolute top-0 bottom-0 z-30 pointer-events-none flex items-center justify-center"
                  style={{ left: `calc(${sliderPos}% - 1px)` }}
                >
                  {/* White vertical divider line */}
                  <div className="w-[2px] h-full bg-white shadow-[0_0_8px_rgba(0,0,0,0.6)]" />

                  {/* Circular handle with horizontal arrows */}
                  <div className="absolute w-10 h-10 rounded-full bg-[#FAF8F5] border-2 border-[#C9A050] shadow-2xl flex items-center justify-center text-[#120F0D]">
                    <MoveHorizontal className="w-5 h-5 text-[#8C6839]" />
                  </div>
                </div>

                {/* Bottom Instructions Pill */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                  <span className="px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[#FAF8F5] text-[10px] sm:text-xs uppercase tracking-widest font-medium border border-white/10 whitespace-nowrap shadow-md">
                    DRAG SLIDER OR SWIPE TO COMPARE
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Transformation Details & Actions */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Category Eyebrow & Title */}
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6839] block mb-2">
                {currentLook.category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#120F0D] tracking-tight leading-[1.15] mb-3">
                {currentLook.title}
              </h3>
              <p className="text-sm sm:text-base text-[#54483F] font-normal leading-relaxed">
                {currentLook.subtitle}
              </p>
            </div>

            {/* Techniques Card */}
            <div className="p-6 bg-[#FFFFFF] border border-[#E8DFD5] rounded-3xl shadow-xs space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#120F0D] block">
                TRANSFORMATION EFFORT & HIGHLIGHTS:
              </span>

              <ul className="space-y-3">
                {currentLook.techniques.map((tech, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#4A3F35]">
                    <div className="w-4 h-4 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#C9A050] shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span className="font-medium text-[#38312B]">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Compare Buttons (Before, 50/50, After) - only if in slider mode */}
            {viewMode === 'slider' && (
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs text-[#7A6D61] font-medium mr-1">Quick Compare:</span>
                <button
                  type="button"
                  onClick={() => setSliderPos(100)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    sliderPos >= 98
                      ? 'bg-[#120F0D] text-white shadow-xs'
                      : 'bg-[#FFFFFF] border border-[#E8DFD5] text-[#54483F] hover:bg-[#F7F2EA]'
                  }`}
                >
                  Show Before
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    sliderPos > 30 && sliderPos < 70
                      ? 'bg-[#120F0D] text-white shadow-xs'
                      : 'bg-[#FFFFFF] border border-[#E8DFD5] text-[#54483F] hover:bg-[#F7F2EA]'
                  }`}
                >
                  50 / 50 Split
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(0)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                    sliderPos <= 2
                      ? 'bg-[#120F0D] text-white shadow-xs'
                      : 'bg-[#FFFFFF] border border-[#E8DFD5] text-[#54483F] hover:bg-[#F7F2EA]'
                  }`}
                >
                  Show After
                </button>
              </div>
            )}

            {/* Actions: Book Look or WhatsApp with minimal icon */}
            <div className="pt-3 border-t border-[#E8DFD5] flex flex-col sm:flex-row items-center gap-3.5">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#C9A050]" />
                <span>Book This Look</span>
              </Link>

              <a
                href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                  `Hi Shwetha Subhash! I saw your "${currentLook.title}" Before & After transformation on your website. I love the finish and would like to ask about availability for my event.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-sm active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Look</span>
              </a>

              <Link
                to={currentLook.serviceLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#8C6839] hover:text-[#120F0D] transition-colors py-2 sm:ml-auto"
              >
                <span>Service Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
