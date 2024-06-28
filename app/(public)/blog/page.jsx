import Link from "next/link";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "MERN Stacked | Blog",
    description:
      "Dive into the latest trends, insights, and best practices across a variety of web development topics based on the MERN stack and more.",
    openGraph: {
      title: "MERN Stacked | Blog",
      description:
        "Dive into the latest trends, insights, and best practices across a variety of web development topics based on the MERN stack and more.",
    },
    twitter: {
      title: "MERN Stacked | Blog",
      description:
        "Dive into the latest trends, insights, and best practices across a variety of web development topics based on the MERN stack and more.",
    },
  };
}

export default function Page() {
  return (
    <main className="flex-1">
      <section className="w-full bg-gradient-to-b from-blue-100 via-blue-50 via-blue-50 to-lime-100 py-12 md:py-24 lg:py-32 text-center">
        <div className="px-4 md:px-6 flex gap-y-4 flex-col">
          <h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none max-w-4xl m-auto text-blue-800">
            Explore My Latest Blog Posts
          </h1>
          <p className="max-w-[600px] m-auto md:text-xl">
            Dive into the latest trends, insights, and best practices across a
            variety of web development topics based on the MERN stack and more.
          </p>
          <div className="flex justify-center gap-4 flex-wrap text-sm">
            <a
              className="p-2 rounded-lg active:scale-95 bg-lime-800 text-white"
              href="#mongo-db"
            >
              Mongo DB
            </a>
            <a
              className="p-2 rounded-lg active:scale-95 bg-zinc-600 text-white"
              href="#express-js"
            >
              Express JS
            </a>
            <a
              className="p-2 rounded-lg active:scale-95 bg-blue-600 text-white"
              href="#react-js"
            >
              React JS
            </a>
            <a
              className="p-2 rounded-lg active:scale-95 bg-green-800 text-white"
              href="#node-js"
            >
              Node JS
            </a>
          </div>
        </div>
      </section>
      <section
        id="mongo-db"
        className="w-full bg-gradient-to-b from-lime-100 via-lime-100 via-lime-50 to-zinc-100 py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Mongo DB
              </h2>
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
        </div>
      </section>
      <section
        id="express-js"
        className="w-full bg-gradient-to-b from-zinc-100 via-zinc-100 via-zinc-50 to-blue-100 py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Express JS
              </h2>
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
        </div>
      </section>
      <section
        id="react-js"
        className="w-full bg-gradient-to-b from-blue-100 via-blue-100 via-blue-50 to-green-100 py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                React JS
              </h2>
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
        </div>
      </section>
      <section
        id="node-js"
        className="w-full bg-green-100 py-12 md:py-24 lg:py-32 bg-muted"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Node JS
              </h2>
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
                  Explore the latest trends and technologies shaping the future
                  of web development.
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
        </div>
      </section>
    </main>
  );
}
