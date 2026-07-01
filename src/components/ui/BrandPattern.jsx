import React, { useId } from 'react';

export default function BrandPattern({
  color = 'navy',
  opacity = 'opacity-[0.05]',
  className = ''
}) {
  const id = useId().replace(/:/g, '');
  const fillColors = {
    navy: '#032177',
    orange: '#f96419',
    white: '#FFFFFF'
  };
  const fillColor = fillColors[color] || color;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id={`femsa-sunburst-pattern-${id}`}
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <g transform="translate(15, 15) scale(0.6)">
              {/* Radial rays */}
              <path
                d="M 25,5 L 25,11 M 25,39 L 25,45 M 5,25 L 11,25 M 39,25 L 45,25"
                stroke={fillColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M 11,11 L 15.5,15.5 M 34.5,34.5 L 39,39 M 11,39 L 15.5,34.5 M 34.5,11 L 39,15.5"
                stroke={fillColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Abstract center F representation in mini pattern */}
              <circle cx="25" cy="25" r="4" fill={fillColor} />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#femsa-sunburst-pattern-${id})`} />
      </svg>
    </div>
  );
}
