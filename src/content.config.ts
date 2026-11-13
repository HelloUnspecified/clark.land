import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const link = z.object({ title: z.string(), href: z.string() });

/**
 * clark.land is Clark's link page and virtual business card. In order: who he is (portrait, name, bio,
 * socials), Residual, Troth, how to reach him, and kind words that back it up.
 */
const profile = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/profile' }),
  schema: z.object({
    name: z.string(),
    /** Under the name, beside the portrait. */
    byline: z.string(),
    /** The bio: one line set large, then a few plain sentences. */
    lead: z.string(),
    bio: z.string(),
    description: z.string(),
    keywords: z.string(),
    email: z.email(),
    location: z.string(),

    /** Clark's personal accounts, shown as a row of icons under the bio (see SocialIcon.astro). */
    socials: z.array(
      z.object({ title: z.string(), icon: z.enum(['instagram', 'linkedin', 'x', 'threads', 'tiktok', 'youtube']), href: z.string() }),
    ),

    /** The two apps: status, why it matters, the action, and a few smaller links. */
    residual: z.object({ status: z.string(), line: z.string(), appStore: z.url(), site: z.url(), more: z.array(link) }),
    troth: z.object({ status: z.string(), line: z.string(), site: z.url(), more: z.array(link) }),

    contact: z.object({ sentence: z.string(), speaking: z.string() }),

    /** Short verbatim excerpts from people Clark has helped, across everything he does. Never reword them. */
    testimonials: z.array(z.object({ name: z.string(), role: z.string(), quote: z.string(), image: z.string() })),
  }),
});

export const collections = { profile };
