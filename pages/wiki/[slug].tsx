import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";

import WikiMenu from "@components/WikiMenu";
import { getAllWikiSlugs, getWikiPageData } from "@lib/wiki";
import { MDXProps } from "mdx/types";

export async function getStaticPaths() {
	const paths = await getAllWikiSlugs();

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const wikiPageData = await getWikiPageData(params.slug);
	const slugs = await getAllWikiSlugs();

	return { props: { wikiPageData, slugs } };
}

export default function WikiPage({
	wikiPageData,
	slugs
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const MdxContent = dynamic<MDXProps>(import(`../../wiki/${wikiPageData.file}`));

	return (
		<div className="flex gap-4">
			<WikiMenu slugs={slugs} />
			<article>
				<MdxContent />
			</article>
		</div>
	);
}
