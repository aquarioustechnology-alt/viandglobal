"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/data/blogs"

export default function FeaturedArticles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and expert knowledge in agricultural exports and
            international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((article) => (
            <Card
              key={article.id}
              className="group overflow-hidden border border-gray-200 hover:border-[#D50D0D] transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span className="flex items-center mr-4">
                      <svg className="w-4 h-4 mr-1 text-[#D50D0D]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {article.author}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 text-[#D50D0D]" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {article.date}
                    </span>
                  </div>
                  <h6 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#D50D0D] transition-colors duration-300">
                    {article.title}
                  </h6>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#D50D0D] text-sm font-medium">{article.readTime}</span>
                    <Link href={`/blog-details/${article.slug}`}>
                      <button className="bg-[#D50D0D] hover:bg-[#D50D0D] active:bg-[#D50D0D] focus:bg-[#D50D0D] text-white px-4 py-2 rounded-md text-sm font-medium transition-none flex items-center">
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
