"use server";

import Post from "../../../../../../models/post";
import connectToDb from "../../../../../../utils/connect-to-db";

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
 * Publishes post to database.
 * @param {Post} postInfo
 * @returns {Promise<boolean>}
 */
export default async function publishPost(postInfo) {
	try {
		const post = {
			...postInfo,
			publishDate: Date.now()
		};

		await connectToDb();
		await Post.create(post);

		return true;
	} catch (error) {
		console.error(error);
		return false;
	}
}
