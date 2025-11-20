import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

import logo from "@public/prosperity.svg";
import A from "@components/A";

export default function Menu() {
	const links: { href: string; text: string; loose?: boolean }[] = [
		{ href: "/", text: "Home" },
		{ href: "/projects", text: "Projects", loose: true },
		{ href: "/wiki", text: "Wiki", loose: true },
		// { href: "/timeline", text: "Roadmap", loose: false },
		{ href: "/download", text: "Downloads" },
		{ href: "https://ko-fi.com/prosperitymc", text: "Donate" },
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
			<div className={`flex justify-between items-center content-width py-0.5`}>
				<div className="flex items-center justify-center">
					<Link
						href={"/"}
						className="items-center hidden text-zinc-100 md:inline-flex shrink-0 font-bold font-header">
						<Image
							className="inline-block w-7 h-7 rounded"
							src={logo}
							alt=""
						/>
						<header className="ml-4 hidden lg:block">
							Prosperity MC
						</header>
					</Link>
				</div>
				<div className="flex gap-8 items-center">
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
				</div>
				<div className="hidden md:block">
					<A
						href="https://duckduckgo.com/?q=servers+like+prosperity+because+prosperity+doesn%27t+exist+anymore&ia=web"
						noIcon={true}
						className="type-header bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 ml-12 px-6 py-1.5 rounded justify-items-end">
						Leave
						<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
					</A>
				</div>
			</div>
		</nav>
	);
}
