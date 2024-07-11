"use server";

import connectToDb from "../../../shared/utils/connect-to-db";
import Post from "../../../shared/models/post";

export default async function savePost(postInfo) {
  try {
    const post = {
      ...postInfo,
      lastModified: Date.now(),
    };

    console.log("Slug", postInfo.slug);

    await connectToDb();
    await Post.findOneAndUpdate({ slug: postInfo.slug }, post);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
