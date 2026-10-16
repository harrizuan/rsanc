"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── Social icons ─── */
export const IG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
export const TK = () => (
  <svg width="18" height="20" viewBox="0 0 448 512" fill="currentColor">
    <path d="M448 209.91a210.06 210.06 0 01-122.77-39.25v178.72A162.55 162.55 0 11185 188.31v89.89a74.62 74.62 0 1052.23 71.18V0h88a121.18 121.18 0 001.86 22.17A122.18 122.18 0 00381 102.39a121.43 121.43 0 0067 20.14z"/>
  </svg>
);

const HamburgerIcon = () => (
  <svg width="24" height="18" viewBox="0 0 24 18" fill="none">
    <line x1="0" y1="1"  x2="24" y2="1"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="0" y1="9"  x2="24" y2="9"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="0" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M1 1l20 20M21 1L1 21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const NAV = [
  { label: "HOME",     href: "/",          key: "home" },
  { label: "HEADWEAR", href: "/headwear",  key: "headwear" },
  { label: "T-SHIRTS", href: "/t-shirts",  key: "t-shirts" },
];

/* ═══════════════════════════════════════════════════════════════
   HEADER

   Root cause of logo-not-centred bug:
   CSS `display:none` removes a grid item from flow, shifting the
   other items. Fixed by using position:absolute for the hamburger
   so it never participates in layout — logo stays centred always.
═══════════════════════════════════════════════════════════════ */
export function Header({ active = "home" }: { active?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(0,0,0,0.97)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 24px" }}>

          {/*
           * Logo row.
           * position:relative wrapper + position:absolute hamburger
           * means the hamburger NEVER affects the layout flow.
           * Logo is always perfectly centred with margin:auto.
           */}
          <div
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 16,
              paddingBottom: 12,
            }}
          >
            {/* Hamburger — absolutely left, only rendered on mobile via CSS */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="hdr-hamburger"
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                color: "rgba(255,255,255,0.8)",
                padding: 4,
                marginTop: 14, /* align with logo vertical padding */
              }}
            >
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </button>

            {/* Logo — centred via margin:auto, always visible */}
            <Link href="/" style={{ display: "inline-block", lineHeight: 0 }}>
              <Image
                src="/images/logo.png"
                alt="RSANC DEADZ"
                width={500}
                height={500}
                priority
                unoptimized
                style={{
                  /* Square 500×500 image — set height, width follows */
                  height: "clamp(100px, 18vw, 180px)",
                  width:  "clamp(100px, 18vw, 180px)",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Link>
          </div>

          {/* Desktop nav — .hdr-desktop-nav = none on mobile, flex on desktop */}
          <nav
            className="hdr-desktop-nav"
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 44,
              paddingBottom: 14,
            }}
            aria-label="Main navigation"
          >
            {NAV.map(({ label, href, key }) => {
              const isActive = active === key;
              return (
                <Link
                  key={key}
                  href={href}
                  style={{
                    position: "relative",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: isActive ? 500 : 400,
                    opacity: isActive ? 1 : 0.42,
                    paddingBottom: 4,
                    color: "#fff",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = isActive ? "1" : "0.42"; }}
                >
                  {label}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: 1,
                        background: "#fff",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/*
       * Mobile dropdown menu — z-99 (below header z-100).
       * Logo in header is ALWAYS visible on top.
       * .hdr-mobile-menu is hidden on desktop via globals.css.
       */}
      <div
        className="hdr-mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "#000",
          paddingTop: 128, /* pushes content below the header */
          overflowY: "auto",
          transform: open ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <nav>
          {NAV.map(({ label, href, key }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "22px 28px",
                fontSize: 16,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: active === key ? "#fff" : "rgba(255,255,255,0.5)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                fontWeight: active === key ? 500 : 400,
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: "32px 28px" }}>
          <a
            href="https://www.instagram.com/yvesrsanc"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.35)" }}
            aria-label="Instagram"
          >
            <IG />
          </a>
        </div>
      </div>
    </>
  );
}

/* ══════════════════════════ NEWSLETTER ══════════════════════════ */
export function Newsletter() {
  return (
    <section style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "64px 28px" }}>
      <div style={{ maxWidth: 360, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 500, marginBottom: 28 }}>
          SIGN UP FOR EARLY SHIT.
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "flex", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.18)", paddingBottom: 10, gap: 12 }}
        >
          <input
            type="email"
            placeholder="Email"
            style={{ flex: 1, background: "none", border: "none", outline: "none", fontSize: 13, color: "#fff", fontFamily: "inherit" }}
          />
          <button type="submit" style={{ color: "rgba(255,255,255,0.4)", display: "flex", flexShrink: 0 }}>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
              <path fillRule="evenodd" d="M8.537.808a.5.5 0 0 1 .817-.162l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L11.793 5.5H1a.5.5 0 0 1 0-1h10.793L8.646 1.354a.5.5 0 0 1-.109-.546" clipRule="evenodd"/>
            </svg>
          </button>
        </form>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, marginTop: 28 }}>
          <a
            href="https://www.instagram.com/yvesrsanc"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(255,255,255,0.35)", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.8)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)"; }}
            aria-label="Instagram"
          >
            <IG />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════ FOOTER ══════════════════════════ */
const PAYMENTS = ["Visa", "Mastercard", "Amex", "Apple Pay", "Google Pay"];
const POLICIES = [
  { label: "Privacy policy",  href: "#" },
  { label: "Refund policy",   href: "#" },
  { label: "Shipping policy", href: "#" },
  { label: "Contact info",    href: "#" },
];

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "28px 28px 32px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
          <div>
            <p style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: 5 }}>Country / Region</p>
            <button style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "rgba(255,255,255,0.45)", fontFamily: "inherit" }}>
              Malaysia | RM
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none"><path d="M1 1l3.5 3L8 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {PAYMENTS.map((p) => (
              <span key={p} style={{ fontSize: 8, letterSpacing: "0.08em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, padding: "2px 7px", color: "rgba(255,255,255,0.2)" }}>{p}</span>
            ))}
          </div>
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.05)", marginBottom: 18 }} />
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <p style={{ fontSize: 10, color: "rgba(255,255,255,0.18)" }}>
            © 2026 <Link href="/" style={{ color: "rgba(255,255,255,0.35)" }}>RSANC DEADZ</Link>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px" }}>
            {POLICIES.map((p) => (
              <a key={p.label} href={p.href} style={{ fontSize: 10, color: "rgba(255,255,255,0.28)" }}>{p.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
