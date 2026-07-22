import React from 'react';
import Link from 'next/link';
import { projectsData } from '@/data/projectsData';

export const metadata = {
  title: "Projects & Developments | Siddhi Narayan Group",
  description: "Explore Siddhi Narayan Group's portfolio of luxury sanctuaries, penthouses, and residences.",
};

export default function ProjectsPortfolioPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] pt-28 pb-20">
      
      {/* Page Header */}
      <section className="py-12 border-b border-[var(--border)]">
        <div className="container text-center max-w-3xl mx-auto">
          <span className="eyebrow block mb-3">Portfolio Collection</span>
          <h1 className="text-4xl md:text-6xl font-serif font-light uppercase tracking-tight mb-6">
            Selected <em>Sanctuaries</em>
          </h1>
          <p className="text-xs md:text-sm text-[var(--fg-2)] leading-relaxed">
            Discover 33 years of architectural minimalism, regional craft, and luxury developments built across prime landscapes.
          </p>
        </div>
      </section>

      {/* Projects Grid Showcase */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projectsData.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[var(--surface)] shadow-md hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`badge ${project.badgeClass || ''}`}>
                    {project.badgeText}
                  </span>
                </div>

                {/* Card Cover Image */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                </div>

                {/* Card Content */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[var(--accent)] font-mono block mb-2">
                      {project.subtitle}
                    </span>
                    <h3 className="font-serif text-2xl text-[var(--fg)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--fg-2)] leading-relaxed mb-6 line-clamp-2">
                      {project.overview}
                    </p>
                  </div>

                  {/* Footer Meta & Action Link */}
                  <div className="pt-4 border-t border-[var(--border-soft)] flex justify-between items-center text-xs">
                    <div className="flex gap-4 font-mono text-[10px] text-[var(--muted)] uppercase">
                      <span>{project.bedrooms}</span>
                      <span>•</span>
                      <span>{project.totalArea}</span>
                    </div>
                    <span className="text-[var(--accent)] font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
