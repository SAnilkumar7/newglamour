

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Maximize2,
  X,
  Camera,
  Star,
  Users,
  Award
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';
import { studioBusinessInfo } from '../data/businessData';

export const AboutPage: React.FC = () => {
  const [activeShopPhoto, setActiveShopPhoto] = useState<{
    id: string;
    image: string;
    title: string;
    category: string;
    description: string;
  } | null>(null);

  const founderCredentials = [
    { label: 'Years of Artistry', value: '7+' },
    { label: 'Brides Styled', value: '500+' },
    { label: 'Punctuality Record', value: '100%' },
    { label: 'Client Satisfaction', value: '5.0/5' },
  ];

  const studioAmenities = [
    {
      title: 'Private Bridal Dressing Suite',
      description: 'Spacious, air-conditioned private lounge with 360-degree mirrors for royal bridal attire adjustments.',
    },
    {
      title: 'Daylight Calibrated Vanity Lighting',
      description: 'CRI 98+ neutral daylight illumination ensuring accurate color matching for indoor and outdoor photography.',
    },
    {
      title: 'Hospital-Grade Sanitization',
      description: 'Ultrasonic brush sterilizers, UV disinfection, and single-use disposable applicators for 100% hygiene.',
    },
    {
      title: 'Bridal Party & Companion Lounge',
      description: 'Plush, comfortable seating with complimentary artisan teas and refreshments for family and bridesmaids.',
    },
  ];

  // ✅ Correct paths matching YOUR folder structure
  const studioShowcase = [
    {
      id: 'main-floor',
      image: '/uploads/studio/mainstudio.PNG',
      title: 'Main Studio Floor',
      category: 'Signature Vanity',
      description: 'Our primary studio floor where the magic begins — spacious, well-lit, and equipped with professional-grade stations.',
      span: 'lg:col-span-8 lg:row-span-2',
    },
    {
      id: 'bridal-lounge',
      image: '/uploads/studio/mainstudio1.PNG',
      title: 'Private Bridal Lounge',
      category: 'Bridal Suite',
      description: 'An intimate, tranquil space reserved exclusively for our brides to relax, dress, and prepare before the ceremony.',
      span: 'lg:col-span-4 lg:row-span-2',
    },
    {
      id: 'mirror-station',
      image: '/uploads/studio/mainstudio2.PNG',
      title: 'Mirror & Lighting Station',
      category: 'Precision Setup',
      description: 'CRI-calibrated vanity mirrors with adjustable lighting to ensure your makeup matches perfectly under any condition.',
      span: 'lg:col-span-6',
    },
    {
      id: 'team-workshop',
      image: '/uploads/studio/brand.PNG',
      title: 'The Glamour Team',
      category: 'Our People',
      description: 'Our team of trained artists, hair stylists, and draping experts — continuously learning together to serve you better.',
      span: 'lg:col-span-6',
    },
  ];

  const teamPhotos = [
    {
      id: 'team-1',
      image: '/uploads/studio/team1.jpeg',
      alt: 'Glamour Makeup Studio Team Workshop',
    },
    {
      id: 'team-2',
      image: '/uploads/studio/team2.jpeg',
      alt: 'Glamour Makeup Studio Team Celebration',
    },
  ];

  const teamSpecialties = [
    'Airbrush Certified',
    'HD Makeup',
    'Hair Styling',
    'Saree Draping',
    'Bridal Consultation',
    'Skin Prep',
  ];

  return (
    <div className="bg-[#FCFAF8] pb-24 text-[#120F0D]">
      <SEO
        title="About Us & Founder Shwetha Subhash | Luxury Makeup Studio Raichur, Karnataka"
        description="Meet founder Shwetha Subhash with 7+ years of bridal artistry in Raichur, Karnataka. Tour our luxury makeup studio, vanity suites, and private styling chambers."
      />

      <Breadcrumbs items={[{ label: 'About Us' }]} />

      {/* HERO */}
      <AnimatedSection className="py-10 sm:py-14 md:py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFC8] text-[#8C6839] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-5 shadow-xs">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A050]" />
          <span>Bespoke Atelier • 7+ Years of Excellence</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#120F0D] tracking-tight leading-[1.15] mb-5">
          Artistry Built on Craft, Care & Individuality
        </h1>

        <p className="text-sm sm:text-base lg:text-lg text-[#54483F] font-normal max-w-2xl mx-auto leading-relaxed px-2">
          Welcome to Glamour Makeup Studio by Shwetha Subhash in Raichur, Karnataka. We believe makeup should never disguise who you are — it should elevate your natural bone structure, honor your heritage, and grant you unwavering confidence on your most memorable days.
        </p>
      </AnimatedSection>

      {/* FOUNDER SPOTLIGHT */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-14 shadow-[0_10px_40px_rgba(20,16,12,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">

            {/* Founder Portrait with Logo Watermark */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-[#EFE8DE] bg-[#F2EDE4]">

                {/* Logo Watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none z-0">
                  <img
                    src="/uploads/brand/brand.PNG"
                    alt="Glamour Makeup Studio Crest"
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>

                {/* Founder Portrait */}
                <SafeImage
                  src="/uploads/artist/founder2.jpg"
                  alt="Shwetha Subhash - Founder & Lead Makeup Artist"
                  fitMode="cover"
                  className="relative z-10 w-full h-full"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/75 backdrop-blur-md text-white p-3 sm:p-3.5 rounded-xl border border-white/15 z-20">
                  <div className="flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="font-serif text-sm sm:text-base text-[#FAF8F5] block font-medium truncate">
                        Shwetha Subhash
                      </span>
                      <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#E5C384] block font-medium leading-tight">
                        Founder & Master Makeup Artist
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#E5C384] shrink-0">
                      <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                      <span className="text-[11px] sm:text-xs font-semibold">7+ Yrs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Founder Bio */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6839] mb-2">
                  <span>Meet The Founder</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#120F0D] leading-tight mb-2 sm:mb-3">
                  Shwetha Subhash
                </h2>
                <span className="text-xs sm:text-sm font-medium text-[#76685E] uppercase tracking-widest block">
                  Lead Bridal Artist & Creative Director • Raichur, Karnataka
                </span>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#F9F5EF] border-l-3 border-[#C9A050] text-sm sm:text-base text-[#3A3027] italic font-serif leading-relaxed">
                "Every bride carries a distinct aura. My duty isn't to impose a repetitive beauty template onto your face, but to study your features in natural light, listen to your vision, and curate a look that feels authentically and triumphantly you."
              </div>

              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-[#54483F] leading-relaxed">
                <p>
                  With over <strong>7 years of specialized bridal artistry</strong> based in Raichur, Karnataka, Shwetha Subhash has curated unforgettable looks for more than 500 brides across grand heritage Muhurthams, contemporary receptions, and intimate ceremonies.
                </p>
                <p>
                  Trained under celebrated cosmetology masters and certified in precision high-definition airbrush techniques, Shwetha's hallmark is her <em>"skin-first"</em> philosophy. She meticulously balances dermal hydration, color theory, and delicate blending to ensure foundations feel weightless, never crease, and withstand humid celebrations for 16+ hours.
                </p>
                <p>
                  Beyond cosmetic mastery, Shwetha is renowned for fostering a calm, centered, and joyful ambiance in the bridal suite—transforming what is often a chaotic morning into a tranquil, pampering ritual.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-[#F2EDE4]">
                {founderCredentials.map((cred, i) => (
                  <div key={i} className="text-left">
                    <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#120F0D] font-semibold block">
                      {cred.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#76685E] block mt-0.5 font-medium leading-tight">
                      {cred.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-full bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-[11px] sm:text-xs font-semibold uppercase tracking-widest transition-all shadow-md active:scale-95 w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span>Book with Shwetha</span>
                </Link>

                <a
                  href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                    "Hello Shwetha, I would like to inquire about booking a bridal session at Glamour Makeup Studio in Raichur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all active:scale-95 w-full sm:w-auto"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Shwetha Directly</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* BRAND EMBLEM */}
      {/* <AnimatedSection className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-28 text-center">
        <div className="flex justify-center mb-5 sm:mb-6">
          <img
            src="/uploads/brand/brand.PNG"
            alt="Glamour Makeup Studio Crest"
            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain"
          />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#120F0D] mb-3">
          The Glamour Promise
        </h3>
        <p className="text-sm sm:text-base text-[#54483F] max-w-xl mx-auto leading-relaxed px-2">
          Every brushstroke, every blend, every pin — crafted with the precision our crest represents. A standard of excellence we've upheld for over seven years.
        </p>
      </AnimatedSection> */}

      {/* STUDIO SHOWCASE - Using plain <img> for free aspect ratio */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFC8] text-[#8C6839] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-3 shadow-xs">
            <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C9A050]" />
            <span>Studio Tour & Space Highlights</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#120F0D] tracking-tight">
            Inside Our Luxury Makeup Studio
          </h2>
          <p className="text-sm sm:text-base text-[#54483F] mt-3 leading-relaxed px-2">
            Designed as an oasis of serenity and precision in Raichur, Karnataka. Step inside our purpose-built atelier featuring private bridal vanity suites, daylight color calibration, and hospital-grade sanitization stations.
          </p>
        </div>

        {/* Asymmetric gallery - plain <img> tags = truly free aspect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-7">
          {studioShowcase.map((item, index) => (
            <div
              key={item.id}
              className={`${item.span} ${
                index === 2 || index === 3 ? 'sm:col-span-1 lg:col-span-6' : ''
              } group relative rounded-2xl overflow-hidden bg-[#F2EDE4] border border-[#EFE8DE] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(20,16,12,0.08)] transition-all duration-300 cursor-pointer`}
              onClick={() =>
                setActiveShopPhoto({
                  id: item.id,
                  image: item.image,
                  title: item.title,
                  category: item.category,
                  description: item.description,
                })
              }
            >
              {/* ✅ Using plain <img> so aspect ratio is FREE */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 sm:p-6 pt-16 sm:pt-20">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#E5C384] font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl lg:text-2xl text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5C384]" />
              </div>
            </div>
          ))}
        </div>

        {/* Amenities */}
        <div className="mt-12 sm:mt-14 pt-10 sm:pt-12 border-t border-[#EFE8DE]">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10 px-2">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6839] block mb-2">
              Signature Comforts
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#120F0D]">
              Atelier Amenities for You & Your Family
            </h3>
          </div>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {studioAmenities.map((amenity, idx) => (
              <StaggerItem key={idx}>
                <div className="p-5 sm:p-6 bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl shadow-xs hover:border-[#C9A050] transition-colors text-left h-full">
                  <div className="w-9 h-9 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#C9A050] mb-3.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg text-[#120F0D] font-medium mb-1.5">
                    {amenity.title}
                  </h4>
                  <p className="text-xs text-[#54483F] leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </AnimatedSection>

      {/* TEAM & CULTURE */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-14 shadow-[0_10px_40px_rgba(20,16,12,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              {teamPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-2xl overflow-hidden shadow-lg border border-[#EFE8DE] bg-[#F2EDE4]"
                >
                  {/* ✅ Plain <img> for free aspect */}
                  <img
                    src={photo.image}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-auto block hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
              ))}
            </div>

            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6839] mb-2">
                  <Users className="w-3.5 h-3.5 text-[#C9A050]" />
                  <span>Our People</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#120F0D] leading-tight mb-3">
                  A Team Trained in Artistry & Hospitality
                </h2>
              </div>

              <p className="text-sm sm:text-base text-[#54483F] leading-relaxed">
                Behind every flawless bridal look is a team of dedicated artists, hair stylists, and draping experts. We continuously train together — from advanced airbrush workshops to traditional drape techniques — so your entire bridal party is cared for with equal precision.
              </p>

              <p className="text-sm sm:text-base text-[#54483F] leading-relaxed">
                Our studio culture is built on mutual respect, ongoing education, and a shared obsession with detail. When you book with us, you're not just getting one artist — you're getting a coordinated team that works in harmony.
              </p>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
                {teamSpecialties.map((specialty, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#EFE8DE] text-[#8C6839] text-[11px] sm:text-xs font-medium"
                  >
                    <Award className="w-3 h-3 text-[#C9A050]" />
                    {specialty}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#8C6839] hover:text-[#120F0D] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Meet The Team In Person</span>
                  <span className="text-[#C9A050]">→</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </AnimatedSection>

      {/* LOCATION */}
      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 lg:mb-28">
        <div className="bg-[#120F0D] text-[#FAF8F5] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#C9A050]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-[#E5C384] block">
                Studio Address & Appointments
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#FAF8F5] leading-tight">
                Visit Our Studio in Raichur, Karnataka
              </h2>
              <p className="text-sm sm:text-base text-[#D5C9BD] font-light leading-relaxed max-w-xl">
                We operate on an unhurried, single-client appointment model to ensure undivided focus. Walk-ins are not accommodated during live bridal sessions to protect client privacy.
              </p>

              <div className="space-y-3 pt-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-[#FAF8F5]">
                  <MapPin className="w-4 h-4 text-[#E5C384] shrink-0 mt-0.5" />
                  <span>{studioBusinessInfo.address}, {studioBusinessInfo.city}, Karnataka</span>
                </div>
                <div className="flex items-start sm:items-center gap-3 text-xs sm:text-sm text-[#FAF8F5]">
                  <Clock className="w-4 h-4 text-[#E5C384] shrink-0 mt-0.5 sm:mt-0" />
                  <span>Tuesday – Sunday: 9:00 AM – 7:30 PM (Bridal sessions by advance appointment)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-full bg-[#FAF8F5] hover:bg-white text-[#120F0D] text-[11px] sm:text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-95"
              >
                <Calendar className="w-4 h-4 text-[#8C6839]" />
                <span>Reserve Studio Appointment</span>
              </Link>

              <a
                href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                  "Hello Glamour Makeup Studio, I would like to schedule a visit or consultation with Shwetha Subhash at your Raichur studio."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 sm:py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-[11px] sm:text-xs uppercase tracking-wider font-semibold transition-all shadow-md active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp Studio Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* LIGHTBOX MODAL - uses plain <img> for free aspect */}
      {activeShopPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          onClick={() => setActiveShopPhoto(null)}
        >
          <div
            className="bg-[#FFFFFF] text-[#120F0D] rounded-2xl sm:rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl animate-fade-in border border-[#EFE8DE] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-[#120F0D] overflow-hidden max-h-[60vh] sm:max-h-[65vh] flex items-center justify-center">
              <img
                src={activeShopPhoto.image}
                alt={activeShopPhoto.title}
                className="w-full h-auto max-h-[60vh] sm:max-h-[65vh] object-contain block"
              />
              <button
                type="button"
                onClick={() => setActiveShopPhoto(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer z-10"
                aria-label="Close image preview"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 md:p-8 space-y-3 text-left">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8C6839]">
                  {activeShopPhoto.category}
                </span>
                <span className="text-[10px] sm:text-xs text-[#76685E] text-right">
                  Raichur Atelier Highlight
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#120F0D]">
                {activeShopPhoto.title}
              </h3>
              <p className="text-sm text-[#54483F] leading-relaxed">
                {activeShopPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};