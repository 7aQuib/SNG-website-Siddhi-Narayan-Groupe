'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="pt-24 pb-16 border-t border-[var(--border)] bg-[var(--surface-warm)] text-[var(--fg)] relative">
      <div className="container">
        
        {/* Top Banner: Brand Statement & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--border-soft)] items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow block mb-3 text-[var(--accent)]">Stay Connected</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[var(--fg)] leading-tight tracking-tight uppercase">
              Crafting Sanctuaries of <br />
              <em className="text-[var(--accent)] font-serif italic not-italic font-normal">Timeless Elegance.</em>
            </h2>
          </div>

          <div className="lg:col-span-5 w-full">
            <p className="text-[11px] uppercase tracking-widest text-[var(--muted)] mb-3 font-semibold">
              Subscribe for Private Preview Invitations
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 items-stretch">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 px-5 text-xs bg-[var(--surface)] text-[var(--fg)] border border-[var(--border)] rounded-full focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)]"
              />
              <button
                type="submit"
                className="h-12 px-8 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--accent-on)] font-semibold text-[11px] uppercase tracking-widest rounded-full transition-colors whitespace-nowrap shrink-0 flex items-center justify-center"
              >
                {isSubscribed ? 'Subscribed ✓' : 'Join List'}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Grid: Multi-Column Mega Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 py-16 border-b border-[var(--border-soft)]">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <span className="font-serif text-2xl font-semibold tracking-widest text-[var(--fg)] uppercase block leading-none">
                  SNG
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[var(--fg-2)] uppercase block mt-1">
                  Siddhi Narayan Group
                </span>
              </Link>
              <p className="text-xs text-[var(--fg-2)] leading-relaxed mb-6">
                Over 33 years of delivering architectural excellence, building trust, and shaping modern lifestyles across the region.
              </p>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-xs font-semibold text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-xs font-semibold text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-xs font-semibold text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-5">Explore</h4>
            <ul className="space-y-3.5 text-xs text-[var(--fg-2)] list-none p-0 m-0">
              <li><Link href="/about" className="hover:text-[var(--accent)] transition-colors inline-block">About SNG Legacy</Link></li>
              <li><a href="/#experience" className="hover:text-[var(--accent)] transition-colors inline-block">Residences Collection</a></li>
              <li><a href="/#about" className="hover:text-[var(--accent)] transition-colors inline-block">Design Philosophy</a></li>
              <li><a href="/#projects" className="hover:text-[var(--accent)] transition-colors inline-block">Featured Projects</a></li>
              <li><a href="/#map" className="hover:text-[var(--accent)] transition-colors inline-block">Regional Footprint</a></li>
            </ul>
          </div>

          {/* Col 3: Portfolio & Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-5">Developments</h4>
            <ul className="space-y-3.5 text-xs text-[var(--fg-2)] list-none p-0 m-0">
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer inline-block">Thane Next Residences</span></li>
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer inline-block">Sushmita Landmark</span></li>
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer inline-block">Aman-Inspired Sanctuaries</span></li>
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer inline-block">Smart Living Towers</span></li>
            </ul>
          </div>

          {/* Col 4: Corporate Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-5">Headquarters</h4>
            <address className="not-italic text-xs text-[var(--fg-2)] leading-relaxed space-y-2">
              <p>Siddhi Narayan Group HQ</p>
              <p>Prime Financial & Residential Hub</p>
              <p className="pt-3 text-[var(--fg)] font-semibold">Inquiries & Appointments:</p>
              <p className="text-[var(--accent)] font-mono tracking-wide">contact@siddhinarayan.com</p>
            </address>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Credits */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center text-[11px] text-[var(--muted)] gap-4 text-center md:text-left">
          <div>
            © 2026 Siddhi Narayan Group (SNG). All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-[var(--fg)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors">RERA Disclosures</a>
          </div>
          <div>
            Designed in collaboration with <span className="text-[var(--fg)] font-medium">Atelier Zero</span> &amp; <span className="text-[var(--fg)] font-medium">Kengo Kuma</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
