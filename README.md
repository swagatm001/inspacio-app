# Inspacio website

Marketing site for [Inspacio Design](https://www.inspacio.in), a Bangalore architecture and interior design studio. Built with Next.js 14 (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

| Script          | What it does                      |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the dev server              |
| `npm run build` | Production build                  |
| `npm run start` | Serve the production build        |
| `npm run lint`  | Run ESLint (next/core-web-vitals) |
| `npm run blur`  | Regenerate blurred image previews (runs automatically before `build`) |

## Environment variables

| Variable                          | Used by                              |
| --------------------------------- | ------------------------------------ |
| `NEXT_PUBLIC_API_URL`             | `/api/sendmail` forwards contact form leads here |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Map on the contact page              |
| `NEXT_PUBLIC_SITE_URL`            | Canonical URLs, sitemap and Open Graph (defaults to `https://www.inspacio.in`) |

Put them in `.env.local` for local development.

## Where things live

- `src/app` routes: home, `/projects`, `/projects/[slug]`, `/services`, `/about`, `/contact`, plus `sitemap.ts` and `robots.ts`.
- `src/components` UI, grouped by section.
- `src/constants` all copy and data: projects, services, testimonials, awards, partners, the founder's story and site-wide details (`site.ts`).
- `src/hooks/useParallax.ts` the shared scroll parallax used by project images.
- `src/generated/blur-map.json` tiny previews for every local image, used for blur-up loading. Run `npm run blur` after adding images.
- `src/constants/instagram.ts` the six tiles in the footer strip; swap in post images and permalinks to show real posts.
- `public/images` local images, optimised at request time by Next.js. Older project photos are served from ImageKit by absolute URL (allowed in `next.config.mjs`).

## Editing content

Most text changes are data edits in `src/constants`. Adding a project means adding an entry to `projectsConstants` in `src/constants/projects.ts`; the sitemap picks it up automatically.

Keep new images reasonably sized (around 2000 px on the long edge is plenty). The hero video in `public/videos` should be a short loop, ideally under 5 MB.
