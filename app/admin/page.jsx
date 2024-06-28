import Logo from "../shared/components/logo";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <Link href="/admin" className="flex justify-center">
            <Logo />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div className="flex flex-col">
            <label htmlFor="username" className="text-sm font-semibold">
              Username
            </label>
            <input
              className="bg-slate-100 p-2 focus:outline-none rounded-md"
              id="username"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">
              Password
            </label>
            <input
              type="password"
              className="bg-slate-100 p-2 focus:outline-none rounded-md"
              id="password"
              placeholder="Your name"
            />
          </div>
          <div>
            <button
              className="w-full bg-gradient-to-t from-blue-700 to-blue-500 p-2 rounded-md text-white hover:shadow-lg active:scale-95"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
