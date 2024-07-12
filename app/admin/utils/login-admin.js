"use server";

import { cookies as initCookies } from "next/headers";

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
		cookies.set("admin_authenticated", "", {
			secure: true,
			httpOnly: true,
			path: "/admin",
			expires: Date.now() - oneDay
		});
		return false;
	} else {
		cookies.set("admin_authenticated", true, {
			secure: true,
			httpOnly: true,
			path: "/admin",
			expires: Date.now() + oneDay
		});
		return true;
	}
}
