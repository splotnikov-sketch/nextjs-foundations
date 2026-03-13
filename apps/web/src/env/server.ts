// env/server.ts
import 'server-only'; 

import { z } from 'zod';

const schema = z.object({
  INTERNAL_CONFIG: z.string(),
  VERCEL_OIDC_TOKEN: z.string(),
  DATABASE_URL: z.string(),
});

export const serverEnv = schema.parse(process.env);