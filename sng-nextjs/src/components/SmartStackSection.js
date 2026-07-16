'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Leaf, Target, Diamond, TrendingUp, Clock } from 'lucide-react';
import SmartCard from './SmartCard';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CARDS_DATA = [
  {
    letter: "S",
    title: "Sustainable",
    description: "Eco-Friendly Housing",
    features: [
      "IGBC certified developments",
      "Integrated solar panels",
      "Advanced rainwater systems"
    ],
    icon: Leaf
  },
  {
    letter: "M",
    title: "Meticulous",
    description: "Thoughtful Design & Quality",
    features: [
      "Precision engineering",
      "Premium materials",
      "Vastu-compliant architecture"
    ],
    icon: Target
  },
  {
    letter: "A",
    title: "Abundant",
    description: "Luxurious Lifestyle",
    features: [
      "World-class clubhouses",
      "Lush green landscapes",
      "Resort-style amenities"
    ],
    icon: Diamond
  },
  {
    letter: "R",
    title: "Rich",
    description: "High ROI & Wealth Creation",
    features: [
      "Prime locations",
      "Consistent appreciation",
      "Premium rental yields"
    ],
    icon: TrendingUp
  },
  {
    letter: "T",
    title: "Timely",
    description: "On-Time Delivery",
    features: [
      "RERA compliance",
      "Transparent tracking",
      "Zero-delay track record"
    ],
    icon: Clock
  }
];

export default function SmartStackSection() {
  const containerRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    if (typeof window !== 'undefined' && window.lenis) {
      window.lenis.on('scroll', ScrollTrigger.update);
    }

    const cards = cardsRef.current;
    
    // Initial Setup: Stack cards behind each other
    cards.forEach((card, i) => {
      // Ensure z-index puts the first card on top!
      gsap.set(card, { zIndex: cards.length - i });
      
      if (i === 0) {
        gsap.set(card, { y: 0, scale: 1, opacity: 1 });
      } else {
        gsap.set(card, { 
          y: i * 20, // increased y offset slightly for better depth
          scale: 1 - (i * 0.04), // increased scale difference
          opacity: 1 // Keep opacity 1 so they don't mix content visually
        });
      }
    });

    // Create the master timeline for the pinned scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // Reduced from 400% so you don't have to scroll as far
        scrub: 0.5, // Reduced from 1 to make the cards respond snappier to the scroll wheel
        pin: true, 
        anticipatePin: 1
      }
    });

    // We have 5 cards, so we need 4 transitions
    const numTransitions = cards.length - 1;

    for (let i = 0; i < numTransitions; i++) {
      // Create a sub-timeline for each scroll step
      const stepTl = gsap.timeline();

      // 1. Animate the current top card EXITING upwards
      stepTl.to(cards[i], {
        y: -300, // Move it further up so it cleanly exits the screen
        opacity: 0, 
        scale: 0.92,
        duration: 1,
        ease: "power2.inOut"
      }, 0);

      // 2. Animate all remaining cards moving UP one slot in the stack
      for (let j = i + 1; j < cards.length; j++) {
        const newIndex = j - (i + 1); // How many slots from the NEW top
        stepTl.to(cards[j], {
          y: newIndex * 20,
          scale: 1 - (newIndex * 0.04),
          duration: 1,
          ease: "power2.inOut"
        }, 0);
      }

      // Add this step to the main timeline
      tl.add(stepTl);
    }
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#F8F6F2] py-24"
    >
      <div className="container mx-auto px-4 lg:px-8 w-full max-w-7xl h-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
        
        {/* Left Content (Text) */}
        <div className="w-full lg:w-5/12 z-10 text-left mb-12 lg:mb-0 flex flex-col justify-center">
          <span className="uppercase tracking-widest text-sm font-semibold mb-4 block" style={{ color: "#C8A96A" }}>
            Our Development Philosophy
          </span>
          <h2 className="text-5xl lg:text-7xl mb-6 font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#08162B", lineHeight: 1.1 }}>
            S.M.A.R.T. <br/>
            <span className="text-gray-400 font-light italic">Homes</span>
          </h2>
          <p className="vm-text" style={{ color: "#4A5568", lineHeight: 1.7 }}>
            The foundation of our development philosophy. S.M.A.R.T. homes are designed with meticulous attention to sustainability, lifestyle, and timely delivery, ensuring a living experience that transcends expectations.
          </p>
        </div>

        {/* Right Content (Cards Stack) */}
        <div 
          ref={cardsWrapperRef} 
          className="relative w-full lg:w-7/12 h-[600px] perspective-1000 flex justify-center items-center"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full max-w-[550px] h-full flex justify-center items-center">
            {CARDS_DATA.map((cardData, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="absolute w-full top-0 left-0"
              >
                <SmartCard {...cardData} index={index} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
