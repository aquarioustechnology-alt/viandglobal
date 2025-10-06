import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import TestSection from "@/components/PrivacyPolicyPage/TestSection"
import PrivacyContent from "@/components/PrivacyPolicyPage/PrivacyContent"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
       <div class="h-16 sm:h-20 lg:h-24"></div>
      <TestSection />
      <PrivacyContent />
      <Footer />
    </div>
  )
}
