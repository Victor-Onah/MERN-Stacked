"use client";

import validateBeforeSubmit from "../utils/contact-form-validator";
import SubmitBtn from "./message-submit-button";
import { useState } from "react";

export default function ContactForm(params) {
  const [message, setMessage] = useState({ isError: false, body: "" });
  const errorClassNames =
    "border border-pink-300 p-2 rounded-lg bg-pink-100 text-red-500 text-sm";
  const successClassNames =
    "border border-green-300 p-2 rounded-lg bg-green-100 text-green-600 text-sm";

  return (
    <form
      id="contact-form"
      action={async (formData) => {
        await validateBeforeSubmit(formData, setMessage);
      }}
      className="space-y-4"
    >
      {message.body && (
        <div className={message.isError ? errorClassNames : successClassNames}>
          {message.body}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold">
            Name
          </label>
          <input
            className="bg-slate-100 p-2 focus:outline-none rounded-md"
            id="name"
            placeholder="Your name"
            name="name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold">
            Email
          </label>
          <input
            className="bg-slate-100 p-2 focus:outline-none rounded-md"
            id="email"
            type="email"
            placeholder="Your email"
            name="email"
            required
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="body" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="body"
          placeholder="Your message"
          name="body"
          required
          className="min-h-[150px] bg-slate-100 p-2 focus:outline-none rounded-md"
        ></textarea>
      </div>
      <SubmitBtn />
    </form>
  );
}
