import Image from "next/image";

import logo from "@public/prosperity.svg";
import A from "@components/A";

export default function Footer() {
	const content = [
		{
			header: "Social",
			links: [
				{ text: "Discord", href: "https://discord.gg/Gf5tDk5EhR" },
				{ text: "YouTube", href: "https://youtube.com/@prosperitymc" },
				{ text: "Twitter", href: "https://twitter.com/prosperitymc" },
				{ text: "GitHub", href: "https://github.com/ProsperityMC" }
			]
		},
		{
			header: "Resources",
			links: [
				{ text: "Branding", href: "https://github.com/ProsperityMC/Prosperity-Branding" },
				{ text: "Web Source", href: "https://github.com/ProsperityMC/Prosperity-Website" },
				{ text: "Contact", href: "/" }
			]
		}
	];

	return (
		<nav className="border-t border-stone-700 w-full select-none py-8 mt-16 bg-stone-950/60 backdrop-blur-md">
			<div className="content-width flex justify-between">
				<div className="flex flex-col">
					<A href={"/"} className="items-center inline-flex overflow-hidden font-bold font-header">
						<Image className="inline-block w-7 h-7 mr-4 rounded" src={logo} alt="" />
						<header>Prosperity MC</header>
					</A>
				</div>
				<div className="flex gap-16">
					{content.map((entry) => (
						<div key={entry.header} className="flex flex-col gap-y-2">
							<header className="type-sub-header text-stone-400">{entry.header}</header>
							{entry.links.map((link) => (
								<A key={link.text} className="type-nav-link" href={link.href}>
									{link.text}
								</A>
							))}
						</div>
					))}
				</div>
			</div>
		</nav>
	);
}
