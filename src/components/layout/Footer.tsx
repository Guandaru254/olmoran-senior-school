import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/data/site";
import { navigation } from "@/lib/data/navigation";

export default function Footer() {
  return (
    <footer style={{ background: "#050d1a", color: "#93b8e0" }}>
      <style>{`
        .ft-link:hover { color: #e4eaf5 !important; }
        .ft-social:hover { border-color: #d4a843 !important; color: #d4a843 !important; }
      `}</style>

      {/* Wave separator */}
      <div style={{ overflow: "hidden", lineHeight: 0, background: "var(--bg)" }}>
        <svg viewBox="0 0 1440 48" style={{ display: "block", width: "100%" }} preserveAspectRatio="none">
          <path d="M0,24 C360,48 1080,0 1440,24 L1440,0 L0,0 Z" fill="#050d1a"/>
        </svg>
      </div>

      {/* Gold top border */}
      <div style={{ height: 2, background: "linear-gradient(90deg, transparent, #d4a843, transparent)" }} />

      <div className="wrap" style={{ paddingBlock: "3.5rem 2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "3rem" }} className="ft-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.25rem" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(212,168,67,0.35)", flexShrink: 0, position: "relative" }}>
                <Image src="/images/logo.png" alt="Olmoran Senior School crest" fill style={{ objectFit: "cover" }} sizes="200px" />
              </div>
            </div>
            <p style={{ fontSize: "0.85rem", color: "#4a6898", lineHeight: 1.8, maxWidth: 280 }}>
              Established 2003. Shaping the next generation of disciplined, skilled and principled leaders in Laikipia County, Kenya.
            </p>
            {/* Social placeholders */}
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem" }}>
              {["Facebook", "Twitter", "YouTube"].map(s => (
                <a key={s} href="#" className="ft-social" aria-label={s} style={{
                  width: 34, height: 34, borderRadius: "50%",
                  border: "1px solid rgba(74,134,204,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#4a6898", textDecoration: "none", transition: "all 0.2s",
                  fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.55rem", fontWeight: 800,
                }}>
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="label" style={{ color: "#4a86cc", marginBottom: "1rem" }}>Quick Links</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {navigation.map(n => (
                <li key={n.href}>
                  <Link href={n.href} className="ft-link" style={{ fontSize: "0.85rem", color: "#4a6898", textDecoration: "none", transition: "color 0.18s" }}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Values */}
          <div>
            <div className="label" style={{ color: "#4a86cc", marginBottom: "1rem" }}>Core Values</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {["Integrity", "Professionalism", "Diligence", "Teamwork"].map(v => (
                <li key={v} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#d4a843", flexShrink: 0, display: "block" }} />
                  <span style={{ fontSize: "0.85rem", color: "#4a6898" }}>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label" style={{ color: "#4a86cc", marginBottom: "1rem" }}>Location &amp; Contacts</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {[
                { label: "Address", value: `${site.address}`, sub: site.location },
                { label: "Phone",   value: site.phone,   href: `tel:${site.phone}` },
                { label: "Email",   value: site.email,   href: `mailto:${site.email}` },
              ].map(c => (
                <div key={c.label}>
                  <div style={{ fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.6rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em", color: "#2563a8", marginBottom: "0.15rem" }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="ft-link" style={{ fontSize: "0.85rem", color: "#4a6898", textDecoration: "none", transition: "color 0.18s" }}>{c.value}</a>
                    : <span style={{ fontSize: "0.85rem", color: "#4a6898" }}>{c.value}</span>
                  }
                  {c.sub && <div style={{ fontSize: "0.78rem", color: "#2d4a70", marginTop: "0.1rem" }}>{c.sub}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,rgba(74,134,204,0.15),transparent)", margin: "2.5rem 0 1.5rem" }} />

        {/* Bottom */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.75rem", fontFamily: "'Trebuchet MS',Arial,sans-serif", fontSize: "0.75rem", color: "#2d4070" }}>
          <span>Copyright &copy;{site.copyrightYear}. {site.name} | All Rights Reserved</span>
          <span>Built by <a href={`https://${site.developer}`} target="_blank" rel="noopener noreferrer" className="ft-link" style={{ color: "#4a86cc", textDecoration: "none", fontWeight: 700, transition: "color 0.18s" }}>{site.developer}</a></span>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){ .ft-grid{ grid-template-columns:1fr 1fr !important; } }
        @media(max-width:560px){ .ft-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}