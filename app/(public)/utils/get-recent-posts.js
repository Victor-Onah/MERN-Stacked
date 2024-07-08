"use server";

import connectToDb from "../../../shared/utils/connect-to-db";
import Post from "../../../shared/models/post";

export default async function getRecentPosts(limit) {
  try {
    await connectToDb();
    return await Post.find()
      .sort({ publishDate: -1 })
      .select("title summary featuredImageUrl publishDate lastModified")
      .limit(limit || 6);
  } catch (error) {
    return [];
  }
}
