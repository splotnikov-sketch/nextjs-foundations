import { fetchPosts } from '@repo/api/blog';
import Link from 'next/link';
import { Suspense } from 'react';
import { FilterControls } from '../components/filter-controls';

type Props = {
  searchParams: Promise<{
    category?: string;
    sort?: string;
  }>;
};

export default async function BlogHomePage({ searchParams }: Props) {
  const { category, sort } = await searchParams;
  const posts = await fetchPosts(10);

  let filtered = category
    ? posts.filter((p) => p.category.toLowerCase() === category.toLowerCase())
    : posts;

  if (sort === 'title') {
    filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  }

  return (
    <main className="flex flex-col gap-8">
      <h1 className="font-bold text-4xl">
        Blog{' '}
        {category && <span className="text-2xl text-gray-500">in {category}</span>}
      </h1>

      <Suspense fallback={<div className="h-10 animate-pulse rounded bg-gray-100" />}>
        <FilterControls currentCategory={category} currentSort={sort} />
      </Suspense>

      <div className="flex flex-col gap-6">
        {filtered.map((post) => (
          <article className="flex flex-col gap-2 border-b pb-6" key={post.id}>
            <Link className="hover:underline" href={`/${post.slug}`}>
              <h2 className="font-semibold text-2xl">{post.title}</h2>
            </Link>
            <p className="text-gray-500 text-sm">
              {post.category} · {post.readingTime} min read ·{' '}
              {post.publishedAt.toLocaleDateString()}
            </p>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link
              className="text-blue-600 text-sm hover:underline"
              href={`/${post.slug}`}
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}