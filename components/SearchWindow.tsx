import A from "@components/A";

export default function SearchWindow(props: { query: string }) {
	return (
		<div className="px-2 py-1 rounded bg-zinc-800 border border-zinc-700">
			<div className="flex flex-col gap-1.5">
				<A className="hover:bg-zinc-700 rounded duration-100" href="/">
					<header>{props.query}</header>
					<small>...on / path / page / page</small>
				</A>
				<A className="hover:bg-zinc-700 rounded duration-100" href="/">
					<header>{props.query}</header>
					<small>...on / path / page / page</small>
				</A>
				<A className="hover:bg-zinc-700 rounded duration-100" href="/">
					<header>{props.query}</header>
					<small>...on / path / page / page</small>
				</A>
			</div>
			<hr className="my-1.5 border-zinc-700" />
			<small className="text-zinc-400">Feature not implemented, come back later...</small>
		</div>
	);
}
