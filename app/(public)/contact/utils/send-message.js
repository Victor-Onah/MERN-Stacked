"use server";

import Message from "@/models/message";
import { connectToDb } from "@/utils/app-db";

/**
 * Saves the user's contact message to the database
 * @param {FormData<string, string>} msgFormData - The message to be sent in formData format
 * @returns {Promise<{status: 'successful' | 'failed', message: string}>}
 */
export default async function sendMessage(msgFormData) {
	try {
		const msgObj = Object.fromEntries(msgFormData);

		await connectToDb();
		await Message.create(msgObj);

		return { status: "successful" };
	} catch (error) {
		return { status: "failed", message: error.message };
	}
}
