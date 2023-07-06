import * as z from 'zod';

export const agencyPatchSchema = z.object({
  fullName: z.string().min(3).max(128),
  shortName: z.string().min(3).max(30),
  slug: z.string().min(3).max(128),
  url: z.string().url(),
});
