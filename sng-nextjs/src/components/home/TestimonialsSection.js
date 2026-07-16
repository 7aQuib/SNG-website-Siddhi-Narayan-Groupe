
import React from 'react';

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="reveal" style={{ overflow: "hidden", padding: "var(--section-y-desktop) 0" }}>
      <div className="container">
        <div className="section-header" style={{ textAlign: "center", marginBottom: "var(--space-6)" }}>
          <span className="eyebrow">04 / Voices</span>
          <h2 className="section-title">
            Client <em>Perspectives</em><span style={{ color: "var(--accent)" }}>.</span>
          </h2>
        </div>
      </div>

      <div className="testimonial-marquee-container">
        {/* Row 1: Left to Right */}
        <div className="testimonial-marquee-row left-to-right">
          <div className="testimonial-marquee-track">
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Principal Investor</span>
                <p className="testimonial-quote">"A perfect integration of natural elements. Entering the
                  residence feels like stepping into a private, silent landscape."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Art Collector</span>
                <p className="testimonial-quote">"The tactile quality of the Kiso Hinoki wood and hand-carved
                  travertine is simply unmatched. It is a spatial masterpiece."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Design Consultant</span>
                <p className="testimonial-quote">"A masterpiece of light and shadow. The daily sun cycle is
                  choreographed directly into the living spaces, creating a
                  rhythmic drama."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Private Owner</span>
                <p className="testimonial-quote">"A private sanctuary that completely isolates you from the city
                  while maintaining deep cultural context."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Duplicated for seamless loop */}
            {/* Card 1 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Principal Investor</span>
                <p className="testimonial-quote">"A perfect integration of natural elements. Entering the
                  residence feels like stepping into a private, silent landscape."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Art Collector</span>
                <p className="testimonial-quote">"The tactile quality of the Kiso Hinoki wood and hand-carved
                  travertine is simply unmatched. It is a spatial masterpiece."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Design Consultant</span>
                <p className="testimonial-quote">"A masterpiece of light and shadow. The daily sun cycle is
                  choreographed directly into the living spaces, creating a
                  rhythmic drama."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Private Owner</span>
                <p className="testimonial-quote">"A private sanctuary that completely isolates you from the city
                  while maintaining deep cultural context."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="testimonial-marquee-row right-to-left">
          <div className="testimonial-marquee-track">
            {/* Card 5 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Retreat Evaluator</span>
                <p className="testimonial-quote">"The subterranean hot-spring onsen is a spiritual journey.
                  Basalt stone and steam under candlelight."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Structural Critic</span>
                <p className="testimonial-quote">"Uncompromising attention to detail in every bronze seam, wood
                  connection, and custom stone joint."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 7 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Architectural Historian</span>
                <p className="testimonial-quote">"Kyoto's heritage reimagined through modern concrete volume.
                  Truly monumental and historical."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 8 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Spatial Curator</span>
                <p className="testimonial-quote">"The threshold design bridges indoor and outdoor states with
                  extreme elegance. The garden is the room."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Duplicated for seamless loop */}
            {/* Card 5 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Retreat Evaluator</span>
                <p className="testimonial-quote">"The subterranean hot-spring onsen is a spiritual journey.
                  Basalt stone and steam under candlelight."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 6 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Structural Critic</span>
                <p className="testimonial-quote">"Uncompromising attention to detail in every bronze seam, wood
                  connection, and custom stone joint."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 7 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Architectural Historian</span>
                <p className="testimonial-quote">"Kyoto's heritage reimagined through modern concrete volume.
                  Truly monumental and historical."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>

            {/* Card 8 */}
            <div className="testimonial-card">
              <div className="testimonial-avatar">
                <svg style={{ width: "24px", height: "24px", fill: "#a3a3a3" }} viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <span className="client-name">Spatial Curator</span>
                <p className="testimonial-quote">"The threshold design bridges indoor and outdoor states with
                  extreme elegance. The garden is the room."</p>
              </div>
              <div className="testimonial-meta">
                <span className="client-time">12:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
