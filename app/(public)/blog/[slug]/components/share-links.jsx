"use client";

import Link from "next/link";
import { useState } from "react";
import {
	FaCheck,
	FaCopy,
	FaLinkedin,
	FaShareNodes,
	FaTelegram,
	FaWhatsapp,
	FaXTwitter
} from "react-icons/fa6";

export default function ShareLinks({ slug, title }) {
	const [copied, setCopied] = useState(false);

	async function shareLink(url, text) {
		if (window.navigator.canShare) {
			window.navigator.share({
				title: "MERN STACKED",
				text,
				url
			});
		}
	}

	async function copyLink() {
		await navigator.clipboard.writeText(
			`https://mernstacked.vercel.app/blog/${slug}`
		);
		setCopied(true);
		setTimeout(async () => setCopied(false), 1500);
	}

	return (
		<div className="p-4 rounded-sm bg-zinc-50 space-y-4">
			<p className="text-sm font-semibold">Share this post</p>
			<small>
				Help this page grow by sharing it on any of your favorite social
				media handles.
			</small>
			<div className="flex flex-wrap">
				<Link
					className="p-4 rounded-full active:bg-zinc-200 hover:bg-zinc-100 text-lg"
					href={`https://www.linkedin.com/sharing/share-offsite/?url=https://mernstacked.vercel.app/blog/${slug}`}
					target="_blank"
					title="Share on LinkedIn">
					<FaLinkedin />
				</Link>
				<Link
					className="p-4 rounded-full active:bg-zinc-200 hover:bg-zinc-100 text-lg"
					href={`https://twitter.com/intent/tweet?url=https://mernstacked.vercel.app/blog/${slug}&text=${encodeURIComponent(
						`\n${title}`
					)}`}
					target="_blank"
					title="Share on X">
					<FaXTwitter />
				</Link>
				<Link
					className="p-4 rounded-full active:bg-zinc-200 hover:bg-zinc-100 text-lg"
					href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
						title
					)}https://mernstacked.vercel.app/blog/${slug}`}
					target="_blank"
					title="Share on WhatsApp">
					<FaWhatsapp />
				</Link>
				<Link
					className="p-4 rounded-full active:bg-zinc-200 hover:bg-zinc-100 text-lg"
					href={`https://telegram.me/share/url?url=https://mernstacked.vercel.app/blog/${slug}&text=${encodeURIComponent(
						title
					)}`}
					target="_blank"
					title="Share on Telegram">
					<FaTelegram />
				</Link>
				<button
					onClick={async () =>
						await shareLink(
							`https://mernstacked.vercel.app/blog/${slug}`,
							title
						)
					}
					className="p-4 rounded-full active:bg-zinc-200 hover:bg-zinc-100 text-lg"
					title="Share">
					<FaShareNodes />
				</button>
				<button
					onClick={copyLink}
					className="p-4 rounded-full active:bg-zinc-200 hover:bg-zinc-100 text-lg"
					title="Copy link">
					{copied ? <FaCheck /> : <FaCopy />}
				</button>
			</div>
		</div>
	);
}
