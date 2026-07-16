'use client';
import React from 'react';

export default function MapSection() {
  return (
    <section id="map" className="reveal" style={{ padding: "var(--section-y-desktop) 0" }}>
      <div className="container">
        <div className="map-header" style={{ maxWidth: "800px", marginBottom: "var(--space-8)" }}>
          <span className="eyebrow">07 / Presence</span>
          <h2 className="section-title" style={{ marginTop: "var(--space-2)", marginBottom: "var(--space-4)" }}>
            Map with Completed Project <em>Pinned</em> Locations<span style={{ color: "var(--accent)" }}>.</span>
          </h2>
          <p style={{ color: "var(--fg-2)", lineHeight: "1.7", fontSize: "var(--text-base)" }}>
            SNG Sunrise Legacy developments occupy strategic focal nodes across
            the region. Select any completed project hub on the map to explore
            details, specific transit corridors, and community stats.
          </p>
        </div>

        <div className="map-layout-grid">
          {/* Left Column: The Interactive Map Card */}
          <div className="map-left-card">
            {/* Legend inside Map */}
            <div className="map-card-legend">
              <span className="map-legend-eyebrow">Regional Footprint Matrix</span>
              <h3 className="map-legend-title">SNG Legacy Hubs</h3>
            </div>

            {/* The Interactive Map Container */}
            <div className="map-svg-viewport">
              <svg className="bhiwandi-map-svg" viewBox="0 0 1000 800">
                <defs>
                  <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"></feGaussianBlur>
                    <feComponentTransfer in="blur" result="glow1">
                      <feFuncA type="linear" slope="0.6"></feFuncA>
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode in="glow1"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                    </feMerge>
                  </filter>
                </defs>

                {/* Travertine-themed Architectural Creek Outline */}
                <path d="M 1050,120 Q 850,130 730,160 T 450,180 Q 300,190 280,240 Q 250,380 280,550 Q 320,700 360,850"
                  fill="none" stroke="rgba(200, 169, 106, 0.15)" strokeWidth="32" strokeLinecap="round"></path>
                <path d="M 1050,120 Q 850,130 730,160 T 450,180 Q 300,190 280,240 Q 250,380 280,550 Q 320,700 360,850"
                  fill="none" stroke="var(--surface-warm)" strokeWidth="28" strokeLinecap="round"></path>

                {/* Concentric Range Circles */}
                <circle cx="500" cy="360" r="80" fill="none" stroke="rgba(200, 169, 106, 0.15)" strokeWidth="0.75"
                  strokeDasharray="2 4"></circle>
                <circle cx="500" cy="360" r="160" fill="none" stroke="rgba(200, 169, 106, 0.12)" strokeWidth="0.75">
                </circle>
                <circle cx="500" cy="360" r="240" fill="none" stroke="rgba(200, 169, 106, 0.15)" strokeWidth="0.75"
                  strokeDasharray="2 4"></circle>
                <circle cx="500" cy="360" r="320" fill="none" stroke="rgba(200, 169, 106, 0.12)" strokeWidth="0.75">
                </circle>
                <circle cx="500" cy="360" r="400" fill="none" stroke="rgba(200, 169, 106, 0.15)" strokeWidth="0.75"
                  strokeDasharray="2 4"></circle>
                <circle cx="500" cy="360" r="480" fill="none" stroke="rgba(200, 169, 106, 0.12)" strokeWidth="0.75">
                </circle>

                {/* Connection Paths */}
                <path id="path-thane" d="M 500,360 Q 400,380 320,450" fill="none" stroke="rgba(200, 169, 106, 0.15)"
                  strokeWidth="1.5"></path>
                <path d="M 500,360 Q 400,380 320,450" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  className="map-connection-flow"></path>

                <path id="path-kalyan" d="M 500,360 Q 620,350 740,420" fill="none" stroke="rgba(200, 169, 106, 0.15)"
                  strokeWidth="1.5"></path>
                <path d="M 500,360 Q 620,350 740,420" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  className="map-connection-flow"></path>

                <path id="path-dombivli" d="M 500,360 Q 580,400 600,480" fill="none" stroke="rgba(200, 169, 106, 0.15)"
                  strokeWidth="1.5"></path>
                <path d="M 500,360 Q 580,400 600,480" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  className="map-connection-flow"></path>

                <path id="path-navimumbai" d="M 500,360 Q 580,520 550,680" fill="none" stroke="rgba(200, 169, 106, 0.15)"
                  strokeWidth="1.5"></path>
                <path d="M 500,360 Q 580,520 550,680" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  className="map-connection-flow"></path>

                <path id="path-mumbai" d="M 500,360 Q 300,550 180,650" fill="none" stroke="rgba(200, 169, 106, 0.15)"
                  strokeWidth="1.5"></path>
                <path d="M 500,360 Q 300,550 180,650" fill="none" stroke="var(--accent)" strokeWidth="1.5"
                  className="map-connection-flow"></path>

                {/* Animated Flowing Dots */}
                <circle r="3.5" fill="var(--accent)" filter="url(#gold-glow)">
                  <animateMotion dur="2.8s" repeatCount="indefinite">
                    <mpath href="#path-thane"></mpath>
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="var(--accent)" filter="url(#gold-glow)">
                  <animateMotion dur="3.2s" repeatCount="indefinite">
                    <mpath href="#path-kalyan"></mpath>
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="var(--accent)" filter="url(#gold-glow)">
                  <animateMotion dur="2.5s" repeatCount="indefinite">
                    <mpath href="#path-dombivli"></mpath>
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="var(--accent)" filter="url(#gold-glow)">
                  <animateMotion dur="3.6s" repeatCount="indefinite">
                    <mpath href="#path-navimumbai"></mpath>
                  </animateMotion>
                </circle>
                <circle r="3.5" fill="var(--accent)" filter="url(#gold-glow)">
                  <animateMotion dur="4.0s" repeatCount="indefinite">
                    <mpath href="#path-mumbai"></mpath>
                  </animateMotion>
                </circle>

                {/* Regional Hub Nodes */}
                {/* Thane (SW) */}
                <g transform="translate(320,450)">
                  <g className="map-node" onClick={() =>
                        window.showMapTooltip && window.showMapTooltip(
                          'SNG Aurelia',
                          'Thane Township',
                          'A premium gated residential township featuring landscaped gardens, a private clubhouse, and extensive community parks. Completed in 2023.',
                          'Mumbai-Nashik Expressway',
                          '18 KM (20 Mins)',
                          'Fully Completed',
                          'Residential Gated'
                        )
                      }>
                    <circle r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" filter="url(#gold-glow)">
                    </circle>
                    <circle r="3.5" fill="var(--accent)"></circle>
                    <text y="-18" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14px"
                      fontWeight="600" fill="var(--fg)" letterSpacing="0.08em">
                      THANE
                    </text>
                    <text y="22" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9px" fontWeight="500"
                      fill="var(--accent)">
                      18 KM
                    </text>
                  </g>
                </g>

                {/* Kalyan (E) */}
                <g transform="translate(740,420)">
                  <g className="map-node" onClick={() =>
                        window.showMapTooltip && window.showMapTooltip(
                          'SNG Sunrise Greens',
                          'Kalyan Towers',
                          'Modern high-rise residential towers designed for family living with premium amenities, close to the central transit corridor. Completed in 2022.',
                          'Samruddhi Expressway',
                          '20 KM (25 Mins)',
                          'Fully Completed',
                          'Residential Towers'
                        )
                      }>
                    <circle r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" filter="url(#gold-glow)">
                    </circle>
                    <circle r="3.5" fill="var(--accent)"></circle>
                    <text y="-18" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14px"
                      fontWeight="600" fill="var(--fg)" letterSpacing="0.08em">
                      KALYAN
                    </text>
                    <text y="22" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9px" fontWeight="500"
                      fill="var(--accent)">
                      20 KM
                    </text>
                  </g>
                </g>

                {/* Dombivli (SE) */}
                <g transform="translate(600,480)">
                  <g className="map-node" onClick={() =>
                        window.showMapTooltip && window.showMapTooltip(
                          'SNG Regency Heights',
                          'Dombivli Residences',
                          'Elegant high-rise residences offering panoramic views and high-end finished spaces, situated near key commercial centers. Completed in 2021.',
                          'Shilphata Road Network',
                          '12 KM (15 Mins)',
                          'Fully Completed',
                          'Premium Housing'
                        )
                      }>
                    <circle r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" filter="url(#gold-glow)">
                    </circle>
                    <circle r="3.5" fill="var(--accent)"></circle>
                    <text y="-18" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14px"
                      fontWeight="600" fill="var(--fg)" letterSpacing="0.08em">
                      DOMBIVLI
                    </text>
                    <text y="22" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9px" fontWeight="500"
                      fill="var(--accent)">
                      12 KM
                    </text>
                  </g>
                </g>

                {/* Navi Mumbai (S) */}
                <g transform="translate(550,680)">
                  <g className="map-node" onClick={() =>
                        window.showMapTooltip && window.showMapTooltip(
                          'SNG Vista Maritime',
                          'Commercial Hub',
                          'A modern commercial landmark hosting global logistics and maritime companies, adjacent to the port corridors. Completed in 2024.',
                          'Multi-Modal Corridor',
                          '28 KM (35 Mins)',
                          'Fully Completed',
                          'Commercial Hub'
                        )
                      }>
                    <circle r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" filter="url(#gold-glow)">
                    </circle>
                    <circle r="3.5" fill="var(--accent)"></circle>
                    <text y="-18" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14px"
                      fontWeight="600" fill="var(--fg)" letterSpacing="0.08em">
                      NAVI MUMBAI
                    </text>
                    <text y="22" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9px" fontWeight="500"
                      fill="var(--accent)">
                      28 KM
                    </text>
                  </g>
                </g>

                {/* Mumbai (SW) */}
                <g transform="translate(180,650)">
                  <g className="map-node" onClick={() =>
                        window.showMapTooltip && window.showMapTooltip(
                          'SNG Sunrise Towers',
                          'Signature Residences',
                          'Our signature luxury residential development in Eastern Mumbai, offering bespoke sky villas and toll-free connectivity. Completed in 2024.',
                          'Eastern Express Highway',
                          '32 KM (40 Mins)',
                          'Fully Completed',
                          'Luxury Residences'
                        )
                      }>
                    <circle r="9" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" filter="url(#gold-glow)">
                    </circle>
                    <circle r="3.5" fill="var(--accent)"></circle>
                    <text y="-18" textAnchor="middle" fontFamily="var(--font-display)" fontSize="14px"
                      fontWeight="600" fill="var(--fg)" letterSpacing="0.08em">
                      MUMBAI
                    </text>
                    <text y="22" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9px" fontWeight="500"
                      fill="var(--accent)">
                      32 KM
                    </text>
                  </g>
                </g>

                {/* Central Node: Bhiwandi (The Heart) */}
                <g transform="translate(500,360)">
                  <g className="map-node" onClick={() =>
                        window.showMapTooltip && window.showMapTooltip(
                          'SNG Legacy Center',
                          'Central Operations',
                          'SNG Sunrise Legacy’s primary headquarters and corporate development zone. Positioned exactly at the center of the region’s primary connectivity and logistics axes.',
                          'Expressway Junction',
                          '0 KM (Hub Center)',
                          'Corporate HQ',
                          'Central Operations'
                        )
                      }>
                    {/* Outer ripple rings */}
                    <circle r="35" fill="none" stroke="var(--accent)" strokeWidth="0.75" opacity="0.4">
                      <animate attributeName="r" values="10;45" dur="3s" repeatCount="indefinite"></animate>
                      <animate attributeName="opacity" values="0.8;0" dur="3s" repeatCount="indefinite"></animate>
                    </circle>
                    <circle r="22" fill="none" stroke="var(--accent)" strokeWidth="0.75" opacity="0.4">
                      <animate attributeName="r" values="5;30" dur="2s" repeatCount="indefinite"></animate>
                      <animate attributeName="opacity" values="0.7;0" dur="2s" repeatCount="indefinite"></animate>
                    </circle>

                    {/* Core pin design */}
                    <circle r="14" fill="var(--accent)" filter="url(#gold-glow)"></circle>
                    <circle r="6" fill="var(--surface)"></circle>

                    {/* Core labels */}
                    <text y="42" textAnchor="middle" fontFamily="var(--font-display)" fontSize="24px" fontWeight="700"
                      fill="var(--fg)" letterSpacing="0.1em">
                      BHIWANDI
                    </text>
                    <text y="62" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9px" fontWeight="600"
                      fill="var(--accent)" letterSpacing="0.15em">
                      THE HEART OF GROWTH
                    </text>
                  </g>
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Detail Content Panel (Matching the Image) */}
          <div className="map-right-panel" id="map-details-panel">
            <div className="map-panel-badge" id="map-detail-badge">
              Central Operations
            </div>
            <h3 className="map-panel-title" id="map-detail-title">
              SNG Legacy Center
            </h3>

            <div className="map-panel-content">
              <p className="map-panel-desc" id="map-detail-desc">
                SNG Sunrise Legacy’s primary headquarters and corporate
                development zone. Positioned exactly at the center of the
                region’s primary connectivity and logistics axes.
              </p>

              <div className="map-panel-lines">
                <div className="map-detail-row">
                  <span className="detail-label">Transit Corridor</span>
                  <span className="detail-value" id="map-detail-corridor">Expressway Junction</span>
                </div>
                <div className="map-detail-row">
                  <span className="detail-label">Distance to Hub</span>
                  <span className="detail-value" id="map-detail-distance">0 KM (Hub Center)</span>
                </div>
                <div className="map-detail-row">
                  <span className="detail-label">Development Status</span>
                  <span className="detail-value" id="map-detail-status">Corporate HQ</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Buttons (Arrow + Link) */}
            <div className="map-panel-action">
              <a href="#contact" className="map-arrow-btn" aria-label="Explore Project Presence">
                <svg viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
                </svg>
              </a>
              <a href="#contact" className="map-action-link">Inquire About This Location</a>
            </div>
          </div>
        </div>

        {/* Stats Row (Directly below the grid, matching SNG image idea) */}
        <div className="map-stats-row" style={{ marginTop: "var(--space-8)", border: "1px solid var(--accent)", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
          <div className="map-stat-col">
            <div className="map-stat-num">33+</div>
            <div className="map-stat-label">Years of Excellence</div>
          </div>
          <div className="map-stat-col">
            <div className="map-stat-num">40+</div>
            <div className="map-stat-label">Projects Delivered</div>
          </div>
          <div className="map-stat-col">
            <div className="map-stat-num">1M+</div>
            <div className="map-stat-label">Sq.Ft. Developed</div>
          </div>
          <div className="map-stat-col">
            <div className="map-stat-num">3000+</div>
            <div className="map-stat-label">Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  );
}
