import {
  BusinessInfo,
  ServiceItem,
  PackageItem,
  AddOnItem,
  VideoItem,
  ClientStory,
  ReviewItem,
  FAQItem
} from '../types';
import {
  serviceImages,
  clientStoryImages,
  videoThumbnails,
  reviewAvatars
} from './images';

export const studioBusinessInfo: BusinessInfo = {
  name: "Glamour Makeup Studio",
  founderName: "Shwetha Subhash",
  tagline: "Luxury Bridal & Celebration Makeup Artistry by Shwetha Subhash",
  yearsOfExperience: "7+ Years",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  whatsapp: "919876543210", // Configurable WhatsApp number for direct chat
  whatsappDisplay: "+91 98765 43210",
  email: "hello@glamourmakeupstudio.com",
  address: "Station Road, Near Gandhi Chowk, Raichur",
  city: "Raichur, Karnataka • Available Across Karnataka & Destination Events",
  state: "Karnataka",
  workingHours: "Tuesday – Sunday: 9:00 AM – 7:30 PM (Bridal calls & trials by appointment)",
  hours: "Tuesday – Sunday: 9:00 AM – 7:30 PM",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61183.18937748466!2d77.3166667!3d16.2076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb99cdfa2c4b727%3A0x7d2ec693e5ec776!2sRaichur%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapsDirectionUrl: "https://maps.google.com/?q=Raichur+Karnataka+Glamour+Makeup+Studio",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
};

export const studioInfo = studioBusinessInfo;


