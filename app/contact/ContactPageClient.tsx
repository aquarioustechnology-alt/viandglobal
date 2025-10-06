"use client"

import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/ContactUsPage/HeroSection"
import ContactForm from "@/components/ContactUsPage/ContactForm"
import MapSection from "@/components/ContactUsPage/MapSection"
import GlobalReach from "@/components/ContactUsPage/GlobalReach"

export default function ContactPageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Viand Global",
            description: "Get in touch with Viand Global for agricultural export inquiries",
            url: "https://viandglobal.com/contact",
            mainEntity: {
              "@type": "LocalBusiness",
              name: "Viand Global",
              address: {
                "@type": "PostalAddress",
                streetAddress: "E-51 Chandra courtyard, Chandra vihar colony",
                addressLocality: "Dhanbad",
                addressRegion: "Jharkhand",
                addressCountry: "India",
              },
              telephone: ["+91-817-790-9441", "+91-727-651-5586"],
              email: "info@viandglobal.com",
              url: "https://viandglobal.com",
              openingHours: "Mo-Sa 09:00-18:00",
              areaServed: [
                "United States",
                "United Arab Emirates",
                "Germany",
                "Italy",
                "Netherlands",
                "Singapore",
                "Japan",
                "South Korea",
              ],
            },
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Navigation Spacer */}
        <div className="h-14 sm:h-16 md:h-18 lg:h-20 xl:h-24"></div>

        {/* Hero Section */}
        <HeroSection />

        {/* Contact Form Section */}
        <ContactForm />

        {/* Map Section */}
        <MapSection />

        {/* Global Reach Section */}
        <GlobalReach />

        <Footer />
      </div>
    </>
  )
}
