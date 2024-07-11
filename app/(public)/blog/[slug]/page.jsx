import Post from "../../../../shared/models/post";
import connectToDb from "../../../../shared/utils/connect-to-db";
import markdownToHtml from "../../../shared/utils/markdown-to-html";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const { title, summary, featuredImageUrl } = await Post.findOne({
    slug,
  }).select("title summary featuredImageUrl");

  return {
    title,
    description: summary,
    openGraph: {
      title,
      description: summary,
      image: featuredImageUrl,
    },
    twitter: {
      title,
      description: summary,
      image: featuredImageUrl,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;
  await connectToDb();
  const post = await Post.findOne({ slug });
  return (
    <>
      <div
        className="blog-post"
        dangerouslySetInnerHTML={{
          __html: `${await markdownToHtml(post.content)}`,
        }}
      ></div>
    </>
  );
}