export const studioServices: ServiceItem[] = [
  {
    id: "bridal",
    name: "Bridal Makeup",
    tagline: "Bridal Makeup That Feels Unmistakably You",
    shortDescription: "Our signature luxury bridal service designed to create radiant, enduring, and timeless elegance for your most momentous celebration.",
    longDescription: "Your wedding day is one of the most photographed and emotionally cherished milestones of your life. At Glamour Makeup Studio, our 7+ years of bridal specialization ensure your makeup enhances your natural facial symmetry, complements your couture ensemble and heirloom jewelry, and remains effortlessly fresh from morning pheras to late-night celebrations.",
    heroImage: serviceImages.bridal,
    galleryImages: [
      serviceImages.bridal,
      serviceImages.engagement,
      serviceImages.reception
    ],
    craftSteps: [
      {
        stepNumber: "01",
        title: "Clinical Skin Prep & Deep Barrier Hydration",
        tag: "Step 01 • 35-Min Canvas Prep",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
        description: "Before a single drop of makeup touches your face, we deeply infuse skin with clinical hyaluronic serums, botanical antioxidants, and cooling lymphatic massage rollers to eliminate puffiness and calm redness.",
        highlightPoints: [
          "Bespoke moisture infusion calibrated to oily, dry, or sensitive skin types",
          "Eliminates flaky dry patches and pore texture completely",
          "Lymphatic massage drains puffiness around eyelids and sculpts jawline"
        ],
        clientBenefit: "Guarantees foundation glides on like liquid silk with zero caking or settling into smile lines."
      },
      {
        stepNumber: "02",
        title: "Bespoke HD / Airbrush Flash-Proof Tone Match",
        tag: "Step 02 • True-Skin Calibration",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
        description: "We hand-mix customized foundation shades across face, neck, and décolletage. Using micro-buffing techniques, we create invisible, featherlight coverage that looks like immaculate natural skin.",
        highlightPoints: [
          "100% Zero-Flashback guarantee under 4K camera lights and studio flashes",
          "Sweat-resistant, tear-proof transfer lock for warm indoor banquets",
          "Zero ghost-white cast or ashy oxidation throughout the 14-hour celebration"
        ],
        clientBenefit: "Skin appears breathtakingly luminous in real life and across all wedding videography."
      },
      {
        stepNumber: "03",
        title: "Symmetrical Eye Architecture & Tear-Proof Lashes",
        tag: "Step 03 • Smudge-Proof Artistry",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
        description: "Hand-blended warm golds, antique bronze foils, or soft rose mattes tailored to your lehenga embroidery. We hand-place featherweight 3D mink-feel lashes and seal tightlines with waterproof gel.",
        highlightPoints: [
          "100% Tear-proof and smudge-resistant for emotional ceremonies and pheras",
          "Custom lash mapping that opens hooded, almond, or deep-set eyes without heaviness",
          "Precision brow micro-shaping for flattering facial symmetry"
        ],
        clientBenefit: "Expressive, radiant eyes that remain immaculate from morning pheras to late-night bidaai."
      },
      {
        stepNumber: "04",
        title: "Couture Hair Architecture & Heirloom Jewelry Anchor",
        tag: "Step 04 • Crown & Volume Hold",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
        description: "Thermal texturizing builds crown volume that will never sag. We weave fresh jasmine or baby's breath, install seamless extensions, and engineer multi-point anchorage for heavy tikkas, mathapattis, and passas.",
        highlightPoints: [
          "Engineered for zero scalp tension — no headache pull throughout the day",
          "Multi-point pin locks ensure heavy mathapattis never shift while dancing",
          "Anti-humidity thermal seal preserves curls and sleek textures in any climate"
        ],
        clientBenefit: "A regal bridal crown that stays perfectly secure and comfortable all day long."
      },
      {
        stepNumber: "05",
        title: "Master Dupatta Draping & 16-Hour Touch-Up Seal",
        tag: "Step 05 • Royal Drape & Kit",
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
        description: "Double-safety pinned weight balance distributes the load of heavy zari or velvet dupattas across your shoulders so you walk freely. Finished with cinema-grade micro-mist seal and an emergency touch-up kit.",
        highlightPoints: [
          "Weight-balanced safety pinning protects costly bridal fabrics and eases shoulder pressure",
          "Complimentary Bridal Touch-Up Kit included: exact lip shade decant, blotting papers & powder puff",
          "Final 360-degree mirror inspection and flash-photography test before bride leaves"
        ],
        clientBenefit: "Effortless walking posture, flawless comfort, and guaranteed 16-hour endurance."
      }
    ],
    priceRange: "Bespoke Artistry",
    duration: "3 – 3.5 Hours",
    perfectFor: [
      "Traditional Indian Wedding Ceremonies (Hindu, Sikh, Muslim, Christian)",
      "Contemporary & Minimalist Destination Weddings",
      "Royal Heritage & Palace Celebrations",
      "Morning Anand Karaj / Daytime Muhurtham",
      "Evening Sangeet & Pheras"
    ],
    inclusions: [
      "In-depth Pre-wedding Bridal Consultation & Moodboard Creation",
      "Luxury Skin Prep & Hydrating Lymphatic Facial Massage",
      "HD / Airbrush Waterproof High-Definition Foundation Base",
      "Precision Eye Styling, Lash Application & Waterline Sculpting",
      "Hairstyling with Floral Setting, Extensions & Dupatta Draping",
      "Jewelry & Hair Accessories Placement Support",
      "Full Bridal Emergency Touch-Up Kit (Lip shade sample, blotting sheets, powder pad)"
    ],
    lookOptions: [
      {
        title: "The Regal Heritage Bride",
        desc: "Luminous velvet skin, warm smoked antique gold eyes, sculpted terracotta or royal crimson lips, designed to pair with traditional gold and polki jewelry."
      },
      {
        title: "The Modern Pastel / Soft Glam Bride",
        desc: "Dewy glass finish, delicate rose-champagne shimmer eyelids, feathered natural brows, and nude-pink blush pairing seamlessly with pastel or floral lehengas."
      },
      {
        title: "The Contemporary Minimalist Bride",
        desc: "Breathable skin-first finish, clean feline eyeliner, defined lashes, and a sophisticated satin nude lip for daytime vows and registry ceremonies."
      }
    ],
    timelineSteps: [
      {
        step: "01",
        title: "Skin Nourishment & Priming",
        desc: "Deep cleansing, botanical serum infusing, and custom barrier prep tailored to your skin type."
      },
      {
        step: "02",
        title: "Complexion Sculpting",
        desc: "Layered, micro-blended HD formula engineered to look seamless in high-definition photography and natural daylight."
      },
      {
        step: "03",
        title: "Expressive Eye Architecture",
        desc: "Smudge-proof pigments, waterproof liners, and individual lash application customized to eye shape."
      },
      {
        step: "04",
        title: "Hairstyling & Royal Draping",
        desc: "Secure floral or jewel pin placement, high-hold setting, and meticulous dupatta safety pinning."
      }
    ],
    preparationTips: [
      "Avoid harsh chemical peels, waxing, or new skincare actives within 10 days of the wedding.",
      "Maintain high hydration and use a hydrating lip mask every night leading up to the big day.",
      "Wear a button-down or loose zip-up outfit on your wedding day to prevent disturbing hair and makeup."
    ],
    faqs: [
      {
        question: "Do you offer bridal makeup trials?",
        answer: "Yes, bridal consultations and trial sessions are available at our studio upon request so you can finalize your exact tones, hairstyle, and finish prior to the wedding."
      },
      {
        question: "Do you travel to venues and destination weddings?",
        answer: "Absolutely! We travel across India and internationally for destination weddings. Travel and hospitality arrangements are tailored to your itinerary."
      },
      {
        question: "Can you accommodate family and bridesmaids as well?",
        answer: "Yes, our studio team includes certified senior artists who can seamlessly accommodate mother of the bride, bridesmaids, and close family."
      }
    ],
    relatedPackages: ["Bridal Experience", "Signature Glam"],
    featuredOnHome: true,
  },
  {
    id: "engagement",
    name: "Engagement Makeup",
    tagline: "Romantic, Luminous & Captivating",
    shortDescription: "Soft, romantic glamour balancing glowing skin with expressive eyes for ring ceremonies and intimate celebrations.",
    longDescription: "The engagement ceremony sets the tone for your wedding festivities. Our engagement makeup aesthetic focuses on glowing, romantic, camera-ready luminosity that feels celebratory yet light and youthful.",
    heroImage: serviceImages.engagement,
    galleryImages: [serviceImages.engagement, serviceImages.party],
    craftSteps: [
      {
        stepNumber: "01",
        title: "Luminous Dew Skin Prep & Moisture Primer",
        tag: "Step 01 • Dewy Base Prep",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80",
        description: "We prep the skin with gentle moisture priming, barrier glow elixirs, and targeted under-eye cooling masks to create an ultra-fresh, romantic glow that radiates under cocktail and natural lighting.",
        highlightPoints: [
          "Weightless hydration that banishes dullness without causing excess oiliness",
          "Smoothes skin texture around the T-zone and smile lines",
          "Preps skin so makeup looks freshly done all evening"
        ],
        clientBenefit: "Glass-skin radiance that feels like your own bare skin, elevated to perfection."
      },
      {
        stepNumber: "02",
        title: "Featherlight HD Complexion & Natural Sculpt",
        tag: "Step 02 • Camera-Ready Glow",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
        description: "Layered with breathable HD pigments and cream-contour blending to softly chisel cheekbones without heavy harsh lines. Calibrated for ring exchange close-ups and ring photography.",
        highlightPoints: [
          "Zero cakey buildup — allows natural freckles and glow to shine cleanly",
          "Seamless blend down neckline and hands for flawless ring photos",
          "Long-wear setting that resists hugs, greetings, and indoor climate changes"
        ],
        clientBenefit: "Impeccable close-up beauty that photographs effortlessly without heavy filters."
      },
      {
        stepNumber: "03",
        title: "Champagne Shimmer & Soft Flutter Lashes",
        tag: "Step 03 • Romantic Eye Focus",
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=85",
        description: "Soft rose-gold and champagne eye pigments paired with light-as-air wispy flutter lashes. Eyelids catch the ambient light with every glance while remaining comfortably weightless.",
        highlightPoints: [
          "Custom lash flare designed specifically for your eye shape",
          "Smudge-proof tightlining that withstands emotional smiles and laughter",
          "Flattering rose or nude-pink lip tint contoured for long-lasting color"
        ],
        clientBenefit: "Hypnotic, romantic eyes that look captivating in both video reels and candid albums."
      },
      {
        stepNumber: "04",
        title: "Romantic Hollywood Waves or Textured Updo & Drape",
        tag: "Step 04 • Modern Hair & Drape",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
        description: "Bespoke styling featuring voluminous brushed-out waves, textured half-up romantic crowns, or effortless modern chignons, followed by precise dupatta/gown drape pinning.",
        highlightPoints: [
          "Thermal memory spray locks bounce into waves for 10+ hours",
          "Gentle anchor for floral accessories or delicate hair vines",
          "Double-pinned drape assistance for lehengas, pre-stitched sarees, or gowns"
        ],
        clientBenefit: "Effortlessly chic aesthetic that flows gracefully as you celebrate and mingle."
      }
    ],
    priceRange: "Bespoke Artistry",
    duration: "2 – 2.5 Hours",
    perfectFor: [
      "Ring Ceremonies & Roka Functions",
      "Cocktail Engagements & Sundowners",
      "Intimate Family Soirées"
    ],
    inclusions: [
      "Custom skin hydration and radiance booster",
      "High-Definition camera-ready makeup application",
      "Custom eye look with natural premium lashes",
      "Modern hair styling (soft waves, textured buns, or half-up hairstyles)",
      "Dupatta / drape pin-up assistance"
    ],
    preparationTips: [
      "Exfoliate lips gently the morning of the event.",
      "Arrive with clean, completely dry hair washed the previous evening."
    ],
    faqs: [
      {
        question: "How does engagement makeup differ from bridal makeup?",
        answer: "Engagement makeup typically leans slightly lighter and softer in density, highlighting fresh, radiant textures while bridal makeup incorporates heavier wear-longevity and extensive multi-layer draping."
      }
    ],
    relatedPackages: ["Signature Glam", "Essential Glam"],
    featuredOnHome: true,
  },
  {
    id: "party",
    name: "Party Makeup",
    tagline: "Chic, Modern Glamour That Turns Heads",
    shortDescription: "Statement looks tailored for cocktails, Sangeet nights, anniversaries, and red-carpet gatherings.",
    longDescription: "Whether you crave a sultry graphic smoked liner, luminous monochromatic blush, or high-impact Hollywood glam, our party makeup is formulated to withstand dancing and humidity all night.",
    heroImage: serviceImages.party,
    galleryImages: [serviceImages.party, serviceImages.custom],
    craftSteps: [
      {
        stepNumber: "01",
        title: "Energizing Skin Polish & Hydration Infusion",
        tag: "Step 01 • Instant Skin Awakening",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80",
        description: "We revive tired skin with botanical radiance water, energizing peptide moisturizer, and pore-smoothing primer so the foundation grips firmly through high-energy parties.",
        highlightPoints: [
          "Instantly eliminates dullness from long workdays or travel",
          "Velvet grip primer ensures foundation stays intact despite sweat and dancing",
          "Lightweight and non-comedogenic for sensitive or acne-prone skin"
        ],
        clientBenefit: "Fresh, supple skin ready to sustain vibrant colors and nightclub lighting."
      },
      {
        stepNumber: "02",
        title: "Sweat-Proof Transfer-Locked Complexion",
        tag: "Step 02 • High-Energy Dance Hold",
        image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1000&q=85",
        description: "Formulated with humidity-resistant micro-polymers that create a flawless, soft-matte or illuminated finish that will not separate or shine greasy when dancing under banquet spot lamps.",
        highlightPoints: [
          "Transfer-resistant against hugs, scarves, and high temperature",
          "Controls excess T-zone oil without drying out the cheeks",
          "Seamless tone match across neck and décolletage for low-cut blouses"
        ],
        clientBenefit: "Looks crisp, radiant, and freshly applied right until the last song."
      },
      {
        stepNumber: "03",
        title: "Graphic Smoked Wing & High-Shine Foil Pigments",
        tag: "Step 03 • Dramatic Party Eyes",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
        description: "Intense jewel-toned metallics, sultry diffused smoky lines, or sculpted cut-crease finishes. Accented with dramatic flutter lashes and high-def brow architecture.",
        highlightPoints: [
          "Crease-free eye base keeps glitters and metallics in place all night",
          "Waterproof liner that never smudges or bleeds onto lower lids",
          "Custom lash density chosen to complement your eye size and shape"
        ],
        clientBenefit: "Head-turning eye drama that pops brilliantly in dimly lit dance halls and photos."
      },
      {
        stepNumber: "04",
        title: "Voluminous Textured Waves or Sleek High Pony",
        tag: "Step 04 • High-Fashion Hair",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
        description: "Designer hairstyling featuring bouncy textured blowout curls, runway-inspired sleek high ponytails, or relaxed romantic textured buns that hold through vigorous movement.",
        highlightPoints: [
          "Thermal styling locks curl pattern against humid dance floors",
          "Root-lifting texture dust provides volume without crisp crunchiness",
          "Secured with discreet pins for worry-free dancing and spinning"
        ],
        clientBenefit: "Stunning hairstyle that stays full of life, shine, and bounce from dusk till dawn."
      }
    ],
    priceRange: "Bespoke Artistry",
    duration: "1.5 – 2 Hours",
    perfectFor: [
      "Sangeet & Cocktail Nights",
      "Milestone Birthdays & Anniversaries",
      "Red Carpet, Galas & High-Profile Dinners"
    ],
    inclusions: [
      "Long-wear base makeup suited to banquet lighting",
      "Expressive eye design (shimmer, smoky, or cut-crease)",
      "Lash enhancements",
      "Designer party hairstyling (glam waves, slick ponytails, or messy buns)"
    ],
    preparationTips: [
      "Share your outfit color and neckline with the artist in advance."
    ],
    faqs: [
      {
        question: "Can I bring my own reference photos?",
        answer: "Yes, we encourage reference photos! During your consultation, we will adapt your favorite looks to best suit your unique facial features."
      }
    ],
    relatedPackages: ["Essential Glam", "Signature Glam"],
    featuredOnHome: true,
  },
  {
    id: "reception",
    name: "Reception Makeup",
    tagline: "High-Glamour Evening Majesty",
    shortDescription: "Opulent, glamorous evening artistry crafted to shine under stage lights and grandeur.",
    longDescription: "Reception looks call for modern royalty. We combine sculpted facial contouring, bold lips or dramatic eyes, and high-fashion hairstyles that look breathtaking on stage and in 4K photography.",
    heroImage: serviceImages.reception,
    galleryImages: [serviceImages.reception, serviceImages.bridal],
    craftSteps: [
      {
        stepNumber: "01",
        title: "Pore-Smoothing Velvet Canvas Preparation",
        tag: "Step 01 • Evening Skin Nourishment",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85",
        description: "Evening lighting requires velvety smooth textures. We prep with botanical clarifying essence, illuminating collagen serum, and targeted pore-blurring priming so the high-glamour base lays down flawlessly.",
        highlightPoints: [
          "Eliminates fine surface texture under powerful stage spotlights",
          "Hydrates deeply so skin retains a healthy cushion glow",
          "Balances excess sebum in the T-zone for all-night freshness"
        ],
        clientBenefit: "Velvety smooth, radiant skin that looks porcelain-soft from 2 feet or 50 feet away."
      },
      {
        stepNumber: "02",
        title: "Red-Carpet High-Definition Sculpting & Strobing",
        tag: "Step 02 • Stage-Light Contouring",
        image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=85",
        description: "Multi-tonal contouring specifically calibrated for evening banquets and stage videography. We chisel cheekbones, define the jawline, and place micro-refined champagne/gold highlights that gleam under spotlights.",
        highlightPoints: [
          "Zero-Flashback micro-pigments prevent white glare in camera flashes",
          "Seamless transition across neck, collarbones, and décolletage for ballgowns",
          "Non-greasy, non-powdery luminous finish that never looks flat"
        ],
        clientBenefit: "Sculpted royal elegance that commands the room and looks breathtaking on video screens."
      },
      {
        stepNumber: "03",
        title: "Sultry Smoked Kohl & Velvet Ombré Lip Artistry",
        tag: "Step 03 • Dramatic Evening Artistry",
        image: "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=1000&q=80",
        description: "Deep dimensional smoky eyes with crushed diamond shimmer or sleek winged perfection. Paired with a precision-lined velvet ombré lip that defines lip symmetry and lasts through dinner courses.",
        highlightPoints: [
          "Double-primed lid pigment prevents creasing or smudging under stage heat",
          "Custom-placed volume lashes for maximum open-eye intensity",
          "Transfer-resistant lip seal that stays vivid during toasts and dinners"
        ],
        clientBenefit: "Hypnotic, red-carpet allure that gives you absolute confidence during your grand entry."
      },
      {
        stepNumber: "04",
        title: "Hollywood Glam Waves / Modern Chignon & Gown Setting",
        tag: "Step 04 • Regal Evening Hair",
        image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1000&q=85",
        description: "Polished Old-Hollywood sculpted waves with mirror shine, or an architectural textured low chignon. We secure tiaras, statement earrings, and assist with intricate gown zip-ins or trail draping.",
        highlightPoints: [
          "Mirror-shine anti-frizz serum keeps waves glossy and structured",
          "Crown anchoring holds tiaras and couture hair jewelry securely without pinching",
          "Assistance with heavy gown trains or evening trail pins"
        ],
        clientBenefit: "Sophisticated haute-couture silhouette that turns every head as you enter the ballroom."
      }
    ],
    priceRange: "Bespoke Artistry",
    duration: "2.5 Hours",
    perfectFor: [
      "Formal Wedding Receptions",
      "Grand Ballrooms & Stage Entries",
      "Gown & Indo-Western Coutures"
    ],
    inclusions: [
      "Ultra-luminous HD base with transfer-resistant sealing",
      "Dramatic evening eye look with high-definition glitter/shimmer",
      "Contoured lip artistry and volume lashes",
      "Evening red-carpet hair styling and accessory setting"
    ],
    preparationTips: [
      "Bring along any hair pieces, tiaras, or statement earrings you plan to wear."
    ],
    faqs: [
      {
        question: "How do you ensure the look holds up under stage lights?",
        answer: "We use professional setting powders and micro-fine fixing mists formulated specifically for professional stage and cinema lighting."
      }
    ],
    relatedPackages: ["Bridal Experience", "Signature Glam"],
    featuredOnHome: true,
  },
  {
    id: "photoshoot",
    name: "Photoshoot Makeup",
    tagline: "Flawless in Every Frame & Flash",
    shortDescription: "Specialized photographic makeup for pre-wedding shoots, fashion editorials, and personal brand portraits.",
    longDescription: "Photography makeup requires exact color balancing and non-reflective finishes. We calibrate every tone to ensure zero flashback under studio flashes and soft natural daylight.",
    heroImage: serviceImages.photoshoot,
    galleryImages: [serviceImages.photoshoot, serviceImages.custom],
    craftSteps: [
      {
        stepNumber: "01",
        title: "Optical Anti-Glare Canvas Priming",
        tag: "Step 01 • Studio Light Prep",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
        description: "Studio strobe lights reveal every micro-texture. We prep with mattifying yet hydrating pore-filling primers that equalize light dispersion across forehead, nose, and chin.",
        highlightPoints: [
          "Zero-flashback formula specifically designed for high-lumen photography strobes",
          "Controls unwanted sheen without creating flat chalkiness",
          "Retains genuine skin pores so photos look authentic without heavy airbrushing"
        ],
        clientBenefit: "Requires minimal post-production editing; raw camera previews look magazine-ready."
      },
      {
        stepNumber: "02",
        title: "True-Tone 4K Color Calibration & Camera Contouring",
        tag: "Step 02 • High-Res Lens Sculpt",
        image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85",
        description: "Camera lenses flatten 3D features by up to 20%. We strategically compensate with graduated shadow depth along cheek hollows, jawline, and nose bridge for stunning bone structure.",
        highlightPoints: [
          "Micro-milled pigments that blend invisibly under 50-megapixel macro lenses",
          "Compensates for studio lighting color temperatures (daylight 5600K or warm tungsten 3200K)",
          "Matches collarbones, shoulders, and chest seamlessly for wardrobe changes"
        ],
        clientBenefit: "Crisp, sculptural dimension from every camera angle, whether profile or straight-on."
      },
      {
        stepNumber: "03",
        title: "Clean High-Definition Eyework & Brow Feathering",
        tag: "Step 03 • Editorial Precision",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80",
        description: "Crisp micro-feathered brows shaped hair-by-hair, sharp liner with zero wobble, and individually placed lash clusters that open the iris without casting dark shadows beneath the eyes.",
        highlightPoints: [
          "Lash placement tested specifically against camera catchlights",
          "Smudge-proof and sweat-resistant under continuous high-wattage modeling lights",
          "Clean, defined lip contour that remains sharp across macro beauty portraits"
        ],
        clientBenefit: "Clean, ultra-high-definition focus that captivates on full-frame displays and print covers."
      },
      {
        stepNumber: "04",
        title: "Wind-Resistant Movement Hair Architecture",
        tag: "Step 04 • On-Set Hair Hold",
        image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80",
        description: "Styling that looks effortlessly fluid in motion yet springs back immediately into place between frames and wind-machine gusts. On-set touch-up readiness for fast outfit switches.",
        highlightPoints: [
          "Flexible memory hold — brushable texture without static or sticky stiffness",
          "High-shine serum prevents camera strobe glare on flyaways",
          "Fast-adapting structure for quick transitions from casual downs to chic updos"
        ],
        clientBenefit: "Dynamic, commercial-grade hair styling that performs effortlessly throughout all sets."
      }
    ],
    priceRange: "Bespoke Artistry",
    duration: "2 Hours (On-site assistance available)",
    perfectFor: [
      "Pre-Wedding Couple Shoots",
      "Fashion & Commercial Lookbooks",
      "Editorial Magazines & Maternity Portraits"
    ],
    inclusions: [
      "Zero-flashback matte/satin HD complexion",
      "Corrective contouring for camera lenses",
      "Lash customization and sculpted brows",
      "Hairstyling designed to resist wind and movement"
    ],
    preparationTips: [
      "Moisturize well the night before. Avoid sunscreen with high zinc titanium dioxide if flash is used."
    ],
    faqs: [
      {
        question: "Can an artist stay on set for touch-ups between outfit changes?",
        answer: "Yes, half-day and full-day shoot accompaniment options are available under our Add-On services menu."
      }
    ],
    relatedPackages: ["Signature Glam"],
    featuredOnHome: true,
  },
  {
    id: "custom",
    name: "Custom Makeup",
    tagline: "Bespoke Artistry Tailored to Your Vision",
    shortDescription: "Personalized consultations and one-of-a-kind makeup creations for unique events and distinct aesthetics.",
    longDescription: "Have a distinctive aesthetic in mind? Our custom beauty experience starts from a clean canvas to formulate custom color blends, textures, and bespoke draping catered exclusively to you.",
    heroImage: serviceImages.custom,
    galleryImages: [serviceImages.custom, serviceImages.party],
    craftSteps: [
      {
        stepNumber: "01",
        title: "Bespoke Aesthetic Discovery & Skin Assessment",
        tag: "Step 01 • Private Consultation",
        image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85",
        description: "We analyze your event theme, attire fabrics, facial features, and skin barrier history to map out an entirely bespoke transformation blueprint that reflects your personal personality.",
        highlightPoints: [
          "In-depth analysis of jewelry, outfits, and event environment",
          "Custom skincare prep curated to target any current skin sensitivity",
          "Moodboard review and digital look alignment before beginning"
        ],
        clientBenefit: "Guaranteed alignment with your creative dream — never generic or standardized."
      },
      {
        stepNumber: "02",
        title: "Custom Pigment & Finish Formulation",
        tag: "Step 02 • Artisan Blending",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
        description: "We hand-mix customized pigment blends, adjust coverage levels from sheer watercolor to full velvet coverage, and formulate custom lip and blush undertones tailored specifically to you.",
        highlightPoints: [
          "One-of-a-kind foundation shade formulated on palette for exact match",
          "Hand-mixed lip tint tailored to complement your outfit's specific shade",
          "Choice of finish: ultra-dewy glass skin, velvet cloud, or high-definition matte"
        ],
        clientBenefit: "A truly signature look that nobody else has, celebrating your unique essence."
      },
      {
        stepNumber: "03",
        title: "Artisanal Execution & Detail Sculpture",
        tag: "Step 03 • Precision Craft",
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
        description: "Every stroke is executed with master precision using luxury sanitized brushes and high-end cosmetic formulations from Dior, Chanel, Charlotte Tilbury, and NARS.",
        highlightPoints: [
          "Surgical attention to eye symmetry, contour balance, and lip definition",
          "Dermatologically certified luxury cosmetics for complete peace of mind",
          "Step-by-step mirror check-ins so you are in complete control of the evolution"
        ],
        clientBenefit: "A collaborative, enjoyable luxury session resulting in sheer beauty confidence."
      },
      {
        stepNumber: "04",
        title: "Bespoke Styling, Accessory Lock & Longevity Seal",
        tag: "Step 04 • Final Armor & Reveal",
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
        description: "Custom hair architecture crafted around your unique accessories or headpieces, followed by secure garment pinning, fixing shield spray, and a personalized touch-up kit.",
        highlightPoints: [
          "Secure anchorage for non-traditional headpieces, fascinators, or florals",
          "16-hour micro-fine fixing shield locks look against weather and celebration",
          "Custom touch-up kit prepared with your exact blended shades"
        ],
        clientBenefit: "Total freedom to celebrate and shine, knowing your bespoke look will not budge."
      }
    ],
    priceRange: "Bespoke Artistry",
    duration: "Customized",
    perfectFor: [
      "Themed Soirées & Met-Gala Inspired Parties",
      "Intimate Personal Celebrations",
      "Custom Masterclasses & 1-on-1 Lessons"
    ],
    inclusions: [
      "1-on-1 personalized creative consultation",
      "Custom pigment and finish mixing",
      "Bespoke hairstyling matching your theme",
      "Dedicated attention and touch-up support"
    ],
    preparationTips: [
      "Bring fabrics, swatches, or vision boards to your consultation."
    ],
    faqs: [
      {
        question: "How do I book a custom package?",
        answer: "Submit an enquiry via our Contact page or WhatsApp with your theme details, and we will formulate a personalized quote."
      }
    ],
    relatedPackages: ["Essential Glam", "Signature Glam"],
    featuredOnHome: true,
  }
];

