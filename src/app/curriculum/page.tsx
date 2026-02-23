import type { Metadata } from "next";
import Link from "next/link";
import { stemCombinations, socialCombinations, compulsorySubjects } from "@/lib/data/curriculum";
import type { Combination } from "@/lib/data/curriculum";

export const metadata: Metadata = { title: "Curriculum (CBC)" };

function ComboTable({ combos, gold }: { combos: Combination[]; gold?: boolean }) {
  const badgeCls = gold ? "badge badge-gold" : "badge badge-navy";
  const trackColor = gold ? "var(--gold-lt)" : "var(--accent-lt)";
  const codePill: React.CSSProperties = gold
    ? { background:"color-mix(in srgb,#d4a843 10%,transparent)", color:"var(--gold-lt)", borderColor:"color-mix(in srgb,#d4a843 30%,transparent)" }
    : {};

  return (
    <>
      <div className="card hide-mobile" style={{ overflow:"hidden",padding:0 }}>
        <table className="data-table">
          <thead>
            <tr><th>Code</th><th>Track</th><th>Subject Combination</th><th>Status</th></tr>
          </thead>
          <tbody>
            {combos.map(c => (
              <tr key={c.code}>
                <td><span className="pill" style={{ fontFamily:"monospace",fontWeight:800,...codePill }}>{c.code}</span></td>
                <td style={{ fontWeight:600 }}>{c.track}</td>
                <td><div style={{ display:"flex",flexWrap:"wrap",gap:"0.3rem" }}>{c.subjects.map(s=><span key={s} className="pill">{s}</span>)}</div></td>
                <td><span className={badgeCls} style={{ fontSize:"0.6rem" }}>&#10003; {c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="hide-desktop" style={{ display:"flex",flexDirection:"column",gap:"1rem" }}>
        {combos.map(c => (
          <div key={c.code} className="card" style={{ padding:"1.25rem" }}>
            <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.75rem" }}>
              <span className="pill" style={{ fontFamily:"monospace",fontWeight:800,...codePill }}>{c.code}</span>
              <span className={badgeCls} style={{ fontSize:"0.6rem" }}>&#10003; {c.status}</span>
            </div>
            <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.72rem",color:trackColor,fontWeight:700,marginBottom:"0.5rem" }}>{c.track}</div>
            <div style={{ display:"flex",flexWrap:"wrap",gap:"0.3rem" }}>{c.subjects.map(s=><span key={s} className="pill">{s}</span>)}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function CurriculumPage() {
  return (
    <>
      <style>{`.pw-card:hover{transform:translateY(-3px);border-color:var(--accent)!important;box-shadow:0 16px 40px -12px var(--ring);}`}</style>

      <section className="page-hero">
        <div className="wrap" style={{ textAlign:"center",position:"relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom:"1.25rem" }}>Grade 10 · CBC</div>
          <h1 style={{ fontSize:"clamp(2.5rem,7vw,5rem)",color:"#e4eaf5",marginBottom:"1rem" }} className="anim-up d1">Curriculum &amp; Pathways</h1>
          <p style={{ fontSize:"1.05rem",color:"rgba(147,184,224,0.75)",maxWidth:560,margin:"0 auto" }} className="anim-up d2">
            Two approved pathways. 13 verified CBC subject combinations. One clear path to your future.
          </p>
        </div>
      </section>

      {/* Pathways */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ textAlign:"center",maxWidth:520,margin:"0 auto 3rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>CBC Pathways at Olmoran</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Two Pathways, Endless Futures</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.5rem" }}>
            {[
              { name:"STEM Pathway", tracks:["Applied Sciences","Pure Sciences"], desc:"Science, Technology, Engineering and Mathematics — preparing learners for careers in tech, healthcare, agriculture and engineering.", color:"#163060" },
              { name:"Social Sciences", tracks:["Humanities & Business Studies"], desc:"Covering humanities, business, languages and social studies — ideal for law, economics, education, media and public service.", color:"#7a5c0f" },
            ].map(p => (
              <div key={p.name} className="card pw-card" style={{ padding:"2.5rem",position:"relative",overflow:"hidden",transition:"transform 0.25s,border-color 0.25s,box-shadow 0.25s" }}>
                <div style={{ position:"absolute",top:-30,right:-30,width:180,height:180,borderRadius:"50%",background:`radial-gradient(circle,${p.color}18,transparent 65%)`,pointerEvents:"none" }} />
                <h3 style={{ fontFamily:"Georgia,serif",fontSize:"1.5rem",fontWeight:600,marginBottom:"0.75rem" }}>{p.name}</h3>
                <div style={{ display:"flex",flexWrap:"wrap",gap:"0.4rem",marginBottom:"1rem" }}>
                  {p.tracks.map(t => <span key={t} className="pill pill-navy">{t}</span>)}
                </div>
                <p style={{ fontSize:"0.875rem",color:"var(--muted)",lineHeight:1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compulsory */}
      <section className="section-sm" style={{ background:"var(--bg)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"3rem",alignItems:"center" }}>
            <div>
              <div className="label" style={{ marginBottom:"0.75rem" }}>Required for All Learners</div>
              <h2 style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)",marginBottom:"1rem" }}>Compulsory Subjects</h2>
              <p style={{ color:"var(--muted)",lineHeight:1.8,fontSize:"0.9rem" }}>Every Grade 10 learner at Olmoran studies these subjects regardless of chosen pathway.</p>
            </div>
            <div style={{ display:"flex",flexWrap:"wrap",gap:"0.6rem" }}>
              {compulsorySubjects.map(s => <span key={s} className="pill" style={{ fontSize:"0.8rem",padding:"0.4rem 0.9rem" }}>{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* STEM table */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",gap:"1rem",marginBottom:"2rem" }}>
            <div>
              <div className="label" style={{ marginBottom:"0.5rem" }}>STEM Pathway</div>
              <h2 style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)" }}>STEM Subject Combinations</h2>
            </div>
            <span className="badge badge-navy">{stemCombinations.length} Approved Combinations</span>
          </div>
          <ComboTable combos={stemCombinations} />
        </div>
      </section>

      {/* Social Sciences table */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="wrap">
          <div style={{ display:"flex",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"space-between",gap:"1rem",marginBottom:"2rem" }}>
            <div>
              <div className="label" style={{ marginBottom:"0.5rem" }}>Social Sciences Pathway</div>
              <h2 style={{ fontSize:"clamp(1.5rem,3vw,2.2rem)" }}>Social Sciences Combinations</h2>
            </div>
            <span className="badge badge-gold">{socialCombinations.length} Approved Combinations</span>
          </div>
          <ComboTable combos={socialCombinations} gold />
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--bg-2)" }}>
        <div className="wrap" style={{ textAlign:"center" }}>
          <h3 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.4rem,3vw,2rem)",marginBottom:"0.75rem" }}>Ready to Choose Your Pathway?</h3>
          <p style={{ color:"var(--muted)",marginBottom:"2rem",fontFamily:"'Trebuchet MS',Arial,sans-serif" }}>Apply now and our academic team will guide your subject selection.</p>
          <Link href="/admissions" className="btn btn-primary">Apply for Admission</Link>
        </div>
      </section>
    </>
  );
}