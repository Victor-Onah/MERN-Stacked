"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import PublishBtn from "./components/publish-button";
import Keywords from "../components/keywords";
import publish from "./utils/publish-post";

/**
 * Page component for path `/admin/dashboard/posts/create`
 * @returns {JSX}
 */
export default function Page() {
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");
	const [summary, setSummary] = useState("");
	const [keywords, setKeywords] = useState([]);
	const [featuredImageUrl, setFeaturedImageUrl] = useState("");

	return (
		<div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
			<h1 className="text-4xl lg:text-6xl md:text-5xl font-semibold">
				Create post
			</h1>
			<div className="mt-8 space-y-2">
				<input
					type="text"
					value={title}
					onChange={e => setTitle(e.target.value)}
					className="w-full block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
					placeholder="Post title..."
				/>
				<input
					type="text"
					value={summary}
					onChange={e => setSummary(e.target.value)}
					className="w-full block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
					placeholder="Summary..."
				/>
				<input
					type="text"
					value={featuredImageUrl}
					onChange={e => setFeaturedImageUrl(e.target.value)}
					className="w-full block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
					placeholder="Featured image url..."
				/>
				<Keywords keywords={keywords} setKeywords={setKeywords} />
				<MDEditor value={content} onChange={setContent} />
				<div className="flex justify-end flex-wrap gap-6">
					<button className="h-10 px-4 inline-flex items-center justify-center bg-zinc-100 active:bg-zinc-500 rounded-md text-zinc-700 mt-6">
						Save draft{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="20px"
							viewBox="0 -960 960 960"
							width="20px"
							fill="#434343">
							<path d="M263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z" />
						</svg>
					</button>
					<form
						action={() =>
							publish(
								{
									content,
									featuredImageUrl,
									keywords: keywords.toString(),
									slug: title
										.toLowerCase()
										.replaceAll(/[\s]/g, "-")
										.replaceAll(/[^\w\-]/g, ""),
									summary,
									title
								},
								{
									setContent,
									setFeaturedImageUrl,
									setKeywords,
									setSummary,
									setTitle
								}
							)
						}>
						<PublishBtn />
					</form>
				</div>
			</div>
		</div>
	);
}
