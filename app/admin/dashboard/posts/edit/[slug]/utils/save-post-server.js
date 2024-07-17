"use server";

import Post from "@/models/post";
import { connectToDb } from "@/utils/app-db";
import searcher from "@/utils/search";

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
		searcher.emit("db_updated", searcher);

		return true;
	} catch (error) {
		return false;
	}
}
