import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";

import A from "@components/A";
import { wikiPageDataGet, wikiPageDataGetAll } from "@lib/wiki";
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
			<WikiMenu pages={allData} baseUrl="/wiki" />
			<article className="markdown w-full min-h-screen min-w-0">
				<section className="markdown">
					<header className="text-4xl">{meta?.title || slug}</header>
				</section>
				<WikiContent />
				<hr />
				<p>
					<A
						className="text-yellow-400 hover:underline"
						href={`https://github.com/ProsperityMC/Prosperity-Website/blob/main/wiki/${fileName}`}>
						Edit this page on GitHub
					</A>
				</p>
			</article>
		</div>
	);
}
