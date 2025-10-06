"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CustomButton } from "@/components/ui/custom-button"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "info@viandglobal.com",
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", phone: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-18 lg:py-20 xl:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Get In Touch
          </h2>
          <p className="body-small text-black">
            Ready to start your export journey? Contact us for quotes and product information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-7">
            <div>
              <h4 className="text-gray-900 mb-8">Contact Information</h4>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D50D0D] text-white p-2 sm:p-3 lg:p-4 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <div className="body-small-bold text-[#111827] mb-1">Head Office</div>
                    <p className="body-small text-[#6B7280] text-black">
                      E-51 Chandra courtyard, Chandra vihar colony,
                      <br />
                      Dhanbad, Jharkhand, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D50D0D] text-white p-2 sm:p-3 lg:p-4 rounded-full flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <div className="body-small-bold text-[#111827] mb-1">Phone Number</div>
                    <p className="body-small text-[#6B7280] text-black">+91 817-790-9441, +91 727-651-5586</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D50D0D] text-white p-2 sm:p-3 lg:p-4 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <div className="body-small-bold text-[#111827] mb-1">Email Address</div>
                    <p className="body-small text-[#6B7280] text-black">info@viandglobal.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-gray-900 mb-6">Business Hours</h4>
              <div className="space-y-2 body-small text-[#6B7280]">
                <p className="text-black">
                  <span className="font-semibold text-gray-900">Monday - Friday:</span> 9:00 AM - 6:00 PM IST
                </p>
                <p className="text-black">
                  <span className="font-semibold text-gray-900">Saturday:</span> 9:00 AM - 2:00 PM IST
                </p>
                <p className="text-black">
                  <span className="font-semibold text-gray-900">Sunday:</span> Closed
                </p>
              </div>
            </div>

            {/* Certification Logos */}
            <div className="pt-6">
              <div className="flex flex-wrap items-center justify-start gap-3 sm:gap-4 lg:gap-5">
               
                <div className="w-[70px] h-[60px] sm:w-[80px] sm:h-[70px] lg:w-[88px] lg:h-[80px] flex items-center justify-center">
                  <Image
                    src="/icons/fssai-logo.svg"
                    alt="FSSAI Licensed"
                    width={88}
                    height={80}
                    className="object-contain"
                  />
                </div>
               
                <div className="w-[70px] h-[60px] sm:w-[80px] sm:h-[70px] lg:w-[88px] lg:h-[80px] flex items-center justify-center">
                  <Image
                    src="/icons/apeda-logo.svg"
                    alt="APEDA Registered"
                    width={88}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-7 lg:p-8 xl:p-10">
              <h5 className="text-gray-900 mb-2">Send us a message</h5>
              <p className="body-small text-black mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Name*</label>
                    <Input
                      placeholder="Your full name"
                      required
                      className="border-gray-300 focus:border-[#D50D0D] focus:border-2 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number*</label>
                    <Input
                      type="tel"
                      placeholder="Your phone number"
                      required
                      className="border-gray-300 focus:border-[#D50D0D] focus:border-2 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address*</label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="border-gray-300 focus:border-[#D50D0D] focus:border-2 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message*</label>
                  <Textarea
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    required
                    className="border-gray-300 focus:border-[#D50D0D] focus:border-2 focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="text-green-600 text-sm font-medium">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="text-red-600 text-sm font-medium">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}

                <CustomButton
                  type="submit"
                  variant="tertiary"
                  className="w-full text-black hover:text-black disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </CustomButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
