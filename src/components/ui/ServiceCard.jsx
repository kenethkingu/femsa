import React from 'react';
import StripeShape from './StripeShape';

export default function ServiceCard({ service }) {
  const { title, description, items } = service;

  return (
    <div className="relative overflow-hidden bg-white border border-slate-100 rounded p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
      {/* Corner visual accent */}
      <StripeShape
        color="orange"
        count={2}
        position="top-right"
        size="small"
        className="opacity-0 group-hover:opacity-[0.08] transition-opacity duration-300"
      />

      <div>
        <h3 className="text-2xl font-heading font-black text-femsa-navy mb-3">
          {title}
        </h3>
        
        <p className="text-sm text-slate-600 mb-6 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-3.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm text-slate-700">
              <span className="text-femsa-orange mr-3 mt-1 flex-shrink-0">
                {/* Custom checkmark / radial sunburst dot */}
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </span>
              <span className="font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-50 flex items-center justify-between">
        <span className="text-xs uppercase font-heading font-extrabold tracking-widest text-femsa-orange">
          B2B Sourcing Available
        </span>
        <span className="h-2 w-2 rounded-full bg-femsa-orange animate-pulse" />
      </div>
    </div>
  );
}
