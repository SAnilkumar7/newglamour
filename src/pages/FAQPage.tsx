import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Sparkles, MessageSquare } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioFaqs } from '../data/businessData';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { AnimatedSection } from '../components/common/MotionWrapper';

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(studioFaqs[0]?.id || null);

  const categories = ['All', 'Booking', 'Bridal', 'Services', 'Preparation', 'Payments'];

  const filteredFaqs = studioFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#FCFAF8] pb-28 text-[#120F0D]">
      <SEO
        title="Frequently Asked Questions | Glamour Makeup Studio Raichur"
        description="Find answers regarding bridal trials, booking policies, travel charges, makeup longevity, and skincare prep by Shwetha Subhash in Raichur, Karnataka."
      />

      <Breadcrumbs items={[{ label: 'FAQ' }]} />

      {/* Hero */}
      <AnimatedSection className="py-16 lg:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Help & Clarification
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] mb-4">
            Frequently Asked Questions
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#54483F] italic font-light max-w-2xl mx-auto leading-relaxed">
            "Everything you need to know about our booking process, bridal artistry, products, and wedding day logistics in Raichur, Karnataka."
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-[#8C6839] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. trial, deposit, travel, products)..."
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-[#E8DFD5] text-sm text-[#120F0D] placeholder-[#76685E] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#C9A050]/40 shadow-xs"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Categories & Accordion */}
      <AnimatedSection className="py-14 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#120F0D] text-[#FAF8F5] shadow-md'
                  : 'bg-white text-[#54483F] border border-[#E8DFD5] hover:bg-[#F2EDE4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-[#F9F5EF] border border-[#EFE8DE] rounded-3xl p-8">
            <p className="font-serif text-xl text-[#54483F]">
              No questions found matching "{searchQuery}".
            </p>
            <p className="text-xs text-[#76685E] mt-2">
              Feel free to message Shwetha Subhash on WhatsApp directly for personal assistance!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FFFFFF] border border-[#EFE8DE] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between text-base sm:text-lg font-serif text-[#120F0D] font-medium hover:text-[#8C6839] transition-colors cursor-pointer"
                  >
                    <span className="pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#C9A050] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#76685E] shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs sm:text-sm text-[#54483F] leading-relaxed border-t border-[#F2EDE4] pt-4 text-left">
                      <p>{faq.answer}</p>
                      <div className="mt-3">
                        <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Ask on WhatsApp prompt */}
        <div className="mt-16 p-8 sm:p-10 bg-[#120F0D] text-[#FAF8F5] rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#C9A050]/15 rounded-full blur-2xl pointer-events-none" />

          <MessageSquare className="w-8 h-8 text-[#E5C384] mx-auto mb-3" />
          <h3 className="font-serif text-2xl sm:text-3xl mb-2 text-[#FAF8F5]">
            Still Have a Question?
          </h3>
          <p className="text-xs sm:text-sm text-[#D5C9BD] max-w-md mx-auto mb-6 font-light">
            We are always happy to answer specific queries regarding your wedding date, venue travel, or look inspirations.
          </p>
          <WhatsAppButton
            variant="brand"
            label="Chat Directly on WhatsApp"
            className="!py-3.5 !px-8 text-xs uppercase tracking-widest !rounded-full active:scale-95"
            message="Hi Glamour Makeup Studio, I have a question not listed on your FAQ page. Could you help me?"
          />
        </div>

      </AnimatedSection>
    </div>
  );
};
