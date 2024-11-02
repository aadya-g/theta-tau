import { getSortedPostsData } from '@/lib/blog';
import { FeaturedBlogPost } from '@/components/sections/featured-blog-post';
import { BlogPostsGrid } from '@/components/sections/blog-posts-grid';
import { Footer } from '@/components/ui/footer';

export default async function Blog() {
    const allPosts = await getSortedPostsData();
    const featuredPost = allPosts[0]; // Latest post is featured
    const remainingPosts = allPosts.slice(1);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <section className="container mx-auto px-4 pt-32 pb-16">
                <h1 className="text-6xl font-bold text-center mb-8">Blog</h1>
                <p className="text-xl text-center mb-32">Read about our latest product and research announcements.</p>

                {/* Featured Article */}
                {featuredPost && <FeaturedBlogPost post={featuredPost} />}
            </section>

            <div className="w-full h-[0.125px] bg-gray-300" />

            {/* All Blog Posts */}
            <section className="container mx-auto px-4 pt-32 pb-16">
                <h2 className="text-3xl font-bold mb-6">All blog posts</h2>
                <BlogPostsGrid
                    posts={remainingPosts}
                    columns={4}
                    showArrow={false}
                    fixedHeight={false}
                />
            </section>
        </div>
    );
}
