import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative py-16 h-[366px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/privacy-policy-hero-bg.png"
        alt="Terms & Conditions Background"
        fill
        className="object-cover"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-2xl text-white">Clear terms for a transparent business relationship</p>
        </div>
      </div>
    </section>
  )
}
