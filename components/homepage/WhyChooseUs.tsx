"use client"

import { Globe, Shield, DollarSign, FlaskConical } from "lucide-react"

export default function WhyChooseUs() {
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
          <h2 style={{ color: "#FFFFFF" }} className="mb-4 text-5xl">
            Why Choose Viand Global?
          </h2>
          <p style={{ color: "#FFFFFF" }} className="text-lg">
            We deliver excellence through our commitment to quality, reliability, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-[#C8102E] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8" />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Global Shipping
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              Worldwide delivery with reliable logistics partners and tracking systems.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-[#C8102E] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="w-8 h-8" />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Certified Quality
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              ISO certified processes ensuring consistent quality and food safety standards.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-[#C8102E] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <DollarSign className="w-8 h-8" />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Competitive Pricing
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              Best market rates with transparent pricing and no hidden costs.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-[#C8102E] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <FlaskConical className="w-8 h-8" />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2">
              Lab Tested
            </h6>
            <p className="body-small font-light" style={{ color: "#FFFFFF" }}>
              Every batch undergoes rigorous testing for quality, purity, and safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
