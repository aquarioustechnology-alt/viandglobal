import type { Metadata } from "next"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/homepage/HeroSection"
import IntroSection from "@/components/homepage/IntroSection"
import OurProducts from "@/components/homepage/OurProducts"
import WhyChooseUs from "@/components/homepage/WhyChooseUs"
import GlobalReach from "@/components/homepage/GlobalReach"
import WhatOurClientsSay from "@/components/homepage/WhatOurClientsSay"
import GetInTouch from "@/components/homepage/GetInTouch"

export const metadata: Metadata = {
  title: "Viand Global - Premium Agricultural Exports from India | Foxnut, Wheat Bran, Corn",
  description:
    "Leading exporters of premium agricultural products from India. Specializing in Foxnut (Makhana), Wheat Bran, and Corn exports to USA, UAE, Germany, Italy, Netherlands, Singapore, Japan, and South Korea.",
  keywords: [
    "agricultural exports India",
    "foxnut makhana export",
    "wheat bran export",
    "corn maize export",
    "premium agricultural products",
    "global food trade",
    "Indian agricultural commodities",
  ],
  openGraph: {
    title: "Viand Global - Premium Agricultural Exports from India",
    description: "Leading exporters of premium agricultural products from India to the world.",
    url: "https://viandglobal.com",
    images: [
      {
        url: "/images/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Viand Global Agricultural Exports",
      },
    ],
  },
  alternates: {
    canonical: "https://viandglobal.com",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Viand Global - Premium Agricultural Exports",
            description: "Leading exporters of premium agricultural products from India to the world.",
            url: "https://viandglobal.com",
            mainEntity: {
              "@type": "Organization",
              name: "Viand Global",
              description: "Premium agricultural exports from India",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Agricultural Products",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Foxnut (Makhana)",
                      description: "Premium quality foxnuts sourced from Bihar",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Wheat Bran",
                      description: "High-fiber wheat bran for livestock feed and health foods",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Corn (Maize)",
                      description: "Non-GMO Grade-A yellow maize for food and feed applications",
                    },
                  },
                ],
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <IntroSection />
        <OurProducts />
        <WhyChooseUs />
        <GlobalReach />
        <WhatOurClientsSay />
        <GetInTouch />
        <Footer />
      </div>
    </>
  )
}
