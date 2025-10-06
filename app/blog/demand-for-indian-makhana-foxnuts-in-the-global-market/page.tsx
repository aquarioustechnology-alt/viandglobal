import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import HeroSection from "@/components/BlogPage/BlogDetails/Demand For Indian Makhana (Foxnuts) In The Global Market/HeroSection"
import BlogContent from "@/components/BlogPage/BlogDetails/Demand For Indian Makhana (Foxnuts) In The Global Market/BlogContent"

export default function BlogDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <BlogContent />
      </main>
      <Footer />
    </div>
  )
}
