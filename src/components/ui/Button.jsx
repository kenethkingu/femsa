import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'navy' | 'outline-navy' | 'outline-orange' | 'white' | 'outline-white'
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) {
  const baseClasses = 'inline-flex items-center justify-center font-heading font-bold text-sm uppercase tracking-wider rounded px-6 py-3.5 transition-all duration-300 transform active:scale-97 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-femsa-orange focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-femsa-orange text-white hover:bg-femsa-navy',
    secondary: 'border-2 border-femsa-navy text-femsa-navy hover:bg-femsa-navy hover:text-white',
    navy: 'bg-femsa-navy text-white hover:bg-femsa-orange',
    'outline-navy': 'border-2 border-femsa-navy text-femsa-navy hover:bg-femsa-navy hover:text-white',
    'outline-orange': 'border-2 border-femsa-orange text-femsa-orange hover:bg-femsa-orange hover:text-white',
    white: 'bg-white text-femsa-navy hover:bg-femsa-orange hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-femsa-navy',
  };

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
