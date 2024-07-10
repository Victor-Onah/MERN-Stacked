"use server";

import connectToDb from "../../../shared/utils/connect-to-db";
import Post from "../../../shared/models/post";

export default async function publishPost(postInfo) {
  try {
    const post = {
      ...postInfo,
      publishDate: Date.now(),
    };

    await connectToDb();
    await Post.create(post);

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
