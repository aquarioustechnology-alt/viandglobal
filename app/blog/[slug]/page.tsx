import { notFound } from "next/navigation"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import { getBlogArticleBySlug, getRelatedArticles } from "@/lib/blog-data"
import BlogDetailContent from "@/components/BlogPage/BlogDetailContent"

interface BlogDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const article = getBlogArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id, article.relatedArticles)

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <BlogDetailContent article={article} relatedArticles={relatedArticles} />
      </main>
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  const { blogArticles } = await import("@/lib/blog-data")

  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}
