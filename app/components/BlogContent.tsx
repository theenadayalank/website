'use client';

import Image from 'next/image';
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
        img: ({ src, alt }) => {
          const resolvedSrc = resolveImageSrc(src, slug);
          const isLocal = resolvedSrc.startsWith('/') && !resolvedSrc.startsWith('//');
          if (isLocal) {
            return (
              <span className="block my-4 relative w-full min-h-[200px] max-w-2xl">
                <Image
                  src={resolvedSrc}
                  alt={alt ?? 'Blog image'}
                  width={672}
                  height={378}
                  className="rounded-lg w-full h-auto object-contain"
                  sizes="(max-width: 768px) 100vw, 672px"
                />
              </span>
            );
          }
          return (
            <span className="block my-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolvedSrc || ''}
                alt={alt ?? ''}
                className="rounded-lg max-w-full h-auto"
                loading="lazy"
                decoding="async"
              />
            </span>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
