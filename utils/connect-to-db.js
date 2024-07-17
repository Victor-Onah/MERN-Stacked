import mongoose from "mongoose";

/**
 * Connects the application to the database if not connected.
 * @returns {Promise<void>}
 */
export default async function connectToDb() {
	if (
		mongoose.connection.readyState === 1 ||
		mongoose.connection.readyState === 2
	) {
		for (let i = 1; i < mongoose.connections.length; i++) {
			await mongoose.connections[i].close();
		}
		return;
	}

	const dev = process.env.NODE_ENV !== "production";
	const connectionString = dev
		? "mongodb://localhost:27017/MERN_Stacked"
		: process.env.MONGO_URL;

	try {
		await mongoose.connect(connectionString, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
	} catch (error) {
		throw error;
	}
}
