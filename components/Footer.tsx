import Image from "next/image";

import logo from "@public/prosperity.svg";
import A from "@components/A";

export default function Footer() {
	const content = [
		{
			header: "Social",
			links: [
				{ text: "Discord", href: "https://discord.gg/Gf5tDk5EhR" },
				{ text: "Ko-fi", href: "https://ko-fi.com/prosperitymc" },
				{ text: "YouTube", href: "https://youtube.com/@prosperitymc" },
				{ text: "X", href: "https://twitter.com/prosperitymc" },
				{ text: "GitHub", href: "https://github.com/ProsperityMC" }
			]
		},
		{
			header: "Resources",
			links: [
				{ text: "Site Source", href: "https://github.com/ProsperityMC/Prosperity-Website" },
				{ text: "Live Map", href: "https://map.prosperitymc.net" }
			]
		},
		{
			header: "Projects",
			links: [
				{ text: "Client Modpack", href: "https://modrinth.com/modpack/prosperity" },
				{ text: "Remodulated", href: "https://modrinth.com/modpack/remodulated" },
				{ text: "Resource Pack", href: "https://github.com/ProsperityMC/Prosperity-Resource-Pack" },
				{ text: "Scripts", href: "https://github.com/ProsperityMC/Prosperity-Scripts" }
			]
		},
		{
			header: "Friends",
			links: [
				{ text: "Canada", href: "https://visitquebec.info" },
				{ text: "Lab Safety", href: "https://remove.directory/chemicals" },
				{ text: "Melon", href: "https://mrmelon54.com" }
			]
		}
	];

	return (
		<nav className="border-t border-zinc-700 w-full select-none py-12 mt-16 text-sm bg-zinc-950/60 border-zinc-700/100 backdrop-blur-md">
			<div className="content-width flex justify-between gap-16">
				<div className="flex flex-col gap-4">
					<A href={"/"} className="items-center inline-flex overflow-hidden font-bold font-header">
						<Image className="inline-block w-7 h-7 mr-4 rounded" src={logo} alt="" />
						<header className="hidden md:block">Prosperity MC</header>
					</A>
				</div>
				<div className="flex gap-12 flex-wrap">
					{content.map((entry) => (
						<div key={entry.header} className="flex flex-col whitespace-pre min-w-[6rem] gap-y-2">
							<header className="type-sub-header text-xs text-zinc-400">{entry.header}</header>
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
