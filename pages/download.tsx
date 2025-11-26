import Image from "next/image";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

import { ArrowUpRightIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";
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

			<hr />

			<section className="flex flex-col gap-10 text-center markdown">
				<header className="text-4xl type-header">
					World Downloads
				</header>

				<table className="text-left">
					<tbody>
						<tr>
							<td className="w-1/3">
								<A
									className="text-yellow-500 hover:underline"
									href={
										"https://prosperity-download.mrmelon54.com/v1/cce806d7-ae73-4b82-857d-2aa81b0765b1/v1-world-files-2024-12-15T075600Z.zip"
									}>
									<ArchiveBoxIcon className="inline-block w-4 h-4 align-text-top" />{" "}
									Prosperity V1 Combined Download (zip)
								</A>
							</td>
							<td>
								Combined V1 survival + creative world download,
								some features require mods but the world can be
								loaded in vanilla
							</td>
						</tr>
						<tr>
							<td className="w-1/3">
								<A
									className="text-yellow-500 hover:underline"
									href={
										"https://prosperity-download.mrmelon54.com/v2/survival/044de1e4-c958-423e-9de2-a7d0aef518af/prosperity-survival-final-download-2025-11-09T025225Z.zip"
									}>
									<ArchiveBoxIcon className="inline-block w-4 h-4 align-text-top" />{" "}
									Prosperity (V2 / Anew) Survival Download
									(zip)
								</A>
							</td>
							<td>
								V2 / Prosperity Anew modded survival world
								download. Requires the Prosperity modpack to
								run, please ensure you've downloaded the modpack
							</td>
						</tr>
						<tr>
							<td className="w-1/3">
								<A
									className="text-yellow-500 hover:underline"
									href={
										"https://prosperity-download.mrmelon54.com/v2/creative/1fcb8b21-3ddd-4f67-b435-323a5ce8a4eb/prosperity-creative-final-download-2025-11-09T025630Z.zip"
									}>
									<ArchiveBoxIcon className="inline-block w-4 h-4 align-text-top" />{" "}
									Prosperity (V2 / Anew) Creative Download
									(zip)
								</A>
							</td>
							<td>
								V2 / Prosperity Anew creative world, also
								requires mods
							</td>
						</tr>
					</tbody>
				</table>
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
