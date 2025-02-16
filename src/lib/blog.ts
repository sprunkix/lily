import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIRECTORY = path.join(process.cwd(), 'data', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const files = await fs.readdir(BLOG_DIRECTORY);
  return files
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(BLOG_DIRECTORY);
  const posts = await Promise.all(
    files
      .filter(file => file.endsWith('.md'))
      .map(async file => {
        const slug = file.replace(/\.md$/, '');
        return getBlogPost(slug);
      })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fullPath = path.join(BLOG_DIRECTORY, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await marked(content);

  return {
    slug,
    title: data.title,
    date: data.date,
    author: data.author,
    excerpt: data.excerpt,
    content: htmlContent,
    tags: data.tags || [],
  };
}