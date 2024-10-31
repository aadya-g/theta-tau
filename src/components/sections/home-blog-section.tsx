import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getSortedPostsData, type BlogPost } from '@/lib/blog';

export async function HomeBlogSection() {
    const allPosts = await getSortedPostsData();
    // Get the latest 3 posts
    const recentPosts = allPosts.slice(0, 3);

    return (
        <section className="bg-white py-48">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header with Blog title and View all link */}
                <div className="flex justify-between items-center mb-24">
                    <h2 className="text-5xl font-bold text-gray-900">Blog</h2>
                    <Link
                        href="/blog"
                        className="text-xl text-gray-600 hover:text-gray-900 transition-colors duration-200 border-b border-transparent hover:border-gray-900"
                    >
                        View all articles
                    </Link>
                </div>

                {/* Blog posts grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {recentPosts.map((post) => (
                        <Link
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            className="group block h-[600px]" // Fixed height container
                        >
                            <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                                {/* Image - Fixed height */}
                                <div className="relative h-72 w-full flex-shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Content area - Flex grow to fill remaining space */}
                                <div className="flex-grow p-8 flex flex-col">
                                    {/* Date */}
                                    <p className="text-gray-500 text-lg mb-6">{post.date}</p>

                                    {/* Title and Arrow Container */}
                                    <div className="flex items-start justify-between gap-4 mb-6">
                                        <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-200 flex-grow line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <div className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 flex-shrink-0">
                                            <ArrowUpRight className="h-7 w-7 text-gray-900" />
                                        </div>
                                    </div>

                                    {/* Description - Fixed height with line clamp */}
                                    <p className="text-gray-600 text-lg leading-relaxed line-clamp-3 flex-grow">
                                        {post.description}
                                    </p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
