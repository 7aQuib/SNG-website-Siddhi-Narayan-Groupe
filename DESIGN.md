# DESIGN SYSTEM SPECIFICATION: SNG SUNRISE LEGACY DESIGN SYSTEM

Visual style guide, layout structure, and token definitions for the redesigned Aura Residences Kyoto digital experience based on the SNG Website UI Design Kit.

## 1. Brand Identity & Visual Tone
- **Visual Style**: Modern Minimal, clean geometric grids, high negative space.
- **Color Stance**: Warm luxury light aesthetic (travertine background, warm gold, champagne accents, charcoal-brown text).
- **Design Intent**: Warmth, Trust, Legacy, Sophistication, Timeless Luxury.

## 2. Style Tokens

### Colors (Verbatim Hex bindings)
```css
:root {
  --bg: #F8F6F2;                 /* Primary Background (Travertine stone light) */
  --surface: #FFFFFF;            /* White card surfaces */
  --surface-warm: #EFE7DB;       /* Secondary Background (Warm beige) */
  --fg: #2A211C;                 /* Primary Text (Charcoal-brown / dark chocolate) */
  --fg-2: #5E544C;               /* Secondary Text (Warm grey-brown) */
  --muted: #8D8075;              /* Muted text / Stone shadow light */
  --accent: #C8A96A;             /* Champagne Gold */
  --accent-hover: #D9B97C;       /* Warm Gold */
  --accent-on: #FFFFFF;          /* Text on gold background */
  --border: #F2EEE8;             /* Border / Light Surface */
  --border-soft: #EFE7DB;
}
```

### Typography Stacks
- **Display / Editorial Serif**: `'Cormorant Garamond'`, `'Playfair Display'`, `'Didot'`, serif
- **Grotesk Sans**: `'Inter'`, `'Avenir Next'`, system-ui, sans-serif
- **Tabular / Monospace**: `'JetBrains Mono'`, monospace

- H1: 56px / 64px, Cormorant Garamond, Regular
- H2: 40px / 48px, Cormorant Garamond, Medium
- H3: 28px / 36px, Cormorant Garamond, Medium
- BODY: 16px / 28px, Inter, Regular
- SMALL: 14px / 24px, Inter, Regular

### Radii & Shadows
- **Card Radius**: 32px (`--radius-lg`)
- **Button Radius**: 9999px / Pill (`--radius-pill`)
- **Card Shadow**: Soft, high-end light drop shadow:
  `box-shadow: 0 20px 40px rgba(42, 33, 28, 0.03), 0 1px 3px rgba(42, 33, 28, 0.02);`

## 3. UI Components & Patterns (SNG Kit Alignment)
1. **Header Navigation**: Left "SNG Sunrise Legacy" brand mark, central navigation links (Residences, Philosophy, Projects, Legacy, Contact), right CTA button ("Enquire Now >"), and hamburger toggle button.
2. **Dot Navigation Rail**: Vertical dots tracking active viewport sections dynamically.
3. **Hero Section**: 3D reflecting pool/colonnade scene inside a travertine light environment. Bottom-left play-trigger thumbnail card ("PASR Experience") opening a video presentation modal.
4. **PASR Concept Cards**: 4 horizontal cards using large numbers (`01`, `02`, `03`, `04`), Cormorant Garamond headings, and a "Learn More >" link.
5. **Project Amenities Section**: Left description column, right asymmetric collage of 5 images (1 tall vertical + 2x2 grid) with rounded corners and caption badges.
6. **Company About Us**: Left-aligned exterior view, right-aligned philosophy description with collaboration partners.
7. **Customer Testimonials**: Staggered quote grid (3 top, 4 bottom) with light card backgrounds and client details.
8. **FAQ Accordion**: 3 Q&A toggle accordions utilizing the exact questions and copy from the SNG Website UI design kit.
9. **Curated Portfolios**: Auto-scrolling logo marquee slider, accompanied by 3 project cards carrying custom status badges ("New Project", "Completed", "Coming Soon").
10. **Completed Project Map**: Gold-outlined outline map of the world with pulsing location pin tooltips.
11. **Get In Touch Registry Form**: Left details box with Three.js gold sand-wave mesh animation, right input fields with labels, radio buttons (Residence, Penthouse, Villa) and terms checkbox.
12. **Footer**: Clean logo, links, social circles, copyright, and partner credits.
