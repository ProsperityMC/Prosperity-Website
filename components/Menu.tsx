import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import logo from "@public/prosperity.svg";
import A from "@components/A";
import SearchWindow from "./SearchWindow";

export default function Menu() {
	const links: { href: string; text: string; loose?: boolean }[] = [
		{ href: "/", text: "Home" },
		{ href: "/projects", text: "Projects" },
		{ href: "/wiki", text: "Wiki", loose: true },
		// { href: "/database", text: "Database" },
		{ href: "https://map.prosperitymc.net", text: "Map" }
	];
	const [hasScrolled, setHasScrolled] = useState(false);
	const [searchQuery, setSearchQuery] = useState("");

	// TODO: Fix a behavior where the signal isn't updated upon reloading a page
	// with a saved scroll position.
	if (typeof window != "undefined") {
		window.addEventListener("scroll", () => {
			setHasScrolled(window.scrollY >= 5 ? true : false);
		});
	}

	return (
		<nav
			className={`z-50 sticky top-0 border-b border-zinc-700/0 select-none duration-150 ${
				hasScrolled ? "bg-zinc-950/60 border-zinc-700/100 backdrop-blur-md py-2.5 border-b" : "py-2.5"
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
					{/* <div className="w-[100%] max-w-xs">
						<div className="group hover:brightness-110 flex gap-2 place-items-center w-[100%] max-w-xs h-full placeholder-zinc-400 rounded duration-100 bg-zinc-800 focus:ring-transparent focus:border-yellow-400 px-2 border border-zinc-700">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								className="w-5 h-5 fill-zinc-400 peer-focus:text-yellow-400">
								<path
									fillRule="evenodd"
									d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								onChange={(e) => setSearchQuery(e.target.value)}
								className="peer max-w-xs h-full placeholder-zinc-400 bg-zinc-800 focus:outline focus:outline-transparent flex-grow "
								placeholder="Search the database or wiki..."
								type="text"
							/>
						</div>
						{searchQuery != "" ? (
							<div className="absolute w-[100%] max-w-xs mt-4">
								<SearchWindow query={searchQuery} />
							</div>
						) : (
							<></>
						)}
					</div> */}
					<A
						href="https://ko-fi.com/prosperitymc"
						noIcon={true}
						className="bg-zinc-800 group hover:bg-zinc-900 duration-150 text-zinc-300 px-6 py-1 rounded  border border-zinc-700 focus:border-yellow-400">
						Donate{"  "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 inline-block align-text-top group-hover:fill-yellow-400 ease-in-out duration-500 group-hover:rotate-12 group-hover:scale-110">
							<path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
						</svg>
					</A>
					<A
						href="https://discord.gg/hfTxZ4XxYj"
						noIcon={true}
						className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-6 py-1 rounded justify-items-end">
						Join
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5 inline-block align-middle">
							<path
								fillRule="evenodd"
								d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
								clipRule="evenodd"
							/>
						</svg>
					</A>
				</span>
			</div>
		</nav>
	);
}
