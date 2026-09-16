import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { artistImages } from '../data/images';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { SafeImage } from '../components/common/SafeImage';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const MeetTheArtistPage: React.FC = () => {
  const values = [
    { title: "Creativity", desc: "Balancing timeless traditional grace with contemporary high-fashion aesthetics." },
    { title: "Precision", desc: "Laser-focused symmetry, blending to undetectable perfection, and durable draping." },
    { title: "Connection", desc: "Listening deeply to your vision, easing wedding anxiety, and cultivating calm energy." },
    { title: "Confidence", desc: "Creating a reflection that makes you feel unstoppable, luminous, and authentically beautiful." },
    { title: "Continuous Learning", desc: "Annual masterclasses, staying abreast of global bridal formulations and techniques." }
  ];

  const btsItems = [
    { img: artistImages.workingWithBride, title: "Bridal Application", desc: "Micro-blending HD foundation for second-skin luminosity." },
    { img: artistImages.productPreparation, title: "Curated Kit & Hygiene", desc: "Sanitized high-end luxury brushes and hypoallergenic palettes." },
    { img: artistImages.hairstyling, title: "Hairstyling Architecture", desc: "Setting intricate floral patterns and securing heavy bridal dupattas." },
    { img: artistImages.finalReveal, title: "The Mirror Reveal", desc: "The incomparable joy when a bride sees her completed look." }
  ];

  return (
    <div className="bg-[#FCFAF8] pb-24 text-[#120F0D]">
      <SEO
        title="Meet Shwetha Subhash | Founder & Lead Makeup Artist | Raichur, Karnataka"
        description="Get to know Shwetha Subhash, founder and lead bridal makeup artist at Glamour Makeup Studio, Raichur, Karnataka. 7+ years of personalized luxury bridal and occasion artistry."
      />

      <Breadcrumbs items={[{ label: 'Meet the Artist' }]} />

      {/* Hero Section */}
      <AnimatedSection className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl shadow-2xl border border-[#EFE8DE] bg-[#F2EDE4]">
              <SafeImage
                src="/uploads/artist/founder2.jpg"
                alt="Shwetha Subhash - Founder & Lead Makeup Artist"
                fitMode="smart"
                focalPoint="top"
                className="w-full h-full"
              />
              <div className="absolute bottom-0 inset-x-0 z-20 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-6 text-white text-left">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#E5C384] font-semibold block mb-1">
                  Lead Artist & Founder
                </span>
                <h3 className="font-serif text-2xl tracking-wide text-[#FAF8F5]">
                  Shwetha Subhash
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-[#D8CEBE] mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#E5C384]" />
                  <span>Raichur, Karnataka</span>
                  <span className="text-[#8C7A6B]">•</span>
                  <span>7+ Years Artistry</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
              <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
                The Creative Visionary
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#120F0D] leading-[1.15]">
              Shwetha Subhash
            </h1>
            
            <p className="font-serif text-xl sm:text-2xl text-[#8C6839] italic font-light">
              Founder & Master Bridal Makeup Artist • Raichur, Karnataka
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#54483F] leading-relaxed pt-2">
              <p>
                "Makeup has always been more than a profession for me. It is a way of honoring each woman's authentic grace, celebrating her uniqueness, and translating the emotion of life's most unforgettable milestones into timeless beauty."
              </p>
              <p>
                Based in <strong>Raichur, Karnataka</strong>, with over seven years of specialized experience in South Indian Muhurthams, heritage bridal ceremonies, and contemporary reception glam, my philosophy centers on listening first. Whether you are stepping into a traditional Kanjeevaram silk saree or an ethereal reception lehenga, our journey together is unhurried, collaborative, and joyful.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-full transition-all shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#D4AF37]" />
                Book a Consultation
              </Link>
              <WhatsAppButton
                variant="brand"
                label="Chat with Shwetha"
                className="!py-3.5 !px-6 text-xs uppercase tracking-wider !rounded-full active:scale-95"
              />
            </div>

          </div>

        </div>
      </AnimatedSection>

      {/* Personal Story Editorial */}
      <AnimatedSection className="py-20 bg-[#F9F5EF] border-y border-[#EFE8DE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
              Personal Biography
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D]">
              My Journey Into Makeup
            </h2>
            <div className="w-16 h-0.5 bg-[#C9A050] mx-auto mt-4" />
          </div>

          <div className="bg-[#FFFFFF] p-8 sm:p-12 border border-[#EFE8DE] rounded-3xl shadow-[0_4px_24px_rgba(20,16,12,0.04)] space-y-6 text-sm sm:text-base text-[#4E443B] leading-relaxed text-left">
            
            <p className="font-serif text-lg sm:text-xl italic text-[#120F0D] border-l-3 border-[#C9A050] pl-4">
              "When I began my journey seven years ago in Karnataka, I realized brides were often anxious that makeup would feel like a mask. I made it my lifelong mission to change that."
            </p>

            <h3 className="font-serif text-xl text-[#120F0D] font-semibold pt-2">
              Discovering Artistry & Early Roots
            </h3>
            <p>
              Growing up fascinated by colors, classical South Indian temple aesthetics, and the transformative power of portraiture, I discovered that makeup is the ultimate living canvas. I trained rigorously under master artists, studying facial anatomy, skin undertones, and the physics of lighting under photographic flashes and outdoor sun.
            </p>

            <h3 className="font-serif text-xl text-[#120F0D] font-semibold pt-2">
              Why I Chose Professional Bridal Makeup
            </h3>
            <p>
              There is no energy on earth quite like a bridal dressing room. The quiet morning moments with mothers and sisters, the anticipation as jewelry is pinned, and that final breath before walking toward the mandap. Being trusted to be the calming anchor in those hours is a sacred privilege.
            </p>

            <h3 className="font-serif text-xl text-[#120F0D] font-semibold pt-2">
              What Makes Glamour Different
            </h3>
            <p>
              At Glamour Makeup Studio, we don't apply an assembly-line look. We spend time learning your personal taste, your outfit weight, the venue lighting, and how you naturally smile. We use only internationally certified, luxury formulations (Dior, Charlotte Tilbury, NARS, MAC, Laura Mercier) that guarantee endurance without cakeiness.
            </p>

          </div>

        </div>
      </AnimatedSection>

      {/* Artist Values */}
      <AnimatedSection className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] block mb-2">
            Guiding Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D]">
            Artist Values & Commitments
          </h2>
        </div>

        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <StaggerItem key={i}>
              <div
                className="p-6 bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:border-[#C9A050] transition-colors text-left h-full"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A050]" />
                  <h3 className="font-serif text-xl text-[#120F0D] font-medium">
                    {v.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </AnimatedSection>

      {/* Behind the Scenes Photo Grid */}
      <AnimatedSection className="py-20 bg-[#120F0D] text-[#FAF8F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#C9A050] block mb-2">
              Inside The Studio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5]">
              Behind the Scenes
            </h2>
            <p className="text-xs sm:text-sm text-[#D5C9BD] mt-3">
              Meticulous preparation, hygienic protocols, and peaceful creative flow.
            </p>
          </div>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {btsItems.map((item, idx) => (
              <StaggerItem key={idx}>
                <div className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1A1613] hover:border-[#C9A050]/40 transition-colors h-full flex flex-col justify-between">
                  <div className="aspect-[4/3] overflow-hidden bg-[#241E1A]">
                    <SafeImage
                      src={item.img}
                      alt={item.title}
                      fitMode="smart"
                      focalPoint="center"
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-left">
                    <h4 className="font-serif text-base text-[#FAF8F5] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-[#A8998C] leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </AnimatedSection>

      {/* Highlighted Personal Message Quote */}
      <AnimatedSection className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-10 sm:p-14 bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl shadow-[0_10px_35px_rgba(20,16,12,0.04)] relative">
          <span className="text-4xl text-[#C9A050] font-serif block mb-2">“</span>
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#120F0D] leading-relaxed italic max-w-2xl mx-auto">
            "Every bride in Karnataka has her own heritage, personality, and family joy. My job is to make sure her makeup becomes a radiant, unforgettable reflection of who she truly is."
          </blockquote>
          <span className="text-xs uppercase tracking-widest text-[#8C6839] font-semibold block mt-4">
            — Shwetha Subhash, Founder & Master Makeup Artist
          </span>
          <span className="text-[11px] text-[#76685E] block mt-1">
            Glamour Makeup Studio • Raichur, Karnataka
          </span>
        </div>
      </AnimatedSection>

      {/* Artist CTA */}
      <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-10 sm:p-12 bg-[#120F0D] text-[#FAF8F5] text-center rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A050]/15 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-serif text-2xl sm:text-4xl mb-3 text-[#FAF8F5]">
            Let's Create Your Look Together
          </h3>
          <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-xl mx-auto mb-8 font-light">
            Share your event date, outfit shades, and inspiration. We will design an unforgettable beauty experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95"
            >
              Book a Consultation
              <ArrowRight className="w-3.5 h-3.5 text-[#8C6839]" />
            </Link>
            <WhatsAppButton
              variant="brand"
              label="Enquire via WhatsApp"
              className="!py-3.5 !px-8 text-xs uppercase tracking-widest !rounded-full active:scale-95"
            />
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};
