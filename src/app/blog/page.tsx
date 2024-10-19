import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/ui/nav-bar'
import Link from 'next/link'

export default function Blog() {
    return (
        <div className="min-h-screen bg-white text-gray-900">
            <section className="container mx-auto px-4 pt-32 pb-16">
                <h1 className="text-6xl font-bold text-center mb-8">Blog</h1>
                <p className="text-xl text-center mb-32">Read about our latest product and research announcements.</p>

                {/* Featured Article */}
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-16 relative max-w-5xl mx-auto">
                    <div className="absolute top-6 right-10">
                        <button className="flex items-center text-grey-600 transition duration-200 ease-in-out ">
                            <div className="flex items-center rounded-full border-2 border-gray-600 transition duration-200 ease-in-out hover:border-red-800 hover:translate-x-1 ">
                                <div className="h-12 w-12 flex items-center justify-center bg-white rounded-full transition duration-200 ease-in-out hover:bg-red-100 hover:text-red-800" >
                                    <ArrowRight className="h-7 w-7" />
                                </div>
                            </div>
                        </button>
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/2">
                            <Image
                                src="/placeholder.svg?height=600&width=600"
                                alt="Featured blog post image"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-6 flex flex-col justify-end">
                            <p className="text-gray-600 mb-2">August 13, 2024</p>
                            <Link href="#" className="text-3xl font-bold mb-4 transition  hover:text-red-800 hover:underline decoration-red-800">
                                Grok-2 Beta Release
                            </Link>
                            <p className="mb-4">
                                Grok-2 is our frontier language model with state-of-the-art reasoning capabilities.
                                This release includes two members of the Grok family: Grok-2 and Grok-2 mini.
                                Both models are now being released to Grok users on the X platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full h-[0.125px] bg-gray-300" />
            {/* All Blog Posts */}
            <section className="container mx-auto px-4 pt-32 pb-16">
                <h2 className="text-3xl font-bold mb-6">All blog posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            date: "May 26, 2024",
                            title: "Series B Funding Round",
                            description: "xAI is pleased to announce our series B funding round of $6 billion.",
                            image: "/placeholder.svg?height=300&width=400"
                        },
                        {
                            date: "April 12, 2024",
                            title: "Grok-1.5 Vision Preview",
                            description: "Connecting the digital and physical worlds with our first multimodal model.",
                            image: "/placeholder.svg?height=300&width=400"
                        },
                        {
                            date: "March 28, 2024",
                            title: "Announcing Grok-1.5",
                            description: "Grok-1.5 comes with improved reasoning capabilities and a context length of 128,000 tokens. Available on X soon.",
                            image: "/placeholder.svg?height=300&width=400"
                        },
                        {
                            date: "March 17, 2024",
                            title: "Open Release of Grok-1",
                            description: "We are releasing the weights and architecture of our 314 billion parameter Mixture-of-Experts model, Grok-1.",
                            image: "/placeholder.svg?height=300&width=400"
                        }
                    ].map((post, index) => (
                        <a key={index} href="#" className="block">
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
                        </a>
                    ))}
                </div>
            </section>
        </div>
    )
}


