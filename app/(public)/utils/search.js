"use server";

import searcher from "@/utils/search";

export default async function searchForPost(query) {
	try {
		return await searcher.search(query);
	} catch (error) {
		return [];
	}
}
