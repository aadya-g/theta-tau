import 'server-only';

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export type BlogPost = {
    slug: string;
    title: string;
    date: string;
    description: string;
    image: string;
    content: string;
};

// Must be async because HomeBlogSection awaits it
export async function getSortedPostsData(): Promise<BlogPost[]> {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            const slug = fileName.replace(/\.mdx$/, "");
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                content,
                ...(data as Omit<BlogPost, "slug" | "content">),
            };
        })
    );

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Can remain sync — this is allowed with `server-only`
export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => ({
        params: {
            slug: fileName.replace(/\.mdx$/, ""),
        },
    }));
}

export async function getPostData(slug: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        content,
        ...(data as Omit<BlogPost, "slug" | "content">),
    };
}
