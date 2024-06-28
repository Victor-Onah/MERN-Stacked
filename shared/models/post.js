import mongoose from "mongoose";
import db from "../utils/db.js";

const postSchema = new mongoose.Schema({
  title: {
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
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    enum: [
      "JavaScript",
      "Node JS",
      "React JS",
      "Mongo DB",
      "Express JS",
      "HTML",
      "CSS",
      "Git & Github",
    ],
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
  lastUpdated: String,
  impressions: {
    type: Number,
    default: 0,
  },
});

export default db.model("post", postSchema);
