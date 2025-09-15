# Clark.Land

A modern, mobile-first link tree website built with Astro and Tailwind CSS.

## 🏗️ Architecture

This project follows Astro best practices with a component-based architecture:

```
src/
├── layouts/
│   └── Layout.astro          # Main page layout with head/body structure
├── components/
│   ├── ProfileHeader.astro   # Profile avatar, name, and tagline
│   ├── SocialLinks.astro     # Horizontal social media links
│   ├── FeaturedCTA.astro     # Prominent featured call-to-action
│   ├── LinkCard.astro        # Vertical CTA link card component
│   └── Footer.astro          # Site footer with copyright
├── content/
│   ├── config.ts             # Schema definitions for content collections
│   └── profile/
│       └── clark.mdx         # Profile data and content
└── pages/
    └── index.astro           # Main page composition
```

## 🎨 Components

### Layout (`src/layouts/Layout.astro`)
- Reusable page layout with SEO meta tags
- Responsive viewport configuration
- Google Fonts integration
- Gradient background styling

### ProfileHeader (`src/components/ProfileHeader.astro`)
- Displays profile avatar or initials
- Configurable name and tagline
- Supports custom avatar images

### SocialLinks (`src/components/SocialLinks.astro`)
- Horizontal layout for social media icons
- Circular glassmorphism-styled buttons
- Hover animations with scale effects
- Tooltips showing platform names

### FeaturedCTA (`src/components/FeaturedCTA.astro`)
- Eye-catching gradient border design
- Larger size with prominent positioning
- Animated glow effect and scale transforms
- Perfect for driving primary conversions

### LinkCard (`src/components/LinkCard.astro`)
- Vertical CTA and website links
- Glassmorphism-styled link buttons
- SVG icon support
- Hover animations and micro-interactions
- External link handling with proper `target` and `rel` attributes

### Footer (`src/components/Footer.astro`)
- Dynamic copyright year
- Minimal, clean styling

## 📊 Content Collections

This project uses Astro's Content Collections API for type-safe content management:

### Content Structure
```
src/content/
├── config.ts              # Content collection schema definitions  
└── profile/
    └── clark.mdx          # Profile data and links in MDX format
```

### Schema Definition (`src/content/config.ts`)
```typescript
const profileCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    initials: z.string(),
    avatar: z.string().optional(),
    links: z.array(z.object({
      title: z.string(),
      href: z.string(),
      icon: z.string(),
    })),
  }),
});
```

### Content File (`src/content/profile/clark.mdx`)
The profile data is stored as frontmatter in an MDX file, allowing for both structured data and rich content:

```yaml
---
name: "Clark Sell"
tagline: "Founder - Unspecified"
initials: "C"
socialLinks:
  - title: "Twitter"
    href: "#"
    icon: '<svg>...</svg>'
  - title: "LinkedIn"
    href: "#"
    icon: '<svg>...</svg>'
  # ... more social links
featuredCta:
  title: "🚀 Book a Strategy Call"
  href: "#"
  icon: '<svg>...</svg>'
ctaLinks:
  - title: "My Website"
    href: "#"
    icon: '<svg>...</svg>'
  - title: "Book a Call"
    href: "#"
    icon: '<svg>...</svg>'
  # ... more CTA links
---

# Welcome to Clark.Land
Your content goes here...
```

### Usage in Pages
```typescript
import { getEntry } from 'astro:content';

const profileEntry = await getEntry('profile', 'clark');
const { name, tagline, socialLinks, ctaLinks } = profileEntry?.data || {};
```

## 🎯 Features

- **Dual Layout System**: Horizontal social links + vertical CTAs for optimal UX
- **Content Collections**: Type-safe content management with Astro's native API
- **MDX Support**: Rich content authoring with Markdown + components
- **Component Reusability**: Modular components for easy maintenance and customization
- **TypeScript Support**: Type-safe component props and data structures
- **Schema Validation**: Zod-powered content validation at build time
- **Mobile-First Design**: Responsive layout optimized for mobile devices
- **Modern UI**: Glassmorphism effects with backdrop blur and subtle animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: Semantic markup and proper link attributes

## 📱 Layout Structure

The page follows a clean, hierarchical layout:

1. **Profile Header** - Avatar/initials, name, and tagline
2. **Social Links** - Horizontal row of circular social media buttons
3. **Featured CTA** - Eye-catching primary call-to-action with gradient styling
4. **CTA Links** - Vertical stack of secondary call-to-action buttons  
5. **Footer** - Copyright and branding

This structure creates a clear conversion funnel: social discovery → primary action → secondary actions, maximizing the effectiveness of your most important CTA while maintaining easy access to other resources.

## 🛠️ Customization

1. **Update Profile**: Edit the frontmatter in `src/content/profile/clark.mdx`
2. **Add/Remove Social Links**: Modify the `socialLinks` array for horizontal social buttons
3. **Set Featured CTA**: Update the `featuredCta` object for your primary conversion goal
4. **Add/Remove CTAs**: Modify the `ctaLinks` array for vertical call-to-action buttons
5. **Add Content**: Write Markdown content below the frontmatter
6. **Change Styling**: Update Tailwind classes in components
7. **Add New Components**: Create reusable components following the established patterns
8. **Multiple Profiles**: Create additional MDX files in `src/content/profile/`

## 🚀 Development

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

**Note**: Requires Node.js >=18.20.8 to run the development server.

## 📱 Mobile Optimization

- Maximum width container (max-w-md) for optimal mobile viewing
- Touch-friendly button sizes and spacing
- Smooth hover and active state transitions
- Responsive typography and spacing

This refactored architecture makes the codebase more maintainable, reusable, and follows Astro's component-first approach.
