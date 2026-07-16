import React from 'react';

const SmartCard = ({ letter, title, description, features, icon: Icon, index }) => {
  return (
    <div 
      className="smart-card-gsap relative lg:absolute w-full max-w-[600px] lg:left-1/2 lg:-translate-x-1/2 lg:top-0 origin-top overflow-hidden"
      style={{
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: "24px",
        padding: "3.5rem 3rem", // Increased vertical padding for more breathing room
        boxShadow: "0 20px 40px rgba(8, 22, 43, 0.05), 0 1px 3px rgba(8, 22, 43, 0.02)",
        border: "1px solid rgba(200, 169, 106, 0.25)",
        zIndex: 5 - index, 
        willChange: "transform, opacity, filter, box-shadow",
      }}
    >
      {/* Huge Background Letter */}
      <div 
        className="absolute -right-8 -bottom-16 select-none pointer-events-none"
        style={{
          fontSize: "180px",
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 700,
          color: "var(--border-soft)",
          opacity: 0.3,
          lineHeight: 1,
        }}
      >
        {letter}
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          {/* Header: Icon + Title */}
          <div className="flex items-center gap-5 mb-10">
            <div 
              className="flex items-center justify-center w-14 h-14 rounded-full mb-2"
              style={{ background: "rgba(200, 169, 106, 0.1)", color: "#C8A96A" }}
            >
              <Icon strokeWidth={1.5} size={28} />
            </div>
            <h3 
              style={{ 
                fontSize: "2.25rem", // Slightly larger heading
                fontFamily: "'Cormorant Garamond', serif", 
                color: "#08162B", 
                lineHeight: 1.2,
                margin: 0
              }}
            >
              {title}
            </h3>
          </div>

          {/* Minimal Decorative Line */}
          <div 
            className="w-12 h-[1px] mb-8" // Shorter line, larger bottom margin
            style={{ background: "#C8A96A" }}
          />

          {/* Supporting Paragraph */}
          <p 
            style={{ 
              color: "#4A5568", 
              fontSize: "1rem", 
              lineHeight: 1.8, // Slightly taller line-height
              marginBottom: features ? "2.5rem" : "0" // More space before features
            }}
          >
            {description}
          </p>
        </div>

        {/* Features List (if any) */}
        {features && (
          <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#4A5568", fontSize: "1rem", lineHeight: 1.6 }}>
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-4 mb-4 last:mb-0">
                <span style={{ color: "#C8A96A", marginTop: "2px", fontSize: "1.2rem" }}>✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SmartCard;
