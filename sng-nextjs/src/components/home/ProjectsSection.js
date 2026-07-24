'use client';
import React from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const projectCardsData = [
    {
      slug: 'shivam-residency',
      badgeText: 'Delivered (2018)',
      badgeClass: 'badge-completed',
      image: '/assets/shivam_residency.png',
      alt: 'Shivam Residency',
      subtitle: 'TEMGHAR PADA - 2018',
      title: 'SHIVAM RESIDENCY',
      desc: 'Established mid-rise residential milestone in Temghar Pada featuring dual-tone facades and street-level retail arcades.'
    },
    {
      slug: 'thane-next-royale',
      badgeText: 'Flagship (2022)',
      badgeClass: '',
      image: '/assets/thane_next_royale.jpg',
      alt: 'Thane Next Royale',
      subtitle: 'TEMGHAR PADA - 2022',
      title: 'THANE NEXT ROYALE',
      desc: 'Flagship luxury high-rise featuring vertical bronze fins, podium garden deck, and resort-style lifestyle amenities.'
    },
    {
      slug: 'neelkanth-palms',
      badgeText: 'Delivered (2022)',
      badgeClass: 'badge-completed',
      image: '/assets/neelkanth_palms.jpg',
      alt: 'Neelkanth Palms',
      subtitle: 'TEMGHAR - 2022',
      title: 'NEELKANTH PALMS',
      desc: 'Sprawling multi-wing residential township with classical roof crowns and palm-lined landscaped garden boulevards.'
    },
    {
      slug: 'om-sai-one-park',
      badgeText: 'New Launch (2023)',
      badgeClass: '',
      image: '/assets/om_sai_one_park.png',
      alt: 'Om Sai One Park',
      subtitle: 'BHIWANDI BYPASS - 2023',
      title: 'OM SAI ONE PARK',
      desc: 'Sleek modern skyscraper tower with curved glass crown situated directly along the main transit and metro corridor.'
    }
  ];

  return (
    <section id="projects" className="reveal">
      <div className="container">
        {/* Redesigned Section Header */}
        <div className="project-section-header">
          <div className="project-header-left">
            <span className="eyebrow">06 / Portfolio</span>
            <h2 className="section-title" style={{ marginTop: "var(--space-2)" }}>
              Landmark <em>Developments</em><span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <div className="project-header-right">
            <p className="project-desc">
              A 33+ year track record of delivering architectural excellence across Thane and the Bhiwandi-Kalyan corridor. Explore our signature residential milestones.
            </p>
            <Link href="/projects" className="btn btn-secondary" style={{ marginTop: "var(--space-2)" }}>
              Explore All Projects
              <svg style={{ width: "10px", height: "10px", fill: "currentColor", marginLeft: "4px" }} viewBox="0 0 24 24">
                <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
              </svg>
            </Link>
          </div>
        </div>

        {/* Infinite Marquee Partner Logos */}
        <div className="marquee">
          <div className="marquee-inner">
            <div className="marquee-group">
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_conglomerate.svg" alt="Al Hoty Group" />
                </div>
                <span className="brand-category">Conglomerate</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_pharmacy.svg" alt="al-dawaa" />
                </div>
                <span className="brand-category">Pharmacy</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_energy.svg" alt="Midad" />
                </div>
                <span className="brand-category">Energy</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_fashion.svg" alt="Mashar" />
                </div>
                <span className="brand-category">Fashion</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_ecommerce.svg" alt="Mustadam" />
                </div>
                <span className="brand-category">Ecommerce</span>
              </div>
            </div>
            <div className="marquee-group">
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_conglomerate.svg" alt="Al Hoty Group" />
                </div>
                <span className="brand-category">Conglomerate</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_pharmacy.svg" alt="al-dawaa" />
                </div>
                <span className="brand-category">Pharmacy</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_energy.svg" alt="Midad" />
                </div>
                <span className="brand-category">Energy</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_fashion.svg" alt="Mashar" />
                </div>
                <span className="brand-category">Fashion</span>
              </div>
              <div className="brand-logo-card">
                <div className="brand-logo-img-wrapper">
                  <img src="/assets/logo_ecommerce.svg" alt="Mustadam" />
                </div>
                <span className="brand-category">Ecommerce</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Cards - Matching Reference Image */}
      <div className="project-cards-static-row" style={{ width: '100%', padding: '0 var(--space-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', marginBottom: 'var(--space-12)' }}>
        {projectCardsData.map((card, index) => (
          <Link
            href={`/projects/${card.slug}`}
            className="project-card block text-left no-underline group"
            key={`card-${index}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={`badge ${card.badgeClass || ''}`}>{card.badgeText}</div>
            <div className="project-card-image aspect-[4/3] bg-black/5 overflow-hidden">
              <img src={card.image} alt={card.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="project-card-info">
              <div>
                <span className="project-card-subtitle font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">{card.subtitle}</span>
                <h4 className="project-card-title text-xl font-bold tracking-tight mt-1">{card.title}</h4>
                <p className="project-card-desc text-xs text-[var(--fg-2)] leading-relaxed mt-2">{card.desc}</p>
              </div>
              <div className="project-card-action mt-4 pt-3 border-t border-[var(--border-soft)]">
                <span className="know-more-text text-xs uppercase tracking-wider font-semibold text-[var(--accent)]">View Details</span>
                <div className="project-card-arrow">
                  <svg style={{ width: "12px", height: "12px", fill: "currentColor" }} viewBox="0 0 24 24">
                    <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
