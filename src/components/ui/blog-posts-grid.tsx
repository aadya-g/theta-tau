"use client";

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { type BlogPost } from '@/lib/blog';

interface BlogPostsGridProps {
    posts: BlogPost[];
    columns?: 3 | 4;
    showArrow?: boolean;
    fixedHeight?: boolean;
}export function BlogPostsGrid({
    posts,
    columns = 3,
    showArrow = false,
    fixedHeight = false
}: BlogPostsGridProps) {
    const gridCols = columns === 4
        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        : "grid-cols-1 md:grid-cols-3";

    // sort posts by date (newest first)
    const sortedPosts = [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return (
        <div className={`grid ${gridCols} gap-8 md:gap-12`}>
            {sortedPosts.map((post) => (
                <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className={`group block ${fixedHeight ? 'h-[500px]' : ''}`}
                >
                    <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                        <div className="relative h-72 w-full flex-shrink-0">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex-grow p-8 flex flex-col">
                            <p className="text-gray-500 text-lg mb-6">{post.date}</p>

                            <div className="flex items-start justify-between gap-4 mb-6">
                                <h4 className="text-2xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-200 flex-grow line-clamp-2">
                                    {post.title}
                                </h4>
                                {showArrow && (
                                    <div className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200 flex-shrink-0">
                                        <ArrowUpRight className="h-7 w-7 text-gray-900" />
                                    </div>
                                )}
                            </div>

                            <p className="text-gray-600 text-lg leading-relaxed line-clamp-3 flex-grow">
                                {post.description}
                            </p>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
}
export type { BlogPostsGridProps };
