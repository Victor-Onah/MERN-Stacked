import Link from "next/link";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";
import { Suspense } from "react";
import {
  RecentPosts,
  FeaturePosts,
  PostOptimisticUi,
} from "./components/feature-recent-posts-home";

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full bg-gradient-to-b from-blue-100 via-blue-50 via-blue-50 to-white py-12 md:py-24 lg:py-32 text-center">
          <div className="px-4 md:px-6 flex gap-y-4 flex-col">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl m-auto text-blue-800">
              Dive into the MERN stack
            </h1>
            <p className="max-w-[600px] m-auto md:text-xl">
              Your ultimate resource for mastering MongoDB, Express.js, React,
              and Node.js.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-white via-white to-zinc-100">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Articles
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                className="bg-gradient-to-t from-blue-700 to-blue-500 p-2 rounded-md text-sm text-white flex items-center gap-2 hover:shadow-lg active:scale-95"
              >
                Visit the blog <CgArrowRight />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Recent Posts
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
              className="bg-gradient-to-t from-blue-700 to-blue-500 p-2 rounded-md text-sm text-white flex items-center gap-2 hover:shadow-lg active:scale-95"
            >
              Visit the blog <CgArrowRight />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
