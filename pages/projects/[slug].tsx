import { InferGetStaticPropsType } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";

import A from "@components/A";
import { projectPageDataGet, projectPageDataGetAll } from "@lib/lib";

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
	allData,
	imageFiles
}: InferGetStaticPropsType<typeof getStaticProps>) {
	const content: Promise<typeof import("project/*.mdx")> = import(`../../projects/${fileName}`);
	const ProjectContent = dynamic(content);

	return (
		<div>
			{imageFiles.map((i) => i)}
			<ProjectContent />
		</div>
	);
}
