/* eslint-disable camelcase */
import { AppProps } from "next/app";
import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@components/Layout";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name="author" content="Prosperity MC" />
				<title>This is Prosperity</title>
				<meta property="og:title" content="This is Prosperity" />
				<meta
					property="og:description"
					content="Prosperity is a Minecraft community focused on high-level technical and building
						gameplay"
				/>
				<meta name="theme-color" content="#fec11b" />
				<meta property="og:image" content="/_next/image?url=%2Fopengraph-image.png&w=3840&q=100" />
			</Head>
			<Analytics />
			<SpeedInsights />
			<Component {...pageProps} />
		</Layout>
	);
}
