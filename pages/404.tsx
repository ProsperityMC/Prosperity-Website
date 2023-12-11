import Metadata from "@components/Metadata";

export default function NotFound() {
	return (
		<div className="markdown flex flex-col gap-8 text-center">
			<Metadata title="Content Not Found" description="Error 404, this content does not exist" />
			<header className="text-4xl">Error 404</header>
			<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
				The requested page does not exist.
			</p>
		</div>
	);
}
