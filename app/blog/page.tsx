import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';
import { site } from '@/lib/profile';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: `Blog posts by ${site.name}.`,
};

export default function BlogListPage() {
  const posts = getAllPosts();

  return (
    <div className="section-padding">
      <div className="container-narrow">
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">Blog</h1>
        <p className="mb-8 text-slate-600 dark:text-slate-400">All posts, sorted by date.</p>

        {posts.length === 0 ? (
          <p className="text-slate-500">No posts yet.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg border border-slate-200 p-5 transition-all hover:border-primary/30 hover:shadow-md dark:border-slate-700"
                >
                  <h2 className="mb-1 text-xl font-semibold text-slate-900 dark:text-white">
                    {post.frontmatter.title}
                  </h2>
                  <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                    {post.frontmatter.date}
                  </p>
                  <p className="line-clamp-2 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
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
