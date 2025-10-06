"use client"

import type React from "react"

import { useState, useRef } from "react"

export default function IntroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayClick = async () => {
    if (videoRef.current) {
      try {
        setIsVideoPlaying(true)
        await videoRef.current.play()
      } catch (error) {
        console.log("Video play interrupted:", error)
        setIsVideoPlaying(false)
      }
    }
  }

  const handleCloseVideo = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsVideoPlaying(false)
      } catch (error) {
        console.log("Video pause error:", error)
      }
    }
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#F3F3F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 xl:text-5xl">
              Leading Agricultural Exports from India
            </h2>
            <p className="text-base sm:text-lg mb-6 text-black leading-relaxed">
              Viand Global has been at the forefront of agricultural exports from India for over a decade. We specialize
              in sourcing and exporting premium quality Foxnut, Wheat Bran, and Corn to markets worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C8102E] mb-2">50+</h3>
                <div className="text-sm sm:text-base font-semibold text-gray-600">Countries Served</div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C8102E] mb-2">10,000+</h3>
                <div className="text-sm sm:text-base font-semibold text-gray-600">Tons Exported</div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C8102E] mb-2">99%</h3>
                <div className="text-sm sm:text-base font-semibold text-gray-600">Quality Assurance</div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#C8102E] mb-2">24/7</h3>
                <div className="text-sm sm:text-base font-semibold text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full aspect-[1920/1090] rounded-[20px] overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster="/images/video-cover.png"
                preload="metadata"
                controls={isVideoPlaying}
              >
                <source src="/videos/viyand-global-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play button overlay - only show when video is not playing */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button
                    onClick={handlePlayClick}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 group"
                    aria-label="Play video"
                  >
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-[#D50D0D] ml-1 group-hover:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
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
