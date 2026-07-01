import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Check if we are in the trading subsite
  const isTrading = pathname.startsWith('/trading');

  // Listen to scroll to add background backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav when pathname changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Menu items for Group
  const groupLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/businesses' },
    { name: 'About Us', path: '/about' },
    { name: 'Contacts', path: '/contact' }
  ];

  // Menu items for Trading
  const tradingLinks = [
    { name: 'Home', path: '/trading' },
    { name: 'Services', path: '/trading/services' },
    { name: 'Why Partner', path: '/trading/why-partner' },
    { name: 'About Us', path: '/trading/about' },
    { name: 'Contacts', path: '/trading/contact' }
  ];

  const currentLinks = isTrading ? tradingLinks : groupLinks;

  // Active route checking
  const isActive = (path) => {
    if (path === '/' || path === '/trading') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-femsa-navy/95 backdrop-blur-md py-3 shadow-lg border-b border-white/5' 
          : 'bg-femsa-navy py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Brand area */}
          <div className="flex-shrink-0 flex items-center">
            <Link to={isTrading ? "/trading" : "/"} className="flex items-center gap-3">
              {/* Using reverse/white logo for navy navbar */}
              <Logo variant="reverse" className="h-10 md:h-12" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {currentLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-heading font-bold text-xs uppercase tracking-wider text-white hover:text-femsa-orange transition-colors duration-300 py-2 ${
                  isActive(link.path)
                    ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-femsa-orange text-femsa-orange'
                    : 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-transparent hover:after:bg-femsa-orange/50 after:transition-all after:duration-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Icon Placeholder */}
            <button 
              type="button" 
              className="p-2.5 text-white hover:text-femsa-orange transition-colors duration-300 bg-white/5 hover:bg-white/10 rounded"
              aria-label="Search site"
              onClick={() => alert("Search capability is a visual mockup demo.")}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {isTrading ? (
              <Button to="/" variant="primary" className="text-xs py-2.5 px-5">
                Femsa Group
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Button>
            ) : (
              <Button to="/trading" variant="primary" className="text-xs py-2.5 px-5">
                Quick Access
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-3">
            {/* Search Icon for mobile */}
            <button
              type="button"
              className="p-2 text-white hover:text-femsa-orange bg-white/5 rounded"
              onClick={() => alert("Search capability is a visual mockup demo.")}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded text-white hover:text-femsa-orange focus:outline-none bg-white/5"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 mt-2 border-t border-white/5' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-femsa-navy shadow-inner">
          {currentLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-3 rounded text-sm font-heading font-bold uppercase tracking-wider ${
                isActive(link.path)
                  ? 'bg-femsa-orange text-white'
                  : 'text-slate-200 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            {isTrading ? (
              <Button to="/" variant="outline-white" className="w-full text-xs">
                Back to Femsa Group
              </Button>
            ) : (
              <Button to="/trading" variant="primary" className="w-full text-xs">
                Go to Global Trading
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
