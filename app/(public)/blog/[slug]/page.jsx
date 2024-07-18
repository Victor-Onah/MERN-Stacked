import markdownToHtml from "./utils/markdown-to-html";
import CommentSection from "./components/comment-section";
import PostSuggestions from "./components/post-suggestions";
import { connectToDb } from "@/utils/app-db";
import Post from "@/models/post";
import ShareLinks from "./components/share-links";
import ShareRequest from "./components/share-request";

/**
 * @typedef {import('next').Metadata} Metadata
 */

/**
 * Generate dynamic metadata for each blog post
 * @param {{params: {slug: string}}} args
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata({ params }) {
	await connectToDb();

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
			images: featuredImageUrl
		},
		twitter: {
			title,
			description: summary,
			images: featuredImageUrl
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
			<ShareRequest slug={slug} title={post.title} />
			<ShareLinks slug={slug} title={post.title} />
			<hr />
			<CommentSection slug={slug} comments={post.comments} />
			<hr />
			<PostSuggestions slug={slug} />
		</div>
	);
}
