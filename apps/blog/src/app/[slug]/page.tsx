// /src/app/[slug]/page.tsx

import { fetchPostBySlug, fetchPosts } from '@repo/api/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PostContent } from '@/components/blog-post';

export async function generateStaticParams() {
  const posts = await fetchPosts(10); // Pre-render top 10 posts
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex flex-col gap-6">
      <Link className="text-blue-600 text-sm hover:underline" href="/">
        ← Back to posts
      </Link>

      <PostContent post={post} />
    </main>
  );
}
