export const projectsData = [
  {
    id: '1',
    slug: 'kumo-penthouse',
    title: 'The Kumo Penthouse',
    subtitle: 'Higashiyama, Kyoto',
    badgeText: 'New Project',
    badgeClass: '',
    status: 'In Development',
    heroImage: '/assets/residence_interior.jpg',
    architect: 'Kengo Kuma & Associates × Atelier Zero',
    completionYear: '2026',
    totalArea: '6,450 sq.ft',
    bedrooms: '4 Bedrooms',
    bathrooms: '5 Onsen Baths',
    overview: 'Perched above the historic roofs of Higashiyama, The Kumo Penthouse is a masterwork of elevated minimalism. Designed to evoke the feeling of living within the clouds, this sanctuary blends floating indoor-outdoor verandas, custom calacatta marble, and private geothermal hot spring baths facing the iconic silhouette of Kiyomizu-dera.',
    philosophy: 'A continuous dialogue between weightless geometry and monumental stone. We crafted translucent shoji paneling and carbon-charred timber to filter natural light softly throughout the day.',
    gallery: [
      { src: '/assets/residence_interior.jpg', title: 'Grand Living Salon', caption: 'Double-height ceilings framed in honed travertine and charred cedar.' },
      { src: '/assets/hero_residence.jpg', title: 'Private Onsen Terrace', caption: 'Sky terrace hot spring overlooking historic temple gardens.' },
      { src: '/assets/amenity_pool.jpg', title: 'Subterranean Pool', caption: 'Geothermal thermal pool carved directly from riverbed granite.' },
      { src: '/assets/marble_detail.jpg', title: 'Material Palette', caption: 'Custom hand-finished Calacatta gold marble and blackened bronze.' }
    ],
    features: [
      { title: 'Private Geothermal Onsen', desc: 'Directly sourced mineral hot spring bath integrated into the sky deck.' },
      { title: 'Shoji Light Filtering', desc: 'Custom motorized cedar shoji screens for natural light diffusion.' },
      { title: 'Smart Home Automation', desc: 'Integrated climate, ambient lighting, and acoustics via custom wall controls.' },
      { title: 'Private Elevator Access', desc: 'Dedicated biometric elevator entrance opening directly into the foyer.' },
      { title: 'Wine & Tea Cellar', desc: 'Climate-controlled sommelier vault and traditional tatami tea chamber.' }
    ],
    specifications: [
      { label: 'Location', value: 'Higashiyama, Kyoto' },
      { label: 'Gross Area', value: '6,450 sq.ft (600 sq.m)' },
      { label: 'Outdoor Deck', value: '1,800 sq.ft Terrace' },
      { label: 'Ceiling Height', value: '4.2 Meters' },
      { label: 'Parking', value: '2 Private Underground Bays' },
      { label: 'Handover', value: 'Q4 2026' }
    ]
  },
  {
    id: '2',
    slug: 'niwa-pavilion',
    title: 'The Niwa Pavilion',
    subtitle: 'Kiyomizu, Kyoto',
    badgeText: 'Completed',
    badgeClass: 'badge-completed',
    status: 'Ready for Occupancy',
    heroImage: '/assets/hero_residence.jpg',
    architect: 'Atelier Zero Architects',
    completionYear: '2024',
    totalArea: '5,200 sq.ft',
    bedrooms: '3 Bedrooms',
    bathrooms: '4 Baths',
    overview: 'The Niwa Pavilion anchors its living spaces around a private central glass courtyard garden. Enclosed by hand-selected river stones, mature maple trees, and tadelakt plaster walls, it offers an immersive sanctuary experience in the historic heart of Kiyomizu.',
    philosophy: 'Harmonizing internal tranquility with external nature. Every window acts as a framed botanical portrait that evolves with the four seasons.',
    gallery: [
      { src: '/assets/hero_residence.jpg', title: 'Courtyard Facade', caption: 'Double-height glass pavilion facing private zen garden.' },
      { src: '/assets/residence_interior.jpg', title: 'Primary Suite', caption: 'Smoked oak flooring paired with raw tadelakt wall plaster.' },
      { src: '/assets/marble_detail.jpg', title: 'Stone Craftsmanship', caption: 'Custom carved stone soaking tub with ambient recessed lighting.' },
      { src: '/assets/amenity_pool.jpg', title: 'Wellness Room', caption: 'Aromatic cedar sauna and cold plunge bath.' }
    ],
    features: [
      { title: 'Glass Atrium Courtyard', desc: 'Central indoor-outdoor zen sanctuary with Japanese maple trees.' },
      { title: 'Tadelakt Plaster Finishes', desc: 'Seamless waterproof lime plaster applied by regional artisans.' },
      { title: 'Radiant Floor Heating', desc: 'Hydronic underfloor warming throughout all stone and wood surfaces.' },
      { title: 'Integrated Solar Roof', desc: 'Discreet photovoltaic shingles providing clean auxiliary power.' }
    ],
    specifications: [
      { label: 'Location', value: 'Kiyomizu, Kyoto' },
      { label: 'Gross Area', value: '5,200 sq.ft' },
      { label: 'Garden Area', value: '1,200 sq.ft Private Courtyard' },
      { label: 'Ceiling Height', value: '3.8 Meters' },
      { label: 'Status', value: '100% Completed' },
      { label: 'Handover', value: 'Immediate' }
    ]
  },
  {
    id: '3',
    slug: 'valley-suite',
    title: 'The Valley Suite',
    subtitle: 'Kamogawa, Kyoto',
    badgeText: 'Coming Soon',
    badgeClass: 'badge-coming-soon',
    status: 'Pre-Launch Preview',
    heroImage: '/assets/amenity_pool.jpg',
    architect: 'Kengo Kuma & Associates',
    completionYear: '2027',
    totalArea: '7,100 sq.ft',
    bedrooms: '5 Bedrooms',
    bathrooms: '6 Baths',
    overview: 'Overlooking the serene bamboo groves of Kamogawa river valley, The Valley Suite features a dramatic cantilevered cedar veranda and outdoor river-stone baths designed to dissolve the boundary between architecture and forest.',
    philosophy: 'Organic integration into the natural topography. Utilizing regional bamboo, volcanic stone, and timber sourced within a 50-mile radius.',
    gallery: [
      { src: '/assets/amenity_pool.jpg', title: 'Infinite Pool Deck', caption: 'Overhanging infinity pool merging with Kamogawa valley.' },
      { src: '/assets/marble_detail.jpg', title: 'Living Pavilion', caption: 'Open-concept layout with floor-to-ceiling glass sliders.' },
      { src: '/assets/hero_residence.jpg', title: 'Bamboo Deck', caption: 'Cantilevered cedar veranda floating above riverbank.' },
      { src: '/assets/residence_interior.jpg', title: 'Dining Lounge', caption: 'Custom 12-seater single-slab walnut dining table.' }
    ],
    features: [
      { title: 'Floating Veranda', desc: 'Overhanging timber deck floating directly over the bamboo canopy.' },
      { title: 'River-Stone Baths', desc: 'Freestanding tubs carved out of single river boulders.' },
      { title: 'Private Infinity Pool', desc: 'Heated saltwater pool with edge flow into the valley skyline.' },
      { title: 'Private Forest Trail', desc: 'Direct gated trail access leading into Kyoto bamboo forest.' }
    ],
    specifications: [
      { label: 'Location', value: 'Kamogawa, Kyoto' },
      { label: 'Gross Area', value: '7,100 sq.ft' },
      { label: 'Plot Size', value: '14,500 sq.ft' },
      { label: 'Ceiling Height', value: '4.5 Meters' },
      { label: 'Status', value: 'Architectural Approval' },
      { label: 'Pre-Booking', value: 'Open for Private Inquiries' }
    ]
  },
  {
    id: '4',
    slug: 'sora-villa',
    title: 'The Sora Villa',
    subtitle: 'Arashiyama, Kyoto',
    badgeText: 'New Project',
    badgeClass: '',
    status: 'In Development',
    heroImage: '/assets/marble_detail.jpg',
    architect: 'SNG Heritage Studio',
    completionYear: '2026',
    totalArea: '5,800 sq.ft',
    bedrooms: '4 Bedrooms',
    bathrooms: '5 Baths',
    overview: 'Perched along the maple-covered hills of Arashiyama, The Sora Villa combines mountain seclusion with urban refinement. Highlights include a private cedar forest walkway, stone reflection pools, and panoramic views of Sagano.',
    philosophy: 'Crafting stillness through material contrast—blackened bronze accents against warm Hinoki cypress timber.',
    gallery: [
      { src: '/assets/marble_detail.jpg', title: 'Reflection Terrace', caption: 'Stone water basin reflecting sunset over Arashiyama hills.' },
      { src: '/assets/hero_residence.jpg', title: 'Great Room', caption: 'Volumetric stone fireplace and floor-to-ceiling glazing.' },
      { src: '/assets/residence_interior.jpg', title: 'Master Sanctuary', caption: 'Elevated sleeping suite with private outdoor Hinoki bath.' },
      { src: '/assets/amenity_pool.jpg', title: 'Outdoor Fire Lounge', caption: 'Sunken fire pit surrounded by reflective water features.' }
    ],
    features: [
      { title: 'Cedar Forest Walkway', desc: 'Private elevated walkway winding through old-growth cedar trees.' },
      { title: 'Hinoki Cypress Baths', desc: 'Traditional Japanese soaking tub crafted from fragrant Hinoki wood.' },
      { title: 'Sunken Fire Lounge', desc: 'Outdoor fire pit with integrated stone seating and ambient lighting.' },
      { title: 'Acoustically Isolated Studio', desc: 'Soundproofed space suitable for music, cinema, or meditation.' }
    ],
    specifications: [
      { label: 'Location', value: 'Arashiyama, Kyoto' },
      { label: 'Gross Area', value: '5,800 sq.ft' },
      { label: 'Terrace Area', value: '1,400 sq.ft' },
      { label: 'Ceiling Height', value: '3.9 Meters' },
      { label: 'Handover', value: 'Q3 2026' },
      { label: 'Architect', value: 'SNG Heritage Studio' }
    ]
  }
];

export function getProjectBySlug(slug) {
  return projectsData.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return projectsData.map((p) => p.slug);
}
