import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

/**
 * Converts `.MD` files to `HTML` format with code highlighting.
 * @param {string} markdown
 * @returns {Promise<string>} HTML formatted string with code highlight.
 */
export default async function markdownToHtml(markdown) {
	const result = await remark()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeHighlight, { subset: false })
		.use(rehypeSanitize, {
			...defaultSchema,
			attributes: {
				...defaultSchema.attributes,
				span: [
					...(defaultSchema.attributes?.span || []),
					["className", /^hljs-./]
				]
			},
			tagNames: [...(defaultSchema.tagNames || []), "span"]
		})
		.use(rehypeStringify)
		.process(markdown);

	return result.toString();
}
