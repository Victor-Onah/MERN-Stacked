"use server";

import { cookies as initCookies } from "next/headers";
import hash from "@/app/shared/utils/hasher";

/**
 * @typedef Credentials
 * @property {string} password - Password to authenticate.
 * @property {string} username - Username to authenticate.
 */

/**
 * Authenticates the admin.
 * @param {FormData<string, string>} formData
 * @returns {Promise<boolean>}
 */
export default async function loginAdmin(formData) {
	const adminPassword = process.env.ADMIN_PASSWORD;
	const adminUsername = process.env.ADMIN_USERNAME;

	/**
	 * @type {Credentials}
	 */
	const { password, username } = Object.fromEntries(formData);
	const cookies = initCookies();
	const oneDay = 1000 * 60 * 60 * 24;

	if (password !== adminPassword && username !== adminUsername) {
		cookies.delete("admin_auth");

		return false;
	} else {
		const authToken = await hash(
			process.env.ADMIN_USERNAME,
			process.env.SIGNING_KEY
		);

		cookies.set("admin_auth", authToken, {
			secure: true,
			httpOnly: true,
			path: "/admin",
			expires: Date.now() + oneDay
		});

		return true;
	}
}
