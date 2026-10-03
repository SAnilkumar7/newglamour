import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Star, Sparkles, CheckCircle2, Calendar, MapPin, ZoomIn, X, Upload, Plus,
  Camera, GraduationCap, Users, Quote
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioReviews } from '../data/businessData';
import { getStoredCustomPhotos } from '../data/uploadedPhotos';
import { ReviewItem } from '../types';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

/* ---------- Types ---------- */
type EventType = 'Bridal' | 'Engagement' | 'Party' | 'Reception' | 'Photoshoot';
type ReviewKind = 'client' | 'student';

type PageReview = Omit<ReviewItem, 'eventType'> & {
  eventType?: EventType;
  reviewType?: ReviewKind; // missing = client (keeps old data working)
  course?: string;         // student reviews only
};

const FALLBACK_PHOTO =
  'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85';

const CLIENT_FILTERS = ['All', 'Bridal', 'Engagement', 'Reception', 'Party', 'Photoshoot'] as const;
const COURSES = ['Bridal Makeup', 'Professional Makeup', 'Hair Styling', 'Self Makeup'] as const;
const STUDENT_FILTERS = ['All', ...COURSES] as const;

/* ---------- Student reviews (PLACEHOLDERS: replace with real student testimonials) ---------- */
const studentReviewsSeed: PageReview[] = [
  {
    id: 'stu-1',
    reviewType: 'student',
    clientName: 'Student Name',
    course: 'Professional Makeup',
    rating: 5,
    review:
      'The course was hands-on from day one. Shwetha ma\'am taught skin prep, colour matching and bridal techniques step by step, and I now take my own bookings.',
    date: 'August 2026',
    location: 'Raichur, Karnataka',
    lookTitle: 'Batch Practical Session',
    lookPhoto: FALLBACK_PHOTO // replace with a real student photo
  } as PageReview,
  {
    id: 'stu-2',
    reviewType: 'student',
    clientName: 'Student Name',
    course: 'Bridal Makeup',
    rating: 5,
    review:
      'Small batch, personal attention and real bridal models to practise on. The confidence I got is the best part of this course.',
    date: 'July 2026',
    location: 'Raichur, Karnataka',
    lookTitle: 'Bridal Masterclass',
    lookPhoto: FALLBACK_PHOTO // replace with a real student photo
  } as PageReview
];

/* ---------- Review Card ---------- */
interface CardProps {
  rev: PageReview;
  onOpenPhoto: (p: { url: string; title: string; clientName: string; eventType: string }) => void;
}

