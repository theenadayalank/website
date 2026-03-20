import Link from 'next/link';
import { getLatestPosts } from '@/lib/blog';

export async function FeaturedBlogs() {
  const posts = getLatestPosts(3);

  if (posts.length === 0) {
    return (
      <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900/50">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
            BLOG
          </h2>
          <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
          <p className="text-center text-slate-600 dark:text-slate-400">
            No posts yet. Visit later!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="container-wide">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-2">
          FEATURED BLOGS
        </h2>
        <div className="w-12 h-0.5 bg-primary mx-auto mb-4" />
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          <em>Latest posts</em>
        </p>

        <ul className="space-y-6 max-w-2xl mx-auto">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-5 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                  {post.frontmatter.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
                  {post.frontmatter.date}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-center mt-8">
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
