/* eslint-disable camelcase */
import { AppProps } from "next/app";
import "@styles/globals.css";

import Layout from "@components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Head>
				<meta name="author" content="Prosperity MC" />
				<title>This is Prosperity</title>
				<meta
					property="og:description"
					content="Prosperity is a Minecraft community focused on high-level technical and building
						gamepolay"
				/>
				<meta name="theme-color" content="#fec11b" />
				<meta property="og:image" content="_next/image?url=%2Fopengraph-image.png&w=3840&q=100" />
			</Head>
			<Component {...pageProps} />
		</Layout>
	);
}
