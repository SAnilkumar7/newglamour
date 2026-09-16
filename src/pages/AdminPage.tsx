import React, { useState } from 'react';
import { Download, Trash2, CheckCircle2, Clock, Phone, Mail, Calendar, MapPin, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { useBooking } from '../context/BookingContext';
import { AnimatedSection } from '../components/common/MotionWrapper';

export const AdminPage: React.FC = () => {
  const { enquiries, updateEnquiryStatus, clearAllEnquiries } = useBooking();
  const [filterType, setFilterType] = useState<string>('All');

  const filteredEnquiries = filterType === 'All'
    ? enquiries
    : enquiries.filter(e => e.eventType === filterType);

  const exportCSV = () => {
    if (enquiries.length === 0) return;
    const headers = ['ID', 'Date', 'Full Name', 'Phone', 'Email', 'Event Type', 'Event Date', 'Location', 'Service', 'Package', 'People', 'Status'];
    const rows = enquiries.map(e => [
      e.id,
      e.createdAt,
      `"${e.fullName}"`,
      `"${e.phone}"`,
      `"${e.email || ''}"`,
      `"${e.eventType}"`,
      `"${e.eventDate}"`,
      `"${e.eventLocation}"`,
      `"${e.service}"`,
      `"${e.package}"`,
      `"${e.numberOfPeople}"`,
      e.status
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `glamour_enquiries_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-[#FCFAF8] pb-28 min-h-screen text-[#120F0D]">
      <SEO title="Studio Administration | Glamour Makeup Studio Raichur" />

      <Breadcrumbs items={[{ label: 'Studio Portal / Enquiries' }]} />

      <AnimatedSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#EFE8DE]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#E8DFC8] rounded-full mb-2 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A050]" />
              <span className="text-[10px] uppercase tracking-widest text-[#8C6839] font-semibold">
                Studio Operations Desk • Raichur, Karnataka
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#120F0D]">
              Client Appointment Enquiries
            </h1>
            <p className="text-xs sm:text-sm text-[#76685E] mt-1">
              Review, contact, and manage client booking requests made via the website for Shwetha Subhash.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={exportCSV}
              disabled={enquiries.length === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#E8DFD5] hover:bg-[#FAF5EE] text-xs uppercase tracking-wider font-semibold text-[#120F0D] rounded-full disabled:opacity-50 transition-all cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4 text-[#8C6839]" />
              Export CSV
            </button>
            <button
              onClick={clearAllEnquiries}
              disabled={enquiries.length === 0}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs uppercase tracking-wider font-semibold rounded-full disabled:opacity-50 transition-all cursor-pointer shadow-xs"
            >
              <Trash2 className="w-4 h-4" />
              Clear All
            </button>
          </div>
        </div>

        {/* Filters and count */}
        <div className="flex flex-wrap items-center justify-between py-6 gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Bridal', 'Engagement', 'Reception', 'Party'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all cursor-pointer ${
                  filterType === type ? 'bg-[#120F0D] text-[#FAF8F5] shadow-sm' : 'bg-white text-[#54483F] border border-[#E8DFD5] hover:bg-[#FAF5EE]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <span className="text-xs text-[#76685E]">
            Showing {filteredEnquiries.length} enquiry record{filteredEnquiries.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Enquiries List */}
        {filteredEnquiries.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#EFE8DE] rounded-3xl p-8 shadow-xs">
            <Clock className="w-10 h-10 text-[#C9A050] mx-auto mb-3" />
            <h3 className="font-serif text-2xl text-[#120F0D]">
              No Enquiries Recorded Yet
            </h3>
            <p className="text-xs text-[#76685E] mt-2 max-w-md mx-auto leading-relaxed">
              When prospective clients fill out the booking form on the Contact & Booking page, their details will appear here instantly for follow-up.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredEnquiries.map((enquiry) => (
              <div
                key={enquiry.id}
                className="bg-white border border-[#EFE8DE] rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider font-semibold px-3 py-1 bg-[#FAF5EE] text-[#8C6839] rounded-full border border-[#E8DFC8]">
                      {enquiry.eventType}
                    </span>
                    <span className="text-xs text-[#76685E]">
                      Ref: {enquiry.id}
                    </span>
                    <span className={`text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5 rounded-full ${
                      enquiry.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {enquiry.status}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#120F0D]">
                    {enquiry.fullName}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#54483F]">
                    <span className="flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C9A050]" />
                      {enquiry.phone}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C9A050]" />
                      {enquiry.eventDate}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C9A050]" />
                      {enquiry.eventLocation}
                    </span>
                  </div>

                  {enquiry.additionalNotes && (
                    <p className="text-xs text-[#54483F] bg-[#FCFAF8] p-3 rounded-xl border border-[#EFE8DE] italic">
                      "{enquiry.additionalNotes}"
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => updateEnquiryStatus(enquiry.id, enquiry.status === 'confirmed' ? 'pending' : 'confirmed')}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-full border transition-all cursor-pointer ${
                      enquiry.status === 'confirmed'
                        ? 'border-green-600 text-green-700 bg-green-50'
                        : 'border-[#120F0D] text-[#120F0D] hover:bg-[#120F0D] hover:text-[#FAF8F5]'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {enquiry.status === 'confirmed' ? 'Confirmed' : 'Mark Confirmed'}
                  </button>
                  <a
                    href={`https://wa.me/${enquiry.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                      `Hello ${enquiry.fullName}! ✨ Thank you for your inquiry with Glamour Makeup Studio (Founder Shwetha Subhash, Raichur). We would love to discuss your celebration.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </AnimatedSection>
    </div>
  );
};
