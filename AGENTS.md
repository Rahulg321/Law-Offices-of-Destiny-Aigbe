# AGENTS.md

## Architecture

- **Next.js 14 App Router** site for a law firm, deployed on Vercel.
- **100% Prismic CMS** — every page is a Prismic document assembled from reusable Slices.
- **Path alias** `@/*` maps to the repo root (no `src/` directory).

## Commands

```bash
npm run dev           # next dev
npm run build         # clears .next/cache/fetch-cache then builds
npm run start         # next start
npm run lint          # next lint (extends next/core-web-vitals only)
npm run slicemachine  # starts Prismic Slice Machine for visual page building
```

## Prismic / Slice Machine

- **Repository name**: `aigbelaw` (configured in `slicemachine.config.json`).
- **`slices/index.ts` is auto-generated** by Slice Machine. Never edit it manually — it registers slices via `next/dynamic`.
- Every page fetches content via `createClient()` from `prismicio.ts`, then renders `<SliceZone slices={page.data.slices} components={components} />`.
- In development, Prismic fetches revalidate every 5s; in production, they use `force-cache` with a `"prismic"` tag for on-demand revalidation via `/api/revalidate`.

## Required environment variables

No `.env.example` exists. These are referenced in code:

| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_PRISMIC_ENVIRONMENT` | Overrides Prismic repository name |
| `PRISMIC_ACCESS_TOKEN` | Prismic API authentication |
| `RESEND_API_KEY` | Transactional email sending (contact form, job applications) |

## Page routing conventions

All dynamic `[uid]` routes follow this pattern:
- `app/blogs/[uid]/` → Prismic type `blogpost`
- `app/news/[uid]/` → Prismic type `news`
- `app/practice-areas/[uid]/` → Prismic type `practice_areas`
- `app/our-firm/[uid]/` → Prismic type `our_firm`
- `app/team-members/[uid]/` → Prismic type `team_member`
- `app/[uid]/` → Prismic type `page` (generic catch-all)

Each uses `generateStaticParams()` to pre-generate all pages at build time from `client.getAllByType(...)`.

## Forms & email

- **Server Actions** (`app/actions.ts`) handle contact form and career application submissions.
- Contact form uses **Resend** + React Email templates (`components/emails/`).
- Career application uploads resume files to **Vercel Blob** before emailing.
- Contact form validation schema is in `app/zod-schemas.ts` (Zod).

## UI / Styling

- **shadcn/ui** (New York style) on Tailwind CSS with CSS variables for theming.
- Dark mode via `next-themes` with `class` strategy.
- Custom color `--lucosky` (#003b6f) used as `text-mainC` for brand accent.
- `components/ui/` contains shadcn primitives (auto-installed via `npx shadcn-ui@latest add`).
- Custom reusable components live in `components/` (not in `components/ui/`).

## Fonts

`app/fonts.ts` imports 6 Google Fonts but only exports and uses **Work_Sans** and **Merriweather**. Do not import additional unused fonts — they increase bundle size.

## Slices vs Components

- **`slices/`**: Page-builder sections rendered by `<SliceZone>`. Each has `index.tsx`, `model.json`, `mocks.json`.
- **`components/`**: Reusable UI elements (cards, forms, layout pieces). Imported directly by slices or pages.

## Sitemap & SEO

- `app/sitemap.ts` generates a dynamic sitemap from all Prismic content types.
- `app/robots.ts` generates robots.txt.
- Blog posts include JSON-LD structured data (Article schema) in `app/blogs/[uid]/page.tsx`.
- OpenGraph images are static files at `app/opengraph-image.png` and `app/twitter-image.png`.

## Testing

No test infrastructure exists. There are no test configs, test files, or CI workflows.
