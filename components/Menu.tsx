import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { HeartIcon, ArrowRightIcon } from "@heroicons/react/20/solid";

import logo from "@public/prosperity.svg";
import A from "@components/A";

export default function Menu() {
	const links: { href: string; text: string; loose?: boolean }[] = [
		{ href: "/", text: "Home" },
		{ href: "/projects", text: "Projects", loose: true },
		{ href: "/database", text: "Database" },
		{ href: "/wiki", text: "Wiki", loose: true },
		// { href: "/schematics", text: "Schematics" },
		{ href: "https://map.prosperitymc.net", text: "Map" }
	];
	const [hasScrolled, setHasScrolled] = useState(false);

	// TODO: Fix a behavior where the signal isn't updated upon reloading a page
	// with a saved scroll position.
	if (typeof window != "undefined") {
		window.addEventListener("scroll", () => {
			setHasScrolled(window.scrollY >= 1 ? true : false);
		});
	}

	return (
		<nav
			className={`z-50 sticky top-0 border-b border-zinc-700/0 select-none duration-150 ${
				hasScrolled
					? "bg-zinc-950/60 border-zinc-700/100 backdrop-blur-md py-2.5 border-b"
					: "py-2.5"
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
				<span className="hidden md:flex gap-8 flex-grow justify-end">
					<A
						href="https://ko-fi.com/prosperitymc"
						noIcon={true}
						className="type-header bg-zinc-800 group hover:bg-zinc-900 duration-150 text-zinc-300 px-6 py-1 rounded  border border-zinc-700 focus:border-yellow-400">
						Donate{"  "}
						<HeartIcon className="w-5 h-5 inline-block align-text-top group-hover:fill-yellow-400 ease-in-out duration-500 group-hover:rotate-12 group-hover:scale-110" />
					</A>
					<A
						href="https://discord.gg/hfTxZ4XxYj"
						noIcon={true}
						className="type-header bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-6 py-1 rounded justify-items-end">
						Join
						<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
					</A>
				</span>
			</div>
		</nav>
	);
}
