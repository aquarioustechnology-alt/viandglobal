export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  summary: string
  readTime: string
  content: string
  tags: string[]
}

// Import all blog posts
import { demandForIndianMakhanaPost } from "./blog-posts/demand-for-indian-makhana-foxnuts-in-the-global-market"
import { exportOfAgriculturalProductsPost } from "./blog-posts/export-of-agricultural-products-from-india"
import { ethicalPracticesPost } from "./blog-posts/ethical-practices-for-success-in-global-trade"
import { sustainablePackagingPost } from "./blog-posts/sustainable-packaging-solutions-global-exports"
import { topCertificationsPost } from "./blog-posts/top-certifications-agro-exporters"
import { exportDocumentationPost } from "./blog-posts/complete-guide-export-documentation"
import { marketTrends2024Post } from "./blog-posts/agricultural-export-market-trends-2024"
import { digitalTransformationPost } from "./blog-posts/digital-transformation-agricultural-exports"
import { tradePartnershipsPost } from "./blog-posts/building-strong-trade-partnerships"
import { foodSafetyStandardsPost } from "./blog-posts/understanding-global-food-safety-standards"
import { organicExportsPost } from "./blog-posts/future-organic-agricultural-exports"
import { coldChainManagementPost } from "./blog-posts/cold-chain-management-agricultural-products"
import { emergingMarketsPost } from "./blog-posts/emerging-markets-opportunities-indian-exporters"
import { tradeFinancePost } from "./blog-posts/trade-finance-solutions-agricultural-exporters"
import { climateChangeImpactPost } from "./blog-posts/climate-change-impact-agricultural-exports"

export const blogPosts: BlogPost[] = [
  demandForIndianMakhanaPost,
  exportOfAgriculturalProductsPost,
  ethicalPracticesPost,
  sustainablePackagingPost,
  topCertificationsPost,
  exportDocumentationPost,
  marketTrends2024Post,
  digitalTransformationPost,
  tradePartnershipsPost,
  foodSafetyStandardsPost,
  organicExportsPost,
  coldChainManagementPost,
  emergingMarketsPost,
  tradeFinancePost,
  climateChangeImpactPost,
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}
