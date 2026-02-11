import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional().default(''),
    featuredpost: z.boolean().optional().default(false),
    featuredimage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional().default(''),
    featuredpost: z.boolean().optional().default(false),
    featuredimage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { blog, casestudies };
