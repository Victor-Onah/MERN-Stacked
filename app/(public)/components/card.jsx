import Link from "next/link";
import Image from "next/image";

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function SecondaryCard({ props }) {
  return (
    <Link
      href={props.slug}
      className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
      prefetch
    >
      <Image
        src={props.featuredImageUrl}
        width="550"
        height="310"
        alt={props.title}
        className="[&[alt]]:text-xs mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold group-hover:underline">
          {props.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{props.summary}</p>
      </div>
    </Link>
  );
}

export default function Card({ props }) {
  const date = new Date(props.lastModified || props.publishDate);
  const day = date.getDate();
  const month = months[date.getMonth()];

  return (
    <Link
      href={props.slug}
      className="grid h-auto w-full items-start justify-start gap-2 rounded-md focus:outline-none"
      prefetch
    >
      <Image
        src={props.featuredImageUrl}
        width="550"
        height="310"
        alt={props.title}
        className="[&[alt]]:text-xs mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center w-full"
      />
      <div className="space-y-1">
        <h3 className="text-lg font-semibold group-hover:underline">
          {props.title}
        </h3>
        <p className="text-xs text-muted-foreground">
          {props.lastModified ? "Updated" : "Published"} on {month} {day}, 2023
        </p>
      </div>
    </Link>
  );
}
