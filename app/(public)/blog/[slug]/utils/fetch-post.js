"use server";

import Post from "@/models/post";

export default async function fetchPost(slug) {
	try {
		return {
			status: "successful",
			data: (await Post.findOne({ slug })).toJSON()
		};
	} catch (error) {
		return { status: "failed" };
	}
}
