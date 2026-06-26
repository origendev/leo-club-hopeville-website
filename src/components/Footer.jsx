import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Activities', href: '/activities' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Impact Stories', href: '/impact-stories' },
    { label: 'Parent Club', href: '/parent-club' },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-leoNavy-dark text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 border border-leoGold/50">
                <img
                  src="https://www.leohopeville.org/logo.png"
                  alt="Leo Club Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="text-base font-bold text-white tracking-wider uppercase font-sans">
                LEO CLUB OF <span className="text-leoGold">HOPEVILLE</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              A youth-led service organization sponsored by the Lions Club. Mobilizing and inspiring youth to lead with kindness.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors duration-250">
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-leoGold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Focus Areas */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Our Causes</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="hover:text-white transition-colors cursor-default">Education & Literacy</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Health checkups & Cancer support</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Plastic Cleanups & Environment</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Disaster Relief & Welfare</span></li>
              <li><span className="hover:text-white transition-colors cursor-default">Youth Leadership Workshops</span></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Get in Touch</h3>
            
            <div className="flex items-center gap-3 text-sm">
              <Mail size={18} className="text-blue-400 flex-shrink-0" />
              <a href="mailto:leoclubhopeville@gmail.com" className="hover:text-white transition-colors">
                leoclubhopeville@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Instagram size={18} className="text-rose-400 flex-shrink-0" />
              <a 
                href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors"
              >
                @leoclubofhopeville
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <p>© {new Date().getFullYear()} Leo Club of Hopeville. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Proudly sponsored by</span>
            <span className="font-bold text-leoGold">Lions Club</span>
            <Heart size={10} className="text-leoGold fill-leoGold ml-1" />
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
