import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projectsData } from '@/data/projectsData';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found | SNG' };
  return {
    title: `${project.title} | Siddhi Narayan Group`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom pagination
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] pt-24 pb-20">
      
      {/* Top Breadcrumb Navigation */}
      <div className="container py-6">
        <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--accent)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[var(--accent)] transition-colors">Projects</Link>
          <span>/</span>
          <span className="text-[var(--fg)] font-semibold">{project.title}</span>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="eyebrow m-0 text-[var(--accent)]">{project.subtitle}</span>
                <span className={`px-3 py-1 text-[10px] uppercase font-bold tracking-wider rounded-full bg-[var(--surface-warm)] border border-[var(--border)] text-[var(--fg)]`}>
                  {project.badgeText}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-light text-[var(--fg)] tracking-tight uppercase">
                {project.title}
              </h1>
            </div>

            <div className="flex gap-4">
              <a href="#inquiry" className="btn btn-primary">
                Request Private Viewing
              </a>
            </div>
          </div>

          {/* Full-Bleed Featured Hero Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] shadow-2xl">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-between items-end text-white gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono block mb-1">Architect</span>
                <span className="text-sm md:text-base font-serif">{project.architect}</span>
              </div>
              <div className="flex gap-8 text-xs uppercase tracking-widest font-mono">
                <div>
                  <span className="text-[var(--accent)] block">Area</span>
                  <span>{project.totalArea}</span>
                </div>
                <div>
                  <span className="text-[var(--accent)] block">Handover</span>
                  <span>{project.completionYear}</span>
                </div>
                <div>
                  <span className="text-[var(--accent)] block">Status</span>
                  <span>{project.status}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Architectural Vision */}
      <section className="py-16 border-t border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="eyebrow block mb-3">Architectural Philosophy</span>
              <h2 className="section-title text-3xl md:text-4xl uppercase leading-tight">
                Designed for <br />
                <em className="text-[var(--accent)] italic">Serenity &amp; Light.</em>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-sm text-[var(--fg-2)] leading-relaxed">
              <p className="text-base text-[var(--fg)] font-serif leading-relaxed">
                {project.overview}
              </p>
              <p>
                {project.philosophy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specifications Grid */}
      <section className="py-16">
        <div className="container">
          <span className="eyebrow block mb-3">Key Metrics</span>
          <h2 className="section-title text-2xl md:text-3xl uppercase mb-10">
            Project <em>Specifications</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {project.specifications.map((spec, idx) => (
              <div key={idx} className="pasr-card p-6 min-h-0 flex flex-col justify-between">
                <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-2">{spec.label}</span>
                <span className="text-sm font-semibold text-[var(--fg)]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Showcase */}
      <section className="py-16 bg-[var(--surface-warm)] border-t border-b border-[var(--border)]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <span className="eyebrow block mb-2">Visual Tour</span>
              <h2 className="section-title text-3xl uppercase">
                Curated <em>Gallery</em>
              </h2>
            </div>
            <p className="text-xs text-[var(--fg-2)] max-w-sm">
              An inside look into the spatial purity, natural marble, and handcrafted finishes of {project.title}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="group relative rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-[var(--fg)] mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--fg-2)]">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features & Amenities */}
      <section className="py-16">
        <div className="container max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow block mb-2">Bespoke Amenities</span>
            <h2 className="section-title text-3xl md:text-4xl uppercase">
              Sanctuary <em>Highlights</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.features.map((feature, idx) => (
              <div key={idx} className="pasr-card p-8 group">
                <span className="pasr-card-num text-2xl mb-4 font-serif text-[var(--accent)]">0{idx + 1}</span>
                <h3 className="pasr-card-title text-lg mb-2">{feature.title}</h3>
                <p className="pasr-card-body text-xs text-[var(--fg-2)] leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Private Viewing Inquiry Form */}
      <section id="inquiry" className="py-20 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="container max-w-4xl text-center">
          <span className="eyebrow block mb-3">Private Access</span>
          <h2 className="section-title text-3xl md:text-5xl uppercase mb-6">
            Arrange a Private <em>Viewing</em>
          </h2>
          <p className="text-xs md:text-sm text-[var(--fg-2)] max-w-lg mx-auto mb-10 leading-relaxed">
            Connect with our legacy concierge to receive full pricing details, floor plans, and arrange a private spatial walkthrough of {project.title}.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div>
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-2">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                required
                className="w-full px-5 py-3 text-xs bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 / International"
                required
                className="w-full px-5 py-3 text-xs bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-2">Email Address</label>
              <input
                type="email"
                placeholder="name@example.com"
                required
                className="w-full px-5 py-3 text-xs bg-[var(--bg)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)]"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono block mb-2">Selected Development</label>
              <input
                type="text"
                value={project.title}
                readOnly
                className="w-full px-5 py-3 text-xs bg-[var(--surface-warm)] text-[var(--fg)] border border-[var(--border)] rounded-[var(--radius-md)] cursor-not-allowed font-medium"
              />
            </div>
            <div className="md:col-span-2 text-center pt-4">
              <button type="submit" className="btn btn-primary w-full sm:w-auto px-12 py-4">
                Submit Viewing Request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Pagination Footer: Next Project */}
      <section className="py-12 border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-6">
          <Link href="/projects" className="text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
            ← Back to All Projects
          </Link>

          <Link href={`/projects/${nextProject.slug}`} className="group text-right">
            <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-mono block mb-1">Up Next</span>
            <span className="font-serif text-xl text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
              {nextProject.title} →
            </span>
          </Link>
        </div>
      </section>

    </main>
  );
}
