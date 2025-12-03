import { getSortedPostsData } from "@/lib/blog";
import type { BlogPostsGridProps } from "../ui/blog-posts-grid";

type ServerProps = {
  BlogPostsGrid: React.ComponentType<BlogPostsGridProps>;
};

export default async function HomeBlogServer({ BlogPostsGrid }: ServerProps) {
  const allPosts = await getSortedPostsData();
  const recentPosts = allPosts.slice(0, 3);

  return (
    <BlogPostsGrid
      posts={recentPosts}
      columns={3}
      showArrow={true}
      fixedHeight={true}
    />
  );
}
