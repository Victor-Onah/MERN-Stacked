import Link from "next/link";
import Logo from "../../shared/components/logo";
import Nav from "./nav";
import Loader from "../../shared/components/loader";
import { Suspense } from "react";

export default function Header() {
  return (
    <>
      <Suspense fallback={null}>
        <Loader />
      </Suspense>
      <header className="p-2 lg:p-6 sticky top-0 w-full backdrop-blur-lg bg-white shadow-sm z-50 overflow-x-hidden">
        <div className="justify-between max-w-screen-xl m-auto flex items-center">
          <Link
            href="/"
            title="MERN Stacked"
            className="flex items-center justify-center"
            prefetch
          >
            <Logo className="h-6 w-6" />
            <span className="sr-only">MERN Stacked</span>
          </Link>
          <Nav />
        </div>
      </header>
    </>
  );
}
