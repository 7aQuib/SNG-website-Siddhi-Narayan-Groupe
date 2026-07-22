'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    window.toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add solid glass background when scrolled past 20px
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down (> 100px), show on scroll up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !isMenuOpen) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e, hash) => {
    if (pathname === '/') {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(hash);
      } else {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Smart Sticky Top Navigation */}
      <nav
        className={`nav ${isScrolled ? 'nav-solid' : ''}`}
        id="main-nav"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.4s, padding 0.4s',
        }}
      >
        <div className="container nav-inner">
          <Link href="/" className="nav-logo">
            SNG
            <span className="nav-logo-sub">Siddhi Narayan Group</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links hidden md:flex items-center gap-8 list-none m-0 p-0">
            <li>
              <Link href="/about" className={pathname === '/about' ? 'text-[var(--accent)]' : ''}>
                About SNG
              </Link>
            </li>
            <li>
              <a href={pathname === '/' ? '#experience' : '/#experience'} onClick={(e) => handleNavClick(e, '#experience')}>
                Residences
              </a>
            </li>
            <li>
              <a href={pathname === '/' ? '#about' : '/#about'} onClick={(e) => handleNavClick(e, '#about')}>
                Philosophy
              </a>
            </li>
            <li>
              <a href={pathname === '/' ? '#projects' : '/#projects'} onClick={(e) => handleNavClick(e, '#projects')}>
                Projects
              </a>
            </li>
            <li>
              <a href={pathname === '/' ? '#map' : '/#map'} onClick={(e) => handleNavClick(e, '#map')}>
                Legacy
              </a>
            </li>
            <li>
              <a href={pathname === '/' ? '#contact' : '/#contact'} onClick={(e) => handleNavClick(e, '#contact')}>
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-right flex items-center gap-4">
            <a href="#contact" className="nav-cta hidden sm:inline-flex" onClick={(e) => handleNavClick(e, '#contact')}>
              Enquire
              <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
              </svg>
            </a>
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
