# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

clark.land is Clark Sell's link page and virtual business card: the URL in his social bios, and what he tells people in conversation ("you can get to all my stuff at clark.land"). Most visitors arrive on a phone, inside Instagram's or another app's in-app browser, so it's built mobile-first. At 390×664 (roughly the Instagram in-app browser on an iPhone) the first screen shows who Clark is, his socials, Residual with its App Store badge, and the top of the Troth card; Troth's waitlist form sits just below. Today that's **Residual** (residual.fit, live on the App Store) and **Troth** (jointroth.co, waitlist). Both are made by Unspecified Software Co. (unspecified.io). re/Human and the old coaching/strategy-review funnel are past work; don't bring them back.

## Commands

```bash
npm run dev       # dev server at http://localhost:4321
npm run build     # static build to dist/
npm run preview   # preview the build
npm run check     # astro check (types)
npm run og        # with the dev server running: renders /og into public/og.png (needs Google Chrome)
```

Needs Node 22.23.4 or newer (Astro 7). `.node-version` pins one; `fnm use` picks it up. Deployed on Cloudflare as a static site; `public/_headers` sets security headers.

## Stack

- Astro 7, fully static, `.astro` components only. Client JS is small inline scripts: section entrances, the Troth waitlist form, PostHog and its outbound-click tracking.
- Tailwind CSS 4 via `@tailwindcss/vite`. No `tailwind.config`; tokens live in `src/styles/global.css` under `@theme`.
- Fonts: four files (Inter 400/600, Inter Tight 600/700 via @fontsource). Adding a weight costs ~23 KB on a phone.
- `@astrojs/sitemap` writes `sitemap-index.xml`; `/og` is filtered out.

## Design direction

**What matters, in Clark's order:** his social links, his bio, Residual, Troth, how to reach him, and testimonials from across everything he and Carrie do. A visitor should leave knowing who he is, where to find him, what the apps are, where to get them, and that people vouch for him.

- **Who:** Clark's own portrait (it's his page; don't swap it for another photo), his name, "Founder, Unspecified Software Co.", then the bio: "I'm passionate about health and relationships" set large, and a few plain sentences (he and Carrie build software for people and the connections between them; THAT Conference is only a line of credibility here). His socials sit right under the bio as a row of icons (`SocialIcon.astro`, Tabler Icons' outline brand set from `@tabler/icons`, MIT; each link has an `aria-label`).
- **Residual:** live on the App Store. It's important because it's how Clark lost the weight, and you have to be at your best to show up as your best for the people you love. App Store badge, plus a small link to residual.fit. Its newsletter is just product updates, so it isn't featured.
- **Troth:** not launched. It's what Clark wishes he and Carrie had for their marriage, and it will offer more than the app, so its card carries the waitlist form plus small links to Brick by Brick (the letters) and the free first exercise.
- **Say hello:** email (hello@unspecified.io) as the big button, and "Ask me to speak at your event".
- **Kind words:** short verbatim excerpts, from anything Clark has done.

Keep it a business card: one narrow column (608px) at every width, about 220 words, no story sections, no galleries, no toys, no QR code. THAT Conference is over; don't give it a section. If something new needs a place, it replaces something.

Spacing uses one scale: 8 and 16 inside a group, 24 inside a card and as the page gutter, 48 between groups, 96 between sections. Nothing else.

Warm and light: a bone paper ground (`ground`), ink text (`ink`), `soft` for secondary text, `surface`/`surface-2` tone steps for cards and fields, red `accent` on Troth's waitlist button and nowhere else. The email button is ink.

House rules (from the design-taste-frontend skill; run its `lint.mjs` after changes, which is clean):
- No eyebrow labels, no monospace, no tiny uppercase tracked labels, no 01/02/03 numbering.
- No hairline rules or 1px outlined boxes; separate with space or a tone step.
- No shadows at rest, no gradients, no glass.
- Five type sizes only: small 14, body 17, lead 22, head 28, and the name at 40. Body text is never under 16px.
- Headings two lines or fewer at every width.
- Square corners everywhere (Apple's badge keeps its own).
- Section entrances use `data-in` (hidden only under `html.js`, so content never depends on JS); the first screen uses the CSS `arrive` utility.

The skill's `inspect.mjs` scores award-style landing pages (lots of large pictures, a dominant hero, full desktop screens, motion everywhere). A business card fails several of those checks on purpose (`few-pictures`, `focal-point`, `empty-screens`, `still-page`). Use its screenshots, not its verdict.

The Residual badge is Apple's official "Download on the App Store" SVG (`public/app-store/download-black.svg`, from developer.apple.com; never redraw or recolor it). The footer uses the real Unspecified wordmark (`public/brand/unspecified-logo.svg`, from unspecified.io).

## Troth waitlist form

`TrothSignup.astro` posts straight to the Loops form endpoint jointroth.co uses (Loops allows cross-origin posts) with Troth's waitlist list IDs and `source: clark.land`. Double opt-in still applies. The endpoint and list IDs are copied from `jointroth.com/src/pages/api/subscribe.ts` and `src/lib/loops.ts`; if those change there, change them here. Without JS the form submits as a GET to jointroth.co.

## Analytics

PostHog is trimmed to page views plus a `link_clicked` event for every outbound tap (`Layout.astro`; label from `data-track`) and `troth_waitlist_signup`. Session recording, surveys, autocapture and dead-click capture are off. Outbound links to our own sites carry `utm_source=clark.land`. For App Store install attribution, replace the Residual `href` in `clark.mdx` with a campaign link from App Store Connect.

## Content

All content is frontmatter in `src/content/profile/clark.mdx`, validated by `src/content.config.ts` (Content Layer, `glob` loader, `z` from `astro/zod`): `name`, `byline`, `lead` and `bio`, `socials`, `residual` and `troth` (`status`, `line`, links, and `more` for the small extra links), `contact`, and `testimonials` (short verbatim excerpts, never reworded).

Contact is email only: hello@unspecified.io. No contact card download. If the name, bio line or apps change, update `src/pages/og.astro` and re-run `npm run og`.

## Page order

`src/pages/index.astro`: portrait, name, byline → bio → socials → Residual card → Troth card → Say hello → Kind words → footer (Unspecified wordmark).