export const studioPackages: PackageItem[] = [
  {
    id: "essential-glam",
    name: "Essential Glam",
    price: "Bespoke Quote",
    isPopular: false,
    tagline: "Perfect for party guests, sisters of the bride, and celebratory dinners.",
    description: "A refined beauty experience delivering a flawless, radiant complexion and polished hairstyling.",
    duration: "Approx. 90 mins",
    servicesIncluded: [
      "Luxury HD Complexion Base",
      "Soft Glam or Classic Smoky Eye Styling",
      "Natural Premium Lash Application",
      "Designer Hairstyling (Waves, Curls, or Sleek)",
      "Lip color matching and long-wear setting mist"
    ],
    recommendedAddOns: ["Premium Mink Lashes", "Hair Accessories Placement"],
    disclaimer: "Prices may vary depending on requirements, location, date and additional services."
  },
  {
    id: "signature-glam",
    name: "Signature Glam",
    price: "Bespoke Quote",
    isPopular: true,
    tagline: "Our most sought-after package for engagements, sangeet, and pre-wedding functions.",
    description: "Elevated artistry featuring dimensional sculpting, bespoke eye pigments, and full drape assistance.",
    duration: "Approx. 2 – 2.5 Hours",
    servicesIncluded: [
      "Full Lymphatic Skin Hydration & Prep",
      "Camera-Ready Waterproof HD Base",
      "Dimensional Eye Artistry with Glitters/Shimmers",
      "Sculpted Brows & High-Volume Lashes",
      "Intricate Hairstyling (Textured buns, floral braid, Hollywood waves)",
      "Saree / Dupatta Draping & Styling Assistance",
      "Mini Touch-Up Compact & Lip Sample"
    ],
    recommendedAddOns: ["Additional Bridal Styling", "Family Makeup"],
    disclaimer: "Prices may vary depending on requirements, location, date and additional services."
  },
  {
    id: "bridal-experience",
    name: "Bridal Experience",
    price: "Bespoke Quote",
    isPopular: false,
    tagline: "The pinnacle of luxury bridal artistry. Complete, stress-free wedding day pampering.",
    description: "An unhurried, royal bridal service tailored with in-depth moodboarding, bespoke skin alchemy, and heirloom jewelry draping.",
    duration: "Approx. 3.5 Hours",
    servicesIncluded: [
      "Personalized Bridal Consultation & Tone Matching",
      "Pre-Ceremony Calming Facial Massage & Skin Nourishment",
      "Ultra-Endurance 16-Hour Sweat-Proof HD Bridal Base",
      "Bespoke Eye Artistry with Tailored Double Lashes",
      "Royal Bridal Hair Architecture with Real Flower / Jewel Setting",
      "Dual Dupatta Draping with Master Safety Stitching",
      "Jewelry, Maang Tikka, Nath & Kamarbandh Placement",
      "Deluxe Bridal Emergency & Touch-Up Kit"
    ],
    recommendedAddOns: ["Pre-Event Consultation", "Touch-Up Support", "Outstation Travel"],
    disclaimer: "Prices may vary depending on requirements, location, date and additional services."
  }
];

