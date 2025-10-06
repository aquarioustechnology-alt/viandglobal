"use client"

import { useState, useEffect } from "react"
import TestimonialCard from "@/components/common/TestimonialCard"
import Image from "next/image"

export default function WhatOurClientsSay() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [autoPlayKey, setAutoPlayKey] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      name: "Ahmed Al-Rashid",
      company: "Gulf Trading LLC, UAE",
      text: "Viand Global has been our trusted partner for foxnut imports. Their quality consistency and timely delivery have helped us grow our business significantly.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      company: "American Grain Corp, USA",
      text: "Excellent wheat bran quality and competitive pricing. Their export documentation is always perfect, making customs clearance smooth.",
      rating: 5,
    },
    {
      name: "Marco Rossi",
      company: "European Feed Solutions, Italy",
      text: "Professional service and premium corn quality. Viand Global understands international standards and delivers accordingly.",
      rating: 5,
    },
  ]

  // Auto-play functionality with dissolve effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        setIsTransitioning(false)
      }, 300) // Half of transition duration for smooth dissolve
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [testimonials.length, autoPlayKey])

  const changeTestimonial = (newIndex: number) => {
    if (newIndex !== currentTestimonial) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentTestimonial(newIndex)
        setIsTransitioning(false)
      }, 300)
      setAutoPlayKey((prev) => prev + 1) // Reset auto-play timer
    }
  }

  const nextTestimonial = () => {
    const nextIndex = (currentTestimonial + 1) % testimonials.length
    changeTestimonial(nextIndex)
  }

  const prevTestimonial = () => {
    const prevIndex = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    changeTestimonial(prevIndex)
  }

  return (
    <section
      className="bg-gray-50 relative overflow-hidden py-30 md:py-0"
      style={{
        height: "572px",
        backgroundImage:
          "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/What%20our%20clients%20say%20background-jZdVbm4XW0gGUXOHmuXl5YL1UGdYri.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center mb-8">
          <h2 className="mb-4 text-white text-5xl">What Our Clients Say</h2>
          <p className="body-small text-white">Trusted by businesses worldwide for quality and reliability.</p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-white rounded-lg">
          <div
            className={`transition-opacity duration-600 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          >
            <TestimonialCard {...testimonials[currentTestimonial]} />
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 hover:opacity-80 transition-opacity duration-200"
            onClick={prevTestimonial}
          >
            <Image src="/icons/carousel-left-icon.svg" alt="Previous testimonial" width={40} height={40} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 hover:opacity-80 transition-opacity duration-200"
            onClick={nextTestimonial}
          >
            <Image src="/icons/carousel-right-icon.svg" alt="Next testimonial" width={40} height={40} />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentTestimonial ? "bg-[#C8102E]" : "bg-gray-300"
              }`}
              onClick={() => changeTestimonial(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
