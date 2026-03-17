import { fetchPosts, fetchStats, fetchUser } from '../../data-demo/data';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function UserPage({ params }: PageProps) {
  // Include params in Promise.all for optimal performance
  const [{ id }, user, posts, stats] = await Promise.all([
    params, // Await params alongside data fetches
    fetchUser(), // These run in parallel with params resolution
    fetchPosts(),
    fetchStats(),
  ]);

  // Now use id for any dependent fetches
  // (Better: restructure so all independent fetches are in Promise.all)

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="mb-4 font-bold text-2xl">User {id}</h1>
      <p>User Name: {user.name}</p>
      {/* ... */}
      <p>Post Title #1: {posts[0]?.title}</p>
      {/* ... */}
      <p>
        Stats: Views - {stats.views}, Likes - {stats.likes}
      </p>
      {/* ... */}
    </main>
  );
}
