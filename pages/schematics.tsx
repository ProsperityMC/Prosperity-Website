import A from "@components/A";
import Head from "next/head";

export default function Schematics() {
	return (
		<div className="markdown">
			<Head>
				<title>Schematics</title>
				<meta property="og:title" content="Schematics" />
				<meta property="og:description" content="Explore the archive of technical schematics" />
			</Head>
			<section className="flex flex-col gap-12 text-center markdown">
				<header className="text-4xl type-header">Schematics</header>
				<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
					Feature not implemented yet, come back later.
				</p>
				<A href="https://www.youtube.com/watch?v=mpsaq5V237w" noIcon={true}>
					<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
						Damn That's Crazy Bro{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 inline-block align-middle">
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</A>
			</section>
		</div>
	);
}
