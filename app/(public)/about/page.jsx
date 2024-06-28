import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export async function generateMetadata() {
  return {
    title: "MERN Stacked | About",
    description:
      "Join Onah Victor as he shares his passion for learning, exploring new ideas, and empowering his readers.Through a diverse range of topics, he aims to inspire and educate his community, fostering a love for knowledge and personal growth.",
    openGraph: {
      title: "MERN Stacked | About",
      description:
        "Join Onah Victor as he shares his passion for learning, exploring new ideas, and empowering his readers.Through a diverse range of topics, he aims to inspire and educate his community, fostering a love for knowledge and personal growth.",
    },
    twitter: {
      title: "MERN Stacked | About",
      description:
        "Join Onah Victor as he shares his passion for learning, exploring new ideas, and empowering his readers.Through a diverse range of topics, he aims to inspire and educate his community, fostering a love for knowledge and personal growth.",
    },
  };
}

export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <section className="w-full bg-gradient-to-b from-blue-100 via-blue-50 via-blue-50 to-white py-12 md:py-24 lg:py-32 text-center">
        <div className="px-4 md:px-6 flex gap-y-4 flex-col">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl m-auto text-blue-800">
            Welcome to MERN Stacked
          </h1>
          <p className="max-w-[600px] m-auto md:text-xl">
            Dive into the latest trends, insights, and best practices across a
            variety of web development topics based on the MERN stack and more.
            Join me on this journey of exploration and learning.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                About the Blog
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Sharing Knowledge, Impacting Lives
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                MERN Stacked is a platform where I share my passion for
                learning, exploring new ideas, and empowering my readers.
                Through a diverse range of topics, I aim to inspire and educate
                my community, fostering a love for knowledge and personal
                growth.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                About the Author
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Onah Victor
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                I&apos;m a passionate web developer, driven by a curiosity to
                explore the world of programming. With a passion for the MERN
                stack and JavaScript in particular, I&apos;m dedicated to
                creating content that resonates with readers and ignites in them
                the zeal to learn and love the art of web development. My goal
                is to empower and inspire others through the power of knowledge.
              </p>
              <Link
                href="/contact"
                className="bg-gradient-to-t from-blue-700 to-blue-500 p-2 rounded-md text-white flex items-center gap-2 hover:shadow-lg active:scale-95"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
