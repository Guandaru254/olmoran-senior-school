import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Academic Resources" };

const subjects = [
  {
    category: "Mathematics",
    items: [
      { title: "Core Mathematics Revision Notes", type: "PDF", desc: "Comprehensive notes covering all Core Mathematics topics for Grade 10 CBC assessment." },
      { title: "Advanced Mathematics Practice Sets", type: "PDF", desc: "Extended problem sets for Advanced Mathematics learners preparing for KNEC assessments." },
      { title: "Statistics & Probability Guide", type: "PDF", desc: "A focused guide on data handling, probability and statistical reasoning." },
    ],
  },
  {
    category: "Sciences",
    items: [
      { title: "Biology: Cells & Ecology Notes", type: "PDF", desc: "Structured notes on cell biology, ecology and environmental science topics." },
      { title: "Chemistry: Periodic Table & Reactions", type: "PDF", desc: "Detailed reference notes on elements, compounds and chemical reactions." },
      { title: "Physics: Mechanics & Electricity", type: "PDF", desc: "Theory and worked examples on force, motion, electricity and magnetism." },
      { title: "Agriculture: Soil & Crop Science", type: "PDF", desc: "Notes on soil types, crop husbandry, and agricultural practices in Kenya." },
    ],
  },
  {
    category: "Humanities & Social Sciences",
    items: [
      { title: "History & Citizenship: Kenya Independence", type: "PDF", desc: "Detailed notes on Kenya's independence movement and citizenship responsibilities." },
      { title: "Geography: Physical & Human Geography", type: "PDF", desc: "Covers landforms, climate, population, urbanisation and map reading." },
      { title: "Christian Religious Education Notes", type: "PDF", desc: "Topic notes on Old and New Testament themes for CBC assessments." },
    ],
  },
  {
    category: "Languages",
    items: [
      { title: "English: Comprehension & Composition", type: "PDF", desc: "Grammar rules, comprehension techniques and essay writing frameworks." },
      { title: "Kiswahili: Fasihi na Sarufi", type: "PDF", desc: "Kiswahili grammar (sarufi) and literature (fasihi) notes for Grade 10." },
      { title: "Literature in English: Set Books Guide", type: "PDF", desc: "Analysis notes on the current set books for CBC Grade 10 learners." },
    ],
  },
  {
    category: "Business & ICT",
    items: [
      { title: "Business Studies: Entrepreneurship Notes", type: "PDF", desc: "Notes on business concepts, entrepreneurship, and financial literacy." },
      { title: "Computer Studies: Digital Literacy", type: "PDF", desc: "Introduction to computing, internet use, spreadsheets and programming basics." },
    ],
  },
];

const studyGuides = [
  { title: "How to Read a CBC Assessment Rubric", desc: "A practical guide to understanding how school-based assessments (SBAs) are marked and how to score highly." },
  { title: "Time Management for Learners", desc: "Techniques for structuring your study timetable across multiple subjects during the school term and during holidays." },
  { title: "Effective Note-Taking Methods", desc: "The Cornell method, mind-mapping and linear notes — when to use each approach for maximum retention." },
  { title: "Exam Technique & Answering Strategies", desc: "How to read questions carefully, plan your answers and allocate time across paper sections." },
  { title: "Revision Planning Guide", desc: "A step-by-step framework for planning end-of-term and end-of-year revision across all subjects." },
  { title: "Group Study Best Practices", desc: "How to run effective peer study groups that improve understanding without becoming a distraction." },
];

const calendar = [
  { term: "Term 1", event: "School-Based Assessment (SBA) Round 1", month: "March" },
  { term: "Term 1", event: "Term 1 End-of-Term Examinations",        month: "April" },
  { term: "Term 2", event: "School-Based Assessment (SBA) Round 2", month: "July" },
  { term: "Term 2", event: "Term 2 End-of-Term Examinations",        month: "August" },
  { term: "Term 3", event: "School-Based Assessment (SBA) Round 3", month: "October" },
  { term: "Term 3", event: "End-of-Year National Assessments",       month: "November" },
];

