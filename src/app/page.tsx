import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlideshow from "@/components/ui/HeroSlideshow";
import { stats, coreValues, highlights } from "@/lib/data/home";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <>
      <style>{`
        .value-card:hover { transform:translateY(-4px); border-color:var(--accent)!important; box-shadow:0 20px 40px -12px var(--ring); }
        .highlight-card:hover .hi-img img { transform:scale(1.05); }
        .pathway-card:hover { transform:translateY(-4px); border-color:var(--accent)!important; box-shadow:0 20px 40px -12px var(--ring); }
        .hi-img img { transition: transform 0.6s ease; }
        @media(max-width:640px){ .stats-grid{ grid-template-columns:1fr 1fr !important; } }
      `}</style>

      {/* ── HERO SLIDESHOW ─────────────────────────── */}
      <HeroSlideshow />

      {/* ── STATS BAR ──────────────────────────────── */}
      <div style={{ background:"#0a1628",borderBottom:"1px solid rgba(212,168,67,0.15)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:0 }} className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} style={{
                padding:"1.5rem 1rem", textAlign:"center",
                borderRight: i < stats.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}>
                <div style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.6rem,4vw,2.4rem)",fontWeight:700,color:"#e4eaf5",lineHeight:1 }}>
                  {s.value}<span style={{ color:"#d4a843",fontSize:"0.65em" }}>{s.suffix}</span>
                </div>
                <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.62rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.14em",color:"rgba(147,184,224,0.45)",marginTop:"0.35rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MARQUEE ────────────────────────────────── */}
      <div style={{ background:"#163060",padding:"0.8rem 0",overflow:"hidden",borderBottom:"1px solid rgba(212,168,67,0.12)" }}>
        <div className="anim-marquee" style={{ display:"flex",gap:"3rem",width:"max-content",whiteSpace:"nowrap" }}>
          {Array(10).fill(null).map((_,i)=>(
            <span key={i} style={{ display:"flex",alignItems:"center",gap:"2rem",fontFamily:"'Trebuchet MS',Arial,sans-serif",color:"rgba(228,234,245,0.65)",fontSize:"0.65rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.22em" }}>
              <span>Excellence</span><span style={{ color:"#d4a843" }}>&#9670;</span>
              <span>Integrity</span><span style={{ color:"#d4a843" }}>&#9670;</span>
              <span>Diligence</span><span style={{ color:"#d4a843" }}>&#9670;</span>
              <span>Teamwork</span><span style={{ color:"#d4a843" }}>&#9670;</span>
              <span>CBC Curriculum</span><span style={{ color:"#d4a843" }}>&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── CORE VALUES ────────────────────────────── */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth:520,marginBottom:"3.5rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>What We Stand For</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)",marginBottom:"0.75rem" }}>Our Core Values</h2>
            <p style={{ color:"var(--muted)",fontSize:"0.95rem",lineHeight:1.8 }}>
              The principles that guide every learner, teacher and staff member at Olmoran Senior School.
            </p>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:"1.25rem" }}>
            {coreValues.map((v, i) => (
              <div key={v.title} className="card value-card" style={{ padding:"1.75rem",transition:"transform 0.25s,border-color 0.25s,box-shadow 0.25s" }}>
                <div style={{ width:44,height:44,borderRadius:"0.875rem",background:"var(--surface)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem",fontFamily:"Georgia,serif",fontWeight:700,fontSize:"1.1rem",color:"var(--accent-lt)" }}>
                  {String(i+1).padStart(2,"0")}
                </div>
                <h3 style={{ fontFamily:"Georgia,serif",fontSize:"1.05rem",fontWeight:600,marginBottom:"0.5rem" }}>{v.title}</h3>
                <p style={{ fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS WITH REAL PHOTOS ────────────── */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="wrap">
          <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"flex-end",gap:"1rem",marginBottom:"3rem" }}>
            <div>
              <div className="label" style={{ marginBottom:"0.6rem" }}>School Life</div>
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Highlights</h2>
            </div>
            <Link href="/gallery" className="btn btn-ghost" style={{ fontSize:"0.82rem",padding:"0.5rem 1.2rem" }}>View Full Gallery</Link>
          </div>

          {/* 2-column featured + 2-column small */}
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.5rem" }}>
            {highlights.map((h, i) => (
              <div key={h.title} className="card highlight-card" style={{ overflow:"hidden",transition:"transform 0.25s,border-color 0.25s,box-shadow 0.25s",
                gridColumn: i===0 ? "span 2" : "span 1",
              }} data-full={i===0}>
                <div className="hi-img" style={{ position:"relative",height:i===0?380:220,overflow:"hidden" }}>
                  <Image
                    src={`/images/highlight${i+1}.jpg`}
                    alt={h.title} fill
                    style={{ objectFit:"cover" }}
                    sizes={i===0?"(max-width:768px) 100vw, 66vw":"(max-width:768px) 100vw, 33vw"}
                  />
                  <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,13,26,0.7) 0%,transparent 50%)" }} />
                  {i===0 && (
                    <div style={{ position:"absolute",bottom:"1.5rem",left:"1.5rem" }}>
                      <span className="badge badge-gold" style={{ fontSize:"0.6rem" }}>Featured</span>
                    </div>
                  )}
                </div>
                <div style={{ padding:"1.25rem 1.5rem" }}>
                  <h3 style={{ fontFamily:"Georgia,serif",fontSize:i===0?"1.2rem":"1rem",fontWeight:600,marginBottom:"0.5rem" }}>{h.title}</h3>
                  <p style={{ fontSize:"0.85rem",color:"var(--muted)",lineHeight:1.7 }}>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATHWAYS TEASER ────────────────────────── */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ textAlign:"center",maxWidth:520,margin:"0 auto 3rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>Grade 10 · CBC</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Choose Your Pathway</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.5rem" }}>
            {[
              { name:"STEM Pathway",     sub:"Applied Sciences & Pure Sciences",    desc:"Physics, Chemistry, Biology, Agriculture, Computer Studies and Mathematics.", href:"/curriculum" },
              { name:"Social Sciences",  sub:"Humanities & Business Studies",        desc:"Geography, History, Literature, Business Studies, CRE, Kiswahili and more.", href:"/curriculum" },
            ].map(p => (
              <div key={p.name} className="card pathway-card" style={{ padding:"2.5rem",transition:"transform 0.25s,border-color 0.25s,box-shadow 0.25s" }}>
                <h3 style={{ fontFamily:"Georgia,serif",fontSize:"1.4rem",fontWeight:600,marginBottom:"0.35rem" }}>{p.name}</h3>
                <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.7rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--gold-lt)",marginBottom:"1rem" }}>{p.sub}</div>
                <p style={{ fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.75,marginBottom:"1.75rem" }}>{p.desc}</p>
                <Link href={p.href} className="btn btn-ghost" style={{ fontSize:"0.8rem",padding:"0.5rem 1.2rem" }}>View Combinations</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ─────────────────────────────── */}
      <section style={{ position:"relative",overflow:"hidden" }}>
        {/* Background image with overlay */}
        <div style={{ position:"absolute",inset:0,zIndex:0 }}>
          <Image src="/images/hero2.jpg" alt="School" fill style={{ objectFit:"cover" }} sizes="100vw" />
          <div style={{ position:"absolute",inset:0,background:"rgba(5,13,26,0.82)" }} />
        </div>
        <div className="wrap" style={{ position:"relative",zIndex:1,paddingBlock:"6rem",textAlign:"center" }}>
          <div className="label" style={{ marginBottom:"1rem",color:"#d4a843" }}>Enrolment Open</div>
          <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,5vw,3.5rem)",color:"#e4eaf5",marginBottom:"1rem" }}>
            Begin Your Journey<br/>to Excellence
          </h2>
          <p style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",color:"rgba(228,234,245,0.7)",maxWidth:420,margin:"0 auto 2.5rem",lineHeight:1.8 }}>
            Secure a place for your child at Olmoran Senior School. Admissions are open.
          </p>
          <div style={{ display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center" }}>
            <Link href="/admissions" className="btn btn-gold">Apply for Admission</Link>
            <Link href="/contact" className="btn btn-outline-white">Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:640px){
          [data-full="true"]{ grid-column:span 1 !important; }
          [data-full="true"] .hi-img{ height:240px !important; }
        }
      `}</style>
    </>
  );
}