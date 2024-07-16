"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import validateBeforeSubmit from "../utils/comments-form-validator";

/**
 * @typedef {import('react')} React
 */

/**
 * Comment section for a single blog.
 * @param {{comments: Array<string>, slug: string}} props
 * @returns {React.JSX.Element}
 */
export default function CommentSection({ comments, slug }) {
	const [message, setMessage] = useState({
		isError: false,
		body: ""
	});
	const errorClassNames =
		"border border-pink-300 p-2 rounded-lg bg-pink-100 text-red-500 text-sm";
	const successClassNames =
		"border border-green-300 p-2 rounded-lg bg-green-100 text-green-600 text-sm";

	return (
		<div className="space-y-8">
			<div>
				<h2 className="text-xl font-bold">Leave a comment</h2>
				<p>Share your thoughts and feedback on this post.</p>
				<form
					onSubmit={e => {
						e.preventDefault();
						const form = {};

						form["author"] = document
							.querySelector("#name")
							.value.trim();
						form["authorEmail"] = document
							.querySelector("#email")
							.value.trim();
						form["body"] = document
							.querySelector("#body")
							.value.trim();

						validateBeforeSubmit(slug, setMessage, form);
					}}
					id="comment-form"
					className="mt-4 space-y-4">
					{message.body && (
						<div
							className={
								message.isError
									? errorClassNames
									: successClassNames
							}>
							{message.body}
						</div>
					)}
					<div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
						<div className="space-y-2">
							<label
								className="text-sm font-medium leading-none"
								htmlFor="name">
								Name
							</label>
							<input
								required
								className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-black outline-offset-0"
								id="name"
								placeholder="Enter your name"
							/>
						</div>
						<div className="space-y-2">
							<label
								className="text-sm font-medium leading-none"
								htmlFor="email">
								Email
							</label>
							<input
								required
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
							htmlFor="body">
							Comment
						</label>
						<textarea
							required
							className="flex w-full rounded-md border px-3 py-2 text-sm focus:outline-black outline-offset-0 min-h-[120px]"
							id="body"
							placeholder="Write your comment here..."></textarea>
					</div>
					<SubmitBtn />
					<div className="clear-both"></div>
				</form>
			</div>
			<hr />
			<div className="space-y-2">
				<h3 className="text-2xl font-bold">Comments</h3>
			</div>
			<Comments comments={comments} />
		</div>
	);
}

/**
 * Users comments for a single blog.
 * @param {{comments: Array<{author: string, publishDate: number, body: string}>}} props
 * @returns {Promise<React.JSX.Element>}
 */
function Comments({ comments }) {
	return (
		<div className="space-y-6 text-sm text-zinc-800">
			{comments.length === 0 && (
				<p className="text-sm text-center">
					No comments. Be the first to comment :)
				</p>
			)}
			{comments.length > 0 &&
				comments
					.sort((prev, next) => next.publishDate - prev.publishDate)
					.map((comment, index) => (
						<div key={index} className="flex items-start gap-4">
							<span className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-full h-10 w-10 border">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="24px"
									viewBox="0 -960 960 960"
									width="24px"
									fill="#aaa">
									<path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
								</svg>
							</span>
							<div className="grid gap-1.5">
								<div className="flex items-center gap-2">
									<div className="font-medium">
										{comment.author}
									</div>
									<div className="text-xs">
										{new Date(
											comment.publishDate
										).toDateString()}
									</div>
								</div>
								<div>{comment.body}</div>
							</div>
						</div>
					))}
		</div>
	);
}

function SubmitBtn() {
	/**
	 * Tells the status of the form. `true` if the form is being submitted, otherwise `false`.
	 * @type {{pending: boolean}}
	 */
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending || false}
			type="submit"
			className="bg-gradient-to-t from-zinc-700 to-zinc-500 p-2 rounded-md text-sm text-whitehover:shadow-lg active:scale-95 max-md:w-full text-white disabled:opacity-50 min-w-44 md:float-right">
			{pending ? "Submitting..." : "Submit"}
		</button>
	);
}
