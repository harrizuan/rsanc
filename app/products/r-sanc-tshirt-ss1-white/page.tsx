"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header, Newsletter, Footer } from "../../components/layout-parts";

const PRODUCT = {
  title: "R Sanc T-Shirt SS1",
  subtitle: "White",
  price: "RM 120",
  sizes: ["S", "M", "L", "XL"],
  description: `Drop SS1. Oversized tee with graphic print on back. White colourway.\n\nHeavyweight cotton. Dropped shoulders. One size fits most.`,
  images: [
    { src: "/images/tshirt-white-made.png",  alt: "Made In RSANC graphic" },
    { src: "/images/tshirt-white-deadz.png", alt: "DEADZ graphic" },
  ],
};

const WA_NUMBER = "60109513908";

export default function ProductPage() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const waText = encodeURIComponent(
    `Hey bro I want this RSANC white tshirt ss1 rm120 size ${selectedSize}`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000", color: "#fff" }}>
      <Header active="t-shirts" />

      <main style={{ flex: 1, maxWidth: 1240, margin: "0 auto", width: "100%", padding: "28px 28px 80px" }}>

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 32 }}
        >
          <Link href="/" style={{ color: "inherit" }}>Home</Link>
          <span>/</span>
          <Link href="/t-shirts" style={{ color: "inherit" }}>T-Shirts</Link>
          <span>/</span>
          <span style={{ color: "rgba(255,255,255,0.55)" }}>{PRODUCT.title}</span>
        </nav>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, alignItems: "flex-start" }}>

          {/* Gallery */}
          <div style={{ flex: "1 1 340px", minWidth: 0 }}>
            {/* Thumb strip */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, overflowX: "auto", paddingBottom: 2 }}>
              {PRODUCT.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  style={{
                    flexShrink: 0, width: 58, height: 58,
                    border: selectedImg === i ? "1px solid rgba(255,255,255,0.65)" : "1px solid rgba(255,255,255,0.1)",
                    overflow: "hidden", padding: 5, transition: "border-color 0.2s",
                    background: "transparent", cursor: "pointer",
                  }}
                  aria-label={img.alt}
                >
                  <div style={{ position: "relative", width: "100%", height: "100%" }}>
                    <Image src={img.src} alt={img.alt} fill unoptimized sizes="58px" className="object-contain" />
                  </div>
                </button>
              ))}
            </div>
            {/* Main image */}
            <div style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}>
              <Image
                src={PRODUCT.images[selectedImg].src}
                alt={PRODUCT.images[selectedImg].alt}
                fill unoptimized
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-contain"
                style={{ padding: "clamp(24px, 6%, 52px)" }}
              />
            </div>
          </div>

          {/* Product info */}
          <div style={{ flex: "0 1 400px", minWidth: 280, position: "sticky", top: 90, alignSelf: "flex-start" }}>
            <h1 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 300, letterSpacing: "0.01em", lineHeight: 1.25, marginBottom: 4 }}>
              {PRODUCT.title}
            </h1>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", marginBottom: 18, letterSpacing: "0.02em" }}>{PRODUCT.subtitle}</p>
            <p style={{ fontSize: 18, letterSpacing: "0.03em", fontWeight: 400, marginBottom: 30 }}>{PRODUCT.price}</p>

            {/* Size */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>Size</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {PRODUCT.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    style={{
                      padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
                      fontFamily: "inherit", cursor: "pointer",
                      border: selectedSize === s ? "1px solid rgba(255,255,255,0.65)" : "1px solid rgba(255,255,255,0.14)",
                      background: selectedSize === s ? "rgba(255,255,255,0.05)" : "transparent",
                      color: selectedSize === s ? "#fff" : "rgba(255,255,255,0.5)",
                      transition: "all 0.15s",
                    }}
                  >{s}</button>
                ))}
              </div>
            </div>

            {/* I WANT THIS */}
            <div style={{ marginBottom: 28 }}>
              <a
                href={waLink} target="_blank" rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "100%", height: 54, background: "#fff", color: "#000",
                  fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase",
                  fontWeight: 700, fontFamily: "inherit", textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#e5e5e5"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#fff"; }}
              >
                I WANT THIS
              </a>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 22 }} />
            <div style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.5)", letterSpacing: "0.02em" }}>
              {PRODUCT.description.split("\n\n").map((para, i) => (
                <p key={i} style={{ marginBottom: 12 }}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom image strip */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "clamp(8px, 2vw, 16px)", marginTop: "clamp(40px, 8vw, 72px)" }}>
          {PRODUCT.images.map((img, i) => (
            <div
              key={i}
              onClick={() => { setSelectedImg(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", cursor: "pointer" }}
            >
              <Image src={img.src} alt={img.alt} fill unoptimized sizes="(max-width: 640px) 50vw, 600px" className="object-contain" style={{ padding: "clamp(10px, 4%, 32px)" }} />
            </div>
          ))}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
