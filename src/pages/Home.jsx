import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Stats from '../components/Stats.jsx';
import Services from '../components/Services.jsx';
import { ArrowRight, Sparkles, Image, Calendar, Users } from 'lucide-react';

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />

      {/* Modern Multi-Page Teaser Banner */}
      <section className="py-20 bg-leoNavy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-leoGold to-leoTeal rounded-full blur-3xl pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Discover More</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">Explore Our Community Work</h2>
            <p className="text-slate-300 mt-3 text-sm">
              We separate our initiatives into structured sections. Visit our pages to see our full activities log, meet our directors, or browse our service gallery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Box 1: Activities */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-leoGold/40 transition-all duration-300 flex flex-col items-start">
              <div className="p-3 rounded-2xl bg-amber-500/10 text-leoGold mb-6">
                <Calendar size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">Our Activities</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                Stay updated with our ongoing plastic drives, blood camps, and upcoming leadership training in Chennai.
              </p>
              <Link to="/activities" className="inline-flex items-center gap-2 text-xs font-bold text-leoGold hover:text-white transition-colors uppercase tracking-wider">
                <span>View Activities Log</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Box 2: Gallery */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-leoTeal/40 transition-all duration-300 flex flex-col items-start">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-leoTeal-light mb-6">
                <Image size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">Service Gallery</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                Browse our visual logs of cleanup drives, school donation drives, and active volunteer meetings in the field.
              </p>
              <Link to="/gallery" className="inline-flex items-center gap-2 text-xs font-bold text-leoTeal-light hover:text-white transition-colors uppercase tracking-wider">
                <span>Browse Gallery</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Box 3: Team */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-indigo-500/40 transition-all duration-300 flex flex-col items-start">
              <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-white mb-2">Meet the Team</h3>
              <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">
                Meet the 19 dedicated directors and youth coordinators leading our specialized community chairpersons.
              </p>
              <Link to="/team" className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-white transition-colors uppercase tracking-wider">
                <span>Meet Board Members</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
