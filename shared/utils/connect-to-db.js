"use server";

import mongoose from "mongoose";

export default async () => {
	if (mongoose.connection.readyState === 1) return;
	else {
		const dev = process.env.NODE_ENV !== "production";
		const connectionString = dev
			? "mongodb://localhost:27017"
			: process.env.MONGO_URL;
		await mongoose.connect(connectionString);
		console.log("Connected to DB successfully!");
	}
};
