"use client";

import { CgMenu, CgClose } from "react-icons/cg";
import Link from "next/link";
import Search from "./search";

function closeMenu() {
  const menuPopover = document.getElementById("menu-popover");
  menuPopover.close();
}
function openMenu() {
  const menuPopover = document.getElementById("menu-popover");
  menuPopover.showModal();
}

export default function Nav() {
  return (
    <div className="flex max-lg:gap-8 max-[720px]:gap-4 gap-14 items-center">
      <Search />
      <button
        className="min-[720px]:hidden h-12 w-12 flex justify-center items-center rounded-full active:bg-zinc-100"
        aria-label="Menu icon"
        title="Menu"
        onClick={openMenu}
      >
        <CgMenu />
      </button>
      <nav className="ml-auto flex gap-4 sm:gap-6 max-[720px]:hidden">
        <Link
          href="/"
          className="text-sm font-medium hover:underline hover:text-blue-600 underline-offset-4"
          prefetch
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline hover:text-blue-600 underline-offset-4"
          prefetch
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline hover:text-blue-600 underline-offset-4"
          prefetch
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium hover:underline hover:text-blue-600 underline-offset-4"
          prefetch
        >
          Blog
        </Link>
      </nav>
      <dialog
        id="menu-popover"
        popover="manual"
        role="dialog"
        aria-modal="true"
      >
        <nav className="ml-auto flex flex-col w-40 rounded-lg bg-white p-2 shadow-lg gap-1 relative">
          <button
            title="Close menu"
            onClick={closeMenu}
            aria-label="Close menu"
            className="h-12 w-12 flex justify-center items-center rounded-full active:bg-zinc-100 absolute top-0 right-0 bg-white"
          >
            <CgClose />
          </button>
          <Link
            onClick={closeMenu}
            href="/"
            className="text-sm font-medium hover:bg-blue-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            href="/about"
            className="text-sm font-medium hover:bg-blue-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            href="/contact"
            className="text-sm font-medium hover:bg-blue-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Contact
          </Link>
          <Link
            onClick={closeMenu}
            href="/blog"
            className="text-sm font-medium hover:bg-blue-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Blog
          </Link>
        </nav>
      </dialog>
    </div>
  );
}
