import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import StripeShape from '../ui/StripeShape';
import { businessSegments } from '../../data/businessSegments';
import { tradingServices } from '../../data/tradingServices';

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Search logic covering business divisions, trading services, and navigation
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    const results = [];

    // Search Femsa Group Business segments
    businessSegments.forEach(segment => {
      if (
        segment.name.toLowerCase().includes(q) ||
        segment.title.toLowerCase().includes(q) ||
        segment.description.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Business Division',
          title: segment.name,
          subtitle: segment.title,
          desc: segment.description,
          link: segment.link
        });
      }
    });

    // Search Trading Sourcing Services
    tradingServices.forEach(service => {
      const matchInItems = service.items.some(item => item.toLowerCase().includes(q));
      if (
        service.title.toLowerCase().includes(q) ||
        service.description.toLowerCase().includes(q) ||
        matchInItems
      ) {
        results.push({
          type: 'Trading Service',
          title: service.title,
          subtitle: 'Femsa Global Trading',
          desc: service.description,
          link: `/trading/services#${service.id}`
        });
      }
    });

    // Search Pages
    const pages = [
      { name: 'Femsa Group About Us', desc: 'Holding mission, vision, core values, and governance structures.', link: '/about' },
      { name: 'Femsa Group Contacts', desc: 'Dar es Salaam headquarters contact details, email, and P.O. Box address.', link: '/contact' },
      { name: 'Global Trading About', desc: 'MD message, differentiators, and corporate leadership profiles.', link: '/trading/about' },
      { name: 'Global Trading Why Partner', desc: 'Manufacturer benefits, industrial customer benefits, and key performance indicators.', link: '/trading/why-partner' },
      { name: 'Global Trading Sourcing RFQ', desc: 'Request an RFQ quote for equipment, packaging, parts, or consumables.', link: '/trading/contact' }
    ];

    pages.forEach(page => {
      if (page.name.toLowerCase().includes(q) || page.desc.toLowerCase().includes(q)) {
        results.push({
          type: 'Page Navigation',
          title: page.name,
          subtitle: 'Site Link',
          desc: page.desc,
          link: page.link
        });
      }
    });

    setSearchResults(results);
  };

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
              onClick={() => setIsSearchOpen(true)}
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
              onClick={() => setIsSearchOpen(true)}
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

      {/* Search Modal Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-femsa-navy/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col border border-slate-100 relative">
            <StripeShape color="orange" count={1} position="top-right" size="small" opacity="opacity-[0.03]" />
            
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-slate-100 px-4 py-3 bg-femsa-smoke">
              <svg className="w-6 h-6 text-femsa-navy mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                autoFocus
                placeholder="Search Femsa Group & Global Trading..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full bg-transparent border-none text-femsa-navy placeholder-slate-400 focus:outline-none font-body text-base py-2"
              />
              <button
                type="button"
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery('');
                  setSearchResults([]);
                }}
                className="p-1 rounded text-slate-400 hover:text-femsa-orange hover:bg-slate-200/50 transition-colors"
                aria-label="Close search"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Results Panel */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
              {!searchQuery.trim() ? (
                <div className="text-center py-12 text-slate-400 font-body">
                  <p className="text-sm font-semibold uppercase tracking-wider text-femsa-navy/60 mb-2">Search capabilities active</p>
                  <p className="text-xs">Type a service, division, or value to search across the group...</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-12 text-slate-400 font-body">
                  <p className="text-sm font-semibold mb-1 text-femsa-navy/60">No results found</p>
                  <p className="text-xs">We couldn't find any divisions or services matching "{searchQuery}"</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-xs font-heading font-black tracking-widest text-slate-400 uppercase pb-2 border-b border-slate-100">
                    Results ({searchResults.length})
                  </p>
                  {searchResults.map((result, idx) => (
                    <Link
                      key={idx}
                      to={result.link}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                        setSearchResults([]);
                      }}
                      className="block p-4 rounded hover:bg-femsa-smoke border border-slate-100 hover:border-slate-200 transition-all duration-200 group text-left"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-heading font-extrabold uppercase text-femsa-orange tracking-wider">
                          {result.type}
                        </span>
                        <span className="text-[10px] text-slate-400 font-body">
                          {result.subtitle}
                        </span>
                      </div>
                      <h4 className="text-sm font-heading font-black text-femsa-navy group-hover:text-femsa-orange transition-colors uppercase">
                        {result.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 font-body leading-relaxed">
                        {result.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
