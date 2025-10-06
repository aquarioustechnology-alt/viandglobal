"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, User, Calendar, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="pt-32 pb-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="inline-flex items-center text-[#D50D0D] hover:text-[#A00E26] mb-6 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Title and Meta */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Demand For Indian Makhana (Foxnuts) In The Global Market
            </h2>

            <div className="flex items-center text-sm text-gray-600 space-x-4">
              <span className="flex items-center">
                <User className="w-4 h-4 text-[#D50D0D] mr-2" />
                Rajesh Kumar
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 text-[#D50D0D] mr-2" />
                December 15, 2024
              </span>
              <span className="text-[#D50D0D] font-medium">5 min read</span>
            </div>
          </div>

          <div className="mt-4 lg:mt-0">
            <Button className="bg-[#D50D0D] hover:bg-[#A00E26] text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden mb-8" style={{ borderRadius: "10px" }}>
          <Image
            src="/images/blog/foxnut-shipping-container.png"
            alt="Indian Foxnut Global Demand"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
