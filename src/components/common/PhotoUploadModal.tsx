import React, { useState } from 'react';
import { Upload, X, Check, Image as ImageIcon, Sparkles, Folder, Eye } from 'lucide-react';
import { SafeImage } from './SafeImage';
import { saveCustomPhoto } from '../../data/uploadedPhotos';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: 'reviews' | 'portfolio' | 'artist' | 'studio';
  onPhotoUploaded?: (photoUrl: string, title: string, clientName?: string) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'reviews',
  onPhotoUploaded,
}) => {
  const [category, setCategory] = useState<'reviews' | 'portfolio' | 'artist' | 'studio'>(defaultCategory);
  const [title, setTitle] = useState('');
  const [clientName, setClientName] = useState('');
  const [eventType, setEventType] = useState('Bridal');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (JPG, PNG, WebP)');
      return;
    }
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      setPreviewUrl(result);
      if (!title) {
        // Auto-generate look title from filename
        const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
        setTitle(cleanName.charAt(0).toUpperCase() + cleanName.slice(1));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!previewUrl) return;

    saveCustomPhoto({
      category,
      url: previewUrl,
      title: title || 'Custom Makeover Look',
      clientName: clientName || undefined,
      eventType: category === 'reviews' ? eventType : undefined,
    });

    if (onPhotoUploaded) {
      onPhotoUploaded(previewUrl, title, clientName);
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
      // Reset state
      setPreviewUrl(null);
      setTitle('');
      setClientName('');
      setFileName('');
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] text-[#1F1915] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#E8DFD3] relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#FAF6F0] hover:bg-[#EAE2D7] text-[#594E44] flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-3 py-1 bg-[#EFE7DC] border border-[#DCD0C2] rounded-full w-fit mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#8C7355]" />
          <span className="text-[10px] uppercase tracking-widest text-[#755F4B] font-semibold">
            Photo Studio & Upload Manager
          </span>
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-[#1F1915] mb-2">
          Upload Custom Photographs
        </h2>
        <p className="text-xs sm:text-sm text-[#7A6D61] mb-6">
          Upload photos directly for instant live display, or drop image files into the dedicated <code className="bg-[#EFE7DC] px-1.5 py-0.5 rounded-xs text-[#594E44]">/public/uploads/</code> folder.
        </p>

        {isSuccess ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h3 className="font-serif text-2xl text-[#1F1915]">Photo Added Successfully!</h3>
            <p className="text-xs text-[#7A6D61]">
              Reflected immediately with optical fit auto-balancing.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Category Select */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#594E44] mb-2">
                Photo Target Destination
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'reviews', label: 'Client Review' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'artist', label: 'Artist Portrait' },
                  { id: 'studio', label: 'Raichur Studio' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategory(cat.id as any)}
                    className={`py-2 px-3 text-xs uppercase tracking-wider font-medium rounded-lg border transition-all text-center ${
                      category === cat.id
                        ? 'bg-[#1F1915] text-[#FAF8F5] border-[#1F1915] shadow-xs'
                        : 'bg-[#FAF6F0] text-[#594E44] border-[#E5DDD2] hover:bg-[#EAE2D7]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Drag and drop upload zone */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-[#594E44] mb-2">
                Select Photo from Device
              </label>
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-[#8C7355] bg-[#FAF3EA]'
                    : previewUrl
                    ? 'border-[#DDD0C0] bg-[#FAF6F0]'
                    : 'border-[#DDD0C0] hover:border-[#8C7355] bg-[#FAF6F0]'
                }`}
                onClick={() => document.getElementById('photo-file-input')?.click()}
              >
                <input
                  id="photo-file-input"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFile(e.target.files[0]);
                    }
                  }}
                />

                {previewUrl ? (
                  <div className="flex flex-col sm:flex-row items-center gap-5 text-left">
                    <div className="w-28 h-36 rounded-lg overflow-hidden border border-[#D5C7B5] bg-[#E5DDD2] shrink-0 shadow-sm">
                      <SafeImage
                        src={previewUrl}
                        alt="Upload preview"
                        fitMode="smart"
                        focalPoint="top"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="space-y-1 text-xs">
                      <div className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        <Check className="w-3.5 h-3.5" />
                        <span>Ready & Smart Fitted</span>
                      </div>
                      <p className="font-medium text-[#1F1915] truncate max-w-xs pt-1">{fileName}</p>
                      <p className="text-[#7A6D61] leading-relaxed">
                        Automatic optical alignment applied: balanced top-centering ensures facial details, bridal jewelry, and hair styling stay perfectly visible without awkward over-zooming.
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          document.getElementById('photo-file-input')?.click();
                        }}
                        className="text-xs text-[#8C7355] font-semibold underline hover:text-[#1F1915] pt-1 block"
                      >
                        Change Photo
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2 py-4">
                    <div className="w-12 h-12 rounded-full bg-[#EFE7DC] text-[#8C7355] flex items-center justify-center mx-auto">
                      <Upload className="w-6 h-6" />
                    </div>
                    <div className="text-xs text-[#594E44]">
                      <strong className="text-[#1F1915] font-semibold">Click to browse</strong> or drag & drop image here
                    </div>
                    <p className="text-[11px] text-[#8C7A6B]">
                      Supports JPG, PNG, WebP • Auto-fitted to prevent over-zoom
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Inputs based on category */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#594E44] mb-1">
                  Look / Photo Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Royal Crimson Bridal Glam"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DDD0C0] rounded-lg text-xs text-[#1F1915] focus:outline-none focus:border-[#8C7355]"
                />
              </div>

              {category === 'reviews' && (
                <>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#594E44] mb-1">
                      Client Name
                    </label>
                    <input
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD0C0] rounded-lg text-xs text-[#1F1915] focus:outline-none focus:border-[#8C7355]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#594E44] mb-1">
                      Celebration Occasion
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#DDD0C0] rounded-lg text-xs text-[#1F1915] focus:outline-none focus:border-[#8C7355]"
                    >
                      <option value="Bridal">Bridal Muhurtham / Wedding</option>
                      <option value="Engagement">Engagement / Roka</option>
                      <option value="Reception">Evening Reception</option>
                      <option value="Party">Party / Sangeet</option>
                      <option value="Photoshoot">Editorial / Pre-Wedding</option>
                    </select>
                  </div>
                </>
              )}
            </div>

            {/* Physical folder guidance notice */}
            <div className="p-3.5 bg-[#FAF3EA] border border-[#E8DFD3] rounded-xl flex items-start gap-2.5 text-xs text-[#7A6D61]">
              <Folder className="w-4 h-4 text-[#8C7355] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#1F1915] font-semibold block">Manual File Placement Tip:</strong>
                <span>
                  You can also drop image files straight into <code className="bg-white/80 px-1 py-0.5 rounded text-[#594E44]">public/uploads/{category}/</code> and reference them anytime.
                </span>
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs uppercase tracking-wider font-medium text-[#7A6D61] hover:text-[#1F1915] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!previewUrl}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#1F1915] hover:bg-[#3D332B] disabled:opacity-40 text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold rounded-lg transition-colors shadow-sm"
              >
                <Upload className="w-4 h-4 text-[#E5C384]" />
                <span>Save & Reflect on Website</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
