// apps/blog/src/app/filter-controls.tsx
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

type Props = {
  currentCategory?: string;
  currentSort?: string;
};

export function FilterControls({ currentCategory, currentSort }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Preserve existing params when updating one — same idea as your useUpdateQueryString hook
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      // Reset page when filters change
      if (name !== 'page') {
        params.delete('page');
    }
      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex gap-2">
        {['', 'tech', 'general'].map((cat) => (
          <button
            className={`rounded px-3 py-1 text-sm ${
              (cat === '' ? !currentCategory : currentCategory === cat)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100'
            }`}
            key={cat || 'all'}
            onClick={() =>
              router.push(`${pathname}?${createQueryString('category', cat)}`)
            }
            type="button"
          >
            {cat || 'All'}
          </button>
        ))}
      </div>

      <select
        className="rounded border px-3 py-1 text-sm"
        onChange={(e) =>
          router.push(
            `${pathname}?${createQueryString('sort', e.target.value)}`
          )
        }
        value={currentSort || ''}
      >
        <option value="">Default order</option>
        <option value="title">Sort by title</option>
      </select>

      {(currentCategory || currentSort) && (
        <button
          className='text-red-600 text-sm hover:underline'
          onClick={() => router.push(pathname)}
          type="button"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
