"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[366px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image src="/images/about-us-hero-bg.png" alt="About Us Hero Background" fill className="object-cover" priority />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Let’s Connect
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">We're here to help you with product inquiries, bulk orders, and partnerships.</p>
      </div>
    </section>
  )
}
