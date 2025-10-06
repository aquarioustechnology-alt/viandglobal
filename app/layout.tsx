import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ClientLayout from "./ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Viand Global - Premium Agricultural Exports from India | Foxnut, Wheat Bran, Corn",
    template: "%s | Viand Global",
  },
  description:
    "Leading exporters of premium agricultural products from India to the world. Specializing in Foxnut (Makhana), Wheat Bran, and Corn exports with global reach across USA, UAE, Germany, Italy, Netherlands, Singapore, Japan, and South Korea.",
  keywords: [
    "agricultural exports",
    "foxnut export",
    "makhana export",
    "wheat bran export",
    "corn export",
    "maize export",
    "Indian agricultural products",
    "premium agricultural exports",
    "global food trade",
    "agricultural commodities",
  ],
  authors: [{ name: "Viand Global" }],
  creator: "Viand Global",
  publisher: "Viand Global",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viandglobal.com",
    siteName: "Viand Global",
    title: "Viand Global - Premium Agricultural Exports from India",
    description:
      "Leading exporters of premium agricultural products from India to the world. Specializing in Foxnut, Wheat Bran, and Corn exports.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Viand Global - Agricultural Exports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viand Global - Premium Agricultural Exports from India",
    description: "Leading exporters of premium agricultural products from India to the world.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/fav-ico.jpg", sizes: "32x32", type: "image/jpeg" },
      { url: "/fav-ico.jpg", sizes: "16x16", type: "image/jpeg" },
    ],
    apple: [{ url: "/fav-ico.jpg", sizes: "180x180", type: "image/jpeg" }],
    shortcut: "/fav-ico.jpg",
  },
  metadataBase: new URL("https://viandglobal.com"),
  alternates: {
    canonical: "https://viandglobal.com",
  },
  verification: {
    google: "your-google-verification-code", // You'll need to add this from Google Search Console
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://viandglobal.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Viand Global",
              url: "https://viandglobal.com",
              logo: "https://viandglobal.com/images/logo.png",
              description: "Leading exporters of premium agricultural products from India to the world.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "E-51 Chandra courtyard, Chandra vihar colony",
                addressLocality: "Dhanbad",
                addressRegion: "Jharkhand",
                addressCountry: "India",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-817-790-9441",
                contactType: "customer service",
                email: "info@viandglobal.com",
              },
              sameAs: ["https://viandglobal.com"],
              areaServed: [
                "United States",
                "United Arab Emirates",
                "Germany",
                "Italy",
                "Netherlands",
                "Singapore",
                "Japan",
                "South Korea",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}


import './globals.css'
