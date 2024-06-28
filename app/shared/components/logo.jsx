export default function Logo(props) {
  return (
    <div className="flex gap-1 items-center font-semibold">
      <svg
        style={{ height: 20, width: "auto" }}
        xmlns="http://www.w3.org/2000/svg"
        width="217"
        height="197"
        viewBox="0 0 217 197"
        fill="none"
      >
        <rect width="217" height="41" fill="#44FF02" />
        <rect y="52" width="217" height="41" fill="#2C2929" />
        <rect y="156" width="217" height="41" fill="#024B00" />
        <rect y="104" width="217" height="41" fill="#0081AA" />
      </svg>
      <span className="text-zinc-600 text-sm">MERN Stacked</span>
    </div>
  );
}
