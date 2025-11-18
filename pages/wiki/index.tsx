import { InferGetStaticPropsType } from "next";
import Head from "next/head";

import A from "@components/A";
import { wikiPageDataGetAll } from "@lib/lib";
import WikiMenu from "@components/WikiMenu";
import Index from "@wiki/index.mdx";
import { DocumentIcon, SparklesIcon } from "@heroicons/react/24/outline";

export async function getStaticProps() {
	const data = await wikiPageDataGetAll();

	return { props: { data } };
}

export default function Wiki({
	data
}: InferGetStaticPropsType<typeof getStaticProps>) {
	// Sorting pages by alphabetical order of the title
	// otherwise the pages will be sorted by the file name
	// which may not match the title
	const pages = data.sort((a, b) => {
		const nameA = a.meta?.title?.toLowerCase() || a.slug;
		const nameB = b.meta?.title?.toLowerCase() || a.slug;

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;

		return 0;
	});
	const categories = data
		.map((page) => page.meta?.category?.toLowerCase())
		.filter((v, i, list) => list.indexOf(v) === i)
		.sort();

	return (
		<div className="flex gap-8">
			{/* prettier-ignore */}
			<Head>
				<title>Wiki</title>
				<meta property="og:title" content="Wiki" />
				<meta property="twitter:title" content="Wiki" />
				<meta name="description" content="Directory of wiki pages" />
				<meta name="og:description" content="Directory of wiki pages" />
				<meta name="twitter:description" content="Directory of wiki pages" />
			</Head>

			<div className="hidden md:flex">
				<WikiMenu pages={data} baseUrl="/wiki" />
			</div>
			<div className="flex flex-col gap-8 max-w-[100ch] mx-auto">
				<article className="markdown">
					<section className="markdown">
						<header className="text-4xl">Wiki Home</header>
						<p className="text-lg text-zinc-300">
							Directory of wiki pages
						</p>
					</section>
					<hr />
					<Index />
					<hr />
				</article>
				<div className="grid rid-cols-1 md:grid-cols-2 gap-8 w-full">
				<header className="type-sub-header col-span-2 text-zinc-400">Recommended Reading</header>
					{pages
						.filter((page) => page.meta?.publish != false)
						.filter((page) => page.meta?.highlight === true)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="md:col-span-2 p-4 pb-6 block bg-gradient-to-bl from-yellow-500/30 to-zinc-800/30 hover:bg-yellow-500/20 text-left rounded-md duration-200 transform focus:border-yellow-400 border border-yellow-500 w-full">
								<div className="flex gap-2">
									<SparklesIcon className="w-6 h-6 inline-block mt-2 text-yellow-500"></SparklesIcon>
									<header className="text-lg type-header my-1.5 text-yellow-500">
										{page.meta?.title || page.slug}
									</header>
								</div>
								<p className="mb-1.4 text-yellow-500">
									{page.meta?.short || ""}
									<br />
									<br />
								</p>
							</A>
						))}
					{pages
						.filter((page) => page.meta?.publish != false)
						.filter((page) => page.meta?.category === undefined)
						.map((page) => (
							<WikiPageCard
								href={`/wiki/${page.slug}`}
								title={page.meta?.title || page.slug}
								content={page.meta?.short || ""}></WikiPageCard>
						))}
					{categories.map((category) => (
						<>
							{
								/* prettier-ignore */
								category ? <header className="type-sub-header col-span-2 text-zinc-400">{category}</header> : <></>
							}
							{pages
								.filter((page) => page.meta?.publish != false)
								.filter(
									(page) =>
										page.meta?.category?.toLowerCase() ===
										category?.toLowerCase()
								)
								.map((page) => (
									<WikiPageCard
										href={`/wiki/${page.slug}`}
										title={page.meta?.title || page.slug}
										content={
											page.meta?.short || ""
										}></WikiPageCard>
								))}
						</>
					))}
				</div>
			</div>
		</div>
	);
}

function WikiPageCard(props: {
	href: string;
	title: string;
	content: string;
	highlight?: boolean;
}) {
	return (
		<A
			href={props.href}
			className="p-4 pb-6 hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
			<div className="flex gap-2">
				<DocumentIcon className="w-6 h-6 inline-block mt-2"></DocumentIcon>
				<header className="text-lg type-header my-1.5">
					{props.title}
				</header>
			</div>
			<p className="mb-1.4 max-w-sm">
				{props.content}
				{
					/* prettier-ignore */
					props.content.length < 50 ? <><br/><br/></> : <></>
				}
			</p>
		</A>
	);
}
