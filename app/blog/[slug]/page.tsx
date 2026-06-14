import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { BlogContent } from '@/components/BlogContent';
import { site, social } from '@/lib/profile';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return { title: 'Post not found' };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description ?? post.excerpt.slice(0, 160),
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const allPosts = getAllPosts();
  const post = allPosts.find((p) => p.slug === slug) ?? null;
  if (!post) notFound();

  const idx = allPosts.indexOf(post);
  // allPosts is newest-first: higher index = older. "Previous" = older, "Next" = newer.
  const prevPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const nextPost = idx > 0 ? allPosts[idx - 1] : null;

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
          <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            {post.frontmatter.title}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">{post.frontmatter.date}</p>
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {post.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
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

        <footer className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-700">
          <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">
            Have any questions or comments? Email me at{' '}
            <a href={`mailto:${site.email}`} className="text-primary hover:underline">
              {site.email}
            </a>{' '}
            or find me on{' '}
            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Twitter @theenadayalan_k
            </a>
            .
          </p>

          <nav aria-label="Post navigation" className="flex flex-wrap justify-between gap-4">
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
