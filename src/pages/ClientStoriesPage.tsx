import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Quote, ArrowRight, Eye, Calendar } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioClientStories } from '../data/businessData';
import { Lightbox } from '../components/common/Lightbox';
import { PortfolioItem } from '../types';
import { AnimatedSection } from '../components/common/MotionWrapper';

export const ClientStoriesPage: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeStoryGallery, setActiveStoryGallery] = useState<PortfolioItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openStoryGallery = (images: string[], storyTitle: string) => {
    const items: PortfolioItem[] = images.map((img, idx) => ({
      id: `story-photo-${idx}`,
      title: `${storyTitle} - Photo ${idx + 1}`,
      category: 'Bridal',
      image: img,
      description: 'Candid and editorial portraits from real client celebration.'
    }));
    setActiveStoryGallery(items);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#FCFAF8] pb-28 text-[#120F0D]">
      <SEO
        title="Client Stories & Case Studies | Glamour Makeup Studio Raichur"
        description="Read in-depth beauty case studies from real brides and clients of Glamour Makeup Studio. The vision, the approach, and the final look created by Shwetha Subhash."
      />

      <Breadcrumbs items={[{ label: 'Client Stories' }]} />

      {/* Hero */}
      <AnimatedSection className="py-16 lg:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Real Journeys & Transformations
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] mb-4">
            Real Client Stories
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto leading-relaxed">
            "Every client brings a unique occasion, personality, and story. Here's how Shwetha Subhash brought their dream vision to life."
          </p>
        </div>
      </AnimatedSection>

      {/* Case Studies List */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {studioClientStories.map((story, index) => (
          <AnimatedSection
            key={story.id}
            className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(20,16,12,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.07)] transition-all duration-300"
          >
            {/* Story Header Banner */}
            <div className="bg-[#FAF5EE] border-b border-[#E8DFC8] px-6 sm:px-10 py-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold block">
                  Case Study {index + 1}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#120F0D]">
                  {story.storyTitle}
                </h2>
              </div>
              <div className="flex items-center gap-3 text-xs text-[#76685E]">
                <span className="px-3 py-1 bg-white border border-[#E8DFC8] rounded-full font-semibold text-[#120F0D]">
                  {story.occasion}
                </span>
                <span>{story.eventDate}</span>
              </div>
            </div>

            {/* Story Content Grid */}
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Hero & Gallery Photos */}
              <div className="lg:col-span-5 space-y-4">
                <div
                  className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#E5DDD2] cursor-pointer group relative shadow-md"
                  onClick={() => openStoryGallery([story.heroImage, ...story.galleryImages], story.storyTitle)}
                >
                  <img
                    src={story.heroImage}
                    alt={story.clientName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-white/95 text-[#120F0D] text-xs uppercase tracking-widest font-semibold rounded-full flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5 text-[#C9A050]" />
                      View Story Gallery
                    </span>
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                <div className="grid grid-cols-3 gap-2">
                  {story.galleryImages.map((img, gIdx) => (
                    <div
                      key={gIdx}
                      className="aspect-square overflow-hidden rounded-xl bg-[#E5DDD2] cursor-pointer hover:opacity-85 transition-opacity"
                      onClick={() => openStoryGallery([story.heroImage, ...story.galleryImages], story.storyTitle)}
                    >
                      <img
                        src={img}
                        alt={`${story.clientName} thumb ${gIdx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Case study structured narrative */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div>
                  <h3 className="font-serif text-2xl text-[#120F0D] mb-1 font-medium">
                    Client: <span className="italic text-[#8C6839]">{story.clientName}</span>
                  </h3>
                </div>

                {/* The Vision */}
                <div className="p-5 bg-[#FAF5EE] border-l-4 border-[#C9A050] rounded-r-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C6839] mb-1">
                    The Vision
                  </h4>
                  <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">
                    {story.vision}
                  </p>
                </div>

                {/* The Approach */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#120F0D] mb-1">
                    The Approach & Technique
                  </h4>
                  <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">
                    {story.approach}
                  </p>
                </div>

                {/* The Look */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#120F0D] mb-1">
                    The Completed Look
                  </h4>
                  <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">
                    {story.look}
                  </p>
                </div>

                {/* The Experience */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-semibold text-[#120F0D] mb-1">
                    The Day-Of Experience
                  </h4>
                  <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">
                    {story.experience}
                  </p>
                </div>

                {/* Client Quote */}
                <div className="pt-4 border-t border-[#F2EDE4]">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-[#C9A050] shrink-0 mt-1" />
                    <div>
                      <p className="font-serif text-base sm:text-lg text-[#120F0D] italic leading-relaxed">
                        "{story.quote}"
                      </p>
                      <span className="text-xs uppercase tracking-wider text-[#76685E] block mt-1.5 font-sans font-medium">
                        — {story.clientName}, {story.occasion}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#120F0D] hover:text-[#8C6839] transition-colors"
                  >
                    Enquire About Similar Look
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </AnimatedSection>
        ))}

        {/* Bottom CTA */}
        <AnimatedSection className="text-center p-10 sm:p-12 bg-[#120F0D] text-[#FAF8F5] rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A050]/15 rounded-full blur-3xl pointer-events-none" />

          <h3 className="font-serif text-3xl sm:text-4xl mb-3 text-[#FAF8F5]">
            Ready to Write Your Own Story With Us?
          </h3>
          <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-xl mx-auto mb-6 font-light leading-relaxed">
            We would be honored to be part of your most cherished celebration in Raichur, Karnataka.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#8C6839]" />
            Book Your Consultation
          </Link>
        </AnimatedSection>

      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={lightboxIndex}
        items={activeStoryGallery}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % activeStoryGallery.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + activeStoryGallery.length) % activeStoryGallery.length)}
      />
    </div>
  );
};
