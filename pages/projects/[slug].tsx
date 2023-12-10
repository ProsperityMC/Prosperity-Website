import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";

import A from "@components/A";
import { projectPageDataGet, projectPageDataGetAll } from "@lib/lib";
import Slideshow from "@components/Slideshow";
import Metadata from "@components/Metadata";

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
			<Metadata
				title={meta?.title || slug}
				description={meta?.short || "A project page"}
				imageUrl={`/_next/image?url=%2Fprojects%2F${imageFiles[0]}&w=1920&q=50`}
			/>
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
					{meta?.short ? <p className="text-lg text-zinc-400">{meta?.short}</p> : <></>}
					<div className="block md:hidden">
						<A
							href="/projects"
							noIcon={true}
							className="bg-zinc-800 group hover:bg-zinc-700 duration-150 text-zinc-300 py-2 px-6 rounded border border-zinc-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-text-bottom">
								<path
									fillRule="evenodd"
									d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
									clipRule="evenodd"
								/>
							</svg>
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
