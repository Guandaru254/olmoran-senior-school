import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = { title: "Administration" };

const departments = [
  { name:"Academics",         head:"HOD Academics",    desc:"Oversees all teaching, learning, timetabling and CBC implementation." },
  { name:"Student Affairs",   head:"Dean of Students", desc:"Handles student welfare, discipline, guidance and counselling." },
  { name:"Sciences",          head:"HOD Sciences",     desc:"Coordinates Physics, Chemistry, Biology, Agriculture and Computer Studies." },
  { name:"Humanities",        head:"HOD Humanities",   desc:"Coordinates History, Geography, CRE, Literature, Kiswahili and Business." },
  { name:"Mathematics",       head:"HOD Mathematics",  desc:"Coordinates Core and Advanced Mathematics across all levels." },
  { name:"Games & Sports",    head:"Sports Master",    desc:"Organises inter-school competitions, house athletics and co-curricular activities." },
  { name:"Finance & Bursary", head:"School Bursar",    desc:"Manages school fees, expenditures, budgets and financial reporting." },
  { name:"Library",           head:"School Librarian", desc:"Manages the school library, reading programmes and academic resources." },
];

const policies = [
  { title:"Academic Integrity",   text:"All learners are expected to uphold the highest standards of honesty in all academic work." },
  { title:"Attendance Policy",    text:"A minimum of 80% attendance per term is required for a learner to sit examinations." },
  { title:"Discipline & Conduct", text:"The school upholds a strict code of conduct. Bullying, substance abuse and misconduct are not tolerated." },
  { title:"Uniform Policy",       text:"Full school uniform must be worn on all school days. Sports kit is required for PE sessions." },
  { title:"Device Policy",        text:"Personal mobile phones are not permitted during school hours and must be stored with administration." },
  { title:"Assessment Policy",    text:"Learners undertake school-based assessments (SBAs) and national examinations as per KNEC guidelines." },
];

