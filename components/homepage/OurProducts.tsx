"use client"

import { CustomButton } from "@/components/ui/custom-button"
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function OurProducts() {
  const products = [
    {
      name: "Foxnut (Makhana)",
      description:
        "Premium quality foxnuts sourced from the finest farms in Bihar and West Bengal. Rich in protein and antioxidants.",
      image: "/images/products/foxnut-makhana.png",
      icon: "/icons/foxnut-icon.svg",
    },
    {
      name: "Wheat Bran",
      description:
        "High-fiber wheat bran perfect for animal feed and human consumption. Processed under strict quality controls.",
      image: "/images/products/wheat-bran.png",
      icon: "/icons/wheat-bran-icon.svg",
    },
    {
      name: "Corn (Maize)",
      description:
        "Yellow corn of superior quality, ideal for feed industry and food processing. Available in various grades.",
      image: "/images/products/corn-maize.png",
      icon: "/icons/corn-icon.svg",
    },
  ]

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-[120px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:text-5xl">Our Premium Products</h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-black">
            We export the finest quality agricultural products, carefully sourced and processed to meet international
            standards.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          style={{ filter: "drop-shadow(0px 1px 40px rgba(51, 0, 0, 0.1))" }}
        >
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:border-[#C8102E] border-2 border-transparent"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Custom Product Icon */}
                  <div className="absolute top-4 left-4">
                    <Image
                      src={product.icon || "/placeholder.svg"}
                      alt={`${product.name} icon`}
                      width={45}
                      height={46}
                      className="w-10 h-11 sm:w-11 sm:h-12"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <h5 className="text-lg sm:text-xl font-semibold mb-3">{product.name}</h5>
                <CardDescription className="text-sm sm:text-base mb-4 text-gray-600 leading-relaxed">
                  {product.description}
                </CardDescription>
                <Link href="/products">
                  <CustomButton
                    variant="tertiary"
                    className="w-full text-sm sm:text-base"
                    style={{ backgroundColor: "#D50D0D", color: "#FFFFFF" }}
                  >
                    View Details
                  </CustomButton>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
