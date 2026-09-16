import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Check, Sparkles, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioServices, studioPackages } from '../data/businessData';
import { Lightbox } from '../components/common/Lightbox';
import { ServiceCraftShowcase } from '../components/services/ServiceCraftShowcase';
import { PortfolioItem } from '../types';
import { AnimatedSection } from '../components/common/MotionWrapper';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = studioServices.find((s) => s.id === serviceId);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const isBridal = service.id === 'bridal';

  const galleryAsPortfolio: PortfolioItem[] = service.galleryImages.map((img, i) => ({
    id: `${service.id}-img-${i}`,
    title: `${service.name} Showcase ${i + 1}`,
    category: (isBridal ? 'Bridal' : service.id === 'engagement' ? 'Engagement' : 'Party') as any,
    image: img,
    description: service.shortDescription,
  }));

  const relatedPkgs = studioPackages.filter(p => service.relatedPackages.includes(p.name));

  return (
    <div className="bg-[#FCFAF8] pb-24 text-[#120F0D]">
      <SEO
        title={`${service.name} | Glamour Makeup Studio Raichur`}
        description={service.shortDescription}
      />

      <Breadcrumbs
        items={[
          { label: 'Services', path: '/services' },
          { label: service.name }
        ]}
      />

      {/* Hero Section */}
      <AnimatedSection className="relative py-20 lg:py-24 bg-[#120F0D] text-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.name}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/75 to-[#120F0D]/85" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C9A050]/40 bg-[#1F1915]/80 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C384]" />
            <span className="text-[11px] uppercase tracking-widest text-[#E5DACD] font-medium">
              Bespoke Luxury Artistry
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-[#FAF8F5] leading-tight mb-4">
            {service.tagline}
          </h1>

          <p className="text-base sm:text-xl text-[#D5C9BD] font-light max-w-2xl mx-auto leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </AnimatedSection>

      {/* 1. FIRST: Photographic Evidence of How The Work Will Be Done & Effort */}
      <AnimatedSection>
        <ServiceCraftShowcase service={service} id="craft-effort-showcase" />
      </AnimatedSection>

      {/* Main Content Grid */}
      <AnimatedSection className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left / Main Details */}
          <div className="lg:col-span-8 space-y-14">
            
            {/* What's Included */}
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
                Curated Experience
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D] mb-6">
                What's Included in Your Session
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.inclusions.map((inc, i) => (
                  <div
                    key={i}
                    className="p-5 bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl flex items-start gap-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
                  >
                    <Check className="w-4 h-4 text-[#C9A050] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#4E443B] font-medium">
                      {inc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* If Bridal: Bridal Preparation Timeline */}
            {isBridal && service.timelineSteps && (
              <div className="p-8 sm:p-10 bg-[#FAF5EE] border border-[#E8DFC8] rounded-3xl">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
                  The Wedding Day Flow
                </span>
                <h2 className="font-serif text-3xl text-[#120F0D] mb-6">
                  Bridal Preparation Timeline
                </h2>
                <div className="space-y-6">
                  {service.timelineSteps.map((t, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#120F0D] text-[#E5C384] font-serif text-sm flex items-center justify-center shrink-0 font-semibold shadow-xs">
                        {t.step}
                      </div>
                      <div>
                        <h4 className="font-serif text-lg text-[#120F0D] font-medium">
                          {t.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#54483F] mt-1 leading-relaxed">
                          {t.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Look Options */}
            {service.lookOptions && service.lookOptions.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
                  Aesthetic Variations
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D] mb-6">
                  Signature Look Options
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {service.lookOptions.map((look, i) => (
                    <div
                      key={i}
                      className="p-6 bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl shadow-xs flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-serif text-lg text-[#120F0D] mb-2 font-medium">
                          {look.title}
                        </h4>
                        <p className="text-xs text-[#54483F] leading-relaxed">
                          {look.desc}
                        </p>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold mt-4 block">
                        Fully Customizable
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery Grid */}
            <div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
                Visual Evidence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D] mb-6">
                Recent {service.name} Looks
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {service.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setLightboxIndex(i);
                      setLightboxOpen(true);
                    }}
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl cursor-pointer group bg-[#E2D9CE] shadow-sm"
                  >
                    <img
                      src={img}
                      alt={`${service.name} photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-3.5 py-1.5 bg-white/95 text-[#120F0D] text-xs uppercase tracking-widest font-semibold rounded-full shadow-md">
                        View Photo
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preparation Tips */}
            <div className="p-6 sm:p-8 bg-[#FAF5EE] border border-[#E8DFC8] rounded-3xl">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
                Optimal Results
              </span>
              <h3 className="font-serif text-2xl text-[#120F0D] mb-4">
                How to Prepare for Your Appointment
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#54483F]">
                {service.preparationTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A050] shrink-0 mt-2" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQs for this service */}
            {service.faqs && service.faqs.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
                  Clear Answers
                </span>
                <h2 className="font-serif text-3xl text-[#120F0D] mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-3">
                  {service.faqs.map((f, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl overflow-hidden shadow-xs"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between text-sm sm:text-base font-serif text-[#120F0D] font-medium cursor-pointer hover:text-[#8C6839]"
                        >
                          <span>{f.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 text-[#C9A050] shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-[#76685E] shrink-0" />
                          )}
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4 text-xs sm:text-sm text-[#54483F] leading-relaxed border-t border-[#F2EDE4] pt-3">
                            {f.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>

          {/* Right Sidebar: Perfect For & Related Packages */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Perfect For Box */}
            <div className="p-6 sm:p-8 bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold block mb-1">
                Client Compatibility
              </span>
              <h4 className="font-serif text-2xl text-[#120F0D] mb-4">
                Perfect For:
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-[#54483F]">
                {service.perfectFor.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#C9A050] shrink-0 mt-0.5" />
                    <span className="leading-snug">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Packages */}
            {relatedPkgs.length > 0 && (
              <div className="p-6 bg-[#FAF5EE] border border-[#E8DFC8] rounded-3xl">
                <h4 className="font-serif text-xl text-[#120F0D] mb-4">
                  Related Packages
                </h4>
                <div className="space-y-4">
                  {relatedPkgs.map((pkg) => (
                    <div key={pkg.id} className="p-4 bg-white border border-[#E8DFC8] rounded-2xl shadow-xs">
                      <div className="flex items-center justify-between mb-1">
                        <h5 className="font-serif text-base text-[#120F0D] font-medium">
                          {pkg.name}
                        </h5>
                        <span className="text-xs font-serif font-semibold text-[#8C6839]">
                          {pkg.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#54483F] mb-3">
                        {pkg.tagline}
                      </p>
                      <Link
                        to="/packages"
                        className="text-xs uppercase tracking-wider text-[#8C6839] hover:underline font-semibold flex items-center gap-1"
                      >
                        View Package Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Direct Booking CTA */}
            <div className="p-6 sm:p-8 bg-[#120F0D] text-[#FAF8F5] rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A050]/15 rounded-full blur-2xl pointer-events-none" />
              <h4 className="font-serif text-2xl text-[#FAF8F5] mb-2">
                Ready to Book {service.name}?
              </h4>
              <p className="text-xs text-[#D5C9BD] leading-relaxed mb-6 font-light">
                Secure your consultation or bridal slot with Shwetha Subhash in Raichur.
              </p>
              <Link
                to="/contact"
                className="w-full text-center py-3.5 px-4 bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-widest rounded-full block transition-all active:scale-95 shadow-md"
              >
                Inquire For Your Date
              </Link>
            </div>

          </div>

        </div>
      </AnimatedSection>

      {/* Lightbox for Gallery */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={galleryAsPortfolio}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % galleryAsPortfolio.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + galleryAsPortfolio.length) % galleryAsPortfolio.length)}
      />
    </div>
  );
};
