# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 14** law firm website (Aigbe Law) using Prismic CMS, Tailwind CSS, shadcn/ui, and GSAP animations.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Slice Machine | `npm run slicemachine` (port 9999, optional) |

### Services

- **Next.js dev server** (required): `npm run dev` — all page content is fetched from Prismic CMS at build/request time.
- **Prismic CMS** (external SaaS): Content source. Repository name is `aigbelaw`. No access token is required for public content in dev mode.
- **Resend** (optional): Email API for contact/career forms. Only needed if testing form submissions. Requires `RESEND_API_KEY` env var.
- **Vercel Blob** (optional): Resume uploads on career form. Requires `BLOB_READ_WRITE_TOKEN` env var.

### Non-obvious notes

- The build script (`npm run build`) clears the fetch cache first (`rm -rf .next/cache/fetch-cache`).
- No `.nvmrc` or `.node-version` file exists; the project works with Node.js v22.
- No test framework is configured — there are no automated tests in this codebase.
- The dev server takes ~10 seconds to compile on first request. Allow time before checking `localhost:3000`.
- No databases, Docker, or local services are required — this is a JAMstack app with external SaaS dependencies only.
