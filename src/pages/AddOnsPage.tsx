import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Check, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioAddOns } from '../data/businessData';
import { useBooking } from '../context/BookingContext';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem
} from '../components/common/MotionWrapper';

export const AddOnsPage: React.FC = () => {
  const { selectedAddOns, toggleAddOn, isAddOnSelected, clearAddOns } = useBooking();
  const [activeCategory, setActiveCategory] = useState<'ALL' | 'HAIR' | 'EYES' | 'BRIDAL' | 'TRAVEL'>('ALL');

  const categories = [
    { id: 'ALL', label: 'All Add-Ons' },
    { id: 'HAIR', label: 'Hair Enhancements' },
    { id: 'EYES', label: 'Lashes & Eyes' },
    { id: 'BRIDAL', label: 'Bridal & Party Services' },
    { id: 'TRAVEL', label: 'Travel & Outstation' },
  ];

  const filtered = activeCategory === 'ALL'
    ? studioAddOns
    : studioAddOns.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#FCFAF8] pb-32 text-[#120F0D]">
      <SEO
        title="Add-On Services Menu | Glamour Makeup Studio Raichur"
        description="Enhance your makeup experience with hair extensions, luxury lashes, bridesmaid packages, touch-up assistance, and destination travel by Shwetha Subhash."
      />

      <Breadcrumbs items={[{ label: 'Add-On Services' }]} />

      {/* Hero */}
      <AnimatedSection className="py-16 lg:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Bespoke Enhancements
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#120F0D] mb-4">
            Complete Your Glam Experience
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto leading-relaxed">
            "Enhance your makeup appointment with additional beauty services tailored to your ceremony and style in Raichur, Karnataka."
          </p>
        </div>
      </AnimatedSection>

      {/* Category Tabs & Add-ons Grid */}
      <AnimatedSection className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md ring-2 ring-[#C9A050]/30'
                  : 'bg-white text-[#54483F] border border-[#E8DFD5] hover:bg-[#F2EDE4]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <StaggerContainer staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((addon) => {
            const selected = isAddOnSelected(addon.id);
            return (
              <StaggerItem key={addon.id}>
                <div
                  className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full text-left ${
                    selected
                      ? 'bg-[#FAF5EE] border-2 border-[#C9A050] shadow-lg ring-1 ring-[#C9A050]'
                      : 'bg-white border-[#EFE8DE] hover:border-[#C9A050]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(20,16,12,0.06)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold px-2.5 py-1 bg-[#FAF5EE] border border-[#E8DFC8] rounded-full">
                        {addon.category}
                      </span>
                      <span className="text-xs font-serif font-semibold text-[#120F0D]">
                        {addon.price}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-[#120F0D] mb-2 font-medium">
                      {addon.name}
                    </h3>

                    <p className="text-xs text-[#54483F] leading-relaxed mb-6">
                      {addon.description}
                    </p>
                  </div>

                  <button
                    onClick={() => toggleAddOn(addon)}
                    id={`toggle-addon-${addon.id}`}
                    className={`w-full py-3 px-4 rounded-full text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95 ${
                      selected
                        ? 'bg-[#120F0D] text-[#E5C384] hover:bg-[#25201C] shadow-md'
                        : 'border border-[#120F0D] text-[#120F0D] hover:bg-[#120F0D] hover:text-[#FAF8F5]'
                    }`}
                  >
                    {selected ? (
                      <>
                        <Check className="w-4 h-4 text-[#E5C384]" />
                        Added to Enquiry
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        Add to Enquiry
                      </>
                    )}
                  </button>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Selected Add-ons Sticky Action Drawer */}
        {selectedAddOns.length > 0 && (
          <div className="fixed bottom-20 md:bottom-6 left-4 right-4 max-w-4xl mx-auto z-40 bg-[#120F0D] text-[#FAF8F5] p-4 sm:p-5 rounded-3xl shadow-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E5C384] text-[#120F0D] flex items-center justify-center shrink-0 shadow-md">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-base text-[#FAF8F5]">
                    {selectedAddOns.length} Add-On{selectedAddOns.length > 1 ? 's' : ''} Selected
                  </span>
                  <button
                    onClick={clearAddOns}
                    className="text-[11px] text-[#E5C384] hover:underline ml-2 cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
                <p className="text-[11px] text-[#D5C9BD] line-clamp-1">
                  {selectedAddOns.map(a => a.name).join(', ')}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FAF8F5] hover:bg-white text-[#120F0D] font-semibold text-xs uppercase tracking-widest rounded-full transition-all active:scale-95 shadow-md"
              >
                Proceed to Booking
                <ArrowRight className="w-3.5 h-3.5 text-[#8C6839]" />
              </Link>
              <WhatsAppButton
                variant="brand"
                label="WhatsApp"
                className="!py-3 !px-4 text-xs shrink-0 !rounded-full"
              />
            </div>
          </div>
        )}

      </AnimatedSection>
    </div>
  );
};
