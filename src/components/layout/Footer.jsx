import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../ui/Logo';
import Button from '../ui/Button';

export default function Footer() {
  const { pathname } = useLocation();
  const [email, setEmail] = useState('');
  const isTrading = pathname.startsWith('/trading');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-femsa-navy text-white relative overflow-hidden">
      {/* Decorative Brand Shards in background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="footer-pattern" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 0,80 L 80,0 M -10,10 L 10,-10 M 70,90 L 90,70" stroke="#f96419" strokeWidth="2" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      {/* "Let's Collaborate" top banner - matches design */}
      <div className="relative z-10 border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-black text-white leading-tight">
              Let's Collaborate <br />
              <span className="text-femsa-orange">To Growth.</span>
            </h2>
          </div>
          <Button to={isTrading ? '/trading/contact' : '/contact'} variant="primary" className="flex-shrink-0">
            Explore Now &nbsp;→
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}

          <div className="space-y-6">
            <Link to={isTrading ? '/trading' : '/'}>
              <Logo variant="reverse" className="h-10 md:h-12" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed font-body">
              {isTrading
                ? 'Femsa Global Trading Limited is a leading B2B procurement agency connecting world-class manufacturers with industrial customers in Tanzania and East Africa.'
                : 'Femsa Group is a diversified Tanzanian holding company driving growth across Legal, Trading, Microfinance, Healthcare, Education, and Agricultural sectors.'}
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="p-2 bg-white/5 hover:bg-femsa-orange rounded transition-colors duration-300 text-white" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="p-2 bg-white/5 hover:bg-femsa-orange rounded transition-colors duration-300 text-white" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com" className="p-2 bg-white/5 hover:bg-femsa-orange rounded transition-colors duration-300 text-white" target="_blank" rel="noopener noreferrer" aria-label="Connect on LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="p-2 bg-white/5 hover:bg-femsa-orange rounded transition-colors duration-300 text-white" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md uppercase font-heading font-black tracking-wider text-femsa-orange mb-6">
              Navigation
            </h4>
            <ul className="space-y-3">
              {isTrading ? (
                <>
                  <li>
                    <Link to="/trading" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      Trading Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/trading/services" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      Sourcing Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/trading/about" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      About Trading
                    </Link>
                  </li>
                  <li>
                    <Link to="/trading/contact" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      Request B2B Quote
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-sm text-femsa-orange hover:underline font-bold mt-2 inline-block">
                      ← Go to Femsa Group
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      Group Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      About Femsa Group
                    </Link>
                  </li>
                  <li>
                    <Link to="/businesses" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      Holding Businesses
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="text-sm text-slate-300 hover:text-white transition-colors duration-300">
                      Contact Group
                    </Link>
                  </li>
                  <li>
                    <Link to="/trading" className="text-sm text-femsa-orange hover:underline font-bold mt-2 inline-block">
                      Go to Global Trading →
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-md uppercase font-heading font-black tracking-wider text-femsa-orange mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-femsa-orange mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <span className="text-sm text-slate-300">
                  {isTrading
                    ? 'Femsa Global Trading Limited, P.O. Box 40310 Dar es Salaam, Tanzania'
                    : 'P.O. Box 40310, Dar es Salaam, Tanzania'}
                </span>
              </li>
              {isTrading && (
                <li className="flex items-start">
                  <span className="text-femsa-orange mr-3 mt-1 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-300">+255 761 351 371</span>
                </li>
              )}
              <li className="flex items-start">
                <span className="text-femsa-orange mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <a
                  href={`mailto:${isTrading ? 'info@myfemsa.com' : 'info@femsa.com'}`}
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
                >
                  {isTrading ? 'info@myfemsa.com' : 'info@femsa.com'}
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-femsa-orange mr-3 mt-1 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </span>
                <span className="text-sm text-slate-300">
                  {isTrading ? 'www.myfemsa.com' : 'www.femsa.com'}
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div>
            <h4 className="text-md uppercase font-heading font-black tracking-wider text-femsa-orange mb-6">
              Stay Connected
            </h4>
            <p className="text-sm text-slate-300 mb-4 leading-relaxed font-body">
              Subscribe to receive Femsa announcements and market intelligence insights.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2.5 bg-white/5 border border-white/10 rounded focus:outline-none focus:border-femsa-orange text-white text-sm"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-femsa-orange hover:bg-white text-white hover:text-femsa-navy font-heading font-bold text-xs uppercase tracking-wider rounded transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Femsa Group. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors duration-300">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