export const studioAddOns: AddOnItem[] = [
  // HAIR
  {
    id: "addon-hair-1",
    name: "Bridal Floral Hairstyle Architecture",
    category: "HAIR",
    description: "Detailed floral setting, Gajra placement, or heritage hair jewels secured meticulously.",
    price: "Available upon request",
    startingPriceNumber: 1500
  },
  {
    id: "addon-hair-2",
    name: "Textured Hollywood Waves / Curls",
    category: "HAIR",
    description: "Ultra-glossy, long-lasting vintage or modern waves using thermal heat protectants.",
    price: "Available upon request",
    startingPriceNumber: 1200
  },
  {
    id: "addon-hair-3",
    name: "Hair Extension Setting & Styling",
    category: "HAIR",
    description: "Seamless color-blended clip-in extension installation and dimensional blending.",
    price: "Available upon request",
    startingPriceNumber: 1800
  },

  // EYES
  {
    id: "addon-eyes-1",
    name: "Luxury Silk Feather-Light Lashes",
    category: "EYES",
    description: "Multi-layered lightweight 3D silk lashes for feather-soft comfort and photogenic flutter.",
    price: "Available upon request",
    startingPriceNumber: 800
  },
  {
    id: "addon-eyes-2",
    name: "Cut-Crease & Custom Pressed Glitter Detailing",
    category: "EYES",
    description: "High-sparkle multi-dimensional cosmetic glitter or chrome pigments for stage grandeur.",
    price: "Available upon request",
    startingPriceNumber: 900
  },

  // BRIDAL
  {
    id: "addon-bridal-1",
    name: "Family / Bridesmaid Occasion Makeup",
    category: "BRIDAL",
    description: "Subtle, polished occasion makeover for mother of the bride, sister, or bridesmaids by senior associate artist.",
    price: "Inquire upon booking",
    startingPriceNumber: 3500
  },
  {
    id: "addon-bridal-2",
    name: "On-Site Ceremony Touch-Up Support",
    category: "BRIDAL",
    description: "Artist presence during pheras or stage photos for immediate lipstick, shine, and hair realignment.",
    price: "Inquire upon booking",
    startingPriceNumber: 4000
  },
  {
    id: "addon-bridal-3",
    name: "Pre-Event Look Consultation & Digital Moodboard",
    category: "BRIDAL",
    description: "One-on-one virtual or in-studio trial discussion analyzing jewelry, outfits, and lighting.",
    price: "Inquire upon booking",
    startingPriceNumber: 2000
  },

  // TRAVEL
  {
    id: "addon-travel-1",
    name: "Venue / Hotel Location Travel",
    category: "TRAVEL",
    description: "On-location makeup kit setup at your venue or hotel suite within city limits.",
    price: "Customized according to distance",
    startingPriceNumber: 1500
  },
  {
    id: "addon-travel-2",
    name: "Early Morning Appointment Surcharge (Before 6:30 AM)",
    category: "TRAVEL",
    description: "Dedicated pre-dawn arrival for morning wedding rituals and sunrise ceremonies.",
    price: "Inquire upon booking",
    startingPriceNumber: 2000
  },
  {
    id: "addon-travel-3",
    name: "Outstation & Destination Wedding Package",
    category: "TRAVEL",
    description: "Full destination bridal accompaniment anywhere in India or internationally.",
    price: "Bespoke Quote upon inquiry",
    startingPriceNumber: 15000
  }
];

