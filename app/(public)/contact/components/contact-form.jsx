"use client";

import validateBeforeSubmit from "../utils/contact-form-validator";
import { useFormStatus } from "react-dom";
import { useState } from "react";

/**
 * @typedef {import("react")} React
 */

/**
 * Contact form for page `/contact`.
 * @returns {React.JSX.Element}
 */

export default function ContactForm() {
	const [message, setMessage] = useState({ isError: false, body: "" });
	const errorClassNames =
		"border border-pink-300 p-2 rounded-lg bg-pink-100 text-red-500 text-sm";
	const successClassNames =
		"border border-green-300 p-2 rounded-lg bg-green-100 text-green-600 text-sm";

	return (
		<form
			id="contact-form"
			action={async formData => {
				await validateBeforeSubmit(formData, setMessage);
			}}
			className="space-y-4">
			{message.body && (
				<div
					className={
						message.isError ? errorClassNames : successClassNames
					}>
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
					className="min-h-[150px] bg-slate-100 p-2 focus:outline-none rounded-md"></textarea>
			</div>
			<SubmitBtn />
		</form>
	);
}

function SubmitBtn() {
	/**
	 * Tells the status of the form. `true` if the form is being submitted, otherwise `false`.
	 * @type {{pending: boolean}}
	 */
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending || false}
			type="submit"
			className="bg-gradient-to-t from-zinc-700 to-zinc-500 p-2 rounded-md text-sm text-whitehover:shadow-lg active:scale-95 max-md:w-full text-white disabled:opacity-50 min-w-44 md:float-right">
			{pending ? "Submitting..." : "Submit"}
		</button>
	);
}
