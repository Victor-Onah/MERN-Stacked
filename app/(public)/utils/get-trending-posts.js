"use server";

import connectToDb from "../../../utils/connect-to-db";
import Post from "../../../models/post";

/**
 * Retrieves the most popular posts on the database by `impressions`
 * @param {number} limit Number of posts to retrieve. Defaults to 6
 * @returns {Promise<Array<{} & {_doc: {slug: string, featuredImageUrl: string, title: string, publishDate: number, lastUpdated?: number}}>>}
 */
export default async function getTrendingPosts(limit = 6) {
	try {
		await connectToDb();

		return await Post.find()
			.sort({ impressions: -1 })
			.select(
				"title summary featuredImageUrl publishDate lastModified slug"
			)
			.limit(limit);
	} catch (error) {
		return [];
	}
}
