"use client"

import { useState, useEffect } from "react"
import { CustomButton } from "@/components/ui/custom-button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY === 0) {
        // At top of page - always show header
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 w-full backdrop-blur-sm border-b border-gray-200 z-50 bg-[rgba(213,13,13,1)] transition-all duration-300 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-[rgba(213,13,13,1)] bg-[rgba(213,13,13,1)] h-[100 p] h-[100 PX] h-24">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="Viand - Nurturing Trust"
                width={104}
                height={80}
                className="w-[104px] h-[80px]"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="nav-link px-3 py-2 text-base font-medium transition-colors text-white hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="nav-link px-3 py-2 text-base font-medium transition-colors text-white hover:text-white"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="nav-link px-3 py-2 text-base font-medium transition-colors text-white hover:text-white"
              >
                Products
              </Link>
              <Link
                href="/blog"
                className="nav-link px-3 py-2 text-base font-medium transition-colors text-white hover:text-white"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="nav-link px-3 py-2 text-base font-medium transition-colors text-white hover:text-white"
              >
                Contact Us
              </Link>
              <CustomButton variant="header" asChild>
                <Link href="/contact">Get a Quote</Link>
              </CustomButton>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-white">
              About Us
            </Link>
            <Link href="/products" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-white">
              Products
            </Link>
            <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
