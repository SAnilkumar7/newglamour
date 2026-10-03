  


import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight, HelpCircle, PhoneCall, Calendar, MessageCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioPackages, studioBusinessInfo } from '../data/businessData';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { heroImages } from '../data/images';
import { useBooking } from '../context/BookingContext';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const PackagesPage: React.FC = () => {
  const { setSelectedPackage } = useBooking();

  return (
    <div className="bg-[#FCFAF8] pb-24 text-[#120F0D]">
      <SEO
        title="Makeup Packages & Pricing | Glamour Makeup Studio Raichur"
        description="Transparent luxury makeup packages for weddings, engagements, and occasions. Essential Glam, Signature Glam, and the complete Bridal Experience by Shwetha Subhash."
      />

      <Breadcrumbs items={[{ label: 'Packages & Pricing' }]} />

      {/* Hero */}
      <AnimatedSection className="relative py-20 lg:py-24 bg-[#120F0D] text-[#FAF8F5] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImages.packagesHero}
            alt="Glamour makeup experience"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#120F0D] via-[#120F0D]/75 to-[#120F0D]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[#C9A050]/40 bg-[#1F1915]/80 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#E5C384]" />
            <span className="text-[11px] uppercase tracking-widest text-[#E5DACD] font-medium">
              Transparent Curated Offerings
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#FAF8F5] leading-tight mb-4">
            Choose Your Glamour Experience
          </h1>
          <p className="font-serif text-xl text-[#D5C9BD] italic font-light max-w-2xl mx-auto">
            From intimate celebratory dinners to grand royal wedding ceremonies in Raichur, Karnataka.
          </p>
        </div>
      </AnimatedSection>

      {/* Pricing Cards */}
      <AnimatedSection className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {studioPackages.map((pkg) => (
            <StaggerItem key={pkg.id}>
              <div
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 h-full ${
                  pkg.isPopular
                    ? 'bg-[#FFFFFF] border-2 border-[#C9A050] shadow-2xl lg:-translate-y-2'
                    : 'bg-[#FFFFFF] border border-[#EFE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.08)]'
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#120F0D] text-[#E5C384] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-full border border-[#C9A050]/40 shadow-sm">
                    Most Popular Choice
                  </div>
                )}

                <div className="p-8 text-left">
                  <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold block mb-1">
                    Experience Tier
                  </span>
                  <h3 className="font-serif text-3xl text-[#120F0D] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#54483F] leading-relaxed mb-6">
                    {pkg.tagline}
                  </p>

                  <div className="p-4 bg-[#FAF5EE] rounded-2xl mb-6 flex items-center justify-between border border-[#E8DFC8]">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#76685E] block font-medium">
                        Artistry Scope
                      </span>
                      <span className="font-serif text-lg font-semibold text-[#120F0D]">
                        Custom Curated Tier
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#120F0D] font-semibold block">
                      What's Included:
                    </span>
                    {pkg.servicesIncluded.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4E443B]">
                        <Check className="w-4 h-4 text-[#C9A050] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.recommendedAddOns.length > 0 && (
                    <div className="pt-4 border-t border-[#F2EDE4] mb-6">
                      <span className="text-[11px] uppercase tracking-wider text-[#76685E] block mb-2 font-medium">
                        Commonly Paired With:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pkg.recommendedAddOns.map((addon, aIdx) => (
                          <span
                            key={aIdx}
                            className="px-2.5 py-1 bg-[#FAF5EE] border border-[#E8DFC8] text-[11px] text-[#54483F] rounded-lg"
                          >
                            + {addon}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-8 pt-0 space-y-3">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedPackage(pkg.name)}
                    className={`w-full text-center py-3.5 px-4 text-xs uppercase tracking-widest font-semibold block rounded-full transition-all active:scale-95 ${
                      pkg.isPopular
                        ? 'bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] shadow-md'
                        : 'bg-[#FAF5EE] hover:bg-[#F2ECE3] text-[#120F0D] border border-[#E8DFC8]'
                    }`}
                  >
                    Ask About Your Date
                  </Link>

                  <WhatsAppButton
                    variant="text"
                    label="Enquire on WhatsApp"
                    className="w-full justify-center text-xs"
                    message={`Hi Glamour Makeup Studio, I'm interested in booking the ${pkg.name} package with Shwetha Subhash. Could you check date availability?`}
                  />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pricing Disclaimer */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-5 bg-[#FAF5EE] border border-[#E8DFC8] rounded-2xl text-xs text-[#54483F]">
          <p className="flex items-center justify-center gap-1.5 font-semibold mb-1 text-[#120F0D]">
            <HelpCircle className="w-4 h-4 text-[#C9A050]" />
            Pricing Transparency Notice
          </p>
          <p>
            * Prices may vary depending on requirements, venue location in Raichur / Karnataka, auspicious dates, early morning hours, and additional bespoke services. All pricing is finalized with an itemized written quote.
          </p>
        </div>

        {/* ✅ NEW: Free Consultation CTA Banner (replaced Add-Ons banner) */}
        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-[#120F0D] via-[#1F1915] to-[#120F0D] text-[#FAF8F5] rounded-3xl shadow-2xl relative overflow-hidden">

          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A050]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#C9A050]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left: Text */}
            <div className="lg:col-span-7 text-left space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C9A050]/15 border border-[#C9A050]/30">
                <Sparkles className="w-3 h-3 text-[#E5C384]" />
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E5C384]">
                  Complimentary • No Obligation
                </span>
              </div>

              <h4 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5] leading-tight">
                Not Sure Which Package Fits Your Day?
              </h4>

              <p className="text-xs sm:text-sm text-[#D5C9BD] leading-relaxed max-w-xl">
                Book a <strong className="text-[#E5C384] font-semibold">free 20-minute bridal consultation</strong> with Shwetha Subhash. Share your wedding date, venue, and vision — she'll recommend the ideal package, timeline, and skin-prep plan tailored to you.
              </p>

              {/* Mini Benefits Row */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-[11px] sm:text-xs text-[#D5C9BD]">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C9A050]" />
                  Personalized Package Advice
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C9A050]" />
                  Date Availability Check
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#C9A050]" />
                  Skin Prep Guidance
                </span>
              </div>
            </div>

            {/* Right: CTA Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3 w-full">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-[#FAF8F5] hover:bg-white text-[#120F0D] text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#8C6839]" />
                <span>Book Free Consultation</span>
              </Link>

              <a
                href={`tel:${studioBusinessInfo.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full border border-[#C9A050]/50 bg-[#1F1915]/60 hover:bg-[#1F1915] text-[#E5C384] text-xs uppercase tracking-wider font-semibold transition-all shadow-md active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call {studioBusinessInfo.phoneDisplay}</span>
              </a>

              <p className="text-[10px] text-center text-[#9C8F84] pt-1 uppercase tracking-wider">
                Typical reply within 15 minutes
              </p>
            </div>

          </div>
        </div>

      </AnimatedSection>
    </div>
  );
};