# Arapai Technologies International Ltd — Company Website

Production-grade company website for **Arapai Technologies International Ltd** (Reg. No. 80034917013941, Uganda). Built with Next.js 16, Tailwind CSS v4, Framer Motion, and configured for static export.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (static export)
npm run build

# Preview the static output locally
npx serve out
```

The dev server runs at `http://localhost:3000`.

---

## Project Structure

```
website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar + Footer + fonts)
│   ├── page.tsx            # Home page (hero, stats, previews)
│   ├── about/              # About page
│   ├── services/           # Services page
│   ├── portfolio/          # Portfolio with filter
│   ├── team/               # Team page
│   └── contact/            # Contact form + info
├── components/             # Reusable UI components
│   ├── Navbar.tsx          # Sticky responsive navbar
│   ├── Footer.tsx          # Footer with registration details
│   ├── HeroSection.tsx     # Full-viewport animated hero
│   ├── StatsBanner.tsx     # Animated count-up statistics bar
│   ├── SectionHeader.tsx   # Reusable section title block
│   ├── ServiceCard.tsx     # Service domain card
│   ├── ProjectCard.tsx     # Project portfolio card
│   ├── ProjectFilter.tsx   # Filter buttons for portfolio
│   ├── TeamCard.tsx        # Team member + ghost cards
│   └── ContactForm.tsx     # mailto-based contact form
├── data/                   # Single source of truth for all content
│   ├── brand.ts            # Colour tokens (extracted from logo)
│   ├── company.ts          # Company name, reg number, contact info
│   ├── projects.ts         # All project data
│   ├── services.ts         # Service domains
│   └── team.ts             # Team members
└── public/                 # Static assets
    ├── logo.svg            # Arapai "A" logomark (SVG)
    ├── logo-mockup.jpg     # Office logo mockup photo
    ├── brand-identity.jpg  # Brand stationery photo
    └── team-benjamin.jpg   # Ssentongo Joshua Benjamin photo
```

---

## Updating Content

All editable content lives in `data/`. You never need to touch component or page files to update copy.

### Add or edit a project

Open [data/projects.ts](data/projects.ts) and add an entry to the `projects` array:

```ts
{
  id: "my-project",           // unique slug, kebab-case
  name: "My Project",
  category: "Software",       // must match a FilterCategory value
  description: "One paragraph summary.",
  status: "Active",           // Active | Concept | Research | Award-Winning
  tags: ["Tag1", "Tag2"],
  link: "https://...",        // optional external link
}
```

Valid categories: `IoT/Energy | AgriTech | FinTech | AI/ML | Education | Software`

### Add a team member

Open [data/team.ts](data/team.ts) and add to the `team` array:

```ts
{
  id: "firstname-lastname",
  name: "Full Name",
  role: "Title / Role",
  bio: "Two-sentence bio.",
  photo: "/team-firstname.jpg",   // place photo in public/
  linkedin: "https://linkedin.com/in/...",
  github: "https://github.com/...",
  skills: ["Skill 1", "Skill 2"],
}
```

Also set `openPositions` (at the bottom of team.ts) to the number of "Join Our Team" ghost cards to render.

### Update company details

Edit [data/company.ts](data/company.ts) — this is the canonical source for the legal name, registration number, contact email, tagline, and description used across every page.

### Update brand colours

If the logo is refreshed, edit [data/brand.ts](data/brand.ts). These tokens flow into [app/globals.css](app/globals.css) as CSS custom properties; every component references them via `var(--brand-*)`. No hex values appear anywhere except in `brand.ts` and `globals.css`.

### Update homepage stats

Open [components/StatsBanner.tsx](components/StatsBanner.tsx) and edit the `STATS` constant at the top of the file.

---

## Deployment — Vercel (Recommended)

1. Push the `website/` folder to a GitHub repository.
2. In Vercel: **New Project → Import** the repo.
3. Set the **Root Directory** to `website`.
4. Vercel auto-detects Next.js — no extra configuration needed.
5. Every push to `main` triggers an automatic redeploy.

**Custom domain:** Add your domain in Vercel **Settings → Domains**.

## Deployment — Static Export (any CDN)

The site is pre-configured with `output: 'export'` in [next.config.ts](next.config.ts).

```bash
npm run build        # produces /out directory
```

Upload the contents of `out/` to:
- **Netlify** — drag and drop `out/` into Netlify Drop, or connect the repo
- **GitHub Pages** — deploy `out/` to the `gh-pages` branch
- **AWS S3 + CloudFront** — sync `out/` to an S3 bucket with static website hosting enabled

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Orbitron (display) · DM Sans (body) · Space Mono (mono) via `next/font/google` |
| Output | Static export (`/out`) |

---

## Legal

© 2026 ARAPAI TECHNOLOGIES INTERNATIONAL LIMITED. All rights reserved.
Incorporated in Uganda under the Companies Act, 2012 — Registration No. 80034917013941.
