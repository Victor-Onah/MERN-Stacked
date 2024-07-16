import Post from "../../../../models/post";
import connectToDb from "../../../../utils/connect-to-db";
import markdownToHtml from "./utils/markdown-to-html";
import CommentSection from "./components/comment-section";
// import Suggestions from "./components/suggestions";
import PostSuggestions from "./components/post-suggestions";

/**
 * @typedef {import('next').Metadata} Metadata
 */

/**
 * Generate dynamic metadata for each blog post
 * @param {{params: {slug: string}}} args
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata({ params }) {
	const { slug } = params;
	const post = await Post.findOne({
		slug
	}).select("title summary featuredImageUrl comments keywords impressions");
	const { keywords, title, summary, featuredImageUrl, impressions } = post;

	// Update post impressions
	post.impressions
		? (post.impressions = impressions + 1)
		: (post.impressions = 1);
	post.save();

	return {
		title,
		description: summary,
		keywords: keywords.split(","),
		openGraph: {
			title,
			description: summary,
			image: featuredImageUrl
		},
		twitter: {
			title,
			description: summary,
			image: featuredImageUrl
		}
	};
}

/**
 * Page for path `/blog/:slug`
 * @param {{params: {slug: string}}} props - Automatically passed by Next.js
 * @returns {import("react").JSX.Element}
 */
export default async function Page({ params }) {
	const { slug } = params;

	await connectToDb();

	const post = (await Post.findOne({ slug })).toJSON();

	return (
		<div className="space-y-8">
			<div
				className="blog-post"
				dangerouslySetInnerHTML={{
					__html: `${await markdownToHtml(post.content)}`
				}}></div>
			<hr />
			<CommentSection slug={slug} comments={post.comments} />
			<hr />
			{/* <Suggestions slug={slug} /> */}
			<PostSuggestions slug={slug} />
		</div>
	);
}
