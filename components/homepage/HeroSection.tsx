"use client"

import { CustomButton } from "@/components/ui/custom-button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-auto min-h-screen xl:h-[830px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-banner.jpg"
          alt="Premium foxnuts, wheat grains, and corn - Viand Global's agricultural exports"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-[#1D0101]/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen py-16 xl:py-0">
        <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold mb-[30px] leading-tight">
          Pure Harvest. Global Reach.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-[30px] text-white/90 max-w-3xl">
          Trusted Indian exporters of premium Foxnut, Wheat Bran & Corn
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <CustomButton variant="primary">Get a free call</CustomButton>
          </Link>
          <Link href="/products">
            <CustomButton variant="secondary">Product Catalogue</CustomButton>
          </Link>
        </div>
      </div>
    </section>
  )
}
