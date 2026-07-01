import React from 'react';

export default function LeadershipCard({ member }) {
  const { name, role, description, initials, isVacant } = member;

  return (
    <div className={`bg-white border rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full ${
      isVacant ? 'border-dashed border-slate-300 bg-slate-50/30' : 'border-slate-100 bg-white'
    }`}>
      {/* Profile Image / Silhouette Placeholder Container */}
      <div className="relative aspect-[4/5] bg-femsa-navy/5 overflow-hidden flex items-center justify-center">
        {isVacant ? (
          // Vacant Silhouette Placeholder
          <div className="absolute inset-0 bg-gradient-to-br from-femsa-smoke to-slate-200 flex flex-col items-center justify-center p-6 text-center">
            <svg className="w-16 h-16 text-slate-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            <span className="text-xs uppercase font-heading font-extrabold tracking-wider text-slate-400 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-sm">
              Role Open
            </span>
          </div>
        ) : (
          // Initials Brand Avatar
          <div className="absolute inset-0 bg-gradient-to-tr from-femsa-navy to-[#052d9a] flex items-center justify-center text-white relative">
            <div className="absolute inset-0 opacity-10">
              {/* Slanted lines for depth */}
              <svg width="100%" height="100%">
                <line x1="-10%" y1="10%" x2="110%" y2="130%" stroke="#FFFFFF" strokeWidth="4" />
                <line x1="-10%" y1="30%" x2="110%" y2="150%" stroke="#FFFFFF" strokeWidth="4" />
                <line x1="-10%" y1="50%" x2="110%" y2="170%" stroke="#FFFFFF" strokeWidth="4" />
              </svg>
            </div>
            <span className="text-6xl font-heading font-black tracking-tighter text-white/95">
              {initials}
            </span>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <span className="text-[10px] uppercase font-heading font-black tracking-widest text-femsa-orange">
                Active Member
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Information Area */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          <h3 className={`text-xl font-heading font-black mb-1 group-hover:text-femsa-orange transition-colors duration-300 uppercase ${
            isVacant ? 'text-slate-500 italic' : 'text-femsa-navy'
          }`}>
            {name}
          </h3>
          <p className="text-xs font-heading font-extrabold text-femsa-orange uppercase tracking-wider mb-4">
            {role}
          </p>
          <p className="text-sm text-slate-600 leading-relaxed font-body">
            {description}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center">
          <span className="text-[10px] uppercase font-heading font-black tracking-widest text-slate-400">
            Femsa Global Team
          </span>
        </div>
      </div>
    </div>
  );
}
