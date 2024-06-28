import Link from "next/link";
import Nav from "./nav";
import Loader from "../../shared/components/loader";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-4 sm:px-6">
      <Suspense fallback={null}>
        <Loader />
      </Suspense>
      <Link className="text-2xl font-bold" href="/admin/dashboard">
        Dashboard
      </Link>
      <Nav />
    </header>
  );
}
