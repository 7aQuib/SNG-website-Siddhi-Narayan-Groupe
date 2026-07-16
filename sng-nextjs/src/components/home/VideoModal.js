'use client';
import React from 'react';

export default function VideoModal() {
  return (
    <div className="video-modal" id="videoModal">
      <button className="video-modal-close" onClick={() => window.closeVideoModal && window.closeVideoModal()}>
        <svg viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
          </path>
        </svg>
      </button>
      <div className="video-modal-container">
        <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#0c0b0a", color: "#ffffff", textAlign: "center", padding: "var(--space-8)" }}>
          <span className="eyebrow" style={{ color: "var(--accent)" }}>Cinematic Presentation</span>
          <h3 className="section-title" style={{ fontSize: "var(--text-lg)", marginTop: "var(--space-2)", marginBottom: "var(--space-6)", color: "#fff" }}>
            Aura Residences Kyoto
          </h3>
          <p style={{ color: "var(--muted)", fontSize: "var(--text-sm)", maxWidth: "480px", marginBottom: "var(--space-8)", lineHeight: "1.6" }}>
            Experience the light choreography, the rustle of Higashiyama bamboo,
            and the geothermal hot springs of the sanctuary.
          </p>
          <button className="btn btn-primary" onClick={() => window.closeVideoModal && window.closeVideoModal()}>
            Back to site
          </button>
        </div>
      </div>
    </div>
  );
}
