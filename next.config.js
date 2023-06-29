/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: { mdxRs: true }
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