export default function AcademicResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom: "1.25rem" }}>Academic Resources</div>
          <h1 style={{ fontSize: "clamp(2.5rem,7vw,5rem)", color: "#e4eaf5", marginBottom: "1rem" }} className="anim-up d1">
            Learning Resources
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(147,184,224,0.75)", maxWidth: 560, margin: "0 auto" }} className="anim-up d2">
            Study notes, revision guides and assessment resources for Grade 10 CBC learners at Olmoran Senior School.
          </p>
        </div>
      </section>

      {/* Subject Resources */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 520, marginBottom: "3.5rem" }}>
            <div className="label" style={{ marginBottom: "0.6rem" }}>By Subject Area</div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", marginBottom: "0.75rem" }}>Subject Notes &amp; Materials</h2>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Notes and revision materials organised by subject category. All materials are aligned with the CBC Grade 10 curriculum framework.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {subjects.map(cat => (
              <div key={cat.category}>
                {/* Category header */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ height: 1, width: 32, background: "var(--gold-lt)", flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold-lt)", whiteSpace: "nowrap" }}>
                    {cat.category}
                  </h3>
                  <div style={{ height: 1, background: "var(--border)", flex: 1 }} />
                </div>

                {/* Resource rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {cat.items.map(item => (
                    <div key={item.title} style={{
                      display: "grid", gridTemplateColumns: "1fr auto",
                      gap: "1.5rem", alignItems: "center",
                      padding: "1.25rem 1.5rem",
                      background: "var(--bg-card)", border: "1px solid var(--border)",
                      borderRadius: "0.875rem",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                    }} className="res-row">
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem", color: "var(--text)" }}>{item.title}</div>
                        <div style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
                        <span style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", padding: "0.2rem 0.6rem", borderRadius: "0.375rem", background: "var(--surface)", color: "var(--muted)", border: "1px solid var(--border)" }}>{item.type}</span>
                        <span style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--accent-lt)", cursor: "pointer" }}>Download</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Guides */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <div>
              <div className="label" style={{ marginBottom: "0.75rem" }}>For Every Learner</div>
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", marginBottom: "1rem" }}>Study Skills &amp; Guides</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                Academic success is built on more than subject knowledge — it requires strong study habits, good time management and strategic exam preparation. These guides are compiled by our teaching staff.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {studyGuides.map((g, i) => (
                <div key={g.title} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start", padding: "1.25rem", background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "0.875rem" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "0.5rem", background: "var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "Georgia,serif", fontWeight: 700, fontSize: "0.8rem", color: "var(--accent-lt)" }}>
                    {String(i+1).padStart(2,"0")}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{g.title}</div>
                    <div style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.65 }}>{g.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Calendar */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ maxWidth: 520, marginBottom: "3rem" }}>
            <div className="label" style={{ marginBottom: "0.6rem" }}>2025 Academic Year</div>
            <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>Assessment Calendar</h2>
          </div>
          <div className="card" style={{ overflow: "hidden", padding: 0 }}>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Assessment / Event</th>
                  <th>Month</th>
                </tr>
              </thead>
              <tbody>
                {calendar.map((c, i) => (
                  <tr key={i}>
                    <td>
                      <span className="pill pill-navy" style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.68rem", fontWeight: 800 }}>{c.term}</span>
                    </td>
                    <td style={{ fontWeight: 500, color: "var(--text)" }}>{c.event}</td>
                    <td style={{ color: "var(--gold-lt)", fontWeight: 700, fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.85rem" }}>{c.month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="section-sm" style={{ background: "var(--bg)" }}>
        <div className="wrap">
          <div className="card notice-grid" style={{ padding: "2rem 2.5rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
            <div>
              <div className="label" style={{ marginBottom: "0.5rem" }}>Note to Learners</div>
              <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.8 }}>
                All downloadable materials are for registered Olmoran Senior School learners. If you need a specific resource or cannot find what you are looking for, please speak to your subject teacher or visit the school library.
              </p>
            </div>
            <Link href="/contact" className="btn btn-primary" style={{ whiteSpace: "nowrap" }}>Contact a Teacher</Link>
          </div>
        </div>
      </section>

      <style>{`
        .res-row:hover { border-color: var(--accent) !important; box-shadow: 0 8px 24px -8px var(--ring); }
        @media(max-width:640px){ .notice-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}