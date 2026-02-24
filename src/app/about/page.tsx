import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us" };

const milestones = [
  { year:"2002", event:"Nine schools pool resources at KShs. 150 per parent. Community leaders Mr. William Keses and former MP G.G. Kariuki champion the cause." },
  { year:"2003", event:"Olmoran Day Secondary School opens its doors in May. First students admitted to Olmoran Town Centre." },
  { year:"2019", event:"School transitions to CBC framework, registered as Olmoran Senior School serving Grade 10 learners." },
  { year:"2021", event:"Storey building project begins, funded by Nobelity Project (USA), Mwanga Association (Venice, Italy) and GOK/MOE-TIG Fund." },
  { year:"2022", event:"Award ceremony honours top students with laptops and bicycles. Cultural Day celebrated with traditional performances." },
  { year:"2025", event:"611 learners enrolled (304 boys, 307 girls). 26 TSC teachers. 13 approved CBC subject combinations." },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        .stat-box:hover { border-color:var(--accent)!important; transform:translateY(-3px); box-shadow:0 16px 40px -12px var(--ring); }
        .about-img img { transition:transform 0.6s ease; }
        .about-img:hover img { transform:scale(1.04); }
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap" style={{ textAlign:"center",position:"relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom:"1.25rem" }}>About Us</div>
          <h1 style={{ fontSize:"clamp(2.5rem,7vw,5rem)",color:"#e4eaf5",marginBottom:"1rem" }} className="anim-up d1">
            Our Story &amp; Purpose
          </h1>
          <p style={{ fontSize:"1.05rem",color:"rgba(147,184,224,0.75)",maxWidth:560,margin:"0 auto" }} className="anim-up d2">
            Rooted in community, built on sacrifice, driven by excellence since 2003.
          </p>
        </div>
      </section>

      {/* Image trio */}
      <section style={{ background:"var(--bg-2)",paddingBlock:"4rem" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:"1rem",height:"clamp(260px,40vw,440px)" }} className="about-photo-grid">
            {/* Large left */}
            <div className="about-img" style={{ position:"relative",borderRadius:"1rem",overflow:"hidden",height:"100%" }}>
              <Image src="/images/2.jpg" alt="Olmoran Senior School campus" fill style={{ objectFit:"cover" }} sizes="(max-width:768px) 100vw, 50vw" />
              <div style={{ position:"absolute",inset:0,background:"linear-gradient(to top,rgba(5,13,26,0.4),transparent 50%)" }} />
            </div>
            {/* Right column */}
            <div style={{ display:"flex",flexDirection:"column",gap:"1rem" }}>
              <div className="about-img" style={{ position:"relative",borderRadius:"1rem",overflow:"hidden",flex:1 }}>
                <Image src="/images/3.jpg" alt="Students at Olmoran" fill style={{ objectFit:"cover" }} sizes="25vw" />
              </div>
              <div className="about-img" style={{ position:"relative",borderRadius:"1rem",overflow:"hidden",flex:1 }}>
                <Image src="/images/4.jpg" alt="Olmoran community" fill style={{ objectFit:"cover" }} sizes="25vw" />
              </div>
            </div>
            {/* Motto card */}
            <div style={{ background:"linear-gradient(150deg,#0a1628,#163060)",borderRadius:"1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"2rem",textAlign:"center",border:"1px solid rgba(212,168,67,0.2)" }}>
              <div style={{ width:2,height:32,background:"#d4a843",margin:"0 auto 1.25rem" }} />
              <blockquote style={{ fontFamily:"Georgia,serif",fontStyle:"italic",fontSize:"clamp(1rem,2vw,1.25rem)",color:"#e4eaf5",lineHeight:1.6,marginBottom:"1.25rem" }}>
                &ldquo;In Pursuit of Excellence.&rdquo;
              </blockquote>
              <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.65rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.18em",color:"#d4a843" }}>
                School Motto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History + Timeline */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"5rem",alignItems:"start" }}>
            <div>
              <div className="label" style={{ marginBottom:"0.75rem" }}>History of the School</div>
              <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.6rem)",marginBottom:"1.5rem",lineHeight:1.15 }}>
                Born from Community.<br/>Built for Excellence.
              </h2>
              <p style={{ color:"var(--muted)",lineHeight:1.9,marginBottom:"1.1rem",fontSize:"0.95rem" }}>
                Before the year 2003, there was no secondary school at Olmoran Town Centre. In mid-2002, nine schools pooled their resources together at a contribution of KShs. 150 per parent for the inception of Olmoran Day Secondary School.
              </p>
              <p style={{ color:"var(--muted)",lineHeight:1.9,marginBottom:"1.1rem",fontSize:"0.95rem" }}>
                Schools from the Northern, Central and Southern pools contributed. Key community leaders — including Mr. William Keses and former MP G.G. Kariuki — played a pivotal role in establishing the institution.
              </p>
              <p style={{ color:"var(--muted)",lineHeight:1.9,fontSize:"0.95rem" }}>
                These contributions led to the construction of the first classrooms, and the school opened its doors in May 2003. Today, the school has grown into Olmoran Senior School, serving 600+ learners across two CBC pathways.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <div className="label" style={{ marginBottom:"1.25rem" }}>Milestones</div>
              <div style={{ display:"flex",flexDirection:"column",gap:0 }}>
                {milestones.map((m,i,arr) => (
                  <div key={m.year} style={{ display:"flex",gap:"1.25rem",paddingBottom:i<arr.length-1?"1.5rem":"0",position:"relative" }}>
                    {i<arr.length-1 && <div style={{ position:"absolute",left:19,top:40,width:2,height:"calc(100% - 20px)",background:"var(--border)" }} />}
                    <div style={{ width:40,height:40,borderRadius:"50%",background:"var(--surface)",border:"2px solid var(--accent)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                      <span style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.52rem",fontWeight:800,color:"var(--accent-lt)" }}>{m.year.slice(2)}</span>
                    </div>
                    <div style={{ paddingTop:"0.5rem" }}>
                      <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontWeight:800,fontSize:"0.75rem",color:"var(--gold-lt)",marginBottom:"0.2rem" }}>{m.year}</div>
                      <p style={{ fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.7 }}>{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:"linear-gradient(135deg,#0a1628,#163060)",paddingBlock:"4rem",borderTop:"1px solid rgba(212,168,67,0.12)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(180px,1fr))",gap:"1.25rem" }}>
            {[
              { num:"600+",    label:"Total Students",      },
              { num:"25+",     label:"Teaching Staff",      },
              { num:"15+",     label:"Non-Teaching Staff",  },
              { num:"2003",   label:"Year Established",     },
            ].map(s => (
              <div key={s.label} className="card stat-box" style={{ padding:"1.75rem",textAlign:"center",background:"rgba(255,255,255,0.04)",borderColor:"rgba(255,255,255,0.08)",transition:"border-color 0.25s,transform 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontFamily:"Georgia,serif",fontSize:"2rem",fontWeight:700,color:"#e4eaf5",lineHeight:1 }}>{s.num}</div>
                <div style={{ fontWeight:700,fontSize:"0.85rem",color:"#93b8e0",marginTop:"0.4rem",marginBottom:"0.2rem" }}>{s.label}</div>
                <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.72rem",color:"rgba(147,184,224,0.45)" }}>{}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values + Beliefs + Pledge */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ textAlign:"center",maxWidth:520,margin:"0 auto 3rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>What We Stand For</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Our Core Values</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:"1rem",marginBottom:"2.5rem" }}>
            {["Integrity","Professionalism","Diligence","Teamwork"].map((v,i) => (
              <div key={v} className="card" style={{ padding:"1.5rem",display:"flex",alignItems:"center",gap:"1rem" }}>
                <div style={{ width:36,height:36,borderRadius:"0.625rem",background:"var(--surface)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:"Georgia,serif",fontWeight:700,color:"var(--accent-lt)",fontSize:"0.9rem" }}>{i+1}</div>
                <span style={{ fontFamily:"Georgia,serif",fontWeight:600,fontSize:"1rem" }}>{v}</span>
              </div>
            ))}
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.5rem" }}>
            <div className="card" style={{ padding:"2rem" }}>
              <div className="label" style={{ marginBottom:"0.75rem" }}>Core Beliefs</div>
              <p style={{ color:"var(--text-2)",lineHeight:1.85,fontSize:"0.95rem" }}>
                Our school is committed to the holistic development of students — academically, spiritually, and physically. We promote discipline, self-expression, and God-centered living. Our students are nurtured to become communicators, principled, open-minded, and innovative leaders.
              </p>
            </div>
            <div className="card" style={{ padding:"2rem",background:"var(--navy-900,#0a1628)",borderColor:"rgba(212,168,67,0.2)" }}>
              <div className="label" style={{ marginBottom:"0.75rem",color:"#d4a843" }}>Our Pledge</div>
              <blockquote style={{ fontFamily:"Georgia,serif",fontStyle:"italic",fontSize:"1.05rem",color:"#e4eaf5",lineHeight:1.75,borderLeft:"3px solid #d4a843",paddingLeft:"1.25rem" }}>
                &ldquo;We Are Dedicated To Attaining Collective and Individual Goals In Terms of Curriculum and Co-Curriculum Objectives.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="section-sm" style={{ background:"var(--bg)" }}>
        <div className="wrap" style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"3rem",alignItems:"center" }}>
          <div>
            <div className="label" style={{ marginBottom:"0.75rem" }}>Looking Ahead</div>
            <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.6rem,4vw,2.4rem)",marginBottom:"1rem" }}>Future Plans</h2>
            <p style={{ color:"var(--muted)",lineHeight:1.85,fontSize:"0.95rem" }}>
              The school&apos;s strategic plans focus on achieving excellence in education, improving ICT facilities, and expanding the curriculum to comprehensively meet every student&apos;s needs.
            </p>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:"0.6rem" }}>
            {["Excellence in education across all departments","Expanded ICT lab and digital learning tools","Broader co-curricular programme","Stronger community and alumni partnerships","Improved boarding and infrastructure"].map(p => (
              <div key={p} style={{ display:"flex",gap:"0.75rem",alignItems:"center",padding:"0.875rem 1.25rem",borderRadius:"0.875rem",background:"var(--bg-2)",border:"1px solid var(--border)" }}>
                <div style={{ width:6,height:6,borderRadius:"50%",background:"var(--gold-lt)",flexShrink:0 }} />
                <span style={{ fontSize:"0.875rem",color:"var(--text-2)",fontFamily:"'Trebuchet MS',Arial,sans-serif" }}>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--bg-2)" }}>
        <div className="wrap" style={{ textAlign:"center" }}>
          <h3 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.4rem,3vw,2rem)",marginBottom:"1rem" }}>Want to Join Our Community?</h3>
          <div style={{ display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center" }}>
            <Link href="/admissions" className="btn btn-primary">Admissions</Link>
            <Link href="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .about-photo-grid{ grid-template-columns:1fr !important; height:auto !important; }
          .about-photo-grid > div:first-child{ height:260px; }
          .about-photo-grid > div:nth-child(2){ flex-direction:row; height:140px; }
          .about-photo-grid > div:last-child{ display:none; }
        }
      `}</style>
    </>
  );
}