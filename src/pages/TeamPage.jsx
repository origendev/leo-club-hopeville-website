import React, { useState } from 'react';
import { Quote, Users, ShieldAlert, X } from 'lucide-react';

function TeamPage() {
  const [enlargedImage, setEnlargedImage] = useState(null);

  const coreBoard = [
    {
      name: 'LEO SHARAN KUMAR P B',
      role: 'President',
      quotes: ['Leading with vision and kindness.', 'Believes service begins with empathy.'],
      avatar: 'SK',
      color: 'bg-blue-600',
      image: '/images/team-sharan.png',
    },
    {
      name: 'LEO VINOTH B',
      role: 'Immediate Past President',
      quotes: ['Legacy isn’t given — it\'s earned.', 'Mentors the next generation of Leos.'],
      avatar: 'VB',
      color: 'bg-slate-700',
    },
    {
      name: 'LEO SANTO BRIANA A',
      role: 'Vice President',
      quotes: ['Grace under pressure.', 'Community first, always.'],
      avatar: 'SB',
      color: 'bg-amber-600',
      image: '/images/team-santo.png',
    },
    {
      name: 'LEO SHINENDRAN N',
      role: 'Secretary',
      quotes: ['Order in every action.', 'Keeps the mission on schedule.'],
      avatar: 'SN',
      color: 'bg-indigo-650',
      image: '/images/team-shinendran.png',
    },
    {
      name: 'LEO SRIVASTHAN H',
      role: 'Treasurer',
      quotes: ['Every rupee has a purpose.', 'Transparency is non‑negotiable.'],
      avatar: 'SH',
      color: 'bg-emerald-600',
    },
    {
      name: 'LEO PRATIMA DIXIT R',
      role: 'Membership Chairperson',
      quotes: ['Welcomes every new Leo like family.', 'Growth with heart.'],
      avatar: 'PD',
      color: 'bg-pink-650',
      image: '/images/team-pratima.png',
    },
    {
      name: 'LEO KESHAV K',
      role: 'Leadership Chairperson',
      quotes: ['Turns potential into performance.', 'Leads by example.'],
      avatar: 'KK',
      color: 'bg-purple-600',
      image: '/images/team-keshav.png',
    },
    {
      name: 'LEO MANISH MADHAVAN K K',
      role: 'Service Chairperson',
      quotes: ['Action over words.', 'Weekends = volunteering.'],
      avatar: 'MM',
      color: 'bg-cyan-600',
      image: '/images/team-manish.png',
    },
    {
      name: 'LEO SIDHESH G S',
      role: 'Public Relation Officer',
      quotes: ['Every story deserves a spotlight.', 'Amplifying Leo voices.'],
      avatar: 'SG',
      color: 'bg-rose-600',
    },
  ];

  const extendedChairpersons = [
    {
      name: 'LEO AKSHAYA R G',
      role: 'Childhood Cancer Chairperson',
      quotes: ['Hope is medicine.', 'Kids first, always.'],
      avatar: 'AR',
      color: 'bg-teal-600',
      image: '/images/team-akshaya.png',
    },
    {
      name: 'LEO LAKSHITA M S',
      role: 'Diabetes Chairperson',
      quotes: ['Fighting sugar, spreading sweetness.', 'Advocate for healthy habits.'],
      avatar: 'LM',
      color: 'bg-orange-600',
      image: '/images/team-lakshita.png',
    },
    {
      name: 'LEO DURGESH A',
      role: 'Disaster Relief Chairperson',
      quotes: ['First on-site, last to leave.', 'Prepared for every storm.'],
      avatar: 'DA',
      color: 'bg-red-650',
      image: '/images/team-durgesh.png',
    },
    {
      name: 'LEO SHRENICA CHAWDA A',
      role: 'Environment Chairperson',
      quotes: ['Planet before profit.', 'Plants trees like confetti.'],
      avatar: 'SC',
      color: 'bg-emerald-700',
      image: '/images/team-shrenica.png',
    },
    {
      name: 'LEO KIRUTHIKA A B',
      role: 'Humanitarian Chairperson',
      quotes: ['Wherever there’s a need, she’s there.', 'Kindness in action.'],
      avatar: 'KA',
      color: 'bg-violet-600',
      image: '/images/team-kiruthika.png',
    },
    {
      name: 'LEO NALLAMALLI HRISHEEK',
      role: 'Hunger Relief Chairperson',
      quotes: ['No plate should be empty.', 'Organises food drives weekly.'],
      avatar: 'NH',
      color: 'bg-yellow-600',
      image: '/images/team-hrisheek.png',
    },
    {
      name: 'LEO SORNALATHA V',
      role: 'Sports Chairperson',
      quotes: ['Team spirit on and off field.', 'Healthy body, healthy community.'],
      avatar: 'SV',
      color: 'bg-sky-600',
      image: '/images/team-sornalatha.png',
    },
    {
      name: 'LEO MONIKAA SHREE',
      role: 'Twinning Chairperson',
      quotes: ['Building bridges between clubs.', 'Collaboration is her super‑power.'],
      avatar: 'MS',
      color: 'bg-pink-600',
      image: '/images/team-monikaa.png',
    },
    {
      name: 'LEO KARTIGAYINI K',
      role: 'Vision Chairperson',
      quotes: ['Eye care advocate.', 'Bringing clearer futures.'],
      avatar: 'KK',
      color: 'bg-teal-700',
      image: '/images/team-kartigayini.png',
    },
    {
      name: 'LEO MANASADHEVI H',
      role: 'Youth Chairperson',
      quotes: ['Empowering tomorrow’s leaders today.', 'Youth energy = Leo energy.'],
      avatar: 'MH',
      color: 'bg-indigo-700',
      image: '/images/team-manasadhevi.png',
    },
  ];

  const currentMembers = [...coreBoard, ...extendedChairpersons];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Header Banner */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Youth Leaders</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">Meet Our Team</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            The board members and dedicated coordinators directing our volunteer efforts and projects in Chennai.
          </p>
        </div>
      </section>

      {/* Main Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Members Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 flex flex-col group relative overflow-hidden text-center items-center"
              >
                <Quote className="absolute right-4 bottom-4 text-slate-100/30 w-24 h-24 -z-0 pointer-events-none group-hover:scale-105 transition-transform duration-300" />
                
                {/* Large Profile Image Container */}
                <div 
                  className="w-36 h-36 rounded-full overflow-hidden mb-6 border-4 border-slate-100 shadow-md bg-slate-50 flex-shrink-0 cursor-zoom-in hover:scale-105 transition-transform duration-300 flex items-center justify-center relative z-10"
                  onClick={() => setEnlargedImage({ url: member.image, name: member.name, role: member.role })}
                  title="Click to enlarge profile photo"
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-contain bg-white"
                    />
                  ) : (
                    <div className={`w-full h-full ${member.color || 'bg-slate-700'} text-white flex items-center justify-center font-extrabold text-3xl shadow-inner`}>
                      {member.avatar}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex-grow flex flex-col justify-between w-full relative z-10">
                  <div className="mb-4">
                    <h3 className="text-base font-extrabold text-slate-900 uppercase tracking-wide leading-tight group-hover:text-leoNavy transition-colors">
                      {member.name}
                    </h3>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-leoGold mt-1">
                      {member.role}
                    </span>
                  </div>

                  <ul className="text-xs text-slate-500 space-y-2 leading-relaxed border-t border-slate-100 pt-4 text-left w-full">
                    {member.quotes.map((q, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-leoGold font-bold text-sm leading-none">•</span>
                        <span className="italic">"{q}"</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setEnlargedImage(null)}
        >
          <div 
            className="relative max-w-md w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header info */}
            <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-slate-800">
              <div>
                <h4 className="text-sm font-bold tracking-wide uppercase">{enlargedImage.name}</h4>
                <span className="text-[10px] text-leoGold font-bold uppercase tracking-wider">{enlargedImage.role}</span>
              </div>
              <button 
                onClick={() => setEnlargedImage(null)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close lightbox"
              >
                <X size={18} />
              </button>
            </div>
            
            {/* Image content */}
            <div className="bg-slate-950 flex items-center justify-center relative aspect-square p-2">
              <img
                src={enlargedImage.url}
                alt={enlargedImage.name}
                className="max-h-[70vh] max-w-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamPage;
