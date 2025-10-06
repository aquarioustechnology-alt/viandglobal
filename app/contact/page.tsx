import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Viand Global - Get Quote for Agricultural Exports | India",
  description:
    "Contact Viand Global for premium agricultural exports. Get quotes for Foxnut, Wheat Bran, and Corn exports. Located in Dhanbad, Jharkhand, India. Call +91 817-790-9441 or email info@viandglobal.com",
  keywords: [
    "contact Viand Global",
    "agricultural export quote",
    "get quote",
    "contact information",
    "Dhanbad exporters",
    "agricultural products inquiry",
  ],
  openGraph: {
    title: "Contact Viand Global - Agricultural Export Inquiries",
    description: "Get in touch with Viand Global for premium agricultural export services.",
    url: "https://viandglobal.com/contact",
  },
  alternates: {
    canonical: "https://viandglobal.com/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
