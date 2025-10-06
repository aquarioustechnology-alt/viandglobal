import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import Image from "next/image"

export default function OurLeadership() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading and Subtext wrapped in a single div with fixed 35px bottom margin */}
        <div className="text-center mb-[35px]">
          {" "}
          {/* Changed from sm:mb-16 to fixed mb-[35px] */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Leadership</h2>
          <p className="body-small text-black">
            Visionary leadership driving agricultural excellence across global markets.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Left Section: Profile Image and Name */}
              <div className="lg:col-span-1 bg-[#D50D0D] p-6 sm:p-8 flex flex-col items-center justify-center text-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
                  <Image
                    src="/images/abhishek-anand-leadership.png"
                    alt="Abhishek Anand"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="text-2xl sm:text-3xl font-bold text-white mb-1">Abhishek Anand</h5>
                <p className="text-base sm:text-lg text-white/80">Founder & CEO</p>
              </div>

              {/* Right Section: Quote and Details */}
              <div className="lg:col-span-2 bg-white p-6 sm:p-8 flex flex-col justify-center">
                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#D50D0D] mb-4" />
                <blockquote className="text-base sm:text-lg text-gray-700 italic mb-4 sm:mb-6 leading-relaxed">
                  "Our goal is not just to export goods, but to build enduring trust across borders. Every shipment
                  carries with it the promise of quality, the heritage of Indian agriculture, and our commitment to
                  excellence."
                </blockquote>
                <div className="text-sm sm:text-base text-black space-y-2">
                  <p>
                    <strong>Experience:</strong> 7 + years of experience in exports
                  </p>
                  <p>
                    <strong>Education:</strong> Bachelor of Commerce ,Pune University, India
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
