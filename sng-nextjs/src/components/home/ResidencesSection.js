
import React from 'react';
import Image from 'next/image';

export default function ResidencesSection() {
  return (
    <section id="experience" className="reveal">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">01 / Concept</span>
          <h2 className="section-title">
            The <em>Luxury</em> of Pure Form<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <div className="pasr-grid">
          {/* Card 1 */}
          <div className="pasr-card">
            <span className="pasr-card-num">01</span>
            <h3 className="pasr-card-title">Spatial Purity</h3>
            <p className="pasr-card-body">
              Reinterpreting the traditional machiya structure through a
              dialogue of negative space and monumental scale.
            </p>
            <a href="#contact" className="pasr-card-link">
              Learn More
              <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
              </svg>
            </a>
          </div>
          {/* Card 2 */}
          <div className="pasr-card">
            <span className="pasr-card-num">02</span>
            <h3 className="pasr-card-title">Raw Materials</h3>
            <p className="pasr-card-body">
              A meticulous curation of honed travertine, carbon-charred cedar
              wood, and sand-cast blackened bronze detailing.
            </p>
            <a href="#contact" className="pasr-card-link">
              Learn More
              <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
              </svg>
            </a>
          </div>
          {/* Card 3 */}
          <div className="pasr-card">
            <span className="pasr-card-num">03</span>
            <h3 className="pasr-card-title">Light &amp; Shadow</h3>
            <p className="pasr-card-body">
              Architectural framing built to track the daily sun cycle, turning
              walls into living canvases of volumetric shadows.
            </p>
            <a href="#contact" className="pasr-card-link">
              Learn More
              <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
              </svg>
            </a>
          </div>
          {/* Card 4 */}
          <div className="pasr-card">
            <span className="pasr-card-num">04</span>
            <h3 className="pasr-card-title">Sanctuary Life</h3>
            <p className="pasr-card-body">
              Subterranean geothermal onsens, meditative tea houses, and
              wellness pavilions for spiritual centering.
            </p>
            <a href="#contact" className="pasr-card-link">
              Learn More
              <svg style={{ width: "10px", height: "10px", fill: "currentColor" }} viewBox="0 0 24 24">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
