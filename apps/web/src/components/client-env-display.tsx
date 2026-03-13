// /apps/web/src/components/client-env-display.tsx

'use client';

import { clientEnv } from 'env/client';
import { serverEnv } from 'env/server';
import { useState } from 'react';

export function ClientEnvDisplay() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => setClicks(clicks + 1);

  return (
    <div className="rounded border p-4">
      <h3 className="font-bold">Client Component</h3>
      <p>Public: {clientEnv.NEXT_PUBLIC_APP_NAME}</p>
      <p suppressHydrationWarning>Server-only: {serverEnv.INTERNAL_CONFIG || 'undefined'}</p>
      <button
        className="mt-2 rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
        onClick={handleClick}
        type="button"
      >
        Clicked {clicks} times
      </button>
    </div>
  );
}
