'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import SmartStackSection from '@/components/SmartStackSection';
import { Award, Eye, Target, User } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2
    })
    .from('.hero-title', {
      y: 40,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
    }, '-=0.6')
    .from('.hero-text', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, '-=0.8');

    gsap.to('.hero-content', {
      y: 150,
      opacity: 0,
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    });

    gsap.from('.legacy-img', {
      clipPath: 'inset(100% 0% 0% 0%)',
      scale: 1.1,
      duration: 1.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '.legacy-section',
        start: 'top 75%',
      }
    });

    gsap.from('.legacy-text > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.legacy-text',
        start: 'top 80%',
      }
    });

    gsap.from('.vision-mission-card', {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.vision-mission-section',
        start: 'top 75%',
      }
    });

    gsap.from('.philosophy-intro > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.philosophy-section',
        start: 'top 80%',
      }
    });

    gsap.from('.core-value-item', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.core-values-grid',
        start: 'top 80%',
      }
    });

    gsap.from('.leadership-title', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.leadership-section',
        start: 'top 85%',
      }
    });

    gsap.from('.leader-card', {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.leadership-grid',
        start: 'top 75%',
      }
    });

    gsap.from('.awards-intro > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.awards-section',
        start: 'top 80%',
      }
    });

    gsap.from('.award-item', {
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.awards-grid',
        start: 'top 85%',
      }
    });

  }, { scope: container });

  return (
    <main ref={container} style={{ backgroundColor: 'var(--bg)', color: 'var(--fg)' }}>
      {/* Hero Section */}
      <section className="hero-section hero" style={{ minHeight: '80vh', borderBottom: 'none' }}>
        <canvas id="hero-canvas"></canvas>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle eyebrow">A Narayan Machha Initiative</div>
          <h1 className="hero-title section-title" style={{ textTransform: 'none', marginBottom: 'var(--space-6)' }}>
            Building not just walls, <br className="hidden md:block" />
            <em style={{ textTransform: 'none' }}>but lifestyles.</em>
          </h1>
          <p className="hero-text hero-tagline">
            One group behind thousands of smiles. We craft spaces that inspire, nurture, and elevate everyday living.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="legacy-section" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-[var(--radius-lg)] group border border-[var(--border)]">
              <img 
                src="/assets/33 years of legecy.png" 
                alt="33 Years of Legacy" 
                className="legacy-img w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="legacy-text max-w-xl">
              <span className="eyebrow">33 Years Of Excellence</span>
              <h2 className="section-title" style={{ textTransform: 'none', marginBottom: 'var(--space-6)' }}>
                A journey rooted in <em>trust</em> and vision.
              </h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)' }}>
                Our debut goes back to 1993 as Sushmita Landmark—today known as Siddhi Narayan Group (SNG). 
              </p>
              <p style={{ color: 'var(--fg-2)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)' }}>
                We have been consistently delivering projects for 33 years. We cherish the trust shown by our existing clients who have referred over 40% of all homes sold. The group has nurtured the dream of its visionaries, continuing to inspire and lead the industry from the front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="vision-mission-section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Vision */}
            <div className="vision-mission-card pasr-card group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" style={{ backgroundColor: 'rgba(200,169,106,0.1)', color: 'var(--accent)' }}>
                  <Eye size={24} strokeWidth={1.5} />
                </div>
                <h2 className="pasr-card-title" style={{ margin: 0 }}>Vision</h2>
              </div>
              <p className="pasr-card-body">
                To be the leading real estate service provider in the region. We strive to develop collaborative partnerships based on transparency, mutual trust, and service to build lasting relationships. We aim to put customers at the center of all activities and create sustainable solutions that don't just meet expectations, but surpass them.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-mission-card pasr-card group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" style={{ backgroundColor: 'rgba(200,169,106,0.1)', color: 'var(--accent)' }}>
                  <Target size={24} strokeWidth={1.5} />
                </div>
                <h2 className="pasr-card-title" style={{ margin: 0 }}>Mission</h2>
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--accent)', fontStyle: 'italic', marginBottom: 'var(--space-4)' }} className="transition-colors duration-500 group-hover:text-[var(--fg)]">
                "Housing for All"
              </h3>
              <p className="pasr-card-body">
                SNG drafts a new life scale for customers—comprehensively designed to reach every section of society. We aim to serve each part of society by building residential properties, community amenities, and recreational activities, acting as a real estate company that serves every need.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Smart Homes (Roadmap Timeline) */}
      <SmartStackSection />

      {/* Philosophy & Core Values */}
      <section id="philosophy" className="philosophy-section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
            
            <div className="philosophy-intro max-w-md">
              <span className="eyebrow">Core Values</span>
              <h2 className="section-title" style={{ textTransform: 'none', marginBottom: 'var(--space-6)' }}>
                Philosophy & <br/><em>Strength</em>
              </h2>
              <p style={{ color: 'var(--fg-2)', marginBottom: 'var(--space-6)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)' }}>
                We believe in quality and attention to detail. Our systemized and organized work process, combined with a positive attitude, strong leadership, and planning, displays our professional competence.
              </p>
              <p style={{ color: 'var(--fg-2)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-body)' }}>
                To keep upgrading our standards, we adopt an absolutely transparent relationship with our clients, peers, associates, and workforce.
              </p>
            </div>

            <div className="core-values-grid grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              
              <div className="core-value-item flex flex-col pt-6 group cursor-default" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="eyebrow transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--muted)', margin: 0, textTransform: 'none', letterSpacing: '0.1em' }}>01</span>
                  <h3 className="pasr-card-title" style={{ margin: 0, textTransform: 'none' }}>Transparency</h3>
                </div>
                <p className="pasr-card-body">Water is our favorite drink, we serve you absolute clarity.</p>
              </div>

              <div className="core-value-item flex flex-col pt-6 lg:mt-12 group cursor-default" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="eyebrow transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--muted)', margin: 0, textTransform: 'none', letterSpacing: '0.1em' }}>02</span>
                  <h3 className="pasr-card-title" style={{ margin: 0, textTransform: 'none' }}>Commitment</h3>
                </div>
                <p className="pasr-card-body">We are as committed as the sun that rises daily.</p>
              </div>

              <div className="core-value-item flex flex-col pt-6 group cursor-default" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="eyebrow transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--muted)', margin: 0, textTransform: 'none', letterSpacing: '0.1em' }}>03</span>
                  <h3 className="pasr-card-title" style={{ margin: 0, textTransform: 'none' }}>Trust</h3>
                </div>
                <p className="pasr-card-body">Place your reliance & jump, we will catch you.</p>
              </div>

              <div className="core-value-item flex flex-col pt-6 lg:mt-12 group cursor-default" style={{ borderTop: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-4 transition-transform duration-300 group-hover:translate-x-2">
                  <span className="eyebrow transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: 'var(--muted)', margin: 0, textTransform: 'none', letterSpacing: '0.1em' }}>04</span>
                  <h3 className="pasr-card-title" style={{ margin: 0, textTransform: 'none' }}>Quality</h3>
                </div>
                <p className="pasr-card-body">For us, quality is not an art, it's a habit.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="leadership-section">
        <div className="container max-w-6xl">
          <div className="leadership-title text-center mb-16">
            <h2 className="section-title" style={{ textTransform: 'none' }}>
              The Brains Behind the <em>Legacy</em>
            </h2>
          </div>

          <div className="leadership-grid grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            <div className="leader-card pasr-card text-center items-center group">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-xl" style={{ backgroundColor: 'var(--surface-warm)', border: '1px solid var(--border)' }}>
                <User size={32} strokeWidth={1} style={{ color: 'var(--accent)' }} className="transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="eyebrow mb-2">Chairman</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--fg)', marginBottom: 'var(--space-4)' }}>Shri. Narayan Machha</h3>
              <p className="pasr-card-body max-w-sm">
                Chairman Shri. Narayan Machha began his journey with contracting work and ventured into real estate development in 1993. His guidance on legal matters has helped the company obtain timely statutory clearances. He is instrumental in making SNG a well-established name in the region.
              </p>
            </div>

            <div className="leader-card pasr-card text-center items-center group">
              <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 transition-all duration-500 group-hover:shadow-xl" style={{ backgroundColor: 'var(--surface-warm)', border: '1px solid var(--border)' }}>
                <User size={32} strokeWidth={1} style={{ color: 'var(--accent)' }} className="transition-transform duration-500 group-hover:scale-110" />
              </div>
              <span className="eyebrow mb-2">Second Gen, Big Leap</span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--fg)', marginBottom: 'var(--space-4)' }}>Mr. Sagar Machha</h3>
              <p className="pasr-card-body max-w-sm">
                A Civil Engineer and MBA Graduate in Real Estate from REMI (Mumbai). With a vision of 'Housing for All', he successfully builds on the equity of the brand. His responsibilities include Engineering, Construction, Marketing, and Sales.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Awards / Milestones */}
      <section id="awards" className="awards-section" style={{ backgroundColor: '#111', color: '#fff' }}>
        <div className="container max-w-6xl text-center">
          
          <div className="awards-intro">
            <div className="flex justify-center mb-6">
              <Award size={64} strokeWidth={1} style={{ color: 'var(--accent)' }} />
            </div>
            <span className="eyebrow" style={{ color: '#888' }}>Honored by the Governor of Maharashtra</span>
            <h2 className="section-title" style={{ color: '#fff', textTransform: 'none', marginBottom: 'var(--space-12)' }}>
              For the remarkable project "Thane Next" — <br className="hidden md:block" />
              <em style={{ color: 'var(--accent)' }}>Innovation Leader in Real Estate.</em>
            </h2>
          </div>

          <div className="awards-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="award-item flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-video bg-[#222] border border-[#333] rounded-[var(--radius-sm)] overflow-hidden mb-4 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <img src="https://placehold.co/400x300/111/d4af37?text=PILLARS+OF+MAHARASHTRA" alt="Pillars of Maharashtra" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <span className="eyebrow" style={{ fontSize: '10px', color: '#888' }} className="transition-colors duration-500 group-hover:text-white">Pillars of Maharashtra</span>
            </div>

            <div className="award-item flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-video bg-[#222] border border-[#333] rounded-[var(--radius-sm)] overflow-hidden mb-4 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <img src="https://placehold.co/400x300/111/d4af37?text=TRENDSETTERS" alt="Trendsetters" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <span className="eyebrow" style={{ fontSize: '10px', color: '#888' }} className="transition-colors duration-500 group-hover:text-white">Trendsetters</span>
            </div>

            <div className="award-item flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-video bg-[#222] border border-[#333] rounded-[var(--radius-sm)] overflow-hidden mb-4 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <img src="https://placehold.co/400x300/111/d4af37?text=IGBC" alt="IGBC" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <span className="eyebrow" style={{ fontSize: '10px', color: '#888' }} className="transition-colors duration-500 group-hover:text-white">IGBC</span>
            </div>

            <div className="award-item flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-video bg-[#222] border border-[#333] rounded-[var(--radius-sm)] overflow-hidden mb-4 transition-all duration-500 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_rgba(200,169,106,0.1)]">
                <img src="https://placehold.co/400x300/111/d4af37?text=NAREDCO" alt="NAREDCO" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
              </div>
              <span className="eyebrow" style={{ fontSize: '10px', color: '#888' }} className="transition-colors duration-500 group-hover:text-white">NAREDCO</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
