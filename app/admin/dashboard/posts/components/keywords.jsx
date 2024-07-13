import { useState } from "react";

/**
 * @typedef {Object} Params
 * @property {Array<string>} keywords - Array of added keywords.
 * @property {import("react").Dispatch<SetStateAction<string>>} setKeywords - Invoke with a string to add more keywords to te keywords array.
 */

/**
 * JSX Component for the keywords section.
 * @param {Params} props
 * @returns
 */
export default function Keywords({ keywords, setKeywords }) {
	const [keyword, setKeyword] = useState("");

	/**
	 * Closes the form modal for adding keywords.
	 */
	function closeModal() {
		const menuPopover = document.getElementById("keywords-modal");
		menuPopover.close();
	}

	/**
	 * Opens the form modal for adding keywords.
	 */
	function openModal() {
		const menuPopover = document.getElementById("keywords-modal");
		menuPopover.showModal();
	}

	/**
	 * Adds a new keyword to the keywords array.
	 */
	function addKeyword(e) {
		e.preventDefault();
		setKeywords([...keywords, keyword]);
		setKeyword("");
	}

	/**
	 * Removes a keyword from the keywords array.
	 */
	function removeKeyword(keywordIndex) {
		setKeywords(keywords.filter((_, i) => i !== keywordIndex));
	}

	return (
		<div>
			<div className="flex flex-col gap-1 justify-center items-center my-6">
				<div className="space-x-1 space-y-1 mt-6 w-full">
					<h3 className="font-semibold text-lg">Keywords</h3>
					{keywords.map((keyword, i) => (
						<button
							onClick={() => removeKeyword(i)}
							className="text-xs bg-zinc-700 text-white inline-flex py-1 px-2 rounded-full items-center"
							key={i}>
							{keyword}{" "}
							<span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									height="12px"
									viewBox="0 -960 960 960"
									width="12px"
									fill="#f1f1f1">
									<path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
								</svg>
							</span>
						</button>
					))}
				</div>
				{keywords.length === 0 && (
					<p className="text-sm text-zinc-300">
						No keywords added yet
					</p>
				)}
				<button
					onClick={openModal}
					className="py-1 px-2 text-slate-600 font-semibold hover:shadow-sm rounded-full bg-slate-100 text-sm inline-flex gap-2 mt-4">
					<span>+</span>Add keyword
				</button>
			</div>
			<dialog
				id="keywords-modal"
				popover="manual"
				role="dialog"
				aria-modal="true"
				className="fixed inset-0 bg-white w-full max-md:max-w-[95vw] max-w-screen-md rounded-lg max-h-[80vh] min-h-48 overflow-x-hidden">
				<div className="flex flex-col">
					<div className="flex justify-end">
						<button
							onClick={closeModal}
							className="h-10 w-10 inline-flex active:bg-zinc-100 hover:bg-zinc-50 rounded-full items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#434343">
								<path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
							</svg>
						</button>
					</div>
					<div className="flex-1 flex flex-col justify-center p-4">
						<form onSubmit={addKeyword} className="flex gap-1">
							<input
								type="text"
								className="flex-1 block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
								required
								placeholder="Add keyword..."
								value={keyword}
								onChange={e => setKeyword(e.target.value)}
							/>
							<button className="px-4 rounded-md bg-zinc-700 text-white active:bg-zinc-800">
								Add
							</button>
						</form>
						<div className="space-x-1 space-y-1 mt-6">
							{keywords.map((keyword, i) => (
								<button
									onClick={() => removeKeyword(i)}
									className="text-xs bg-zinc-700 text-white inline-flex py-1 px-2 rounded-full items-center"
									key={i}>
									{keyword}{" "}
									<span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="12px"
											viewBox="0 -960 960 960"
											width="12px"
											fill="#f1f1f1">
											<path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
										</svg>
									</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
}
