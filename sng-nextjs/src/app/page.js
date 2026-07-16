import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ResidencesSection from '@/components/home/ResidencesSection';
import AmenitiesSection from '@/components/home/AmenitiesSection';
import AboutSection from '@/components/home/AboutSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import ProjectsSection from '@/components/home/ProjectsSection';

import MapSection from '@/components/home/MapSection';
import ContactSection from '@/components/home/ContactSection';
import VideoModal from '@/components/home/VideoModal';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResidencesSection />
      <AmenitiesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ProjectsSection />
      <MapSection />
      <ContactSection />
      <VideoModal />
    </main>
  );
}
