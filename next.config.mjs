/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
import createMdx from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	rewrites: [{ source: "/wiki", destination: "/wiki/index" }]
};

const withMDX = createMdx({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [remarkGfm, remarkBreaks],
		rehypePlugins: [rehypeSlug]
	}
});

export default withMDX(nextConfig);
