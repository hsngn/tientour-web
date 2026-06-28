import { defineCollection, z } from 'astro:content';

const loc = z.object({
  title: z.string(), summary: z.string(),
  highlights: z.array(z.string()),
  itinerary: z.array(z.object({ title: z.string(), text: z.string() })),
  inclusions: z.array(z.string()),
  exclusions: z.array(z.string()),
  faq: z.array(z.object({ q: z.string(), a: z.string() })),
  seoTitle: z.string(), seoDesc: z.string(),
});

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    durationDays: z.number(),
    priceFrom: z.number(),
    currency: z.string().default('EUR'),
    difficulty: z.enum(['easy', 'moderate', 'challenging']),
    image: z.string(),               // placeholder name -> remplacer par vraies photos
    order: z.number().default(100),
    en: loc, fr: loc,
  }),
});

export const collections = { tours };
