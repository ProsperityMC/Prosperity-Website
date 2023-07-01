import { InferGetStaticPropsType } from "next";
import { MDXProps } from "mdx/types";
import { readdir } from "fs/promises";
import dynamic from "next/dynamic";
import path from "path";

import WikiMenu from "@components/WikiMenu";

export async function getStaticPaths() {
	const paths = (await readdir(path.join(process.cwd(), "wiki"))).map((file) => {
		return { params: { slug: file.replace(".mdx", "") } };
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const slug = params.slug;
	const slugs = (await getStaticPaths()).paths;

	return { props: { slug, slugs } };
}

export default function WikiPage({ slug, slugs }: InferGetStaticPropsType<typeof getStaticProps>) {
	const Content = dynamic<MDXProps>(import(`../../wiki/${slug}.mdx`));

	return (
		<div className="flex gap-4">
			<WikiMenu slugs={slugs} />
			<article>
				<Content />
			</article>
		</div>
	);
}