export const studioVideos: VideoItem[] = [
  {
    id: "video-1",
    title: "Royal Crimson Bridal Transformation",
    category: "Bridal Transformations",
    thumbnail: videoThumbnails.reel1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    duration: "0:45"
  },
  {
    id: "video-2",
    title: "Backstage Product Preparation & Brushes Setup",
    category: "Behind the Scenes",
    thumbnail: videoThumbnails.reel2,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    duration: "0:30"
  },
  {
    id: "video-3",
    title: "Luminous Glass Skin Base Step-by-Step",
    category: "Makeup Process",
    thumbnail: videoThumbnails.reel3,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    duration: "0:55"
  },
  {
    id: "video-4",
    title: "The Emotional Mirror Reveal Moment",
    category: "Client Reveals",
    thumbnail: videoThumbnails.reel4,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    duration: "0:38"
  },
  {
    id: "video-5",
    title: "Intricate Floral Dupatta Draping & Styling",
    category: "Hair Styling",
    thumbnail: videoThumbnails.reel5,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    duration: "0:42"
  },
  {
    id: "video-6",
    title: "Smoky Gold Evening Reception Transformation",
    category: "Bridal Transformations",
    thumbnail: videoThumbnails.reel6,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    type: "mp4",
    duration: "0:50"
  }
];

