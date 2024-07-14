"use client";

import Logo from "../shared/components/logo";
import Link from "next/link";
import loginAdmin from "./utils/login-admin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useFormStatus } from "react-dom";

/**
 * Page for path `/admin/`
 * @returns {import("react").JSX.Element}
 */
export default function Page() {
	const router = useRouter();
	const [error, setError] = useState("");
	const errorClassNames =
		"border border-pink-300 p-2 rounded-lg bg-pink-100 text-red-500 text-sm";
	const successClassNames =
		"border border-green-300 p-2 rounded-lg bg-green-100 text-green-600 text-sm";

	async function handleLogin(formData) {
		setError("");
		if (await loginAdmin(formData)) {
			router.replace("/admin/dashboard");
		} else {
			setError("Wrong username or password!");
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<Link href="/admin" className="flex justify-center">
						<Logo />
					</Link>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
						Sign in to your account
					</h2>
				</div>
				<form className="space-y-6" action={handleLogin}>
					{error && (
						<div
							className={
								error ? errorClassNames : successClassNames
							}>
							{error}
						</div>
					)}
					<div className="flex flex-col">
						<label
							htmlhtmlFor="username"
							className="text-sm font-semibold">
							Username
						</label>
						<input
							required
							className="bg-slate-100 p-2 focus:outline-none rounded-md"
							id="username"
							placeholder="Your username"
							name="username"
						/>
					</div>
					<div className="flex flex-col">
						<label
							htmlhtmlFor="password"
							className="text-sm font-semibold">
							Password
						</label>
						<input
							required
							type="password"
							className="bg-slate-100 p-2 focus:outline-none rounded-md"
							id="password"
							placeholder="Your password"
							name="password"
						/>
					</div>
					<div>
						<SubmitBtn />
					</div>
				</form>
			</div>
		</div>
	);
}

function SubmitBtn() {
	const { pending } = useFormStatus();

	return (
		<button
			disabled={pending || false}
			type="submit"
			className="w-full bg-gradient-to-t from-zinc-700 to-zinc-500 p-2 rounded-md text-white hover:shadow-lg active:scale-95 hover:shadow-lg active:scale-95 disabled:opacity-50">
			{pending ? "Submitting..." : "Sign in"}
		</button>
	);
}
