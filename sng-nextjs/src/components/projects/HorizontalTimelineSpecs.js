'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Compass, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HorizontalTimelineSpecs({ specifications, projectTitle }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current || !trackRef.current) return;

    // Only apply GSAP pin horizontal scroll on desktop/tablet screens (> 768px)
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (!mediaQuery.matches) return;

    const track = trackRef.current;
    const totalScrollWidth = track.scrollWidth - track.clientWidth;

    gsap.to(track, {
      x: () => -totalScrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => `+=${totalScrollWidth + 400}`,
        invalidateOnRefresh: true,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 bg-[var(--surface-warm)] border-t border-b border-[var(--border)] overflow-hidden"
    >
      <div className="container mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="eyebrow block mb-2 text-[var(--accent)] text-xs uppercase tracking-[0.25em] font-mono font-semibold flex items-center gap-2">
              <Compass size={14} /> Interactive Timeline &amp; Parameters
            </span>
            <h2 className="section-title text-3xl md:text-5xl uppercase font-serif font-light tracking-tight text-[var(--fg)]">
              Project <em>Specifications</em><span className="text-[var(--accent)]">.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[var(--fg-2)] max-w-md leading-relaxed font-sans">
            Scroll down to navigate through the structural parameters, delivery timeline, and engineered specifications of {projectTitle}.
          </p>
        </div>
      </div>

      {/* Horizontal Timeline Track Window */}
      <div className="w-full overflow-x-auto md:overflow-hidden pb-8 no-scrollbar">
        <div
          ref={trackRef}
          className="flex items-center gap-8 md:gap-12 px-6 sm:px-12 md:px-20 min-w-max relative py-12"
        >
          {/* Continuous Glowing Golden Timeline Axis Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40 z-0" />

          {specifications.map((spec, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center min-w-[260px] sm:min-w-[300px] md:min-w-[340px] group"
              >
                {/* Central Timeline Node Indicator */}
                <div className="relative mb-6 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--surface)] border-2 border-[var(--accent)] flex items-center justify-center text-[var(--accent)] shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  </div>
                  {/* Step Badge */}
                  <span className="absolute -top-7 text-[10px] font-mono font-bold tracking-widest text-[var(--accent)] uppercase bg-[var(--surface-warm)] px-2 py-0.5 rounded border border-[var(--border)]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Specification Card Container */}
                <div className="w-full bg-[var(--surface)] p-7 sm:p-8 rounded-[var(--radius-lg)] border border-[var(--border)] group-hover:border-[var(--accent)] shadow-md group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 relative">
                  
                  {/* Card Header & Category */}
                  <div className="flex items-center justify-between mb-4 border-b border-[var(--border-soft)] pb-3">
                    <span className="text-[10px] uppercase tracking-widest text-[var(--muted)] font-mono font-semibold group-hover:text-[var(--accent)] transition-colors">
                      {spec.label}
                    </span>
                    <CheckCircle2 size={14} className="text-[var(--accent)] opacity-70 group-hover:opacity-100" />
                  </div>

                  {/* Main Value */}
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-[var(--fg)] font-sans tracking-wide leading-snug">
                    {spec.value}
                  </h4>

                  {/* Decorative Subtle Accent Tag */}
                  <div className="mt-4 pt-3 border-t border-[var(--border-soft)] flex items-center justify-between text-[10px] text-[var(--muted)] font-mono">
                    <span>PARAM_0{idx + 1}</span>
                    <span className="text-[var(--accent)]">VERIFIED ✓</span>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
