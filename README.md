# www.theenadayalan.me

Portfolio and blog built with Next.js 14 (App Router), React 18, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **React**: 18.x
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Content**: Markdown (gray-matter) for blog posts
- **Package Manager**: pnpm

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

## Installation

```bash
git clone <repository-url>
cd website
pnpm install
```

## Running / Development

```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Build

```bash
pnpm build
```

### Where does the build go?

| Path | Purpose |
|------|---------|
| **`.next/`** | **`pnpm build` writes here.** Compiled app, server bundles, static assets for production. This folder is **not** committed to git. Run `pnpm start` to serve it. |
| **`public/`** | **Static files you add** (images, PDF, `favicon.ico`). Next.js serves them at the site root (e.g. `public/img/x.jpg` → `/img/x.jpg`). **Build output is never written into `public/`.** |
| **`out/`** | Only if you enable [static export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports) (`output: 'export'` in `next.config`). Then `pnpm build` produces a static site in `out/`, still **not** in `public/`. |

So: **`public/` = your static assets only; `.next/` = build output.**

## Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout, metadata
│   ├── page.tsx         # Homepage (single-page portfolio)
│   ├── globals.css
│   ├── components/      # UI components
│   ├── lib/             # Blog helpers, projects data
│   ├── blog/
│   │   ├── page.tsx     # Blog index
│   │   └── [slug]/      # Individual post
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── content/blog/        # Markdown posts
└── public/
    ├── img/             # profile.jpg, header-bg.jpg
    └── Theenadayalan_Resume.pdf
```

## Manual Setup

1. **Images**: Add to `public/img/`:
   - `profile.jpg` – About section photo
   - `header-bg.jpg` – Hero background

2. **Resume**: Add `Theenadayalan_Resume.pdf` to `public/` for the Hero download link.

3. **Blog images**: For posts with images (e.g. `![alt](./image.jpg)`), place files in `public/blog/[slug]/` and reference as `/blog/[slug]/image.jpg` or use relative `./image.jpg` (requires files in `public/blog/[slug]/`).

4. **Contact form**: Wire `app/components/ContactForm.tsx` to Formspree or EmailJS.

## Deploy (Vercel)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Build command: `pnpm build`
4. Deploy

## Author

**Theena Dayalan** – [theenadayalan.me](https://www.theenadayalan.me)

## License

MIT © [Theena Dayalan](https://www.theenadayalan.me)
