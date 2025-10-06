import type { Metadata } from "next"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/BlogPage/HeroSection"
import FeaturedArticles from "@/components/BlogPage/FeaturedArticles"

export const metadata: Metadata = {
  title: "Agricultural Export Insights & News | Viand Global Blog",
  description:
    "Stay updated with the latest insights, trends, and news in agricultural exports. Expert articles on global food trade, market analysis, and industry best practices from Viand Global.",
  keywords: [
    "agricultural export blog",
    "food trade insights",
    "export market trends",
    "agricultural news",
    "global food trade",
    "export industry updates",
  ],
  openGraph: {
    title: "Agricultural Export Insights & News - Viand Global Blog",
    description: "Expert insights and latest news in agricultural exports and global food trade.",
    url: "https://viandglobal.com/blog",
    images: [
      {
        url: "/images/blog-hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Viand Global Blog",
      },
    ],
  },
  alternates: {
    canonical: "https://viandglobal.com/blog",
  },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Viand Global Blog",
            description: "Expert insights and latest news in agricultural exports",
            url: "https://viandglobal.com/blog",
            publisher: {
              "@type": "Organization",
              name: "Viand Global",
              logo: {
                "@type": "ImageObject",
                url: "https://viandglobal.com/images/logo.png",
              },
            },
            inLanguage: "en-US",
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <div className="h-16 sm:h-20 lg:h-24"></div>
        <HeroSection />
        <FeaturedArticles />
        <Footer />
      </div>
    </>
  )
}
