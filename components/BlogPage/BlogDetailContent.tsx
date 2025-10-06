"use client";

import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components/ui/custom-button";
import type { BlogPost } from "@/data/blogs";

interface BlogDetailContentProps {
  blogPost: BlogPost;
}

export default function BlogDetailContent({
  blogPost,
}: BlogDetailContentProps) {
  // Safety check to ensure blogPost exists
  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Blog post not found
          </h1>
          <Link href="/blog" className="text-[#D50D0D] hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-[#D50D0D] hover:text-[#A00E26] mb-6 transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
          {/* Title and Meta */}

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8">
            <div className="flex-1">
              <h2 className="mb-4 leading-tight text-black">
                {blogPost.title || "Untitled Blog Post"}
              </h2>

              <div className="flex items-center text-sm text-gray-600 space-x-4">
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#D50D0D]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {blogPost.author || "Unknown Author"}
                </span>
                <span className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#D50D0D]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {blogPost.date || "No date"}
                </span>
                <span className="text-[#D50D0D] font-medium">
                  {blogPost.readTime || "5 min read"}
                </span>
              </div>
            </div>

            {/* Share Button */}

            {/* <button className="mt-4 lg:mt-0 bg-[#D50D0D] hover:bg-[#A00E26] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367 2.684z"
                />
              </svg>
              Share
            </button>*/}
          </div>

          {/* Hero Image */}
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-[10px] overflow-hidden mb-8">
            <Image
              src={blogPost.image || "/placeholder.svg?height=400&width=800"}
              alt={blogPost.title || "Blog post image"}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Summary */}
              {blogPost.summary && (
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium my-15">
                    {blogPost.summary}
                  </p>
                </div>
              )}

              {/* Blog Content */}
              {blogPost.content && (
                <div
                  className="prose prose-lg max-w-none apply-body-small"
                  dangerouslySetInnerHTML={{
                    __html: blogPost.content
                      .replace(
                        /•/g,
                        '<img src="/icons/bullet-icon-new.svg" alt="bullet" style="display: inline; width: 16px; height: 16px; margin-right: 8px; vertical-align: middle;" />'
                      )
                      .replace(/<p>/g, '<p class="body-small my-5">')
                      .replace(
                        /<ul>/g,
                        '<ul style="list-style: none; padding-left: 0; gap: 10px;">'
                      )
                      .replace(
                        /<li>/g,
                        '<li class="body-small" style="display: flex; align-items: flex-start; line-height: 1.25;"><img src="/icons/bullet-icon-new.svg" alt="bullet" style="width: 16px; margin-right: 8px;margin-top: 2px;flex-shrink: 0;margin-bottom:0px;" /><span>'
                      )
                      .replace(/<\/li>/g, "</span></li>"),
                  }}
                />
              )}

              {/* Tags */}
              {blogPost.tags && blogPost.tags.length > 0 && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 my-4">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {blogPost.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-[#D50D0D] hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Navigation */}
              {/* <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
                <button className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-[#D50D0D] transition-colors duration-300">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Previous
                </button>
                <button className="inline-flex items-center px-4 py-2 text-gray-600 hover:text-[#D50D0D] transition-colors duration-300">
                  Next
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h6 className="text-lg font-bold text-gray-900 mb-2">
                  About the Author
                </h6>
                <div className="flex items-center mb-3">
                  <div className="w-12 h-12 bg-[#D50D0D] rounded-full flex items-center justify-center text-white font-bold text-lg mr-3">
                    {blogPost.author
                      ? blogPost.author.charAt(0).toUpperCase()
                      : "A"}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {blogPost.author || "Author"}
                    </p>
                    <p className="text-sm text-gray-600">Expert Writer</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Specialized in agricultural exports and international trade
                  with years of industry experience.
                </p>
              </div>

              {/* CTA Box */}
              <div className="bg-[#D50D0D] text-white p-6 rounded-lg">
                <h6 className="text-lg font-bold mb-2">
                  Interested in Our Products?
                </h6>
                <p className="text-sm mb-4 opacity-90">
                  Get in touch with our export team to learn more about our
                  premium agricultural products.
                </p>
                <div className="flex justify-start">
                  <CustomButton
                    variant="secondary"
                    asChild
                    className="w-[160px] h-[50px]"
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center"
                    >
                      Contact Us
                    </Link>
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
