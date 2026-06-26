import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

function InstagramCTA() {
  const feedPhotos = [
    {
      id: 1,
      likes: '142',
      comments: '12',
      url: 'https://images.unsplash.com/photo-1559027615-cd2487df3ff7?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 2,
      likes: '98',
      comments: '8',
      url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 3,
      likes: '210',
      comments: '24',
      url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 4,
      likes: '165',
      comments: '15',
      url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 5,
      likes: '189',
      comments: '19',
      url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 6,
      likes: '245',
      comments: '32',
      url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=400&h=400&q=80',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Content Box */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex p-3 bg-rose-50 text-rose-600 rounded-2xl mb-4 shadow-inner">
            <Instagram size={28} />
          </div>
          <h2 className="text-3xl font-extrabold text-leoBlue font-serif">Follow Our Journey</h2>
          <p className="text-slate-500 mt-2 text-sm">
            We share live stories, service announcements, and event highlights daily. Join our growing community on Instagram!
          </p>
        </div>

        {/* Mimic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {feedPhotos.map((photo) => (
            <a
              key={photo.id}
              href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm bg-slate-100"
            >
              <img
                src={photo.url}
                alt="Instagram post thumbnail"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
              />
              
              {/* Blur Hover Details */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white font-bold text-xs">
                <div className="flex items-center gap-1">
                  <Heart size={14} fill="white" />
                  <span>{photo.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={14} fill="white" />
                  <span>{photo.comments}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:opacity-95 text-white font-bold px-8 py-4 rounded-xl text-sm shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5"
          >
            <Instagram size={18} />
            <span>Follow us on Instagram</span>
          </a>

          <a
            href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold px-8 py-4 rounded-xl text-sm border border-slate-200 shadow-sm transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5"
          >
            <span>Message Us</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default InstagramCTA;
