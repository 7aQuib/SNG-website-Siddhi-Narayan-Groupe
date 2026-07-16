'use client';
import React, { useEffect } from 'react';

import SmartStackSection from '@/components/SmartStackSection';
import { Award, Eye, Target, Droplet, Sun, ShieldCheck, CheckCircle, User } from 'lucide-react';

export default function About() {

  return (
    <main>
      {/* Translated HTML Content */}



      {/* Modern Hero Section */}
      <section className="hero story-hero parallax-wrapper"
        style={{ background: "var(--bg)", color: "var(--fg)", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", padding: "150px var(--space-8) 0", overflow: "hidden", position: "relative" }}>
        <div className="parallax-bg"
          style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "120%", background: "linear-gradient(135deg, var(--bg) 0%, var(--surface-warm) 100%)", zIndex: "0", opacity: "1" }}
          data-speed="0.2"></div>
        <div className="hero-watermark" data-speed="0.05"
          style={{ position: "absolute", top: "20%", right: "-5%", fontSize: "25vw", fontFamily: "var(--font-serif)", color: "rgba(0, 0, 0, 0.03)", zIndex: "1", whiteSpace: "nowrap", pointerEvents: "none" }}>
          LEGACY</div>

        <div className="container"
          style={{ maxWidth: "1200px", position: "relative", zIndex: "2", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="hero-eyebrow" data-speed="0.1" style={{ color: "var(--accent)", marginBottom: "var(--space-4)" }}>A NARAYAN
            MACHHA INITIATIVE</div>
          <h1 className="hero-title" data-speed="0.15"
            style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: "1", maxWidth: "800px", marginBottom: "var(--space-6)", textAlign: "center" }}>
            Building not just walls, but <em style={{ color: "var(--accent)" }}>lifestyles.</em>
          </h1>
          <p className="hero-tagline" data-speed="0.2"
            style={{ textAlign: "center", maxWidth: "500px", fontSize: "var(--text-lg)", margin: "0", color: "var(--fg-2)" }}>
            ONE GROUP BEHIND THOUSANDS SMILES
          </p>
        </div>
      </section>

      {/* Legacy & Preface Story */}
      <section id="legacy" className="story-section"
        style={{ padding: "var(--space-12) 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div className="container">
          <div className="story-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)", alignItems: "center" }}>

            <div className="story-content reveal" data-speed="0.05">
              <span className="eyebrow">33 Years Of Excellence</span>
              <h2 className="section-title" style={{ marginBottom: "var(--space-6)" }}>A journey rooted in <em>trust</em> and
                vision.</h2>
              <p className="about-p" style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-4)" }}>
                Our debut goes back to 1993 as Sushmita Landmark—today known as Siddhi Narayan Group (SNG).
              </p>
              <p className="about-p" style={{ color: "var(--muted)" }}>
                We have been consistently delivering projects for 33 years. We cherish the trust shown by our existing
                clients who have referred over 40% of all homes sold. The group has nurtured the dream of its visionaries,
                continuing to inspire and lead the industry from the front.
              </p>
            </div>

            <div className="story-visual reveal" data-speed="-0.05" style={{ position: "relative", width: "85%", margin: "0 auto" }}>
              <div className="image-placeholder"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  backgroundImage: "url('/assets/33%20years%20of%20legecy.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "8px",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
                }}>

                {/* Decorative border */}
                <div
                  style={{ position: "absolute", inset: "24px", border: "1px solid rgba(200, 169, 106, 0.4)", borderRadius: "4px", pointerEvents: "none" }}>
                </div>
              </div>

              {/* Premium Overlapping stat card */}
              <div className="stat-card parallax-element" data-speed="-0.1"
                style={{
                  position: "absolute",
                  top: "-15px",
                  right: "-15px",
                  zIndex: "10",
                  background: "rgba(15, 15, 15, 0.8)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "1rem 1.5rem",
                  border: "1px solid rgba(200, 169, 106, 0.3)",
                  borderRadius: "12px",
                  boxShadow: "0 15px 30px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  textAlign: "center",
                  whiteSpace: "nowrap"
                }}>
                <div style={{ fontSize: "2rem", fontFamily: "var(--font-serif)", color: "var(--accent)", lineHeight: "1", textShadow: "0 2px 10px rgba(200,169,106,0.3)" }}>
                  3000+
                </div>
                <div style={{ fontSize: "0.7rem", fontWeight: "600", letterSpacing: "0.15em", color: "#f8f8f8", marginTop: "6px" }}>
                  HAPPY FAMILIES
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission (Modern Luxurious Grid) */}
      <section id="vision" className="story-section parallax-wrapper"
        style={{ padding: "var(--space-16) 0", background: "var(--surface-warm)", position: "relative", overflow: "hidden" }}>
        {/* Luxurious Glow Effects */}
        <div
          style={{ position: "absolute", top: "-10%", left: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(200, 169, 106, 0.08) 0%, transparent 60%)", filter: "blur(50px)", pointerEvents: "none", zIndex: "1" }}>
        </div>
        <div
          style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "50%", height: "50%", background: "radial-gradient(circle, rgba(200, 169, 106, 0.05) 0%, transparent 60%)", filter: "blur(50px)", pointerEvents: "none", zIndex: "1" }}>
        </div>

        <div className="hero-watermark" data-speed="0.05"
          style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "22vw", fontFamily: "var(--font-serif)", color: "rgba(0, 0, 0, 0.03)", zIndex: "1", pointerEvents: "none", whiteSpace: "nowrap", textAlign: "center", width: "100%", letterSpacing: "0.05em" }}>
          PURPOSE</div>

        <div className="container" style={{ position: "relative", zIndex: "2" }}>
          <style dangerouslySetInnerHTML={{
            __html: `
        .vm-grid {
          display: grid;
          gap: var(--space-8);
          position: relative;
        }

        @media (min-width: 992px) {
          .vm-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-12);
            align-items: center;
          }

          .vm-card-mission {
            margin-top: 8rem;
          }
        }

        .vm-card {
          background: var(--surface);
          backdrop-filter: blur(16px);
          padding: var(--space-6);
          border: 1px solid var(--border);
          border-radius: 2px;
          position: relative;
          overflow: hidden;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s ease, border-color 0.5s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
        }

        @media (min-width: 768px) {
          .vm-card {
            padding: var(--space-12);
          }
        }

        .vm-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          border-color: rgba(200, 169, 106, 0.3);
        }

        .vm-card::before {
          content: '';
          position: absolute;
          top: 0;
          width: 3px;
          height: 100%;
          background: linear-gradient(to bottom, var(--accent), transparent);
        }

        .vm-card.vision::before {
          left: 0;
        }

        .vm-card.mission::before {
          right: 0;
        }

        .vm-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(200, 169, 106, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(200, 169, 106, 0.2);
          margin-bottom: var(--space-8);
          box-shadow: inset 0 0 20px rgba(200, 169, 106, 0.05);
          transition: transform 0.5s ease;
        }

        .vm-card:hover .vm-icon-wrap {
          transform: scale(1.1);
          border-color: rgba(200, 169, 106, 0.4);
        }

        .vm-title {
          font-size: 2rem;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        @media (min-width: 768px) {
          .vm-title {
            font-size: 2.5rem;
          }
        }

        .vm-title span {
          display: block;
          height: 1px;
          flex-grow: 1;
          background: linear-gradient(to right, rgba(200, 169, 106, 0.3), transparent);
        }

        .vm-card.mission .vm-title {
          flex-direction: row-reverse;
          text-align: right;
        }

        .vm-card.mission .vm-title span {
          background: linear-gradient(to left, rgba(200, 169, 106, 0.3), transparent);
        }

        .vm-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--fg-2);
          font-weight: 300;
        }

        @media (min-width: 768px) {
          .vm-text {
            font-size: 1.1rem;
          }
        }

        .vm-quote {
          color: var(--accent);
          font-family: var(--font-serif);
          font-size: 1.3rem;
          font-style: italic;
          display: block;
          margin-bottom: var(--space-3);
          font-weight: normal;
        }
      ` }} />

          <div className="vm-grid">

            {/* Vision Block */}
            <div className="vm-card vision reveal interactive-card" data-speed="0.02">
              <div className="vm-icon-wrap">
                <Eye style={{ width: "28px", height: "28px", color: "var(--accent)" }} />
              </div>
              <h2 className="section-title vm-title">VISION <span></span></h2>
              <p className="vm-text">
                To be the leading real estate service provider in the region. We strive to develop collaborative
                partnerships based on transparency, mutual trust, and service to build lasting relationships. We aim to put
                customers at the center of all activities and create sustainable solutions that don't just meet
                expectations, but surpass them.
              </p>
            </div>

            {/* Mission Block */}
            <div className="vm-card mission vm-card-mission reveal interactive-card" data-speed="0.04">
              <div className="vm-icon-wrap" style={{ marginLeft: "auto" }}>
                <Target style={{ width: "28px", height: "28px", color: "var(--accent)" }} />
              </div>
              <h2 className="section-title vm-title">MISSION <span></span></h2>
              <p className="vm-text" style={{ textAlign: "right" }}>
                <strong className="vm-quote">"Housing for All"</strong>
                SNG drafts a new life scale for customers—comprehensively designed to reach every section of society. We aim
                to serve each part of society by building residential properties, community amenities, and recreational
                activities, acting as a real estate company that serves every need.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Smart Homes (Roadmap Timeline) */}
      <SmartStackSection />

      {/* Strength & Values */}
      <section id="philosophy" className="story-section parallax-wrapper"
        style={{ paddingTop: "60px", paddingBottom: "var(--space-12)", background: "var(--surface-warm)", color: "var(--fg)", position: "relative" }}>
        <div className="container">
          <div className="story-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "var(--space-10)", alignItems: "start" }}>

            <div className="values-text reveal">
              <span className="eyebrow">Core Values</span>
              <h2 className="section-title" style={{ fontSize: "var(--text-2xl)", marginBottom: "var(--space-6)" }}>Philosophy &
                Strength</h2>
              <p className="about-p">
                We believe in quality and attention to detail. Our systemized and organized work process, combined with a
                positive attitude, strong leadership, and planning, displays our professional competence.
              </p>
              <p className="about-p">
                To keep upgrading our standards, we adopt an absolutely transparent relationship with our clients, peers,
                associates, and workforce.
              </p>
            </div>

            <div className="strength-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
              <div className="strength-card reveal">
                <Droplet style={{ color: "var(--accent)", marginBottom: "16px" }} />
                <h3>Transparency</h3>
                <p>Water is our favorite drink, we serve you absolute clarity.</p>
              </div>
              <div className="strength-card reveal" style={{ transitionDelay: "0.1s", transform: "translateY(20px)" }}>
                <Sun style={{ color: "var(--accent)", marginBottom: "16px" }} />
                <h3>Commitment</h3>
                <p>We are as committed as the sun that rises daily.</p>
              </div>
              <div className="strength-card reveal" style={{ transitionDelay: "0.2s" }}>
                <ShieldCheck style={{ color: "var(--accent)", marginBottom: "16px" }} />
                <h3>Trust</h3>
                <p>Place your reliance & jump, we will catch you.</p>
              </div>
              <div className="strength-card reveal" style={{ transitionDelay: "0.3s", transform: "translateY(20px)" }}>
                <CheckCircle style={{ color: "var(--accent)", marginBottom: "16px" }} />
                <h3>Quality</h3>
                <p>For us, quality is not an art, it's a habit.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="story-section" style={{ padding: "var(--space-12) 0", background: "var(--bg)" }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: "center", marginBottom: "var(--space-10)" }}>
            <h2 className="section-title">The Brains Behind the <em>Legacy</em></h2>
          </div>

          <div className="leadership-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-8)" }}>
            <div className="leader-card reveal interactive-card"
              style={{ border: "1px solid var(--border)", padding: "var(--space-8)", position: "relative", overflow: "hidden" }}>
              <div className="leader-bg"
                style={{ position: "absolute", top: "0", right: "0", opacity: "0.05", transform: "scale(3) translate(10%, -10%)", pointerEvents: "none" }}>
                <User style={{ width: "200px", height: "200px" }} />
              </div>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>CHAIRMAN</span>
              <h3 className="leader-name"
                style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", margin: "var(--space-2) 0 var(--space-4)" }}>
                Shri. Narayan Machha</h3>
              <p className="about-p" style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
                Chairman Shri. Narayan Machha began his journey with contracting work and ventured into real estate
                development in 1993. His guidance on legal matters has helped the company obtain timely statutory
                clearances. He is instrumental in making SNG a well-established name in the region.
              </p>
            </div>

            <div className="leader-card reveal interactive-card"
              style={{ border: "1px solid var(--border)", padding: "var(--space-8)", position: "relative", overflow: "hidden", background: "var(--surface-warm)" }}>
              <div className="leader-bg"
                style={{ position: "absolute", top: "0", right: "0", opacity: "0.05", transform: "scale(3) translate(10%, -10%)", pointerEvents: "none" }}>
                <User style={{ width: "200px", height: "200px" }} />
              </div>
              <span className="eyebrow" style={{ color: "var(--accent)" }}>SECOND GEN, BIG LEAP</span>
              <h3 className="leader-name"
                style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-xl)", margin: "var(--space-2) 0 var(--space-4)" }}>
                Mr. Sagar Machha</h3>
              <p className="about-p" style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
                A Civil Engineer and MBA Graduate in Real Estate from REMI (Mumbai). With a vision of 'Housing for All', he
                successfully builds on the equity of the brand. His responsibilities include Engineering, Construction,
                Marketing, and Sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards / Milestones */}
      <section id="awards" className="story-section parallax-wrapper"
        style={{ padding: "var(--space-12) 0", background: "#11100f", color: "#ffffff", textAlign: "center", position: "relative" }}>
        <div className="hero-watermark" data-speed="0.05"
          style={{ position: "absolute", top: "0", left: "50%", transform: "translate(-50%, -35%)", fontSize: "28vw", fontFamily: "var(--font-serif)", fontWeight: "800", letterSpacing: "-0.05em", lineHeight: "0.8", color: "rgba(255, 255, 255, 0.03)", pointerEvents: "none", whiteSpace: "nowrap", userSelect: "none" }}>
          HONORS</div>
        <div className="container" style={{ position: "relative", zIndex: "2" }}>
          <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes drawAwardPath {
          0% {
            strokeDasharray: 100;
            stroke-dashoffset: 100;
          }

          50% {
            strokeDasharray: 100;
            stroke-dashoffset: 0;
          }

          100% {
            strokeDasharray: 100;
            stroke-dashoffset: 100;
          }
        }

        .animated-award-icon {
          display: block;
          margin: 0 auto var(--space-4);
          animation: drawAwardPath 4s ease-in-out infinite;
        }
      ` }} />
          <Award className="animated-award-icon" style={{ width: "64px", height: "64px", color: "var(--accent)" }} />
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Honored by the Governor of Maharashtra</span>
          <h2 className="section-title"
            style={{ fontSize: "var(--text-xl)", margin: "var(--space-2) auto var(--space-8)", maxWidth: "600px", color: "#ffffff" }}>
            For the remarkable project "Thane Next" — <em style={{ color: "var(--accent)" }}>Innovation Leader in Real
              Estate.</em>
          </h2>

          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "var(--space-6)", maxWidth: "1000px", margin: "0 auto" }}>
            <div className="cert-card"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "250px" }}>
              {/* Certification Image Placeholder */}
              <div style={{ width: "100%", height: "150px", marginBottom: "var(--space-4)", overflow: "hidden", borderRadius: "4px" }}>
                <img src="https://placehold.co/400x300/1e1e1e/d4af37?text=PILLARS+OF+MAHARASHTRA+CERTIFICATE"
                  alt="Pillars of Maharashtra Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span className="eyebrow" style={{ color: "#ffffff", fontSize: "0.75rem" }}>PILLARS OF MAHARASHTRA</span>
            </div>
            <div className="cert-card"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "250px" }}>
              {/* Certification Image Placeholder */}
              <div style={{ width: "100%", height: "150px", marginBottom: "var(--space-4)", overflow: "hidden", borderRadius: "4px" }}>
                <img src="https://placehold.co/400x300/1e1e1e/d4af37?text=TRENDSETTERS+CERTIFICATE"
                  alt="Trendsetters Certificate" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span className="eyebrow" style={{ color: "#ffffff", fontSize: "0.75rem" }}>TRENDSETTERS</span>
            </div>
            <div className="cert-card"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "250px" }}>
              {/* Certification Image Placeholder */}
              <div style={{ width: "100%", height: "150px", marginBottom: "var(--space-4)", overflow: "hidden", borderRadius: "4px" }}>
                <img src="https://placehold.co/400x300/1e1e1e/d4af37?text=IGBC+CERTIFICATE" alt="IGBC Certificate"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span className="eyebrow" style={{ color: "#ffffff", fontSize: "0.75rem" }}>IGBC</span>
            </div>
            <div className="cert-card"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", padding: "var(--space-4)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "250px" }}>
              {/* Certification Image Placeholder */}
              <div style={{ width: "100%", height: "150px", marginBottom: "var(--space-4)", overflow: "hidden", borderRadius: "4px" }}>
                <img src="https://placehold.co/400x300/1e1e1e/d4af37?text=NAREDCO+CERTIFICATE" alt="NAREDCO Certificate"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span className="eyebrow" style={{ color: "#ffffff", fontSize: "0.75rem" }}>NAREDCO</span>
            </div>
          </div>
        </div>
      </section>



    </main>
  );
}
