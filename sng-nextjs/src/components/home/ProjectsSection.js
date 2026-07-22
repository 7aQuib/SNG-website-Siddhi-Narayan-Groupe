'use client';
import React from 'react';
import Link from 'next/link';

export default function ProjectsSection() {
  const projectCardsData = [
    {
      slug: 'kumo-penthouse',
      badgeText: 'New Project',
      badgeClass: '',
      image: '/assets/residence_interior.jpg',
      alt: 'The Kumo Penthouse',
      subtitle: 'Higashiyama, Kyoto',
      title: 'Kumo Penthouse',
      desc: 'Sky terrace private hot spring, panoramic vistas of Kiyomizu-dera temple, calacatta gold details.'
    },
    {
      slug: 'niwa-pavilion',
      badgeText: 'Completed',
      badgeClass: 'badge-completed',
      image: '/assets/hero_residence.jpg',
      alt: 'The Niwa Pavilion',
      subtitle: 'Kiyomizu, Kyoto',
      title: 'Niwa Pavilion',
      desc: 'Double-height private glass atrium opening into stone gardens, tadelakt plaster, smoked oak.'
    },
    {
      slug: 'valley-suite',
      badgeText: 'Coming Soon',
      badgeClass: 'badge-coming-soon',
      image: '/assets/amenity_pool.jpg',
      alt: 'The Valley Suite',
      subtitle: 'Kamogawa, Kyoto',
      title: 'Valley Suite',
      desc: 'Floating cedar veranda overlooking local bamboo groves, river-stone hot-tub baths.'
    },
    {
      slug: 'sora-villa',
      badgeText: 'New Project',
      badgeClass: '',
      image: '/assets/marble_detail.jpg',
      alt: 'The Sora Villa',
      subtitle: 'Arashiyama, Kyoto',
      title: 'Sora Villa',
      desc: 'Perched along the maple hills of Arashiyama, featuring a private cedar forest walkway and infinity hot bath.'
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
              Selected <em>Sanctuaries</em><span style={{ color: "var(--accent)" }}>.</span>
            </h2>
          </div>
          <div className="project-header-right">
            <p className="project-desc">
              A legacy of sanctuaries built across the world's most pristine
              landscapes. Reinterpreting regional craft methods through
              architectural minimalism and timeless light.
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

      {/* Project Cards - Clickable Link to Details */}
      <div className="project-cards-static-row" style={{ width: '100%', padding: '0 var(--space-6)', display: 'flex', gap: 'var(--space-6)', overflowX: 'auto', marginBottom: 'var(--space-12)' }}>
        {projectCardsData.map((card, index) => (
          <Link
            href={`/projects/${card.slug}`}
            className="project-card block text-left no-underline"
            key={`card-${index}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <div className={`badge ${card.badgeClass || ''}`}>{card.badgeText}</div>
            <div className="project-card-image">
              <img src={card.image} alt={card.alt} />
            </div>
            <div className="project-card-info">
              <div>
                <span className="project-card-subtitle">{card.subtitle}</span>
                <h4 className="project-card-title">{card.title}</h4>
                <p className="project-card-desc">{card.desc}</p>
              </div>
              <div className="project-card-action">
                <span className="know-more-text">View Full Details</span>
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
