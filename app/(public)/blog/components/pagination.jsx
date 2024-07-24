import Link from "next/link";

/**
 * UI for pagination
 * @param {*[]} paginationArray
 */
export default function Paginatio({ paginationArray, currentPage }) {
	return (
		<div className="flex justify-center items-stretch text-sm gap-2">
			{paginationArray.map((page, index) => {
				if (paginationArray[1] === "...") {
					const middlePage = Math.floor(
						(1 * Number(paginationArray[2])) / 2
					);
					return (
						<Link
							prefetch
							key={index}
							href={`/blog?page=${middlePage}`}
							className="p-3 py-1 inline-flex bg-zinc-100 rounded-lg hover:shadow-lg active:bg-zinc-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#000000">
								<path d="M263.79-408Q234-408 213-429.21t-21-51Q192-510 213.21-531t51-21Q294-552 315-530.79t21 51Q336-450 314.79-429t-51 21Zm216 0Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm216 0Q666-408 645-429.21t-21-51Q624-510 645.21-531t51-21Q726-552 747-530.79t21 51Q768-450 746.79-429t-51 21Z" />
							</svg>
						</Link>
					);
				} else if (
					paginationArray[paginationArray.length - 2] === "..."
				) {
					const middlePage = Math.floor(
						(Number(paginationArray[paginationArray.length - 2]) *
							Number(paginationArray[paginationArray.length])) /
							2
					);
					return (
						<Link
							prefetch
							key={index}
							href={`/blog?page=${middlePage}`}
							className="p-3 py-1 inline-flex bg-zinc-100 rounded-lg hover:shadow-lg active:bg-zinc-200">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								height="20px"
								viewBox="0 -960 960 960"
								width="20px"
								fill="#000000">
								<path d="M263.79-408Q234-408 213-429.21t-21-51Q192-510 213.21-531t51-21Q294-552 315-530.79t21 51Q336-450 314.79-429t-51 21Zm216 0Q450-408 429-429.21t-21-51Q408-510 429.21-531t51-21Q510-552 531-530.79t21 51Q552-450 530.79-429t-51 21Zm216 0Q666-408 645-429.21t-21-51Q624-510 645.21-531t51-21Q726-552 747-530.79t21 51Q768-450 746.79-429t-51 21Z" />
							</svg>
						</Link>
					);
				} else {
					return page == currentPage ? (
						<button
							key={index}
							className="p-3 py-1 inline-flex bg-zinc-700 text-white rounded-lg hover:shadow-lg">
							{page}
						</button>
					) : (
						<Link
							prefetch
							key={index}
							href={`/blog?page=${page}`}
							className="p-3 py-1 inline-flex bg-zinc-100 rounded-lg hover:shadow-lg">
							{page}
						</Link>
					);
				}
			})}
		</div>
	);
}
