import { BlogPostsGrid } from "../ui/blog-posts-grid";
import HomeBlogServer from "./home-blog-server";

export default function HomeBlogSection() {
  return (
    <section className="bg-white container max-w-7xl mx-auto py-32">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-5xl font-bold text-gray-900">Blog</h2>
        <a
          href="/blog"
          className="text-xl text-gray-600 hover:text-gray-900 border-b border-transparent hover:border-gray-900"
        >
          View all articles
        </a>
      </div>

      <p className="text-xl text-gray-600 mb-16">
        Stay updated with our latest news, events, and stories!
      </p>

      {/* Server component fetches posts */}
      <HomeBlogServer BlogPostsGrid={BlogPostsGrid} />
    </section>
  );
}
