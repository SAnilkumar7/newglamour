/**
 * GLAMOUR MAKEUP STUDIO - UPLOADED PHOTOS REGISTRY
 * 
 * Founder: Shwetha Subhash
 * Studio: Raichur, Karnataka
 * 
 * Manual upload instructions:
 * 1. Drop your image files into the "/public/uploads/" folders:
 *    - /public/uploads/reviews/ (client makeover photos)
 *    - /public/uploads/portfolio/ (artistry gallery)
 *    - /public/uploads/artist/ (Shwetha Subhash photos)
 *    - /public/uploads/studio/ (Raichur studio photos)
 * 2. Or upload directly through the website via the "Upload & Manage Photos" tool.
 */

export interface CustomUploadedPhoto {
  id: string;
  category: 'reviews' | 'portfolio' | 'artist' | 'studio' | 'services';
  url: string;
  title: string;
  clientName?: string;
  eventType?: string;
  uploadedAt: string;
}

// Default curated photos mapped to the dedicated uploads structure with premium fallbacks
export const defaultUploadedPhotos = {
  artist: {
    portrait: "/uploads/artist/shwetha-subhash.jpg",
    portraitFallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
    action: "/uploads/artist/shwetha-working.jpg",
    actionFallback: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80",
  },
  reviews: [
    {
      id: "up-rev-1",
      clientName: "Rhea Kapoor",
      eventType: "Bridal",
      title: "Royal Crimson Temple Bridal Look",
      url: "/uploads/reviews/rhea-bridal.jpg",
      fallback: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85",
      location: "Raichur, Karnataka",
    },
    {
      id: "up-rev-2",
      clientName: "Simran Gill",
      eventType: "Engagement",
      title: "Peach Shimmer & Glass Skin Glam",
      url: "/uploads/reviews/simran-engagement.jpg",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      location: "Raichur, Karnataka",
    },
    {
      id: "up-rev-3",
      clientName: "Meera Sen",
      eventType: "Reception",
      title: "Velvet Night Sculpted Reception Glow",
      url: "/uploads/reviews/meera-reception.jpg",
      fallback: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=85",
      location: "Raichur, Karnataka",
    },
    {
      id: "up-rev-4",
      clientName: "Pooja Hegde",
      eventType: "Bridal",
      title: "Classic South Indian Muhurtham Silk Look",
      url: "/uploads/reviews/pooja-muhurtham.jpg",
      fallback: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85",
      location: "Raichur, Karnataka",
    },
    {
      id: "up-rev-5",
      clientName: "Tanya Verma",
      eventType: "Party",
      title: "Sangeet Sparkle & Romantic Curls",
      url: "/uploads/reviews/tanya-party.jpg",
      fallback: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=1200&q=85",
      location: "Raichur, Karnataka",
    },
    {
      id: "up-rev-6",
      clientName: "Kavita Nair",
      eventType: "Photoshoot",
      title: "Editorial Golden Hour Pre-Wedding Look",
      url: "/uploads/reviews/kavita-photoshoot.jpg",
      fallback: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=1200&q=85",
      location: "Raichur, Karnataka",
    }
  ],
  studio: {
    raichurAtelier: "/uploads/studio/raichur-atelier.jpg",
    raichurAtelierFallback: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85",
  }
};

const STORAGE_KEY = 'glamour_custom_uploaded_photos';

export const getStoredCustomPhotos = (): CustomUploadedPhoto[] => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};

export const saveCustomPhoto = (photo: Omit<CustomUploadedPhoto, 'id' | 'uploadedAt'>): CustomUploadedPhoto => {
  const current = getStoredCustomPhotos();
  const newPhoto: CustomUploadedPhoto = {
    ...photo,
    id: 'photo-' + Date.now().toString(),
    uploadedAt: new Date().toISOString(),
  };
  const updated = [newPhoto, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('glamour-photos-updated'));
  } catch (e) {
    console.error('Failed to save custom photo to local storage', e);
  }
  return newPhoto;
};

export const deleteCustomPhoto = (id: string): void => {
  const current = getStoredCustomPhotos();
  const updated = current.filter(p => p.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new Event('glamour-photos-updated'));
  } catch (e) {
    console.error('Failed to delete custom photo', e);
  }
};
