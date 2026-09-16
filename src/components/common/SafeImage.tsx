import React, { useState, useEffect } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  wrapperClassName?: string;
  fitMode?: 'cover' | 'smart' | 'contain' | 'portrait';
  focalPoint?: 'top' | 'center' | 'bottom';
}

const DEFAULT_FALLBACK = "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80";

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK,
  className = "",
  wrapperClassName = "",
  fitMode = "smart",
  focalPoint = "top",
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Synchronize when src prop changes (e.g. newly uploaded photo)
  useEffect(() => {
    if (src) {
      setCurrentSrc(src);
      setHasError(false);
      setIsLoaded(false);
    }
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    }
  };

  // Compute optical focal point alignment to avoid cutting off foreheads, maang tikka, or bridal jewelry
  const objectPositionClass = 
    focalPoint === 'top' ? 'object-[center_18%]' :
    focalPoint === 'bottom' ? 'object-bottom' :
    'object-center';

  // Sizing and framing style
  const fitClass = 
    fitMode === 'contain' ? 'object-contain' :
    fitMode === 'portrait' ? `object-cover ${objectPositionClass}` :
    fitMode === 'smart' ? `object-cover ${objectPositionClass}` :
    `object-cover ${objectPositionClass}`;

  return (
    <div className={`relative w-full h-full overflow-hidden bg-[#F0EAE1] ${wrapperClassName}`}>
      {/* Background blur aura for smart fit mode so wide/tall photos blend naturally without severe cropping */}
      {fitMode === 'smart' && isLoaded && (
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-xl scale-110 opacity-25 pointer-events-none"
          style={{ backgroundImage: `url(${currentSrc})` }}
        />
      )}

      {!isLoaded && (
        <div className="absolute inset-0 bg-[#EAE2D7] animate-pulse" />
      )}

      <img
        {...props}
        src={currentSrc}
        alt={alt || "Glamour Makeup Studio - Shwetha Subhash, Raichur"}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        className={`relative z-10 w-full h-full ${fitClass} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading={props.loading || "lazy"}
      />
    </div>
  );
};
