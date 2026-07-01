import React from 'react';
import { Link } from 'react-router-dom';
import StripeShape from './StripeShape';

const SegmentIcon = ({ name, className = "w-8 h-8" }) => {
  // Brand color accents
  const strokeColor = "#f96419"; 
  switch (name) {
    case 'TradingIcon':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
    case 'LegalIcon':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      );
    case 'FinanceIcon':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'HealthIcon':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 10.5V20a2 2 0 01-2 2H7a2 2 0 01-2-2v-9.5m14 0V9a2 2 0 00-2-2h-3m3 3.5L19 7m-14 3.5V9a2 2 0 012-2h3m-3 3.5L5 7m14 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v2m8 4h-2m0 0H9m2 0v2m0-2v-2" />
        </svg>
      );
    case 'EducationIcon':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'AgriIcon':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.657 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      );
    default:
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
  }
};

export default function SegmentCard({ segment }) {
  const { id, name, title, description, link, iconName } = segment;

  // We can render direct react-router Links to internal pages
  const isInternal = link.startsWith('/');

  const Content = (
    <>
      <StripeShape
        color="orange"
        count={2}
        position="bottom-right"
        size="medium"
        className="opacity-0 group-hover:opacity-[0.12] transition-all duration-500 transform translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"
      />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          <div className="mb-8 flex justify-between items-center">
            <div className="p-4 bg-femsa-smoke group-hover:bg-white/10 text-femsa-orange group-hover:text-femsa-orange rounded transition-colors duration-300">
              <SegmentIcon name={iconName} className="w-10 h-10" />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-white/40 font-heading font-extrabold">
              Femsa Holding
            </span>
          </div>

          <h3 className="text-2xl font-heading font-black text-femsa-navy group-hover:text-white mb-2 transition-colors duration-300">
            {name}
          </h3>

          <p className="text-xs uppercase tracking-wider text-femsa-orange font-heading font-extrabold mb-5">
            {title}
          </p>

          <p className="text-sm text-slate-600 group-hover:text-slate-200 leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 group-hover:border-white/10 transition-colors duration-300">
          <span className="inline-flex items-center text-xs uppercase tracking-widest font-heading font-black text-femsa-orange group-hover:text-white transition-colors duration-300">
            <span>Explore Division</span>
            <svg
              className="w-4 h-4 ml-2 transition-transform duration-300 transform group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );

  const cardClasses = "relative overflow-hidden bg-white hover:bg-femsa-navy group rounded border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between h-full p-8 md:p-10 cursor-pointer";

  if (isInternal) {
    return (
      <Link id={id} to={link} className={cardClasses}>
        {Content}
      </Link>
    );
  }

  return (
    <a id={id} href={link} className={cardClasses}>
      {Content}
    </a>
  );
}
