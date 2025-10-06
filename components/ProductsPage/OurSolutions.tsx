import Image from "next/image"

export default function OurSolutions() {
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
        <div className="text-center mb-12 sm:mb-16">
          <h2
            style={{ color: "#FFFFFF" }}
            className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
          >
            Bulk Ordering &amp; Private Label Solutions
          </h2>
          <p style={{ color: "#FFFFFF" }} className="text-base sm:text-lg max-w-4xl mx-auto px-4 sm:px-0">
            Tailored solutions for importers, distributors, and retailers looking for large-volume orders and custom
            branding options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center group">
            <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/custom-packaging.svg"
                alt="Custom Packaging Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2 text-base sm:text-lg font-semibold">
              Custom Packaging
            </h6>
            <p className="body-small font-light text-sm sm:text-base" style={{ color: "#FFFFFF" }}>
              Flexible packaging solutions tailored to your market requirements and branding needs.
            </p>
          </div>

          <div className="text-center group">
            <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/private-label.svg"
                alt="Private Label Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2 text-base sm:text-lg font-semibold">
              Private Label
            </h6>
            <p className="body-small font-light text-sm sm:text-base" style={{ color: "#FFFFFF" }}>
              White-label and private branding options available for distributors and retailers.
            </p>
          </div>

          <div className="text-center group">
            <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/global-logistics.svg"
                alt="Global Logistics Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2 text-base sm:text-lg font-semibold">
              Global Logistics
            </h6>
            <p className="body-small font-light text-sm sm:text-base" style={{ color: "#FFFFFF" }}>
              End-to-end logistics support with reliable shipping partners worldwide.
            </p>
          </div>

          <div className="text-center group">
            <div className="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/icons/dedicated-support.svg"
                alt="Dedicated Support Icon"
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
            <h6 style={{ color: "#FFFFFF" }} className="mb-2 text-base sm:text-lg font-semibold">
              Dedicated Support
            </h6>
            <p className="body-small font-light text-sm sm:text-base" style={{ color: "#FFFFFF" }}>
              Dedicated export team to handle your bulk orders and special requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
