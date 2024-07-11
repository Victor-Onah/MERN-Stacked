import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import {
  RecentPosts,
  FeaturePosts,
  PostOptimisticUi,
} from "./components/feature-recent-posts-home";

export async function generateMetadata({ searchParams }) {
  // Do not remove!!
  const { id } = searchParams;

  return {
    title: "MERN Stacked - Exploring the MERN Stack and more",
    description:
      "Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
    openGraph: {
      title: "MERN Stacked - Exploring the MERN Stack and more",
      description:
        "Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
    },
    twitter: {
      title: "MERN Stacked - Exploring the MERN Stack and more",
      description:
        "Buckle up for a head-first dive into the MERN Stack. Join Onah Victor as he shares his knowledge and experiences through insightful articles.",
    },
  };
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full bg-gradient-to-b from-zinc-100 via-zinc-50 via-zinc-50 to-white py-12 md:py-24 lg:py-32 text-center">
          <div className="px-4 md:px-6 flex gap-y-4 flex-col">
            <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none max-w-4xl m-auto text-zinc-800">
              Dive into the MERN stack
            </h1>
            <p className="max-w-[600px] m-auto md:text-xl">
              Your ultimate resource for mastering MongoDB, Express.js, React,
              and Node.js.
            </p>
          </div>
        </section>
        <section className="w-full py-12 bg-gradient-to-b from-white via-white via-white to-zinc-100">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-5xl">
                  Featured Articles
                </h2>
                <p className="max-w-[900px] md:text-xl lg:text-base xl:text-xl">
                  Explore my expertly curated selection of the most insightful
                  and engaging articles.
                </p>
              </div>
            </div>
            <Suspense fallback={<PostOptimisticUi />}>
              <FeaturePosts />
            </Suspense>
            <div className="max-w-5xl p-4 m-auto flex justify-center">
              <Link
                href="/blog"
                className="bg-gradient-to-t from-zinc-700 to-zinc-500 p-2 rounded-md text-sm text-white flex items-center gap-2 hover:shadow-lg active:scale-95"
              >
                Visit the blog{" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#FFFFFF"
                  >
                    <path d="m576-288-51-51 105-105H192v-72h438L525-621l51-51 192 192-192 192Z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 bg-zinc-100">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold sm:text-5xl">Recent Posts</h2>
                <p className="max-w-[900px] md:text-xl lg:text-base xl:text-xl">
                  Check out my latest blog posts and stay up-to-date with the
                  latest trends and insights.
                </p>
              </div>
            </div>
            <Suspense fallback={<PostOptimisticUi />}>
              <RecentPosts />
            </Suspense>
          </div>
          <div className="max-w-5xl p-4 m-auto flex justify-center">
            <Link
              href="/blog"
              className="bg-gradient-to-t from-zinc-700 to-zinc-500 p-2 rounded-md text-sm text-white flex items-center gap-2 hover:shadow-lg active:scale-95"
            >
              Visit the blog{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#FFFFFF"
                >
                  <path d="m576-288-51-51 105-105H192v-72h438L525-621l51-51 192 192-192 192Z" />
                </svg>
              </span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
