# shaheerbinijaz.com

Personal portfolio site for Shaheer Bin Ijaz — Senior Software Engineer
(Python backend, ETL & data, ML/CV, Solana).

Built with **Astro 4 + Tailwind 3**. Deployed on **Cloudflare Pages**.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static build into ./dist
npm run preview    # serve ./dist on localhost
```

## Editing content

All copy lives in [`src/content/site.ts`](src/content/site.ts).
Components consume from that file. Editing the site is editing that one file.

Writing rules in there are strict:

- No em dashes
- No banned AI vocabulary (delve, tapestry, leverage, seamless, robust, comprehensive, "in today's", "let's dive in")
- No triadic "X, Y, and Z" phrasing
- Active verbs only

## Deploy

Cloudflare Pages picks up `main` automatically.

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 20
