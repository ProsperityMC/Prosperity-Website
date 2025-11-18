import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { ArrowDownCircleIcon, UsersIcon } from "@heroicons/react/16/solid";
import A from "@components/A";

import PrismLogo from "@public/prism-logo-icon.svg";
import ModrinthLogo from "@public/modrinth-logo-icon.svg";

type ModrinthProject = {
	title: string;
	description: string;
	icon_url: string;
	downloads: number;
	followers: number;
	project_type: string;
	slug: string;
};

export const getServerSideProps = (async () => {
	const res = await fetch("https://api.modrinth.com/v2/project/prosperity");
	const modpack: ModrinthProject = await res.json();

	return { props: { modpack } };
}) satisfies GetServerSideProps<{ modpack: ModrinthProject }>;

export default function Download({
	modpack
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<div className="markdown">
			<section className="flex flex-col gap-10 text-center markdown">
				<header className="text-4xl type-header">
					Download the Modpack
				</header>

				<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
					1. Choose your preferred launcher:
				</p>

				<LauncherSelect></LauncherSelect>

				<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
					1. Get the modpack from Modrinth:
				</p>

				<A
					className="flex justify-between text-left bg-zinc-800 hover:bg-zinc-900 border rounded-md border-zinc-700 px-6 py-5 mx-36"
					href={`https://modrinth.com/${modpack.project_type}/${modpack.slug}`}
					noIcon={true}>
					<div>
						<header className="text-xl type-header">
							{modpack.title}
						</header>
						<p className="mb-2">{modpack.description}</p>
						<div className="flex gap-4">
							<div className="text-zinc-300">
								<ArrowDownCircleIcon className="w-4 h-4 inline-block mr-1" />
								<span className="text-sm align-middle">
									{modpack.downloads} downloads
								</span>
							</div>
							<div className="text-zinc-300">
								<UsersIcon className="w-4 h-4 inline-block mr-1" />
								<span className="text-sm align-middle">
									{modpack.followers} followers
								</span>
							</div>
						</div>
					</div>
				</A>

				<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
					3. Join the server!
				</p>
			</section>
		</div>
	);
}

function LauncherSelect() {
	const launchers = [
		{
			image: PrismLogo,
			header: "Prism Launcher",
			description:
				"Stable, lightweight, customizable, and feature rich. The recommended launcher for modded Minecraft.",
			url: "https://prismlauncher.org/download"
		},
		{
			image: ModrinthLogo,
			header: "Modrinth App",
			description:
				"A beautiful modern design with a better interface for finding and installing content, at the cost of some features.",
			url: "https://modrinth.com/app"
		}
	];

	return (
		<div className="flex justify-around gap-12 mx-auto">
			{launchers.map((launcher, i) => (
				<>
					<div className="flex flex-col gap-6 my-8">
						<div className="mx-auto bg-zinc-950 border border-zinc-800 rounded-full">
							<Image
								className="select-none m-4 w-12 h-12 aspect-square"
								src={launcher.image}
								width={64}
								height={64}
								alt={launcher.header}></Image>
						</div>
						<header className="text-2xl type-header">
							{launcher.header}
						</header>
						<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
							{launcher.description}
						</p>
						<A href={launcher.url} noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-10 py-1.5 type-header rounded justify-items-end">
								Download
								<ArrowUpRightIcon className="w-5 h-5 inline-block align-middle" />
							</button>
						</A>
					</div>

					{i != launchers.length - 1 ? (
						<div className="flex flex-col">
							<span className="w-0.5 h-full bg-zinc-700 mx-auto"></span>
							<span className="my-4 text-xl select-none align-top">
								or
							</span>
							<span className="w-0.5 h-full bg-zinc-700 mx-auto"></span>
						</div>
					) : (
						<></>
					)}
				</>
			))}
		</div>
	);
}
