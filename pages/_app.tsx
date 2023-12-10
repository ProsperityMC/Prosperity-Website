/* eslint-disable camelcase */
import { AppProps } from "next/app";
import "@styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "@components/Layout";
import { Analytics } from "@vercel/analytics/react";
import Metadata from "@components/Metadata";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			<Metadata
				title="Prosperity MC"
				description="Prosperity is a Minecraft community focused on high-level technical and building
						gameplay"
				themeColor="#fec11b"
				imageUrl="/_next/image?url=%2Fmeta%2Fdefault.png&w=1200&q=100"
				imageHeight={1200}
				imageWidth={560}
			/>
			<Analytics />
			<SpeedInsights />
			<Component {...pageProps} />
		</Layout>
	);
}