export const studioClientStories: ClientStory[] = [
  {
    id: "story-classic-bride",
    clientName: "Priyanka S.",
    occasion: "Traditional Royal Wedding",
    eventDate: "Winter Celebration",
    storyTitle: "Story 01 — The Classic Bride",
    vision: "Priyanka wanted a grand, regal bridal look that honored her family's heritage handwoven crimson lehenga and antique temple jewelry, without feeling caked or artificial.",
    approach: "We focused on a velvety, second-skin base with soft antique gold sculpting across the lids, a balanced winged definition that complemented her almond eyes, and a deep terracotta-red lip custom mixed to harmonize with her lehenga undertones.",
    look: "Velvet matte complexion, subtle warmth on the cheekbones, jewel-toned eyes with individual mink lashes, and a traditional royal bridal bun secured with fresh white jasmine and heirloom pins.",
    experience: "During a 6-hour ceremony under intense stage lights, the makeup didn't budge. Priyanka felt calm, radiant, and unmistakably herself from the first portrait to the final vidai.",
    quote: "I was so worried my makeup would feel heavy, but Glamour made me look like royalty while still feeling 100% like myself. My photos turned out magical.",
    heroImage: clientStoryImages.story01.hero,
    galleryImages: clientStoryImages.story01.gallery,
    featuredOnHome: true
  },
  {
    id: "story-soft-glam",
    clientName: "Ananya M.",
    occasion: "Pastel Sundowner Engagement",
    eventDate: "Spring Celebration",
    storyTitle: "Story 02 — The Soft Glam Bride",
    vision: "Ananya dreamed of a modern, ethereal, dewy engagement look to complement her blush pink and mint organza gown in an open garden setting.",
    approach: "We used micro-hydrating serum layers to achieve glass skin, paired with rose-gold metallic shimmer, a flush of radiant cream blush on high cheekbones, and a hydrating satin nude-pink pout.",
    look: "Luminous, high-shine natural highlights, feathered airy brows, fluttery lashes, and relaxed bohemian textured waves with pearl pins.",
    experience: "Guests couldn't stop praising how fresh and glowing she looked in the golden hour sunlight and all the candid videos.",
    quote: "The glow on my skin was unbelievable. It felt so light and breathable the entire evening!",
    heroImage: clientStoryImages.story02.hero,
    galleryImages: clientStoryImages.story02.gallery,
    featuredOnHome: true
  },
  {
    id: "story-modern-reception",
    clientName: "Dr. Natasha K.",
    occasion: "Grand Evening Reception",
    eventDate: "Autumn Gala",
    storyTitle: "Story 03 — The Modern Reception Look",
    vision: "A fierce, glamorous high-fashion look to pair with Natasha's metallic emerald sculpted evening gown for a reception ballroom filled with 600+ guests.",
    approach: "We designed a sultry chocolate-espresso smoky eye with a champagne foil inner accent, contoured high cheekbones, and an understated velvety 90s nude lip.",
    look: "Ultra-matte yet luminous skin, precision lip contour, sculpted jawline enhancement, and a sleek, red-carpet Hollywood wave hairstyle.",
    experience: "The look commanded the stage effortlessly and looked stunning in both wide-angle ballroom shots and close-up slow-motion reels.",
    quote: "It was bold, classy, and sophisticated. Glamour Makeup Studio knows the exact science of evening glam.",
    heroImage: clientStoryImages.story03.hero,
    galleryImages: clientStoryImages.story03.gallery,
    featuredOnHome: true
  }
];

