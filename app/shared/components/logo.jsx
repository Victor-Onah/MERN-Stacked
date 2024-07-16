export default function Logo(props) {
	return (
		<div className="flex gap-1 items-center font-semibold">
			<img src="/images/logo.svg" className="h-6 w-6" alt="Blog logo" />
			<span
				className="text-zinc-600 text-sm"
				style={{
					fontFamily: "Anek_Malayalam",
					fontWeight: 600
				}}>
				MERN STACKED
			</span>
		</div>
	);
}
