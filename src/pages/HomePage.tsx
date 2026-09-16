import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, Star, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/common/SEO';
import { MinimalHero } from '../components/home/MinimalHero';
import { BeforeAfterComparison } from '../components/home/BeforeAfterComparison';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { SafeImage } from '../components/common/SafeImage';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
  LuxuryMarquee,
} from '../components/common/MotionWrapper';
import { artistImages, serviceImages, portfolioImages } from '../data/images';
import {
  studioServices,
  studioReviews,
  studioBusinessInfo
} from '../data/businessData';

export const HomePage: React.FC = () => {
  const featuredServices = studioServices.filter(s => s.featuredOnHome);
  const featuredPortfolio = portfolioImages.filter(p => p.featuredOnHome).slice(0, 6);
  const selectedReviews = studioReviews.filter(r => r.featuredOnHome).slice(0, 3);

  // Active tab state for interactive signature look spotlight
  const [activeLookTab, setActiveLookTab] = useState<'bridal' | 'engagement' | 'reception' | 'photoshoot'>('bridal');

  const lookShowcases = {
    bridal: {
      title: 'Royal Heritage Bridal Artistry',
      subtitle: 'For the bride commanding timeless majesty, heirloom harmony, and luminous skin in Raichur, Karnataka.',
      image: serviceImages.bridal,
      duration: '3.5 Hours (Unhurried)',
      base: 'Ultra-luminous waterproof HD complexion with 16-hour lock',
      eyes: 'Multi-tonal antique gold shimmer with tailored 3D lashes',
      hair: 'Architectural royal bun with dual dupatta & fresh floral setting',
      servicePath: '/services/bridal',
    },
    engagement: {
      title: 'Pastel Dewy Engagement Radiance',
      subtitle: 'Fresh, youthful, and luminous skin that catches candlelight in intimate ring ceremonies.',
      image: serviceImages.engagement,
      duration: '2.5 Hours',
      base: 'Glass-skin hydration prep with soft peach-champagne blush',
      eyes: 'Soft champagne sparkle with precision feathered wing',
      hair: 'Voluminous Hollywood waves or textured floral braid',
      servicePath: '/services/engagement',
    },
    reception: {
      title: 'Sculpted Red-Carpet Reception Glam',
      subtitle: 'High-octane glamour engineered to shine under grand ballroom spotlights.',
      image: serviceImages.reception,
      duration: '2.5 Hours',
      base: 'Contoured velvet matte finish with zero camera flashback',
      eyes: 'Dramatic jewel-toned smoky eye with high-shine glitter cut',
      hair: 'Modern sleek ponytail or sculpted red-carpet side-swept hair',
      servicePath: '/services/reception',
    },
    photoshoot: {
      title: 'Editorial & Pre-Wedding Camera Perfection',
      subtitle: 'Zero-flashback precision makeup calibrated for natural daylight and studio flashes.',
      image: serviceImages.photoshoot,
      duration: '2.0 Hours',
      base: 'Optically balanced satin HD with shine-control T-zone',
      eyes: 'Defined socket sculpt with individual cluster lashes',
      hair: 'Wind-resistant textured styling suitable for outdoor shoots',
      servicePath: '/services/photoshoot',
    },
  };

  return (
    <div className="bg-[#FCFAF8] text-[#120F0D] overflow-hidden">
      <SEO
        title="Glamour Makeup Studio | Luxury Bridal & Occasion Artistry by Shwetha Subhash"
        description="Glamour Makeup Studio by Shwetha Subhash in Raichur, Karnataka — 7+ years of master bridal artistry, 16-hour waterproof HD finish, and bespoke occasion transformations."
      />

      {/* 1. HERO SECTION: Senior-Level Mobile Responsive Layout & Carousel */}
      <MinimalHero />

      {/* 2. PLAYFUL LUXURY ANIMATED TICKER MARQUEE */}
      <LuxuryMarquee />

      {/* 3. MINIMAL TRUST BAR (WITH STAGGERED SCROLL ANIMATIONS) */}
      <AnimatedSection className="py-10 bg-[#FCFAF8] border-b border-[#EFE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer
            staggerDelay={0.12}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#EFE8DE]"
          >
            <StaggerItem className="pt-2 sm:pt-0 sm:px-4">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#120F0D]">
                7+ <span className="text-[#C9A050] font-serif">Years</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#76685E] mt-1.5 block font-semibold">
                Haute Artistry Heritage
              </span>
            </StaggerItem>

            <StaggerItem className="pt-4 sm:pt-0 sm:px-4">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#120F0D]">
                500+ <span className="text-[#C9A050] font-serif">Brides</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#76685E] mt-1.5 block font-semibold">
                Celebrated in Karnataka & Beyond
              </span>
            </StaggerItem>

            <StaggerItem className="pt-4 sm:pt-0 sm:px-4">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#120F0D]">
                5.0 <span className="text-[#C9A050] font-serif">★</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#76685E] mt-1.5 block font-semibold">
                Flawless Client Rating
              </span>
            </StaggerItem>

            <StaggerItem className="pt-4 sm:pt-0 sm:px-4">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#120F0D]">
                100% <span className="text-[#C9A050] font-serif">Punctual</span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#76685E] mt-1.5 block font-semibold">
                On-Time Venue Delivery
              </span>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* 4. BEFORE & AFTER REAL TRANSFORMATION COMPARISON SLIDER */}
      <AnimatedSection>
        <BeforeAfterComparison />
      </AnimatedSection>

      {/* 5. FEATURED SERVICES SECTION WITH PLAYFUL HOVER CARDS */}
      <AnimatedSection className="py-16 lg:py-24 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-[#EFE8DE] gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6839] block mb-1.5">
                Bespoke Beauty Disciplines
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#120F0D]">
                Signature Makeup Services
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#120F0D] hover:text-[#8C6839] transition-colors group"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <StaggerItem key={service.id}>
                <div className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.08)] hover:-translate-y-1.5 transition-all duration-300 group h-full">
                  <div>
                    {/* Photo with Smart Fit */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#F2EDE4]">
                      <SafeImage
                        src={service.heroImage}
                        alt={service.name}
                        fitMode="smart"
                        focalPoint="top"
                        className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] uppercase tracking-wider font-semibold border border-white/20">
                        {service.name.split(' ')[0]} Look
                      </div>
                    </div>

                    {/* Clean Explanation */}
                    <div className="p-6 space-y-3.5 text-left">
                      <h3 className="font-serif text-2xl text-[#120F0D] group-hover:text-[#8C6839] transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed line-clamp-3">
                        {service.shortDescription}
                      </p>

                      <div className="border-t border-[#F5EFE6] pt-3 space-y-2">
                        {service.inclusions.slice(0, 2).map((inc, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#54483F]">
                            <Check className="w-3.5 h-3.5 text-[#C9A050] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{inc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Link */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-[#F5EFE6] mt-2 pt-4">
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#120F0D] group-hover:text-[#8C6839] transition-colors"
                    >
                      <span>View Look Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </AnimatedSection>

      {/* 6. INTERACTIVE LOOK SPOTLIGHT */}
      <AnimatedSection className="py-16 lg:py-22 bg-[#F9F5EF] border-y border-[#EFE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6839] block mb-2">
              Artistry Blueprint
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D]">
              Inside Our Signature Aesthetics
            </h2>
            <p className="text-sm text-[#54483F] mt-2">
              Select an occasion to examine how master artist Shwetha Subhash balances skin prep, eye architecture, and couture harmony.
            </p>
          </div>

          {/* Interactive Look Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none">
            {[
              { id: 'bridal', label: 'Signature Bridal' },
              { id: 'engagement', label: 'Pastel Engagement' },
              { id: 'reception', label: 'Evening Reception' },
              { id: 'photoshoot', label: 'Editorial Shoot' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveLookTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 shrink-0 cursor-pointer ${
                  activeLookTab === tab.id
                    ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/40'
                    : 'bg-[#FFFFFF] text-[#54483F] hover:bg-[#F2EDE4] border border-[#E8DFD5]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Spotlight Card */}
          {(() => {
            const currentLook = lookShowcases[activeLookTab];
            return (
              <motion.div
                key={activeLookTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-6 bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl shadow-[0_12px_40px_rgba(20,16,12,0.06)] overflow-hidden grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F2EDE4]">
                  <SafeImage
                    src={currentLook.image}
                    alt={currentLook.title}
                    fitMode="smart"
                    focalPoint="top"
                    className="w-full h-full"
                  />
                  <div className="absolute top-4 left-4 bg-black/65 backdrop-blur-md text-[#FAF8F5] text-[11px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-white/20">
                    {currentLook.duration}
                  </div>
                </div>

                <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6 text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C6839] block mb-1">
                      Artistry Blueprint
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#120F0D] mb-2">
                      {currentLook.title}
                    </h3>
                    <p className="text-sm text-[#54483F] leading-relaxed">
                      {currentLook.subtitle}
                    </p>

                    <div className="space-y-4 mt-6 pt-6 border-t border-[#F2EDE4] text-xs">
                      <div>
                        <strong className="block text-[#120F0D] uppercase tracking-wider text-[11px] mb-1">
                          Complexion & Base
                        </strong>
                        <p className="text-[#54483F]">{currentLook.base}</p>
                      </div>

                      <div>
                        <strong className="block text-[#120F0D] uppercase tracking-wider text-[11px] mb-1">
                          Eye & Lash Architecture
                        </strong>
                        <p className="text-[#54483F]">{currentLook.eyes}</p>
                      </div>

                      <div>
                        <strong className="block text-[#120F0D] uppercase tracking-wider text-[11px] mb-1">
                          Hair Styling & Placement
                        </strong>
                        <p className="text-[#54483F]">{currentLook.hair}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={currentLook.servicePath}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#120F0D] text-[#FAF8F5] hover:bg-[#25201C] text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
                    >
                      <span>Explore Look Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })()}

        </div>
      </AnimatedSection>

      {/* 7. PORTFOLIO SHOWCASE WITH STAGGERED CARDS */}
      <AnimatedSection className="py-16 lg:py-24 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-5 border-b border-[#EFE8DE] gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8C6839] block mb-1.5">
                Visual Evidence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#120F0D]">
                Recent Real Brides & Transformations
              </h2>
            </div>

            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#120F0D] hover:text-[#8C6839] transition-colors group"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {featuredPortfolio.map((item) => (
              <StaggerItem key={item.id}>
                <Link
                  to="/portfolio"
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F2EDE4] shadow-sm hover:shadow-xl transition-all duration-500 block border border-[#EFE8DE]"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fitMode="smart"
                    focalPoint="top"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity p-4 sm:p-6 flex flex-col justify-end text-white">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#E5C384] font-medium block mb-1">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg text-[#FAF8F5] leading-snug line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </AnimatedSection>

      {/* 8. LEAD ARTIST STATEMENT */}
      <AnimatedSection className="py-16 lg:py-24 bg-[#FFFFFF] border-y border-[#EFE8DE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(20,16,12,0.12)] aspect-[4/5] bg-[#F2EDE4] border border-[#EFE8DE] w-full max-w-md">
                <SafeImage
                  src="/uploads/artist/founder2.jpg"
                  alt="Shwetha Subhash - Founder & Master Makeup Artist"
                  fitMode="smart"
                  focalPoint="top"
                  className="w-full h-full"
                />
                <div className="absolute bottom-4 inset-x-4 p-3.5 rounded-2xl bg-black/70 backdrop-blur-md border border-white/20 text-white text-left">
                  <strong className="block text-sm font-serif text-white">Shwetha Subhash</strong>
                  <span className="text-[11px] text-[#E5C384]">Founder & Master Bridal Artist • Raichur</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#E8DFC8] text-[11px] uppercase tracking-[0.2em] text-[#8C6839] font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
                <span>Meet Shwetha Subhash</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#120F0D] leading-tight">
                "Makeup should never feel like a mask. It should feel like your most luminous, unmistakable self."
              </h2>

              <p className="text-base text-[#54483F] leading-relaxed">
                With over 7 years of specialized bridal and high-definition makeup mastery based in Raichur, Karnataka, Shwetha Subhash's philosophy celebrates individual facial symmetry, authentic skin health, and long-wear comfort. From traditional sacred pheras to grand reception celebrations, every look is crafted with dermatologically safe, camera-ready luxury formulations.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/meet-the-artist"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#120F0D] text-[#FAF8F5] hover:bg-[#25201C] text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
                >
                  <span>Read Shwetha's Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#E8DFD5] text-[#54483F] hover:text-[#120F0D] hover:border-[#120F0D] text-xs uppercase tracking-widest font-semibold transition-all"
                >
                  <span>Studio Philosophy</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* 9. CLIENT REVIEWS / TESTIMONIALS WITH MAKEUP LOOKS */}
      <AnimatedSection className="py-16 lg:py-24 bg-[#FCFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex justify-center text-[#D4AF37] mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
              ))}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D]">
              Words from Our Real Brides
            </h2>
            <p className="text-sm text-[#54483F] mt-2">
              Real makeover looks and verified experiences from brides styled by Shwetha Subhash.
            </p>
          </div>

          <StaggerContainer staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {selectedReviews.map((rev) => (
              <StaggerItem key={rev.id}>
                <div className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(20,16,12,0.08)] transition-all duration-300 flex flex-col justify-between h-full">
                  {/* Look Photo with Smart Fitting */}
                  {rev.lookPhoto && (
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EDE4]">
                      <SafeImage
                        src={rev.lookPhoto}
                        alt={rev.lookTitle || `${rev.clientName} makeover look`}
                        fitMode="smart"
                        focalPoint="top"
                        className="w-full h-full"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-[#FAF8F5] text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/20">
                        {rev.eventType}
                      </div>
                      {rev.lookTitle && (
                        <div className="absolute bottom-3 left-3 right-3 text-white bg-black/55 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium truncate">
                          {rev.lookTitle}
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex text-[#D4AF37] mb-3">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-[#4A3F35] leading-relaxed italic mb-4">
                        "{rev.review}"
                      </p>
                    </div>

                    <div className="border-t border-[#F2EDE4] pt-3 flex items-center justify-between">
                      <div>
                        <strong className="block text-sm text-[#120F0D] font-semibold">
                          {rev.clientName}
                        </strong>
                        <span className="text-[11px] text-[#8C6839]">
                          {rev.location || 'Raichur, Karnataka'}
                        </span>
                      </div>
                      <Link
                        to="/reviews"
                        className="text-xs text-[#8C6839] hover:underline font-semibold"
                      >
                        All Reviews →
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </AnimatedSection>

      {/* 10. SENIOR-LEVEL LUXURY BOOKING BANNER */}
      <AnimatedSection className="py-16 lg:py-24 bg-[#120F0D] text-[#FAF8F5] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#C9A050]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-[11px] uppercase tracking-[0.2em] text-[#E5C384]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2026 Bridal Calendar Open</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F5] leading-tight">
            Reserve Your Wedding or Event Date
          </h2>

          <p className="text-sm sm:text-base text-[#D5C9BD] font-light max-w-2xl mx-auto leading-relaxed">
            Due to our unhurried approach, master artist Shwetha Subhash accepts a strictly limited number of bridal bookings each season. Reserve your consultation early to secure your date.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-md active:scale-95"
            >
              <Calendar className="w-4 h-4 text-[#8C6839]" />
              <span>Book Consultation</span>
            </Link>

            <a
              href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                "Hello Glamour Makeup Studio by Shwetha Subhash! I would like to inquire about wedding makeup booking."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-[0.16em] transition-all shadow-md active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};
