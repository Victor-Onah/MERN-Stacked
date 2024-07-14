"use client";

import { Suspense, useEffect, useState } from "react";
import getRandomSuggestions from "../utils/get-random-suggestions";
import Link from "next/link";

/**
 * @typedef {import('react')} React
 */

/**
 * Other posts suggestions section.
 * @param {{slug: string}} props
 * @returns {React.JSX.Element}
 */
export default function Suggestions({ slug }) {
	return (
		<div>
			<h2 className="text-xl font-bold mb-4">More reads</h2>
			<Suspense fallback={<OptimisticUi />}>
				<SuggestedPosts slug={slug} />
			</Suspense>
		</div>
	);
}

/**
 * UI for rendering suggested posts and error handling.
 * @param {{slug: string}} props
 * @returns {React.JSX.Element}
 */
async function SuggestedPosts({ slug }) {
	/**
	 * @type {[Array<{title: string, slug: string, featuredImageUrl: string, summary: string}> ,React.React.Dispatch<SetStateAction<Array<{title: string, slug: string, featuredImageUrl: string, summary: string}>>>]}
	 */
	const [suggestions, setSuggestions] = useState([]);
	const [loaded, setLoaded] = useState();
	useEffect(() => {
		(async () => {
			try {
				setSuggestions(await getRandomSuggestions(undefined, slug));
				setLoaded(true);
			} catch (error) {
				console.error(error);
				setLoaded(false);
			}
		})();
	}, [slug]);
	return (
		<div className="">
			{loaded && suggestions.length === 0 && (
				<p className="text-sm text-center">No suggestions</p>
			)}
			{loaded === false && (
				<p className="text-sm text-center text-red-600">
					Error loading suggestions
				</p>
			)}
			{suggestions.length > 0 &&
				suggestions.map((suggestion, index) => (
					<Link
						key={index}
						href={`/blog/${suggestion.slug}`}
						className="flex items-center gap-4">
						<img
							src={suggestion.featuredImageUrl}
							alt={suggestion.title}
							className="w-32 aspect-video rounded-xl inline-block placeholder:text-xs"
						/>
						<div>
							<p className="font-semibold">{suggestion.title}</p>
							<p className="text-sm text-zinc-600 line-clamp-1">
								{suggestion.summary}
							</p>
						</div>
					</Link>
				))}
		</div>
	);
}

/**
 * Optimistic UI displayed while suggestions are being loaded.
 * @returns {React.JSX.Element}
 */
function OptimisticUi() {
	return (
		<div className="space-y-1 animate-pulse">
			<div className="flex gap-2 items-center">
				<div className="h-12 w-12 rounded-full bg-zinc-200"></div>
				<div className="h-8 bg-zinc-200 rounded-md flex-1"></div>
			</div>
			<div className="flex gap-2 items-center">
				<div className="h-12 w-12 rounded-full bg-zinc-200"></div>
				<div className="h-8 bg-zinc-200 rounded-md flex-1"></div>
			</div>
			<div className="flex gap-2 items-center">
				<div className="h-12 w-12 rounded-full bg-zinc-200"></div>
				<div className="h-8 bg-zinc-200 rounded-md flex-1"></div>
			</div>
		</div>
	);
}
