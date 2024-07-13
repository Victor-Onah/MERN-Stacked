import publishPost from "./publish-post-server";

/**
 * @typedef Post
 * @property {string} title - The title of the post.
 * @property {string} slug - The dynamic portion of the post's URL.
 * @property {string} summary - The post's summary.
 * @property {string} content - The content of the post.
 * @property {string} featuredImageUrl - The main image of the post.
 * The image that shows up when the post is shared on social media.
 * @property {string} keywords - The keywords of the post.
 */

/**
 * @typedef import("react").Dispatchers
 * @property {import("react").Dispatch<import("react").SetStateAction<''>} setTitle
 * @property {import("react").Dispatch<SetStateAction<''>} setSummary
 * @property {import("react").Dispatch<SetStateAction<''>} setContent
 * @property {import("react").Dispatch<SetStateAction<''>} setFeaturedImageUrl
 * @property {import("react").Dispatch<SetStateAction<[]>} setKeywords
 */

/**
 * Invokes action for saving the edited blog posts
 * @param {Post} post - An object containing the post's information
 * @param {import("react").Dispatchers} import("react").Dispatchers - An object containing import("react").Dispatchers (`setState()`)
 * @returns {Promise<undefined>}
 */

export default async function publish(post, import("react").Dispatchers) {
	try {
		const isPostPublished = await publishPost(post);

		if (!isPostPublished) return alert("Your post was not published!");
		else {
			const {
				setContent,
				setFeaturedImageUrl,
				setKeywords,
				setSummary,
				setTitle
			} = import("react").Dispatchers;

			alert("Your post has been submitted!");
			setContent("");
			setTitle("");
			setFeaturedImageUrl("");
			setKeywords([]);
			setSummary("");
		}
	} catch (error) {
		alert(error.message);
	}
}
