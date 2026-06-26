import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

function ActivitiesPage() {
  const [filter, setFilter] = useState('all');
  const [selectedAct, setSelectedAct] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const activities = [
    {
      id: 1,
      type: 'recent',
      title: 'Walk for Plastic Drive',
      location: 'Anna Nagar, Chennai',
      description: 'Our signature campaign focusing on collecting and segregating recyclable plastics from public areas, helping keep Chennai clean and raising green awareness.',
      image: '/images/walk-for-plastic-1.jpg',
      images: ['/images/walk-for-plastic-1.jpg', '/images/walk-for-plastic-2.png'],
      category: 'Environment',
    },
    {
      id: 2,
      type: 'recent',
      title: 'Beach Cleanup Campaign',
      location: 'Besant Nagar Beach, Chennai',
      description: 'Volunteers gathered early in the morning to clean the shoreline, picking up discarded plastic bottles, food wrappers, and microplastics to protect marine life.',
      image: '/images/beach-cleanup-1.jpg',
      images: ['/images/beach-cleanup-1.jpg', '/images/beach-cleanup-2.jpg'],
      category: 'Environment',
    },
    {
      id: 3,
      type: 'recent',
      title: 'Meals of Hope Food Distribution',
      location: 'Vulnerable Neighborhoods, Chennai',
      description: 'A nutrition-first initiative serving hot, wholesome meals to street families and underprivileged individuals in vulnerable pockets of the city.',
      image: '/images/meals-of-hope-1.png',
      images: ['/images/meals-of-hope-1.png', '/images/meals-of-hope-2.png'],
      category: 'Community Welfare',
    },
    {
      id: 4,
      type: 'recent',
      title: 'Children’s Home Visit',
      location: 'Local Orphanage, Chennai',
      description: 'Spent a day of joy with orphans and children in shelter homes, distributing stationeries, school supplies, and hosting fun educational games.',
      image: '/images/children-home-1.jpg',
      images: ['/images/children-home-1.jpg', '/images/children-home-2.png'],
      category: 'Community Welfare',
    },
    {
      id: 5,
      type: 'recent',
      title: 'Old Age Home Visit & Care',
      location: 'Senior Citizens Care Home, Chennai',
      description: 'Inducting empathy by visiting elderly residents, spending quality time sharing stories, distributing daily essentials, and facilitating health check-ups.',
      image: '/images/old-age-home-1.png',
      images: ['/images/old-age-home-1.png', '/images/old-age-home-2.png'],
      category: 'Community Welfare',
    },
    {
      id: 6,
      type: 'recent',
      title: 'Deepavali Celebration',
      location: 'Shelter Home, Chennai',
      description: 'Spreading the light of Deepavali by distributing sweets, new clothes, and green crackers to kids, bringing festival joy to their faces.',
      image: '/images/deepavali-celebration-1.jpg',
      images: ['/images/deepavali-celebration-1.jpg', '/images/deepavali-celebration-2.jpg'],
      category: 'Festivities',
    },
    {
      id: 7,
      type: 'recent',
      title: 'Deepavali Firecracker Safety & Eco-Awareness',
      location: 'Schools & Community Hubs, Chennai',
      description: 'Educating schoolchildren and community members on safe firecracker practices and promoting eco-friendly celebrations to reduce pollution.',
      image: '/images/deepavali-awareness-1.jpg',
      images: ['/images/deepavali-awareness-1.jpg', '/images/deepavali-awareness-2.png'],
      category: 'Awareness',
    },
    {
      id: 8,
      type: 'recent',
      title: 'Childhood Cancer Support Campaign',
      location: 'Pediatric Oncology Ward, Chennai',
      description: 'Organizing child cancer awareness initiatives, hospital visits, and raising funds to support pediatric treatment, toys, and care supplies.',
      image: '/images/childhood-cancer-1.png',
      images: ['/images/childhood-cancer-1.png', '/images/childhood-cancer-2.jpg'],
      category: 'Healthcare',
    },
    {
      id: 9,
      type: 'recent',
      title: 'Annual Board Installation Ceremony',
      location: 'Lions Club Community Hall, Chennai',
      description: 'Our annual formal ceremony to officially install the new executive board officers and induct new Leo members into the Hopeville family.',
      image: '/images/board-installation-1.png',
      images: ['/images/board-installation-1.png', '/images/board-installation-2.png'],
      category: 'Meetings & Official',
    },
  ];

  const filteredActivities = filter === 'all' 
    ? activities 
    : activities.filter(act => act.type === filter);

  const handleOpenLightbox = (activity) => {
    setSelectedAct(activity);
    setActiveImgIndex(0);
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Header Section */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Service Feed</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">Activities & Projects</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            Discover our recent completed actions and explore upcoming events across Chennai.
          </p>
        </div>
      </section>

      {/* Filter and Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-10">
            <div className="flex items-center gap-2 text-slate-700">
              <span className="text-sm font-bold uppercase tracking-wider">Show Events</span>
            </div>

            <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
              {['all', 'recent', 'upcoming'].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilter(t)}
                  className={`px-4 py-2 text-xs font-bold rounded-lg uppercase tracking-wider transition-all duration-200 ${
                    filter === t
                      ? 'bg-leoNavy text-white shadow-md'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t === 'all' ? 'All Events' : t === 'recent' ? 'Completed Actions' : 'Upcoming'}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 hover:border-slate-200 transition-all duration-300 flex flex-col h-full"
              >
                {/* Image Section */}
                <div 
                  className="relative h-56 overflow-hidden cursor-zoom-in"
                  onClick={() => handleOpenLightbox(act)}
                >
                  <img
                    src={act.image}
                    alt={act.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-leoNavy/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-slate-700/50">
                      {act.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      act.type === 'upcoming'
                        ? 'bg-amber-500 text-white'
                        : 'bg-emerald-500 text-white'
                    }`}>
                      {act.type === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow justify-center">
                  <h3 
                    className="text-lg font-bold text-slate-800 leading-tight mb-2 group-hover:text-leoGold transition-colors duration-200 cursor-pointer"
                    onClick={() => handleOpenLightbox(act)}
                  >
                    {act.title}
                  </h3>
                  <p className="text-sm text-slate-550 leading-relaxed flex-grow">
                    {act.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedAct && (
        <div 
          className="fixed inset-0 z-[999] bg-leoNavy/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedAct(null)}
        >
          <button
            onClick={() => setSelectedAct(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div 
            className="max-w-4xl w-full bg-slate-900/50 border border-slate-700/50 p-3 rounded-3xl shadow-2xl flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center min-h-[300px]">
              <img
                src={selectedAct.images ? selectedAct.images[activeImgIndex] : selectedAct.image}
                alt={selectedAct.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl transition-all duration-300"
              />

              {/* Navigation Arrows */}
              {selectedAct.images && selectedAct.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIndex((prev) => (prev - 1 + selectedAct.images.length) % selectedAct.images.length);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 border border-white/10 hover:scale-105 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImgIndex((prev) => (prev + 1) % selectedAct.images.length);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 border border-white/10 hover:scale-105 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            <div className="mt-4 px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between text-white gap-2">
              <div>
                <h3 className="font-bold text-lg">{selectedAct.title}</h3>
                {selectedAct.images && selectedAct.images.length > 1 && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    Image {activeImgIndex + 1} of {selectedAct.images.length}
                  </p>
                )}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-leoGold bg-white/10 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
                {selectedAct.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ActivitiesPage;
