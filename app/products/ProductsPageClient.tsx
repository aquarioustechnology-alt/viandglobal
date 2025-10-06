"use client"
import { Package, Truck, Award, Users } from "lucide-react"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/ProductsPage/HeroSection"
import ProductsSection from "@/components/ProductsPage/ProductsSection"
import QualityYouCanTrust from "@/components/ProductsPage/QualityYouCanTrust"
import OurSolutions from "@/components/ProductsPage/OurSolutions"
import GetAQuoteSection from "@/components/ProductsPage/GetAQuoteSection"

const products = [
  {
    id: "foxnut",
    name: "Foxnut (Makhana)",
    image: "/images/products/foxnut-makhana.png",
    description:
      "Premium quality foxnuts sourced from the finest farms, rich in protein and essential nutrients. These nutrient-dense snacks are not only light and crunchy but also packed with health benefits, making them a favorite among fitness enthusiasts. Makhana is known for its anti-aging properties due to its high antioxidant content. It supports heart health, aids in weight management, and promotes healthy skin. Ideal for guilt-free snacking, foxnuts are naturally gluten-free and vegan-friendly. They are also low in sodium and cholesterol, making them suitable for people of all ages. Whether roasted or spiced, foxnuts are an excellent snack alternative to fried or sugary items.",
    highlights: [
      "100% Natural & Gluten-Free",
      "Handpicked for uniform size",
      "Low-fat, high-protein snack",
      "Available in Raw and Roasted form",
    ],
    packaging: "200g | 500g | 1kg | Bulk sacks (custom)",
    color: "bg-green-50 border-green-200",
  },
  {
    id: "wheat-bran",
    name: "Wheat Bran",
    image: "/images/products/wheat-bran.png",
    description:
      "High-fiber wheat bran perfect for health-conscious consumers and livestock feed applications. It is an excellent natural source of insoluble dietary fiber that aids digestion and supports a healthy gut microbiome. Wheat bran promotes satiety, making it helpful for weight management. It is rich in essential vitamins and minerals, including magnesium, iron, and B vitamins. Used widely in baking and breakfast cereals, it enhances the nutritional profile of everyday food products. Additionally, it is a highly valuable ingredient in animal feed due to its nutrient density. Wheat bran is also eco-friendly and cost-effective, making it a sustainable choice for commercial use.",
    highlights: [
      "High dietary fiber content",
      "Rich in B-vitamins & minerals",
      "Processed in hygienic facilities",
      "Suitable for animal nutrition & human consumption",
    ],
    packaging: "25kg & 50kg PP Bags",
    color: "bg-amber-50 border-amber-200",
  },
  {
    id: "corn",
    name: "Corn (Maize)",
    image: "/images/products/corn-maize.png",
    description:
      "Fresh, high-quality corn suitable for various industrial and food processing applications. Sourced from non-GMO farms, our maize is known for its excellent starch content, sweetness, and versatility. It serves as a key ingredient in snacks, cereals, syrups, and other food products. In industrial applications, corn is used for producing ethanol, bioplastics, and animal feed. Its robust quality ensures consistent performance in manufacturing and processing environments. Corn is also rich in essential nutrients like fiber, vitamin B, and antioxidants such as lutein. With high adaptability across sectors, our corn meets international quality standards and is available in bulk packaging options tailored to your needs.",
    highlights: [
      "Non-GMO, Grade-A Yellow Maize",
      "Low moisture, high shelf-life",
      "Cleaned, sorted, and tested",
      "Suitable for human & animal consumption",
    ],
    packaging: "50kg PP Bags or Bulk Container Shipments",
    color: "bg-yellow-50 border-yellow-200",
  },
]

const bulkFeatures = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Custom Packaging",
    description: "Flexible packaging solutions tailored to your market requirements and branding needs.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Private Label",
    description: "White-label and private branding options available for distributors and retailers.",
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Global Logistics",
    description: "End-to-end logistics support with reliable shipping partners worldwide.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Support",
    description: "Dedicated export team to handle your bulk orders and special requirements.",
  },
]

export default function ProductsPageClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Agricultural Products - Viand Global",
            description: "Premium agricultural products for export from India",
            url: "https://viandglobal.com/products",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "Product",
                  position: 1,
                  name: "Foxnut (Makhana)",
                  description: "Premium quality foxnuts sourced from Bihar",
                  image: "https://viandglobal.com/images/products/foxnut-makhana.png",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Viand Global",
                    },
                  },
                },
                {
                  "@type": "Product",
                  position: 2,
                  name: "Wheat Bran",
                  description: "High-fiber wheat bran for livestock feed and health foods",
                  image: "https://viandglobal.com/images/products/wheat-bran.png",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Viand Global",
                    },
                  },
                },
                {
                  "@type": "Product",
                  position: 3,
                  name: "Corn (Maize)",
                  description: "Non-GMO Grade-A yellow maize for food and feed applications",
                  image: "https://viandglobal.com/images/products/corn-maize.png",
                  offers: {
                    "@type": "Offer",
                    availability: "https://schema.org/InStock",
                    seller: {
                      "@type": "Organization",
                      name: "Viand Global",
                    },
                  },
                },
              ],
            },
          }),
        }}
      />
      <div className="min-h-screen bg-white">
        <Header />

        {/* Navigation Spacer */}
        <div className="h-16 sm:h-20 lg:h-24"></div>

        <HeroSection />
        <ProductsSection products={products} />
        <QualityYouCanTrust />
        <OurSolutions bulkFeatures={bulkFeatures} />
        <GetAQuoteSection />

        <Footer />
      </div>
    </>
  )
}
