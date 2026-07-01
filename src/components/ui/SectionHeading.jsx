import React from 'react';

export default function SectionHeading({
  title = '',
  subtitle = '',
  align = 'left', // 'left' | 'center'
  textColor = 'navy', // 'navy' | 'white'
  className = ''
}) {
  if (!title) return null;

  const words = title.trim().split(/\s+/);
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(' ');

  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const mainColorClass = textColor === 'white' ? 'text-white' : 'text-femsa-navy';

  return (
    <div className={`flex flex-col mb-12 ${alignmentClass} ${className}`}>
      {subtitle && (
        <span className="text-femsa-orange font-heading font-extrabold text-xs md:text-sm uppercase tracking-widest mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-heading font-black leading-none uppercase tracking-tight">
        <span className={mainColorClass}>{firstWord}</span>
        {remainingWords && <span className="text-femsa-orange"> {remainingWords}</span>}
      </h2>
      <div 
        className={`h-1.5 w-16 bg-femsa-orange mt-4 rounded-full ${
          align === 'center' ? 'mx-auto' : ''
        }`} 
      />
    </div>
  );
}
