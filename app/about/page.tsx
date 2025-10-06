import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Viand Global - Leading Agricultural Exporters from India",
  description:
    "Learn about Viand Global, a trusted name in agricultural exports from India. Discover our mission, vision, core values, and leadership team committed to delivering premium agricultural products worldwide.",
  keywords: [
    "about Viand Global",
    "agricultural exporters India",
    "company history",
    "mission vision",
    "agricultural export company",
    "Indian food exporters",
  ],
  openGraph: {
    title: "About Viand Global - Leading Agricultural Exporters",
    description: "Learn about Viand Global, a trusted name in agricultural exports from India.",
    url: "https://viandglobal.com/about",
    images: [
      {
        url: "/images/about-us-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "About Viand Global",
      },
    ],
  },
  alternates: {
    canonical: "https://viandglobal.com/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
