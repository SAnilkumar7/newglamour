import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Sparkles, CheckCircle2, Calendar, MapPin, ZoomIn, X, Upload, Plus, Camera } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { PhotoUploadModal } from '../components/common/PhotoUploadModal';
import { studioReviews } from '../data/businessData';
import { getStoredCustomPhotos } from '../data/uploadedPhotos';
import { ReviewItem } from '../types';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const ReviewsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Bridal' | 'Engagement' | 'Party' | 'Reception' | 'Photoshoot'>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<{ url: string; title: string; clientName: string; eventType: string } | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  
  // Custom reviews state that can receive newly uploaded reviews
  const [allReviews, setAllReviews] = useState<ReviewItem[]>(() => {
    try {
      const local = localStorage.getItem('glamour_user_submitted_reviews');
      if (local) {
        const parsed = JSON.parse(local);
        return [...parsed, ...studioReviews];
      }
    } catch {}
    return studioReviews;
  });

  // Load custom photos uploaded via the photo studio manager
  useEffect(() => {
    const handlePhotoUpdate = () => {
      const customPhotos = getStoredCustomPhotos().filter(p => p.category === 'reviews');
      if (customPhotos.length > 0) {
        setAllReviews(prev => {
          const customReviews: ReviewItem[] = customPhotos.map(cp => ({
            id: cp.id,
            clientName: cp.clientName || 'Celebration Client',
            eventType: (cp.eventType as any) || 'Bridal',
            rating: 5,
            review: "Flawless artistry by Shwetha Subhash! The skin was radiant, second-skin, and lasted throughout all rituals.",
            date: new Date(cp.uploadedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            lookPhoto: cp.url,
            lookTitle: cp.title,
            location: 'Raichur, Karnataka',
            featuredOnHome: true
          }));
          const existingIds = new Set(prev.map(r => r.id));
          const newEntries = customReviews.filter(cr => !existingIds.has(cr.id));
          return [...newEntries, ...prev];
        });
      }
    };

    handlePhotoUpdate();
    window.addEventListener('glamour-photos-updated', handlePhotoUpdate);
    return () => window.removeEventListener('glamour-photos-updated', handlePhotoUpdate);
  }, []);

  const filters = ['All', 'Bridal', 'Engagement', 'Reception', 'Party', 'Photoshoot'] as const;

  const filteredReviews = activeFilter === 'All'
    ? allReviews
    : allReviews.filter((r) => r.eventType === activeFilter);

  // New review form state
  const [newReview, setNewReview] = useState({
    clientName: '',
    eventType: 'Bridal' as 'Bridal' | 'Engagement' | 'Party' | 'Reception' | 'Photoshoot',
    rating: 5,
    lookTitle: '',
    review: '',
    location: 'Raichur, Karnataka',
    photoUrl: '',
    photoPreview: ''
  });

  const handleReviewPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const dataUrl = uploadEvent.target?.result as string;
        setNewReview(prev => ({
          ...prev,
          photoUrl: dataUrl,
          photoPreview: dataUrl,
          lookTitle: prev.lookTitle || file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.clientName.trim() || !newReview.review.trim()) {
      return;
    }

    const createdReview: ReviewItem = {
      id: 'rev-user-' + Date.now().toString(),
      clientName: newReview.clientName,
      eventType: newReview.eventType,
      rating: newReview.rating,
      review: newReview.review,
      date: 'Recent',
      lookPhoto: newReview.photoUrl || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
      lookTitle: newReview.lookTitle || `${newReview.eventType} Artistry by Shwetha Subhash`,
      location: newReview.location || 'Raichur, Karnataka',
      featuredOnHome: true,
    };

    const updated = [createdReview, ...allReviews];
    setAllReviews(updated);
    try {
      const existingUserReviews = JSON.parse(localStorage.getItem('glamour_user_submitted_reviews') || '[]');
      localStorage.setItem('glamour_user_submitted_reviews', JSON.stringify([createdReview, ...existingUserReviews]));
    } catch {}

    setIsAddReviewOpen(false);
    setNewReview({
      clientName: '',
      eventType: 'Bridal',
      rating: 5,
      lookTitle: '',
      review: '',
      location: 'Raichur, Karnataka',
      photoUrl: '',
      photoPreview: ''
    });
  };

  return (
    <div className="bg-[#FCFAF8] pb-28 min-h-screen text-[#120F0D]">
      <SEO
        title="Client Reviews & Real Makeover Photos | Glamour Makeup Studio • Raichur"
        description="View real bridal transformations, custom makeover photos and 5-star testimonials from brides styled by Shwetha Subhash in Raichur, Karnataka."
      />

      <Breadcrumbs items={[{ label: 'Reviews & Client Looks' }]} />

      {/* Hero */}
      <AnimatedSection className="py-14 sm:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Real Brides & Custom Makeover Photos
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] mb-4">
            Client Reviews & Looks
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            "Authentic transformations and heartfelt reflections from our brides in Raichur, Karnataka."
          </p>

          {/* Action buttons: Upload Look Photo & Add Review */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setIsAddReviewOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#E5C384]" />
              <span>Share Review with Photo</span>
            </button>

            <button
              onClick={() => setIsUploadOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-[#F2EDE4] text-[#120F0D] border border-[#E8DFD5] text-xs uppercase tracking-widest font-semibold rounded-full shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Upload className="w-4 h-4 text-[#8C6839]" />
              <span>Upload Custom Photo</span>
            </button>
          </div>
        </div>
      </AnimatedSection>

      {/* Aggregate Rating Banner */}
      <AnimatedSection className="py-8 bg-[#FCFAF8] border-b border-[#EFE8DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <span className="font-serif text-5xl font-bold text-[#120F0D]">5.0</span>
            <div>
              <div className="flex items-center gap-1 text-[#C9A050]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#76685E] mt-0.5 block font-medium">
                500+ Happy Brides & 100% Five-Star Reviews
              </span>
            </div>
          </div>

          <div className="h-8 w-px bg-[#EFE8DE] hidden md:block" />

          <div className="flex items-center gap-2 text-xs text-[#54483F]">
            <CheckCircle2 className="w-4 h-4 text-[#C9A050]" />
            <span>Master Artistry by Shwetha Subhash</span>
          </div>

          <div className="h-8 w-px bg-[#EFE8DE] hidden md:block" />

          <div className="flex items-center gap-2 text-xs text-[#54483F]">
            <MapPin className="w-4 h-4 text-[#C9A050]" />
            <span>Raichur Atelier & Destination Weddings</span>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Reviews & Photo Gallery */}
      <AnimatedSection className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all cursor-pointer ${
                activeFilter === f
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/30'
                  : 'bg-white text-[#54483F] border border-[#E8DFD5] hover:bg-[#F2EDE4]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Reviews Showcase Grid */}
        {filteredReviews.length === 0 ? (
          <div className="text-center py-16 bg-[#F9F5EF] border border-[#EFE8DE] rounded-3xl p-8">
            <p className="font-serif text-xl text-[#54483F]">
              No reviews in this category yet.
            </p>
          </div>
        ) : (
          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((rev) => (
              <StaggerItem key={rev.id}>
                <div
                  className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full justify-between"
                >
                  {/* Custom Client Look Photo Box with Perfect Optical Fit */}
                  <div 
                    className="relative aspect-[4/5] w-full overflow-hidden bg-[#F2EDE4] cursor-pointer group/img"
                    onClick={() => setSelectedPhoto({
                      url: rev.lookPhoto || rev.image || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
                      title: rev.lookTitle || `${rev.eventType} Look`,
                      clientName: rev.clientName,
                      eventType: rev.eventType
                    })}
                  >
                    <SafeImage
                      src={rev.lookPhoto || rev.image}
                      alt={`${rev.clientName} - ${rev.lookTitle || rev.eventType} Look`}
                      fitMode="smart"
                      focalPoint="top"
                      className="w-full h-full group-hover/img:scale-[1.03] transition-transform duration-500"
                    />

                    {/* Gradient Overlay & Badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20 pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-20">
                      <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-black/60 backdrop-blur-md text-[#FAF8F5] rounded-full border border-white/15">
                        {rev.eventType} Look
                      </span>
                      <button
                        type="button"
                        className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-[#E5C384] flex items-center justify-center hover:bg-black/85 transition-colors cursor-pointer"
                        title="Inspect full uncropped photo"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Bottom Photo Caption */}
                    <div className="absolute bottom-3.5 inset-x-3.5 z-20 text-white text-left">
                      <span className="text-[10px] uppercase tracking-wider text-[#E5C384] block font-semibold">
                        {rev.location || 'Raichur, Karnataka'}
                      </span>
                      <h4 className="font-serif text-base sm:text-lg text-[#FAF8F5] font-medium leading-snug line-clamp-1">
                        {rev.lookTitle || `${rev.eventType} Artistry`}
                      </h4>
                    </div>
                  </div>

                  {/* Review Details & Quote Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4 bg-white text-left">
                    <div>
                      {/* Stars and Date */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-[#C9A050]">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                        <span className="text-[11px] text-[#76685E]">
                          {rev.date}
                        </span>
                      </div>

                      {/* Verified Review Quote */}
                      <p className="text-xs sm:text-sm text-[#4E443B] leading-relaxed italic">
                        "{rev.review}"
                      </p>
                    </div>

                    {/* Author / Client Identity Footer */}
                    <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between">
                      <div>
                        <h5 className="font-serif text-sm font-semibold text-[#120F0D]">
                          {rev.clientName}
                        </h5>
                        <span className="text-[11px] text-[#76685E] block">
                          Verified Bride / Client • Shwetha Subhash Artistry
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedPhoto({
                          url: rev.lookPhoto || rev.image || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
                          title: rev.lookTitle || `${rev.eventType} Look`,
                          clientName: rev.clientName,
                          eventType: rev.eventType
                        })}
                        className="text-[11px] text-[#8C6839] hover:text-[#120F0D] font-semibold underline cursor-pointer"
                      >
                        View Photo
                      </button>
                    </div>

                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}

        {/* Bottom Booking Banner */}
        <div className="mt-16 text-center p-10 sm:p-14 bg-[#120F0D] text-[#FAF8F5] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A050]/15 rounded-full blur-3xl pointer-events-none" />

          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#E5C384] block mb-2">
            Raichur Atelier & Destination Dates
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl mb-3 text-[#FAF8F5]">
            Experience Your Dream Transformation
          </h3>
          <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-xl mx-auto mb-6 font-light leading-relaxed">
            Reserve your bridal celebration or special occasion date with Shwetha Subhash. Personalized consultations, trial sessions, and undivided attention.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#8C6839]" />
            <span>Book an Appointment</span>
          </Link>
        </div>

      </AnimatedSection>

      {/* FULL PHOTO LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-[#120F0D] text-[#FAF8F5] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 animate-fade-in my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Container with uncropped balanced view */}
            <div className="relative max-h-[75vh] w-full flex items-center justify-center bg-black/40 overflow-hidden p-2 sm:p-4">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-lg"
              />
            </div>

            {/* Caption bar */}
            <div className="p-5 sm:p-6 bg-[#120F0D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E5C384] font-semibold block">
                  {selectedPhoto.eventType} Look • Raichur, Karnataka
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5]">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-[#D5C9BD] mt-0.5">
                  Client: {selectedPhoto.clientName} • Makeup Artistry by Shwetha Subhash
                </p>
              </div>

              <Link
                to="/contact"
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-white text-[#120F0D] text-xs uppercase tracking-wider font-semibold rounded-full transition-colors shrink-0"
              >
                Inquire Similar Look
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* ADD REVIEW WITH PHOTO MODAL */}
      {isAddReviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsAddReviewOpen(false)}
        >
          <div
            className="bg-[#FCFAF8] text-[#120F0D] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-[#EFE8DE] relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAddReviewOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF5EE] hover:bg-[#F2EDE4] text-[#54483F] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[#E8DFC8] rounded-full w-fit mb-3 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#C9A050]" />
              <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold">
                Client Review & Look Submission
              </span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl text-[#120F0D] mb-2 text-left">
              Share Your Review with Photo
            </h2>
            <p className="text-xs text-[#76685E] mb-6 text-left">
              Upload your makeover photograph taken on your celebration day and share your experience with Shwetha Subhash.
            </p>

            <form onSubmit={handleAddReviewSubmit} className="space-y-4 text-left">
              {/* Photo Upload Zone */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#54483F] mb-1.5">
                  Upload Your Look Photo
                </label>
                <div
                  onClick={() => document.getElementById('review-photo-input')?.click()}
                  className="border-2 border-dashed border-[#E8DFC8] hover:border-[#C9A050] bg-[#FAF5EE] rounded-2xl p-4 text-center cursor-pointer transition-colors"
                >
                  <input
                    id="review-photo-input"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleReviewPhotoUpload}
                  />
                  {newReview.photoPreview ? (
                    <div className="flex items-center gap-4 text-left">
                      <div className="w-20 h-24 rounded-xl overflow-hidden border border-[#E8DFC8] shrink-0">
                        <img
                          src={newReview.photoPreview}
                          alt="Review look preview"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="text-xs">
                        <span className="text-emerald-700 font-semibold block">Photo attached successfully!</span>
                        <p className="text-[#76685E] text-[11px] mt-0.5">Click to change or select another photo</p>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2 text-center space-y-1">
                      <Upload className="w-5 h-5 text-[#C9A050] mx-auto" />
                      <span className="text-xs font-semibold text-[#120F0D] block">Click to upload photo from your device</span>
                      <span className="text-[11px] text-[#76685E] block">JPG, PNG, WebP • Sized to fit perfectly</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name & Occasion */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#54483F] mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newReview.clientName}
                    onChange={(e) => setNewReview(prev => ({ ...prev, clientName: e.target.value }))}
                    placeholder="e.g. Ananya Rao"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#120F0D] focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#54483F] mb-1">
                    Celebration Occasion
                  </label>
                  <select
                    value={newReview.eventType}
                    onChange={(e) => setNewReview(prev => ({ ...prev, eventType: e.target.value as any }))}
                    className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#120F0D] focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40"
                  >
                    <option value="Bridal">Bridal Muhurtham / Wedding</option>
                    <option value="Engagement">Engagement / Roka</option>
                    <option value="Reception">Evening Reception</option>
                    <option value="Party">Party / Sangeet</option>
                    <option value="Photoshoot">Editorial / Pre-Wedding</option>
                  </select>
                </div>
              </div>

              {/* Look Title */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#54483F] mb-1">
                  Look Title (Optional)
                </label>
                <input
                  type="text"
                  value={newReview.lookTitle}
                  onChange={(e) => setNewReview(prev => ({ ...prev, lookTitle: e.target.value }))}
                  placeholder="e.g. Traditional Red Kanjeevaram Bridal Glow"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#120F0D] focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40"
                />
              </div>

              {/* Review Quote */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#54483F] mb-1">
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newReview.review}
                  onChange={(e) => setNewReview(prev => ({ ...prev, review: e.target.value }))}
                  placeholder="Tell future brides about the makeup endurance, skin feel, and how Shwetha Subhash made you feel on your special day..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#120F0D] focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddReviewOpen(false)}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#76685E] hover:text-[#120F0D] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  Submit Review & Look
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Studio Photo Upload Modal */}
      <PhotoUploadModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        defaultCategory="reviews"
      />

    </div>
  );
};
