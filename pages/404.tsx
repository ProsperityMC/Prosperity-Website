import Head from "next/head";

export default function NotFound() {
	return (
		<div className="markdown flex flex-col gap-8 text-center">
			<Head>
				<title>Content Not Found</title>
				<meta property="og:title" content="Not Found" />
				<meta property="og:description" content="Error 404" />
			</Head>
			<header className="text-4xl">Error 404</header>
			<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
				The requested page does not exist.
			</p>
		</div>
	);
}
