import savePost from "./save-post-server";

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
 * Invokes action for saving the edited blog posts.
 * @param {Post} post
 * @returns {Promise<undefined>}
 */

export default async function save(post) {
	try {
		const isPostPublished = await savePost(post);

		if (!isPostPublished) return alert("Your post was not published!");
		else {
			alert("Your post has been submitted!");
		}
	} catch (error) {
		alert(error.message);
	}
}
