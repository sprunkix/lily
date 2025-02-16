import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog | Sprunki Lily',
  description: 'Read the latest news, updates, and stories about Sprunki Lily and the gaming community.',
  keywords: 'Sprunki Lily blog, gaming news, game updates, gaming community, Sprunki blog',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-primary mb-4">Blog</h1>
        <p className="text-lg text-text-secondary">
          Latest news, updates, and stories from the Sprunki Lily universe
        </p>
      </header>

      <div className="grid gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-xl shadow-sm p-8 border border-secondary/20 hover:shadow-md transition-shadow"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold text-text-primary mb-4 hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <div className="flex items-center text-text-secondary text-sm mb-4">
              <span className="mr-4">By {post.author}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            <p className="text-text-secondary mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/20 text-text-secondary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-primary hover:text-secondary transition-colors"
            >
              Read more
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}