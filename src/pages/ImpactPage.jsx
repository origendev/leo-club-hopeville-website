import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

function ImpactPage() {
  const stories = [
    {
      id: 1,
      title: 'WALK FOR PLASTIC – CLEAN ENVIRONMENT DRIVE 2025',
      date: '6/7/2025',
      location: 'Tower Park, Anna Nagar, Chennai',
      summary: 'LEO CLUB OF HOPEVILLE WALK FOR PLASTIC – CLEAN ENVIRONMENT DRIVE 2025',
      content: '“Step by step, towards a plastic-free planet” Walk for Plastic – Clean Environment Drive 2025 On 6th July 2025, from 7:30 AM to 10:00 AM, the Leo Club of Hopeville held the...',
      image: '/images/walk-for-plastic-detail-1.png',
      link: '/impact-stories/walk-for-plastic-clean-environment-drive-2025',
    },
    {
      id: 2,
      title: 'Free Mega Medical Camp - "Serving Kindness"',
      date: '5/7/2025',
      location: 'Akshaya Trust, Velappanchavadi, Chennai.',
      summary: 'Leo Club of Hopeville Free Mega Medical Camp "Serving Kindness"',
      content: 'On 5th July 2025, the Leo Club of Hopeville organized a Free Mega Medical Camp at Akshaya Trust, Velappanchavadi, Chennai. This initiative aimed to deliver essential...',
      image: '/images/medical-camp-banner.png',
      link: '/impact-stories/free-mega-medical-camp',
    },
    {
      id: 3,
      title: 'Hope for Little Heroes',
      date: '7/1/2025',
      location: 'Childhood Cancer Hospital, Egmore',
      summary: 'Leo Club of Hopeville Childhood Cancer Ward Support Initiative',
      content: '1. Distributed Crayons and Coloring Books: We gifted each child a set of crayons and a coloring book to spark creativity and add color to their day. 2. Engaged in Fun Games: We organized simple, cheerful games that brought laughter and lighthearted moments...',
      image: '/images/hope-little-heroes-detail-1.jpg',
      link: '/impact-stories/hope-for-little-heroes',
    },
  ];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* Header Banner */}
      <section className="bg-leoNavy text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-leoGold mb-3 block">Testimonials & Outcomes</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight font-serif">Impact Stories</h1>
          <p className="max-w-2xl mx-auto text-sm text-slate-300 mt-3 leading-relaxed">
            Real outcomes and stories of transformation achieved by our active members and generous community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-8">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 p-6 gap-6 items-start hover:shadow-md transition-shadow duration-300"
              >
                {/* Thumbnail Image */}
                <div className="w-full md:w-1/3 h-52 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div className="flex-grow flex flex-col justify-between h-full pt-1">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 leading-tight mb-2 hover:text-leoGold transition-colors duration-200">
                      {story.link !== '#' ? (
                        <Link to={story.link}>{story.title}</Link>
                      ) : (
                        story.title
                      )}
                    </h3>
                    
                    {/* Date and Location */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4 font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar size={13} className="text-leoGold" />
                        <span>{story.date}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={13} className="text-leoTeal" />
                        <span>{story.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                      {story.summary}
                    </p>
                    
                    <p className="text-sm text-slate-550 leading-relaxed mb-4">
                      {story.content}
                    </p>
                  </div>

                  {story.link !== '#' && (
                    <Link 
                      to={story.link} 
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-leoNavy hover:text-leoGold transition-colors duration-200 mt-2 group"
                    >
                      Read More 
                      <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

export default ImpactPage;
