import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts by Theenadayalan.',
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Blog
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          All posts, sorted by date.
        </p>

        {posts.length === 0 ? (
          <p className="text-slate-500">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg border border-slate-200 dark:border-slate-700 p-5 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">
                    {post.frontmatter.title}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                    {post.frontmatter.date}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8">
          <Link href="/" className="text-primary hover:underline">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
