'use client';

import React, { useRef, use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projectsData } from '@/data/projectsData';
import { ArrowLeft, Check, Sparkles, MapPin, Calendar, Ruler, User, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import SwipeableGallery from '@/components/projects/SwipeableGallery';

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

    gsap.from('.anim-gallery-container', {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.anim-gallery-container',
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
      <div className="container py-4 mb-6">
        <div className="flex items-center justify-between">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors group font-mono"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to All Sanctuaries
          </Link>

          <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-widest text-[var(--muted)] font-mono">
            <span>Portfolio</span>
            <span>/</span>
            <span className="text-[var(--accent)] font-semibold">{project.subtitle}</span>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-6 md:py-10">
        <div className="container">
          <div className="anim-hero-title mb-12">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="eyebrow m-0 text-[var(--accent)] flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-mono font-semibold">
                <MapPin size={13} /> {project.subtitle}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-soft)]"></span>
              <span className="px-4 py-1 text-[11px] uppercase font-bold tracking-widest rounded-full bg-[var(--surface-warm)] border border-[var(--border)] text-[var(--fg)] shadow-sm font-mono">
                {project.badgeText}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light text-[var(--fg)] tracking-tight uppercase leading-[1.05]">
                  {project.title}
                </h1>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <a href="#inquiry" className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs uppercase tracking-widest font-mono shadow-lg">
                  <Sparkles size={15} />
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
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex flex-wrap justify-between items-end text-white gap-6 backdrop-blur-md bg-black/40 p-6 sm:p-8 rounded-[var(--radius-md)] border border-white/15 shadow-xl">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-mono block">Design Collaboration</span>
                <span className="text-base sm:text-lg md:text-xl font-serif tracking-wide">{project.architect}</span>
              </div>

              <div className="flex flex-wrap gap-6 sm:gap-8 text-xs uppercase tracking-widest font-mono">
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[var(--accent)] text-[10px] block mb-0.5">Gross Area</span>
                  <span className="font-semibold text-sm">{project.totalArea}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[var(--accent)] text-[10px] block mb-0.5">Handover</span>
                  <span className="font-semibold text-sm">{project.completionYear}</span>
                </div>
                <div className="border-l border-white/20 pl-4">
                  <span className="text-[var(--accent)] text-[10px] block mb-0.5">Status</span>
                  <span className="font-semibold text-sm text-[var(--accent)]">{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Architectural Vision */}
      <section className="py-20 md:py-28 border-t border-b border-[var(--border)] bg-[var(--surface-warm)] relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            <div className="lg:col-span-5">
              <span className="eyebrow block mb-3 text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-mono font-semibold">Design Philosophy</span>
              <h2 className="section-title text-3xl md:text-5xl uppercase leading-tight font-serif font-light text-[var(--fg)] tracking-tight">
                A Dialogue of <br />
                <em className="text-[var(--accent)] font-serif italic font-normal">Stone &amp; Shadow.</em>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-[var(--fg)] leading-relaxed italic border-l-2 border-[var(--accent)] pl-6 py-2">
                "{project.overview}"
              </p>
              <p className="text-xs sm:text-sm text-[var(--fg-2)] leading-relaxed pt-2">
                {project.philosophy}
              </p>

              <div className="pt-4 flex flex-wrap gap-8 text-xs text-[var(--fg)] font-medium">
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
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
            <div>
              <span className="eyebrow block mb-2 text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-mono font-semibold">Technical Precision</span>
              <h2 className="section-title text-3xl md:text-4xl uppercase font-serif font-light tracking-tight">
                Project <em>Specifications</em>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[var(--fg-2)] max-w-sm leading-relaxed">
              Every millimeter engineered for spatial balance, climate resilience, and enduring value.
            </p>
          </div>

          <div className="anim-specs-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {project.specifications.map((spec, idx) => (
              <div
                key={idx}
                className="anim-spec-card pasr-card p-6 min-h-[130px] flex flex-col justify-between border border-[var(--border)] bg-[var(--surface-warm)] rounded-[var(--radius-md)] hover:border-[var(--accent)] hover:shadow-xl transition-all group"
              >
                <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block group-hover:text-[var(--accent)] transition-colors mb-2">
                  {spec.label}
                </span>
                <span className="text-sm sm:text-base font-semibold text-[var(--fg)] font-sans tracking-wide">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase - 2 Column Layout */}
      <section className="py-20 md:py-28 bg-[var(--surface)] border-t border-b border-[var(--border)] overflow-hidden">
        <div className="container max-w-7xl">
          <div className="anim-gallery-container">
            <SwipeableGallery gallery={project.gallery} projectTitle={project.title} />
          </div>
        </div>
      </section>

      {/* Bespoke Amenities & Features */}
      <section className="py-20 md:py-28">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow block mb-3 text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-mono font-semibold">Elevated Living</span>
            <h2 className="section-title text-3xl md:text-5xl uppercase font-serif font-light tracking-tight">
              Sanctuary <em>Highlights</em>
            </h2>
          </div>

          <div className="anim-features-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="anim-feature-card pasr-card p-8 md:p-10 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-warm)] group hover:border-[var(--accent)] hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl text-[var(--accent)] font-light">0{idx + 1}</span>
                    <div className="w-9 h-9 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[var(--accent-on)] transition-all shadow-sm">
                      <Check size={15} />
                    </div>
                  </div>
                  <h3 className="pasr-card-title text-xl mb-3 text-[var(--fg)] font-serif uppercase tracking-wide">{feature.title}</h3>
                  <p className="pasr-card-body text-xs sm:text-sm text-[var(--fg-2)] leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Private Viewing Inquiry Form */}
      <section id="inquiry" className="py-20 md:py-28 bg-[var(--surface-warm)] border-t border-[var(--border)] relative">
        <div className="container max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hand Side: Section Header & Contact Highlights */}
            <div className="lg:col-span-5 text-left">
              <span className="eyebrow block mb-3 text-[var(--accent)] text-xs uppercase tracking-[0.25em] font-mono font-semibold">
                Exclusive Invitation
              </span>
              <h2 className="section-title text-3xl sm:text-4xl md:text-5xl uppercase mb-6 font-serif font-light tracking-tight text-[var(--fg)] leading-tight">
                Arrange a Private <em>Viewing</em><span style={{ color: "var(--accent)" }}>.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[var(--fg-2)] leading-relaxed mb-8">
                Connect directly with the Siddhi Narayan Group executive team for private pricing, floor plans, and spatial consultations for {project.title}.
              </p>

              {/* Direct Contact Info Pills */}
              <div className="space-y-4 pt-4 border-t border-[var(--border)] text-xs text-[var(--fg)]">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-1">Direct Helpline</span>
                  <span className="font-semibold text-sm text-[var(--accent)] font-mono">+91 98765 43210</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-1">Executive Office</span>
                  <span className="font-semibold text-xs text-[var(--fg)]">Siddhi Narayan Group HQ, Thane &amp; MMR</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-1">Electronic Mail</span>
                  <span className="font-semibold text-xs text-[var(--fg-2)] font-mono">contact@siddhinarayan.com</span>
                </div>
              </div>
            </div>

            {/* Right Hand Side: Form Card Container */}
            <div className="lg:col-span-7">
              <div className="bg-[var(--surface)] p-8 sm:p-10 md:p-12 rounded-[var(--radius-lg)] border border-[var(--border)] shadow-xl relative z-10">
                <form className="space-y-5 text-left" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-[var(--fg)] font-mono font-semibold mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alexander Wright"
                        required
                        className="w-full h-12 px-5 text-xs bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-widest text-[var(--fg)] font-mono font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        className="w-full h-12 px-5 text-xs bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[var(--fg)] font-mono font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="alexander@example.com"
                      required
                      className="w-full h-12 px-5 text-xs bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-widest text-[var(--fg)] font-mono font-semibold mb-2">
                      Selected Sanctuary
                    </label>
                    <input
                      type="text"
                      value={`${project.title} (${project.subtitle})`}
                      readOnly
                      className="w-full h-12 px-5 text-xs bg-[var(--surface-warm)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] cursor-not-allowed font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full h-13 px-8 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-on)] font-semibold text-[11px] uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      Request Portfolio Dossier &amp; Appointment
                    </button>
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Pagination Footer: Next Project */}
      <section className="py-14 border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link
            href="/projects"
            className="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors flex items-center gap-2 font-mono"
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
