import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import logo from "@public/prosperity.svg";
import A from "@components/A";

export default function Menu() {
	const links: { href: string; text: string; loose?: boolean }[] = [
		{ href: "/", text: "Home" },
		{ href: "/projects", text: "Projects" },
		{ href: "/wiki/index", text: "Wiki", loose: true },
		{ href: "/database", text: "Database" },
		{ href: "/donate", text: "Donate" },
		{ href: "https://map.prosperitymc.net", text: "Map" }
	];
	const [hasScrolled, setHasScrolled] = useState(false);

	// TODO: Fix a behavior where the signal isn't updated upon reloading a page
	// with a saved scroll position.
	if (typeof window != "undefined") {
		window.addEventListener("scroll", () => {
			setHasScrolled(window.scrollY >= 5 ? true : false);
		});
	}

	return (
		<div
			className={`sticky top-0 border-zinc-700 select-none duration-150 ${
				hasScrolled ? "bg-zinc-950/60 backdrop-blur-md py-2.5 border-b" : "py-5"
			}`}>
			<div className={`flex justify-between items-center content-width`}>
				<span className="flex gap-8 items-center">
					<Link
						href={"/"}
						className="items-center hidden md:inline-flex shrink-0 font-bold font-header">
						<Image className="inline-block w-7 h-7 rounded" src={logo} alt="" />
						<header className="ml-4 hidden lg:block">Prosperity MC</header>
					</Link>
					{links.map((link) => (
						<A
							key={link.text}
							activeClassName="text-white"
							activeLooseMatch={link.loose}
							className="font-header font-medium"
							href={link.href}>
							{link.text}
						</A>
					))}
				</span>
				<span className="flex gap-8 flex-grow justify-end">
					<input
						className="w-[100%] max-w-xs placeholder-zinc-400 rounded duration-100 bg-zinc-800 focus:ring-transparent focus:border-white focus:outline focus:outline-transparent px-2 border border-zinc-700"
						placeholder="Search wiki..."
						type="text"
					/>
					<button className="bg-yellow-500 text-zinc-900 px-8 py-1 type-header rounded justify-items-end">
						Join
					</button>
				</span>
			</div>
		</div>
	);
}
