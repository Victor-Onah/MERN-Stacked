import mongoose from "mongoose";
import db from "../utils/db.js";
import sanitize from "../utils/sanitize-input.js";

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
      },
    },
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
      },
      message(value) {
        return "ERR_INVALID_EMAIL";
      },
    },
  },
  body: {
    type: String,
    required: true,
  },
  sendDate: Number,
});

messageSchema.pre("save", async function (next) {
  try {
    this.sendDate = Date.now();
    this.name = sanitize(this.name);
    this.email = sanitize(this.email);
    this.body = sanitize(this.body);
  } catch (error) {
    next(error);
  }
});

export default db.model("message", messageSchema);
