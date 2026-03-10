import type { BlogPost } from '@repo/api/blog';

export function PostContent({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl">{post.title}</h1>
        <p className="text-gray-500 text-sm">
          {post.category} · {post.readingTime} min read ·{' '}
          {post.publishedAt.toLocaleDateString()}
        </p>
        <p className="text-gray-500 text-sm">By {post.author.name}</p>
      </header>
      <div className="prose max-w-none">
        {post.content.split('\n\n').map((paragraph) => (
          <p className="mb-4" key={paragraph.slice(0, 40)}>
            {paragraph}
          </p>
        ))}
      </div>
      <footer className="flex flex-wrap gap-2 border-t pt-4">
        {post.tags.map((tag) => (
          <span
            className="rounded bg-gray-100 px-2 py-1 text-gray-600 text-sm"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </footer>
    </article>
  );
}
