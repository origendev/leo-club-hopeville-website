import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Heart } from 'lucide-react';

function Hero() {
  const slides = [
    '/images/home-slide-1.jpg',
    '/images/home-slide-3.jpg',
    '/images/home-slide-4.jpg',
    '/images/home-slide-5.jpg',
    '/images/home-slide-6.jpg',
    '/images/home-slide-7.jpg',
    '/images/home-slide-8.jpg',
    '/images/home-slide-9.jpg',
    '/images/home-slide-10.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-leoNavy overflow-hidden py-24 sm:py-32"
    >
      {/* Dynamic Background Image Overlay with Loop */}
      <div className="absolute inset-0 z-0 bg-leoNavy">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ${
              index === currentSlide ? 'opacity-65 scale-100' : 'opacity-0 scale-102'
            }`}
          />
        ))}
        {/* Soft elegant overlays to maximize image visibility while keeping text highly legible */}
        <div className="absolute inset-0 bg-slate-950/45"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-leoNavy via-transparent to-transparent"></div>
      </div>

      {/* Decorative Floating Mesh elements */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-leoGold/5 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-leoTeal/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center flex flex-col items-center">
        
        {/* Motto Tag */}
        <div className="inline-flex items-center gap-2 bg-slate-800/60 border border-slate-700/60 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-leoGold mb-8 animate-fade-in shadow-sm">
          <Heart size={12} className="text-leoGold animate-pulse" />
          <span>Motto: Serve Kindness</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight font-serif">
          Making a Positive Impact Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-leoGold via-amber-400 to-yellow-500">Compassion & Service</span>
        </h1>

        {/* Mission Statement */}
        <p className="max-w-2xl text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed font-sans font-light">
          The Leo Club of Hopeville is a youth-led service organization sponsored by the{' '}
          <strong className="text-white font-medium">Lions Club of Chennai Aavarampoo</strong>.
          We empower young individuals to lead with empathy, transforming community challenges into opportunities for kindness.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <Link
            to="/activities"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-leoGold to-amber-600 hover:from-amber-600 hover:to-leoGold text-white font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>View Our Impact</span>
            <ArrowRight size={18} />
          </Link>

          {/* Secondary CTA */}
          <a
            href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <Instagram size={18} className="text-leoGold" />
            <span>Follow Our Journey</span>
          </a>
        </div>
      </div>

      {/* Premium Diagonal Divider to smoothly transition to the stats section */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[80px] text-slate-50 fill-current">
          <path d="M0 120h1200V0z"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
