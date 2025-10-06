import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-[366px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image src="/images/blog-hero-bg.png" alt="Blog Hero Background" fill className="object-cover" priority />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          Insights &amp; Updates
        </h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
          Insights, trends, and expertise from the world of agricultural exports
        </p>
      </div>
    </section>
  )
}
