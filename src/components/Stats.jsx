import React from 'react';
import { Users, Calendar, HeartHandshake, Award } from 'lucide-react';

function Stats() {
  const stats = [
    {
      id: 'volunteers',
      number: '50+',
      label: 'Active Volunteers',
      description: 'Dedicated youth leaders driving change in Chennai.',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'events',
      number: '120+',
      label: 'Community Initiatives',
      description: 'Blood donation drives, clean-ups, and educational workshops.',
      icon: Calendar,
      color: 'text-leoGold-dark',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'impact',
      number: '5,000+',
      label: 'Lives Impacted',
      description: 'Assisting families, patients, and children in need.',
      icon: HeartHandshake,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'years',
      number: '3+',
      label: 'Years of Dedication',
      description: 'Mobilizing community support and youth leadership.',
      icon: Award,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section id="stats" className="py-16 bg-slate-50 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-12 -mt-16 relative z-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-leoBlue font-serif">Our Impact in Numbers</h2>
            <p className="text-slate-500 mt-2">
              Every small action contributes to a larger wave of transformation. Here is what we have accomplished together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-300 group"
                >
                  <div className={`p-4 rounded-2xl ${stat.bgColor} ${stat.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} />
                  </div>
                  <span className="text-4xl font-extrabold text-leoBlue tracking-tight mb-2">
                    {stat.number}
                  </span>
                  <span className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-2">
                    {stat.label}
                  </span>
                  <span className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                    {stat.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