export const studioReviews: ReviewItem[] = [
  {
    id: "rev-1",
    clientName: "Rhea Kapoor",
    eventType: "Bridal",
    rating: 5,
    review: "Booking Shwetha Subhash and Glamour Makeup Studio was the single best decision of my wedding! Shwetha was punctual, calming, and so meticulous with every lash and drape. The look lasted through tears, dancing, and 12 hours of functions without a single smudge.",
    date: "February 2026",
    image: reviewAvatars.avatar1,
    lookPhoto: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85",
    lookTitle: "Royal Crimson Silk Heritage Bridal Artistry",
    location: "Raichur, Karnataka",
    featuredOnHome: true
  },
  {
    id: "rev-2",
    clientName: "Simran Gill",
    eventType: "Engagement",
    rating: 5,
    review: "The level of professionalism and luxury is unmatched. I loved the consultation beforehand—Shwetha really listened to what I wanted and gave me a glowy, soft aesthetic that made me feel so confident.",
    date: "January 2026",
    image: reviewAvatars.avatar2,
    lookPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85",
    lookTitle: "Soft Champagne Shimmer & Rose Blush Glam",
    location: "Raichur, Karnataka",
    featuredOnHome: true
  },
  {
    id: "rev-3",
    clientName: "Meera Sen",
    eventType: "Reception",
    rating: 5,
    review: "Shwetha transformed my reception look into pure elegance! The hairstyling and makeup were Hollywood-level perfection. The team took care of my drape so well. Truly 7+ years of genuine master artistry.",
    date: "December 2025",
    image: reviewAvatars.avatar3,
    lookPhoto: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1000&q=85",
    lookTitle: "Velvet Night Sculpted Evening Reception Glow",
    location: "Raichur, Karnataka",
    featuredOnHome: true
  },
  {
    id: "rev-4",
    clientName: "Pooja Hegde",
    eventType: "Bridal",
    rating: 5,
    review: "As a traditional bride from Raichur, I wanted my jewelry and Kanjeevaram saree to blend harmoniously with my makeup. Shwetha's skin preparation and authentic South Indian bridal detailing were extraordinary.",
    date: "November 2025",
    image: reviewAvatars.avatar1,
    lookPhoto: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85",
    lookTitle: "Kanjeevaram Gold Temple Muhurtham Look",
    location: "Raichur, Karnataka",
    featuredOnHome: true
  },
  {
    id: "rev-5",
    clientName: "Tanya Verma",
    eventType: "Party",
    rating: 5,
    review: "Got ready for my sister's sangeet and received compliments all night long! The base was completely weightless and the eye makeup was stunning under the dance floor lights.",
    date: "October 2025",
    image: reviewAvatars.avatar4,
    lookPhoto: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1000&q=85",
    lookTitle: "Sparkle Cut-Crease Sangeet Celebration Look",
    location: "Raichur, Karnataka",
    featuredOnHome: false
  },
  {
    id: "rev-6",
    clientName: "Kavita Nair",
    eventType: "Photoshoot",
    rating: 5,
    review: "We hired Shwetha for our pre-wedding photoshoot across 3 outfit changes in Karnataka. Zero flashback in the camera, crisp precision, and extremely supportive throughout the shoot.",
    date: "September 2025",
    image: reviewAvatars.avatar1,
    lookPhoto: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1000&q=85",
    lookTitle: "Editorial Golden Hour Camera-Ready Artistry",
    location: "Raichur, Karnataka",
    featuredOnHome: false
  }
];

