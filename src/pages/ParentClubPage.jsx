import React from 'react';
import { Eye, ShieldAlert, Award, Compass, Users, HeartHandshake, Calendar } from 'lucide-react';

function ParentClubPage() {
  const serviceFocus = [
    {
      title: 'Eye and vision-care programmes',
      description: 'such as free screening camps',
      icon: Eye,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Health camps',
      description: 'including diabetes and general health awareness',
      icon: HeartHandshake,
      bgColor: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Community service initiatives',
      description: 'like hygiene drives, school support, and environmental activities',
      icon: Compass,
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Youth outreach',
      description: 'through Leos and student engagement, aligned with Lions International’s broader mission “We Serve”',
      icon: Users,
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Header Banner */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Sponsoring Affiliation</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">Parent Club</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            District 3241 E • Lions Clubs International
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left: General Info & Service Grid */}
            <div className="lg:col-span-8">
              
              {/* Highlighted Sponsoring Card */}
              <div className="bg-gradient-to-br from-leoNavy to-slate-900 border-2 border-leoGold rounded-3xl p-8 shadow-xl text-white relative overflow-hidden mb-12">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-leoGold/15 rounded-full blur-2xl pointer-events-none"></div>
                <div className="relative z-10">
                  <span className="bg-leoGold/20 border border-leoGold/40 text-leoGold text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
                    Highlighted Parent Club
                  </span>
                  <h2 className="text-3xl font-extrabold font-serif mb-2 text-white">
                    Lions Club of Chennai Aavarampoo
                  </h2>
                  <p className="text-leoGold text-xl font-bold tracking-wider mb-6">
                    District 3241 E
                  </p>
                  <p className="text-slate-200 text-base leading-relaxed">
                    The Lions Club of Chennai Aavarampoo, under District 3241 E, is an active volunteer chapter hosting monthly meetings in Anna Nagar. With around 68 members and standard service activities aligned with Lions’ mission, the club contributes to community well-being, especially in health and youth services.
                  </p>
                </div>
              </div>

              {/* Activities & Service Focus */}
              <div>
                <h3 className="text-2xl font-bold text-leoNavy font-serif mb-4 border-b border-slate-100 pb-3">
                  Activities & Service Focus
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                  Although specific project details for the Aavarampoo club are not publicly listed, most Lions Clubs in this district typically engage in:
                </p>

                <div className="space-y-6">
                  {serviceFocus.map((focus) => {
                    const Icon = focus.icon;
                    return (
                      <div key={focus.title} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-2xl ${focus.bgColor} ${focus.iconColor} flex items-center justify-center flex-shrink-0`}>
                          <Icon size={24} />
                        </div>
                        <div>
                          <h4 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-1">{focus.title}</h4>
                          <p className="text-sm text-slate-500 leading-relaxed">{focus.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Quick Stats Sidebar */}
            <div className="lg:col-span-4 space-y-8">
              {/* Highlight Card */}
              <div className="bg-gradient-to-br from-leoNavy to-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden border border-slate-800">
                <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-leoGold/15 rounded-full blur-2xl"></div>
                <h3 className="text-lg font-bold text-leoGold uppercase tracking-wider mb-6 font-serif">Quick Facts</h3>
                
                <div className="space-y-6">
                  {/* Stat 1 */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-xl text-leoGold border border-white/10">
                      <Users size={20} />
                    </div>
                    <div>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Active Members</span>
                      <span className="text-base font-bold">68+ Lions Members</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-leoGold">Motto: "We Serve"</span>
                </div>
              </div>

              {/* Graphic Banner */}
              <div className="rounded-3xl overflow-hidden shadow-md relative h-56 group">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
                  alt="Lions members shaking hands"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-leoNavy/80 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-leoGold block mb-1">Affiliation</span>
                    <span className="text-sm font-bold text-white uppercase tracking-wide">Lions Clubs International</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default ParentClubPage;
