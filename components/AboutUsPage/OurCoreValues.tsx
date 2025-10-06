"use client"

import Image from "next/image"

export default function OurCoreValues() {
  return (
    <section
      className="relative py-[120px] flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Why%20choose%20us%20section%20BG%20image-UbBaGBorM1h9CLHbrUu0R3CVdn6utH.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 style={{ color: "#FFFFFF" }} className="mb-4">
            Our Core Values
          </h2>
          <p style={{ color: "#FFFFFF" }} className="text-lg">
            The fundamental principles that shape our business practices and relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/sustainability-logo.svg"
                alt="Sustainability Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Sustainability
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              We are committed to sustainable farming practices that protect the environment and ensure long-term
              viability.
            </p>
          </div>

          <div className="text-center group">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/global-reach-logo.svg"
                alt="Global Reach Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Global Reach
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              Our network spans across continents, ensuring your products reach the farthest corners of the world.
            </p>
          </div>

          <div className="text-center group">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/partnerships-logo.svg"
                alt="Partnerships Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Partnerships
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              We build strong, lasting partnerships with our clients and suppliers.
            </p>
          </div>

          <div className="text-center group">
            <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/excellence-logo.svg"
                alt="Excellence Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Excellence
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              We strive for excellence in every aspect of our operations, from sourcing to delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
