'use client';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            SNG
            <span className="nav-logo-sub" style={{ marginTop: "2px" }}>Sunrise Legacy</span>
          </div>
          <ul className="footer-links">
            <li><Link href="/about">About SNG</Link></li>
            <li><a href="#experience">Residences</a></li>
            <li><a href="#about">Philosophy</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#map">Legacy</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Link href="/privacy">Privacy Policy</Link></li>
          </ul>
          <div className="footer-socials">
            <a href="#" className="social-icon-btn">IN</a>
            <a href="#" className="social-icon-btn">FB</a>
            <a href="#" className="social-icon-btn">YT</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 SNG Sunrise Legacy. All Rights Reserved.
          </div>
          <div className="footer-credit">
            Designed in collaboration with <a href="#">Atelier Zero</a> &amp;
            <a href="#">Kengo Kuma</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
