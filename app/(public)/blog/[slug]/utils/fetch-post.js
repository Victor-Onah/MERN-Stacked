"use server";

import Post from "@/models/post";
import { connectToDb } from "@/utils/app-db";

export default async function fetchPost(slug) {
	try {
		await connectToDb();

		return {
			status: "successful",
			data: (await Post.findOne({ slug })).toJSON()
		};
	} catch (error) {
		return { status: "failed" };
	}
}
