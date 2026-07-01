import logoDefault from '../../assets/logo/logo-default.svg';
import logoReverse from '../../assets/logo/logo-reverse.svg';
import logoIcon from '../../assets/logo/logo-icon.svg';

export default function Logo({ variant = 'default', className = '' }) {
  let src = logoDefault;
  
  if (variant === 'reverse') {
    src = logoReverse;
  } else if (variant === 'icon-only') {
    src = logoIcon;
  }

  return (
    <img
      src={src}
      alt="Femsa Logo"
      className={`h-12 w-auto object-contain transition-opacity duration-200 ${className}`}
    />
  );
}
