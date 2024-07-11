"use client";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#000000"
        >
          <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
        </svg>
      </button>
      <nav className="ml-auto flex gap-4 sm:gap-6 max-[720px]:hidden">
        <Link
          href="/"
          className="text-sm font-medium hover:underline hover:text-zinc-600 underline-offset-4"
          prefetch
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:underline hover:text-zinc-600 underline-offset-4"
          prefetch
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium hover:underline hover:text-zinc-600 underline-offset-4"
          prefetch
        >
          Contact
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium hover:underline hover:text-zinc-600 underline-offset-4"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#000000"
            >
              <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
            </svg>
          </button>
          <Link
            onClick={closeMenu}
            href="/"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Home
          </Link>
          <Link
            onClick={closeMenu}
            href="/about"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            About
          </Link>
          <Link
            onClick={closeMenu}
            href="/contact"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Contact
          </Link>
          <Link
            onClick={closeMenu}
            href="/blog"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Blog
          </Link>
        </nav>
      </dialog>
    </div>
  );
}
