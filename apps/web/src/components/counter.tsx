// src/components/counter.tsx
'use client';

import { useState } from 'react';

interface CounterProps {
  initialCount: number;
}

export function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="flex items-center gap-4">
      <button
        className="rounded border px-3 py-1 hover:bg-gray-100"
        onClick={() => setCount((c) => c - 1)}
        type="button"
      >
        -
      </button>
      <span className="min-w-[3ch] text-center font-mono text-2xl">
        {count}
      </span>
      <button
        className="rounded border px-3 py-1 hover:bg-gray-100"
        onClick={() => setCount((c) => c + 1)}
        type="button"
      >
        +
      </button>
    </div>
  );
}
