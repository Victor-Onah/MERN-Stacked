import { Suspense } from "react";

/**
 * @typedef {import('react')} React
 */

/**
 * @typedef {React.PropsWithChildren} Props
 */

/**
 * Root layout for blog posts including optimistic UI.
 * @param {Props} props - Automatically passed by Next.js.
 * @returns
 */
export default function Layout({ children }) {
	return (
		<div className="max-[960px]:bg-white bg-zinc-100">
			<div className="max-w-screen-lg mx-auto p-4 flex gap-2 max-[960px]:flex-col max-[960px]:p-0">
				<main className="flex-1 max-w-2xl mx-auto p-4 bg-white rounded-lg min-w-[640px] max-[960px]:min-w-0 shadow-sm max-[960px]:w-full max-[960px]:rounded-none max-[960px]:shadow-none">
					<Suspense fallback={<OptimisticUi />}>{children}</Suspense>
				</main>
				<aside className="flex-1 p-4 max-w-2xl mx-auto bg-white rounded-lg shadow-sm min-h-[320px] h-fit  max-[960px]:w-full max-[960px]:rounded-none max-[960px]:shadow-none">
					<h4 className="text-xs text-center">Advertisements</h4>
				</aside>
			</div>
		</div>
	);
}

/**
 * Optimistic UI for when blog post is loading.
 * @returns {React.JSX.Element}
 */
function OptimisticUi() {
	return (
		<div className="animate-pulse max-w-screen-xl mx-auto">
			<div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
			<div className="h-4 bg-gray-300 rounded mb-2"></div>
			<div className="h-4 bg-gray-300 rounded mb-2"></div>
			<div className="h-4 bg-gray-300 rounded mb-2"></div>
			<div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
			<div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
		</div>
	);
}
