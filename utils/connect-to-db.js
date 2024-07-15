import mongoose from "mongoose";

/**
 * Connects the application to the database if not connected.
 * @returns {Promise<void>}
 */
export default async function connectToDb() {
	if (mongoose.connection.readyState === 1) return;
	else {
		const dev = process.env.NODE_ENV !== "production";
		const connectionString = dev
			? "mongodb://localhost:27017"
			: process.env.MONGO_URL;
		await mongoose.connect(connectionString);
	}
}
