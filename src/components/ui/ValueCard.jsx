import React from 'react';

export default function ValueCard({ index, name, description }) {
  // Format the index to "01", "02", etc.
  const formattedIndex = String(index + 1).padStart(2, '0');

  return (
    <div className="relative overflow-hidden bg-white border border-slate-100 p-8 rounded shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
      {/* Top row showing index and accent */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl font-heading font-black text-femsa-orange/20 group-hover:text-femsa-orange transition-colors duration-300">
          {formattedIndex}
        </span>
        <div className="h-1.5 w-8 bg-femsa-navy group-hover:bg-femsa-orange transition-colors duration-300 rounded-full" />
      </div>

      <div>
        <h3 className="text-xl font-heading font-black text-femsa-navy mb-3">
          {name}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
