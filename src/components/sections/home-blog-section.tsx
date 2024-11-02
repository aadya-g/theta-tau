import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';
import { BlogPostsGrid } from './blog-posts-grid';

export async function HomeBlogSection() {
    const allPosts = await getSortedPostsData();
    // Get the latest 3 posts
    const recentPosts = allPosts.slice(0, 3);

    return (
        <section className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Blog title and View all link */}
                <div className="flex justify-between items-center mb-24">
                    <h2 className="text-5xl font-bold text-gray-900">Blog</h2>
                    <div className="w-full h-[2px] bg-gray-900 mx-4" />
                    <Link
                        href="/blog"
                        className="text-xl text-gray-600 hover:text-gray-900 transition-colors duration-200 border-b border-transparent hover:border-gray-900"
                    >
                        View all articles
                    </Link>
                </div>

                <BlogPostsGrid
                    posts={recentPosts}
                    columns={3}
                    showArrow={true}
                    fixedHeight={true}
                />
            </div>
        </section>
    );
}
