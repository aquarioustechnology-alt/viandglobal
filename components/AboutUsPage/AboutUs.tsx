"use client"

import { useState, useRef } from "react"
import Image from "next/image"

export default function AboutUs() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleVideoClick = async () => {
    if (videoRef.current) {
      try {
        if (isVideoPlaying) {
          videoRef.current.pause()
          setIsVideoPlaying(false)
        } else {
          setIsVideoPlaying(true)
          await videoRef.current.play()
        }
      } catch (error) {
        console.log("Video operation interrupted:", error)
        setIsVideoPlaying(false)
      }
    }
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Exporting India's
              <br />
              Agricultural Excellence
            </h2>

            <div className="space-y-4 body-small leading-relaxed">
              <p>At Viand Global, we take pride in delivering the richness of Indian agriculture to the world.</p>

              <p>
                Headquartered in India, we specialize in the global export of{" "}
                <span className="text-[#D50D0D] font-semibold">Foxnut (Makhana), Wheat Bran, and Corn</span>, grown in
                nutrient-rich soils and processed under strict quality standards. Our mission is simple — to connect
                international markets with{" "}
                <span className="text-[#D50D0D] font-semibold">high quality agro products</span> backed by trust,
                transparency, and timely delivery.
              </p>

              <p>
                With a growing footprint across the{" "}
                <span className="text-[#D50D0D] font-semibold">
                  Middle East, Southeast Asia, Europe, and North America
                </span>
                , Viand Global is committed to nurturing long-term partnerships, empowering Indian farmers, and
                upholding the values of excellence in global trade.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <div className="h3 text-[#D50D0D] mb-2">50+</div>
                <div className="text-gray-700 font-medium">Countries Served</div>
              </div>
              <div>
                <div className="h3 text-[#D50D0D] mb-2">10+</div>
                <div className="text-gray-700 font-medium">Years of Experience</div>
              </div>
              <div>
                <div className="h3 text-[#D50D0D] mb-2">10k+</div>
                <div className="text-gray-700 font-medium">Tons Exported</div>
              </div>
              <div>
                <div className="h3 text-[#D50D0D] mb-2">24/7</div>
                <div className="text-gray-700 font-medium">Customer Support</div>
              </div>
            </div>

            {/* Since 2013 Badge */}
            <div className="inline-block"></div>
          </div>

          {/* Right Content - Video */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl">
              <div className="relative aspect-square cursor-pointer" onClick={handleVideoClick}>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls={isVideoPlaying}
                  poster="/images/about-us-video-cover.png"
                  preload="metadata"
                  onClick={handleVideoClick}
                >
                  <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-06-26%20at%2011.20.29_2e20cffe-UD2qeDHistV4GNC4WADhwI1cnsSb7F.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Gradient overlay for better play button visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Play button */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={handleVideoClick}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group"
                    aria-label="Play video"
                  >
                    <Image
                      src="/icons/video-play-button.svg"
                      alt="Play"
                      width={32}
                      height={32}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
