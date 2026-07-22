'use client';

import React, { useRef, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projectsData } from '@/data/projectsData';
import { ArrowLeft, Check, Sparkles, MapPin, Calendar, Ruler, User, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectDetailPage({ params }) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const containerRef = useRef(null);

  useGSAP(() => {
    // GSAP reveal animations
    gsap.from('.anim-hero-title', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });

    gsap.from('.anim-hero-img', {
      scale: 1.08,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
      delay: 0.2,
    });

    gsap.from('.anim-spec-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.anim-specs-grid',
        start: 'top 85%',
      },
    });

    gsap.from('.anim-gallery-card', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.anim-gallery-grid',
        start: 'top 80%',
      },
    });

    gsap.from('.anim-feature-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.anim-features-grid',
        start: 'top 80%',
      },
    });
  }, { scope: containerRef });

  // Find next project for bottom pagination
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main ref={containerRef} className="min-h-screen bg-[var(--bg)] text-[var(--fg)] pt-28 pb-20 overflow-hidden">
      
      {/* Top Breadcrumb Navigation */}
      <div className="container py-4 mb-4">
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Sanctuaries
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--muted)]">
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-[var(--accent)] font-mono">{project.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-6">
        <div className="container">
          <div className="anim-hero-title mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="eyebrow m-0 text-[var(--accent)] flex items-center gap-1.5">
                <MapPin size={13} /> {project.subtitle}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-soft)]"></span>
              <span className="px-3.5 py-1 text-[10px] uppercase font-bold tracking-widest rounded-full bg-[var(--surface-warm)] border border-[var(--border)] text-[var(--fg)]">
                {project.badgeText}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light text-[var(--fg)] tracking-tight uppercase leading-none">
                  {project.title}
                </h1>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <a href="#inquiry" className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4">
                  <Sparkles size={14} />
                  Arrange Private Viewing
                </a>
              </div>
            </div>
          </div>

          {/* Full-Bleed Featured Hero Banner */}
          <div className="anim-hero-img relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] shadow-2xl group">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            {/* Floating Banner Specs Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-wrap justify-between items-end text-white gap-6 backdrop-blur-md bg-black/30 p-6 rounded-[var(--radius-md)] border border-white/10">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-mono block">Design Collaboration</span>
                <span className="text-base md:text-xl font-serif tracking-wide">{project.architect}</span>
              </div>

              <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest font-mono">
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[var(--accent)] text-[10px] block">Gross Area</span>
                  <span className="font-semibold text-sm">{project.totalArea}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[var(--accent)] text-[10px] block">Handover</span>
                  <span className="font-semibold text-sm">{project.completionYear}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[var(--accent)] text-[10px] block">Status</span>
                  <span className="font-semibold text-sm text-[var(--accent)]">{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Architectural Vision */}
      <section className="py-20 border-t border-b border-[var(--border)] bg-[var(--surface-warm)] relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-5">
              <span className="eyebrow block mb-3 text-[var(--accent)]">Design Philosophy</span>
              <h2 className="section-title text-3xl md:text-5xl uppercase leading-tight text-[var(--fg)]">
                A Dialogue of <br />
                <em className="text-[var(--accent)] font-serif italic font-normal">Stone &amp; Shadow.</em>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg md:text-xl font-serif text-[var(--fg)] leading-relaxed italic border-l-2 border-[var(--accent)] pl-6 py-1">
                "{project.overview}"
              </p>
              <p className="text-xs md:text-sm text-[var(--fg-2)] leading-relaxed pt-2">
                {project.philosophy}
              </p>

              <div className="pt-4 flex flex-wrap gap-6 text-xs text-[var(--fg)] font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[var(--accent)]" /> 100% Statutory Clearances
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[var(--accent)]" /> Custom Natural Materials
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Key Specifications Grid */}
      <section className="py-20">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="eyebrow block mb-2 text-[var(--accent)]">Technical Precision</span>
              <h2 className="section-title text-3xl md:text-4xl uppercase">
                Project <em>Specifications</em>
              </h2>
            </div>
            <p className="text-xs text-[var(--fg-2)] max-w-sm mt-2 md:mt-0">
              Every millimeter engineered for spatial balance, climate resilience, and enduring value.
            </p>
          </div>

          <div className="anim-specs-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {project.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="anim-spec-card pasr-card p-6 min-h-[120px] flex flex-col justify-between border border-[var(--border)] hover:border-[var(--accent)] transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block group-hover:text-[var(--accent)] transition-colors">
                  {spec.label}
                </span>
                <span className="text-sm font-semibold text-[var(--fg)] font-sans">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section className="py-24 bg-[var(--surface)] border-t border-b border-[var(--border)]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
            <div>
              <span className="eyebrow block mb-2 text-[var(--accent)]">Visual Tour</span>
              <h2 className="section-title text-3xl md:text-5xl uppercase">
                Architectural <em>Gallery</em>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-[var(--fg-2)] max-w-md mt-4 md:mt-0 leading-relaxed">
              Curated perspectives of spatial purity, natural marble, and handcrafted finishes within {project.title}.
            </p>
          </div>

          <div className="anim-gallery-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                className="anim-gallery-card group relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[var(--surface-warm)] shadow-lg hover:border-[var(--accent)] transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-mono block mb-1">
                      Shot 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-300 font-sans line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bespoke Amenities & Features */}
      <section className="py-24">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow block mb-3 text-[var(--accent)]">Elevated Living</span>
            <h2 className="section-title text-3xl md:text-5xl uppercase">
              Sanctuary <em>Highlights</em>
            </h2>
          </div>

          <div className="anim-features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="anim-feature-card pasr-card p-8 md:p-10 group hover:border-[var(--accent)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-[var(--accent)] font-light">0{idx + 1}</span>
                    <div className="w-8 h-8 rounded-full bg-[var(--surface-warm)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-on)] transition-all">
                      <Check size={14} />
                    </div>
                  </div>
                  <h3 className="pasr-card-title text-xl mb-3 text-[var(--fg)]">{feature.title}</h3>
                  <p className="pasr-card-body text-xs text-[var(--fg-2)] leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Private Viewing Inquiry Form */}
      <section id="inquiry" className="py-24 bg-[var(--surface-warm)] border-t border-[var(--border)] relative">
        <div className="container max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow block mb-3 text-[var(--accent)]">Exclusive Invitation</span>
            <h2 className="section-title text-3xl md:text-5xl uppercase mb-4">
              Arrange a Private <em>Viewing</em>
            </h2>
            <p className="text-xs md:text-sm text-[var(--fg-2)] leading-relaxed">
              Connect directly with the Siddhi Narayan Group executive team for private pricing, floor plans, and spatial consultations for {project.title}.
            </p>
          </div>

          <div className="bg-[var(--surface)] p-8 sm:p-12 md:p-16 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-xl relative z-10">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  placeholder="e.g. Alexander Wright"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group md:col-span-2">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  placeholder="alexander@example.com"
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group md:col-span-2">
                <label className="form-label">Selected Sanctuary</label>
                <input
                  type="text"
                  value={`${project.title} (${project.subtitle})`}
                  readOnly
                  className="form-input"
                  style={{ backgroundColor: 'var(--surface-warm)', cursor: 'not-allowed' }}
                />
              </div>
              <div className="md:col-span-2 text-center pt-6">
                <button type="submit" className="btn btn-primary px-10 py-4">
                  Request Portfolio Dossier &amp; Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Pagination Footer: Next Project */}
      <section className="py-12 border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2"
          >
            ← Back to Portfolio Showcase
          </Link>

          <Link href={`/projects/${nextProject.slug}`} className="group text-right">
            <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-mono block mb-1">Up Next</span>
            <span className="font-serif text-xl md:text-2xl text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
