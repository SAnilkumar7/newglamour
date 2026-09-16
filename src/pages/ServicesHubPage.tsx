import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Check,
  X,
  Camera,
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { studioServices } from '../data/businessData';
import { ServiceCraftShowcase } from '../components/services/ServiceCraftShowcase';
import { ServiceItem } from '../types';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const ServicesHubPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [craftModalService, setCraftModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'bridal', label: 'Bridal Artistry' },
    { id: 'engagement', label: 'Engagement & Roka' },
    { id: 'reception', label: 'Reception Glam' },
    { id: 'party', label: 'Party & Sangeet' },
    { id: 'photoshoot', label: 'Editorial / Shoot' },
  ];

  const filteredServices = studioServices.filter((service) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'bridal') return service.id === 'bridal';
    if (activeCategory === 'engagement') return service.id === 'engagement';
    if (activeCategory === 'reception') return service.id === 'reception';
    if (activeCategory === 'party') return service.id === 'party' || service.id === 'custom';
    if (activeCategory === 'photoshoot') return service.id === 'photoshoot';
    return true;
  });

  return (
    <div className="bg-[#FCFAF8] pb-32 text-[#120F0D]">
      <SEO
        title="Bespoke Makeup Services & Look Selector | Glamour Makeup Studio Raichur"
        description="Select and explore luxury makeup services: Signature Bridal, Engagement, Reception, Sangeet Party, and Photoshoot styling by Shwetha Subhash."
      />

      <Breadcrumbs items={[{ label: 'Services' }]} />

      {/* Hero Header */}
      <AnimatedSection className="py-12 sm:py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFC8] text-[#8C6839] text-xs uppercase tracking-widest font-semibold mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
          <span>Signature Beauty Disciplines</span>
        </div>
        
        <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] tracking-tight leading-[1.15] mb-4">
          Artistry for Every Sacred Moment & Celebration
        </h1>

        <p className="text-base sm:text-lg text-[#54483F] font-normal max-w-2xl mx-auto leading-relaxed">
          Skin-first, high-definition makeup engineered to look luminous in person and flawless under camera flash.
          Explore our tailored looks below designed by master artist Shwetha Subhash in Raichur, Karnataka.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/30'
                    : 'bg-[#FFFFFF] text-[#54483F] hover:bg-[#F2EDE4] border border-[#E8DFD5]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredServices.map((service) => (
            <StaggerItem key={service.id}>
              <div
                className="bg-[#FFFFFF] rounded-3xl overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.08)] hover:-translate-y-1.5 transition-all duration-300 group border border-[#EFE8DE] h-full"
              >
                <div>
                  {/* Photo with How It's Done Trigger */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#F2EDE4]">
                    <Link to={`/services/${service.id}`} className="block w-full h-full">
                      <SafeImage
                        src={service.heroImage}
                        alt={service.name}
                        fitMode="smart"
                        focalPoint="top"
                        className="w-full h-full group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="px-4 py-2 rounded-full bg-white/95 text-xs font-semibold uppercase tracking-wider text-[#120F0D] shadow-lg flex items-center gap-1.5 border border-white/20">
                          <Camera className="w-3.5 h-3.5 text-[#C9A050]" />
                          <span>View How It's Done</span>
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* Explanation Content */}
                  <div className="p-6 sm:p-7 space-y-4 text-left">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8C6839] block mb-1.5">
                        Bespoke Discipline
                      </span>

                      <Link to={`/services/${service.id}`}>
                        <h2 className="font-serif text-2xl text-[#120F0D] group-hover:text-[#8C6839] transition-colors leading-tight mb-2">
                          {service.name}
                        </h2>
                      </Link>
                      <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Primary Trigger: See Photos of How Work Will Be Done & Effort */}
                    <button
                      type="button"
                      onClick={() => setCraftModalService(service)}
                      className="w-full py-2.5 px-3 rounded-xl bg-[#FAF5EE] hover:bg-[#F2ECE3] border border-[#E8DFC8] text-[#8C6839] hover:text-[#120F0D] text-xs uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 group/btn shadow-xs cursor-pointer active:scale-98"
                    >
                      <Camera className="w-3.5 h-3.5 text-[#C9A050] group-hover/btn:scale-110 transition-transform" />
                      <span>See Photos of How Work Is Done</span>
                    </button>

                    {/* Highlighted Effort Points (Why Customer Should Agree) */}
                    {service.craftSteps && service.craftSteps.length > 0 && (
                      <div className="border-t border-[#F2EDE4] pt-3.5 space-y-2">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6839] font-semibold block flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#C9A050]" />
                          Craftsmanship & Effort Highlights:
                        </span>
                        {service.craftSteps.slice(0, 2).map((cStep, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-[#44382F]">
                            <span className="w-3.5 h-3.5 rounded-full bg-[#FAF5EE] text-[#8C6839] flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span className="leading-tight font-medium">{cStep.highlightPoints[0]}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Key Inclusions / Explanation */}
                    <div className="border-t border-[#F2EDE4] pt-3 space-y-1.5">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6839] font-semibold block">
                        Artistry Inclusions:
                      </span>
                      {service.inclusions.slice(0, 2).map((inc, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#54483F]">
                          <Check className="w-3.5 h-3.5 text-[#C9A050] shrink-0 mt-0.5" />
                          <span className="leading-snug">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Details Link */}
                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-[#F2EDE4] mt-2 pt-4">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#120F0D] hover:text-[#8C6839] transition-colors group/link"
                  >
                    <span>Explore Look Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </AnimatedSection>

      {/* Real Craft & Effort Showcase Modal */}
      {craftModalService && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="relative w-full max-w-5xl bg-[#FCFAF8] rounded-3xl shadow-2xl overflow-hidden border border-[#EFE8DE] max-h-[92vh] flex flex-col">
            {/* Modal Header */}
            <div className="px-5 sm:px-6 py-4 bg-[#120F0D] text-white flex items-center justify-between border-b border-white/10 shrink-0">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#E5C384]" />
                <span className="text-xs uppercase tracking-widest font-semibold text-[#E5C384]">
                  Real Effort & Craft Evidence: {craftModalService.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setCraftModalService(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto">
              <ServiceCraftShowcase service={craftModalService} isCompact={true} />
            </div>

            {/* Modal Footer */}
            <div className="px-5 sm:px-6 py-3.5 bg-[#FFFFFF] border-t border-[#EFE8DE] flex flex-wrap items-center justify-between gap-3 shrink-0">
              <Link
                to={`/services/${craftModalService.id}`}
                className="text-xs uppercase tracking-wider font-semibold text-[#120F0D] hover:text-[#8C6839] inline-flex items-center gap-1.5"
                onClick={() => setCraftModalService(null)}
              >
                <span>Open Full Dedicated Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                type="button"
                onClick={() => setCraftModalService(null)}
                className="px-5 py-2.5 rounded-full bg-[#120F0D] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#25201C] transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
