import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import hash from "./app/shared/utils/hasher";

export const runtime = "nodejs";

export async function middleware(request) {
	const authCookies = cookies();
	const adminAuth = authCookies.get("admin_auth");

	if (adminAuth) {
		const isTokenValid =
			(await hash(
				process.env.ADMIN_USERNAME,
				process.env.SIGNING_KEY
			)) === adminAuth.value;

		if (isTokenValid) return NextResponse.next();
	}
	return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
	matcher: "/admin/dashboard/:path*"
};
