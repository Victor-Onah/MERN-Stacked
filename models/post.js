import { db } from "@/utils/app-db";
import mongoose from "mongoose";
// import db from "../utils/db.js";

/**
 * Schema for blog posts.
 */
const postSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	slug: {
		type: String,
		required: true
	},
	summary: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	publishDate: {
		type: Number,
		required: true
	},
	featuredImageUrl: {
		type: String,
		required: true
	},
	keywords: {
		type: String,
		required: true
	},
	lastUpdated: Number,
	impressions: {
		type: Number,
		default: 0
	},
	comments: {
		type: [
			{
				author: String,
				publishDate: Number,
				body: String,
				authorEmail: String
			}
		],
		default: []
	}
});

/**
 * Mongoose model for interacting with posts on the database.
 */
const Post = db.model("post", postSchema);

export default Post;
