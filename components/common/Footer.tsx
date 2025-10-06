"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#D50D0D] text-white">
      {/* Top CTA Section */}
      <div className="text-center pt-[100px] pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-white mb-4 text-center">Let's grow together. Partner with Viand Global today.</h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our network of satisfied international partners and experience the difference of working with India's
            trusted agricultural exporters.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-[#D50D0D] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors min-h-[48px] flex items-center justify-center">
                Explore Products
              </button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#D50D0D] px-8 py-3 rounded-lg font-semibold transition-colors min-h-[48px] flex items-center justify-center">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/25"></div>
      </div>

      {/* Main Footer Content */}
      <div className="py-10 text-center md:text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left" style={{ gap: "10px" }}>
            {/* Company Info - Takes 1 column */}
            <div className="flex flex-col gap-6 items-center md:items-start">
              <Image
                src="/images/logo.png"
                alt="Viand - Nurturing Trust"
                width={175}
                height={135}
                className="w-[175px] h-[135px]"
              />
              <p className="text-white/90 mb-6 max-w-sm">
                Leading exporters of premium agricultural products from India to the world.
              </p>
            </div>

            {/* Navigation Links Container */}
            <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: "60px" }}>
              {/* Products Column */}
              <div>
                <p
                  className="mb-[26px] border-b border-white/60 pb-1.5 text-white mx-auto md:mx-0"
                  style={{
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: "140%",
                    borderBottomWidth: "1px",
                    width: "auto",
                    maxWidth: "145px",
                  }}
                >
                  Products
                </p>
                <ul className="space-y-3 text-white/90">
                  <li>
                    <Link
                      href="/products"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Foxnut (Makhana)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Wheat Bran
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Corn (Maize)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Product Catalog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links Column */}
              <div>
                <p
                  className="mb-[26px] border-b border-white/60 pb-1.5 text-[22px] font-semibold text-white mx-auto md:mx-0"
                  style={{
                    lineHeight: "140%",
                    borderBottomWidth: "1px",
                    width: "auto",
                    maxWidth: "145px",
                  }}
                >
                  Quick Links
                </p>
                <ul className="space-y-3 text-white/90">
                  <li>
                    <Link
                      href="/about"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <p
                  className="mb-[26px] border-b border-white/60 pb-1.5 text-[22px] font-semibold text-white mx-auto md:mx-0"
                  style={{
                    lineHeight: "140%",
                    borderBottomWidth: "1px",
                    width: "auto",
                    maxWidth: "145px",
                  }}
                >
                  Legal
                </p>
                <ul className="space-y-3 text-white/90">
                  <li>
                    <Link
                      href="/terms-conditions"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Export License and Social Media Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
            <div className="inline-block bg-white rounded-full px-4 py-2">
              <span className="text-sm font-medium text-[#D50D0D]">RCMC/APEDA/04447/2023-2024 - APEDA REGISTRATION NUMBER</span>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <Image src="/icons/instagram-logo.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <Image src="/icons/facebook-logo.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <Image src="/icons/linkedin-logo.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
              </Link>
              <Link
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <Image src="/icons/whatsapp-logo.svg" alt="WhatsApp" width={27} height={27} className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-white/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center text-center md:text-left text-white/80 text-sm">
            <p className="font-normal text-white inline-block text-center md:text-left">
              © 2025 Viand Global. All rights reserved. |{" "}
              <Link
                href="https://www.theaquarious.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Designed by Aquarious
              </Link>
            </p>
            <p className="mt-2 md:mt-0 text-white font-normal inline-block text-center md:text-left">
              <Link
                href="https://www.freepik.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Photos by Freepik
              </Link>
              {" | Images are A.I. Generated"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
