import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, Trash2, Users, UserCheck, ShieldCheck, Award } from 'lucide-react';

function ImpactDetailWalkForPlastic() {
  const stats = [
    { label: 'Plastic Collected', value: '12 kg', icon: Trash2, color: 'text-emerald-500 bg-emerald-50' },
    { label: 'Beneficiaries', value: '220', icon: Users, color: 'text-blue-500 bg-blue-50' },
    { label: 'Leos Participated', value: '4', icon: UserCheck, color: 'text-amber-500 bg-amber-50' },
    { label: 'Volunteers', value: '35', icon: ShieldCheck, color: 'text-indigo-500 bg-indigo-50' },
    { label: 'Total Leo Hours', value: '10 Hours', icon: Clock, color: 'text-rose-500 bg-rose-50' },
    { label: 'Funds Utilized', value: '₹400', icon: Award, color: 'text-purple-500 bg-purple-50' },
  ];

  const images = [
    { url: '/images/walk-for-plastic-detail-1.png', caption: 'Clean environment drive at park grounds' },
    { url: '/images/walk-for-plastic-detail-2.png', caption: 'Active waste pick up and segregation' },
    { url: '/images/walk-for-plastic-detail-3.jpg', caption: 'Collaborative team effort near the park area' },
    { url: '/images/walk-for-plastic-1.jpg', caption: 'Group photo of our volunteers and collected waste' },
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
              <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Environment Focus</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">
                WALK FOR PLASTIC – CLEAN ENVIRONMENT DRIVE 2025
              </h1>
              <p className="text-slate-350 italic mt-3 text-lg font-medium">
                “Step by step, towards a plastic-free planet”
              </p>
              
              <div className="flex flex-wrap gap-4 items-center text-xs text-slate-300 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-leoGold" />
                  <span>Date: 06/07/2025</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-leoTeal" />
                  <span>Venue: Tower Park, Anna Nagar, Chennai</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body content */}
          <div className="p-8 sm:p-12">
            
            {/* Overview */}
            <div className="prose max-w-none text-slate-650 mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Project Overview</h3>
              <p className="leading-relaxed">
                On 6th July 2025, from 7:30 AM to 10:00 AM, the Leo Club of Hopeville held the “Walk for Plastic” at Anna Nagar Tower Park. 
                As part of the LEO Global Environment Focus, volunteers collected 12 kg of plastic waste and raised awareness on plastic pollution. 
                The initiative promoted a cleaner, greener World through united community action.
              </p>
            </div>

            {/* Metrics Dashboard */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Project Metrics & Participation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="border border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center bg-slate-50/50">
                      <div className={`p-3 rounded-full mb-3 ${stat.color}`}>
                        <Icon size={20} />
                      </div>
                      <span className="text-2xl font-black text-slate-800 leading-none mb-1">{stat.value}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">{stat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Activity Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {images.map((img, index) => (
                  <div key={index} className="group rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50 relative h-64">
                    <img 
                      src={img.url} 
                      alt={img.caption} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-xs text-white font-medium">{img.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* A Note of Gratitude */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 mb-12">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                A Note of Gratitude
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                We extend our heartfelt thanks to every Leo member, volunteer, municipal worker, and community participant 
                whose enthusiasm and dedication made this drive a success. Every step taken and every piece of plastic 
                collected was a powerful statement for change.
              </p>
            </div>

            {/* Signatures / Endorsements */}
            <div className="border-t border-slate-100 pt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Attestation & Leadership</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Leo Sharan Kumar P B</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Club President</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Lion T. Swaminathan</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Club Advisor</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Leo Shrenica Chawda A</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Environment Chairperson</span>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-slate-100/50 flex justify-between text-[11px] text-slate-400">
                <span>Reported by: Leo Shrenica Chawda A</span>
                <span>LEO CLUB OF HOPEVILLE</span>
              </div>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}

export default ImpactDetailWalkForPlastic;
