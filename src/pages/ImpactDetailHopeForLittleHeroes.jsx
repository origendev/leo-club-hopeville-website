import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock, Heart, Users, UserCheck, ShieldCheck, Award } from 'lucide-react';

function ImpactDetailHopeForLittleHeroes() {
  const stats = [
    { label: 'Beneficiaries', value: '100', icon: Users, color: 'text-rose-500 bg-rose-50' },
    { label: 'Leos Participated', value: '13', icon: UserCheck, color: 'text-amber-500 bg-amber-50' },
    { label: 'Total Service Hours', value: '26 Hours', icon: Clock, color: 'text-blue-500 bg-blue-50' },
    { label: 'Total Funds Spent', value: '₹3,000', icon: Award, color: 'text-emerald-500 bg-emerald-50' },
  ];

  const images = [
    { url: '/images/hope-little-heroes-detail-1.jpg', caption: 'Leos interacting and playing games with the kids' },
    { url: '/images/hope-little-heroes-detail-2.png', caption: 'Children engaged in coloring activities' },
    { url: '/images/hope-little-heroes-detail-3.png', caption: 'Leos distributing crayons and coloring books' },
    { url: '/images/childhood-cancer-1.png', caption: 'Group picture with hospital authorities' },
  ];

  const fundItems = [
    { description: '50 pairs of surgical gloves', amount: '₹400' },
    { description: '130 crayons', amount: '₹1,300' },
    { description: '130 colouring books', amount: '₹1,300' },
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
              <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Humanitarian Service</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight animate-fade-in">
                Hope for Little Heroes
              </h1>
              <p className="text-slate-350 italic mt-3 text-lg font-medium">
                “Bringing happiness, hope, and strength to brave little warriors”
              </p>
              
              <div className="flex flex-wrap gap-4 items-center text-xs text-slate-300 mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-leoGold" />
                  <span>Date: 07/01/2025 (10:30 AM – 12:30 PM)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-leoTeal" />
                  <span>Venue: Childhood Cancer Hospital, Egmore</span>
                </div>
              </div>
            </div>
          </div>

          {/* Body content */}
          <div className="p-8 sm:p-12">
            
            {/* Core impact highlights */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Our Core Initiatives During the Visit</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-200">
                  <span className="text-sm font-bold text-leoGold block mb-1">1. Creative Engagement</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Distributed Crayons & Coloring Books:</strong> We gifted each child a set of crayons and a coloring book to spark creativity and add vibrant colors to their day.
                  </p>
                </div>
                <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-200">
                  <span className="text-sm font-bold text-leoTeal block mb-1">2. Joyful Games</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Engaged in Fun Activities:</strong> We organized simple, cheerful games that brought laughter and lighthearted moments, helping children forget their worries for a while.
                  </p>
                </div>
                <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-200">
                  <span className="text-sm font-bold text-blue-500 block mb-1">3. Heartfelt Bonding</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Compassionate Conversations:</strong> We spent quality time talking and bonding with the children, offering them warm emotional comfort and friendly companionship.
                  </p>
                </div>
                <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/50 hover:bg-white hover:border-slate-200 transition-all duration-200">
                  <span className="text-sm font-bold text-indigo-500 block mb-1">4. Bringing Positivity</span>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Spreading Happiness:</strong> Through our presence, laughter, and kind gestures, we aimed to bring hope, smiles, and strength to these brave little warriors.
                  </p>
                </div>
              </div>
            </div>

            {/* Metrics Dashboard */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Project Metrics & Participation</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
            </div>

            {/* Fund Utilization Table */}
            <div className="border border-slate-100 rounded-2xl p-6 mb-12 bg-slate-50/20">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Fund Utilization Breakdown</h3>
              <div className="divide-y divide-slate-100">
                {fundItems.map((item, i) => (
                  <div key={i} className="py-3 flex justify-between text-sm">
                    <span className="text-slate-600 font-medium">{item.description}</span>
                    <span className="text-slate-800 font-bold">{item.amount}</span>
                  </div>
                ))}
                <div className="py-3 pt-4 flex justify-between text-sm font-bold border-t border-slate-200">
                  <span className="text-slate-800">Total Funds Spend</span>
                  <span className="text-leoNavy text-base">₹3,000 (Approx. $35.29)</span>
                </div>
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

            {/* Signatures / Endorsements */}
            <div className="border-t border-slate-100 pt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">Project Attestation & Leadership</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <span className="block font-bold text-slate-800 text-sm">Leo Akshaya R G</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Childhood Cancer Chairperson</span>
                </div>
                <div>
                  <span className="block font-bold text-slate-800 text-sm">LEO CLUB OF HOPEVILLE</span>
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">Reported by: Leo Akshaya R G</span>
                </div>
              </div>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}

export default ImpactDetailHopeForLittleHeroes;
