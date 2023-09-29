// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
const skillSchema = z.object({
  title: z.string(),
  primary: z.boolean(),
});
// 2. Define your collection(s)
const skillsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    items: z.array(skillSchema),
    order: z.number(),
  }),
  /* ... */
});

const expCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    skills: z.array(z.string()),
  }),
  /* ... */
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  skills: skillsCollection,
  experience: expCollection,
};
