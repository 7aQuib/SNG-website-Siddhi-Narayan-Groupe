'use client';
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <canvas id="hero-canvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">Higashiyama, Kyoto</div>
        <h1 className="hero-title">
          The Poetry of <em>Shadow</em> &amp; Stone<span style={{ color: "var(--accent)" }}>.</span>
        </h1>
        <p className="hero-tagline">
          An Aman-Inspired Sanctuary designed by Kengo Kuma &amp; Associates ×
          Atelier Zero
        </p>
        <div className="hero-actions">
          <a href="#experience" className="btn btn-primary">
            Explore Residences
            <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
            </svg>
          </a>
          <a href="#contact" className="btn btn-secondary">
            Arrange Visit
            <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Floating Video Preview Card on Hero Bottom Left */}
      <div className="hero-video-card" onClick={() => window.openVideoModal()}>
        <div className="video-thumb">
          <img src="/assets/hero_residence.jpg" alt="Video thumbnail" />
          <div className="video-play-btn">
            <svg viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          </div>
        </div>
        <div className="video-card-meta">
          <span className="video-card-title">PASR Experience</span>
          <span className="video-card-desc">Cinematic Spatial Walkthrough</span>
        </div>
      </div>
    </section>
  );
}