export default function AdministrationPage() {
  return (
    <>
      <style>{`
        .dept-card:hover { transform:translateY(-3px); border-color:var(--accent)!important; box-shadow:0 16px 40px -12px var(--ring); }
        .admin-photo img { transition:transform 0.6s ease; }
        .admin-photo:hover img { transform:scale(1.03); }
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap" style={{ textAlign:"center",position:"relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom:"1.25rem" }}>Administration</div>
          <h1 style={{ fontSize:"clamp(2.5rem,7vw,5rem)",color:"#e4eaf5",marginBottom:"1rem" }} className="anim-up d1">School Leadership</h1>
          <p style={{ fontSize:"1.05rem",color:"rgba(147,184,224,0.75)",maxWidth:560,margin:"0 auto" }} className="anim-up d2">
            A dedicated team of professionals guiding Olmoran Senior School&apos;s mission of excellence.
          </p>
        </div>
      </section>

      {/* ── PRINCIPAL ─────────────────────────────── */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"4rem",alignItems:"center" }}>

            {/* Photo */}
            <div className="admin-photo" style={{ position:"relative",height:460,borderRadius:"1.25rem",overflow:"hidden",boxShadow:"0 24px 60px -12px rgba(5,13,26,0.35)" }}>
              <Image
                src="/images/admin1.jpg"
                alt="School Principal — Olmoran Senior School"
                fill style={{ objectFit:"cover",objectPosition:"center top" }}
                sizes="(max-width:768px) 100vw, 45vw"
              />
              <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"2rem",background:"linear-gradient(to top,rgba(5,13,26,0.9),transparent)" }}>
                <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.6rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.18em",color:"#d4a843",marginBottom:"0.3rem" }}>Principal</div>
                <div style={{ fontFamily:"Georgia,serif",fontSize:"1.1rem",color:"#e4eaf5" }}>Olmoran Senior School</div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="label" style={{ marginBottom:"0.75rem" }}>Principal&apos;s Message</div>
              <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.6rem)",marginBottom:"1.5rem",lineHeight:1.15 }}>
                A Message from<br/>Our Principal
              </h2>
              <blockquote style={{ borderLeft:"3px solid #d4a843",paddingLeft:"1.25rem",fontFamily:"Georgia,serif",fontStyle:"italic",fontSize:"1.1rem",color:"var(--text)",lineHeight:1.75,marginBottom:"1.25rem" }}>
                &ldquo;At Olmoran Senior School, we believe every learner carries within them the seeds of greatness. Our role is to cultivate those seeds through discipline, knowledge, and an unwavering pursuit of excellence.&rdquo;
              </blockquote>
              <p style={{ fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.85,marginBottom:"1rem" }}>
                Our administration is committed to creating an environment where both teachers and learners thrive — academically, morally, and socially.
              </p>
              <p style={{ fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.85 }}>
                We welcome partnerships with parents, the community and all stakeholders who share our vision for transformative education in Laikipia County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPUTY PRINCIPAL ──────────────────────── */}
      <section className="section" style={{ background:"var(--bg)",borderTop:"1px solid var(--border)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"4rem",alignItems:"center" }}>

            {/* Content left */}
            <div>
              <div className="label" style={{ marginBottom:"0.75rem" }}>Deputy Principal</div>
              <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.6rem)",marginBottom:"1.5rem",lineHeight:1.15 }}>
                Deputy Principal&apos;s<br/>Message
              </h2>
              <blockquote style={{ borderLeft:"3px solid var(--accent-lt)",paddingLeft:"1.25rem",fontFamily:"Georgia,serif",fontStyle:"italic",fontSize:"1.05rem",color:"var(--text)",lineHeight:1.75,marginBottom:"1.25rem" }}>
                &ldquo;Curriculum excellence and co-curricular growth go hand in hand. We are committed to nurturing the whole student — inside the classroom and beyond it — ensuring every learner at Olmoran reaches their full potential.&rdquo;
              </blockquote>
              <p style={{ fontSize:"0.9rem",color:"var(--muted)",lineHeight:1.85 }}>
                The Deputy Principal oversees all curriculum delivery, co-curricular programmes, and student development initiatives, working closely with department heads to maintain the highest academic standards.
              </p>
            </div>

            {/* Photo right */}
            <div className="admin-photo" style={{ position:"relative",height:420,borderRadius:"1.25rem",overflow:"hidden",boxShadow:"0 24px 60px -12px rgba(5,13,26,0.2)" }}>
              <Image
                src="/images/admin2.jpg"
                alt="Deputy Principal — Olmoran Senior School"
                fill style={{ objectFit:"cover",objectPosition:"center top" }}
                sizes="(max-width:768px) 100vw, 45vw"
              />
              <div style={{ position:"absolute",bottom:0,left:0,right:0,padding:"2rem",background:"linear-gradient(to top,rgba(5,13,26,0.9),transparent)" }}>
                <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.6rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.18em",color:"#d4a843",marginBottom:"0.3rem" }}>Deputy Principal</div>
                <div style={{ fontFamily:"Georgia,serif",fontSize:"1.1rem",color:"#e4eaf5" }}>Olmoran Senior School</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPARTMENTS ───────────────────────────── */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ textAlign:"center",maxWidth:520,margin:"0 auto 3rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>Structure</div>
            <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Departments &amp; Offices</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"1.25rem" }}>
            {departments.map(d => (
              <div key={d.name} className="card dept-card" style={{ padding:"1.75rem",transition:"transform 0.25s,border-color 0.25s,box-shadow 0.25s" }}>
                <h3 style={{ fontFamily:"Georgia,serif",fontSize:"1rem",fontWeight:600,marginBottom:"0.25rem" }}>{d.name}</h3>
                <div style={{ fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.68rem",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.12em",color:"var(--gold-lt)",marginBottom:"0.75rem" }}>{d.head}</div>
                <p style={{ fontSize:"0.83rem",color:"var(--muted)",lineHeight:1.7 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POLICIES ──────────────────────────────── */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="wrap">
          <div style={{ maxWidth:520,marginBottom:"3rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>School Policies</div>
            <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.8rem)" }}>Policies &amp; Regulations</h2>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1.25rem" }}>
            {policies.map(p => (
              <div key={p.title} className="card" style={{ padding:"1.5rem" }}>
                <h3 style={{ fontWeight:700,fontSize:"0.95rem",marginBottom:"0.5rem",color:"var(--text)" }}>{p.title}</h3>
                <p style={{ fontSize:"0.85rem",color:"var(--muted)",lineHeight:1.7 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm" style={{ background:"var(--bg-2)" }}>
        <div className="wrap" style={{ textAlign:"center" }}>
          <h3 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.4rem,3vw,2rem)",marginBottom:"0.75rem" }}>Have a Question for the Administration?</h3>
          <Link href="/contact" className="btn btn-primary">Contact Administration</Link>
        </div>
      </section>
    </>
  );
}