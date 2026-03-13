'use client';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="font-bold text-2xl">Something went wrong</h1>
      <p className="text-gray-600">
        {error.message || 'An unexpected error occurred.'}
      </p>
      {error.digest && (
        <p className='text-gray-400 text-sm'>Error ID: {error.digest}</p>
      )}
      <button
        className="rounded bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </main>
  );
}
