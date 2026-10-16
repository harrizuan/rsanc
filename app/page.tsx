import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Newsletter, Footer } from "./components/layout-parts";

export const metadata: Metadata = { title: "RSANC DEADZ" };

const PRODUCTS = [
  {
    handle: "r-sanc-trucker-cap-ss1-black",
    title: "R Sanc Trucker Cap SS1",
    subtitle: "Black",
    price: "RM 120",
    images: ["/images/cap-front.png", "/images/cap-angle.png"],
  },
  {
    handle: "r-sanc-trucker-cap-ss1-white",
    title: "R Sanc Trucker Cap SS1",
    subtitle: "White",
    price: "RM 120",
    images: ["/images/cap-white-front.png", "/images/cap-white-angle.png"],
  },
  {
    handle: "r-sanc-tshirt-ss1-black",
    title: "R Sanc T-Shirt SS1",
    subtitle: "Black",
    price: "RM 120",
    images: ["/images/tshirt-black-made.png", "/images/tshirt-black-deadz.png"],
  },
  {
    handle: "r-sanc-tshirt-ss1-white",
    title: "R Sanc T-Shirt SS1",
    subtitle: "White",
    price: "RM 120",
    images: ["/images/tshirt-white-made.png", "/images/tshirt-white-deadz.png"],
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000", color: "#fff" }}>
      <Header active="home" />

      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(24px, 5vw, 48px) clamp(14px, 4vw, 24px) 72px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(12px, 4vw, 56px)",
            width: "100%",
            maxWidth: 880,
          }}
        >
          {PRODUCTS.map((p) => (
            <ProductCard key={p.handle} {...p} />
          ))}
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

function ProductCard({ handle, title, subtitle, price, images }: {
  handle: string; title: string; subtitle: string; price: string; images: string[];
}) {
  return (
    <Link
      href={`/products/${handle}`}
      className="product-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        textDecoration: "none",
        color: "inherit",
        width: "100%",
      }}
    >
      {/* Image container */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>
        <Image
          src={images[0]}
          alt={title}
          fill
          priority
          unoptimized
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 400px"
          className="product-img-main object-contain"
        />
        {images[1] && (
          <Image
            src={images[1]}
            alt={`${title} — alternate`}
            fill
            unoptimized
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 400px"
            className="product-img-alt object-contain"
          />
        )}
      </div>

      {/* Product text — center aligned */}
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", marginBottom: 6 }}>
          {title} — {subtitle}
        </p>
        <p style={{ fontSize: 13, letterSpacing: "0.08em", color: "rgba(255,255,255,0.5)" }}>
          {price}
        </p>
      </div>
    </Link>
  );
}
