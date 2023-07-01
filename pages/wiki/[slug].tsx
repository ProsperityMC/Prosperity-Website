import { InferGetStaticPropsType } from "next";
import { MDXProps } from "mdx/types";
import { readdir } from "fs/promises";
import dynamic from "next/dynamic";
import path from "path";

import A from "@components/A";

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
		<div className="flex gap-8">
			<div className="whitespace-pre mt-6">
				<div className="flex sticky top-[3rem] pt-6 flex-col gap-2 pr-12">
					{slugs.map((slug) => (
						<A
							key={slug.params.slug}
							href={slug.params.slug}
							className="font-header font-medium hover:text-white duration-100"
							activeClassName="text-white">
							{slug.params.slug}
						</A>
					))}
				</div>
			</div>
			<article className="markdown w-full min-h-screen min-w-0 space-y-4">
				<section className="mt-12 mb-4">
					<header className="text-4xl">Static Example Title</header>
				</section>
				<Content />
			</article>
		</div>
	);
}
