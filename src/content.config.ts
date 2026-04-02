import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    description: z.string().optional().default(''),
    featuredpost: z.boolean().optional().default(false),
    featuredimage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    author: z.string().optional().default('DoneOps Team'),
  }),
});

const casestudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casestudies' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateModified: z.coerce.date().optional(),
    description: z.string().optional().default(''),
    featuredpost: z.boolean().optional().default(false),
    featuredimage: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    author: z.string().optional().default('DoneOps Team'),
  }),
});

export const collections = { blog, casestudies };
