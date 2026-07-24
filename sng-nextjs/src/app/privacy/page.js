import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Siddhi Narayan Group',
  description: 'Terms of Use and Privacy Policy for Siddhi Narayan Group website and services.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)] pt-32 pb-20">
      <div className="container max-w-4xl mx-auto">
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-6 font-mono">
            ← Back to Home
          </Link>
          <span className="eyebrow block mb-3 text-[var(--accent)] text-xs uppercase tracking-[0.2em] font-mono font-semibold">Legal Information</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl uppercase leading-tight font-serif font-light tracking-tight mb-8">
            Terms &amp; Privacy <em>Policy</em>
          </h1>
          <div className="w-16 h-px bg-[var(--accent)]"></div>
        </div>

        <div className="prose prose-invert max-w-none text-[var(--fg-2)] leading-relaxed space-y-8 text-sm sm:text-base">
          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-[var(--fg)] mb-4 uppercase">1. Introduction</h2>
            <p>
              Welcome to the Siddhi Narayan Group website. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our digital platforms, submit inquiries, or visit our properties. By using this website, you agree to the terms outlined below.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-[var(--fg)] mb-4 uppercase">2. MahaRERA Disclaimer</h2>
            <p>
              The information, imagery, layout plans, and specifications presented on this website are conceptual and indicative in nature. They do not constitute a legal offering or a binding agreement. Siddhi Narayan Group reserves the right to make changes to layouts, designs, amenities, and specifications without prior notice. 
            </p>
            <p className="mt-4">
              All our ongoing projects are registered under MahaRERA. Please verify all details, including area, amenities, services, and terms of sales directly with our official sales team prior to concluding any decision for buying any unit(s) in any of our projects.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-[var(--fg)] mb-4 uppercase">3. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, when you participate in activities on the website, or otherwise when you contact us. This includes:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Contact Data:</strong> Name, email address, phone number, and mailing address.</li>
              <li><strong>Inquiry Data:</strong> Information regarding property preferences, budget, and specific project interests.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and interaction metrics with our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-[var(--fg)] mb-4 uppercase">4. How We Use Your Information</h2>
            <p>
              The information collected is strictly used for real estate facilitation and customer relationship management, including:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Responding to your inquiries and scheduling property viewings.</li>
              <li>Sending administrative information, project updates, and newsletters (with the option to opt-out).</li>
              <li>Improving our website performance, marketing efforts, and user experience.</li>
              <li>Fulfilling legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-[var(--fg)] mb-4 uppercase">5. Data Sharing and Security</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share information with our trusted channel partners, legal advisors, and service providers solely for the purpose of serving your real estate requirements. We employ industry-standard security measures to protect your data against unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-serif text-[var(--fg)] mb-4 uppercase">6. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact our administrative team at:
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest text-[var(--accent)]">
              Email: contact@siddhinarayan.com<br/>
              Phone: +91 98765 43210
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
