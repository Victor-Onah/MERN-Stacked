/**
 * @typedef {import('react')} React
 */

import { Suspense } from "react";

/**
 * Comment section for a single blog.
 * @param {{comments: Array<string>}} props
 * @returns {Promise<React.JSX.Element>}
 */
export default function CommentSection({ comments }) {
	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-xl font-bold">Leave a comment</h2>
				<p>Share your thoughts and feedback on this post.</p>
				<form className="mt-4 space-y-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="space-y-2">
							<label
								className="text-sm font-medium leading-none"
								for="name">
								Name
							</label>
							<input
								className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-black outline-offset-0"
								id="name"
								placeholder="Enter your name"
							/>
						</div>
						<div className="space-y-2">
							<label
								className="text-sm font-medium leading-none"
								for="email">
								Email
							</label>
							<input
								className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-black outline-offset-0"
								id="email"
								placeholder="Enter your email"
								type="email"
							/>
						</div>
					</div>
					<div className="space-y-2">
						<label
							className="text-sm font-medium leading-none"
							for="comment">
							Comment
						</label>
						<textarea
							className="flex w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
							id="comment"
							placeholder="Write your comment here..."></textarea>
					</div>
					<button
						className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
						type="submit">
						Submit Comment
					</button>
				</form>
			</div>
			<hr />
			<div className="space-y-2">
				<h3 className="text-2xl font-bold">Comments</h3>
			</div>
			<Suspense fallback={"Loading comments..."}>
				<Comments />
			</Suspense>
		</div>
	);
}

/**
 * Users comments for a single blog.
 * @param {{comments: Array<string>}} props
 * @returns {Promise<React.JSX.Element>}
 */
async function Comments({ comments }) {
	return (
		<div className="space-y-6 text-sm text-zinc-800">
			<div className="flex items-start gap-4">
				<span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 border">
					<img
						className="aspect-square h-full w-full"
						src="/placeholder-user.jpg"
					/>
				</span>
				<div className="grid gap-1.5">
					<div className="flex items-center gap-2">
						<div className="font-medium">Olivia Davis</div>
						<div className="text-xs">2 days ago</div>
					</div>
					<div>
						This was a really insightful post. I learned a lot about
						the history of this topic. Looking forward to more
						content like this!
					</div>
				</div>
			</div>
			<div className="flex items-start gap-4">
				<span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 border">
					<img
						className="aspect-square h-full w-full"
						src="/placeholder-user.jpg"
					/>
				</span>
				<div className="grid gap-1.5">
					<div className="flex items-center gap-2">
						<div className="font-medium">John Doe</div>
						<div className="text-xs">1 week ago</div>
					</div>
					<div>
						Great post! I really enjoyed the detailed analysis and
						the historical context provided. Keep up the good work!
					</div>
				</div>
			</div>
			<div className="flex items-start gap-4">
				<span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10 border">
					<img
						className="aspect-square h-full w-full"
						src="/placeholder-user.jpg"
					/>
				</span>
				<div className="grid gap-1.5">
					<div className="flex items-center gap-2">
						<div className="font-medium">Sarah Adams</div>
						<div className="text-xs">2 weeks ago</div>
					</div>
					<div>
						Wow, this is a really well-written and informative post.
						I appreciate the level of detail and the clear
						explanations. Keep up the great work!
					</div>
				</div>
			</div>
		</div>
	);
}
