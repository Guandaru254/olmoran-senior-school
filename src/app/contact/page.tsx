"use client";
import { site } from "@/lib/data/site";
import Link from "next/link";

const faqs = [
  { q: "When do admissions open?",       a: "Admissions are open throughout the year. Enrolment for the new academic year typically begins in November. Contact the school office for specific dates." },
  { q: "What pathways do you offer?",    a: "We offer two CBC-approved pathways: STEM (Applied Sciences & Pure Sciences) and Social Sciences (Humanities & Business Studies), with 13 verified subject combinations." },
  { q: "Where exactly is the school?",   a: "Olmoran Senior School is in Olmoran sub-location, Laikipia County. Use the map below or search 'Ol Moran High School' on Google Maps. Matatus from Nyahururu and Rumuruti serve the area." },
  { q: "Who handles fees enquiries?",    a: "Contact the School Bursar directly at the school office or via the main phone number for the current fee structure." },
  { q: "Is there boarding available?",   a: "Please contact the school administration directly for current boarding arrangements and availability." },
];

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-field:focus { border-color: var(--accent-lt) !important; outline: none; box-shadow: 0 0 0 3px var(--ring); }
        .faq-details summary::-webkit-details-marker { display: none; }
        .faq-details[open] summary { color: var(--accent-lt); }
        .faq-details[open] summary span { transform: rotate(45deg); }
        .faq-details summary span { display: inline-block; transition: transform 0.25s ease; }
        .info-card:hover { border-color: var(--accent) !important; transform: translateY(-2px); box-shadow: 0 12px 32px -8px var(--ring); }
      `}</style>

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap" style={{ textAlign: "center", position: "relative" }}>
          <div className="badge badge-navy anim-up" style={{ marginBottom: "1.25rem" }}>Contact Us</div>
          <h1 style={{ fontSize: "clamp(2.5rem,7vw,5rem)", color: "#e4eaf5", marginBottom: "1rem" }} className="anim-up d1">
            Get In Touch
          </h1>
          <p style={{ fontSize: "1.05rem", color: "rgba(147,184,224,0.75)", maxWidth: 520, margin: "0 auto" }} className="anim-up d2">
            We welcome enquiries from parents, students and community members. Reach us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact info row */}
      <section className="section-sm" style={{ background: "var(--bg-2)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { label: "Address",       val: site.address,  sub: site.location,                  href: undefined },
              { label: "Phone",         val: site.phone,    sub: "Call or WhatsApp",             href: `tel:${site.phone}` },
              { label: "Email",         val: site.email,    sub: "We reply within 24 hours",     href: `mailto:${site.email}` },
              { label: "Office Hours",  val: "Mon – Fri",   sub: "7:00 AM – 5:00 PM",           href: undefined },
            ].map(c => (
              <div key={c.label} className="card info-card" style={{ padding: "1.5rem", transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s" }}>
                <div style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--gold-lt)", marginBottom: "0.5rem" }}>{c.label}</div>
                {c.href
                  ? <a href={c.href} style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", textDecoration: "none", display: "block", marginBottom: "0.2rem" }}>{c.val}</a>
                  : <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text)", marginBottom: "0.2rem" }}>{c.val}</div>
                }
                <div style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", color: "var(--muted)" }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Form side by side */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3.5rem" }}>

            {/* Google Maps embed */}
            <div>
              <div className="label" style={{ marginBottom: "0.75rem" }}>Find Us</div>
              <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "1.5rem" }}>Our Location</h2>
              <div style={{ borderRadius: "1rem", overflow: "hidden", border: "1px solid var(--border)", boxShadow: "0 12px 40px -8px var(--ring)" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.0234567890123!2d36.44439299999999!3d0.5953438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1786fbff89c80e69%3A0x8e8bc562dab98c6a!2sOl%20moran%20high%20school!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
                  width="100%"
                  height="380"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Olmoran Senior School location"
                />
              </div>
              <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
                <a
                  href="https://www.google.com/maps/place/Ol+moran+high+school/@0.5953438,36.444393,17z"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn-primary" style={{ fontSize: "0.82rem", padding: "0.6rem 1.25rem" }}
                >
                  Open in Google Maps
                </a>
                <a href={`tel:${site.phone}`} className="btn btn-ghost" style={{ fontSize: "0.82rem", padding: "0.6rem 1.25rem" }}>
                  Call Us
                </a>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <div className="label" style={{ marginBottom: "0.75rem" }}>Send a Message</div>
              <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", marginBottom: "1.5rem" }}>Write to Us</h2>
              <div className="card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    <div>
                      <label style={{ display: "block", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--text-2)", marginBottom: "0.4rem" }}>Full Name</label>
                      <input type="text" placeholder="Your name" className="contact-field" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border)", borderRadius: "0.75rem", background: "var(--bg)", color: "var(--text)", fontSize: "0.9rem", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--text-2)", marginBottom: "0.4rem" }}>Phone</label>
                      <input type="tel" placeholder="+254 7XX XXX XXX" className="contact-field" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border)", borderRadius: "0.75rem", background: "var(--bg)", color: "var(--text)", fontSize: "0.9rem", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit" }} />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--text-2)", marginBottom: "0.4rem" }}>Email Address</label>
                    <input type="email" placeholder="your@email.com" className="contact-field" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border)", borderRadius: "0.75rem", background: "var(--bg)", color: "var(--text)", fontSize: "0.9rem", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit" }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--text-2)", marginBottom: "0.4rem" }}>Subject</label>
                    <select className="contact-field" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border)", borderRadius: "0.75rem", background: "var(--bg)", color: "var(--text)", fontSize: "0.9rem", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit" }}>
                      <option value="">Select a topic...</option>
                      <option>Admissions Enquiry</option>
                      <option>Fee Enquiry</option>
                      <option>Academic Information</option>
                      <option>Partnership / Donation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "var(--text-2)", marginBottom: "0.4rem" }}>Message</label>
                    <textarea rows={4} placeholder="How can we help you?" className="contact-field" style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border)", borderRadius: "0.75rem", background: "var(--bg)", color: "var(--text)", fontSize: "0.9rem", resize: "vertical", transition: "border-color 0.2s, box-shadow 0.2s", fontFamily: "inherit" }} />
                  </div>
                  <button type="button" className="btn btn-primary" style={{ justifyContent: "center" }}>
                    Send Message
                  </button>
                  <p style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.75rem", color: "var(--muted)", textAlign: "center" }}>
                    Or email directly:{" "}
                    <a href={`mailto:${site.email}`} style={{ color: "var(--accent-lt)", textDecoration: "none", fontWeight: 700 }}>{site.email}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{ background: "var(--bg-2)" }}>
        <div className="wrap" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="label" style={{ marginBottom: "0.6rem" }}>Common Questions</div>
            <h2 style={{ fontFamily: "Georgia,'Times New Roman',serif", fontSize: "clamp(1.8rem,4vw,2.8rem)" }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map(f => (
              <details key={f.q} className="faq-details card" style={{ padding: 0, overflow: "hidden" }}>
                <summary style={{
                  padding: "1.25rem 1.5rem", cursor: "pointer",
                  fontFamily: "'Trebuchet MS',Arial,sans-serif",
                  fontWeight: 700, fontSize: "0.95rem", color: "var(--text)",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  listStyle: "none", background: "var(--bg-card)",
                }}>
                  {f.q}
                  <span style={{ color: "var(--gold-lt)", fontSize: "1.2rem", fontWeight: 300, flexShrink: 0, marginLeft: "1rem" }}>+</span>
                </summary>
                <div style={{ padding: "1rem 1.5rem 1.25rem", background: "var(--surface)", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.8 }}>
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:640px){ .form-row{ grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}