import { InferGetStaticPropsType } from "next";

import A from "@components/A";
import { wikiPageDataGetAll } from "@lib/wiki";
import WikiMenu from "@components/WikiMenu";
import Index from "@wiki/index.mdx";

export async function getStaticProps() {
	const data = await wikiPageDataGetAll();

	return { props: { data } };
}

export default function Wiki({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="flex gap-8">
			<WikiMenu pages={data} baseUrl="/wiki" />
			<div className="flex flex-col gap-8 max-w-4xl mx-auto">
				<article className="markdown">
					<header className="text-4xl">Index</header>
					<Index />
					<hr />
				</article>
				<div className="grid grid-cols-2 gap-8">
					{data
						.filter((page) => page.meta?.publish != false)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="pb-6 rounded-md duration-150 focus:border-yellow-500 bg-zinc-800 p-4 border border-zinc-700">
								<header className="text-xl mb-1.5">{page.meta?.title || page.slug}</header>
								<p>
									{page.meta?.short || ""}
								</p>
							</A>
						))}
				</div>
			</div>
		</div>
	);
}
