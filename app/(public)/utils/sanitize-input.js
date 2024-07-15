/**
 * Sanitizes strings by escaping special characters
 * @param {string} input Input to be sanitized
 * @returns {Promise<string>} Sanitized input
 */
export default async function sanitizeInput(input) {
	if (typeof input !== "string") throw new TypeError("ERR_INVALID_INPUT");
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"/": "&#x2F;"
	};
	const reg = /[&<>"'/]/gi;
	return input.replace(reg, match => map[match]);
}
