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
            <button className="accordion-header" onClick={(e) => window.toggleAccordion && window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">What is Siddhi Narayan Group (SNG)?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                Siddhi Narayan Group (SNG) is a premier real estate developer founded in 1993 by Shri. Narayan Machha. With over 33+ years of architectural excellence, SNG crafts luxury residential and commercial developments focused on quality, transparency, and timely delivery.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={(e) => window.toggleAccordion && window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">Where are SNG's developments located?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                Our flagship developments and pipeline projects are strategically situated in prime locations across Thane, the Bhiwandi-Kalyan corridor, and the Mumbai Metropolitan Region (MMR), providing excellent connectivity to major transport hubs and business centers.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={(e) => window.toggleAccordion && window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">Are all SNG projects MahaRERA registered?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                Yes, absolute transparency is core to SNG's philosophy. All SNG projects, including Shivam Residency (Thane Next), strictly adhere to MahaRERA guidelines and possess full statutory clearances.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <button className="accordion-header" onClick={(e) => window.toggleAccordion && window.toggleAccordion(e.currentTarget)}>
              <span className="accordion-title">How can I schedule a site visit or inquiry?</span>
              <span className="accordion-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                </svg>
              </span>
            </button>
            <div className="accordion-content">
              <div className="accordion-content-inner">
                You can easily arrange a private site visit by filling out our online inquiry form below, or by directly contacting our executive desk at contact@siddhinarayan.com. Our relationship manager will assist you with floor plans and booking procedures.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
