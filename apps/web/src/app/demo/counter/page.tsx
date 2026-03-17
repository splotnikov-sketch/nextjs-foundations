import { Counter } from '@/components/counter';

function getServerTimestamp(): string {
  return new Date().toISOString();
}

export default function CounterPage() {
  const serverTimestamp = getServerTimestamp();

  return (
    <div className="p-8">
      <h1 className="mb-4 font-bold text-2xl">Counter</h1>

      <section className="mb-6 rounded-lg border p-6">
        <h2 className="font-semibold text-lg">Server-Rendered</h2>
        <p className='mt-2 text-gray-500 text-sm'>
          Generated at:{' '}
          <code className="font-mono text-xs">{serverTimestamp}</code>
        </p>
        <p className='mt-1 text-gray-500 text-sm'>
          This ships as HTML with zero JavaScript. It won't change when you
          click the counter.
        </p>
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="mb-4 font-semibold text-lg">Client Component</h2>
        <Counter initialCount={0} />
      </section>
    </div>
  );
}
