import getRecentPosts from "../utils/get-recent-posts";
import getTrendingPosts from "../utils/get-trending-posts";
import Card, { SecondaryCard } from "./card";
import { unstable_noStore as noStore } from "next/cache";

export async function RecentPosts() {
  // Do not remove!
  noStore();

  try {
    const recentPosts = await getRecentPosts(3);

    return recentPosts.length > 0 ? (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <Card key={index} {...post._doc} />
        ))}
      </div>
    ) : (
      <div className="flex justify-center text-center items-center text-sm text-zinc-600 min-h-44">
        <p>No posts to show!</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex justify-center text-center items-center text-sm text-red-600 min-h-[180px] p-4">
        <a
          href="/"
          className="min-w-[150px] h-10 w-10 flex justify-center bg-red-100 border-red-200 rounded-xl items-center"
        >
          Failed to load posts!
        </a>
      </div>
    );
  }
}

export async function FeaturePosts() {
  noStore();

  try {
    const recentPosts = await getTrendingPosts(3);

    return recentPosts.length > 0 ? (
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {recentPosts.map((post, index) => (
          <SecondaryCard key={index} {...post._doc} />
        ))}
      </div>
    ) : (
      <div className="flex justify-center text-center items-center text-sm text-zinc-600 min-h-44">
        <p>No posts to show!</p>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex justify-center text-center items-center text-sm text-red-600 min-h-[180px] p-4">
        <a
          href="/"
          className="min-w-[150px] h-10 w-10 flex justify-center bg-red-100 border-red-200 rounded-xl items-center"
        >
          Failed to load posts!
        </a>
      </div>
    );
  }
}

export function PostOptimisticUi() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
      <div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
      <div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
      <div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
    </div>
  );
}
