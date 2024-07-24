import getRecentPosts from "../../utils/get-recent-posts";
import Card from "../../components/card";
import { unstable_noStore as noStore } from "next/cache";
import Post from "@/models/post";
import generatePagination from "@/app/shared/utils/generate-pagination";
import Pagination from "./pagination";

/**
 * @typedef {import('react')} React
 */

/**
 * UI for displaying blog posts on page `/blog`
 * @returns {React.JSX.Element}
 */
export default async function BlogPosts({ page }) {
	noStore();

	try {
		const THRESHOLD = 10;
		const totalPosts = await Post.countDocuments();
		const pagination = generatePagination(
			page,
			undefined,
			Math.ceil(totalPosts / THRESHOLD)
		);
		const recentPosts = await getRecentPosts(
			THRESHOLD,
			(page - 1) * THRESHOLD
		);

		return recentPosts.length > 0 ? (
			<>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3">
					{recentPosts.map((post, index) => (
						<Card key={index} {...post._doc} />
					))}
				</div>
				<Pagination paginationArray={pagination} currentPage={page} />
			</>
		) : (
			<div className="flex justify-center text-center items-center text-sm text-zinc-600">
				<p>No posts to show!</p>
			</div>
		);
	} catch (error) {
		return (
			<div className="flex justify-center text-center items-center text-sm text-red-600 p-4">
				<a
					href="/"
					className="min-w-[150px] h-10 w-10 flex justify-center bg-red-100 border-red-200 rounded-xl items-center">
					Failed to load posts!
				</a>
			</div>
		);
	}
}

export function BlogPostsOptimisticUi() {
	return (
		<div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
			<div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
			<div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
			<div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
			<div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
			<div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
			<div className="h-[180px] w-full rounded-xl bg-gradient-to-tr from-zinc-200 to-zinc-50"></div>
		</div>
	);
}
