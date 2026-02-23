"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    src: "/images/hero1.jpg",
    alt: "Olmoran Senior School campus",
    headline: "In Pursuit of Excellence.",
    sub: "A disciplined, nurturing community in Laikipia County equipping learners with knowledge, skills and values for lifelong success.",
  },
  {
    src: "/images/hero2.jpg",
    alt: "Students at Olmoran Senior School",
    headline: "Shaping Kenya's Future Leaders.",
    sub: "611 learners. 26 dedicated teachers. Two CBC pathways. One clear mission — excellence in all things.",
  },
  {
    src: "/images/hero3.jpg",
    alt: "Olmoran Senior School community",
    headline: "Community. Integrity. Achievement.",
    sub: "Born from community sacrifice in 2003, Olmoran Senior School stands as a beacon of educational excellence in Laikipia County.",
  },
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (transitioning || idx === current) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(idx);
    setTimeout(() => { setPrev(null); setTransitioning(false); }, 900);
  }, [current, transitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev_ = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section style={{ position: "relative", width: "100%", height: "100svh", minHeight: 560, overflow: "hidden", background: "#050d1a" }}>

      {/* Slides */}
      {slides.map((s, i) => {
        const isActive = i === current;
        const isPrev  = i === prev;
        return (
          <div key={i} style={{
            position: "absolute", inset: 0,
            opacity: isActive ? 1 : isPrev ? 0 : 0,
            zIndex: isActive ? 2 : isPrev ? 1 : 0,
            transition: isActive ? "opacity 0.9s ease" : isPrev ? "opacity 0.9s ease" : "none",
          }}>
            <Image
              src={s.src} alt={s.alt} fill priority={i === 0}
              style={{ objectFit: "cover", objectPosition: "center" }}
              sizes="100vw"
            />
            {/* Dark gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,13,26,0.82) 0%, rgba(5,13,26,0.5) 50%, rgba(5,13,26,0.2) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,13,26,0.7) 0%, transparent 50%)" }} />
          </div>
        );
      })}

      {/* Content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 10, display: "flex", alignItems: "center" }}>
        <div className="wrap" style={{ width: "100%" }}>
          <div style={{ maxWidth: 640 }}>
            {/* Slide counter */}
            <div style={{
              fontFamily: "'Trebuchet MS',Arial,sans-serif",
              fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
              letterSpacing: "0.25em", color: "#d4a843", marginBottom: "1.5rem",
              display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <span style={{ display: "inline-block", width: 24, height: 1, background: "#d4a843" }} />
              {String(current + 1).padStart(2,"0")} / {String(slides.length).padStart(2,"0")}
            </div>

            <h1 style={{
              fontFamily: "Georgia,'Times New Roman',serif",
              fontSize: "clamp(2.6rem,7vw,5.5rem)",
              fontWeight: 700, color: "#e4eaf5", lineHeight: 1.08,
              marginBottom: "1.5rem",
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              transition: "opacity 0.5s ease",
            }}>
              {slides[current].headline}
            </h1>

            <p style={{
              fontFamily: "'Trebuchet MS',Arial,sans-serif",
              fontSize: "clamp(0.95rem,2vw,1.1rem)",
              color: "rgba(228,234,245,0.8)", maxWidth: 500,
              lineHeight: 1.8, marginBottom: "2.5rem",
            }}>
              {slides[current].sub}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/admissions" className="btn btn-gold">Apply for Admission</Link>
              <Link href="/about" className="btn btn-outline-white">Our Story</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow controls */}
      <button onClick={prev_} aria-label="Previous slide" style={{
        position: "absolute", left: "1.5rem", top: "50%", transform: "translateY(-50%)",
        zIndex: 20, width: 48, height: 48, borderRadius: "50%",
        background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px)", cursor: "pointer", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      <button onClick={next} aria-label="Next slide" style={{
        position: "absolute", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
        zIndex: 20, width: 48, height: 48, borderRadius: "50%",
        background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(8px)", cursor: "pointer", color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "all 0.2s",
      }}
        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
        onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Dot indicators */}
      <div style={{
        position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
        zIndex: 20, display: "flex", gap: "0.6rem", alignItems: "center",
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i+1}`} style={{
            width: i === current ? 32 : 8, height: 8,
            borderRadius: 99, border: "none", cursor: "pointer",
            background: i === current ? "#d4a843" : "rgba(255,255,255,0.3)",
            transition: "all 0.4s cubic-bezier(.22,1,.36,1)", padding: 0,
          }} />
        ))}
      </div>

      {/* Progress bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, zIndex: 20, background: "rgba(255,255,255,0.08)" }}>
        <div key={current} style={{
          height: "100%", background: "#d4a843",
          animation: "slideProgress 6s linear forwards",
        }} />
      </div>

      <style>{`
        @keyframes slideProgress { from{width:0%} to{width:100%} }
        @media(max-width:768px){
          .hero-arrows button { width:38px !important; height:38px !important; }
        }
      `}</style>
    </section>
  );
}