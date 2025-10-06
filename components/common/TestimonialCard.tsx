"use client"

import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  company: string
  text: string
  rating: number
}

// Add custom styles for slide animation
const slideStyles = {
  animation: "slideInRight 0.7s ease-in-out",
}

export default function TestimonialCard({ name, company, text, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-0">
      <div
        className="bg-white rounded-lg p-8 text-center transform transition-all duration-700 ease-in-out"
        style={slideStyles}
      >
        <div className="flex justify-center mb-4 gap-[5px]">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-[rgba(213,13,13,1)]" />
          ))}
        </div>
        <blockquote className="mb-6 italic" style={{ fontSize: "18px", lineHeight: "140%", color: "#4B5563" }}>
          "{text}"
        </blockquote>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-[#C8102E] text-[rgba(213,13,13,1)]">{company}</div>
        </div>
      </div>
    </div>
  )
}
