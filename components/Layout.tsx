/* eslint-disable camelcase */
import { Inter } from "next/font/google";
import { Archivo } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

import Menu from "@components/Menu";
import Footer from "@components/Footer";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const fontInter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	preload: true
});
const fontArchivo = Archivo({
	subsets: ["latin"],
	variable: "--font-Archivo",
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

export default function Layout(props: { children?: React.ReactNode }) {
	return (
		<div
			className={`${fontInter.variable} ${fontArchivo.variable} ${fontJetBrainsMono.variable}`}>
			<Link href="/rip">
				<div className="backdrop-blur-sm w-full py-1.5 bg-yellow-500/75 hover:bg-yellow-500 duration-300">
					<div className="content-width text-gray-900 font-medium text-center">
						As of November 9th, 2025 Prosperity has been shut down.
						Thank you for playing &lsaquo;3. Read more{" "}
						<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
					</div>
				</div>
			</Link>
			<Menu />
			<div className="pt-16 px-20 content-width min-h-[90vh]">
				{props.children}
			</div>
			<Footer />
		</div>
	);
}
