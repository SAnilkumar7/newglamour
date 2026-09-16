/**
 * GLAMOUR MAKEUP STUDIO - CENTRAL IMAGE REPOSITORY
 * 
 * NOTE FOR STUDIO OWNER / DEVELOPER:
 * All website images are organized here for effortless replacement!
 * You can simply replace any URL below with:
 * 1. Your own local image file path (e.g., "/images/portfolio/my-bridal-01.jpg" placed in the /public folder)
 * 2. Or your cloud-hosted / drive image link.
 */

export const heroImages = {
  homeHero: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1800&q=85", // Luxury South Asian / Indian bridal portrait
  homeHeroSplit: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80", // Close-up glamour makeup
  aboutHero: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1800&q=80", // Editorial beauty portrait
  artistHero: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", // Elegant artist portrait
  servicesHero: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1800&q=80", // Luxury beauty studio setup
  bridalHero: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1800&q=85", // Majestic Indian bride with jewelry
  packagesHero: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1800&q=80", // Champagne & beauty backstage
  portfolioHero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80", // Beauty studio showcase
  contactHero: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1800&q=80", // Warm aesthetic portrait
};

export const artistImages = {
  portraitMain: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85", // Lead makeup artist
  workingWithBride: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80", // Applying makeup on bride
  productPreparation: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80", // Luxury brushes and palette
  hairstyling: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80", // Intricate bridal hair work
  studioBTS: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80", // Studio backstage ambiance
  finalReveal: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80", // Joyful mirror reveal
};

export const serviceImages = {
  bridal: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85", // Signature royal bridal look
  engagement: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80", // Romantic soft glam
  party: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1200&q=80", // Modern cocktail / party glamour
  reception: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80", // High-fashion evening reception
  photoshoot: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=80", // Camera-ready editorial look
  custom: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1200&q=80", // Bespoke personal makeover
};

export const portfolioImages = [
  {
    id: "port-1",
    title: "Royal Crimson Bridal Elegance",
    category: "Bridal" as const,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    description: "Classic red lehenga bridal look with matte warm gold eyes and sculpted lips.",
    featuredOnHome: true,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-2",
    title: "Pastel Dream Engagement Glam",
    category: "Engagement" as const,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    description: "Dewy glass skin, champagne shimmer eyes, and soft rose blush.",
    featuredOnHome: true,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-3",
    title: "Velvet Night Reception Glamour",
    category: "Reception" as const,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=85",
    description: "Deep smoky eye paired with a nude contoured lip and high-shine highlighter.",
    featuredOnHome: true,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-4",
    title: "Editorial Golden Hour Muse",
    category: "Photoshoot" as const,
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85",
    description: "Camera-optimized base with bronzed sculpt and feathered natural brows.",
    featuredOnHome: true,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-5",
    title: "Sangeet Sparkle & Curls",
    category: "Party" as const,
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1000&q=85",
    description: "Vibrant eye pigments designed to catch banquet lights and stay sweat-proof.",
    featuredOnHome: true,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-6",
    title: "Subtle Heritage Bride",
    category: "Bridal" as const,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    description: "Timeless traditional look emphasizing natural radiance and graceful eyes.",
    featuredOnHome: true,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-7",
    title: "Modern Minimalist Bride",
    category: "Bridal" as const,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=85",
    description: "Soft monochromatic tones, clean wings, and flawless luminous finish.",
    featuredOnHome: false,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-8",
    title: "Cocktail Evening Diva",
    category: "Party" as const,
    image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1000&q=85",
    description: "Statement jewel tones with waterproof hd finish for all-night dancing.",
    featuredOnHome: false,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-9",
    title: "Contemporary Stunner Engagement",
    category: "Engagement" as const,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85",
    description: "Glitter cut-crease with lush mink-feel lashes and pearlescent blush.",
    featuredOnHome: false,
    aspectRatio: "portrait" as const,
  },
  {
    id: "port-10",
    title: "High-Fashion Editorial Cover",
    category: "Photoshoot" as const,
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=85",
    description: "Clean geometric symmetry, glass skin texture, and sculptural contouring.",
    featuredOnHome: false,
    aspectRatio: "portrait" as const,
  }
];

export const clientStoryImages = {
  story01: {
    hero: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
    ]
  },
  story02: {
    hero: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  story03: {
    hero: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=800&q=80"
    ]
  }
};

export const videoThumbnails = {
  reel1: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
  reel2: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  reel3: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  reel4: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
  reel5: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
  reel6: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=800&q=80",
};

export const reviewAvatars = {
  avatar1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  avatar2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  avatar3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  avatar4: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
};

export const studioHighlightImages = [
  {
    id: "shop-1",
    title: "Bridal Vanity Suite & Hollywood Mirrors",
    category: "Vanity Suite",
    description: "Spacious private styling bay with CRI 98+ daylight illumination and 360-degree viewing angles.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "shop-2",
    title: "Master Artistry & Pigment Lab",
    category: "Artistry Station",
    description: "Pristinely organized luxury beauty station with high-end palettes (Chanel, Dior, Charlotte Tilbury, NARS).",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "shop-3",
    title: "Private Bridal Consultation Lounge",
    category: "Client Lounge",
    description: "Calm, plush consultation atmosphere for brides and family to review moodboards, outfit necklines, and trials.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "shop-4",
    title: "Clean Beauty & Sanitization Bar",
    category: "Hygiene & Care",
    description: "Hospital-grade UV & ultrasonic brush sanitizers, single-use applicators, and dermatologically safe skin prep.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "shop-5",
    title: "Hair Architecture & Dupatta Draping Bay",
    category: "Styling & Draping",
    description: "Dedicated ergonomics for heavy lehenga dupatta pleating, heirloom jewelry setting, and floral hairstyles.",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85",
  },
];

