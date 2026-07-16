
import React from 'react';
import Image from 'next/image';

export default function AmenitiesSection() {
  return (
    <section id="amenities" className="reveal">
      <div className="container amenities-grid">
        <div className="amenities-left">
          <span className="eyebrow">02 / Sanctum</span>
          <h2 className="section-title">
            The Healing <em>Ritual</em><span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="amenities-desc" style={{ marginTop: "var(--space-4)" }}>
            Every residence contains custom architectural spaces dedicated to
            mental clarity and body healing. Private onsen pools filled with
            Kyoto's geothermal hot springs, cedar-paneled tea pavilions, and
            yoga decks designed in absolute isolation.
          </p>
          <a href="#contact" className="btn btn-secondary">
            View Project
            <svg style={{ width: "10px", height: "10px", fill: "currentColor", marginLeft: "4px" }} viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
            </svg>
          </a>
        </div>

        <div className="amenities-collage">
          {/* Vertical image left side */}
          <div className="collage-vertical">
            <div className="collage-img-wrapper">
              <img className="collage-img" src="/assets/amenity_pool.jpg" alt="The Onsen Sanctuary" />
              <span className="collage-caption">The Onsen Sanctuary</span>
            </div>
          </div>

          {/* 2x2 grid right side */}
          <div className="collage-subgrid">
            <div className="collage-img-wrapper">
              <img className="collage-img" src="/assets/residence_interior.jpg" alt="The Grand Living" />
              <span className="collage-caption">Living Sanctuary</span>
            </div>
            <div className="collage-img-wrapper">
              <img className="collage-img" src="/assets/marble_detail.jpg" alt="Travertine Detail" />
              <span className="collage-caption">Tactility Spec</span>
            </div>
            <div className="collage-img-wrapper">
              <img className="collage-img" src="/assets/hero_residence.jpg" alt="Niwa Garden" />
              <span className="collage-caption">Central Garden</span>
            </div>
            <div className="collage-img-wrapper">
              <img className="collage-img" src="/assets/residence_interior.jpg" alt="Hinoki Spa" />
              <span className="collage-caption">Hinoki Spa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
