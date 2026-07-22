'use client';
import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact" className="reveal">
      <div className="container inquiry-grid">
        {/* Left side: Contact Card */}
        <div className="inquiry-left">
          <canvas id="inquire-bg-canvas"></canvas>

          <div className="inquiry-left-content">
            <span className="eyebrow">08 / Inquire</span>
            <h2 className="section-title">
              Begin Your <em>Journey</em><span style={{ color: "var(--accent)" }}>.</span>
            </h2>
            <p style={{ color: "var(--fg-2)", fontSize: "var(--text-sm)", fontWeight: "400", marginTop: "var(--space-3)", lineHeight: "1.6" }}>
              Siddhi Narayan Group developments are available for private consultations and site visits. Please register your inquiry details to arrange an appointment with our executive team.
            </p>
          </div>

          <div className="inquiry-contact-details">
            <div className="contact-item">
              <span className="contact-label">Telephone</span>
              <span className="contact-value">+91 98765 43210</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Electronic Mail</span>
              <span className="contact-value"
                style={{ fontSize: "var(--text-base)", textTransform: "lowercase" }}>contact@siddhinarayan.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Corporate Office</span>
              <span className="contact-value" style={{ fontSize: "var(--text-sm)" }}>
                Siddhi Narayan Group HQ, Prime Business Hub, Thane / Bhiwandi Region, Maharashtra, India
              </span>
            </div>
          </div>
        </div>

        {/* Right side: Inquiry Form */}
        <div className="inquiry-right">
          <form id="inquiryForm" onSubmit={(e) => window.handleInquiry && window.handleInquiry(e)}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-input" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-input" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label className="form-label">Select Project Interest</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="residence-type" value="Thane Next" className="radio-input" defaultChecked />
                  <span className="radio-custom"></span>
                  Thane Next
                </label>
                <label className="radio-label">
                  <input type="radio" name="residence-type" value="Shivam Residency" className="radio-input" />
                  <span className="radio-custom"></span>
                  Shivam Residency
                </label>
                <label className="radio-label">
                  <input type="radio" name="residence-type" value="Luxury Penthouse" className="radio-input" />
                  <span className="radio-custom"></span>
                  Luxury Penthouse
                </label>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message / Inquiry Details</label>
              <textarea id="message" className="form-input" style={{ minHeight: "120px", resize: "vertical" }}
                placeholder="Provide details about your unit requirements, budget, or preferred visit date..."></textarea>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" id="terms" className="checkbox-input" required />
                <span className="checkbox-custom"></span>
                I agree to the Terms &amp; Privacy Policy
              </label>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit Inquiry Request &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
