# AGENTS.md

Guidance for AI agents working on this portfolio.

## Project
Personal portfolio of Roandyell Khen Dagoy. Vite + React 19 + Tailwind CSS v4 (+ daisyUI). Deployed to GitHub Pages. Contact form uses EmailJS.

## Commands
- `npm install` - install deps
- `npm run dev` - dev server (http://localhost:5173)
- `npm run build` - production build to `dist/`
- `npm run preview` - serve the build

## Source of truth for copy
All user-facing text lives in `contents.md` (human-readable) and is mirrored in `src/data/content.js` (used by components). When changing copy, update both. Never invent facts (employers, dates, metrics, certifications). If something is unknown, leave a `TODO:` in `contents.md` and ask the user.

## Design system: "Bond clay" (light)
Theme: James Bond, light edition - cream white page, tuxedo-ink, gold - rendered as subtle claymorphism.

**Exactly three colors** (plus tints/shades of them):
| Role | Token | Value | Share |
|---|---|---|---|
| Base | `--base-color` | `#efe8d8` cream white (page) | 60% |
| Primary | `--primary-color` | `#1a1c22` tuxedo ink (text, headings, gold-button labels) | 30% |
| Accent | `--accent-color` | `#c9a227` gold | 10% |
Tints/shades allowed: card surface `#f8f4ea` (lighter cream), secondary text `#55524a`, darker gold `#8a6d12` for gold TEXT on cream (AA contrast). On ink surfaces use cream text and bright gold `#d4af37`.

Rules:
- Do not add new hues. Use opacity/shade of the three only.
- Gold is for key actions, highlights and the 007-style details only.
- Light comes from the top-left; use `.clay` (cream card), `.clay-gold`, `.clay-inset`, `.btn-clay` in `src/index.css`. Inputs are inset, cards/buttons are raised.
- Keep the clay effect subtle: soft shadows, moderate radii (`0.75rem` cards, `0.5rem` buttons/inputs), no floating decorations. Keep text contrast >= WCAG AA.
- Light and dark modes via a `.dark` class on `<html>` (toggle in navbar, saved in localStorage, defaults to system preference). Same three colors, roles inverted in dark: ink page `#14151a`, cream text `#f5efe0`, card surface `#1e2027`, bright gold `#d4af37` for text. All colors go through CSS variables in `src/index.css`; never hard-code colors in components.
- Respect `prefers-reduced-motion`.
- Fonts: Cinzel (headings, Bond-title feel), Inter (body) - loaded in `index.html`.
## Positioning
The portfolio sells services first (hire-me focus): Hero -> Services -> Projects (proof of work) -> About -> Skills -> Contact. Primary CTA is "Request a Quote" -> `#contact`. Keep copy client-oriented (outcomes, process), and never invent pricing, clients, or testimonials.

## Code conventions
- Functional components in `src/components`, data in `src/data`, hooks in `src/hooks`.
- Prefer Tailwind utilities + the shared clay classes; no inline styles.
- Images live in `public/images` and are referenced as `/images/...`.
- Secrets: `.env` holds `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`. Never commit or print values.

## Before finishing a task
Run `npm run build` and confirm it passes.




