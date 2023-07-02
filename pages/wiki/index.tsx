import A from "@components/A";
import { wikiPageDataGetAll } from "@lib/wiki";
import { InferGetStaticPropsType } from "next";
import WikiMenu from "@components/WikiMenu";

export async function getStaticProps() {
	const data = await wikiPageDataGetAll();

	return { props: { data } };
}

export default function Wiki({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="flex gap-8">
			<WikiMenu pages={data} baseUrl="/wiki" />
			<div className="flex flex-col gap-8">
				<header className="text-4xl">Index</header>
				<p className="mb-8">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed laudantium velit quas neque?
					Tenetur hic dolores adipisci, quisquam voluptatibus illum blanditiis iusto, autem nobis
					necessitatibus perferendis est. Ipsam, explicabo delectus. Lorem ipsum dolor sit amet
					consectetur, adipisicing elit. Numquam placeat ipsam sed hic aliquam, quisquam laboriosam
					voluptate accusamus reiciendis ratione consequuntur deleniti quod nobis eaque doloremque
					cum architecto consectetur odit.
				</p>
				<div className="grid grid-cols-2 gap-8">
					{data
						.filter((page) => page.meta?.publish != false)
						.map((page) => (
							<A
								href={`/wiki/${page.slug}`}
								className="pb-8 rounded duration-150 focus:border-yellow-500 bg-zinc-800 p-4 border border-zinc-700">
								<header className="text-lg mb-1.5">{page.meta?.title || page.slug}</header>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptates
									dignissimos tempore ab.
								</p>
							</A>
						))}
				</div>
			</div>
		</div>
	);
}
