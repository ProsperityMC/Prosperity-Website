import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import A from "@components/A";
import { wikiPageDataGet, wikiPageDataGetAll } from "@lib/lib";
import WikiMenu from "@components/WikiMenu";
import Metadata from "@components/Metadata";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

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
			<Metadata title={meta?.title || slug} description={meta?.short || "A wiki page"} />
			<div className="hidden md:flex">
				<WikiMenu pages={allData} baseUrl="/wiki" />
			</div>
			<article className="w-full markdown max-w-5xl mx-auto min-h-screen">
				<section className="markdown">
					<header className="text-4xl">{meta?.title || slug}</header>
					{meta?.short ? <p className="text-lg text-zinc-300">{meta?.short}</p> : <></>}
					<div className="block md:hidden">
						<A
							href="/wiki"
							noIcon={true}
							className="bg-zinc-800 group hover:bg-zinc-700 duration-150 text-zinc-300 py-2 px-6 rounded border border-zinc-700">
							<ArrowLeftIcon className="w-5 h-5 inline-block align-middle" />
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
