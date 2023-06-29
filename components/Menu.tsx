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
			setHasScrolled(window.scrollY >= 10 ? true : false);
		});
	}

	return (
		<div className="sticky top-0">
			<div
				className={`flex justify-between duration-200 items-center container mx-auto px-20 border-stone-700 select-none ${
					hasScrolled ? "bg-stone-950/75 backdrop-blur-md py-3 border-b" : "py-5"
				}`}>
				<span className="flex gap-10 items-center">
					<Link
						href={"/"}
						className="items-center inline-flex overflow-hidden font-bold font-header">
						<Image className="inline-block w-7 h-7 mr-4 rounded" src={logo} alt="" />
						<header>Prosperity MC</header>
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
				<button className="bg-yellow-500 text-stone-900 px-8 py-1 rounded justify-items-end">
					Join
				</button>
			</div>
		</div>
	);
}
