import Head from "next/head";

export default function NotFound() {
	return (
		<div className="markdown flex flex-col gap-8 text-center">
			{/* prettier-ignore */}
			<Head>
				<title>Content Not Found</title>
				<meta property="og:title" content="Prosperity MC" />
				<meta property="twitter:title" content="Prosperity MC" />
				<meta property="description" content="Error 404, this content does not exist" />
				<meta property="og:description" content="Error 404, this content does not exist" />
				<meta property="twitter:description" content="Error 404, this content does not exist" />
			</Head>
			
			<header className="text-4xl">Error 404</header>
			<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
				The requested page does not exist.
			</p>
		</div>
	);
}
