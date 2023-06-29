/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { mdxRs: true },
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	rewrites: [{ source: "/wiki", destination: "/wiki/index" }]
};
const withMDX = require("@next/mdx")();

module.exports = withMDX(nextConfig);
