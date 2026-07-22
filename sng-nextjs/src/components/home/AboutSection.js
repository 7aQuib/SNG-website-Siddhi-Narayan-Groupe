import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="about-section reveal">
      <div className="container about-grid">
        <div className="about-image">
          <img src="/assets/33 years of legecy.png" alt="Siddhi Narayan Group 33 Years of Legacy" />
        </div>

        <div className="about-right">
          <span className="eyebrow">03 / Heritage</span>
          <h2 className="about-title">
            A Legacy Rooted in <em>Trust</em> &amp; Vision<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p className="about-p">
            Our journey began in 1993 as Sushmita Landmark—today proudly known as Siddhi Narayan Group (SNG). A Narayan Machha initiative built on transparency, craftsmanship, and customer delight.
          </p>
          <p className="about-p" style={{ color: "var(--fg-2)", fontSize: "var(--text-sm)" }}>
            Over the past 33 years, SNG has handed over dream homes to more than 3,000+ happy families across Thane and the Bhiwandi-Kalyan corridor. Under the leadership of Chairman Shri. Narayan Machha and second-generation visionary Mr. Sagar Machha (Civil Engineer &amp; MBA in Real Estate), SNG continues to set benchmarks in urban living.
          </p>
          <a href="/about" className="btn btn-secondary" style={{ marginTop: "var(--space-4)" }}>
            Explore SNG Legacy
            <svg style={{ width: "10px", height: "10px", fill: "currentColor", marginLeft: "4px" }} viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
