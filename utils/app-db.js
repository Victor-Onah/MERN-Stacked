import mongoose from "mongoose";

/** Unified blueprint for accessing the databas */
class AppDb {
	/** Return a usable database */
	getDb(dbName) {
		return mongoose.connection.useDb(dbName);
	}

	/** Maintains one single connection to the database */
	async connect() {
		if (
			mongoose.connection.readyState === 1 ||
			mongoose.connection.readyState
		) {
			if (mongoose.connections.length > 1) {
				for (let i = 1; i < mongoose.connections.length; i++) {
					await mongoose.connections[i].close();
				}
			}
		} else {
			const dev = process.env.NODE_ENV !== "production";
			const connectionString = dev
				? "mongodb://localhost:27017/MERNStacked"
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
	}
}

const appDb = new AppDb();

export const db = appDb.getDb("MERNStacked");

export const connectToDb = appDb.connect;