const ReviewCard: React.FC<CardProps> = ({ rev, onOpenPhoto }) => {
  const isStudent = rev.reviewType === 'student';
  const photo = rev.lookPhoto || (rev as any).image || '';
  const [broken, setBroken] = useState(false);
  const hasPhoto = !!photo && !broken;
  const badge = isStudent ? rev.course || 'Student' : `${rev.eventType || 'Bridal'} Look`;
  const caption = rev.lookTitle || (isStudent ? `${rev.course} Course` : `${rev.eventType} Artistry`);

  const open = () =>
    onOpenPhoto({
      url: photo || FALLBACK_PHOTO,
      title: caption,
      clientName: rev.clientName,
      eventType: badge.replace(' Look', '')
    });

  return (
    <div className="bg-white border border-[#EFE8DE] rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(20,16,12,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group h-full">
      {/* Photo: shown in its natural ratio, never cropped */}
      {hasPhoto && (
        <div
          className="relative w-full bg-[#F2EDE4] cursor-pointer flex items-center justify-center"
          onClick={open}
        >
          <img
            src={photo}
            alt={`${rev.clientName} - ${caption}`}
            loading="lazy"
            onError={() => setBroken(true)}
            className="block w-full h-auto max-h-[560px] object-contain"
          />

          <div className="absolute top-3 inset-x-3 flex items-center justify-between z-20 pointer-events-none">
            <span className="text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-black/60 backdrop-blur-md text-[#FAF8F5] rounded-full border border-white/15">
              {badge}
            </span>
            <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-[#E5C384] flex items-center justify-center">
              <ZoomIn className="w-3.5 h-3.5" />
            </span>
          </div>

          <div className="absolute bottom-0 inset-x-0 z-20 px-3.5 pb-3 pt-10 bg-gradient-to-t from-black/70 to-transparent text-left pointer-events-none">
            <span className="text-[10px] uppercase tracking-wider text-[#E5C384] block font-semibold">
              {rev.location || 'Raichur, Karnataka'}
            </span>
            <h4 className="font-serif text-base sm:text-lg text-[#FAF8F5] font-medium leading-snug line-clamp-1">
              {caption}
            </h4>
          </div>
        </div>
      )}

      {/* Body */}
      <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between gap-4 text-left">
        <div>
          {!hasPhoto && (
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-semibold px-3 py-1 bg-[#FAF5EE] text-[#8C6839] rounded-full border border-[#E8DFC8]">
                {isStudent ? <GraduationCap className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
                {badge}
              </span>
              <Quote className="w-5 h-5 text-[#E8DFC8]" />
            </div>
          )}

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1 text-[#C9A050]">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-[11px] text-[#76685E]">{rev.date}</span>
          </div>

          <p className="text-xs sm:text-sm text-[#4E443B] leading-relaxed italic">"{rev.review}"</p>
        </div>

        <div className="pt-4 border-t border-[#F2EDE4] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 shrink-0 rounded-full bg-[#120F0D] text-[#E5C384] flex items-center justify-center font-serif text-sm">
              {rev.clientName?.charAt(0).toUpperCase() || 'G'}
            </div>
            <div className="min-w-0">
              <h5 className="font-serif text-sm font-semibold text-[#120F0D] truncate">{rev.clientName}</h5>
              <span className="text-[11px] text-[#76685E] block truncate">
                {isStudent
                  ? `Student • ${rev.course || 'Makeup Academy'}`
                  : 'Verified Bride / Client • Shwetha Subhash Artistry'}
              </span>
            </div>
          </div>

          {hasPhoto && (
            <button
              type="button"
              onClick={open}
              className="text-[11px] text-[#8C6839] hover:text-[#120F0D] font-semibold underline cursor-pointer shrink-0"
            >
              View Photo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ---------- Section wrapper ---------- */
interface SectionProps {
  id: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  subtitle: string;
  filters: readonly string[];
  active: string;
  onFilter: (f: string) => void;
  reviews: PageReview[];
  emptyText: string;
  onOpenPhoto: CardProps['onOpenPhoto'];
  tinted?: boolean;
}

const ReviewSection: React.FC<SectionProps> = ({
  id, icon, eyebrow, title, subtitle, filters, active, onFilter,
  reviews, emptyText, onOpenPhoto, tinted
}) => (
  <section id={id} className={`scroll-mt-24 ${tinted ? 'bg-[#F9F5EF] border-y border-[#EFE8DE]' : ''}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-3 shadow-xs">
          {icon}
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
            {eyebrow}
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D] mb-2">{title}</h2>
        <p className="text-xs sm:text-sm text-[#54483F] leading-relaxed">{subtitle}</p>
      </div>

      {/* Filters: horizontal scroll on mobile, centred on desktop */}
      <div className="-mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-10 overflow-x-auto sm:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 w-max sm:w-auto mx-auto">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => onFilter(f)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs uppercase tracking-widest font-semibold rounded-full transition-all cursor-pointer ${
                active === f
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/30'
                  : 'bg-white text-[#54483F] border border-[#E8DFD5] hover:bg-[#F2EDE4]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {reviews.length === 0 ? (
        <div className="text-center py-14 bg-white border border-[#EFE8DE] rounded-3xl p-8">
          <p className="font-serif text-lg sm:text-xl text-[#54483F]">{emptyText}</p>
        </div>
      ) : (
        // Masonry columns so photos of any height keep their natural ratio
        <StaggerContainer staggerDelay={0.08} className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8">
          {reviews.map((rev) => (
            <StaggerItem key={rev.id} className="break-inside-avoid mb-6 sm:mb-8">
              <ReviewCard rev={rev} onOpenPhoto={onOpenPhoto} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  </section>
);

/* ---------- Page ---------- */
export const ReviewsPage: React.FC = () => {
  const [clientFilter, setClientFilter] = useState<string>('All');
  const [studentFilter, setStudentFilter] = useState<string>('All');
  const [activeTab, setActiveTab] = useState<ReviewKind>('client');
  const [selectedPhoto, setSelectedPhoto] = useState<
    { url: string; title: string; clientName: string; eventType: string } | null
  >(null);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);

  const [allReviews, setAllReviews] = useState<PageReview[]>(() => {
    try {
      const local = localStorage.getItem('glamour_user_submitted_reviews');
      if (local) {
        const parsed = JSON.parse(local);
        return [...parsed, ...(studioReviews as PageReview[]), ...studentReviewsSeed];
      }
    } catch {}
    return [...(studioReviews as PageReview[]), ...studentReviewsSeed];
  });

  // Scroll helper: scrolls to the correct section
  const scrollToSection = (key: ReviewKind) => {
    const id = key === 'client' ? 'client-reviews' : 'student-reviews';
    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  // Photos uploaded through the photo studio manager (treated as client looks)
  useEffect(() => {
    const handlePhotoUpdate = () => {
      const customPhotos = getStoredCustomPhotos().filter((p) => p.category === 'reviews');
      if (customPhotos.length > 0) {
        setAllReviews((prev) => {
          const customReviews: PageReview[] = customPhotos.map((cp) => ({
            id: cp.id,
            reviewType: 'client',
            clientName: cp.clientName || 'Celebration Client',
            eventType: (cp.eventType as any) || 'Bridal',
            rating: 5,
            review:
              'Flawless artistry by Shwetha Subhash! The skin was radiant, second-skin, and lasted throughout all rituals.',
            date: new Date(cp.uploadedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
            lookPhoto: cp.url,
            lookTitle: cp.title,
            location: 'Raichur, Karnataka',
            featuredOnHome: true
          })) as PageReview[];
          const existingIds = new Set(prev.map((r) => r.id));
          return [...customReviews.filter((cr) => !existingIds.has(cr.id)), ...prev];
        });
      }
    };
    handlePhotoUpdate();
    window.addEventListener('glamour-photos-updated', handlePhotoUpdate);
    return () => window.removeEventListener('glamour-photos-updated', handlePhotoUpdate);
  }, []);

  const clientReviews = allReviews.filter((r) => r.reviewType !== 'student');
  const studentReviews = allReviews.filter((r) => r.reviewType === 'student');

  const filteredClient =
    clientFilter === 'All' ? clientReviews : clientReviews.filter((r) => r.eventType === clientFilter);
  const filteredStudent =
    studentFilter === 'All' ? studentReviews : studentReviews.filter((r) => r.course === studentFilter);

  /* ----- Submit form ----- */
  const emptyForm = {
    reviewType: 'client' as ReviewKind,
    clientName: '',
    eventType: 'Bridal' as EventType,
    course: COURSES[0] as string,
    rating: 5,
    lookTitle: '',
    review: '',
    location: 'Raichur, Karnataka',
    photoUrl: '',
    photoPreview: ''
  };
  const [newReview, setNewReview] = useState(emptyForm);

  const handleReviewPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setNewReview((prev) => ({
        ...prev,
        photoUrl: dataUrl,
        photoPreview: dataUrl,
        lookTitle: prev.lookTitle || file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleAddReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.clientName.trim() || !newReview.review.trim()) return;

    const isStudent = newReview.reviewType === 'student';
    const created: PageReview = {
      id: 'rev-user-' + Date.now().toString(),
      reviewType: newReview.reviewType,
      clientName: newReview.clientName,
      eventType: isStudent ? undefined : newReview.eventType,
      course: isStudent ? newReview.course : undefined,
      rating: newReview.rating,
      review: newReview.review,
      date: 'Recent',
      // Everyone gets a photo card (fallback used if none uploaded)
      lookPhoto: newReview.photoUrl || FALLBACK_PHOTO,
      lookTitle:
        newReview.lookTitle ||
        (isStudent ? `${newReview.course} Course` : `${newReview.eventType} Artistry by Shwetha Subhash`),
      location: newReview.location || 'Raichur, Karnataka',
      featuredOnHome: !isStudent
    } as PageReview;

    setAllReviews((prev) => [created, ...prev]);
    try {
      const existing = JSON.parse(localStorage.getItem('glamour_user_submitted_reviews') || '[]');
      localStorage.setItem('glamour_user_submitted_reviews', JSON.stringify([created, ...existing]));
    } catch {}

    setIsAddReviewOpen(false);
    setNewReview(emptyForm);
  };

  const inputCls =
    'w-full px-3.5 py-2.5 bg-white border border-[#E8DFD5] rounded-xl text-xs text-[#120F0D] focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40';
  const labelCls = 'block text-xs uppercase tracking-wider font-semibold text-[#54483F] mb-1';

  return (
    <div className="bg-[#FCFAF8] pb-28 min-h-screen text-[#120F0D]">
      <SEO
        title="Client & Student Reviews | Glamour Makeup Studio • Raichur"
        description="Real bridal transformations and student testimonials from Shwetha Subhash's makeup studio and academy in Raichur, Karnataka."
      />

      <Breadcrumbs items={[{ label: 'Reviews & Client Looks' }]} />

      {/* Hero */}
      <AnimatedSection className="py-12 sm:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Real Brides & Academy Students
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-6xl text-[#120F0D] mb-4">Client Reviews & Looks</h1>
          <p className="font-serif text-base sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            "Authentic transformations and heartfelt reflections from our brides and students in Raichur, Karnataka."
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 max-w-sm sm:max-w-none mx-auto">
            {([
              { key: 'client', label: 'Client Review', Icon: Users },
              { key: 'student', label: 'Student Review', Icon: GraduationCap }
            ] as const).map(({ key, label, Icon }) => (
              <button
                key={key}
                onClick={() => {
                  setActiveTab(key);
                  scrollToSection(key);
                }}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold rounded-full transition-all active:scale-95 cursor-pointer ${
                  activeTab === key
                    ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md'
                    : 'bg-white hover:bg-[#F2EDE4] text-[#120F0D] border border-[#E8DFD5] shadow-xs'
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === key ? 'text-[#E5C384]' : 'text-[#8C6839]'}`} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Aggregate Rating Banner */}
      <AnimatedSection className="py-8 bg-[#FCFAF8] border-b border-[#EFE8DE]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-[#120F0D]">5.0</span>
            <div>
              <div className="flex items-center gap-1 text-[#C9A050]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-[#76685E] mt-0.5 block font-medium text-left">
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

      <div id="reviews-list" className="scroll-mt-20" />

      {/* SECTION 1: Client Reviews */}
      <ReviewSection
        id="client-reviews"
        icon={<Users className="w-3.5 h-3.5 text-[#C9A050]" />}
        eyebrow="Client Reviews"
        title="Words From Our Brides"
        subtitle="Real looks and honest reviews from brides and celebration clients styled by Shwetha Subhash."
        filters={CLIENT_FILTERS}
        active={clientFilter}
        onFilter={setClientFilter}
        reviews={filteredClient}
        emptyText="No client reviews in this category yet."
        onOpenPhoto={setSelectedPhoto}
      />

      {/* SECTION 2: Student Reviews (always under Client Reviews) */}
      <ReviewSection
        id="student-reviews"
        tinted
        icon={<GraduationCap className="w-3.5 h-3.5 text-[#C9A050]" />}
        eyebrow="Student Reviews"
        title="Stories From Our Students"
        subtitle="Aspiring artists who trained with Shwetha Subhash share how the courses shaped their careers."
        filters={STUDENT_FILTERS}
        active={studentFilter}
        onFilter={setStudentFilter}
        reviews={filteredStudent}
        emptyText="No student reviews for this course yet."
        onOpenPhoto={setSelectedPhoto}
      />

      {/* Booking banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="text-center p-8 sm:p-14 bg-[#120F0D] text-[#FAF8F5] rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C9A050]/15 rounded-full blur-3xl pointer-events-none" />
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#E5C384] block mb-2">
            Raichur Atelier & Academy
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl mb-3 text-[#FAF8F5]">Experience Your Dream Transformation</h3>
          <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-xl mx-auto mb-6 font-light leading-relaxed">
            Reserve your bridal date or enquire about our makeup courses with Shwetha Subhash. Personalised consultations,
            trials and undivided attention.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-widest rounded-full transition-all shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4 text-[#8C6839]" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative bg-[#120F0D] text-[#FAF8F5] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-white/10 my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close photo preview"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full flex items-center justify-center bg-black/40 p-2 sm:p-4">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-lg"
              />
            </div>

            <div className="p-5 sm:p-6 bg-[#120F0D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#E5C384] font-semibold block">
                  {selectedPhoto.eventType} • Raichur, Karnataka
                </span>
                <h3 className="font-serif text-lg sm:text-2xl text-[#FAF8F5]">{selectedPhoto.title}</h3>
                <p className="text-xs text-[#D5C9BD] mt-0.5">
                  {selectedPhoto.clientName} • Shwetha Subhash Artistry
                </p>
              </div>
              <Link
                to="/contact"
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2.5 bg-[#FAF8F5] hover:bg-white text-[#120F0D] text-xs uppercase tracking-wider font-semibold rounded-full transition-colors shrink-0"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ADD REVIEW MODAL */}
      {isAddReviewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={() => setIsAddReviewOpen(false)}
        >
          <div
            className="bg-[#FCFAF8] text-[#120F0D] rounded-3xl max-w-xl w-full p-5 sm:p-8 shadow-2xl border border-[#EFE8DE] relative my-4 sm:my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsAddReviewOpen(false)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 rounded-full bg-[#FAF5EE] hover:bg-[#F2EDE4] text-[#54483F] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 px-3 py-1 bg-white border border-[#E8DFC8] rounded-full w-fit mb-3 shadow-xs">
              <Camera className="w-3.5 h-3.5 text-[#C9A050]" />
              <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold">
                Share Your Experience
              </span>
            </div>

            <h2 className="font-serif text-xl sm:text-3xl text-[#120F0D] mb-2 text-left pr-10">Share Your Review</h2>
            <p className="text-xs text-[#76685E] mb-5 text-left">
              Tell us about your experience with Shwetha Subhash and add a photo so your review stands out.
            </p>

            <form onSubmit={handleAddReviewSubmit} className="space-y-4 text-left">
              {/* I am a: Client / Student */}
              <div>
                <label className={labelCls}>I am a</label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#FAF5EE] rounded-full border border-[#E8DFC8]">
                  {(['client', 'student'] as ReviewKind[]).map((k) => (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setNewReview((p) => ({ ...p, reviewType: k }))}
                      className={`py-2 text-[11px] uppercase tracking-widest font-semibold rounded-full transition-colors cursor-pointer ${
                        newReview.reviewType === k ? 'bg-[#120F0D] text-[#FAF8F5]' : 'text-[#54483F]'
                      }`}
                    >
                      {k === 'client' ? 'Client / Bride' : 'Student'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo */}
              <div>
                <label className={labelCls}>
                  {newReview.reviewType === 'student' ? 'Upload Your Photo (Class / Practical / Result)' : 'Upload Your Look Photo'}
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
                      {/* Preview keeps the full photo, no cropping */}
                      <div className="w-20 h-24 rounded-xl overflow-hidden border border-[#E8DFC8] shrink-0 bg-white flex items-center justify-center">
                        <img
                          src={newReview.photoPreview}
                          alt="Review preview"
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                      <div className="text-xs">
                        <span className="text-emerald-700 font-semibold block">Photo attached successfully!</span>
                        <p className="text-[#76685E] text-[11px] mt-0.5">Tap to change photo</p>
                      </div>
                    </div>
                  ) : (
                    <div className="py-2 text-center space-y-1">
                      <Upload className="w-5 h-5 text-[#C9A050] mx-auto" />
                      <span className="text-xs font-semibold text-[#120F0D] block">Tap to upload from your device</span>
                      <span className="text-[11px] text-[#76685E] block">JPG, PNG, WebP • Shown exactly as uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={newReview.clientName}
                    onChange={(e) => setNewReview((p) => ({ ...p, clientName: e.target.value }))}
                    placeholder="e.g. Ananya Rao"
                    className={inputCls}
                  />
                </div>

                {newReview.reviewType === 'client' ? (
                  <div>
                    <label className={labelCls}>Celebration Occasion</label>
                    <select
                      value={newReview.eventType}
                      onChange={(e) => setNewReview((p) => ({ ...p, eventType: e.target.value as EventType }))}
                      className={inputCls}
                    >
                      <option value="Bridal">Bridal Muhurtham / Wedding</option>
                      <option value="Engagement">Engagement / Roka</option>
                      <option value="Reception">Evening Reception</option>
                      <option value="Party">Party / Sangeet</option>
                      <option value="Photoshoot">Editorial / Pre-Wedding</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className={labelCls}>Course Attended</label>
                    <select
                      value={newReview.course}
                      onChange={(e) => setNewReview((p) => ({ ...p, course: e.target.value }))}
                      className={inputCls}
                    >
                      {COURSES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              <div>
                <label className={labelCls}>
                  {newReview.reviewType === 'student' ? 'Photo Caption (Optional)' : 'Look Title (Optional)'}
                </label>
                <input
                  type="text"
                  value={newReview.lookTitle}
                  onChange={(e) => setNewReview((p) => ({ ...p, lookTitle: e.target.value }))}
                  placeholder={
                    newReview.reviewType === 'student'
                      ? 'e.g. My first bridal practical'
                      : 'e.g. Traditional Red Kanjeevaram Bridal Glow'
                  }
                  className={inputCls}
                />
              </div>

              <div>
                <label className={labelCls}>Your Review / Experience *</label>
                <textarea
                  required
                  rows={3}
                  value={newReview.review}
                  onChange={(e) => setNewReview((p) => ({ ...p, review: e.target.value }))}
                  placeholder={
                    newReview.reviewType === 'student'
                      ? 'Tell future students about the teaching, practicals and what you achieved after the course...'
                      : 'Tell future brides about the makeup endurance, skin feel, and how it felt on your special day...'
                  }
                  className={inputCls}
                />
              </div>

              <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddReviewOpen(false)}
                  className="px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#76685E] hover:text-[#120F0D] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 sm:py-2.5 bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-full shadow-sm transition-colors cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};