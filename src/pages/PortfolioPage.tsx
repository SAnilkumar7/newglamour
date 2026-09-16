import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Sparkles, Maximize2, Tag, Play, Camera, Film, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { portfolioImages } from '../data/images';
import { studioVideos } from '../data/businessData';
import { Lightbox } from '../components/common/Lightbox';
import { VideoModal } from '../components/common/VideoModal';
import { SafeImage } from '../components/common/SafeImage';
import { getStoredCustomPhotos } from '../data/uploadedPhotos';
import { PortfolioItem, VideoItem } from '../types';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const PortfolioPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get('type');

  // Media type: strictly 'photos' | 'videos'
  const [mediaType, setMediaType] = useState<'photos' | 'videos'>(
    initialType === 'videos' ? 'videos' : 'photos'
  );

  // Dynamic portfolio photos including any custom uploaded photos
  const [allPhotos, setAllPhotos] = useState<PortfolioItem[]>(portfolioImages);

  useEffect(() => {
    const handleSync = () => {
      const custom = getStoredCustomPhotos().filter(p => p.category === 'portfolio');
      if (custom.length > 0) {
        const customItems: PortfolioItem[] = custom.map(cp => ({
          id: cp.id,
          title: cp.title,
          category: 'Bridal',
          image: cp.url,
          featuredOnHome: false,
          description: cp.title + ' - Makeup artistry by Shwetha Subhash',
          tags: ['Custom Upload', 'Shwetha Subhash', 'Raichur']
        }));
        const existingIds = new Set(portfolioImages.map(p => p.id));
        const newOnes = customItems.filter(ci => !existingIds.has(ci.id));
        setAllPhotos([...newOnes, ...portfolioImages]);
      } else {
        setAllPhotos(portfolioImages);
      }
    };
    handleSync();
    window.addEventListener('glamour-photos-updated', handleSync);
    return () => window.removeEventListener('glamour-photos-updated', handleSync);
  }, []);

  // Service filter: 'All' | 'Bridal' | 'Engagement' | 'Reception' | 'Party' | 'Photoshoot'
  const [serviceFilter, setServiceFilter] = useState<'All' | 'Bridal' | 'Engagement' | 'Reception' | 'Party' | 'Photoshoot'>('All');

  // Lightbox for photos
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Modal for videos
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  // Sync with searchParams if url changes
  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam === 'videos') {
      setMediaType('videos');
    } else if (typeParam === 'photos') {
      setMediaType('photos');
    }
  }, [searchParams]);

  const serviceCategories = ['All', 'Bridal', 'Engagement', 'Reception', 'Party', 'Photoshoot'] as const;

  // Filter photos
  const filteredPhotos: PortfolioItem[] = serviceFilter === 'All'
    ? allPhotos
    : allPhotos.filter((p) => p.category.toLowerCase().includes(serviceFilter.toLowerCase()));

  // Filter videos
  const filteredVideos: VideoItem[] = serviceFilter === 'All'
    ? studioVideos
    : studioVideos.filter((v) =>
        v.title.toLowerCase().includes(serviceFilter.toLowerCase()) ||
        v.category.toLowerCase().includes(serviceFilter.toLowerCase())
      );

  const openPhotoLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const handleMediaTypeChange = (type: 'photos' | 'videos') => {
    setMediaType(type);
    setSearchParams({ type });
  };

  return (
    <div className="bg-[#FCFAF8] pb-28 text-[#120F0D]">
      <SEO
        title="Luxury Makeup Portfolio & Video Reels | Glamour Makeup Studio Raichur"
        description="Explore verified real bride photos, transformation video reels, and behind-the-scenes artistry from Glamour Makeup Studio by Shwetha Subhash in Raichur, Karnataka."
      />

      <Breadcrumbs items={[{ label: 'Portfolio' }]} />

      {/* Hero */}
      <AnimatedSection className="py-14 sm:py-18 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Curated Visual & Motion Archive
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] mb-4">
            The Glamour Portfolio
          </h1>
          <p className="font-serif text-base sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto leading-relaxed">
            "Experience high-definition still portraits and live motion video reels showcasing 7+ years of certified bridal artistry by Shwetha Subhash."
          </p>
        </div>
      </AnimatedSection>

      {/* Gallery Controls & Media Switcher */}
      <AnimatedSection className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Control Bar: Media Format + Filter */}
        <div className="bg-[#FFFFFF] p-4 sm:p-5 rounded-3xl border border-[#EFE8DE] shadow-[0_4px_24px_rgba(20,16,12,0.03)] mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Left: Media Options (Photos / Videos strictly) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8C6839] flex items-center gap-1.5 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Media Format:</span>
            </span>

            <div className="inline-flex p-1 bg-[#FAF5EE] rounded-2xl border border-[#E8DFC8]">
              <button
                type="button"
                onClick={() => handleMediaTypeChange('photos')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  mediaType === 'photos'
                    ? 'bg-[#120F0D] text-[#FAF8F5] shadow-xs'
                    : 'text-[#54483F] hover:text-[#120F0D]'
                }`}
              >
                <Camera className="w-3.5 h-3.5" />
                <span>Photos ({filteredPhotos.length})</span>
              </button>

              <button
                type="button"
                onClick={() => handleMediaTypeChange('videos')}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  mediaType === 'videos'
                    ? 'bg-[#120F0D] text-[#FAF8F5] shadow-xs'
                    : 'text-[#54483F] hover:text-[#120F0D]'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Videos ({filteredVideos.length})</span>
              </button>
            </div>
          </div>

          {/* Right: Service Discipline Filter Dropdown */}
          <div className="flex items-center gap-2.5">
            <label htmlFor="service-discipline-select" className="text-xs uppercase tracking-wider font-semibold text-[#8C6839] shrink-0">
              Filter By Look:
            </label>
            <div className="relative flex-1 sm:w-56">
              <select
                id="service-discipline-select"
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value as any)}
                className="w-full appearance-none bg-[#FCFAF8] border border-[#E8DFD5] text-[#120F0D] text-xs font-semibold uppercase tracking-wider py-2.5 pl-4 pr-9 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40 cursor-pointer"
              >
                {serviceCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === 'All' ? 'All Looks' : `${cat} Artistry`}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C6839] pointer-events-none" />
            </div>
          </div>

        </div>

        {/* SECTION 1: VIDEO REELS */}
        {mediaType === 'videos' && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#EFE8DE]">
              <div className="flex items-center gap-2">
                <Film className="w-4 h-4 text-[#C9A050]" />
                <h2 className="font-serif text-xl sm:text-2xl text-[#120F0D]">
                  Live Transformation Video Reels
                </h2>
              </div>
              <span className="text-xs text-[#76685E]">
                {filteredVideos.length} {filteredVideos.length === 1 ? 'Reel' : 'Reels'} Available
              </span>
            </div>

            {filteredVideos.length === 0 ? (
              <div className="text-center py-16 bg-[#F9F5EF] border border-[#EFE8DE] rounded-3xl p-8">
                <p className="font-serif text-xl text-[#54483F]">
                  No video reels found for this category.
                </p>
                <button
                  type="button"
                  onClick={() => setServiceFilter('All')}
                  className="mt-4 px-6 py-2.5 bg-[#120F0D] text-[#FAF8F5] text-xs uppercase tracking-wider rounded-full cursor-pointer"
                >
                  View All Video Reels
                </button>
              </div>
            ) : (
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map((video) => (
                  <StaggerItem key={video.id}>
                    <div
                      onClick={() => setSelectedVideo(video)}
                      className="group relative rounded-3xl overflow-hidden bg-[#120F0D] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#EFE8DE] h-full flex flex-col justify-between"
                    >
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />

                        {/* Dark gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Center Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/90 text-[#120F0D] flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-[#E5C384] transition-all">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Category */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/75 backdrop-blur-md rounded-full text-[#E5C384] text-[10px] uppercase tracking-wider font-semibold border border-white/10">
                          {video.category}
                        </div>
                      </div>

                      <div className="p-4 bg-[#FFFFFF] text-left">
                        <h3 className="font-serif text-base text-[#120F0D] font-semibold group-hover:text-[#8C6839] transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-xs text-[#54483F] mt-1 line-clamp-2">
                          {video.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        )}

        {/* SECTION 2: STILL PHOTO PORTFOLIO */}
        {mediaType === 'photos' && (
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#EFE8DE]">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#C9A050]" />
                <h2 className="font-serif text-xl sm:text-2xl text-[#120F0D]">
                  High-Resolution Client Portraits
                </h2>
              </div>
              <span className="text-xs text-[#76685E]">
                {filteredPhotos.length} {filteredPhotos.length === 1 ? 'Photograph' : 'Photographs'}
              </span>
            </div>

            {filteredPhotos.length === 0 ? (
              <div className="text-center py-16 bg-[#F9F5EF] border border-[#EFE8DE] rounded-3xl p-8">
                <p className="font-serif text-xl text-[#54483F]">
                  No photographs found for this category.
                </p>
                <button
                  type="button"
                  onClick={() => setServiceFilter('All')}
                  className="mt-3 px-5 py-2 bg-[#120F0D] text-white text-xs uppercase tracking-wider rounded-full cursor-pointer"
                >
                  Reset Filter
                </button>
              </div>
            ) : (
              <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((item, idx) => (
                  <StaggerItem key={item.id}>
                    <div
                      onClick={() => openPhotoLightbox(idx)}
                      className="group relative aspect-[3/4] bg-[#F2EDE4] overflow-hidden rounded-3xl cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#EFE8DE]"
                    >
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fitMode="smart"
                        focalPoint="top"
                        className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Hover Editorial Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-left">
                        <div className="flex items-center justify-between mb-2">
                          <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest text-[#E5C384] font-semibold">
                            <Tag className="w-3 h-3" />
                            {item.category}
                          </span>
                          <span className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white">
                            <Maximize2 className="w-4 h-4" />
                          </span>
                        </div>

                        <h3 className="font-serif text-xl text-white font-medium">
                          {item.title}
                        </h3>

                        <p className="text-xs text-[#D5C9BD] mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            )}
          </div>
        )}

      </AnimatedSection>

      {/* Lightbox for Photographs */}
      <Lightbox
        isOpen={lightboxOpen}
        currentIndex={currentPhotoIndex}
        items={filteredPhotos}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentPhotoIndex((prev) => (prev + 1) % filteredPhotos.length)}
        onPrev={() => setCurrentPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length)}
      />

      {/* Video Reel Player Modal */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </div>
  );
};
