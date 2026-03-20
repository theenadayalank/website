import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogFrontmatter {
  title: string;
  description?: string;
  date: string;
  tags?: string[];
  path?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  excerpt: string;
  content: string;
}

function getSlugFromPath(filePath: string): string {
  const base = path.basename(filePath, path.extname(filePath));
  return base === 'index' ? path.basename(path.dirname(filePath)) : base;
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const entries = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
  const slugs: string[] = [];
  for (const e of entries) {
    const full = path.join(CONTENT_DIR, e.name);
    if (e.isDirectory()) {
      const indexMd = path.join(full, 'index.md');
      const indexMdx = path.join(full, 'index.mdx');
      if (fs.existsSync(indexMd) || fs.existsSync(indexMdx)) slugs.push(e.name);
    } else if (e.name.endsWith('.md') || e.name.endsWith('.mdx')) {
      slugs.push(getSlugFromPath(full));
    }
  }
  return slugs;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const possiblePaths = [
    path.join(CONTENT_DIR, slug, 'index.md'),
    path.join(CONTENT_DIR, slug, 'index.mdx'),
    path.join(CONTENT_DIR, `${slug}.md`),
    path.join(CONTENT_DIR, `${slug}.mdx`),
  ];
  let rawPath: string | null = null;
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      rawPath = p;
      break;
    }
  }
  if (!rawPath) return null;
  const raw = fs.readFileSync(rawPath, 'utf-8');
  const { data, content } = matter(raw);
  const frontmatter = data as BlogFrontmatter;
  const pathSlug = frontmatter.path ?? slug;
  const excerpt = content.slice(0, 250).replace(/#+/g, '').trim();
  return {
    slug: pathSlug,
    frontmatter: { ...frontmatter, path: pathSlug },
    excerpt,
    content,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllSlugs();
  return slugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getLatestPosts(count: number = 3): BlogPost[] {
  return getAllPosts().slice(0, count);
}
