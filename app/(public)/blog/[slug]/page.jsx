import Post from "../../../../models/post";
import connectToDb from "../../../../utils/connect-to-db";
import markdownToHtml from "./utils/markdown-to-html";
import CommentSection from "./components/CommentSection";
import Suggestions from "./components/Suggestions";

/**
 * @typedef {import('next').Metadata} Metadata
 */

/**
 * Generate dynamic metadata for each blog post.
 * @param {{params: {slug: string}}} args
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata({ params }) {
	const { slug } = params;
	const { title, summary, featuredImageUrl } = await Post.findOne({
		slug
	}).select("title summary featuredImageUrl");

	return {
		title,
		description: summary,
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
	const post = await Post.findOne({ slug });
	return (
		<div className="space-y-8">
			<div
				className="blog-post"
				dangerouslySetInnerHTML={{
					__html: `${await markdownToHtml(post.content)}`
				}}></div>
			<hr />
			<CommentSection slug={post.slug} comments={post.comments} />
			<hr />
			<Suggestions slug={post.slug} />
		</div>
	);
}
