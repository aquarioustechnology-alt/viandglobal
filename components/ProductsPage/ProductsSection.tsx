"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, MessageSquare, Package } from "lucide-react"

export default function ProductsSection() {
  const products = [
    {
      name: "Foxnut (Makhana)",
      description:
        "Premium foxnuts sourced from the finest farms, rich in protein and essential nutrients. Naturally gluten-free and low in fat, they're ideal for healthy snacking. Packed with antioxidants, makhanas support heart health and digestion. Perfect for all age groups, they are a light, crunchy, and vegan-friendly superfood with growing global demand.",
      image: "/images/products/foxnut-makhana.png",
      icon: "/icons/foxnut-icon.svg",
      highlights: ["Rich in antioxidants", "Gluten-free and vegan", "Low in sodium and fat"],
      packaging: ["250g sealed packs", "500g resealable pouches", "Custom bulk packaging"],
    },
    {
      name: "Wheat Bran",
      description:
        "High-fiber wheat bran ideal for digestive health and animal feed. Rich in dietary fiber, it supports gut function and adds nutrition to baked goods and cereals. Also used in livestock diets, it's a cost-effective and sustainable choice for bulk nutritional applications in both human and animal consumption.",
      image: "/images/products/wheat-bran.png",
      icon: "/icons/wheat-bran-icon.svg",
      highlights: [
        "Excellent source of dietary fiber",
        "Supports digestive health",
        "Ideal for baking and animal feed",
      ],
      packaging: ["20kg woven bags", "50kg bulk sacks", "Custom packaging options"],
    },
    {
      name: "Corn (Maize)",
      description:
        "Fresh, non-GMO corn suitable for food processing and industrial uses. Known for its high starch content and versatility, it's used in snacks, cereals, syrups, and bio-products. Corn is nutrient-rich, supports multiple industries, and is available in large-scale packaging tailored for export and commercial use.",
      image: "/images/products/corn-maize.png",
      icon: "/icons/corn-icon.svg",
      highlights: ["Non-GMO varieties available", "High starch content", "Versatile for various applications"],
      packaging: ["50kg grain bags", "Bulk container shipments", "Custom packaging solutions"],
    },
  ]

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-3.5">
            Premium Agricultural Exports
          </h2>
          <p className="body-small text-black max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover our range of high-quality agricultural products, carefully sourced and processed to meet
            international standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:border-[#D50D0D] hover:border-[3px] hover:scale-105 flex flex-col"
            >
              <div className="relative h-48 sm:h-56 md:h-60 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.icon && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#D50D0D] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10">
                    <Image
                      src={product.icon || "/placeholder.svg"}
                      alt="Product Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-[100px] sm:w-[124px] h-[30px] sm:h-[35px] bg-white text-[#D50D0D] text-sm sm:text-base font-semibold rounded-full flex items-center justify-center z-10">
                  Export Ready
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white flex-1 flex flex-col">
                <h5 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{product.name}</h5>
                <p className="body-small mb-3 sm:mb-4 leading-relaxed text-[#4B5563] flex-1">{product.description}</p>
                <div className="mb-3 sm:mb-4">
                  <p className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">Key Highlights:</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {product.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-[#D50D0D] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#F8FAFC] p-2 sm:p-2.5 rounded-md mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm font-semibold text-black mb-2">Packaging Options:</p>
                  <ul className="space-y-1 text-xs sm:text-sm text-gray-600">
                    {product.packaging.map((option, pIndex) => (
                      <li key={pIndex} className="flex items-start">
                        <Package className="w-3 h-3 sm:w-4 sm:h-4 text-[#D50D0D] mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-black">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-[#D50D0D] text-white rounded-md h-[45px] sm:h-[50px] flex items-center justify-center gap-2 text-sm sm:text-base hover:bg-[#D50D0D] hover:text-white active:bg-[#D50D0D] active:text-white focus:bg-[#D50D0D] focus:text-white transition-none">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    Request Quote
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
