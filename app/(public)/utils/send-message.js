"use server";

import Message from "../../../shared/models/message";
import connectToDb from "../../../shared/utils/connect-to-db";

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
