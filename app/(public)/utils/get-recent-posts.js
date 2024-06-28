"use server";

import connectToDb from "../../../shared/utils/connect-to-db";
import Post from "../../../shared/models/post";

export default async function getRecentPosts(tag, limit) {
  try {
    await connectToDb();
    if (!tag)
      return await Post.find()
        .sort({ publishDate: -1 })
        .select("title summary featuredImageUrl publishDate lastModified")
        .limit(limit || 6);
    return await Post.find({ tags: tag })
      .sort({ publishDate: -1 })
      .select("title summary featuredImageUrl publishDate lastModified")
      .limit(limit || 6);
  } catch (error) {
    return [];
  }
}
