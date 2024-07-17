"use server";

import { connectToDb } from "@/utils/app-db";
import Post from "@/models/post";

/**
 * Retrieves the most recent posts on the database by `publishDate`
 * @param {number} limit Number of posts to retrieve. Defaults to 6
 * @returns {Promise<Array<{} & {_doc: {slug: string, featuredImageUrl: string, title: string, publishDate: number, lastUpdated?: number}}>>}
 */
export default async function getRecentPosts(limit = 6) {
	try {
		await connectToDb();

		return await Post.find()
			.sort({ publishDate: -1 })
			.select(
				"title summary featuredImageUrl publishDate lastUpdated slug"
			)
			.limit(limit);
	} catch (error) {
		return [];
	}
}
