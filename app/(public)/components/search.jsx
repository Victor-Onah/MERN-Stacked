"use client";

import { useState } from "react";
import sanitizeInput from "../utils/sanitize-input";
import searchForPost from "../utils/search";
import Link from "next/link";

/**
 * @typedef {import('react')} React
 */

/** Open search modal */
function openSearchModal() {
	const searchModal = document.getElementById("search-modal");

	searchModal.showModal();
	document.body.style.overflow = "hidden";
}

/** Close search modal */
function closeSearchModal() {
	const searchModal = document.getElementById("search-modal");

	searchModal.close();
}

/**
 * Application's search component.
 * @returns {React.JSX.Element}
 */
export default function Search() {
	return (
		<>
			<button
				onClick={openSearchModal}
				className="max-[500px]:hidden w-72 max-lg:w-52 bg-zinc-200 active:bg-zinc-300 bg-opacity-85 p-2 rounded flex justify-between items-center"
				title="Search">
				<span>Search...</span>
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						viewBox="0 -960 960 960"
						width="20px"
						fill="#000000">
						<path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
					</svg>
				</span>
			</button>
			<button
				onClick={openSearchModal}
				aria-label="Search icon"
				className="min-[500px]:hidden"
				title="Search">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="20px"
					viewBox="0 -960 960 960"
					width="20px"
					fill="#000000">
					<path d="M765-144 526-383q-30 22-65.79 34.5-35.79 12.5-76.18 12.5Q284-336 214-406t-70-170q0-100 70-170t170-70q100 0 170 70t70 170.03q0 40.39-12.5 76.18Q599-464 577-434l239 239-51 51ZM384-408q70 0 119-49t49-119q0-70-49-119t-119-49q-70 0-119 49t-49 119q0 70 49 119t119 49Z" />
				</svg>
			</button>
			<SearchDialogue />
		</>
	);
}

/**
 * Application's search modal component.
 * @returns {React.JSX.Element}
 */
function SearchDialogue() {
	const [query, setQuery] = useState("");
	const [searching, setSearching] = useState(false);
	const [searchError, setSearchError] = useState(false);
	const [results, setResults] = useState();

	return (
		<dialog
			onClose={() => (document.body.style.overflow = "auto")}
			id="search-modal"
			role="dialog"
			aria-modal="true"
			className="fixed inset-0 bg-white w-full max-md:max-w-[95vw] max-w-screen-md rounded-lg max-h-[80vh] min-h-48 overflow-x-hidden">
			<div className="flex sticky top-0 w-full border-b items-stretch">
				<form
					className="flex flex-1"
					onSubmit={async e => {
						e.preventDefault();
						try {
							setSearchError(false);
							setSearching(true);
							setResults(
								await searchForPost(await sanitizeInput(query))
							);
							setSearching(false);
						} catch (error) {
							setSearching(false);
							setSearchError(true);
						}
					}}>
					<input
						value={query}
						onChange={({ target }) => setQuery(target.value)}
						type="search"
						name="Search"
						placeholder="Search..."
						className="border-none outline-none flex-1 p-2"
					/>
				</form>
				<button
					onClick={() => {
						closeSearchModal();
						setResults();
						setQuery("");
						setSearchError(false);
						setSearching(false);
					}}
					title="Close"
					aria-label="Close search modal"
					className="flex p-2 justify-center items-center bg-zinc-100 active:bg-zinc-200">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						viewBox="0 -960 960 960"
						width="20px"
						fill="#000000">
						<path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
					</svg>
				</button>
			</div>
			<div className="text-center text-zinc-700 p-4">
				{searching && !searchError && !results && "Searching..."}
				{!searching && !results && "Search for something"}
				{searchError && "Failed to complete request."}
				{Array.isArray(results) &&
					results.length === 0 &&
					"No results for this search."}
				{Array.isArray(results) && results.length > 0 && (
					<div className="space-y-4">
						{results.length > 0 &&
							results.map((suggestion, index) => (
								<Link
									preload
									onClick={() => {
										closeSearchModal();
										setResults();
										setQuery("");
										setSearchError(false);
										setSearching(false);
									}}
									key={index}
									href={`/blog/${suggestion.slug}`}
									className="flex items-center gap-4 text-left">
									<img
										loading="lazy"
										src={suggestion.featuredImageUrl}
										alt={suggestion.title}
										className="[&[alt]]:text-xs w-32 aspect-video rounded-xl inline-block"
									/>
									<div>
										<p className="font-semibold">
											{suggestion.title}
										</p>
										<p className="text-sm text-zinc-600 line-clamp-1">
											{suggestion.summary}
										</p>
									</div>
								</Link>
							))}
					</div>
				)}
			</div>
		</dialog>
	);
}
