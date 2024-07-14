"use server";

import Post from "@/models/post";
import connectToDb from "@/utils/connect-to-db";

/**
 * Fetches random posts that will be suggested for readers from the database
 * @param {number} limit - Maximum number of post to fetch. Defaults to 5
 * @param {string} excludedPost - The slug of the current post. This post will be excluded
 * @returns {Promise<Array<{title: string, slug: string, featuredImageUrl: string, summary: string}>>}
 */
export default async function getRandomSuggestions(limit = 5, excludedPost) {
	try {
		await connectToDb();
		return (
			await Post.aggregate([
				{ $match: { slug: { $ne: excludedPost } } },
				{ $sample: { size: limit } }
			])
		).map(obj => {
			const { featuredImageUrl, slug, summary, title } = obj;

			return { featuredImageUrl, slug, summary, title };
		});
	} catch (error) {
		return [];
	}
}
