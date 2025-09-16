# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is an Astro project with Tailwind CSS and MDX support. Use these commands for development:

```bash
npm run dev       # Start development server at http://localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build locally
```

**Note**: Requires Node.js >=18.20.8 to run the development server.

## Architecture Overview

Clark.Land is a modern link tree website built with Astro's component-based architecture and content collections for type-safe data management.

### Tech Stack
- **Astro**: Static site generator with component islands
- **Tailwind CSS**: Utility-first styling with custom primary color palette and dark mode support
- **MDX**: Markdown with JSX components for rich content authoring
- **TypeScript**: Strict type checking enabled via `astro/tsconfigs/strict`
- **Zod**: Runtime schema validation for content collections

### Content Collections System

The site uses Astro's Content Collections API for structured, type-safe content management:

**Schema Definition** (`src/content/config.ts`):
- `profileCollection`: Main profile data with links, testimonials, and client information
- Nested schemas for links, testimonials, and clients with Zod validation
- Optional fields for avatar, about section, testimonials, and clients

**Content Structure**:
- Profile data stored in `src/content/profile/clark.mdx` as frontmatter
- MDX format allows both structured data and rich Markdown content
- Content accessed via `getEntry('profile', 'clark')` in components

### Component Architecture

**Layout System**:
- `src/layouts/Layout.astro`: Base layout with SEO meta tags, Google Fonts (Sora), and gradient background
- Responsive design with mobile-first approach using `max-w-md` container

**Core Components**:
- `ProfileHeader.astro`: Avatar/initials display with name and tagline
- `SocialLinks.astro`: Horizontal social media icons with glassmorphism styling
- `FeaturedCTA.astro`: Primary call-to-action with gradient border and glow effects
- `LinkCard.astro`: Vertical CTA buttons with hover animations
- `AboutMe.astro`: About section with profile picture and bio text
- `Testimonials.astro`: Customer testimonials with images and quotes
- `ClientLogos.astro`: Client logo display grid
- `Footer.astro`: Simple footer with dynamic copyright year

### Styling Approach

**Tailwind Configuration**:
- Custom `primary` color palette (sky blue variants)
- Dark mode support via `class` strategy
- Custom font family: Sora with system fallbacks
- Content scanning includes all Astro, MDX, and component files

**Design Patterns**:
- Glassmorphism effects with `backdrop-blur` and transparent backgrounds
- Hover animations using `scale` transforms and `transition-transform`
- Responsive spacing and typography
- Touch-friendly button sizes for mobile

### Content Management Workflow

To update site content:
1. Edit the frontmatter in `src/content/profile/clark.mdx`
2. Modify `socialLinks` array for social media buttons
3. Update `featuredCta` object for the primary conversion button
4. Edit `ctaLinks` array for secondary action buttons
5. Add/modify testimonials, clients, or about information
6. Add Markdown content below the frontmatter for additional pages

### Page Structure Flow

The main page (`src/pages/index.astro`) follows this layout hierarchy:
1. Profile Header (avatar, name, tagline)
2. Social Links (horizontal social media row)
3. Featured CTA (primary call-to-action)
4. About Me section (bio and profile picture)
5. Testimonials (customer feedback)
6. Client Logos (past work showcase)
7. CTA Links (vertical secondary actions)
8. Footer (copyright and branding)

This structure creates a clear conversion funnel optimized for mobile viewing.