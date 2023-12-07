import { readdir } from "fs/promises";
import path from "path";

export type WikiData = {
	slug: string;
	fileName: string;
	meta: WikiMeta | null;
};

export type WikiMeta = {
	title?: string;
	authors?: string[];
	short?: string;
	publish?: boolean;
	highlight?: boolean;
};

export async function wikiPageDataGetAll(): Promise<WikiData[]> {
	const files = await readdir(path.join(process.cwd(), "wiki"), {
		recursive: true,
		withFileTypes: true
	});
	const data: WikiData[] = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const fileName = file.name;
		const slug = fileName.replace(".mdx", "");
		const content: typeof import("wiki/*.mdx") = await import(`../wiki/${fileName}`);

		data.push({ slug: slug, fileName: fileName, meta: content.meta || null });
	}

	return data;
}

export async function wikiPageDataGet(slug: string): Promise<WikiData> {
	const fileName = `${slug}.mdx`;
	const content: typeof import("wiki/*.mdx") = await import(`../wiki/${fileName}`);
	const data = { slug: slug, fileName: fileName, meta: content.meta || null };

	return data;
}

export type ProjectData = {
	slug: string;
	fileName: string;
	meta: ProjectMeta | null;
	imageFiles: string[];
};

export type ProjectMeta = {
	title?: string;
	credits?: string[];
	short?: string;
	publish?: boolean;
};

export async function projectPageDataGetAll(): Promise<ProjectData[]> {
	const files = await readdir(path.join(process.cwd(), "projects"), {
		recursive: true,
		withFileTypes: true
	});
	const imageFiles = await readdir(path.join(process.cwd(), "public/projects"), {
		recursive: true,
		withFileTypes: true
	});
	const data: ProjectData[] = [];

	for (let i = 0; i < files.length; i++) {
		const file = files[i];
		const fileName = file.name;
		const slug = fileName.replace(".mdx", "");
		const content: typeof import("project/*.mdx") = await import(`../projects/${fileName}`);

		data.push({
			slug: slug,
			fileName: fileName,
			meta: content.meta || null,
			imageFiles: imageFiles
				.filter((image) => image.name.replace(/(_+.\.png)|(\.png)/, "") == slug)
				.map((file) => file.name)
		});
	}

	return data;
}

export async function projectPageDataGet(slug: string): Promise<ProjectData> {
	const fileName = `${slug}.mdx`;
	const content: typeof import("project/*.mdx") = await import(`../projects/${fileName}`);
	const imageFiles = await readdir(path.join(process.cwd(), "public/projects"), {
		recursive: true,
		withFileTypes: true
	});

	const data = {
		slug: slug,
		fileName: fileName,
		meta: content.meta || null,
		imageFiles: imageFiles
			.filter((image) => image.name.replace(/(_+.\.png)|(\.png)/, "") == slug)
			.map((file) => file.name)
	};

	return data;
}
