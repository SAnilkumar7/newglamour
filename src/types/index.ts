export interface BusinessInfo {
  name: string;
  founderName?: string;
  tagline: string;
  yearsOfExperience: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string; // international digits only for wa.me link e.g. "919876543210"
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  state?: string;
  workingHours: string;
  hours?: string;
  mapsEmbedUrl: string;
  mapsDirectionUrl: string;
  instagram: string;
  facebook: string;
  youtube: string;
}

export interface CraftStep {
  stepNumber: string; // e.g. "01", "02"
  title: string;      // e.g. "Skin Canvas Preparation & Deep Hydration"
  tag: string;        // e.g. "Step 01 • 35-Min Care"
  image: string;      // High-resolution photo showing the work being performed
  description: string; // Detailed breakdown of the craftsmanship & effort
  highlightPoints: string[]; // Key technical points so the client easily agrees & engages
  clientBenefit: string; // The tangible promise/guarantee (e.g. "Zero cakey cracks, 100% flash-proof")
}

export interface ServiceItem {
  id: string; // e.g. "bridal", "engagement", "party", "reception", "photoshoot", "custom"
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  galleryImages: string[];
  craftSteps?: CraftStep[]; // Visual photo evidence of how the work will be done & effort
  priceRange: string;
  duration: string;
  perfectFor: string[];
  inclusions: string[];
  lookOptions?: { title: string; desc: string }[];
  timelineSteps?: { step: string; title: string; desc: string }[];
  preparationTips: string[];
  faqs: { question: string; answer: string }[];
  relatedPackages: string[];
  featuredOnHome?: boolean;
}

export interface PackageItem {
  id: string;
  name: string;
  price: string;
  isPopular?: boolean;
  tagline: string;
  description: string;
  duration: string;
  servicesIncluded: string[];
  recommendedAddOns: string[];
  disclaimer?: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  category: 'HAIR' | 'EYES' | 'BRIDAL' | 'TRAVEL';
  description: string;
  price: string;
  startingPriceNumber?: number;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Engagement' | 'Reception' | 'Party' | 'Photoshoot';
  image: string;
  description: string;
  featuredOnHome?: boolean;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Bridal Transformations' | 'Behind the Scenes' | 'Makeup Process' | 'Client Reveals' | 'Hair Styling';
  thumbnail: string;
  videoUrl: string;
  type: 'youtube' | 'mp4' | 'reel';
  duration?: string;
  description?: string;
}

export interface ClientStory {
  id: string;
  clientName: string;
  occasion: string;
  eventDate: string;
  storyTitle: string;
  vision: string;
  approach: string;
  look: string;
  experience: string;
  quote: string;
  heroImage: string;
  galleryImages: string[];
  featuredOnHome?: boolean;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  eventType: 'Bridal' | 'Engagement' | 'Party' | 'Reception' | 'Photoshoot';
  rating: number;
  review: string;
  date: string;
  image?: string; // Avatar / Profile picture
  lookPhoto?: string; // Custom real look photo of the client / makeover
  lookTitle?: string; // Look description, e.g. "Heritage Crimson Bridal Glam"
  location?: string; // Event location e.g. "Raichur, Karnataka"
  customPhotos?: string[]; // Multiple photos if available
  featuredOnHome?: boolean;
}

export interface FAQItem {
  id: string;
  category: 'Booking' | 'Bridal' | 'Services' | 'Preparation' | 'Payments';
  question: string;
  answer: string;
}

export interface BookingEnquiry {
  id: string;
  createdAt: string;
  fullName: string;
  phone: string;
  whatsapp?: string;
  whatsappNumber?: string;
  email?: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  service: string;
  package?: string;
  packageChosen?: string;
  selectedAddOns: string[];
  numberOfPeople: string;
  preferredTime: string;
  additionalNotes?: string;
  additionalRequirements?: string;
  status: 'New' | 'Contacted' | 'Confirmed' | 'pending' | 'confirmed' | 'completed';
}
