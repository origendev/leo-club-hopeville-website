import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Instagram, Heart } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-leoNavy/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800/80'
          : 'bg-leoNavy py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white flex items-center justify-center p-0.5 border border-leoGold/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://www.leohopeville.org/logo.png"
                alt="Leo Club Logo"
                className="w-full h-full object-contain rounded-full"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=100&q=80';
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-wider text-white uppercase font-sans">
                LEO CLUB OF <span className="text-leoGold">HOPEVILLE</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `text-sm font-semibold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-leoGold after:transition-all after:duration-300 ${
                        isActive
                          ? 'text-leoGold after:w-full'
                          : 'text-slate-200 hover:text-leoGold after:w-0 hover:after:w-full'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Instagram Action Button */}
            <a
              href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-leoGold to-amber-600 hover:from-amber-600 hover:to-leoGold text-white font-bold px-4 py-2 rounded-full text-xs shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Instagram size={14} />
              <span>Instagram</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-slate-200 hover:text-white p-2 rounded-lg focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[65px] bg-leoNavy border-b border-slate-800 transition-all duration-350 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-6' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 space-y-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-semibold transition-colors duration-200 py-2 border-b border-slate-800 ${
                      isActive ? 'text-leoGold' : 'text-slate-200 hover:text-leoGold'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <a
              href="https://www.instagram.com/leoclubofhopeville?igsh=MWowMGhlejV0bGdwbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-leoGold to-amber-600 text-white font-semibold py-3 rounded-xl text-sm shadow-md transition-all duration-200"
            >
              <Instagram size={18} />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
