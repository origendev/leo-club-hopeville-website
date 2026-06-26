import React, { useState } from 'react';
import { Target, Compass, Sparkles, Award, ShieldCheck, HeartHandshake, X } from 'lucide-react';

function AboutPage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const coreValues = [
    {
      id: 'vision',
      title: 'Our Vision',
      description: 'To inspire and nurture the next generation of compassionate leaders who view service as a lifelong commitment, building a highly empathetic, resilient, and supportive community.',
      icon: Compass,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      id: 'mission',
      title: 'Our Mission',
      description: 'To mobilize, mentor, and empower youth to actively address local societal issues—from health and environment to literacy—delivering impactful change through local actions of kindness.',
      icon: Target,
      bgColor: 'bg-amber-50',
      iconColor: 'text-leoGold-dark',
    },
    {
      id: 'why-us',
      title: 'Why Leo Hopeville?',
      description: 'Backed by the prestige of Lions Club International and mentored by the Lions Club of Chennai Aavarampoo, we offer direct leadership opportunities, skill building, and a trusted service network.',
      icon: Sparkles,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Page Header Banner */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Get to Know Us</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">About Our Club</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            The Leo Club of Hopeville is a youth-led service movement dedicated to serving communities in Chennai with empathy, responsibility, and action.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-20 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Image Card */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group cursor-pointer"
              >
                <img
                  src="/images/about-club.jpg"
                  alt="Leo Club of Hopeville Board Members Group Photo"
                  className="w-full h-[500px] object-cover object-center group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leoNavy/80 via-leoNavy/20 to-transparent"></div>
              </div>
            </div>

            {/* Right: Vision/Mission Details */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-leoNavy leading-tight font-serif mb-6">
                Serve Kindness. Uplift <span className="text-transparent bg-clip-text bg-gradient-to-r from-leoTeal to-blue-800">Communities.</span>
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-8">
                Welcome to the <strong>Leo Club of Hopeville</strong>. We empower young individuals to lead with empathy and purpose.
                As a sponsored youth wing of the Lions Club of Chennai Aavarampoo, we mobilize resources and volunteers to address immediate environmental, health, and social welfare needs across our community.
              </p>

              {/* Core Values Stack */}
              <div className="space-y-6">
                {coreValues.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div key={val.id} className="flex gap-4 p-5 rounded-2xl hover:bg-slate-50 transition-colors duration-200 border border-transparent hover:border-slate-100">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${val.bgColor} ${val.iconColor} flex items-center justify-center`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-1">
                          {val.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {val.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Extra Page Detail Section: History & Sponsorship */}
      <section className="pt-6 pb-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 bg-blue-50 text-blue-600 rounded-full mb-6">
            <HeartHandshake size={32} />
          </div>
          <h2 className="text-2xl font-bold text-leoNavy font-serif mb-4">Our History & Parent Affiliation</h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Sponsored proudly by the <strong className="font-bold text-slate-800">Lions Club</strong>, we represent a vibrant chapter of Leo Clubs International. 
            The Leo Club Program gives young people the opportunity to serve their communities, develop leadership skills, make new friends, and obtain a global perspective of public service.
          </p>
          <div className="flex justify-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>International Network</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" />
              <span>100% Non-Profit</span>
            </div>
          </div>
        </div>
      </section>

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
            src="/images/about-club.jpg"
            alt="Leo Club of Hopeville Board Members Group Photo"
            className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default AboutPage;
