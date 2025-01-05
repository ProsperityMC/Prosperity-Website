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
				{ text: "Twitter (X)", href: "https://x.com/prosperitymc" },
				{ text: "Bluesky", href: "https://bsky.app/profile/prosperitymc.net" },
				{ text: "GitHub", href: "https://github.com/ProsperityMC" },
				{ text: "YouTube", href: "https://youtube.com/@prosperitymc" },
			]
		},
		{
			header: "Resources",
			links: [
				{ text: "Site Source", href: "https://github.com/ProsperityMC/Prosperity-Website" },
				{ text: "World Download", href: "https://drive.google.com/file/d/1Cxpbvs9gCttadVn8E7LRFRDpbxn-_QFh/view" },
			]
		},
		{
			header: "Projects",
			links: [
				{ text: "Modpack", href: "https://modrinth.com/modpack/prosperity" },
				{ text: "Remodulated", href: "https://modrinth.com/modpack/remodulated" },
				{ text: "Resource Pack", href: "https://github.com/ProsperityMC/Prosperity-Resource-Pack" },
				{ text: "Scripts", href: "https://github.com/ProsperityMC/Prosperity-Scripts" }
			]
		},
		{
			header: "Friends",
			links: [
				{ text: "Canada", href: "https://visitquebec.info" },
				{ text: "The Iris Project", href: "https://github.com/IrisShaders/Iris" },
				{ text: "Lab Safety", href: "https://remove.directory/chemicals" },
				{ text: "Melon", href: "https://mrmelon54.com" },
				{ text: "June('s) Minecraft", href: "https://modrinth.com/modpack/june+" },
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
				<div className="flex gap-10 flex-wrap">
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
