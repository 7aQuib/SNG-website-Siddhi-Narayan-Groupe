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
    let mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
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
            y: i * 20,
            scale: 1 - (i * 0.04),
            opacity: 1
          });
        }
      });

      // Create the master timeline for the pinned scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 0.5,
          pin: true, 
          anticipatePin: 1
        }
      });

      const numTransitions = cards.length - 1;

      for (let i = 0; i < numTransitions; i++) {
        const stepTl = gsap.timeline();

        stepTl.to(cards[i], {
          y: -300,
          opacity: 0, 
          scale: 0.92,
          duration: 1,
          ease: "power2.inOut"
        }, 0);

        for (let j = i + 1; j < cards.length; j++) {
          const newIndex = j - (i + 1);
          stepTl.to(cards[j], {
            y: newIndex * 20,
            scale: 1 - (newIndex * 0.04),
            duration: 1,
            ease: "power2.inOut"
          }, 0);
        }

        tl.add(stepTl);
      }
    });

    mm.add("(max-width: 1023px)", () => {
       // Clear GSAP inline styles on mobile so natural CSS applies
       cardsRef.current.forEach(card => {
         gsap.set(card, { clearProps: "all" });
       });
    });

    return () => {
      mm.revert();
      if (typeof window !== 'undefined' && window.lenis) {
         window.lenis.off('scroll', ScrollTrigger.update);
      }
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
          className="relative w-full lg:w-7/12 h-auto lg:h-[600px] flex flex-col lg:block justify-center items-center"
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full max-w-[550px] h-full flex flex-col lg:block justify-center items-center gap-6">
            {CARDS_DATA.map((cardData, index) => (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className="relative lg:absolute w-full lg:top-0 lg:left-0"
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
