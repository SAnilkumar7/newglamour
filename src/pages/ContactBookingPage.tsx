import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Sparkles, Send, ExternalLink, Heart } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { studioInfo, studioServices, studioBusinessInfo } from '../data/businessData';
import { useBooking } from '../context/BookingContext';
import { BookingEnquiry } from '../types';
import { AnimatedSection } from '../components/common/MotionWrapper';

export const ContactBookingPage: React.FC = () => {
  const {
    selectedService,
    selectedServices,
    addEnquiry
  } = useBooking();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventDate: '',
    eventType: 'Bridal',
    userWish: '',
    preferredService: selectedService || (selectedServices.length > 0 ? selectedServices[0] : 'Signature Bridal Makeup'),
  });

  const [submittedEnquiry, setSubmittedEnquiry] = useState<BookingEnquiry | null>(null);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const eventTypeOptions = [
    { id: 'Bridal', label: 'Bridal' },
    { id: 'Engagement', label: 'Engagement / Roka' },
    { id: 'Reception', label: 'Reception' },
    { id: 'Party', label: 'Party / Sangeet' },
    { id: 'Photoshoot', label: 'Photoshoot' },
    { id: 'Other', label: 'Other' },
  ];

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your name';
    if (!formData.phone.trim()) errors.phone = 'Please enter your phone or WhatsApp number';
    if (!formData.eventDate) errors.eventDate = 'Please select your celebration date';
    if (!formData.userWish.trim()) errors.userWish = 'Please tell us what you wish or what you would like to ask';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newEnquiry: BookingEnquiry = {
      id: 'ENQ-' + Date.now().toString().slice(-6),
      fullName: formData.fullName,
      phone: formData.phone,
      whatsappNumber: formData.phone,
      email: '',
      eventType: formData.eventType,
      eventDate: formData.eventDate,
      eventLocation: 'Studio / Venue as discussed',
      service: formData.preferredService || 'Custom Artistry',
      package: 'Bespoke Wish',
      selectedAddOns: [],
      numberOfPeople: 'Client Wish',
      preferredTime: 'Flexible',
      additionalNotes: formData.userWish,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    addEnquiry(newEnquiry);
    setSubmittedEnquiry(newEnquiry);
  };

  const generateWhatsAppDirectLink = () => {
    const wishText = formData.userWish ? `\n\nMy Wish & Question:\n"${formData.userWish}"` : '';
    const dateText = formData.eventDate ? ` on ${formData.eventDate}` : '';
    const nameText = formData.fullName ? `My name is ${formData.fullName}. ` : '';

    const text = encodeURIComponent(
      `Hello Glamour Makeup Studio! ✨\n${nameText}I would like to inquire about booking for a ${formData.eventType} look${dateText}.${wishText}\n\nCould you please share artist Shwetha Subhash's availability and guidance? Thank you!`
    );
    return `https://wa.me/${studioBusinessInfo.whatsapp}?text=${text}`;
  };

  return (
    <div className="bg-[#FCFAF8] pb-28 text-[#120F0D]">
      <SEO
        title="Book Appointment & Share Your Wish | Glamour Makeup Studio Raichur"
        description="Share your celebration date and tell us your dream look wish. Minimal booking form and instant WhatsApp concierge with founder Shwetha Subhash in Raichur, Karnataka."
      />

      <Breadcrumbs items={[{ label: 'Book Appointment' }]} />

      {/* Hero Header */}
      <AnimatedSection className="py-14 sm:py-20 bg-[#F9F5EF] border-b border-[#EFE8DE] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C6839] font-semibold">
              Personalized Consultation & Wish
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl text-[#120F0D] mb-3">
            Tell Us Your Wish
          </h1>
          <p className="font-serif text-base sm:text-xl text-[#54483F] italic font-light max-w-xl mx-auto leading-relaxed">
            "No rigid forms or complicated questionnaires. Simply tell us about your day and whatever you dream of for your look."
          </p>
        </div>
      </AnimatedSection>

      {/* Main Grid: Minimal Form + Contact Coordinates */}
      <AnimatedSection className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: The Minimal Form */}
          <div className="lg:col-span-7">
            {submittedEnquiry ? (
              /* Success Confirmation View */
              <div className="bg-[#FFFFFF] border-2 border-[#C9A050] p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-[#120F0D] text-[#E5C384] rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8C6839] font-semibold">
                    Enquiry Ref: {submittedEnquiry.id}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D] mt-1">
                    Thank You, {submittedEnquiry.fullName}!
                  </h2>
                  <p className="text-xs sm:text-sm text-[#54483F] max-w-md mx-auto mt-2 leading-relaxed">
                    We have received your wish for <strong>{submittedEnquiry.eventType}</strong> on <strong>{submittedEnquiry.eventDate}</strong>. Shwetha Subhash will review your celebration details.
                  </p>
                </div>

                <div className="p-5 bg-[#FAF5EE] border border-[#E8DFC8] rounded-2xl text-left text-xs text-[#54483F] space-y-3 max-w-lg mx-auto shadow-xs">
                  <div>
                    <span className="font-semibold text-[#120F0D] block mb-1">Your Look Wish:</span>
                    <p className="italic text-[#3A3027] bg-white p-3 rounded-xl border border-[#E8DFD5]">
                      "{submittedEnquiry.additionalNotes}"
                    </p>
                  </div>
                  <div className="flex justify-between border-t border-[#E8DFD5] pt-2 text-[#76685E]">
                    <span>Phone: {submittedEnquiry.phone}</span>
                    <span>Service: {submittedEnquiry.service}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2 max-w-md mx-auto">
                  <a
                    href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                      `Hello Shwetha! ✨ I submitted my wish for ${submittedEnquiry.eventType} on ${submittedEnquiry.eventDate}:\n"${submittedEnquiry.additionalNotes}"\n\nName: ${submittedEnquiry.fullName} (${submittedEnquiry.phone}). Could we discuss this?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-full shadow-md transition-all active:scale-95"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Send Wish Directly to WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedEnquiry(null);
                      setFormData({
                        fullName: '',
                        phone: '',
                        eventDate: '',
                        eventType: 'Bridal',
                        userWish: '',
                        preferredService: 'Signature Bridal Makeup',
                      });
                    }}
                    className="text-xs uppercase tracking-wider text-[#76685E] hover:text-[#120F0D] underline cursor-pointer"
                  >
                    Submit Another Wish or Question
                  </button>
                </div>
              </div>
            ) : (
              /* The Minimal Main Form */
              <div className="bg-[#FFFFFF] border border-[#EFE8DE] p-6 sm:p-10 rounded-3xl shadow-[0_4px_24px_rgba(20,16,12,0.03)] text-left">
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1.5">
                    <Heart className="w-4 h-4 text-[#C9A050]" />
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#8C6839]">
                      Simple & Unhurried
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-[#120F0D]">
                    Share What You Wish For
                  </h2>
                  <p className="text-xs sm:text-sm text-[#76685E] mt-1.5">
                    Leave us your celebration details and whatever you wish to ask. Shwetha Subhash and our studio team will get back to you with personalized guidance.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#120F0D] mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className={`w-full px-4 py-3 bg-[#FCFAF8] border text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                          formErrors.fullName ? 'border-red-500' : 'border-[#E8DFD5] focus:border-[#C9A050]'
                        }`}
                      />
                      {formErrors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#120F0D] mb-2">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 bg-[#FCFAF8] border text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                          formErrors.phone ? 'border-red-500' : 'border-[#E8DFD5] focus:border-[#C9A050]'
                        }`}
                      />
                      {formErrors.phone && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Event Date & Occasion Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#120F0D] mb-2">
                        Celebration Date *
                      </label>
                      <input
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className={`w-full px-4 py-3 bg-[#FCFAF8] border text-sm rounded-xl focus:outline-none focus:bg-white transition-colors ${
                          formErrors.eventDate ? 'border-red-500' : 'border-[#E8DFD5] focus:border-[#C9A050]'
                        }`}
                      />
                      {formErrors.eventDate && (
                        <p className="text-[11px] text-red-500 mt-1">{formErrors.eventDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#120F0D] mb-2">
                        Occasion Type
                      </label>
                      <div className="flex flex-wrap gap-1.5 pt-0.5">
                        {eventTypeOptions.map((opt) => (
                          <button
                            key={opt.id}
                            type="button"
                            onClick={() => setFormData({ ...formData, eventType: opt.id })}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                              formData.eventType === opt.id
                                ? 'bg-[#120F0D] text-[#FAF8F5]'
                                : 'bg-[#FAF5EE] text-[#54483F] hover:bg-[#F2EDE4]'
                            }`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Optional Service Choice */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#120F0D] mb-2">
                      Preferred Look / Service (Optional)
                    </label>
                    <select
                      value={formData.preferredService}
                      onChange={(e) => setFormData({ ...formData, preferredService: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FCFAF8] border border-[#E8DFD5] text-sm rounded-xl focus:outline-none focus:border-[#C9A050] focus:bg-white transition-colors cursor-pointer"
                    >
                      {studioServices.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                      <option value="Not sure yet - need artist advice">Not sure yet — I need Shwetha's advice</option>
                    </select>
                  </div>

                  {/* THE WISH TEXTAREA */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#120F0D]">
                        What Is Your Wish? What Do You Want To Ask? *
                      </label>
                      <span className="text-[11px] text-[#8C6839] font-medium">
                        Leave us your wish
                      </span>
                    </div>

                    <textarea
                      rows={5}
                      value={formData.userWish}
                      onChange={(e) => setFormData({ ...formData, userWish: e.target.value })}
                      placeholder="Describe your dream look, outfit colors, skin preferences, venue details, trial inquiries, or any heartfelt wish you have for your day..."
                      className={`w-full px-4 py-3 bg-[#FCFAF8] border text-sm rounded-xl focus:outline-none focus:bg-white transition-colors leading-relaxed ${
                        formErrors.userWish ? 'border-red-500' : 'border-[#E8DFD5] focus:border-[#C9A050]'
                      }`}
                    />
                    {formErrors.userWish && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.userWish}</p>
                    )}
                    <p className="text-[11px] text-[#76685E] mt-1.5">
                      You can mention your outfit shade (e.g., traditional maroon, peach silk, ivory gold), hairstyle preferences, or ask about early morning rituals and venue travel.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 space-y-3">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-[#120F0D] hover:bg-[#25201C] text-[#FAF8F5] text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-md transition-all cursor-pointer active:scale-98"
                    >
                      <Send className="w-4 h-4 text-[#E5C384]" />
                      <span>Submit My Wish & Inquiry</span>
                    </button>

                    <div className="relative flex items-center justify-center my-3">
                      <div className="border-t border-[#EFE8DE] w-full" />
                      <span className="bg-[#FFFFFF] px-3 text-[11px] uppercase tracking-widest text-[#8C7A6B] font-medium">
                        or instant chat
                      </span>
                      <div className="border-t border-[#EFE8DE] w-full" />
                    </div>

                    <a
                      href={generateWhatsAppDirectLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-md transition-all active:scale-98"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      <span>Chat Directly on WhatsApp with Your Wish</span>
                    </a>
                  </div>

                </form>
              </div>
            )}
          </div>

          {/* Right Column: Studio Coordinates & Fast WhatsApp Card */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Direct WhatsApp Concierge Card */}
            <div className="p-7 bg-[#120F0D] text-[#FAF8F5] rounded-3xl shadow-2xl border border-white/10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#C9A050]/15 rounded-full blur-2xl pointer-events-none" />

              <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#E5C384] block">
                Instant Response
              </span>
              <h3 className="font-serif text-2xl text-[#FAF8F5]">
                Prefer Direct WhatsApp?
              </h3>
              <p className="text-xs text-[#D5C9BD] leading-relaxed font-light">
                Chat directly with Shwetha Subhash and our studio team for immediate date availability, quick questions, and photo sharing.
              </p>

              <a
                href={`https://wa.me/${studioBusinessInfo.whatsapp}?text=${encodeURIComponent(
                  "Hello Glamour Makeup Studio! I would like to check artist Shwetha Subhash's availability for an upcoming celebration in Raichur / Karnataka."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow transition-all active:scale-98"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Direct Studio Contact Info */}
            <div className="p-7 bg-[#FFFFFF] border border-[#EFE8DE] rounded-3xl space-y-6 shadow-[0_4px_20px_rgba(20,16,12,0.03)]">
              <h3 className="font-serif text-2xl text-[#120F0D]">
                Studio Coordinates
              </h3>

              <div className="space-y-4 text-xs text-[#54483F]">
                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#C9A050] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#120F0D] block">Direct Studio Phone</span>
                    <a
                      href={`tel:${studioBusinessInfo.phone}`}
                      className="text-xs text-[#8C6839] hover:underline"
                    >
                      {studioBusinessInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#C9A050] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#120F0D] block">Email Enquiries</span>
                    <a
                      href={`mailto:${studioInfo.email}`}
                      className="text-xs text-[#8C6839] hover:underline"
                    >
                      {studioInfo.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#C9A050] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#120F0D] block">Consultation Hours</span>
                    <span>{studioBusinessInfo.workingHours}</span>
                    <span className="block text-[11px] text-[#76685E] mt-0.5">
                      (Early morning bridal calls by appointment)
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FAF5EE] flex items-center justify-center text-[#C9A050] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#120F0D] block">Studio Atelier</span>
                    <p className="leading-relaxed">
                      {studioBusinessInfo.address}, {studioBusinessInfo.city}, Karnataka
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="pt-2">
                <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#EFE8DE] bg-[#F2EDE4]">
                  <iframe
                    title="Glamour Makeup Studio Raichur Location"
                    src={studioBusinessInfo.mapsEmbedUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  href={studioBusinessInfo.mapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs uppercase tracking-wider font-semibold text-[#8C6839] hover:underline mt-3"
                >
                  <span>Open Raichur Atelier in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </AnimatedSection>
    </div>
  );
};
