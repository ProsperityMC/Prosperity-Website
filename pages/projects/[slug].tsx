import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import A from "@components/A";
import { projectPageDataGet, projectPageDataGetAll } from "@lib/lib";
import Slideshow from "@components/Slideshow";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

export async function getStaticPaths() {
	const paths = (await projectPageDataGetAll()).map((page) => {
		return { params: { slug: page.slug } };
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
	const data = await projectPageDataGet(params.slug);
	const allData = await projectPageDataGetAll();

	return { props: { allData, ...data } };
}

export default function ProjectPage({
	slug,
	fileName,
	meta,
	imageFiles
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const content: Promise<typeof import("project/*.mdx")> = import(`../../projects/${fileName}`);
	const ProjectContent = dynamic(content);

	return (
		<div>
			{/* prettier-ignore */}
			<Head>
				<title>{meta?.title || slug}</title>
				<meta property="og:title" content={meta?.title || slug} />
				<meta property="twitter:title" content={meta?.title || slug} />
				<meta property="description" content={meta?.short || "A project page"} />
				<meta property="og:description" content={meta?.short || "A project page"} />
				<meta property="twitter:description" content={meta?.short || "A project page"} />
				<meta property="og:image" content={`/_next/image?url=%2Fprojects%2F${imageFiles[0]}&w=1920&q=50`} />
				<meta property="twitter:image" content={`/_next/image?url=%2Fprojects%2F${imageFiles[0]}&w=1920&q=50`} />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="560" />
			</Head>

			<Slideshow
				quality={100}
				images={imageFiles.map((i) => ({
					src: `/projects/${i}`,
					width: 1920,
					height: 1080,
					alt: ""
				}))}
			/>

			<article className="w-full markdown max-w-5xl mx-auto mb-20">
				<section className="markdown">
					<header className="text-4xl">{meta?.title || slug}</header>
					{meta?.short ? <p className="text-lg text-zinc-300">{meta?.short}</p> : <></>}
					<div className="block md:hidden">
						<A
							href="/projects"
							noIcon={true}
							className="bg-zinc-800 group hover:bg-zinc-700 duration-150 text-zinc-300 py-2 px-6 rounded border border-zinc-700">
							<ArrowLeftIcon className="w-5 h-5 inline-block align-middle" />
							Back to Index
						</A>
					</div>
				</section>
				<hr />
				<ProjectContent />
				<hr />
				<A
					className="custom-link inline"
					href={`https://github.com/ProsperityMC/Prosperity-Website/blob/main/project/${fileName}`}>
					Edit this page on GitHub
				</A>
			</article>
		</div>
	);
}
