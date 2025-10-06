"use client"

import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/AboutUsPage/HeroSection"
import AboutUs from "@/components/AboutUsPage/AboutUs"
import OurMissionVision from "@/components/AboutUsPage/OurMissionVision"
import OurCoreValues from "@/components/AboutUsPage/OurCoreValues"
import OurLeadership from "@/components/AboutUsPage/OurLeadership"

export default function AboutPageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Viand Global",
            description: "Learn about Viand Global, a trusted name in agricultural exports from India.",
            url: "https://viandglobal.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "Viand Global",
              foundingDate: "2020",
              description: "Leading agricultural exporters from India specializing in premium quality products.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "E-51 Chandra courtyard, Chandra vihar colony",
                addressLocality: "Dhanbad",
                addressRegion: "Jharkhand",
                addressCountry: "India",
              },
            },
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Navigation Spacer */}
        <div className="h-16 sm:h-20 lg:h-24"></div>

        <HeroSection />
        <AboutUs />
        <OurMissionVision />
        <OurCoreValues />
        <OurLeadership />

        <Footer />
      </div>
    </>
  )
}
