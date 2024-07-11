"use server";

import connectToDb from "../../../shared/utils/connect-to-db";
import Post from "../../../shared/models/post";

export default async function getTrendingPosts(limit) {
  try {
    await connectToDb();

    return await Post.find()
      .sort({ impressions: -1 })
      .select("title summary featuredImageUrl publishDate lastModified slug")
      .limit(limit || 6);
  } catch (error) {
    return [];
  }
}
