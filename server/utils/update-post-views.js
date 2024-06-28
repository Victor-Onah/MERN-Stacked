import connectToDb from "../../shared/utils/connect-to-db.js";
import Post from "../../shared/models/post.js";

export default async function updatePostViews(slug) {
  try {
    await connectToDb();
    await Post.findOneAndUpdate({ slug }, { $inc: { impressions: 1 } });
  } catch (error) {
    console.error(error);
  }
}
