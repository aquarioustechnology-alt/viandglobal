import { notFound } from "next/navigation"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { getBlogPostBySlug } from "@/data/blogs"
import BlogDetailContent from "@/components/BlogPage/BlogDetailContent"

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blogPost = getBlogPostBySlug(params.slug)

  if (!blogPost) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="h-16 sm:h-20 lg:h-24"></div>
      <main>
        <BlogDetailContent blogPost={blogPost} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const { blogPosts } = await import("@/data/blogs")

  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
