"use server";

import Post from "@/models/post";
import sanitizeInput from "@/app/(public)/utils/sanitize-input";
import { revalidatePath } from "next/cache";
import { connectToDb } from "@/utils/app-db";

/**
 * Attaches users comments to blog post and saves to the database.
 * @param {string} slug - The slug of the post the user ic commenting on.
 * @param {{author: string, authorEmail: string, body: string}} commentInfo - The comment information.
 * @returns {Promise<boolean>}
 */
export default async function publishComment(slug, commentInfo) {
	try {
		await connectToDb();
		const post = await Post.findOne({ slug });
		const { comments } = post;

		// Search the comments for the users email
		const savedCommentIndex = comments.findIndex(
			comment => comment.authorEmail === commentInfo.authorEmail
		);

		if (savedCommentIndex !== -1) {
			comments[savedCommentIndex].body = await sanitizeInput(
				commentInfo.body
			);
			comments[savedCommentIndex].publishDate = Date.now();
		} else {
			const { author, authorEmail, body } = commentInfo;

			comments.push({
				author: await sanitizeInput(author),
				authorEmail: await sanitizeInput(authorEmail),
				body: await sanitizeInput(body),
				publishDate: Date.now()
			});
		}

		await post.save();
		revalidatePath(`/blog/${slug}`, "page");

		return true;
	} catch (error) {
		return false;
	}
}
