import { readdir } from "fs/promises";
import path from "path";

// export type WikiContent = {
// 	rewriteSlug?: string;
// 	title?: string;
// 	color?: string;
// 	keywords?: string[];
// 	description?: string;
// };

// export type WikiPage = {
// 	content?: string;
// 	prevSlug?: string;
// 	nextSlug?: string;
// };

export async function getWikiPageData(slug?: string) {
	const file = `${slug}.mdx`;

	return { file, slug };
}

export async function getAllWikiSlugs() {
	const files = await readdir(path.join(process.cwd(), "wiki"));

	return files.map((file) => {
		return { params: { slug: file.replace(".mdx", "") } };
	});
}
