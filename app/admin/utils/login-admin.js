"use server";

import { cookies as initCookies } from "next/headers";

export default async function loginAdmin(formData) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const adminUsername = process.env.ADMIN_USERNAME;
  const { password, username } = Object.fromEntries(formData);
  const cookies = initCookies();
  const oneDay = 1000 * 60 * 60 * 24;

  if (password !== adminPassword && username !== adminPassword) {
    cookies.set("admin_authenticated", true, {
      secure: true,
      httpOnly: true,
      path: "/admin",
      expires: Date.now() - oneDay,
    });
    return false;
  } else {
    cookies.set("admin_authenticated", true, {
      secure: true,
      httpOnly: true,
      path: "/admin",
      expires: Date.now() + oneDay,
    });
    return true;
  }
}
