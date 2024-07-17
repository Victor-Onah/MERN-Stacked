import Post from "@/models/post";
import { cookies } from "next/headers";
import formatDateToYYYYMMDD from "./utils/format-date";
import { connectToDb } from "@/utils/app-db";

/**
 * API endpoint for `/sitemap.xml`
 * @param {import('next').NextApiRequest} request
 */
export async function GET(request) {
	// Required to make the route dynamic
	cookies();

	await connectToDb();
	const posts = await Post.find();
	let xml = "";

	for (let post of posts) {
		xml += `<url>
                    <loc>${process.env.METADATA_BASE}blog/${post.slug}</loc>
                    <lastmod>${formatDateToYYYYMMDD(
						new Date(post.lastUpdated || post.publishDate)
					)}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>`;
	}

	const lastPostPublishDate = posts[posts.length - 1].publishDate;
	const firstPostPublishDate = posts[0].publishDate;
	const finalXml = `<?xml version="1.0" encoding="UTF-8"?>
                <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
                    <url>
                        <loc>${process.env.METADATA_BASE}</loc>
                        <lastmod>${formatDateToYYYYMMDD(
							new Date(lastPostPublishDate)
						)}</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>1.0</priority>
                    </url>
                    <url>
                        <loc>${process.env.METADATA_BASE}about</loc>
                        <lastmod>${formatDateToYYYYMMDD(
							new Date(firstPostPublishDate)
						)}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                        <loc>${process.env.METADATA_BASE}contact</loc>
                        <lastmod>${formatDateToYYYYMMDD(
							new Date(firstPostPublishDate)
						)}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                        <loc>${process.env.METADATA_BASE}privacy</loc>
                        <lastmod>${formatDateToYYYYMMDD(
							new Date(firstPostPublishDate)
						)}</lastmod>
                        <changefreq>monthly</changefreq>
                        <priority>0.8</priority>
                    </url>
                    <url>
                        <loc>${process.env.METADATA_BASE}blog</loc>
                        <lastmod>${formatDateToYYYYMMDD(
							new Date(lastPostPublishDate)
						)}</lastmod>
                        <changefreq>daily</changefreq>
                        <priority>1.0</priority>
                    </url>
                    ${xml}
                </urlset>`;

	return new Response(finalXml, {
		status: 200,
		headers: {
			"Content-Type": "text/xml"
		}
	});
}
