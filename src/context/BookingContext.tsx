import React, { createContext, useContext, useState, useEffect } from 'react';
import { BookingEnquiry, AddOnItem } from '../types';
import { studioBusinessInfo } from '../data/businessData';

interface BookingContextType {
  selectedAddOns: AddOnItem[];
  toggleAddOn: (addon: AddOnItem) => void;
  isAddOnSelected: (addonId: string) => boolean;
  clearAddOns: () => void;
  selectedService: string;
  setSelectedService: (serviceName: string) => void;
  selectedServices: string[];
  setSelectedServices: (services: string[]) => void;
  toggleSelectedService: (serviceName: string) => void;
  isServiceSelected: (serviceName: string) => boolean;
  clearSelectedServices: () => void;
  selectedPackage: string;
  setSelectedPackage: (packageName: string) => void;
  enquiries: BookingEnquiry[];
  submitEnquiry: (data: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  addEnquiry: (enquiry: BookingEnquiry) => void;
  updateEnquiryStatus: (id: string, status: any) => void;
  clearAllEnquiries: () => void;
  generateWhatsAppLink: (customMessage?: string) => string;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY = 'glamour_makeup_enquiries_v1';

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<AddOnItem[]>([]);
  const [selectedService, setSelectedService] = useState<string>('Bridal Makeup');
  const [selectedServices, setSelectedServices] = useState<string[]>(['Bridal Makeup']);
  const [selectedPackage, setSelectedPackage] = useState<string>('Bridal Experience');
  const [enquiries, setEnquiries] = useState<BookingEnquiry[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        setEnquiries(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not read saved enquiries from localStorage', e);
    }
  }, []);

  const toggleSelectedService = (serviceName: string) => {
    setSelectedServices(prev => {
      const exists = prev.includes(serviceName);
      let updated: string[];
      if (exists) {
        updated = prev.filter(s => s !== serviceName);
      } else {
        updated = [...prev, serviceName];
      }
      if (updated.length > 0) {
        setSelectedService(updated[0]);
      }
      return updated;
    });
  };

  const isServiceSelected = (serviceName: string) => {
    return selectedServices.includes(serviceName);
  };

  const clearSelectedServices = () => {
    setSelectedServices([]);
  };

  const toggleAddOn = (addon: AddOnItem) => {
    setSelectedAddOns(prev => {
      const exists = prev.some(item => item.id === addon.id);
      if (exists) {
        return prev.filter(item => item.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const isAddOnSelected = (addonId: string) => {
    return selectedAddOns.some(item => item.id === addonId);
  };

  const clearAddOns = () => {
    setSelectedAddOns([]);
  };

  const submitEnquiry = async (data: Omit<BookingEnquiry, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    const newEnquiry: BookingEnquiry = {
      ...data,
      id: `ENQ-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'New',
    };

    const updated = [newEnquiry, ...enquiries];
    setEnquiries(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save enquiry to localStorage', e);
    }
    return true;
  };

  const addEnquiry = (enquiry: BookingEnquiry) => {
    const updated = [enquiry, ...enquiries];
    setEnquiries(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not save enquiry to localStorage', e);
    }
  };

  const updateEnquiryStatus = (id: string, status: any) => {
    const updated = enquiries.map(e => e.id === id ? { ...e, status } : e);
    setEnquiries(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.warn('Could not update enquiry status', e);
    }
  };

  const clearAllEnquiries = () => {
    setEnquiries([]);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear enquiries', e);
    }
  };

  const generateWhatsAppLink = (customMessage?: string): string => {
    const phone = studioBusinessInfo.whatsapp;
    if (customMessage && customMessage.trim().length > 0) {
      return `https://wa.me/${phone}?text=${encodeURIComponent(customMessage)}`;
    }

    let defaultMsg = selectedServices.length > 0
      ? `Hi Glamour Makeup Studio, I'm interested in booking your service(s): ${selectedServices.join(', ')}.`
      : `Hi Glamour Makeup Studio, I'm interested in your ${selectedService || 'Bridal Makeup'} services.`;
    if (selectedPackage) {
      defaultMsg += ` Specifically the ${selectedPackage} package.`;
    }
    if (selectedAddOns.length > 0) {
      defaultMsg += ` Add-ons I'm interested in: ${selectedAddOns.map(a => a.name).join(', ')}.`;
    }
    defaultMsg += ` I'd like to check availability and book an appointment.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(defaultMsg)}`;
  };

  return (
    <BookingContext.Provider
      value={{
        selectedAddOns,
        toggleAddOn,
        isAddOnSelected,
        clearAddOns,
        selectedService,
        setSelectedService,
        selectedServices,
        setSelectedServices,
        toggleSelectedService,
        isServiceSelected,
        clearSelectedServices,
        selectedPackage,
        setSelectedPackage,
        enquiries,
        submitEnquiry,
        addEnquiry,
        updateEnquiryStatus,
        clearAllEnquiries,
        generateWhatsAppLink
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
