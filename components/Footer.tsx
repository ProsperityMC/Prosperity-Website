import Link from "next/link";
import Image from "next/image";

import logo from "../public/prosperity.svg";

export default function Footer() {
	const content = [
		{
			header: "Social",
			links: [
				{ text: "Discord", href: "/" },
				{ text: "YouTube", href: "/" },
				{ text: "Twitter", href: "/" },
				{ text: "GitHub", href: "/" }
			]
		},
		{
			header: "Resources",
			links: [
				{ text: "Branding", href: "/" },
				{ text: "Web Source", href: "https://github.com/ProsperityMC/Prosperity-Website" },
				{ text: "Contact", href: "/" }
			]
		}
	];

	return (
		<div className="w-full select-none flex justify-between container mx-auto px-20 py-24">
			<div className="flex flex-col">
				<Link href={"/"} className="items-center inline-flex overflow-hidden font-bold font-header">
					<Image className="inline-block w-7 h-7 mr-4 rounded" src={logo} alt="" />
					<header>Prosperity MC</header>
				</Link>
			</div>
			<div className="flex gap-16">
				{content.map((entry) => (
					<div className="flex flex-col gap-y-2">
						<header className="type-sub-header text-stone-400">{entry.header}</header>
						{entry.links.map((link) => (
							<Link className="type-nav-link" href={link.href}>
								{link.text}
							</Link>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
