import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllPostSlugs, getPostData } from '@/lib/blog';

import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import { Footer } from '@/components/ui/footer';

export async function generateStaticParams() {
    const paths = getAllPostSlugs();
    return paths.map(path => ({
        slug: path.params.slug
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPostData(params.slug);

    return (
        <article className="min-h-screen bg-white">
            <div className="container mx-auto px-4 pt-8 pb-16">
                {/* Featured Post Box */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-12 relative max-w-5xl mx-auto">
                    <Link href={"/blog"} className="absolute top-6 md:right-[40%] pr-6">
                        <div className="flex items-center rounded-full border-2 border-gray-600 transition duration-200 ease-in-out hover:border-red-800 hover:translate-x-1">
                            <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full transition duration-200 ease-in-out hover:bg-red-100 hover:text-red-800">
                                <ArrowLeft className="h-7 w-7" />
                            </div>
                        </div>
                    </Link>
                    <div className="flex flex-col md:flex-row min-h-[400px]">
                        <div className="md:w-1/2 h-[400px]">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={400}
                                height={400}
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6 pt-32 flex flex-col justify-end">
                            <p className="text-gray-600 mb-2">{post.date}</p>
                            <h1 className="text-3xl font-bold mb-4">
                                {post.title}
                            </h1>
                            <p className="mb-4">{post.description}</p>
                        </div>
                    </div>
                </div>
                {/* Article Content */}
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-red-800">
                        <MDXRemote
                            source={post.content}
                            options={{
                                mdxOptions: {
                                    remarkPlugins: [remarkGfm],
                                    rehypePlugins: [rehypeSlug, rehypePrism],
                                },
                            }}
                        />
                    </div>
                </div>
            </div>

        </article>
    );
}
