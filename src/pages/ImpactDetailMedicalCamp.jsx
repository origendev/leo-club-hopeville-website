import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, Heart, Users, UserCheck, ShieldCheck, Award, Stethoscope, Eye, X } from 'lucide-react';

function ImpactDetailMedicalCamp() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const stats = [
    { label: 'Total Beneficiaries', value: '135 elders', icon: Users, color: 'text-rose-500 bg-rose-50' },
    { label: 'Lions Participated', value: '4', icon: ShieldCheck, color: 'text-emerald-500 bg-emerald-50' },
    { label: 'Leos Participated', value: '4', icon: UserCheck, color: 'text-amber-500 bg-amber-50' },
    { label: 'Leo Hours', value: '40 Hours', icon: Clock, color: 'text-blue-500 bg-blue-50' },
    { label: 'Total Fund Spent', value: 'Rs. 1,500', icon: Award, color: 'text-purple-500 bg-purple-50' },
  ];

  const services = [
    {
      institution: 'MGM Hospital',
      icon: Stethoscope,
      color: 'text-rose-500 bg-rose-50 border-rose-100',
      checks: ['General Health Check-up', 'Diabetes Screening'],
    },
    {
      institution: "Dr. Agarwal’s Eye Hospital",
      icon: Eye,
      color: 'text-blue-500 bg-blue-50 border-blue-100',
      checks: ['Comprehensive Eye Check-up'],
    },
    {
      institution: 'Clove Dental',
      icon: Heart,
      color: 'text-emerald-500 bg-emerald-50 border-emerald-100',
      checks: ['Dental Examination', 'Oral Hygiene Awareness'],
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/impact-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-leoNavy hover:text-leoGold transition-colors mb-8 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Impact Stories
        </Link>

        {/* Article Container */}
        <article className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          
          {/* Header section */}
          <div className="bg-leoNavy text-white p-8 sm:p-12 relative">
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Healthcare Focus</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">
                Free Mega Medical Camp - “Serving Kindness”
              </h1>
              <p className="text-slate-350 italic mt-3 text-lg font-medium">
                “Serving Kindness”
              </p>
              
              <div className="flex flex-wrap gap-4 items-center text-xs text-slate-300 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-leoGold" />
                  <span>Date: 05/07/2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-leoTeal" />
                  <span>Venue: Akshaya Trust, Velappanchavadi, Chennai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Banner Image */}
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="relative h-64 sm:h-96 w-full overflow-hidden bg-slate-100 cursor-pointer group border-b border-slate-100"
          >
            <img 
              src="/images/medical-camp-banner.png" 
              alt="Free Mega Medical Camp Banner - Serving Kindness" 
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          </div>

          {/* Body content */}
          <div className="p-8 sm:p-12">
            
            {/* Overview */}
            <div className="prose max-w-none text-slate-650 mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Event Overview</h3>
              <p className="leading-relaxed">
                On 5th July 2025, the Leo Club of Hopeville organized a Free Mega Medical Camp at Akshaya Trust, Velappanchavadi, Chennai. 
                This initiative aimed to deliver essential healthcare services and promote awareness about general health and hygiene among the elderly residents.
              </p>
            </div>

            {/* Medical Services Provided */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Medical Services Provided</h3>
              <p className="text-sm text-slate-500 mb-6">
                We partnered with renowned healthcare institutions to provide comprehensive consultations and screenings:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((svc, i) => {
                  const Icon = svc.icon;
                  return (
                    <div key={i} className={`border rounded-2xl p-5 bg-white shadow-sm flex flex-col items-start ${svc.color}`}>
                      <div className="p-2.5 rounded-xl bg-white shadow-sm border border-inherit mb-4">
                        <Icon size={20} />
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-2">{svc.institution}</h4>
                      <ul className="text-xs text-slate-650 space-y-1.5 list-disc list-inside">
                        {svc.checks.map((check, idx) => (
                          <li key={idx}>{check}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Camp Metrics & Participation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="border border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center bg-slate-50/50">
                      <div className={`p-2.5 rounded-full mb-2 ${stat.color}`}>
                        <Icon size={18} />
                      </div>
                      <span className="text-xl font-black text-slate-800 leading-none mb-1">{stat.value}</span>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 text-right">
                *Total Fund Spent: Rs. 1,500 (Approx. $17.65)
              </p>
            </div>

            {/* Acknowledgements */}
            <div className="mb-12 border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Acknowledgements</h3>
              <p className="text-sm text-slate-650 mb-4">
                We extend our heartfelt gratitude to the following leaders and advisors for their encouragement, guidance, and support:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 text-xs">
                  <span className="font-bold text-slate-800 block text-sm mb-0.5">Lion Dr. G. Chandrasekar</span>
                  <span className="text-leoGold font-bold uppercase tracking-wider text-[10px] block mb-1">District Governor</span>
                  <span className="text-slate-500">For his encouragement and leadership.</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 text-xs">
                  <span className="font-bold text-slate-800 block text-sm mb-0.5">Lion Manoj Seeralan</span>
                  <span className="text-leoTeal font-bold uppercase tracking-wider text-[10px] block mb-1">Leo Lion Advisory Panelist</span>
                  <span className="text-slate-500">Whose presence inspired our team and beneficiaries alike.</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 text-xs">
                  <span className="font-bold text-slate-800 block text-sm mb-0.5">Lion R. Vasantha Kumar</span>
                  <span className="text-indigo-500 font-bold uppercase tracking-wider text-[10px] block mb-1">Cabinet Treasurer</span>
                  <span className="text-slate-500">For his valuable guidance.</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 text-xs">
                  <span className="font-bold text-slate-800 block text-sm mb-0.5">Lion T. Swaminathan</span>
                  <span className="text-purple-500 font-bold uppercase tracking-wider text-[10px] block mb-1">Club Advisor</span>
                  <span className="text-slate-500">For his unwavering support and guidance.</span>
                </div>
                <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 text-xs md:col-span-2">
                  <span className="font-bold text-slate-800 block text-sm mb-0.5">Leo Sharan Kumar P B</span>
                  <span className="text-rose-500 font-bold uppercase tracking-wider text-[10px] block mb-1">Club President</span>
                  <span className="text-slate-500">For his exceptional leadership and support in making this event a success.</span>
                </div>
              </div>
              <p className="text-xs text-slate-550 mt-4 leading-relaxed">
                A special thank you to all the participants, and the dedicated individuals who worked tirelessly behind the scenes. 
                Your efforts and contributions ensured the smooth execution and success of this medical camp.
              </p>
            </div>

            {/* A Note of Gratitude */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 mb-12">
              <h4 className="font-bold text-slate-800 mb-2">❤ A Note of Gratitude</h4>
              <p className="text-sm text-slate-650 leading-relaxed">
                This medical camp reflects our commitment to “Serving Kindness” through care, compassion, and collaboration. 
                Together, we made a meaningful difference in the lives of 135 elders.
              </p>
            </div>

            {/* Signatures / Endorsements */}
            <div className="border-t border-slate-100 pt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Warm Regards</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Leo Kartigayani K</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Vision Chairperson</span>
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider">Leo Club of Hopeville</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Leo Lakshita M S</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider block">Diabetes Chairperson</span>
                  <span className="text-[10px] text-slate-400 font-bold tracking-wider">Leo Club of Hopeville</span>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100/50 flex justify-between text-[11px] text-slate-400">
                <span>Reported by: Leo Kartigayani K, Leo Lakshita M S</span>
                <span>LEO CLUB OF HOPEVILLE</span>
              </div>
            </div>

          </div>
        </article>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out animate-fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button 
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-leoGold transition-colors p-2 rounded-full bg-white/10 hover:bg-white/20"
            aria-label="Close image zoom"
          >
            <X size={24} />
          </button>
          <img
            src="/images/medical-camp-banner.png"
            alt="Free Mega Medical Camp Banner"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      </div>
    </div>
  );
}

export default ImpactDetailMedicalCamp;
