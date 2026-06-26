import React, { useState } from 'react';
import { Eye, X, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';

function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('all');

  const photos = [
    {
      id: 1,
      category: 'environment',
      title: 'Beach Cleanup Shoreline Action',
      url: '/images/beach-cleanup-1.jpg',
      urls: ['/images/beach-cleanup-1.jpg', '/images/beach-cleanup-2.jpg'],
    },
    {
      id: 3,
      category: 'environment',
      title: 'Walk for Plastic Campaign',
      url: '/images/walk-for-plastic-1.jpg',
      urls: ['/images/walk-for-plastic-1.jpg', '/images/walk-for-plastic-2.png'],
    },
    {
      id: 4,
      category: 'healthcare',
      title: 'Hospital Pediatric Ward Visit',
      url: '/images/childhood-cancer-1.png',
      urls: ['/images/childhood-cancer-1.png', '/images/childhood-cancer-2.jpg'],
    },
    {
      id: 5,
      category: 'community',
      title: 'Meals of Hope Food Distribution',
      url: '/images/meals-of-hope-1.png',
      urls: ['/images/meals-of-hope-1.png', '/images/meals-of-hope-2.png'],
    },
    {
      id: 6,
      category: 'community',
      title: 'Children’s Home Visit',
      url: '/images/children-home-1.jpg',
      urls: ['/images/children-home-1.jpg', '/images/children-home-2.png'],
    },
    {
      id: 7,
      category: 'community',
      title: 'Old Age Home Senior Citizens Care',
      url: '/images/old-age-home-1.png',
      urls: ['/images/old-age-home-1.png', '/images/old-age-home-2.png'],
    },
    {
      id: 8,
      category: 'community',
      title: 'Deepavali Awareness Campaign',
      url: '/images/deepavali-awareness-1.jpg',
      urls: ['/images/deepavali-awareness-1.jpg', '/images/deepavali-awareness-2.png'],
    },
    {
      id: 9,
      category: 'community',
      title: 'Deepavali Celebration',
      url: '/images/deepavali-celebration-1.jpg',
      urls: ['/images/deepavali-celebration-1.jpg', '/images/deepavali-celebration-2.jpg'],
    },
    {
      id: 10,
      category: 'meetings',
      title: 'Official Board Installation Ceremony',
      url: '/images/board-installation-1.png',
      urls: ['/images/board-installation-1.png', '/images/board-installation-2.png'],
    },
    {
      id: 11,
      category: 'meetings',
      title: 'Officer Installation & Board Meeting',
      url: '/images/meeting-1.png',
      urls: ['/images/meeting-1.png'],
    },
    {
      id: 12,
      category: 'meetings',
      title: 'Leo Orientation & Interactive Discussion',
      url: '/images/meeting-2.png',
      urls: ['/images/meeting-2.png'],
    },
    {
      id: 13,
      category: 'meetings',
      title: 'Officer Induction Ceremony Presentation',
      url: '/images/meeting-3.png',
      urls: ['/images/meeting-3.png'],
    },
    {
      id: 14,
      category: 'meetings',
      title: 'Leo Orientation Presentation Program',
      url: '/images/meeting-4.png',
      urls: ['/images/meeting-4.png'],
    },
    {
      id: 15,
      category: 'meetings',
      title: 'Leo Club Officers Installation Group Photo',
      url: '/images/meeting-5.jpg',
      urls: ['/images/meeting-5.jpg'],
    },
    {
      id: 16,
      category: 'meetings',
      title: 'Leo Club Board Members Group Photo',
      url: '/images/meeting-6.png',
      urls: ['/images/meeting-6.png'],
    },
    {
      id: 17,
      category: 'healthcare',
      title: 'Pediatric Ward Interaction & Support',
      url: '/images/health-wellness-2.png',
      urls: ['/images/health-wellness-2.png'],
    },
    {
      id: 18,
      category: 'healthcare',
      title: 'Children Coloring and Drawing Session',
      url: '/images/health-wellness-3.jpg',
      urls: ['/images/health-wellness-3.jpg'],
    },
    {
      id: 19,
      category: 'healthcare',
      title: 'Leo Volunteer and Child Bonding Session',
      url: '/images/health-wellness-4.png',
      urls: ['/images/health-wellness-4.png'],
    },
    {
      id: 20,
      category: 'healthcare',
      title: 'Leos Helping Children in Pediatric Ward',
      url: '/images/health-wellness-5.png',
      urls: ['/images/health-wellness-5.png'],
    },
    {
      id: 21,
      category: 'environment',
      title: 'Litter Cleanup in Park Grounds',
      url: '/images/environment-1.png',
      urls: ['/images/environment-1.png'],
    },
    {
      id: 22,
      category: 'environment',
      title: 'Volunteers Plastic Collection Drive',
      url: '/images/environment-2.png',
      urls: ['/images/environment-2.png'],
    },
    {
      id: 23,
      category: 'environment',
      title: 'Environmental Cleanup at Anna Nagar Tower Park',
      url: '/images/environment-3.jpg',
      urls: ['/images/environment-3.jpg'],
    },
    {
      id: 24,
      category: 'environment',
      title: 'Clean Environment Drive Volunteers Group Photo',
      url: '/images/environment-4.jpg',
      urls: ['/images/environment-4.jpg'],
    },
    {
      id: 25,
      category: 'environment',
      title: 'Volunteers Active Litter Segregation',
      url: '/images/environment-5.jpg',
      urls: ['/images/environment-5.jpg'],
    },
  ];

  const filteredPhotos = activeTab === 'all' 
    ? photos 
    : photos.filter(p => p.category === activeTab);

  const handleOpenLightbox = (photo) => {
    setSelectedImg(photo);
    setActiveImgIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (selectedImg && selectedImg.urls) {
      setActiveImgIndex((prev) => (prev - 1 + selectedImg.urls.length) % selectedImg.urls.length);
    }
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (selectedImg && selectedImg.urls) {
      setActiveImgIndex((prev) => (prev + 1) % selectedImg.urls.length);
    }
  };

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Header Banner */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Visual Log</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">Service Gallery</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            Take a visual tour through our volunteering projects, meetings, and local initiatives.
          </p>
        </div>
      </section>

      {/* Grid and Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tabs Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {['all', 'environment', 'healthcare', 'community', 'meetings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-leoGold text-white shadow-md'
                    : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/50'
                }`}
              >
                {tab === 'all' ? 'All Photos' : tab}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => handleOpenLightbox(photo)}
                className="relative group h-64 rounded-3xl overflow-hidden cursor-zoom-in shadow-sm hover:shadow-md transition-all duration-350 bg-slate-200"
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Details */}
                <div className="absolute inset-0 bg-leoNavy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white mb-3 backdrop-blur-sm border border-white/25">
                    <Eye size={18} />
                  </div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide">
                    {photo.title}
                  </h4>
                  {photo.urls && photo.urls.length > 1 && (
                    <span className="text-[10px] text-slate-350 mt-1">
                      ({photo.urls.length} photos)
                    </span>
                  )}
                  <span className="text-xs text-leoGold font-semibold uppercase tracking-wider mt-1">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-[999] bg-leoNavy/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 z-50"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          <div className="max-w-4xl w-full bg-slate-900/50 border border-slate-700/50 p-3 rounded-3xl shadow-2xl flex flex-col relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center min-h-[300px]">
              <img
                src={selectedImg.urls ? selectedImg.urls[activeImgIndex] : selectedImg.url}
                alt={selectedImg.title}
                className="w-full max-h-[70vh] object-contain rounded-2xl transition-all duration-300"
              />

              {/* Navigation Arrows */}
              {selectedImg.urls && selectedImg.urls.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 text-white transition-all duration-200 border border-white/10 hover:scale-105 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNextImage}
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
                <h3 className="font-bold text-lg">{selectedImg.title}</h3>
                {selectedImg.urls && selectedImg.urls.length > 1 && (
                  <p className="text-xs text-slate-400 mt-0.5">
                    Image {activeImgIndex + 1} of {selectedImg.urls.length}
                  </p>
                )}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-leoGold bg-white/10 px-3 py-1 rounded-full border border-white/10 self-start sm:self-auto">
                {selectedImg.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
