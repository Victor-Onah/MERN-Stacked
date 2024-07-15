import publishComment from "./publish-comment";

/**
 * @typedef {import('react')} React
 */

/**
 * Validates user comment input form.
 * @param {React.Dispatch<React.SetStateAction<string>>} setMessage
 * @returns {boolean}
 */
function validateForm(setMessage) {
	const email = document.querySelector("#email"),
		name = document.querySelector("#name"),
		body = document.querySelector("#body");

	setMessage({ isError: false, body: "" });

	if (
		!/^[a-zA-ZàáâäãåāèéêëēėęîïíīįìôöòóœøōõûüùúūÿýçćčñńßśšžźżÀÁÂÄÃÅĀÈÉÊËĒĖĘÎÏÍĪĮÌÔÖÒÓŒØŌÕÛÜÙÚŪŸÝÇĆČÑŃßŚŠŽŹŻ\s'-]+$/.test(
			name.value.trim()
		)
	)
		return (
			setMessage({ isError: true, body: "Use a real name!" }),
			name.focus(),
			false
		);
	if (
		!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
			email.value.trim()
		)
	)
		return (
			setMessage({ isError: true, body: "Use a valid email address!" }),
			email.focus(),
			false
		);

	if (!body.value.trim())
		return (
			setMessage({
				isError: true,
				body: "Message body cannot be empty!"
			}),
			body.focus(),
			false
		);
	return setMessage({ isError: false, body: "" }), true;
}

/**
 * Validates user comment before saving to the database
 * @param {string} slug
 * @param {React.Dispatch<React.SetStateAction<{isError: boolean, body: string}>>} setMessage
 * @param {{author: string, authorEmail: string, body: string}} form
 */
export default async function validateBeforeSubmit(slug, setMessage, form) {
	try {
		const isFormValid = validateForm(setMessage);

		if (isFormValid) {
			const isCommentPublished = await publishComment(slug, form);

			if (isCommentPublished) {
				setMessage({
					isError: false,
					body: "Your comment was published successfully"
				});
				document.forms["comment-form"].reset();
			} else {
				setMessage({
					isError: true,
					body: "Failed to publish your comment. Try again."
				});
			}

			setTimeout(() => {
				setMessage({ isError: false, body: "" });
			}, 4000);
		}
	} catch (error) {
		setMessage({
			isError: true,
			body: error.message
		});
	}
}
