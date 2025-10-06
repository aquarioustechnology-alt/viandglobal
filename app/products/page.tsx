import type { Metadata } from "next"
import ProductsPageClient from "./ProductsPageClient"

export const metadata: Metadata = {
  title: "Premium Agricultural Products Export | Foxnut, Wheat Bran, Corn - Viand Global",
  description:
    "Explore Viand Global's premium agricultural products for export: Foxnut (Makhana), Wheat Bran, and Corn (Maize). Quality assured, globally certified, and competitively priced for international markets.",
  keywords: [
    "foxnut export",
    "makhana export",
    "wheat bran export",
    "corn export",
    "maize export",
    "agricultural products",
    "premium quality",
    "bulk export",
    "international shipping",
  ],
  openGraph: {
    title: "Premium Agricultural Products Export - Viand Global",
    description: "Explore our premium agricultural products: Foxnut, Wheat Bran, and Corn for global export.",
    url: "https://viandglobal.com/products",
    images: [
      {
        url: "/images/products-hero-new.png",
        width: 1200,
        height: 630,
        alt: "Viand Global Agricultural Products",
      },
    ],
  },
  alternates: {
    canonical: "https://viandglobal.com/products",
  },
}

export default function ProductsPage() {
  return <ProductsPageClient />
}
