import type { Metadata } from 'next';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import ShareButtons from '@/components/share/ShareButtons';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  return {
    title: `${post.title} | Sprunki Lily Blog`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8 border border-secondary/20">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-text-primary mb-4">{post.title}</h1>
            <div className="flex items-center text-text-secondary text-sm mb-4">
              <span className="mr-4">By {post.author}</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-accent/20 text-text-secondary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div 
            className="prose prose-lg prose-primary max-w-none mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="border-t border-secondary/20 pt-8 mt-8">
            <ShareButtons
              url={`/blog/${post.slug}`}
              title={post.title}
              description={post.excerpt}
            />
          </footer>
        </div>
      </article>
    </div>
  );
}