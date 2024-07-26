import Link from "next/link";
import Nav from "./nav";
import { Suspense } from "react";

export default function Header() {
	return (
		<header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
			<Link className="text-lg font-semibold" href="/admin/dashboard">
				Admin Dashboard
			</Link>
			<Nav />
		</header>
	);
}
