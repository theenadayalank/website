import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllSlugs, getPostBySlug } from '@/lib/blog';
import { BlogContent } from '@/components/BlogContent';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description ?? post.excerpt.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allSlugs = getAllSlugs();
  const idx = allSlugs.indexOf(slug);
  const prevSlug = idx > 0 ? allSlugs[idx - 1] : null;
  const nextSlug = idx >= 0 && idx < allSlugs.length - 1 ? allSlugs[idx + 1] : null;
  const prevPost = prevSlug ? getPostBySlug(prevSlug) : null;
  const nextPost = nextSlug ? getPostBySlug(nextSlug) : null;

  return (
    <article className="section-padding">
      <div className="container-narrow">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-primary hover:underline mb-8"
        >
          ← All Posts
        </Link>

        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
            {post.frontmatter.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">{post.frontmatter.date}</p>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose-blog">
          <BlogContent content={post.content} slug={post.slug} />
        </div>

        <footer className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Have any questions or comments? Email me at{' '}
            <a href="mailto:theenadayalan06@gmail.com" className="text-primary hover:underline">
              theenadayalan06@gmail.com
            </a>{' '}
            or find me on{' '}
            <a
              href="https://twitter.com/theenadayalan_k"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Twitter @theenadayalan_k
            </a>
            .
          </p>

          <nav className="flex flex-wrap justify-between gap-4">
            <div>
              {prevPost && (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="text-primary hover:underline"
                >
                  ← Previous: {prevPost.frontmatter.title}
                </Link>
              )}
            </div>
            <div className="text-right">
              {nextPost && (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="text-primary hover:underline"
                >
                  Next: {nextPost.frontmatter.title} →
                </Link>
              )}
            </div>
          </nav>
        </footer>
      </div>
    </article>
  );
}
