import React, { useState } from 'react';
import { Sparkles, Play, Film } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioVideos } from '../data/businessData';
import { VideoModal } from '../components/common/VideoModal';
import { VideoItem } from '../types';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const VideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Bridal Transformations',
    'Behind the Scenes',
    'Makeup Process',
    'Client Reveals',
    'Hair Styling'
  ];

  const filteredVideos = activeCategory === 'All'
    ? studioVideos
    : studioVideos.filter((v) => v.category === activeCategory);

  return (
    <div className="bg-[#FCFAF8] pb-28 text-[#120F0D]">
      <SEO
        title="Makeup Videos & Reels | Glamour Makeup Studio Raichur"
        description="Watch behind-the-scenes transformations, bridal reveals, and live masterclass application reels by Shwetha Subhash in Raichur, Karnataka."
      />

      <Breadcrumbs items={[{ label: 'Videos & Motion' }]} />

      {/* Hero */}
      <AnimatedSection className="py-16 lg:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              In Motion & Behind The Scenes
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] mb-4">
            See the Glamour in Motion
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto leading-relaxed">
            "Experience real-time transformations, texture reveals, and calm backstage atmosphere curated by Shwetha Subhash."
          </p>
        </div>
      </AnimatedSection>

      {/* Videos Section */}
      <AnimatedSection className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/30'
                  : 'bg-white text-[#54483F] border border-[#E8DFD5] hover:bg-[#F2EDE4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <StaggerItem key={video.id}>
              <div
                onClick={() => setSelectedVideo(video)}
                className="group bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl overflow-hidden cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark gradient */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 text-[#120F0D] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#E5C384] transition-all duration-300">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 text-left">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold mb-1.5">
                    <Film className="w-3.5 h-3.5 text-[#C9A050]" />
                    <span>{video.category}</span>
                  </div>

                  <h3 className="font-serif text-lg text-[#120F0D] font-medium group-hover:text-[#8C6839] transition-colors leading-snug">
                    {video.title}
                  </h3>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </AnimatedSection>

      {/* Video Modal Player */}
      <VideoModal
        isOpen={Boolean(selectedVideo)}
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
};
