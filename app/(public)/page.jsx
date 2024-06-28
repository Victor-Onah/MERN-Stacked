import Link from "next/link";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";
import getTrendingPosts from "./utils/get-trending-posts";

const posts = await getTrendingPosts();

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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="#"
                className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
                prefetch
              >
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Featured Article"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    The Future of Web Development
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Explore the latest trends and technologies shaping the
                    future of web development.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
                prefetch
              >
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Featured Article"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Mastering Responsive Design
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Learn how to create websites that adapt seamlessly to any
                    device.
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
                prefetch
              >
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Featured Article"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    The Rise of Headless CMS
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">
                    Discover the benefits of headless content management systems
                    and how they&lsquo;re transforming the web.
                  </p>
                </div>
              </Link>
            </div>
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="#"
                className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
                prefetch
              >
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Featured Article"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Unlocking the Power of Serverless Computing
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Published on May 15, 2023
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
                prefetch
              >
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Featured Article"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    The Future of Artificial Intelligence in Web Development
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Published on April 28, 2023
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
                prefetch
              >
                <Image
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  height="310"
                  alt="Featured Article"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
                />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold group-hover:underline">
                    Mastering the Art of Accessible Web Design
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Published on April 12, 2023
                  </p>
                </div>
              </Link>
            </div>
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
