import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";

import A from "@components/A";
import { wikiPageDataGet, wikiPageDataGetAll } from "@lib/wiki";

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
			<div className="whitespace-pre mt-6">
				<div className="flex sticky top-[3rem] pt-6 flex-col gap-2 pr-12 select-none">
					{allData.map((page) => (
						<A
							key={page.slug}
							href={page.slug}
							className="font-header font-medium"
							activeClassName="text-white">
							{page.meta?.title || page.slug}
						</A>
					))}
				</div>
			</div>
			<article className="markdown w-full min-h-screen min-w-0 flex flex-col gap-4">
				<section className="mt-12">
					<header className="text-4xl">{meta?.title || slug}</header>
				</section>
				<WikiContent />
			</article>
		</div>
	);
}
