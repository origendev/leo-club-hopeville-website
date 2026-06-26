import React from 'react';
import { BookOpen, Activity, Leaf, Heart, Users, ShieldAlert } from 'lucide-react';

function Services() {
  const focusAreas = [
    {
      id: 'education',
      title: 'Education & Literacy',
      description: 'Conducting homework clubs, book collection drives, and tuition support for under-resourced schools to foster student success.',
      icon: BookOpen,
      image: '/images/children-home-1.jpg',
      color: 'border-blue-500',
    },
    {
      id: 'health',
      title: 'Health & Wellness',
      description: 'Organizing blood donation camps, diabetes checkups, and childhood cancer support initiatives to raise health awareness.',
      icon: Activity,
      image: '/images/health-wellness.png',
      color: 'border-rose-500',
    },
    {
      id: 'environment',
      title: 'Environmental Action',
      description: 'Leading waste collection campaigns (like Walk for Plastic), sapling planting, and raising awareness about urban pollution.',
      icon: Leaf,
      image: '/images/walk-for-plastic-1.jpg',
      color: 'border-emerald-500',
    },
    {
      id: 'community',
      title: 'Community Service',
      description: 'Engaging in direct local support, relief projects, hunger alleviation drives, and supporting community centers.',
      icon: Heart,
      image: '/images/deepavali-celebration-1.jpg',
      color: 'border-amber-500',
    },
    {
      id: 'leadership',
      title: 'Youth Leadership',
      description: 'Providing leadership training, speaking workshops, and mentoring roles to shape volunteers into empathetic public service leaders.',
      icon: Users,
      image: '/images/meeting-5.jpg',
      color: 'border-indigo-500',
    },
    {
      id: 'welfare',
      title: 'Social Welfare',
      description: 'Supporting disaster relief, distributing warm meals to families in vulnerable neighborhoods, and supporting elderly homes.',
      icon: ShieldAlert,
      image: '/images/meals-of-hope-1.png',
      color: 'border-purple-500',
    },
  ];

  return (
    <section id="focus-areas" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Where We Serve</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-leoBlue font-serif">Our Focus Areas</h2>
          <p className="text-slate-500 mt-3 text-base">
            Under the guidance of Lions Club International, we focus our energy on key areas to bring maximum sustainable benefit to our communities.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-slate-100/80 transition-all duration-300 group flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Floating Icon badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-xl shadow-md flex items-center justify-center text-leoBlue">
                    <Icon size={20} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-slate-800 uppercase tracking-wide mb-2 group-hover:text-leoGold transition-colors duration-200">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-grow">
                    {area.description}
                  </p>
                  
                  {/* Subtle border bottom accent */}
                  <div className={`mt-6 h-1 w-12 rounded-full bg-slate-200 group-hover:w-full transition-all duration-300`}></div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Services;
