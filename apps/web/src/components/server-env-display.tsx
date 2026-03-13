// /apps/web/src/components/server-env-display.tsx

import { clientEnv } from '@/env/client';
import { serverEnv } from '@/env/server';

export function ServerEnvDisplay() {
  return (
    <div className="rounded border p-4">
      <h3 className="font-bold">Server Component Env Access</h3>
      <p>Public: {clientEnv.NEXT_PUBLIC_APP_NAME}</p>
      <p>Server-only: {serverEnv.INTERNAL_CONFIG}</p>
    </div>
  );
}
