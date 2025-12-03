// SERVER COMPONENT

import { getSortedPostsData } from "@/lib/blog";

export default async function HomeBlogServer({ BlogPostsGrid }) {
  const allPosts = await getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3);

  // IMPORTANT: BlogPostsGrid is a FUNCTION, so call it properly
  return <BlogPostsGrid posts={recentPosts} columns={3} showArrow={true} fixedHeight={true} />;
}

export type { BlogPostsGridProps };
