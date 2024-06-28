"use client";

import { CgSearch, CgClose } from "react-icons/cg";

function openSearchModal() {
  const searchModal = document.getElementById("search-modal");

  searchModal.showModal();
  document.body.style.overflow = "hidden";
}

function closeSearchModal() {
  const searchModal = document.getElementById("search-modal");

  searchModal.close();
}

export default function Search() {
  return (
    <>
      <button
        onClick={openSearchModal}
        className="max-[500px]:hidden w-72 max-lg:w-52 bg-zinc-200 active:bg-zinc-300 bg-opacity-85 p-2 rounded flex justify-between items-center"
        title="Search"
      >
        <span>Search...</span>
        <span>
          <CgSearch />
        </span>
      </button>
      <button
        onClick={openSearchModal}
        aria-label="Search icon"
        className="min-[500px]:hidden"
        title="Search"
      >
        <CgSearch />
      </button>
      <SearchDialogue />
    </>
  );
}

function SearchDialogue() {
  return (
    <dialog
      onClose={() => (document.body.style.overflow = "auto")}
      id="search-modal"
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 bg-white w-full max-md:max-w-[95vw] max-w-screen-md rounded-lg max-h-[80vh] min-h-48 relative overflow-x-hidden"
    >
      <div className="flex sticky top-0 w-full border-b items-stretch">
        <input
          type="search"
          name="Search"
          placeholder="Search..."
          className="border-none outline-none flex-1 p-2"
        />
        <button
          onClick={closeSearchModal}
          title="Close"
          aria-label="Close search modal"
          className="flex p-2 justify-center items-center bg-zinc-100 active:bg-zinc-200"
        >
          <CgClose />
        </button>
      </div>
      <div className="text-center text-zinc-700 p-4">Search for something!</div>
    </dialog>
  );
}
