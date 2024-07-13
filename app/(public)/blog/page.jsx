import BlogPosts, { BlogPostsOptimisticUi } from "../components/blog-posts";
import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";

/**
 * @typedef {import("next").Metadata} Metadata
 */

/**
 * Generates metadata for page `/blog`.
 * @param {{searchParams: {id: string}}} args
 * @returns {Metadata}
 */
export async function generateMetadata({ searchParams }) {
	return {
		title: "MERN Stacked | Blog",
		description:
			"Dive into the latest trends, insights, and best practices across a variety of web development topics based on the MERN stack and more.",
		openGraph: {
			title: "MERN Stacked | Blog",
			description:
				"Dive into the latest trends, insights, and best practices across a variety of web development topics based on the MERN stack and more."
		},
		twitter: {
			title: "MERN Stacked | Blog",
			description:
				"Dive into the latest trends, insights, and best practices across a variety of web development topics based on the MERN stack and more."
		}
	};
}

export default function Page() {
	// Stops page from being cached
	noStore();

	return (
		<main className="flex-1">
			<section className="w-full bg-gradient-to-b from-zinc-100 via-zinc-50 via-zinc-50 to-white py-12 md:py-24 lg:py-32 text-center">
				<div className="px-4 md:px-6 flex gap-y-4 flex-col">
					<h1 className="text-3xl font-bold sm:text-5xl xl:text-6xl/none max-w-4xl m-auto text-zinc-800">
						Explore My Latest Blog Posts
					</h1>
					<p className="max-w-[600px] m-auto md:text-xl">
						Dive into the latest trends, insights, and best
						practices across a variety of web development topics
						based on the MERN stack and more.
					</p>
				</div>
			</section>
			<section className="w-full p-4">
				<Suspense fallback={<BlogPostsOptimisticUi />}>
					<BlogPosts />
				</Suspense>
			</section>
		</main>
	);
}
