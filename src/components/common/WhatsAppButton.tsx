import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { useBooking } from '../../context/BookingContext';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: 'brand' | 'luxury' | 'outline' | 'floating' | 'text';
  label?: string;
  id?: string;
  showIcon?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message,
  className = '',
  variant = 'brand',
  label = 'Chat on WhatsApp',
  id = 'whatsapp-button',
  showIcon = true,
}) => {
  const { generateWhatsAppLink } = useBooking();
  const url = generateWhatsAppLink(message);

  if (variant === 'floating') {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Glamour Makeup Studio on WhatsApp"
        className={`flex items-center gap-2.5 px-5 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-medium rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 group ${className}`}
      >
        <WhatsAppIcon className="w-5 h-5 fill-white" />
        <span className="text-xs uppercase tracking-wider font-semibold">Chat on WhatsApp</span>
      </a>
    );
  }

  if (variant === 'luxury') {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[#8C7355] text-[#2D2825] hover:bg-[#8C7355] hover:text-[#FAF8F5] text-sm tracking-wider uppercase font-medium transition-all duration-300 ${className}`}
      >
        {showIcon && <WhatsAppIcon className="w-4 h-4" />}
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'outline') {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 px-6 py-3 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-md text-sm font-medium transition-all duration-200 ${className}`}
      >
        {showIcon && <WhatsAppIcon className="w-4 h-4" />}
        <span>{label}</span>
      </a>
    );
  }

  if (variant === 'text') {
    return (
      <a
        id={id}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 text-sm text-[#8C7355] hover:text-[#5E4D37] font-medium transition-colors ${className}`}
      >
        {showIcon && <WhatsAppIcon className="w-4 h-4 fill-[#25D366]" />}
        <span>{label}</span>
      </a>
    );
  }

  // Default 'brand'
  return (
    <a
      id={id}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-medium rounded-none tracking-wide shadow-sm hover:shadow transition-all duration-200 ${className}`}
    >
      {showIcon && <WhatsAppIcon className="w-4 h-4 fill-white" />}
      <span>{label}</span>
    </a>
  );
};
