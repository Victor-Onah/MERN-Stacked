"use client";

import Link from "next/link";
import { CgMenu, CgClose } from "react-icons/cg";

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
    <div className="flex max-lg:gap-8 max-[720px]:gap-4 gap-14 items-center justify-end flex-1">
      <button
        className="min-[720px]:hidden h-12 w-12 flex justify-center items-center rounded-full active:bg-zinc-100"
        aria-label="Menu icon"
        title="Menu"
        onClick={openMenu}
      >
        <CgMenu />
      </button>
      <nav className="relative z-10 flex max-w-max flex-1 items-center justify-center ml-auto max-[720px]:hidden">
        <div style={{ position: "relative" }}>
          <ul className="flex flex-1 list-none items-center justify-center space-x-1">
            <li>
              <Link
                href="/admin/dashboard"
                className="text-sm p-2 rounded-md hover:bg-zinc-100"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/posts"
                className="text-sm p-2 rounded-md hover:bg-zinc-100"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/comments"
                className="text-sm p-2 rounded-md hover:bg-zinc-100"
              >
                Comments
              </Link>
            </li>
            <li>
              <Link
                href="/admin/dashboard/settings"
                className="text-sm p-2 rounded-md hover:bg-zinc-100"
              >
                Settings
              </Link>
            </li>
          </ul>
        </div>
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
            href="/admin/dashboard"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Dashboard
          </Link>
          <Link
            onClick={closeMenu}
            href="/admin/dashboard/posts"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Posts
          </Link>
          <Link
            onClick={closeMenu}
            href="/admin/dashboard/comments"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Comments
          </Link>
          <Link
            onClick={closeMenu}
            href="/admin/dashboard/settings"
            className="text-sm font-medium hover:bg-zinc-600 hover:text-white p-2 rounded-md"
            prefetch
          >
            Settings
          </Link>
        </nav>
      </dialog>
    </div>
  );
}
