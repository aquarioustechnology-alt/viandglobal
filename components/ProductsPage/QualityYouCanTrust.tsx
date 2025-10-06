import Image from "next/image"

export default function QualityYouCanTrust() {
  const certifications = [
    
    {
      name: "FSSAI Licensed",
      logo: "/icons/fssai-logo.svg",
      description: "FSSAI Licensed",
    },
    {
      name: "APEDA Registered",
      logo: "/icons/apeda-logo.svg",
      description: "APEDA Registered",
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-3.5">
            Quality You Can Trust
          </h2>
          <p className="body-small text-black max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            All our products undergo rigorous quality testing and are certified by leading international standards
            organizations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 md:gap-x-12 lg:gap-x-[50px] gap-y-6 sm:gap-y-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[120px] sm:w-[130px] md:w-[140px] lg:w-[145px] text-center"
            >
              <div className="w-full h-[80px] sm:h-[90px] md:h-[95px] lg:h-[100px] flex items-center justify-center mb-2 sm:mb-3">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.name}
                  width={145}
                  height={132}
                  className="object-contain w-full h-full"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-900">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
