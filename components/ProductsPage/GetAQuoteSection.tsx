import { CustomButton } from "@/components/ui/custom-button"
import Image from "next/image"
import Link from "next/link"

export default function GetAQuoteSection() {
  const features = [
    {
      title: "Minimum Order Quantities:",
      description: "Flexible MOQs based on product and destination",
    },
    {
      title: "Custom Packaging:",
      description: "Your brand, your specifications, our quality",
    },
    {
      title: "Global Shipping:",
      description: "Container loads to 50+ countries worldwide",
    },
    {
      title: "Documentation:",
      description: "Complete export documentation and certifications",
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Ready for Large-Scale Import?
            </h2>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Image
                      src="/icons/bullet-icon.svg"
                      alt="Checkmark"
                      width={19}
                      height={20}
                      className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</span>
                    <span className="text-gray-600 ml-1 text-sm sm:text-base">{feature.description}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4">
              <Link href="/contact#contact">
                <CustomButton
                  variant="primary"
                  className="hover:bg-transparent hover:text-red-600 hover:border-red-600 border-2 border-transparent transition-all duration-300"
                >
                  Get a Quote
                </CustomButton>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/3] relative overflow-hidden" style={{ borderRadius: "10px" }}>
              <Image
                src="/images/ready-to-import-new.png"
                alt="Container shipping port with truck and cranes for large-scale import operations"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
