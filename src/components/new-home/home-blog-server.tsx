import { getSortedPostsData } from "@/lib/blog"
import { BlogPostsGrid } from "../ui/blog-posts-grid"

export default async function HomeBlogServer() {
  const allPosts = await getSortedPostsData()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <BlogPostsGrid
      posts={recentPosts}
      columns={3}
      showArrow
      fixedHeight
    />
  )
}
