import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getAllPostSlugs, getPostData } from "@/lib/blog"

import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return paths.map((path) => ({
    slug: path.params.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug)

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 pt-8 pb-16 max-w-5xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span className="font-medium">Back to Blog</span>
          </Link>

          {/* Post Header */}
          <div className="mb-8">
            <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">{post.date}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">{post.description}</p>
          </div>

          {/* Featured Image */}
          <div className="relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none 
                        prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
                        prose-p:text-muted-foreground prose-p:leading-relaxed
                        prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                        prose-pre:bg-card prose-pre:border prose-pre:border-border
                        prose-img:rounded-xl prose-img:shadow-md
                        prose-hr:border-border
                        prose-blockquote:border-l-accent prose-blockquote:text-muted-foreground prose-blockquote:italic
                        prose-ul:text-muted-foreground prose-ol:text-muted-foreground
                        prose-li:marker:text-accent"
          >
            <MDXRemote
              source={post.content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}
