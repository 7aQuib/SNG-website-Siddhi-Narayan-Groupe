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
    <footer className="pt-20 pb-12 border-t border-[var(--border)] bg-[var(--surface-warm)] text-[var(--fg)] relative overflow-hidden">
      <div className="container">
        
        {/* Top Section: Brand Statement & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-16 border-b border-[var(--border-soft)] items-end">
          <div>
            <span className="eyebrow block mb-3" style={{ color: 'var(--accent)' }}>Stay Connected</span>
            <h2 className="section-title text-3xl md:text-4xl font-light text-[var(--fg)] uppercase tracking-tight">
              Crafting Sanctuaries of <br />
              <em className="text-[var(--accent)] font-serif italic font-normal">Timeless Elegance.</em>
            </h2>
          </div>

          <div className="max-w-md w-full lg:ml-auto">
            <p className="text-xs uppercase tracking-widest text-[var(--muted)] mb-4 font-semibold">
              Subscribe for Private Preview Invitations
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3 text-xs bg-[var(--surface)] text-[var(--fg)] border border-[var(--border)] rounded-full focus:outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--muted)]"
              />
              <button
                type="submit"
                className="btn btn-primary whitespace-nowrap text-[10px] px-6 py-3"
              >
                {isSubscribed ? 'Subscribed ✓' : 'Join List'}
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Multi-Column Mega Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-[var(--border-soft)]">
          
          {/* Col 1: Brand Info */}
          <div>
            <Link href="/" className="nav-logo inline-block mb-4">
              SNG
              <span className="nav-logo-sub mt-1">Siddhi Narayan Group</span>
            </Link>
            <p className="text-xs text-[var(--fg-2)] leading-relaxed mb-6">
              Over 33 years of delivering architectural excellence, building trust, and shaping modern lifestyles across the region.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-xs font-semibold text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                IN
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-xs font-semibold text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                FB
              </a>
              <a href="#" className="w-9 h-9 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-xs font-semibold text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors">
                YT
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-6">Explore</h4>
            <ul className="space-y-3 text-xs text-[var(--fg-2)] list-none p-0 m-0">
              <li><Link href="/about" className="hover:text-[var(--accent)] transition-colors">About SNG Legacy</Link></li>
              <li><a href="/#experience" className="hover:text-[var(--accent)] transition-colors">Residences Collection</a></li>
              <li><a href="/#about" className="hover:text-[var(--accent)] transition-colors">Design Philosophy</a></li>
              <li><a href="/#projects" className="hover:text-[var(--accent)] transition-colors">Featured Projects</a></li>
              <li><a href="/#map" className="hover:text-[var(--accent)] transition-colors">Regional Footprint</a></li>
            </ul>
          </div>

          {/* Col 3: Portfolio & Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-6">Developments</h4>
            <ul className="space-y-3 text-xs text-[var(--fg-2)] list-none p-0 m-0">
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Thane Next Residences</span></li>
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Sushmita Landmark</span></li>
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Aman-Inspired Sanctuaries</span></li>
              <li><span className="hover:text-[var(--accent)] transition-colors cursor-pointer">Smart Living Towers</span></li>
            </ul>
          </div>

          {/* Col 4: Corporate Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[var(--fg)] mb-6">Headquarters</h4>
            <address className="not-italic text-xs text-[var(--fg-2)] leading-relaxed space-y-2">
              <p>Siddhi Narayan Group HQ</p>
              <p>Prime Financial & Residential Hub</p>
              <p className="pt-2 text-[var(--fg)] font-semibold">Inquiries & Appointments:</p>
              <p className="text-[var(--accent)] font-mono">contact@siddhinarayan.com</p>
            </address>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--muted)] gap-4">
          <div>
            © 2026 Siddhi Narayan Group (SNG). All Rights Reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--fg)] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[var(--fg)] transition-colors">RERA Disclosures</a>
          </div>
          <div className="text-right">
            Designed in collaboration with <span className="text-[var(--fg)]">Atelier Zero</span> &amp; <span className="text-[var(--fg)]">Kengo Kuma</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
