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
			<div className="hidden md:block">
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
				<div className="columns-1 md:columns-2 lg:columns-3 gap-8 w-full space-y-8">
					{data
						.filter((page) => page.meta?.publish != false)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="block hover:brightness-110 p-4 rounded-md duration-150 focus:border-yellow-500 bg-zinc-800 border border-zinc-700">
								<header className="text-lg mb-1.5">{page.meta?.title || page.slug}</header>
								<p className="mb-1.4">{page.meta?.short || ""}</p>
							</A>
						))}
				</div>
			</div>
		</div>
	);
}
