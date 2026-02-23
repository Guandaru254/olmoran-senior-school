"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { navigation } from "@/lib/data/navigation";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const t = localStorage.getItem("theme");
    const sys = window.matchMedia("(prefers-color-scheme:dark)").matches;
    if (t === "dark" || (!t && sys)) setDark(true);
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const toggle = () => {
    const n = !dark;
    setDark(n);
    document.documentElement.classList.toggle("dark", n);
    localStorage.setItem("theme", n ? "dark" : "light");
  };

  const navBg = dark
    ? scrolled ? "rgba(5,13,26,0.97)" : "rgba(5,13,26,0.9)"
    : scrolled ? "rgba(247,248,252,0.98)" : "rgba(247,248,252,0.92)";

  return (
    <>
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: navBg, backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
        boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
      }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", height: 68 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none", flexShrink: 0, marginRight: "2rem" }}>
            <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", flexShrink: 0, border: "2px solid rgba(212,168,67,0.4)", position: "relative" }}>
              <Image src="/images/logo.png" alt="Olmoran Senior School crest" fill style={{ objectFit: "cover" }} sizes="200px" />
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "0.05rem", flex: 1 }}>
            {navigation.map(n => {
              const active = path === n.href;
              return (
                <Link key={n.href} href={n.href} className={`nav-link${active ? " nav-active" : ""}`} style={{
                  padding: "0.4rem 0.7rem", fontSize: "0.82rem",
                  fontFamily: "'Trebuchet MS', Arial, sans-serif", fontWeight: active ? 700 : 500,
                  color: active ? "var(--accent-lt)" : "var(--muted)",
                  textDecoration: "none", borderRadius: "0.5rem",
                  background: active ? "var(--surface)" : "transparent",
                  transition: "all 0.18s", whiteSpace: "nowrap",
                }}>{n.label}</Link>
              );
            })}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "auto" }}>
            {/* Theme toggle */}
            <button onClick={toggle} aria-label="Toggle theme" className="theme-toggle" style={{
              width: 36, height: 36, borderRadius: "50%", cursor: "pointer",
              background: "transparent", border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--muted)", transition: "all 0.2s",
            }}>
              {dark
                ? <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
                : <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
              }
            </button>

            <Link href="/admissions" className="btn btn-primary hide-mobile" style={{ fontSize: "0.8rem", padding: "0.5rem 1.25rem" }}>
              Apply Now
            </Link>

            {/* Hamburger */}
            <button onClick={() => setOpen(v => !v)} className="hide-desktop" aria-label="Menu" style={{
              width: 36, height: 36, background: "transparent", border: "1px solid var(--border)",
              borderRadius: "0.5rem", cursor: "pointer", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: 5,
            }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", width: 18, height: 2,
                  background: "var(--text)", borderRadius: 2, transition: "all 0.25s",
                  transform: open ? (i===0 ? "translateY(7px) rotate(45deg)" : i===2 ? "translateY(-7px) rotate(-45deg)" : "none") : "none",
                  opacity: open && i===1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div style={{
          maxHeight: open ? 600 : 0, overflow: "hidden",
          transition: "max-height 0.35s cubic-bezier(.22,1,.36,1)",
          borderTop: open ? "1px solid var(--border)" : "none",
          background: "var(--bg-2)",
        }}>
          <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
            {navigation.map(n => {
              const active = path === n.href;
              return (
                <Link key={n.href} href={n.href} onClick={() => setOpen(false)} style={{
                  padding: "0.75rem 1rem", borderRadius: "0.75rem",
                  fontFamily: "'Trebuchet MS', Arial, sans-serif", fontSize: "0.9rem",
                  fontWeight: active ? 700 : 500,
                  color: active ? "var(--accent-lt)" : "var(--text-2)",
                  textDecoration: "none",
                  background: active ? "var(--surface)" : "transparent",
                }}>{n.label}</Link>
              );
            })}
            <Link href="/admissions" className="btn btn-primary" onClick={() => setOpen(false)} style={{ marginTop: "0.75rem", justifyContent: "center" }}>
              Apply Now
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        .nav-link:hover { color: var(--accent-lt) !important; background: var(--surface) !important; }
        .theme-toggle:hover { background: var(--surface) !important; color: var(--accent) !important; }
        @media (min-width:900px){ .hide-mobile{display:flex!important;} .hide-desktop{display:none!important;} }
        @media (max-width:899px){ .hide-mobile{display:none!important;} .hide-desktop{display:flex!important;} }
      `}</style>
    </>
  );
}