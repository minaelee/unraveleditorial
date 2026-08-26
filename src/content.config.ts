// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content'
import { z } from 'astro/zod'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// No content collections are required for this site. The `projects` collection
// was removed because the site does not use `src/content/projects/`.
// If you want to re-enable it in the future, define the collection again.
export const collections = {}
