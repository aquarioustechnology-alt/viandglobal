"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react"

export default function BlogContent() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed text-lg">
                Makhana is a traditional Indian snack made from the seeds of the Euryale ferox plant. It is also called foxnuts or lotus seeds. Makhana used to be eaten during religious ceremonies and times of fasting. Now it's considered a superfood because it's good for you and can be used in many ways. Health-conscious clients around the world have become very interested in it, which has caused a huge rise in demand.
              </p>
            </div>

            {/* The Nutritional Powerhouse */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Nutritional Powerhouse</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Foxnuts are packed with essential nutrients that make them an ideal snack for health-conscious consumers
                worldwide. They are:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Naturally gluten-free and low in fat</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Rich in calcium, magnesium, and potassium</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Gluten-free and suitable for various dietary restrictions</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Low in sodium and cholesterol-free</span>
                </div>
              </div>
            </div>

            {/* Quality Standards Driving Export Success */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quality Standards Driving Export Success</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The success of Indian foxnut in global markets can be attributed to stringent quality control measures
                implemented by exporters like Viyand Global. Our quality parameters include:
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Uniform size grading and sorting</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Moisture content control below 10%</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Zero tolerance for foreign matter</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-[#D50D0D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Proper packaging to maintain freshness</span>
                </div>
              </div>
            </div>

            {/* Viyand Global's Commitment to Quality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Viyand Global's Commitment to Quality</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At Viyand Global, we ensure that every batch of foxnut meets international quality standards. Our
                state-of-the-art processing facilities and rigorous quality control measures guarantee that our
                customers receive only the finest products.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As the global demand for healthy snacks continues to rise, Indian foxnut is well-positioned to capture a
                significant market share. With proper quality control and strategic marketing, this traditional Indian
                crop is set to become a global phenomenon.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-200">
              <Button
                variant="outline"
                className="flex items-center text-[#D50D0D] border-[#D50D0D] hover:bg-[#D50D0D] hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>
              <Button
                variant="outline"
                className="flex items-center text-[#D50D0D] border-[#D50D0D] hover:bg-[#D50D0D] hover:text-white bg-transparent"
              >
                Next
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    In This Article
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a
                        href="#nutritional-powerhouse"
                        className="text-[#D50D0D] hover:text-[#A00E26] transition-colors"
                      >
                        The Nutritional Powerhouse
                      </a>
                    </li>
                    <li>
                      <a href="#quality-standards" className="text-[#D50D0D] hover:text-[#A00E26] transition-colors">
                        Quality Standards
                      </a>
                    </li>
                    <li>
                      <a href="#viyand-commitment" className="text-[#D50D0D] hover:text-[#A00E26] transition-colors">
                        Our Commitment
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* CTA Card */}
              <Card className="bg-[#D50D0D] text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-semibold mb-2">Interested in Our Products?</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get in touch with our export team for quotes and samples.
                  </p>
                  <Button className="bg-white text-[#D50D0D] hover:bg-gray-100 w-full" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src="/images/blog/blog-2-new.png"
                      alt="Related Article"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <span>Priya Sharma</span>
                      <span className="mx-2">•</span>
                      <span>December 15, 2024</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      A Buyer's Guide to Wheat Bran Quality Parameters
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Essential quality metrics every importer should know when sourcing wheat bran for livestock feed
                      and food applications.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#D50D0D] text-sm font-medium">5 min read</span>
                      <Button size="sm" className="bg-[#D50D0D] hover:bg-[#A00E26] text-white">
                        Read More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-[#D50D0D] rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Let's grow together. Partner with Viand Global today.</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join our network of satisfied international partners and experience the difference of working with India's
            trusted agricultural exporters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#D50D0D] hover:bg-gray-100">Explore Products</Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#D50D0D] bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
