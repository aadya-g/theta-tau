import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

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
                {featuredPost && (
                    <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-12 relative max-w-5xl mx-auto">
                        <Link href={`/blog/${featuredPost.slug}`} className="absolute top-6 right-10">
                            <div className="flex items-center rounded-full border-2 border-gray-600 transition duration-200 ease-in-out hover:border-red-800 hover:translate-x-1">
                                <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full transition duration-200 ease-in-out hover:bg-red-100 hover:text-red-800">
                                    <ArrowRight className="h-7 w-7" />
                                </div>
                            </div>
                        </Link>
                        <div className="flex flex-col md:flex-row min-h-[500px]">
                            <div className="md:w-1/2">
                                <Image
                                    src={featuredPost.image}
                                    alt={`Featured image for ${featuredPost.title}`}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="md:w-1/2 p-6 pt-32 flex flex-col justify-end">
                                <p className="text-gray-600 mb-2">{featuredPost.date}</p>
                                <Link
                                    href={`/blog/${featuredPost.slug}`}
                                    className="text-3xl font-bold mb-4 transition hover:text-red-800 hover:underline decoration-red-800"
                                >
                                    {featuredPost.title}
                                </Link>
                                <p className="mb-4">{featuredPost.description}</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            <div className="w-full h-[0.125px] bg-gray-300" />

            {/* All Blog Posts */}
            <section className="container mx-auto px-4 pt-32 pb-16">
                <h2 className="text-3xl font-bold mb-6">All blog posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {remainingPosts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                            <div className="bg-white rounded-lg overflow-hidden shadow-md">
                                <Image
                                    src={post.image}
                                    alt={`Blog post image for ${post.title}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-gray-600 mb-2">{post.date}</p>
                                    <h3 className="text-xl font-semibold mb-2 transition duration-200 ease-in-out hover:text-red-800 hover:underline decoration-red-800">
                                        {post.title}
                                    </h3>
                                    <p className="mb-4">{post.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}