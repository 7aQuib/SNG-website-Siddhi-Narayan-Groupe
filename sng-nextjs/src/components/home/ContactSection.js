'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: projectsData[0]?.title || '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', project: projectsData[0]?.title || '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

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
          <form id="inquiryForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label htmlFor="home-project-select" className="form-label">Select Project Interest</label>
              <div className="relative w-full">
                <select
                  id="home-project-select"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="form-input appearance-none w-full pr-10 cursor-pointer bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-sm)] py-3.5 px-4 text-sm font-body transition-all focus:border-[var(--accent)]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23c2a661' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center',
                    backgroundSize: '16px',
                  }}
                >
                  {projectsData.map((p) => (
                    <option key={p.id} value={p.title} className="bg-[var(--surface)] text-[var(--fg)] py-2">
                      {p.title} ({p.subtitle})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message / Inquiry Details</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-input" style={{ minHeight: "120px", resize: "vertical" }}
                placeholder="Provide details about your unit requirements, budget, or preferred visit date..."></textarea>
            </div>
            <div className="form-group">
              <label className="checkbox-label">
                <input type="checkbox" id="terms" className="checkbox-input" required />
                <span className="checkbox-custom"></span>
                I agree to the <Link href="/privacy" className="underline hover:text-[var(--accent)] transition-colors">Terms &amp; Privacy Policy</Link>
              </label>
            </div>
            <button type="submit" disabled={status === 'loading'} className="form-submit-btn" style={{
              backgroundColor: status === 'success' ? 'var(--success, #5fa36a)' : status === 'error' ? 'var(--error, #e53e3e)' : '',
              color: (status === 'success' || status === 'error') ? '#fff' : ''
            }}>
              {status === 'loading' ? 'Transmitting...' : 
               status === 'success' ? 'Inquiry Sent Successfully ✓' : 
               status === 'error' ? 'Failed to send' : 
               'Submit Inquiry Request >'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

