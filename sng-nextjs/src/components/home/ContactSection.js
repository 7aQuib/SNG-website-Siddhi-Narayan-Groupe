'use client';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="reveal">
      <div className="container inquiry-grid">
        {/* Left side: Contact Card with WebGL Sand Wave grid */}
        <div className="inquiry-left">
          <canvas id="inquire-bg-canvas"></canvas>

          <div className="inquiry-left-content">
            <span className="eyebrow">08 / Inquire</span>
            <h2 className="section-title">
              Begin Your <em>Journey</em><span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p style={{ color: "var(--fg-2)", fontSize: "var(--text-sm)", fontWeight: "400", marginTop: "var(--space-3)", lineHeight: "1.6" }}>
              Aura Residences Kyoto are acquired strictly via private
              appointment. Please register your request details to arrange a
              confidential viewing with our registry director.
            </p>
          </div>

          <div className="inquiry-contact-details">
            <div className="contact-item">
              <span className="contact-label">Telephone</span>
              <span className="contact-value">+81 75 555 0192</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Electronic Mail</span>
              <span className="contact-value"
                style={{ fontSize: "var(--text-base)", textTransform: "lowercase" }}>inquire@aura-residences.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Address</span>
              <span className="contact-value" style={{ fontSize: "var(--text-sm)" }}>Higashiyama-ku, Kyoto City, Kyoto Prefecture,
                Japan</span>
            </div>
          </div>
        </div>

        {/* Right side: Inquiry Form (SNG style) */}
        <div className="inquiry-right">
          <form id="inquiryForm" onSubmit={(e) => window.handleInquiry && window.handleInquiry(e)}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-input" placeholder="Enter your name" required="" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email" required="" />
            </div>
            <div className="form-group">
              <label className="form-label">Select Residence Type</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="residence-type" value="Residence" className="radio-input" defaultChecked />
                  <span className="radio-custom"></span>
                  Residence
                </label>
                <label className="radio-label">
                  <input type="radio" name="residence-type" value="Penthouse" className="radio-input" />
                  <span className="radio-custom"></span>
                  Penthouse
                </label>
                <label className="radio-label">
                  <input type="radio" name="residence-type" value="Villa" className="radio-input" />
                  <span className="radio-custom"></span>
                  Villa
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message / Inquiry Details</label>
              <textarea id="message" className="form-input" style={{ minHeight: "120px", resize: "vertical" }}
                placeholder="Provide details about your spatial requirements..."></textarea>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" id="terms" className="checkbox-input" required="" />
                <span className="checkbox-custom"></span>
                I agree to the Terms &amp; Conditions
              </label>
            </div>
            <button type="submit" className="form-submit-btn">
              Send Message &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
