import A from "./A";

export default function ResetBanner() {
	return (
		<div className="bg-purple-500/30 text-purple-200 border border-purple-500/20 px-6 py-1.5 rounded-md backdrop-blur-sm">
			<p>
				A server reset is planned for the near future, make a suggestion or
				ask a question on{" "}
				<A
					className="underline hover:no-underline"
					href="https://discord.com/invite/hfTxZ4XxYj">
					Discord
				</A>
			</p>
		</div>
	);
}