export const studioFAQs: FAQItem[] = [
  // Booking
  {
    id: "faq-b1",
    category: "Booking",
    question: "How far in advance should I book my wedding date?",
    answer: "Due to high wedding season demand, we strongly recommend booking 3 to 6 months in advance, especially for auspicious weekend dates. Inquiries are confirmed on a first-come, first-served basis upon receipt of the booking advance."
  },
  {
    id: "faq-b2",
    category: "Booking",
    question: "How do I confirm my appointment?",
    answer: "You can submit an inquiry through our website booking form or click 'Chat on WhatsApp'. Once date availability is verified, a formal quote is shared, and paying the booking deposit secures your slot."
  },
  {
    id: "faq-b3",
    category: "Booking",
    question: "Is an advance payment required?",
    answer: "Yes, a 50% booking retainer is required to lock in the artist and team for your exclusive date and time slot."
  },

  // Bridal
  {
    id: "faq-br1",
    category: "Bridal",
    question: "Do you offer bridal makeup trials?",
    answer: "Yes! Paid bridal trials and consultation sessions are conducted at our studio, where we analyze your face symmetry, skin tone, outfits, and jewelry to finalize the vision."
  },
  {
    id: "faq-br2",
    category: "Bridal",
    question: "Can the bridal look be customized?",
    answer: "Every single look is 100% personalized. We never use a one-size-fits-all formula; we calibrate tones, intensity, and hairstyles precisely to your personal aesthetic and attire."
  },
  {
    id: "faq-br3",
    category: "Bridal",
    question: "Do you provide makeup for bridesmaids and family members?",
    answer: "Yes, our senior assistant artists accompany us to cater to mothers, sisters, and bridesmaids, ensuring the entire bridal party looks cohesive and elegant."
  },

  // Services
  {
    id: "faq-s1",
    category: "Services",
    question: "Do you provide complete hairstyling as well?",
    answer: "Yes! All our bridal, engagement, and party packages include professional hairstyling, including extension settings, thermal curls, traditional buns, and floral/jewelry placements."
  },
  {
    id: "faq-s2",
    category: "Services",
    question: "Do you travel to venues and outstation destinations?",
    answer: "Yes, we travel across India and internationally for destination weddings. Travel, lodging, and logistics are calculated depending on destination."
  },
  {
    id: "faq-s3",
    category: "Services",
    question: "Can I customize a package with specific add-ons?",
    answer: "Certainly! You can combine our base packages with any add-on services such as extra lashes, touch-up presence, or family makeovers on our Add-Ons page."
  },

  // Preparation
  {
    id: "faq-p1",
    category: "Preparation",
    question: "How should I prepare my skin before the appointment?",
    answer: "Stay thoroughly hydrated, gently moisturize, avoid starting any harsh clinical facials within 10 days of the function, and arrive with clean, product-free skin."
  },
  {
    id: "faq-p2",
    category: "Preparation",
    question: "What should I bring to the appointment?",
    answer: "Please bring your wedding jewelry (or photos), hair ornaments/gajras, and wear a front-opening button-down or robe so your completed hair and makeup remain pristine."
  },

  // Payments
  {
    id: "faq-pay1",
    category: "Payments",
    question: "What payment methods are accepted?",
    answer: "We accept UPI (Google Pay, PhonePe, Paytm), Bank IMPS/NEFT Transfers, Cash, and major Credit Cards."
  },
  {
    id: "faq-pay2",
    category: "Payments",
    question: "What is your cancellation and reschedule policy?",
    answer: "In the event of an unavoidable date change, we do our best to accommodate alternate open slots within the same calendar season. Booking retainers are non-refundable for cancellations within 30 days of the event."
  }
];

export const studioFaqs = studioFAQs;

