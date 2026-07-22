'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { RotateCcw, Layers, Hand, RefreshCw, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SwipeableGallery({ gallery = [], projectTitle = '' }) {
  // Initialize cards array with originalIndex to support infinite looping rotation
  const [cards, setCards] = useState(() =>
    gallery.map((item, idx) => ({ ...item, originalIndex: idx }))
  );
  
  // Track swipe history for undoing
  const [history, setHistory] = useState([]);

  const [dragState, setDragState] = useState({
    isDragging: false,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
  });
  const [exitDirection, setExitDirection] = useState(null); // 'left' | 'right' | null
  const [isAnimating, setIsAnimating] = useState(false);

  const cardRef = useRef(null);
  const totalCards = gallery.length;

  // Handle Swipe: moves top card to the back of the queue (infinite loop)
  const handleSwipe = useCallback(
    (direction) => {
      if (isAnimating || cards.length === 0) return;

      setIsAnimating(true);
      setExitDirection(direction);

      setTimeout(() => {
        setCards((prev) => {
          if (prev.length === 0) return prev;
          const [topCard, ...rest] = prev;
          setHistory((h) => [topCard, ...h]);
          return [...rest, topCard];
        });
        setExitDirection(null);
        setIsAnimating(false);
        setDragState({ isDragging: false, startX: 0, startY: 0, currentX: 0, currentY: 0 });
      }, 300);
    },
    [isAnimating, cards.length]
  );

  // Undo Last Swipe: takes top item from history and puts it back on top of cards
  const handleUndo = useCallback(() => {
    if (history.length === 0 || isAnimating) return;
    const [lastSwiped, ...restHistory] = history;
    setHistory(restHistory);
    setCards((prev) => {
      const filtered = prev.filter((c) => c.originalIndex !== lastSwiped.originalIndex);
      return [lastSwiped, ...filtered];
    });
  }, [history, isAnimating]);

  // Pointer / Touch / Drag Events
  const handlePointerDown = (e) => {
    if (isAnimating) return;
    if (e.target.closest('button')) return;

    setDragState({
      isDragging: true,
      startX: e.clientX || (e.touches && e.touches[0].clientX) || 0,
      startY: e.clientY || (e.touches && e.touches[0].clientY) || 0,
      currentX: 0,
      currentY: 0,
    });
  };

  const handlePointerMove = (e) => {
    if (!dragState.isDragging) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

    const deltaX = clientX - dragState.startX;
    const deltaY = clientY - dragState.startY;

    setDragState((prev) => ({
      ...prev,
      currentX: deltaX,
      currentY: deltaY,
    }));
  };

  const handlePointerUp = () => {
    if (!dragState.isDragging) return;

    const { currentX } = dragState;
    const threshold = 90; // Drag px required to trigger swipe

    if (currentX > threshold) {
      handleSwipe('right');
    } else if (currentX < -threshold) {
      handleSwipe('left');
    } else {
      // Snap back to center
      setDragState({
        isDragging: false,
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        handleSwipe('left');
      } else if (e.key === 'ArrowRight') {
        handleSwipe('right');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSwipe]);

  if (!cards || cards.length === 0) return null;

  const activeShot = cards[0];
  const activeShotIndex = activeShot?.originalIndex ?? 0;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Stacked Swipe Cards & Controls */}
        <div className="lg:col-span-7 flex flex-col items-center">
          
          {/* Main Card Stack Container - Decreased Width (400px) & Increased Height (480px) */}
          <div 
            className="relative w-full max-w-[400px] select-none touch-pan-y"
            style={{
              height: '510px',
              marginBottom: '25px',
              position: 'relative',
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
          >
            {/* Render Stacked Cards (showing top 4 depth in queue) */}
            {cards.slice(0, 4).map((item, stackOffset) => {
              const isTopCard = stackOffset === 0;

              // Compute Stack Transformations
              let transformStyle = '';
              let opacityStyle = 1;
              let transitionStyle = 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease';

              if (isTopCard) {
                if (isAnimating && exitDirection) {
                  // Fly-out animation
                  const exitX = exitDirection === 'right' ? 800 : -800;
                  const exitRotate = exitDirection === 'right' ? 35 : -35;
                  transformStyle = `translate3d(${exitX}px, 0px, 0) rotate(${exitRotate}deg)`;
                  opacityStyle = 0;
                  transitionStyle = 'transform 0.35s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.3s ease-out';
                } else if (dragState.isDragging) {
                  // Interactive Drag state
                  const dragX = dragState.currentX;
                  const dragY = dragState.currentY;
                  const rotate = dragX * 0.08;
                  transformStyle = `translate3d(${dragX}px, ${dragY}px, 0) rotate(${rotate}deg)`;
                  transitionStyle = 'none';
                } else {
                  // Idle Top Card
                  transformStyle = `translate3d(0, 0, 0) scale(1) rotate(0deg)`;
                }
              } else {
                // Stacked cards beneath top card
                const scale = 1 - stackOffset * 0.05;
                const translateY = stackOffset * 16;
                transformStyle = `translate3d(0, ${translateY}px, -${stackOffset * 20}px) scale(${scale})`;
                opacityStyle = Math.max(0.4, 1 - stackOffset * 0.2);
              }

              // Drag overlay indicator badges
              const dragAmount = isTopCard && dragState.isDragging ? dragState.currentX : 0;
              const swipeNextOpacity = Math.min(1, Math.max(0, dragAmount / 70));
              const swipePrevOpacity = Math.min(1, Math.max(0, -dragAmount / 70));

              return (
                <div
                  key={item.originalIndex}
                  ref={isTopCard ? cardRef : null}
                  className={`absolute top-0 left-0 right-0 h-[480px] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border)] bg-[var(--surface-warm)] transition-all ${
                    isTopCard ? 'cursor-grab active:cursor-grabbing z-30 shadow-2xl' : 'pointer-events-none shadow-lg'
                  }`}
                  style={{
                    zIndex: 30 - stackOffset,
                    transform: transformStyle,
                    opacity: opacityStyle,
                    transition: transitionStyle,
                    transformOrigin: 'bottom center',
                    willChange: 'transform, opacity',
                  }}
                >
                  <div className="w-full h-full relative overflow-hidden group">
                    {/* Card Background Image */}
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Swipe Feedback Badges on Top Card */}
                    {isTopCard && (
                      <>
                        <div
                          className="absolute top-5 left-5 border-2 border-emerald-400 text-emerald-400 font-bold rounded-lg text-xs uppercase tracking-widest rotate-[-10deg] bg-black/75 backdrop-blur-md pointer-events-none transition-opacity shadow-xl"
                          style={{
                            opacity: swipeNextOpacity,
                            padding: '8px 16px',
                            lineHeight: '1.2',
                            display: 'inline-flex',
                            alignItems: 'center',
                          }}
                        >
                          NEXT SHOT →
                        </div>
                        <div
                          className="absolute top-5 right-5 border-2 border-amber-400 text-amber-400 font-bold rounded-lg text-xs uppercase tracking-widest rotate-[10deg] bg-black/75 backdrop-blur-md pointer-events-none transition-opacity shadow-xl"
                          style={{
                            opacity: swipePrevOpacity,
                            padding: '8px 16px',
                            lineHeight: '1.2',
                            display: 'inline-flex',
                            alignItems: 'center',
                          }}
                        >
                          ← PREV SHOT
                        </div>
                      </>
                    )}

                    {/* Minimal Clean Glassy Badge at Bottom of Card Image with Explicit Padding */}
                    <div
                      className="absolute bottom-5 left-5 right-5 rounded-full border border-white/30 bg-black/75 backdrop-blur-md text-white flex items-center justify-between pointer-events-none shadow-xl"
                      style={{
                        padding: '12px 20px',
                        boxSizing: 'border-box',
                        minHeight: '46px',
                      }}
                    >
                      <span
                        className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono font-semibold"
                        style={{
                          lineHeight: '1.2',
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        Shot 0{item.originalIndex + 1} of 0{totalCards}
                      </span>
                      <span
                        className="text-xs sm:text-sm font-serif italic text-white/95 tracking-wide"
                        style={{
                          lineHeight: '1.2',
                          display: 'inline-flex',
                          alignItems: 'center',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          maxWidth: '60%',
                        }}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls Below Stacked Cards - Guaranteed Space Below Stacked Cards */}
          <div
            className="w-full max-w-lg flex flex-col items-center"
            style={{
              position: 'relative',
              zIndex: 40,
              marginTop: '10px',
            }}
          >
            
            {/* Toolbar Buttons */}
            <div className="flex items-center justify-center gap-4 w-full">
              <button
                onClick={handleUndo}
                disabled={history.length === 0 || isAnimating}
                title="Undo Last Swipe"
                className="px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--surface-warm)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)] disabled:opacity-30 disabled:hover:border-[var(--border)] disabled:hover:text-[var(--fg)] transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2 text-xs uppercase tracking-wider font-mono"
              >
                <RotateCcw size={14} />
                <span>Undo Swipe</span>
              </button>

              <button
                onClick={() => {
                  setCards(gallery.map((item, idx) => ({ ...item, originalIndex: idx })));
                  setHistory([]);
                }}
                title="Reset Deck Order"
                className="px-6 py-3 rounded-full border border-[var(--border)] bg-[var(--surface-warm)] text-[var(--fg-2)] hover:border-[var(--accent)] hover:text-[var(--fg)] transition-all shadow-md active:scale-95 cursor-pointer flex items-center gap-2 text-xs uppercase tracking-wider font-mono"
              >
                <RefreshCw size={14} />
                <span>Reset Deck</span>
              </button>
            </div>

            {/* Gesture Hint */}
            <div className="flex items-center gap-2 mt-7 text-[11px] font-mono text-[var(--muted)]">
              <Hand size={13} className="text-[var(--accent)] animate-bounce" />
              <span>Swipe left or right to explore shots</span>
            </div>

            {/* Slide Dots Indicator / Navigator Status */}
            <div className="flex items-center gap-2 mt-6">
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCards(() => {
                      const rotated = [...gallery.map((item, idx) => ({ ...item, originalIndex: idx }))];
                      while (rotated[0].originalIndex !== i) {
                        rotated.push(rotated.shift());
                      }
                      return rotated;
                    });
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeShotIndex
                      ? 'w-6 bg-[var(--accent)]'
                      : 'w-1.5 bg-[var(--border)] hover:bg-[var(--accent)]/50'
                  }`}
                  aria-label={`Jump to shot ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN: Section Details & Active Shot HUD Panel */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
          
          <div>
            <span className="eyebrow block mb-2 text-[var(--accent)] flex items-center gap-2">
              <Layers size={14} /> Visual Tour Showcase
            </span>
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl uppercase leading-tight text-[var(--fg)] whitespace-nowrap">
              Architectural <em>Gallery</em>
            </h2>
            <p className="text-xs sm:text-sm text-[var(--fg-2)] mt-3 leading-relaxed">
              Curated perspectives of spatial purity, natural marble, and handcrafted finishes within {projectTitle}.
            </p>
          </div>

          {/* Dynamic Details HUD Card for Active Shot with Explicit 32px Inline Padding */}
          <div
            className="bg-[var(--surface-warm)] rounded-[var(--radius-lg)] border border-[var(--border)] shadow-xl relative overflow-hidden transition-all duration-500 flex flex-col justify-between"
            style={{
              padding: '32px',
              boxSizing: 'border-box',
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Active Shot Status Badge */}
            <div className="flex items-center justify-between gap-3" style={{ marginBottom: '16px' }}>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
                <span>Shot 0{activeShotIndex + 1} of 0{totalCards}</span>
              </div>
              <span
                className="text-[10px] font-mono uppercase tracking-widest text-[var(--fg-2)] bg-[var(--surface)] border border-[var(--border)] rounded-full shrink-0 font-medium"
                style={{
                  padding: '6px 14px',
                  lineHeight: '1.2',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {projectTitle}
              </span>
            </div>

            {/* Active Shot Title - Reduced Font Size & Single Line */}
            <h3
              className="font-serif text-xl sm:text-2xl text-[var(--fg)] font-normal tracking-wide transition-all whitespace-nowrap truncate"
              style={{
                marginBottom: '12px',
                marginTop: 0,
                lineHeight: '1.3',
              }}
            >
              {activeShot.title}
            </h3>

            {/* Active Shot Description */}
            <p
              className="text-xs sm:text-sm text-[var(--fg-2)] leading-relaxed"
              style={{
                marginBottom: '24px',
                marginTop: 0,
                lineHeight: '1.6',
              }}
            >
              {activeShot.caption}
            </p>

            {/* Craftsmanship Features List */}
            <div
              className="space-y-3 pt-4 border-t border-[var(--border)]"
              style={{ marginBottom: '24px' }}
            >
              <div className="flex items-center gap-2.5 text-xs text-[var(--fg)] font-medium">
                <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                <span>Natural Marble &amp; Hand-cut Stone Finishes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--fg)] font-medium">
                <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                <span>Optimized Floor-to-Ceiling Natural Light</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[var(--fg)] font-medium">
                <CheckCircle2 size={15} className="text-[var(--accent)] shrink-0" />
                <span>Precision Bespoke Architectural Framing</span>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              <a
                href="#inquiry"
                className="btn btn-primary w-full inline-flex items-center justify-center gap-2 text-xs uppercase tracking-widest"
                style={{
                  padding: '16px 24px',
                  lineHeight: '1.2',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={14} />
                Inquire About This Space
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
