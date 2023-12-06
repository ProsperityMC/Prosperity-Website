import { InferGetStaticPropsType } from "next";

import A from "@components/A";
import { wikiPageDataGetAll } from "@lib/lib";
import WikiMenu from "@components/WikiMenu";
import Index from "@wiki/index.mdx";
import Head from "next/head";

export async function getStaticProps() {
	const data = await wikiPageDataGetAll();

	return { props: { data } };
}

export default function Wiki({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="flex gap-8">
			<Head>
				<title>Wiki Index</title>
				<meta name="description" content="Directory of wiki pages" />
			</Head>
			<div className="hidden md:flex">
				<WikiMenu pages={data} baseUrl="/wiki" />
			</div>
			<div className="flex flex-col gap-8 max-w-4xl mx-auto">
				<article className="markdown">
					<section className="markdown">
						<header className="text-4xl">Index</header>
						<p className="text-lg text-zinc-400">Directory of wiki pages</p>
					</section>
					<hr />
					<Index />
					<hr />
				</article>
				<div className="grid rid-cols-1 md:grid-cols-2 gap-8 w-full">
					{data
						.filter((page) => page.meta?.publish != false && page.meta?.highlight == true)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="md:col-span-2 p-4 pb-6 block bg-gradient-to-br from-yellow-500/30 to-zinc-800/30 hover:bg-yellow-500/20 text-left rounded-md duration-200 transform focus:border-yellow-400 border border-yellow-500 w-full">
								<header className="text-lg type-header my-1.5 text-yellow-500">
									{page.meta?.title || page.slug}
								</header>
								<p className="mb-1.4 max-w-lg text-yellow-500">{page.meta?.short || ""}</p>
							</A>
						))}
					{data
						.filter((page) => page.meta?.publish != false && page.meta?.highlight != true)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
								<header className="text-lg type-header my-1.5">
									{page.meta?.title || page.slug}
								</header>
								<p className="mb-1.4 max-w-lg">{page.meta?.short || ""}</p>
							</A>
						))}
				</div>
			</div>
		</div>
	);
}
