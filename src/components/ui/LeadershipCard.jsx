import React from 'react';

export default function LeadershipCard({ member }) {
  const { name, role, description } = member;

  // Placeholder avatar SVG if image is missing
  return (
    <div className="bg-white border border-slate-100 rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      {/* Profile Image container */}
      <div className="relative aspect-[4/5] bg-femsa-navy/5 overflow-hidden">
        {/* TODO: replace with real photography */}
        <div className="absolute inset-0 flex items-center justify-center bg-femsa-navy/10 text-femsa-navy opacity-40 group-hover:bg-femsa-navy/20 transition-colors duration-300 z-10 pointer-events-none">
          <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        
        {/* Render a high-quality, professional corporate portrait placeholder */}
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
          alt={`Professional portrait of ${name}, ${role} at Femsa Global Trading Limited`}
          className="w-full h-full object-cover filter grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-femsa-navy/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Information Area */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-heading font-black text-femsa-navy mb-1 group-hover:text-femsa-orange transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs font-heading font-extrabold text-femsa-orange uppercase tracking-wider mb-4">
            {role}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center">
          <span className="text-[10px] uppercase font-heading font-black tracking-widest text-slate-400">
            Femsa Global Team
          </span>
        </div>
      </div>
    </div>
  );
}
