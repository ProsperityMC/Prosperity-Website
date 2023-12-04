import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";

import A from "@components/A";
import { wikiPageDataGet, wikiPageDataGetAll } from "@lib/lib";
import WikiMenu from "@components/WikiMenu";
import Head from "next/head";

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
				<meta name="description" content={meta?.short || ""} />
			</Head>
			<WikiMenu pages={allData} baseUrl="/wiki" />
			<article className="markdown max-w-4xl mx-auto min-h-screen">
				<section className="markdown">
					<header className="text-4xl">{meta?.title || slug}</header>
					{meta?.short ? <p className="text-lg text-zinc-400">{meta?.short}</p> : <></>}
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
