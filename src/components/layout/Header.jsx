import React from 'react';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative z-50">
      <Navbar />
      {/* spacer to push page content down below the sticky navbar */}
      <div className="h-20 md:h-24 bg-femsa-navy" />
    </header>
  );
}
