import { MetadataRoute } from 'next';
import { getAllSlugs } from '@/lib/blog';

const BASE = 'https://www.theenadayalan.me';

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const blogUrls = slugs.map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...blogUrls,
  ];
}
