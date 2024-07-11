"use client";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import publishPost from "../../../utils/publish-post";

export default function Page() {
  const [postBody, setPostBody] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [featuredImageUrl, setFeauturedImageUrl] = useState("");

  async function publish() {
    try {
      const isPostPublished = await publishPost({
        title,
        slug: title.replaceAll(/[\s]/g, "-").replaceAll(/[^\w\-]/g, ""),
        summary,
        content: postBody,
        featuredImageUrl,
        keywords: keywords.toString(),
        featuredImageUrl,
      });

      if (!isPostPublished) return alert("Your post was not published!");
      else {
        alert("Your post has been submitted!");
        setPostBody("");
        setTitle("");
        setFeauturedImageUrl("");
        setKeywords([]);
        setSummary("");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-6 pb-4">
      <h1 className="text-4xl lg:text-6xl md:text-5xl font-semibold">
        Create post
      </h1>
      <div className="mt-8 space-y-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
          placeholder="Post title..."
        />
        <input
          type="text"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
          placeholder="Summary..."
        />
        <input
          type="text"
          value={featuredImageUrl}
          onChange={(e) => setFeauturedImageUrl(e.target.value)}
          className="w-full block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
          placeholder="Featured image url..."
        />
        <Keywords keywords={keywords} setKeywords={setKeywords} />
        <MDEditor value={postBody} onChange={setPostBody} />
        <div className="flex justify-end flex-wrap gap-6">
          <button className="h-10 px-4 inline-flex items-center justify-center bg-zinc-100 active:bg-zinc-500 rounded-md text-zinc-700 mt-6">
            Save draft{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="#434343"
            >
              <path d="M263.72-96Q234-96 213-117.15T192-168v-624q0-29.7 21.15-50.85Q234.3-864 264-864h312l192 192v504q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72ZM528-624v-168H264v624h432v-456H528ZM264-792v189-189 624-624Z" />
            </svg>
          </button>
          <form action={publish}>
            <PublishBtn />
          </form>
        </div>
      </div>
    </div>
  );
}

function PublishBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      disable={pending}
      className="h-10 px-4 inline-flex items-center justify-center bg-zinc-800 active:bg-zinc-700 rounded-md text-white mt-6 disabled:opacity-70"
    >
      Publish{" "}
      {pending ? (
        <span className="animate-spin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill="#FFFFFF"
          >
            <path d="M480-96q-78.72 0-148.8-30.24-70.08-30.24-122.4-82.56-52.32-52.32-82.56-122.4Q96-401.28 96-480q0-79.68 30.22-149.28 30.21-69.6 82.49-121.92 52.28-52.32 122.3-82.56Q401.04-864 479.69-864 496-864 506-854t10 25.51q0 15.51-10 26T480-792q-129.67 0-220.84 90.5Q168-611 168-480.5T259.16-259q91.17 91 220.84 91 131 0 221.5-91.16Q792-350.33 792-480q0-16 10.49-26t26-10Q844-516 854-506q10 10 10 26.31 0 78.65-30.24 148.68-30.24 70.02-82.56 122.3-52.32 52.28-121.92 82.49Q559.68-96 480-96Z" />
          </svg>
        </span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20px"
          viewBox="0 -960 960 960"
          width="20px"
          fill="#FFFFFF"
        >
          <path d="M444-192v-342L339-429l-51-51 192-192 192 192-51 51-105-105v342h-72ZM192-672v-72q0-29.7 21.16-50.85Q234.32-816 264.04-816h432.24Q726-816 747-794.85T768-744v72h-72v-72H264v72h-72Z" />
        </svg>
      )}
    </button>
  );
}

function Keywords({ keywords, setKeywords }) {
  const [keyword, setKeyword] = useState("");

  function closeModal() {
    const menuPopover = document.getElementById("keywords-modal");
    menuPopover.close();
  }

  function openModal() {
    const menuPopover = document.getElementById("keywords-modal");
    menuPopover.showModal();
  }

  function addKeyword(e) {
    e.preventDefault();
    setKeywords([...keywords, keyword]);
    setKeyword("");
  }

  function removeKeyword(keywordIndex) {
    setKeywords(keywords.filter((_, i) => i !== keywordIndex));
  }

  return (
    <div>
      <div className="flex flex-col gap-1 justify-center items-center my-6">
        <div className="space-x-1 space-y-1 mt-6 w-full">
          <h3 className="font-semibold text-lg">Keywords</h3>
          {keywords.map((keyword, i) => (
            <button
              onClick={() => removeKeyword(i)}
              className="text-xs bg-zinc-700 text-white inline-flex py-1 px-2 rounded-full items-center"
              key={i}
            >
              {keyword}{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="12px"
                  viewBox="0 -960 960 960"
                  width="12px"
                  fill="#f1f1f1"
                >
                  <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                </svg>
              </span>
            </button>
          ))}
        </div>
        {keywords.length === 0 && (
          <p className="text-sm text-zinc-300">No keywords added yet</p>
        )}
        <button
          onClick={openModal}
          className="py-1 px-2 text-slate-600 font-semibold hover:shadow-sm rounded-full bg-slate-100 text-sm inline-flex gap-2 mt-4"
        >
          <span>+</span>Add keyword
        </button>
      </div>
      <dialog
        id="keywords-modal"
        popover="manual"
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 bg-white w-full max-md:max-w-[95vw] max-w-screen-md rounded-lg max-h-[80vh] min-h-48 relative overflow-x-hidden"
      >
        <div className="flex flex-col">
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="h-10 w-10 inline-flex active:bg-zinc-100 hover:bg-zinc-50 rounded-full items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#434343"
              >
                <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center p-4">
            <form onSubmit={addKeyword} className="flex gap-1">
              <input
                type="text"
                className="flex-1 block p-2 border focus:border-black focus:border-2 rounded-md outline-none"
                required
                placeholder="Add keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button className="px-4 rounded-md bg-zinc-700 text-white active:bg-zinc-800">
                Add
              </button>
            </form>
            <div className="space-x-1 space-y-1 mt-6">
              {keywords.map((keyword, i) => (
                <button
                  onClick={() => removeKeyword(i)}
                  className="text-xs bg-zinc-700 text-white inline-flex py-1 px-2 rounded-full items-center"
                  key={i}
                >
                  {keyword}{" "}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="12px"
                      viewBox="0 -960 960 960"
                      width="12px"
                      fill="#f1f1f1"
                    >
                      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
                    </svg>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
