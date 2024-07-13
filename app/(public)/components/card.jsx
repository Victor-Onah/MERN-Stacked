import Link from "next/link";

/**
 * @typedef {import("react")} React
 */

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

/**
 * Secondary blog post card. Does not include publish date or last updated date.
 * @param {{slug: string, featuredImageUrl: string, title: string, summary: string}} props
 * @returns {React.JSX.Element}
 */
export function SecondaryCard(props) {
	return (
		<Link
			href={`/blog/${props.slug}`}
			className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
			prefetch>
			<img
				loading="lazy"
				src={`${props.featuredImageUrl}`}
				width="550"
				height="310"
				alt={props.title}
				className="[&[alt]]:text-xs mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
			/>
			<div className="space-y-1">
				<h3 className="text-lg font-semibold group-hover:underline">
					{props.title}
				</h3>
				<p className="text-muted-foreground line-clamp-2">
					{props.summary}
				</p>
			</div>
		</Link>
	);
}

/**
 * Primary blog post card. Includes publish date or last updated date.
 * @param {{slug: string, featuredImageUrl: string, title: string, publishDate: number, lastUpdated?: number}} props
 * @returns {React.JSX.Element}
 */
export default function Card(props) {
	const date = new Date(props.lastUpdated || props.publishDate);
	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return (
		<Link
			href={`/blog/${props.slug}`}
			className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
			prefetch>
			<img
				loading="lazy"
				src={`${props.featuredImageUrl}`}
				width="550"
				height="310"
				alt={props.title}
				className="[&[alt]]:text-xs mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
			/>
			<div className="space-y-1">
				<h3 className="text-lg font-semibold group-hover:underline">
					{props.title}
				</h3>
				<p className="text-xs">
					{props.lastUpdated ? "Updated" : "Published"} on {month}{" "}
					{day}, {year}
				</p>
			</div>
		</Link>
	);
}
