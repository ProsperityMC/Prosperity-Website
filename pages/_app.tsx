/* eslint-disable camelcase */
import "@styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Atkinson_Hyperlegible } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import Menu from "@components/Menu";
import Footer from "@components/Footer";

const fontInter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	preload: true
});
const fontAtkinsonHyperlegible = Atkinson_Hyperlegible({
	subsets: ["latin"],
	variable: "--font-atkinson-hyperlegible",
	weight: ["400", "700"],
	style: ["normal", "italic"],
	preload: true
});
const fontJetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains-mono",
	weight: ["400"],
	style: ["normal"]
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div
			className={`${fontInter.variable} ${fontAtkinsonHyperlegible.variable} ${fontJetBrainsMono.variable}`}>
			<Menu />
			<div className="px-20">
				<Component {...pageProps} />
			</div>
			<Footer />
		</div>
	);
}
