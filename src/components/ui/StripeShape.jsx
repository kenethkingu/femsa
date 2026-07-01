import React from 'react';

export default function StripeShape({
  color = 'orange',
  count = 3,
  position = 'top-right',
  size = 'medium',
  className = '',
  opacity = 'opacity-30'
}) {
  // Map color to brand hex codes
  const colorMap = {
    orange: '#f96419',
    white: '#FFFFFF',
    navy: '#032177',
  };
  const fillColor = colorMap[color] || color;

  // Map pre-defined size categories or pass direct styles
  const sizeClasses = {
    small: 'w-24 h-24 md:w-32 md:h-32',
    medium: 'w-48 h-48 md:w-64 md:h-64',
    large: 'w-72 h-72 md:w-[350px] md:h-[350px]',
    xl: 'w-[400px] h-[400px] md:w-[600px] md:h-[600px]',
  };
  const dimensions = sizeClasses[size] || size;

  // Determine anchor placement classes
  const posClasses = {
    'top-right': 'top-0 right-0 origin-top-right',
    'top-left': 'top-0 left-0 origin-top-left',
    'bottom-right': 'bottom-0 right-0 origin-bottom-right',
    'bottom-left': 'bottom-0 left-0 origin-bottom-left',
  };
  const positionClass = posClasses[position] || 'top-0 right-0';

  // Generate parallel slanted parallelogram stripes
  const stripes = Array.from({ length: Math.min(Math.max(count, 1), 6) }, (_, i) => {
    // Spacing offset between stripes
    const offset = i * 28;
    // Points forming diagonal bars slanted from top-right to bottom-left
    return (
      <polygon
        key={i}
        points={`${120 + offset},-40 ${150 + offset},-40 ${50 + offset},240 ${20 + offset},240`}
        fill={fillColor}
        opacity={1 - i * 0.2} // Premium depth gradient
      />
    );
  });

  // Dynamic rotations to orient the shards relative to their anchor corner
  const orientationClasses = {
    'top-right': '',
    'top-left': 'scale-x-[-1]', // flip horizontally
    'bottom-right': 'scale-y-[-1]', // flip vertically
    'bottom-left': 'scale-x-[-1] scale-y-[-1]', // flip both
  };
  const orientationClass = orientationClasses[position] || '';

  return (
    <div
      className={`absolute pointer-events-none ${positionClass} ${dimensions} ${orientationClass} overflow-hidden ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        {stripes}
      </svg>
    </div>
  );
}
