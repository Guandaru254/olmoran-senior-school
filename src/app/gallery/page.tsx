import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Gallery" };

// 30 images: 1.jpg — 30.jpg
const photos = Array.from({ length: 30 }, (_, i) => ({
  src: `/images/${i + 1}.jpg`,
  alt: `Olmoran Senior School photo ${i + 1}`,
  // Vary aspect ratios to create visual rhythm
  tall: [2, 5, 9, 14, 18, 23, 27].includes(i + 1),
}));

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom: "1.25rem" }}>Gallery</div>
          <h1 style={{ fontSize: "clamp(2.5rem,7vw,5rem)", color: "#e4eaf5", marginBottom: "1rem" }} className="anim-up d1">
            Life at Olmoran
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(147,184,224,0.75)", maxWidth: 520, margin: "0 auto" }} className="anim-up d2">
            A glimpse into the daily life, achievements and community spirit that define Olmoran Senior School.
          </p>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{
            columns: "4 200px",
            columnGap: "1rem",
            lineHeight: 0,
          }} className="gallery-columns">
            {photos.map((p, i) => (
              <div
                key={i}
                className="gallery-item"
                style={{
                  breakInside: "avoid",
                  marginBottom: "1rem",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  position: "relative",
                  lineHeight: 0,
                  cursor: "zoom-in",
                  display: "block",
                }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={600}
                  height={p.tall ? 800 : 450}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="gallery-overlay" style={{
                  position: "absolute", inset: 0,
                  background: "rgba(5,13,26,0)",
                  transition: "background 0.35s ease",
                  display: "flex", alignItems: "flex-end",
                  padding: "1rem",
                }}>
                  <span style={{
                    fontFamily: "'Trebuchet MS',Arial,sans-serif",
                    fontSize: "0.65rem", fontWeight: 800,
                    textTransform: "uppercase", letterSpacing: "0.15em",
                    color: "rgba(255,255,255,0)",
                    transition: "color 0.35s ease",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .gallery-item:hover img { transform: scale(1.04); }
        .gallery-item:hover .gallery-overlay { background: rgba(5,13,26,0.35) !important; }
        .gallery-item:hover .gallery-overlay span { color: rgba(255,255,255,0.7) !important; }
        @media(max-width:480px){ .gallery-columns{ columns: 2 !important; } }
        @media(min-width:481px) and (max-width:768px){ .gallery-columns{ columns: 3 !important; } }
        @media(min-width:769px) and (max-width:1100px){ .gallery-columns{ columns: 4 !important; } }
        @media(min-width:1101px){ .gallery-columns{ columns: 5 !important; } }
      `}</style>
    </>
  );
}