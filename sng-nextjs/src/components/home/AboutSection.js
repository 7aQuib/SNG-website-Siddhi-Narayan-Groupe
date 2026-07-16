
import React from 'react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="about-section reveal">
      <div className="container about-grid">
        <div className="about-image">
          <img src="/assets/hero_residence.jpg" alt="Aura Residences Kyoto Exterior" />
        </div>

        <div className="about-right">
          <span className="eyebrow">03 / Philosophy</span>
          <h2 className="about-title">
            A Collaboration of <em>Heritage</em> &amp; Monolith<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="about-p">
            Aura Kyoto represents a historic partnership between Aman Resorts
            and the architectural studio of Atelier Zero, working alongside
            master craftsman Kengo Kuma.
          </p>
          <p className="about-p" style={{ color: "var(--fg-2)", fontSize: "var(--text-sm)" }}>
            The residence facades are built from raw blocks of Italian
            travertine stone designed to weather naturally over centuries.
            Floorplans are laid out around floating inner gravel basins,
            mirroring Kyoto's ancient temple gardens, preserving complete
            privacy while letting the changing shadows of Higashiyama flow
            through the glass walls.
          </p>
          <a href="#contact" className="btn btn-secondary" style={{ marginTop: "var(--space-4)" }}>
            Read Studio Monograph
            <svg style={{ width: "10px", height: "10px", fill: "currentColor", marginLeft: "4px" }} viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
