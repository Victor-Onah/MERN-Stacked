"use server";

import connectToDb from "@/utils/connect-to-db";
import Post from "@/models/post";

/**
 * @typedef Post
 * @property {string} title - The title of the post.
 * @property {string} slug - The dynamic portion of the post's URL.
 * @property {string} summary - The post's summary.
 * @property {string} content - The content of the post.
 * @property {string} featuredImageUrl - The main image of the post.
 * The image that shows up when the post is shared on social media.
 * @property {string} keywords - The keywords of the post.
 */

/**
 * Saves the edited post to the database.
 * @param {Post} post
 * @returns {promise<boolean>}
 */

export default async function savePost(post) {
	try {
		const editedPost = {
			...post,
			lastUpdated: Date.now()
		};

		await connectToDb();
		await Post.findOneAndUpdate({ slug: post.slug }, editedPost);

		return true;
	} catch (error) {
		return false;
	}
}
