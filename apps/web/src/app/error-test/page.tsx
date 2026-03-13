'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ErrorTestPage() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('This is a test error triggered by the user.');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="font-bold text-2xl">Error Boundary Test</h1>
      <p className="text-gray-600">
        Click the button below to throw an error and trigger the error boundary.
      </p>

      <div className="flex gap-4">
        <button
          className="rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
          onClick={() => setShouldThrow(true)}
          type="button"
        >
          Throw error
        </button>

        <Link
          className="rounded bg-gray-600 px-4 py-2 text-white transition-colors hover:bg-gray-700"
          href="/this-page-does-not-exist"
        >
          Trigger 404
        </Link>
      </div>
    </main>
  );
}
