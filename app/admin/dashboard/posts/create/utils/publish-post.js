import publishPost from "./publish-post-server";

/**
 * @typedef {import('react')} React
 */

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
 * @typedef Dispatchers
 * @property {React.Dispatch<React.SetStateAction<string>} setTitle
 * @property {React.Dispatch<SetStateAction<string>} setSummary
 * @property {React.Dispatch<SetStateAction<string>} setContent
 * @property {React.Dispatch<SetStateAction<string>} setFeaturedImageUrl
 * @property {React.Dispatch<SetStateAction<Array<string>} setKeywords
 */

/**
 * Invokes action for saving the edited blog posts
 * @param {Post} post - An object containing the post's information
 * @param {Dispatchers} dispatchers - An object containing action dispatchers for setting states (`setState()`)
 * @returns {Promise<undefined>}
 */

export default async function publish(post, dispatchers) {
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
			} = dispatchers;

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
