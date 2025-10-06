import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/TermsConditionsPage/HeroSection"
import TermsContent from "@/components/TermsConditionsPage/TermsContent"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-16 sm:h-20 lg:h-24"></div>
      <HeroSection />
      <TermsContent />
      <Footer />
    </div>
  )
}
