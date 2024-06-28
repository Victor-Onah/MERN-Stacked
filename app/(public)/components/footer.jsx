// DO NOT REMOVE!!!
// This import causes Next.js to make the footer a dynamic component.
// The dynamism is required for automatically updating the year.
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default function Footer() {
  // DO NOT REMOVE!!!
  noStore();
  return (
    <footer className="text-xs p-4 md:p-6 border-t bg-slate-50 text-center space-y-4">
      <p className="text-muted-foreground">
        &copy; {new Date().getFullYear()} MERN Stacked. All rights reserved.
      </p>
      <div className="flex justify-center gap-4">
        <Link className="hover:underline" href="/">
          Home
        </Link>
        <Link className="hover:underline" href="/about">
          About
        </Link>
        <Link className="hover:underline" href="/contact">
          Contact
        </Link>
        <Link className="hover:underline" href="/blog">
          Blog
        </Link>
        <Link className="hover:underline" href="/privacy">
          Privacy
        </Link>
        <Link className="hover:underline" href="/archive">
          Archive
        </Link>
      </div>
    </footer>
  );
}
