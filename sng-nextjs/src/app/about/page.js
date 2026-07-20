'use client';
import React, { useEffect } from 'react';

import SmartStackSection from '@/components/SmartStackSection';
import { Award, Eye, Target, Droplet, Sun, ShieldCheck, CheckCircle, User } from 'lucide-react';

export default function About() {

  return (
    <main className="bg-[#F8F6F2] text-[#08162B] min-h-screen font-sans">

      {/* Minimal Hero Section */}
      <section className="relative flex items-center justify-center min-h-[70vh] px-6 pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <span className="uppercase tracking-widest text-sm font-semibold mb-6 block text-[#C8A96A]">
            A Narayan Machha Initiative
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-[#08162B]" style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.1 }}>
            Building not just walls, <br className="hidden md:block" />
            <span className="italic font-light text-gray-400">but lifestyles.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#4A5568] max-w-2xl mx-auto font-light leading-relaxed">
            One group behind thousands of smiles. We craft spaces that inspire, nurture, and elevate everyday living.
          </p>
        </div>
      </section>

      {/* Streamlined Story & Legacy */}
      <section id="legacy" className="py-24 px-6 border-t border-[rgba(8,22,43,0.05)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Side */}
            <div className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:mx-0 overflow-hidden rounded-sm group">
              <img 
                src="/assets/33 years of legecy.png" 
                alt="33 Years of Legacy" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Minimal Stat Box */}
              <div className="absolute bottom-0 left-0 bg-[#F8F6F2] p-8 pr-12 pt-12 border-t border-r border-[rgba(8,22,43,0.05)]">
                <div className="text-4xl lg:text-5xl mb-2 text-[#C8A96A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  3000+
                </div>
                <div className="text-xs tracking-widest font-semibold text-[#08162B] uppercase">
                  Happy Families
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="max-w-xl">
              <span className="uppercase tracking-widest text-xs font-semibold mb-4 block text-gray-500">
                33 Years Of Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#08162B]" style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.2 }}>
                A journey rooted in <span className="italic font-light text-gray-400">trust</span> and vision.
              </h2>
              <p className="text-lg text-[#4A5568] mb-6 font-light leading-relaxed">
                Our debut goes back to 1993 as Sushmita Landmark—today known as Siddhi Narayan Group (SNG). 
              </p>
              <p className="text-lg text-[#4A5568] font-light leading-relaxed">
                We have been consistently delivering projects for 33 years. We cherish the trust shown by our existing clients who have referred over 40% of all homes sold. The group has nurtured the dream of its visionaries, continuing to inspire and lead the industry from the front.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Typography Driven */}
      <section id="vision" className="py-24 px-6 bg-white border-y border-[rgba(8,22,43,0.05)]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Vision */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <Eye className="text-[#C8A96A]" size={24} strokeWidth={1.5} />
                <h2 className="text-2xl tracking-widest uppercase font-semibold text-[#08162B]">Vision</h2>
              </div>
              <p className="text-lg text-[#4A5568] font-light leading-relaxed">
                To be the leading real estate service provider in the region. We strive to develop collaborative partnerships based on transparency, mutual trust, and service to build lasting relationships. We aim to put customers at the center of all activities and create sustainable solutions that don't just meet expectations, but surpass them.
              </p>
            </div>

            {/* Mission */}
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <Target className="text-[#C8A96A]" size={24} strokeWidth={1.5} />
                <h2 className="text-2xl tracking-widest uppercase font-semibold text-[#08162B]">Mission</h2>
              </div>
              <h3 className="text-2xl text-[#C8A96A] mb-4 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                "Housing for All"
              </h3>
              <p className="text-lg text-[#4A5568] font-light leading-relaxed">
                SNG drafts a new life scale for customers—comprehensively designed to reach every section of society. We aim to serve each part of society by building residential properties, community amenities, and recreational activities, acting as a real estate company that serves every need.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Smart Homes (Roadmap Timeline) */}
      <SmartStackSection />

      {/* Philosophy & Core Values */}
      <section id="philosophy" className="py-24 px-6 bg-white border-t border-[rgba(8,22,43,0.05)]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-start">
            
            {/* Intro */}
            <div className="max-w-md">
              <span className="uppercase tracking-widest text-xs font-semibold mb-4 block text-gray-500">
                Core Values
              </span>
              <h2 className="text-4xl font-bold mb-8 text-[#08162B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Philosophy & <span className="italic font-light text-gray-400">Strength</span>
              </h2>
              <p className="text-lg text-[#4A5568] mb-6 font-light leading-relaxed">
                We believe in quality and attention to detail. Our systemized and organized work process, combined with a positive attitude, strong leadership, and planning, displays our professional competence.
              </p>
              <p className="text-lg text-[#4A5568] font-light leading-relaxed">
                To keep upgrading our standards, we adopt an absolutely transparent relationship with our clients, peers, associates, and workforce.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              
              <div className="flex flex-col border-t border-[rgba(8,22,43,0.1)] pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[#C8A96A] tracking-widest">01</span>
                  <h3 className="text-xl font-semibold text-[#08162B]">Transparency</h3>
                </div>
                <p className="text-[#4A5568] font-light leading-relaxed">Water is our favorite drink, we serve you absolute clarity.</p>
              </div>

              <div className="flex flex-col border-t border-[rgba(8,22,43,0.1)] pt-6 lg:mt-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[#C8A96A] tracking-widest">02</span>
                  <h3 className="text-xl font-semibold text-[#08162B]">Commitment</h3>
                </div>
                <p className="text-[#4A5568] font-light leading-relaxed">We are as committed as the sun that rises daily.</p>
              </div>

              <div className="flex flex-col border-t border-[rgba(8,22,43,0.1)] pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[#C8A96A] tracking-widest">03</span>
                  <h3 className="text-xl font-semibold text-[#08162B]">Trust</h3>
                </div>
                <p className="text-[#4A5568] font-light leading-relaxed">Place your reliance & jump, we will catch you.</p>
              </div>

              <div className="flex flex-col border-t border-[rgba(8,22,43,0.1)] pt-6 lg:mt-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-[#C8A96A] tracking-widest">04</span>
                  <h3 className="text-xl font-semibold text-[#08162B]">Quality</h3>
                </div>
                <p className="text-[#4A5568] font-light leading-relaxed">For us, quality is not an art, it's a habit.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#08162B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              The Brains Behind the <span className="italic font-light text-gray-400">Legacy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            
            {/* Leader 1 */}
            <div className="flex flex-col text-center items-center">
              <div className="w-24 h-24 rounded-full bg-[rgba(8,22,43,0.03)] flex items-center justify-center mb-6">
                <User size={32} strokeWidth={1} className="text-[#C8A96A]" />
              </div>
              <span className="uppercase tracking-widest text-xs font-bold text-[#C8A96A] mb-2">Chairman</span>
              <h3 className="text-3xl mb-4 text-[#08162B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Shri. Narayan Machha</h3>
              <p className="text-[#4A5568] font-light leading-relaxed max-w-sm">
                Chairman Shri. Narayan Machha began his journey with contracting work and ventured into real estate development in 1993. His guidance on legal matters has helped the company obtain timely statutory clearances. He is instrumental in making SNG a well-established name in the region.
              </p>
            </div>

            {/* Leader 2 */}
            <div className="flex flex-col text-center items-center">
              <div className="w-24 h-24 rounded-full bg-[rgba(8,22,43,0.03)] flex items-center justify-center mb-6">
                <User size={32} strokeWidth={1} className="text-[#C8A96A]" />
              </div>
              <span className="uppercase tracking-widest text-xs font-bold text-[#C8A96A] mb-2">Second Gen, Big Leap</span>
              <h3 className="text-3xl mb-4 text-[#08162B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Mr. Sagar Machha</h3>
              <p className="text-[#4A5568] font-light leading-relaxed max-w-sm">
                A Civil Engineer and MBA Graduate in Real Estate from REMI (Mumbai). With a vision of 'Housing for All', he successfully builds on the equity of the brand. His responsibilities include Engineering, Construction, Marketing, and Sales.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Awards / Milestones - Minimalist Version */}
      <section id="awards" className="py-24 px-6 bg-[#08162B] text-[#F8F6F2]">
        <div className="container mx-auto max-w-6xl text-center">
          
          <Award size={40} strokeWidth={1} className="text-[#C8A96A] mx-auto mb-6" />
          <span className="uppercase tracking-widest text-xs font-semibold text-gray-400 block mb-4">Honored by the Governor of Maharashtra</span>
          <h2 className="text-3xl md:text-4xl font-bold max-w-2xl mx-auto mb-16" style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.3 }}>
            For the remarkable project "Thane Next" — <br className="hidden md:block" />
            <span className="italic font-light text-[#C8A96A]">Innovation Leader in Real Estate.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden mb-4 transition-colors duration-500 group-hover:border-[#C8A96A]">
                <img src="https://placehold.co/400x300/08162b/d4af37?text=PILLARS+OF+MAHARASHTRA" alt="Pillars of Maharashtra" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="uppercase tracking-widest text-[10px] font-semibold text-gray-400">Pillars of Maharashtra</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden mb-4 transition-colors duration-500 group-hover:border-[#C8A96A]">
                <img src="https://placehold.co/400x300/08162b/d4af37?text=TRENDSETTERS" alt="Trendsetters" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="uppercase tracking-widest text-[10px] font-semibold text-gray-400">Trendsetters</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden mb-4 transition-colors duration-500 group-hover:border-[#C8A96A]">
                <img src="https://placehold.co/400x300/08162b/d4af37?text=IGBC" alt="IGBC" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="uppercase tracking-widest text-[10px] font-semibold text-gray-400">IGBC</span>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-full aspect-video bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-sm overflow-hidden mb-4 transition-colors duration-500 group-hover:border-[#C8A96A]">
                <img src="https://placehold.co/400x300/08162b/d4af37?text=NAREDCO" alt="NAREDCO" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <span className="uppercase tracking-widest text-[10px] font-semibold text-gray-400">NAREDCO</span>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}
