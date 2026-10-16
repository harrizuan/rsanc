import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Newsletter, Footer } from "../components/layout-parts";

export const metadata: Metadata = { title: "Headwear" };

const PRODUCTS = [
  {
    handle: "r-sanc-trucker-cap-ss1-black",
    title: "R Sanc Trucker Cap SS1",
    subtitle: "Black",
    price: "MYR RM 120.00",
    images: ["/images/cap-front.png", "/images/cap-angle.png"],
  },
  {
    handle: "r-sanc-trucker-cap-ss1-white",
    title: "R Sanc Trucker Cap SS1",
    subtitle: "White",
    price: "MYR RM 120.00",
    images: ["/images/cap-white-front.png", "/images/cap-white-angle.png"],
  },
];

export default function HeadwearPage() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "#000", color: "#fff" }}>
      <Header active="headwear" />

      <main style={{ flex: 1, maxWidth: 1240, margin: "0 auto", width: "100%", padding: "40px 28px 80px" }}>

        <h1 style={{ fontSize: "clamp(26px, 5vw, 50px)", fontWeight: 300, letterSpacing: "-0.01em", lineHeight: 1, marginBottom: 28 }}>
          HEADWEAR
        </h1>

        {/* Product grid */}
        <ul style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))", columnGap: 20, rowGap: 44, listStyle: "none", padding: 0, margin: 0 }}>
          {PRODUCTS.map((p) => (
            <li key={p.handle}>
              <ProductCard {...p} />
            </li>
          ))}
        </ul>
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
    <Link href={`/products/${handle}`} style={{ display: "block", textDecoration: "none", color: "inherit" }} className="product-card">
      {/* Image — no background box */}
      <div style={{ position: "relative", aspectRatio: "1/1" }}>
        <Image
          src={images[0]}
          alt={title}
          fill
          priority
          unoptimized
          sizes="(max-width: 480px) calc(50vw - 24px), (max-width: 1024px) calc(33vw - 24px), 280px"
          className="product-img-main object-contain"
        />
        {images[1] && (
          <Image
            src={images[1]}
            alt={`${title} — alternate`}
            fill
            unoptimized
            sizes="(max-width: 480px) calc(50vw - 24px), (max-width: 1024px) calc(33vw - 24px), 280px"
            className="product-img-alt object-contain"
          />
        )}
      </div>

      {/* Info */}
      <div style={{ marginTop: 14 }}>
        <p style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)", lineHeight: 1.4 }}>
          {title}
        </p>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", marginTop: 2, letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {subtitle}
        </p>
        <p style={{ fontSize: 13, letterSpacing: "0.03em", marginTop: 8, color: "rgba(255,255,255,0.8)" }}>
          {price}
        </p>
      </div>
    </Link>
  );
}
