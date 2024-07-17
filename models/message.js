import mongoose from "mongoose";
import sanitize from "../app/(public)/utils/sanitize-input.js";
import { db } from "@/utils/app-db.js";

/**
 * Schema for messages.
 */
const messageSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: {
			validator(value) {
				return /^[a-zA-ZàáâäãåāèéêëēėęîïíīįìôöòóœøōõûüùúūÿýçćčñńßśšžźżÀÁÂÄÃÅĀÈÉÊËĒĖĘÎÏÍĪĮÌÔÖÒÓŒØŌÕÛÜÙÚŪŸÝÇĆČÑŃßŚŠŽŹŻ\s'-]+$/.test(
					value
				);
			},
			message(value) {
				return "ERR_INVALID_NAME";
			}
		}
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator(value) {
				return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
					value
				);
			},
			message(value) {
				return "ERR_INVALID_EMAIL";
			}
		}
	},
	body: {
		type: String,
		required: true
	},
	sendDate: Number
});

messageSchema.pre("save", async function (next) {
	try {
		this.sendDate = Date.now();
		this.name = await sanitize(this.name);
		this.email = await sanitize(this.email);
		this.body = await sanitize(this.body);
	} catch (error) {
		next(error);
	}
});

/**
 * Mongoose model for interacting with messages on the database.
 */
const Message = db.model("message", messageSchema);

export default Message;
