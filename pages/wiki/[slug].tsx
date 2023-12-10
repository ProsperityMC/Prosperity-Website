import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import A from "@components/A";
import { wikiPageDataGet, wikiPageDataGetAll } from "@lib/lib";
import WikiMenu from "@components/WikiMenu";

export async function getStaticPaths() {
	const paths = (await wikiPageDataGetAll()).map((page) => {
		return { params: { slug: page.slug } };
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const data = await wikiPageDataGet(params.slug);
	const allData = await wikiPageDataGetAll();

	return { props: { allData, ...data } };
}

export default function WikiPage({
	slug,
	fileName,
	meta,
	allData
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const content: Promise<typeof import("*.mdx")> = import(`../../wiki/${fileName}`);
	const WikiContent = dynamic(content);

	return (
		<div className="flex gap-8">
			<Head>
				<title>{meta?.title || slug}</title>
				<meta property="og:title" content={meta?.title || slug} />
				<meta name="description" content={meta?.short || "A wiki page"} />
			</Head>
			<div className="hidden md:flex">
				<WikiMenu pages={allData} baseUrl="/wiki" />
			</div>
			<article className="w-full markdown max-w-5xl mx-auto min-h-screen">
				<section className="markdown">
					<header className="text-4xl">{meta?.title || slug}</header>
					{meta?.short ? <p className="text-lg text-zinc-400">{meta?.short}</p> : <></>}
					<div className="block md:hidden">
						<A
							href="/wiki"
							noIcon={true}
							className="bg-zinc-800 group hover:bg-zinc-700 duration-150 text-zinc-300 py-2 px-6 rounded border border-zinc-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-text-bottom">
								<path
									fillRule="evenodd"
									d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
									clipRule="evenodd"
								/>
							</svg>
							Back to Index
						</A>
					</div>
				</section>
				<hr />
				<WikiContent />
				<hr />
				<A
					className="custom-link inline"
					href={`https://github.com/ProsperityMC/Prosperity-Website/blob/main/wiki/${fileName}`}>
					Edit this page on GitHub
				</A>
			</article>
		</div>
	);
}
