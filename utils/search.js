import EventEmitter from "events";
import Post from "@/models/post";
import Fuse from "fuse.js";
import { connectToDb } from "./app-db";

class Searcher extends EventEmitter {
	constructor() {
		super();
		this.searcher;
	}

	async init() {
		const fuseOptions = {
			keys: ["title", "summary"]
		};

		await connectToDb();
		const posts = await Post.find();
		this.searcher = new Fuse(posts, fuseOptions);
	}

	async search(query) {
		if (!this.searcher) await this.init();
		return this.searcher.search(query).map(result => {
			const {
				title,
				summary,
				publishDate,
				lastUpdated,
				slug,
				featuredImageUrl
			} = result.item;

			return {
				title,
				summary,
				publishDate,
				lastUpdated,
				slug,
				featuredImageUrl
			};
		});
	}
}

const searcher = new Searcher();

searcher.on("db_updated", async searcher => {
	searcher.init();
});

searcher.init();

export default searcher;
