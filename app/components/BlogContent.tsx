'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogContentProps {
  content: string;
  slug?: string;
}

function resolveImageSrc(src: string | undefined, slug?: string): string {
  if (!src) return '';
  if (src.startsWith('http') || src.startsWith('/')) return src;
  if (src.startsWith('./') && slug) return `/blog/${slug}/${src.slice(2)}`;
  if (slug) return `/blog/${slug}/${src}`;
  return src;
}

export function BlogContent({ content, slug }: BlogContentProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-primary hover:underline"
          >
            {children}
          </a>
        ),
        // eslint-disable-next-line @next/next/no-img-element
        img: ({ src, alt }) => (
          <span className="block my-4">
            <img
              src={resolveImageSrc(src, slug)}
              alt={alt ?? ''}
              className="rounded-lg max-w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </span>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
