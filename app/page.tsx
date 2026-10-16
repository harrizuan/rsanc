import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Newsletter, Footer } from "./components/layout-parts";

export const metadata: Metadata = { title: "RSANC DEADZ" };

const FEATURED = {
  handle: "r-sanc-trucker-cap-ss1-black",
  title: "R Sanc Trucker Cap SS1",
  subtitle: "Black",
  price: "MYR RM 120.00",
  images: ["/images/cap-front.png", "/images/cap-angle.png"],
};

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000", color: "#fff" }}>
      <Header active="home" />
      <main style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "48px 24px 72px" }}>
        <FeaturedProduct {...FEATURED} />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
}

function FeaturedProduct({ handle, title, subtitle, price, images }: {
  handle: string; title: string; subtitle: string; price: string; images: string[];
}) {
  return (
    /* .product-card triggers CSS hover → swaps .product-img-main ↔ .product-img-alt */
    <Link
      href={`/products/${handle}`}
      className="product-card"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        textDecoration: "none",
        color: "inherit",
        width: "100%",
        maxWidth: 560,
      }}
    >
      {/* Image container — no background box, images float on black */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "1/1" }}>

        {/* Default (front) — visible */}
        <Image
          src={images[0]}
          alt={title}
          fill
          priority
          unoptimized
          sizes="(max-width: 640px) 92vw, 560px"
          className="product-img-main object-contain"
        />

        {/* Hover (angle) — hidden by default, shown by CSS on .product-card:hover */}
        {images[1] && (
          <Image
            src={images[1]}
            alt={`${title} — alternate`}
            fill
            unoptimized
            sizes="(max-width: 640px) 92vw, 560px"
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
