import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import A from "@components/A";
import { projectPageDataGetAll } from "@lib/lib";
import HighlightLinkBanner from "@components/HighlightLinkBanner";

export async function getStaticProps() {
	const allData = await projectPageDataGetAll();

	return { props: { allData } };
}

export default function Projects({
	allData
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="markdown">
			{/* prettier-ignore */}
			<Head>
				<title>Built On Prosperity</title>
				<meta property="og:title" content="Built On Prosperity" />
				<meta property="twitter:title" content="Built On Prosperity" />
				<meta name="description" content="Explore the builds, farms, and projects created on Prosperity" />
				<meta name="og:description" content="Explore the builds, farms, and projects created on Prosperity" />
				<meta name="twitter:description" content="Explore the builds, farms, and projects created on Prosperity" />
			</Head>

			<section className="flex flex-col gap-12 text-center markdown">
				<div className="markdown">
					<header className="text-4xl type-header">
						Built On Prosperity
					</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						Explore the builds, farms, and projects created on
						Prosperity.
					</p>
				</div>
				<section className="columns-[30rem] w-full overflow-hidden gap-6 space-y-6">
					{allData.map((p) =>
						p.imageFiles.map((i) => (
							<A
								href={`/projects/${i.replace(
									/(_+.\.png)|(\.png)/,
									""
								)}`}
								className="block relative group">
								<Image
									className="bg-zinc-800 rounded-lg"
									src={`/projects/${i}`}
									width={1920}
									height={1080}
									quality={50}
									alt={p.meta?.short || ""}
								/>
								<p className="text-zinc-100 text-left select-none w-full px-4 py-4 rounded-b-lg bg-gradient-to-t from-zinc-900/80 to-transparent md:opacity-0 group-hover:opacity-100 duration-150 absolute bottom-0 left-0">
									{p.meta?.short}
								</p>
							</A>
						))
					)}
				</section>
				<HighlightLinkBanner
					content="Looking to add your creation to the project gallery?"
					linkContent="Contribution Guide"
					href="/wiki/wiki-contribution"
				/>
			</section>
		</div>
	);
}
