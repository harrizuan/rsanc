"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Newsletter, Footer } from "../../components/layout-parts";

const PRODUCT = {
  title: "R Sanc Trucker Cap SS1",
  subtitle: "Black",
  price: "RM 120",
  sizes: ["One Size"],
  description: `Drop SS1. Trucker silhouette with structured front panel, breathable mesh back, and snapback closure. Black colourway.\n\nOne size fits most. Adjustable snapback closure.`,
  images: [
    { src: "/images/cap-front.png",  alt: "Front view" },
    { src: "/images/cap-side.png",   alt: "Side view" },
    { src: "/images/cap-angle.png",  alt: "Angle view" },
  ],
};

/* ─── WhatsApp link ─── */
const WA_NUMBER = "60109513908"; // +60 10-951 3908

export default function ProductPage() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize] = useState("One Size");

  const waText = encodeURIComponent(
    `Hey bro I want this RSANC black trucker cap rm120`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000", color: "#fff" }}>
      <Header active="headwear" />

      <main style={{ flex: 1, maxWidth: 1240, margin: "0 auto", width: "100%", padding: "28px 28px 80px" }}>

        {/* ── Breadcrumb ── */}
        <nav
          aria-label="Breadcrumb"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 32 }}
        >
          <Link href="/" style={{ color: "inherit" }} className="hover:opacity-70 transition-opacity">Home</Link>
          <span>/</span>
          <Link href="/headwear" style={{ color: "inherit" }} className="hover:opacity-70 transition-opacity">Headwear</Link>
          <span>/</span>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{PRODUCT.title}</span>
        </nav>

        {/* ── Product layout: stacked mobile → side-by-side desktop ── */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>

          {/* ──────────── Left: Gallery ──────────── */}
          <div style={{ flex: "1 1 340px", minWidth: 0 }}>

            {/* Mobile: horizontal thumb strip */}
            <div
              style={{ display: "flex", gap: 8, marginBottom: 12, overflowX: "auto", paddingBottom: 2 }}
              className="lg:hidden"
            >
              {PRODUCT.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  style={{
                    flexShrink: 0,
                    width: 58, height: 58,
                    
                    border: selectedImg === i ? "1px solid rgba(255,255,255,0.65)" : "1px solid rgba(255,255,255,0.1)",
                    
                    overflow: "hidden",
                    padding: 5,
                    transition: "border-color 0.2s",
                  }}
                  aria-label={img.alt}
                >
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src={img.src} alt={img.alt} fill unoptimized sizes="58px" className="object-contain" />
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop: thumbs column + main image */}
            <div style={{ display: "flex", gap: 14 }}>

              {/* Thumbnails (hidden on mobile) */}
              <div
                style={{ display: "flex", flexDirection: "column", gap: 8, width: 76, flexShrink: 0 }}
                className="hidden lg:flex"
              >
                {PRODUCT.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImg(i)}
                    style={{
                      width: 76, height: 76,
                      
                      border: selectedImg === i ? "1px solid rgba(255,255,255,0.65)" : "1px solid rgba(255,255,255,0.08)",
                       overflow: "hidden", padding: 6,
                      transition: "border-color 0.2s",
                    }}
                    aria-label={img.alt}
                  >
                    <div style={{ position: "relative", width: "100%", height: "100%" }}>
                      <Image src={img.src} alt={img.alt} fill unoptimized sizes="76px" className="object-contain" />
                    </div>
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  aspectRatio: "1/1",
                  
                  
                  overflow: "hidden",
                }}
              >
                <Image
                  src={PRODUCT.images[selectedImg].src}
                  alt={PRODUCT.images[selectedImg].alt}
                  fill
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-contain"
                  style={{ padding: "clamp(24px, 6%, 52px)" }}
                />
              </div>
            </div>
          </div>

          {/* ──────────── Right: Product info ──────────── */}
          <div
            style={{
              flex: "0 1 400px",
              minWidth: 280,
              position: "sticky",
              top: 90,
              alignSelf: "flex-start",
            }}
          >
            {/* Title */}
            <h1
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 300,
                letterSpacing: "0.01em",
                lineHeight: 1.25,
                marginBottom: 4,
              }}
            >
              {PRODUCT.title}
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 18, letterSpacing: "0.02em" }}>
              {PRODUCT.subtitle}
            </p>

            {/* Price */}
            <p style={{ fontSize: 18, letterSpacing: "0.03em", fontWeight: 400, marginBottom: 30 }}>
              {PRODUCT.price}
            </p>

            {/* Size */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>
                Size
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PRODUCT.sizes.map((s) => (
                  <button
                    key={s}
                    style={{
                      padding: "10px 20px",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontFamily: "inherit",
                      border: selectedSize === s ? "1px solid rgba(255,255,255,0.65)" : "1px solid rgba(255,255,255,0.14)",
                      background: selectedSize === s ? "rgba(255,255,255,0.05)" : "transparent",
                      
                      color: selectedSize === s ? "#fff" : "rgba(255,255,255,0.5)",
                      transition: "all 0.15s",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* I WANT THIS → WhatsApp */}
            <div style={{ marginBottom: 28 }}>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: 54,
                  background: "#fff",
                  color: "#000",
                  fontSize: 12,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "inherit",
                  textDecoration: "none",
                  transition: "background 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#e5e5e5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
                }}
              >
                I WANT THIS
              </a>
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 22 }} />

            {/* Description */}
            <div style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
              {PRODUCT.description.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: 12 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom 3-image strip ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(8px, 2vw, 16px)",
            marginTop: "clamp(40px, 8vw, 72px)",
          }}
        >
          {PRODUCT.images.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setSelectedImg(i);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              style={{
                position: "relative",
                aspectRatio: "1/1",
                
                
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 33vw, (max-width: 1280px) 30vw, 400px"
                className="object-contain"
                style={{ padding: "clamp(10px, 4%, 32px)" }}
              />
            </div>
          ))}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
