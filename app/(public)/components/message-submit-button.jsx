"use client";

import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending || false}
      type="submit"
      className="bg-gradient-to-t from-blue-700 to-blue-500 p-2 rounded-md text-sm text-whitehover:shadow-lg active:scale-95 max-md:w-full text-white disabled:opacity-50 min-w-44 md:float-right"
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
