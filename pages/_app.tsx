/* eslint-disable camelcase */
import { AppProps } from "next/app";
import Head from "next/head";

import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@components/Layout";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			{/* prettier-ignore */}
			<Head>
				<title>Prosperity MC</title>
				<meta property="og:title" content="Prosperity MC" />
				<meta property="twitter:title" content="Prosperity MC" />
				<meta property="description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay" />
				<meta property="og:description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay" />
				<meta property="twitter:description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay" />
				<meta property="og:image" content="/_next/image?url=%2Fmeta%2Fdefault.png&w=1200&q=100" />
				<meta
					property="twitter:image"
					content="/_next/image?url=%2Fmeta%2Fdefault.png&w=1200&q=100"
				/>
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="560" />
				<meta name="theme-color" content="#fec11b" />
			</Head>
			<Analytics />
			<SpeedInsights />

			<Component {...pageProps} />
		</Layout>
	);
}
