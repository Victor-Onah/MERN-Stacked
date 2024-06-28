"use server";

import connectToDb from "../../../shared/utils/connect-to-db";
import Post from "../../../shared/models/post";

export default async function getTrendingPosts(tag, limit) {
  try {
    await connectToDb();
    if (!tag)
      return await Post.find()
        .sort({ impressions: -1 })
        .select("title summary featuredImageUrl publishDate lastModified")
        .limit(limit || 6);
    return await Post.find({ tags: tag })
      .sort({ impressions: -1 })
      .select("title summary featuredImageUrl publishDate lastModified")
      .limit(limit || 6);
  } catch (error) {
    return [];
  }
}
