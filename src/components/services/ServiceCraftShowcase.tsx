import React, { useState } from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight, Eye } from 'lucide-react';
import { ServiceItem } from '../../types';
import { Lightbox } from '../common/Lightbox';

interface ServiceCraftShowcaseProps {
  service: ServiceItem;
  id?: string;
  isCompact?: boolean;
}

export const ServiceCraftShowcase: React.FC<ServiceCraftShowcaseProps> = ({
  service,
  id = 'service-craft-showcase',
  isCompact = false,
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const craftSteps = service.craftSteps || [];

  if (craftSteps.length === 0) {
    return null;
  }

  const currentStep = craftSteps[activeStepIndex] || craftSteps[0];

  const lightboxItems = craftSteps.map((step) => ({
    id: `${service.id}-${step.stepNumber}`,
    title: step.title,
    category: service.name as any,
    image: step.image,
    description: step.description,
  }));

  const openLightboxForStep = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section id={id} className="py-12 sm:py-16 bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#FAF8F5] border-y border-[#EAE2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAE0D3] border border-[#D9CBB9] text-[#785E3E] text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#B3874B]" />
            <span>Behind The Craft & Effort</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181411] tracking-tight mb-3.5">
            How Your {service.name} Is Done
          </h2>
          <p className="text-sm sm:text-base text-[#615449] font-light leading-relaxed">
            Real in-action photographic proof of our high-standard techniques, multi-layer skin preparation, and precision artistry designed so you can feel 100% confident and relaxed on your big day.
          </p>
        </div>

        {/* Step Tabs Navigation */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {craftSteps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 shrink-0 ${
                  isActive
                    ? 'bg-[#181411] text-[#FAF8F5] shadow-md scale-[1.02]'
                    : 'bg-[#FFFFFF] text-[#615449] border border-[#E2D8CC] hover:border-[#181411] hover:text-[#181411]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-[#B3874B] text-white' : 'bg-[#F2ECE3] text-[#785E3E]'
                }`}>
                  {step.stepNumber}
                </span>
                <span className="truncate max-w-[150px] sm:max-w-none">{step.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Display Card */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E8DFD5] shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Real Work Photos in High Resolution */}
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[340px] sm:min-h-[420px] bg-[#211A15] overflow-hidden group">
              <img
                src={currentStep.image}
                alt={`${service.name} - ${currentStep.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Top Left Step Badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#FAF8F5] text-xs uppercase tracking-widest font-semibold border border-white/20">
                  {currentStep.tag}
                </span>
              </div>

              {/* Lightbox Trigger Button */}
              <button
                type="button"
                onClick={() => openLightboxForStep(activeStepIndex)}
                className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-[#181411] text-xs uppercase tracking-wider font-semibold shadow-lg flex items-center gap-1.5 transition-all"
              >
                <Eye className="w-3.5 h-3.5 text-[#B3874B]" />
                <span>Zoom Photo</span>
              </button>

              {/* Bottom Photo Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#E5C384]" />
                  <span className="text-[11px] uppercase tracking-widest font-medium text-[#E5C384]">
                    Real Artistry In Action
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-snug line-clamp-2">
                  {currentStep.title}
                </p>
              </div>
            </div>

            {/* Right: The Effort Breakdown & Key Points */}
            <div className="lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D46]">
                    Phase {currentStep.stepNumber} Artistry
                  </span>
                  <span className="text-xs text-[#9E8B79]">•</span>
                  <span className="text-xs text-[#7A695B] font-medium">Bespoke Effort</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#181411] leading-tight mb-3">
                  {currentStep.title}
                </h3>

                <p className="text-sm text-[#5A4E43] leading-relaxed mb-6">
                  {currentStep.description}
                </p>

                {/* Highlight Points — Why Customer Should Agree */}
                <div className="bg-[#FAF8F5] rounded-xl border border-[#EAE2D7] p-4 sm:p-5 space-y-3 mb-6">
                  <div className="text-xs uppercase tracking-widest font-semibold text-[#181411] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#B3874B]" />
                    <span>Why You Will Love This Technique:</span>
                  </div>
                  <ul className="space-y-2.5">
                    {currentStep.highlightPoints.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#44382F]">
                        <span className="w-4 h-4 rounded-full bg-[#EAE0D3] text-[#785E3E] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="leading-relaxed font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Guaranteed Client Benefit */}
                <div className="p-3.5 sm:p-4 rounded-lg bg-[#F3ECE1] border border-[#DECFC0] flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#8C6D46] shrink-0" />
                  <div className="text-xs text-[#44382F] leading-snug">
                    <span className="font-semibold text-[#181411] block mb-0.5">Artistry Guarantee:</span>
                    {currentStep.clientBenefit}
                  </div>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-4 border-t border-[#F0EAE1] flex items-center justify-between">
                <span className="text-xs text-[#7A695B]">
                  Step {activeStepIndex + 1} of {craftSteps.length}: {currentStep.title}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : craftSteps.length - 1))}
                    className="p-2.5 rounded-full border border-[#D9CEBF] text-[#181411] hover:bg-[#FAF8F5] text-xs font-semibold transition-colors"
                    aria-label="Previous Step"
                  >
                    ←
                  </button>
                  <span className="text-xs font-semibold text-[#8C6D46]">
                    {activeStepIndex + 1} / {craftSteps.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => (prev < craftSteps.length - 1 ? prev + 1 : 0))}
                    className="p-2.5 rounded-full border border-[#D9CEBF] text-[#181411] hover:bg-[#FAF8F5] text-xs font-semibold transition-colors"
                    aria-label="Next Step"
                  >
                    →
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Multi-Photo Grid of All Steps */}
        {!isCompact && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6D46] block mb-1">
                  Step-by-Step Overview
                </span>
                <h3 className="font-serif text-2xl text-[#181411]">
                  All {craftSteps.length} Phases of Your Transformation
                </h3>
              </div>
              <span className="text-xs text-[#7A695B] font-medium hidden sm:inline">
                Tap any photo to expand in HD
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {craftSteps.map((step, idx) => (
                <div
                  key={step.stepNumber}
                  onClick={() => openLightboxForStep(idx)}
                  className="group bg-[#FFFFFF] rounded-xl border border-[#E8DFD5] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[4/3] bg-[#211A15] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-xs font-semibold text-[#181411] uppercase tracking-wider">
                        View Photo
                      </span>
                    </div>
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#181411]/80 backdrop-blur-sm text-[#FAF8F5] text-[10px] font-bold uppercase tracking-wider">
                      Step {step.stepNumber}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <h4 className="font-serif text-base text-[#181411] group-hover:text-[#8C6D46] transition-colors leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#6B5E52] line-clamp-2 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 border-t border-[#F0EAE1]">
                      <span className="text-[11px] font-medium text-[#8C6D46] flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        <span className="truncate">{step.highlightPoints[0]}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Lightbox for Zooming Photos */}
      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxItems.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length)}
      />
    </section>
  );
};
