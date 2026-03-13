type Props = {
  searchParams: Promise<{ fail?: string }>;
};

export default async function ServerErrorPage({ searchParams }: Props) {
  const { fail } = await searchParams;

  if (fail === 'true') {
    throw new Error('Server-side test error.');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="font-bold text-2xl">Server Error Test</h1>
      <p className="text-gray-600">
        Add <code className="rounded bg-gray-100 px-2 py-1">?fail=true</code> to
        the URL to trigger a server error.
      </p>
      <a
        className="rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-red-700"
        href="/error-test/server?fail=true"
      >
        Trigger server error
      </a>
    </main>
  );
}
