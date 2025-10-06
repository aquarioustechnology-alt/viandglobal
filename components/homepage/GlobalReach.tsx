"use client"

import Image from "next/image"

export default function GlobalReach() {
  const exportCountries = [
    { name: "United States", flag: "🇺🇸", svg: "/flags/us_flag.svg" },
    { name: "United Arab Emirates", flag: "🇦🇪", svg: "/flags/uae_flag.svg" },
    { name: "Germany", flag: "🇩🇪", svg: "/flags/germany_flag.svg" },
    { name: "Italy", flag: "🇮🇹", svg: "/flags/italy_flag.svg" },
    { name: "Netherlands", flag: "🇳🇱", svg: "/flags/netherlands_flag.svg" },
    { name: "Singapore", flag: "🇸🇬", svg: "/flags/singapore_flag.svg" },
    { name: "Japan", flag: "🇯🇵", svg: "/flags/japan_flag.svg" },
    { name: "South Korea", flag: "🇰🇷", svg: "/flags/south_korea_flag.svg" },
  ]

  return (
    <section
      className="py-[120px] relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Our%20global%20reach%20SVG-5BIY2IgtPsWzih9be8WCxCmu7fg6V6.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-[18px] text-5xl">Our Global Reach</h2>
          <p className="body-small text-black mb-[18px]">
            Serving customers across continents with our premium agricultural products.
          </p>

          {/* Add this new badge */}
          <div className="flex justify-center">
            <div
              className="body-small-bold flex items-center justify-center px-5"
              style={{
                width: "90%",
                maxWidth:"550px",
                height: "42px",
                borderRadius: "300px",
                border: "1px solid #D50D0D",
                color: "#D50D0D",
              }}
            >
              RCMC/APEDA/04447/2023-2024 - APEDA REGISTRATION NUMBER
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-5 max-w-fit">
            {exportCountries.map((country, index) => (
              <div
                key={index}
                className="w-[130px] h-[126px] bg-white rounded-[5px] flex flex-col items-center justify-center cursor-pointer group"
                style={{
                  boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.08)",
                }}
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={country.svg || "/placeholder.svg"}
                    alt={`Flag of ${country.name}`}
                    width={40}
                    height={24}
                    className="object-cover"
                    style={{
                      filter: "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))",
                    }}
                  />
                </div>
                <p className="body-extra-small text-center px-2" style={{ color: "#4B5563" }}>
                  {country.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
