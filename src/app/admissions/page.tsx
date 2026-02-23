import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/data/site";

export const metadata: Metadata = { title: "Admissions" };

const requirements = [
  { step:"01", title:"KCPE / Grade 9 Results",       desc:"Original and certified copy of your KCPE certificate or Grade 9 assessment results." },
  { step:"02", title:"Birth Certificate",             desc:"Official copy of the learner's national birth certificate." },
  { step:"03", title:"Transfer Letter",               desc:"For learners transferring from another school, a transfer letter from the previous institution is required." },
  { step:"04", title:"Medical Records",               desc:"Immunisation certificate or relevant medical documentation as required by MOE guidelines." },
  { step:"05", title:"Two Passport Photos",           desc:"Recent passport-size photographs of the learner on a white background." },
  { step:"06", title:"Parent / Guardian ID",          desc:"Copy of the National ID or passport of the parent or guardian enrolling the student." },
];

const fees = [
  { item:"Tuition Fee (per term)",      amount:"Contact Office" },
  { item:"Activity / Sports Levy",      amount:"Contact Office" },
  { item:"Building Fund Levy",          amount:"Contact Office" },
  { item:"Examination Registration",    amount:"Contact Office" },
  { item:"School Uniform (approx.)",    amount:"Contact Office" },
];

export default function AdmissionsPage() {
  return (
    <>
      <style>{`
        .step-card:hover { border-color:var(--accent)!important; transform:translateY(-3px); box-shadow:0 16px 40px -12px var(--ring); }
      `}</style>

      <section className="page-hero">
        <div className="wrap" style={{ textAlign:"center",position:"relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom:"1.25rem" }}>Join Us</div>
          <h1 style={{ fontSize:"clamp(2.5rem,7vw,5rem)",color:"#e4eaf5",marginBottom:"1rem" }} className="anim-up d1">Admissions</h1>
          <p style={{ fontSize:"1.05rem",color:"rgba(147,184,224,0.75)",maxWidth:560,margin:"0 auto" }} className="anim-up d2">
            We welcome learners who are committed to academic excellence, good discipline and personal growth.
          </p>
        </div>
      </section>

      {/* Requirements */}
      <section className="section" style={{ background:"var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth:520,marginBottom:"3.5rem" }}>
            <div className="label" style={{ marginBottom:"0.6rem" }}>What You Need</div>
            <h2 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)",marginBottom:"0.75rem" }}>Admission Requirements</h2>
            <p style={{ color:"var(--muted)",fontSize:"0.95rem",lineHeight:1.8 }}>Please prepare all documents below before visiting the school admissions office.</p>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"1.25rem" }}>
            {requirements.map(r => (
              <div key={r.step} className="card step-card" style={{ padding:"1.75rem",transition:"transform 0.25s,border-color 0.25s,box-shadow 0.25s" }}>
                <div style={{ fontFamily:"Georgia,serif",fontSize:"2rem",fontWeight:700,color:"var(--surface)",lineHeight:1,marginBottom:"1rem",WebkitTextStroke:"1px var(--border)" }}>{r.step}</div>
                <h3 style={{ fontFamily:"Georgia,serif",fontSize:"1rem",fontWeight:600,marginBottom:"0.5rem" }}>{r.title}</h3>
                <p style={{ fontSize:"0.85rem",color:"var(--muted)",lineHeight:1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee structure */}
      <section className="section" style={{ background:"var(--bg)" }}>
        <div className="wrap">
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"4rem",alignItems:"start" }}>
            <div>
              <div className="label" style={{ marginBottom:"0.75rem" }}>Financial Information</div>
              <h2 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.8rem,4vw,2.6rem)",marginBottom:"1rem" }}>Fee Structure</h2>
              <p style={{ color:"var(--muted)",lineHeight:1.85,fontSize:"0.95rem",marginBottom:"1.25rem" }}>
                The current fee schedule is available from the school bursar. Fees are payable at the beginning of each term. Bursary funding and NEA support may be available for eligible learners.
              </p>
              <p style={{ color:"var(--muted)",lineHeight:1.85,fontSize:"0.95rem" }}>
                Contact the school office directly on <a href={`tel:${site.phone}`} style={{ color:"var(--accent-lt)",fontWeight:700,textDecoration:"none" }}>{site.phone}</a> or email <a href={`mailto:${site.email}`} style={{ color:"var(--accent-lt)",fontWeight:700,textDecoration:"none" }}>{site.email}</a> for the latest fee statement.
              </p>
            </div>
            <div className="card" style={{ overflow:"hidden",padding:0 }}>
              <table className="data-table">
                <thead>
                  <tr><th>Fee Component</th><th>Amount</th></tr>
                </thead>
                <tbody>
                  {fees.map(f => (
                    <tr key={f.item}>
                      <td style={{ fontWeight:500 }}>{f.item}</td>
                      <td style={{ color:"var(--muted)",fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.85rem" }}>{f.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-sm" style={{ background:"var(--bg-2)" }}>
        <div className="wrap" style={{ textAlign:"center" }}>
          <h3 style={{ fontFamily:"Georgia,serif",fontSize:"clamp(1.4rem,3vw,2rem)",marginBottom:"0.75rem" }}>Ready to Apply?</h3>
          <p style={{ color:"var(--muted)",marginBottom:"2rem",fontFamily:"'Trebuchet MS',Arial,sans-serif",fontSize:"0.95rem" }}>
            Visit the school office in person or contact us to arrange your enrolment.
          </p>
          <div style={{ display:"flex",flexWrap:"wrap",gap:"1rem",justifyContent:"center" }}>
            <Link href="/contact" className="btn btn-primary">Contact Admissions Office</Link>
            <a href={`tel:${site.phone}`} className="btn btn-ghost">Call {site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}