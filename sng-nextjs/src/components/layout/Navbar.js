'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Expose toggleMenu to window if existing scripts rely on it
  useEffect(() => {
    window.toggleMenu = () => setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, hash) => {
    if (pathname === '/') {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(hash);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      {/* Sticky Top Navigation */}
      <nav className="nav" id="main-nav">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo">
            SNG
            <span className="nav-logo-sub">Siddhi Narayan Group</span>
          </Link>
          <div className="nav-right">
            <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} aria-label="Toggle Menu" onClick={toggleMenu}>
              <div className="menu-toggle-inner">
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMenuOpen ? 'active' : ''}`} id="mobileDrawer">
        <ul className="mobile-drawer-links">
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About SNG</Link></li>
          <li><a href={pathname === '/' ? '#experience' : '/#experience'} onClick={(e) => handleNavClick(e, '#experience')}>Residences</a></li>
          <li><a href={pathname === '/' ? '#about' : '/#about'} onClick={(e) => handleNavClick(e, '#about')}>Philosophy</a></li>
          <li><a href={pathname === '/' ? '#projects' : '/#projects'} onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href={pathname === '/' ? '#map' : '/#map'} onClick={(e) => handleNavClick(e, '#map')}>Legacy</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
        <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, '#contact')}>
          Enquire Now
          <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
            <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
          </svg>
        </a>
      </div>
    </>
  );
}
