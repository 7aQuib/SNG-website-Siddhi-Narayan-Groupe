'use client';
import React from 'react';

export default function FAQSection() {
  return (
    <section id="faq" className="faq-section reveal">
      <div className="container faq-inner">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="eyebrow">05 / Details</span>
          <h2 className="section-title">
            Frequently Asked <em>Questions</em><span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>

        <div className="accordion">
          <div className="accordion-item">
            <button className="accordion-header" onClick={(e) => window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">What is SNG Sunrise Legacy?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                SNG Sunrise Legacy creates timeless residences that blend
                architecture, nature, and refined living. In collaboration with
                master architects, we design properties that embody warmth,
                trust, and ultimate sophistication.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={(e) => window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">Where are the residences located?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                Our flagship project is nestled in the historic Higashiyama
                district of Kyoto, Japan. Other completed and pipeline
                residences are strategically placed in Niseko, Tokyo, and
                Florence, matching historical context with spatial minimalism.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={(e) => window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">How can I enquire about a residence?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                Aura Residences are acquired strictly via our private digital
                registry. Please register your interest through our inquiry
                form, and a dedicated registry director will coordinate a
                confidential viewing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
