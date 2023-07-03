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
				{ text: "Contact", href: "/contact" }
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
			links: [{ text: "Quasar", href: "https://discord.gg/vs9DBX9WAz" }]
		}
	];

	return (
		<nav className="w-full select-none py-20 mt-16 text-sm">
			<div className="content-width flex justify-between">
				<div className="flex flex-col gap-4">
					<A href={"/"} className="items-center inline-flex overflow-hidden font-bold font-header">
						<Image className="inline-block w-7 h-7 mr-4 rounded" src={logo} alt="" />
						<header>Prosperity MC</header>
					</A>
					<small className="text-zinc-400">Last update {new Date().toLocaleString()}</small>
				</div>
				<div className="flex gap-16 flex-wrap">
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
