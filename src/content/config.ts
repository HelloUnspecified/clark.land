import { defineCollection, z } from 'astro:content';

const linkSchema = z.object({
  title: z.string(),
  href: z.string(),
  icon: z.string(),
});

const testimonialSchema = z.object({
  name: z.string(),
  company: z.string(),
  role: z.string(),
  quote: z.string(),
  image: z.string().optional(),
});

const clientSchema = z.object({
  name: z.string(),
  logo: z.string(),
  website: z.string().optional(),
});

const profileCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    initials: z.string(),
    avatar: z.string().optional(),
    socialLinks: z.array(linkSchema),
    featuredCta: linkSchema.optional(),
    ctaLinks: z.array(linkSchema),
    about: z.object({
      title: z.string(),
      company: z.string(),
      bio: z.string(),
      picture: z.string().optional(),
    }).optional(),
    testimonials: z.array(testimonialSchema).optional(),
    clients: z.array(clientSchema).optional(),
  }),
});

export const collections = {
  profile: profileCollection,
};