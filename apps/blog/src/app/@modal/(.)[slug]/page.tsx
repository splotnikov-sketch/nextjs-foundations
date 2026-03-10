// /src/app/@modal/(.)[slug]/page.tsx

import { fetchPostBySlug } from '@repo/api/blog';
import { notFound } from 'next/navigation';
import { PostContent } from '@/components/blog-post';
import { PostModal } from './modal';

type Props = { params: Promise<{ slug: string }> };

export default async function PostModalPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  if (!post) {
    notFound()
  };

  return (
    <PostModal slug={slug} title={post.title}>
      <PostContent post={post} />
    </PostModal>
  );
}
