import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { buttonHover, buttonTap, SPRING } from '../../lib/motionVariants';

const MotionLink = motion.create(Link);

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false
}) {
  const shouldReduce = useReducedMotion();
  const hoverAnim  = shouldReduce ? {} : buttonHover;
  const tapAnim    = shouldReduce ? {} : buttonTap;
  const transition = shouldReduce ? {} : SPRING;

  const baseClasses = 'inline-flex items-center justify-center font-heading font-bold text-sm uppercase tracking-wider rounded px-6 py-3.5 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-femsa-orange focus:ring-offset-2';

  const variantClasses = {
    primary:          'bg-femsa-orange text-white hover:bg-femsa-navy',
    secondary:        'border-2 border-femsa-navy text-femsa-navy hover:bg-femsa-navy hover:text-white',
    navy:             'bg-femsa-navy text-white hover:bg-femsa-orange',
    'outline-navy':   'border-2 border-femsa-navy text-femsa-navy hover:bg-femsa-navy hover:text-white',
    'outline-orange': 'border-2 border-femsa-orange text-femsa-orange hover:bg-femsa-orange hover:text-white',
    white:            'bg-white text-femsa-navy hover:bg-femsa-orange hover:text-white',
    'outline-white':  'border-2 border-white text-white hover:bg-white hover:text-femsa-navy',
  };

  const classes = `${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`;

  if (to) {
    return (
      <MotionLink
        to={to}
        className={classes}
        onClick={onClick}
        whileHover={hoverAnim}
        whileTap={tapAnim}
        transition={transition}
      >
        {children}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={hoverAnim}
        whileTap={tapAnim}
        transition={transition}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : hoverAnim}
      whileTap={disabled ? {} : tapAnim}
      transition={transition}
    >
      {children}
    </motion.button>
  );
}
