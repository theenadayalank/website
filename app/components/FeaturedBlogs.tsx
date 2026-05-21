import Link from 'next/link';
import { getLatestPosts } from '@/lib/blog';
import { SectionHeading } from './SectionHeading';

export async function FeaturedBlogs() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) {
    return (
      <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-wide">
          <SectionHeading title="BLOG" />
          <p className="text-center text-slate-600 dark:text-slate-400">No posts yet. Visit later!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-wide">
        <SectionHeading title="FEATURED BLOGS" subtitle="Latest posts" />

        <ul className="mx-auto max-w-2xl space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 bg-white p-5 transition-all hover:border-primary/30 hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
              >
                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                  {post.frontmatter.title}
                </h3>
                <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
                  {post.frontmatter.date}
                </p>
                <p className="line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
          >
            View all blogs →
          </Link>
        </p>
      </div>
    </section>
  );
}
