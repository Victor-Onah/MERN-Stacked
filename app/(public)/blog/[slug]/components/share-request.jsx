"use client";

import { FaHandsPraying, FaX } from "react-icons/fa6";
import ShareLinks from "./share-links";
import { useEffect, useRef } from "react";

export default function ShareRequest({ slug, title }) {
	const trigger = useRef(null);

	useEffect(() => {
		const { current } = trigger;
		const observer = new IntersectionObserver(
			(entries, observer) => {
				if (entries[0].isIntersecting) {
					current.click();
					observer.disconnect(entries[0]);
				}
			},
			{
				root: null
			}
		);

		observer.observe(current);
	}, []);

	/** Open request modal */
	function openRequestModal() {
		const searchModal = document.getElementById("share-request-dialog");

		searchModal.showModal();
		document.body.style.overflow = "hidden";
	}

	/** Close request modal */
	function closeRequestModal() {
		const searchModal = document.getElementById("share-request-dialog");

		searchModal.close();
	}

	return (
		<>
			<button
				onClick={openRequestModal}
				ref={trigger}
				className="invisible h-0 w-0 overflow-hidden">
				Open request
			</button>
			<dialog
				onClose={() => (document.body.style.overflow = "auto")}
				id="share-request-dialog"
				role="dialog"
				aria-modal="true"
				className="fixed inset-0 bg-white w-full max-w-[380px] rounded-lg max-h-[90vh] min-h-48 overflow-x-hidden">
				<div className="bg-white rounded-lg max-h-[90vh] relative overflow-x-hidden">
					<button
						onClick={closeRequestModal}
						title="close"
						className="p-4 rounded-full active:bg-zinc-400 hover:bg-zinc-300 bg-zinc-500 bg-opacity-40 hover:bg-opacity-40 active:bg-opacity-40 text-lg fixed top-0 right-0 text-white z-50">
						<FaX />
					</button>
					<img
						src="https://www.dropbox.com/scl/fi/k4ztd3xsiqx9sw61lv2v1/Blog_InstaShare_031220_WP-2.png?rlkey=jlw3v1p2w9aimxo4jaxu9rj06&raw=1"
						alt="Share this post"
						className="sticky w-full top-0"
					/>
					<div className="p-4 space-y-3">
						<h4 className="flex gap-2 text-3xl font-black">
							Help this blog grow <FaHandsPraying />
						</h4>
					</div>
					<div className="m-2">
						<ShareLinks title={title} slug={slug} />
					</div>
				</div>
			</dialog>
		</>
	);
}
