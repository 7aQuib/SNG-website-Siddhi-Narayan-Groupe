'use client';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function DotNav() {
  const pathname = usePathname();

  // If not on the homepage, these could link back to /#section 
  const getHref = (hash) => (pathname === '/' ? hash : `/${hash}`);

  const handleNavClick = (e, hash) => {
    if (pathname === '/') {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(hash);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="dot-nav">
      <a href={getHref('#home')} onClick={(e) => handleNavClick(e, '#home')} className="dot-nav-item active" data-section="home">
        <span className="dot-nav-label">Home</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#experience')} onClick={(e) => handleNavClick(e, '#experience')} className="dot-nav-item" data-section="experience">
        <span className="dot-nav-label">Residences</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#amenities')} onClick={(e) => handleNavClick(e, '#amenities')} className="dot-nav-item" data-section="amenities">
        <span className="dot-nav-label">Sanctum</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#about')} onClick={(e) => handleNavClick(e, '#about')} className="dot-nav-item" data-section="about">
        <span className="dot-nav-label">Philosophy</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#testimonials')} onClick={(e) => handleNavClick(e, '#testimonials')} className="dot-nav-item" data-section="testimonials">
        <span className="dot-nav-label">Voices</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#faq')} onClick={(e) => handleNavClick(e, '#faq')} className="dot-nav-item" data-section="faq">
        <span className="dot-nav-label">FAQ</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#projects')} onClick={(e) => handleNavClick(e, '#projects')} className="dot-nav-item" data-section="projects">
        <span className="dot-nav-label">Portfolio</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href={getHref('#map')} onClick={(e) => handleNavClick(e, '#map')} className="dot-nav-item" data-section="map">
        <span className="dot-nav-label">Presence</span>
        <span className="dot-nav-dot"></span>
      </a>
      <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="dot-nav-item" data-section="contact">
        <span className="dot-nav-label">Contact</span>
        <span className="dot-nav-dot"></span>
      </a>
    </nav>
  );
}
