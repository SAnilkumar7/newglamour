import React from 'react';
import { X, Film } from 'lucide-react';
import { VideoItem } from '../../types';

interface VideoModalProps {
  isOpen: boolean;
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, video, onClose }) => {
  if (!isOpen || !video) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-[#181310] border border-[#382C22] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#2C231C]">
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#C4A482]" />
            <span className="text-xs uppercase tracking-widest text-[#C4A482] font-medium">
              {video.category}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#E8DFD5] hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
            <iframe
              src={video.videoUrl}
              title={video.title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={video.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Caption */}
        <div className="p-5">
          <h3 className="font-serif text-lg text-[#FAF8F5] tracking-wide">
            {video.title}
          </h3>
          <p className="text-xs text-[#9C8C7E] mt-1">
            Category: {video.category} • Professional high-definition showcase from Glamour Makeup Studio
          </p>
        </div>
      </div>
    </div>
  );
};
