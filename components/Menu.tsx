import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import logo from "../public/prosperity.svg";

export default function Menu() {
	const links = [
		{ href: "/", text: "Home" },
		{ href: "/projects", text: "Projects" },
		{ href: "/wiki", text: "Wiki" },
		{ href: "/database", text: "Database" },
		{ href: "https://map.prosperitymc.net", text: "Map" },
		{ href: "/donate", text: "Donate" }
	];
	const [hasScrolled, setHasScrolled] = useState(false);

	// TODO: Fix a behavior where the signal isn't updated upon reloading a page
	// with a saved scroll position.
	if (typeof window != "undefined") {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 10) {
				setHasScrolled(true);
				console.log("Hi");
			} else {
				setHasScrolled(false);
			}
		});
	}

	return (
		<div className="sticky top-0">
			<div
				className={`flex justify-between duration-200 items-center container mx-auto px-20 border-stone-700 select-none ${
					hasScrolled ? "bg-stone-950/75 backdrop-blur-md py-3 border-b" : "py-5"
				}`}>
				<span className="flex gap-12 items-center">
					<header className="items-center inline-flex overflow-hidden">
						<Image className="inline-block w-7 h-7 mr-4 rounded" src={logo} alt="" />
						<span className="overflow-hidden">Prosperity MC</span>
					</header>
					{links.map((link) => (
						<>
							<Link className="font-header font-medium" href={link.href}>
								{link.text}
							</Link>
						</>
					))}
				</span>
				<button className="bg-yellow-500 text-stone-900 px-8 py-1 rounded justify-items-end">
					Join
				</button>
			</div>
		</div>
	);
}
