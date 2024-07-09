import mongoose from "mongoose";
import db from "../utils/db.js";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  publishDate: {
    type: Number,
    required: true,
  },
  featuredImageUrl: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  lastUpdated: Number,
  impressions: {
    type: Number,
    default: 0,
  },
});

export default db.model("post", postSchema);
