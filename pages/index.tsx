import Image from "next/image";
import { ArrowRightIcon, BookOpenIcon } from "@heroicons/react/20/solid";
import React from "react";
import Head from "next/head";

import MainImage from "public/index/main.png";
import H from "@components/H";
import Slideshow from "@components/Slideshow";
import A from "@components/A";
import SchematicCard from "@components/SchematicCard";
import InfoGrid from "@components/InfoGrid";
import HighlightLinkBanner from "@components/HighlightLinkBanner";
import ResetBanner from "@components/ResetBanner";

export default function Home() {
	const testimonials: { user: string; iconUrl: string; text: JSX.Element }[] = [
		{
			user: "Interplanetary",
			text: (
				<>
					I joined Prosperity sometime in 2021. It was a super welcoming server with nice, helpful
					people. It was the first TMC server I joined, and frankly, it set my expectations pretty
					high :)
				</>
			),
			iconUrl: "/index/users/interplanetary.webp"
		},
		{
			user: "Andt",
			text: (
				<>
					I've been playing on Prosperity for about a year now, and although the server had already
					been up for quite a while longer, the amazing members of the server helped me get started
					faster than I expected. They're great technical players and equally great builders, but
					most of all, they are the best community I have ever seen in a Minecraft-Server, and I can
					only recommend it.
				</>
			),
			iconUrl: "/index/users/andt.webp"
		},
		{
			user: "Takeout",
			text: (
				<>
					I've played here for a bit now, it's a great place to call home. Some very knowledgeable
					technical players as well as talented builders make for a motivating environment. I highly
					encourage if you're looking to build redstone or not to check it out.
				</>
			),
			iconUrl: "/index/users/takeout.webp"
		}
	];

	return (
		<>
			{/* prettier-ignore */}
			<Head>
				<title>This is Prosperity</title>
				<meta property="og:title" content="This is Prosperity" />
				<meta property="twitter:title" content="This is Prosperity" />
				<meta property="description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay, go beyond, build different" />
				<meta property="og:description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay, go beyond, build different" />
				<meta property="twitter:description" content="Prosperity is a Minecraft community focused on high-level technical and building gameplay, go beyond, build different" />
				<meta property="og:image:width" content="1200" />
				<meta property="og:image:height" content="560" />
			</Head>

			<div className="absolute top-0 left-0 w-full h-[60rem] -z-50 opacity-40">
				<Image
					priority={true}
					quality={90}
					className="blur-sm md:blur-none duration-200 object-cover object-bottom"
					alt=""
					src={MainImage}
					fill
				/>
			</div>

			<main id="main" className="markdown">
				<section className="flex flex-col gap-12 text-center markdown my-52">
					<div className="text-sm mx-auto">
						<ResetBanner></ResetBanner>
					</div>
					<header className="text-6xl type-header">Build Different, Go Beyond</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						Prosperity is a Minecraft community focused on high-level technical and building
						gameplay. <H>Create</H>, <H>engineer</H>, and <H>grow</H> on a server you can call home.
					</p>
					<div className="space-x-12">
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
								<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
							</button>
						</A>
						<A href="/wiki/new-player-guide" className="hidden md:inline custom-link type-header">
							New Player Guide <BookOpenIcon className="w-5 h-5 inline-block align-middle" />
						</A>
					</div>
				</section>

				<hr id="builders" />

				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">A Playground For Architects</header>
					<p className="max-w-4xl mx-auto">
						For those who wish to build, this is a great place to be. With no shortage of community
						projects to contribute to, and a technical community giving you access to endless
						resources, you can expand the scope of your builds further than ever before.
					</p>
					<InfoGrid
						sections={[
							<>
								<H>Work better together in survival and creative.</H> Take advantage of a powerful
								creative server, real-time schematic syncing, and a cooperative community willing to
								help with large scale builds.
							</>,
							<>
								<H>A wider palette than ever.</H> With more renewable resources Prosperity can allow
								you to build with blocks you never would have dreamed of before.
							</>,
							<>
								<H>Building together.</H> With a strong community focus you don't need to worry
								about griefing, trolls, or claims disrupting or ruining your hard work.
							</>,
							<>
								<H>Updates in weeks, not months.</H> We work hard to update to the most recent
								version of the game quickly so you can have access to new features faster.
							</>
						]}
					/>
					<Slideshow
						quality={80}
						images={[
							{
								src: "/projects/mhov-random-rotor-gharmonica-base_0.png",
								width: 1920,
								height: 1080,
								alt: "Base by Mhov, Random Cryptid, Rotor, and gharmonica"
							},
							{
								src: "/projects/nether-hub_0.png",
								width: 1920,
								height: 1080,
								alt: "Community nether hub"
							},
							{
								src: "/projects/benbenney-iron-farm.png",
								width: 1920,
								height: 1080,
								alt: "Benbenney's iron farm"
							}
						]}
					/>
					<HighlightLinkBanner
						content="Explore more builds, farms, bases, and projects"
						linkContent="Project Gallery"
						href="/projects"
					/>
				</section>

				<hr className="technical" />

				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Expanding The Minds of Engineers</header>
					<p className="max-w-4xl mx-auto">
						Technical gameplay is at the core of Prosperity, with the server focused heavily on
						allowing experimentation and new ideas.
					</p>
					<InfoGrid
						sections={[
							<>
								<H>Redstone without compromise.</H> Build what you want without worrying about
								Redstone functionality being broken and limited. Make your farms, storage systems,
								and machines on your terms.
							</>,
							<>
								<H>Start strong.</H> Join an established server and skip the early game grind.
								Prosperity already has existing infrastructure and <H>over 30 perimeters</H>.
							</>,
							<>
								<H>Collaborate and learn.</H> Meet an existing community of dedicated and talented
								Redstone engineers with wide ranging-expertise. Study our existing schematics and
								huge creative test world.
							</>,
							<>
								<H>Expand your ambitions.</H> Take advantage of our carefully thought out additions
								to Redstone mechanics, farms, and quality-of-life additions. Build new farms for
								sand, Elytra, sponges, and more.
							</>
						]}
					/>
					<HighlightLinkBanner
						content="See what's new for technical players"
						linkContent="Mechanics & Features"
						href="/wiki/features"
					/>
				</section>

				<hr id="schematics" />

				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Designed On Prosperity</header>
					<p className="max-w-4xl mx-auto">Explore the tech created by our members.</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 transition-colors gap-8 w-full">
						<SchematicCard
							imageUrl="/index/schematics/8x-speed-trencher.png"
							imageAlt=""
							title="8x Speed Trencher"
							content="A wicked fast trencher, in-part responsible for the huge number of perimeters on the
							server."
							credits={[{ userIconUrl: "/index/users/sg.webp", username: "Sg" }]}
						/>
						<SchematicCard
							imageUrl="/index/schematics/void-trader.png"
							imageAlt=""
							title="Void Trading Hall"
							content={
								<>
									A fast, highly performant, void trading hall. Utilizes{" "}
									<A className="custom-link" href="/wiki/features#redstone">
										chainstone
									</A>{" "}
									and auto-crafting.
								</>
							}
							credits={[
								{ userIconUrl: "/index/users/bothebot.webp", username: "BotheBot" },
								{ userIconUrl: "/index/users/madpancho.webp", username: "Mad" },
								{ userIconUrl: "/index/users/devil.webp", username: "Devil" },
								{ userIconUrl: "/index/users/sg.webp", username: "Sg" }
							]}
						/>
						<SchematicCard
							imageUrl="/index/schematics/shulker-loader.png"
							imageAlt=""
							title="Fast Shulker Loader"
							content={<>A fast and satisfying design for loading preset Shulker configurations.</>}
							credits={[{ userIconUrl: "/index/users/index.webp", username: "Index" }]}
						/>
					</div>
				</section>

				<hr id="community" />

				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">By The Community, For The Community</header>
					<p className="max-w-4xl mx-auto">
						Prosperity is it's community. We take community feedback and suggestions to and strive
						to create the best experience possible. See what our members think.
					</p>
					<div className="columns-1 md:columns-2 lg:columns-3 gap-8 overflow-hidden">
						{testimonials.map((comment, i) => (
							<div
								key={i}
								className="break-inside-avoid-column border border-zinc-700 p-4 mb-4 rounded-md text-left">
								<div className="flex gap-4 mb-1.5 items-center">
									<Image
										alt=""
										src={comment?.iconUrl}
										width={256}
										height={256}
										className="w-8 h-8 bg-zinc-800 rounded-full border-none"
									/>
									<header className="text-lg">{comment.user}</header>
								</div>
								{comment.text}
							</div>
						))}
					</div>
					<HighlightLinkBanner
						content="Read more about how we keep the server safe and civil"
						linkContent="Public Admin Documentation"
						href="/wiki/admin-guide"
					/>
				</section>

				<hr id="performance" />

				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Fast and Reliable</header>
					<p className="max-w-4xl mx-auto">
						Key to both technical gameplay and quality-of-life, we take performance and reliability
						seriously.
					</p>
					<InfoGrid
						sections={[
							<>
								<H>20 TPS.</H> Enjoy consistent, solid, performance without worrying about game
								breaking optimization plugins. <H>Don't just run one world eater</H>, run two, or
								three!
							</>,
							<>
								<H>Dedicated Hardware.</H> Prosperity is hosted on dedicated high-end hardware from
								a trustworthy host in Los Angeles, California.
							</>,
							<>
								<H>Extensive backups and logging.</H> Don't worry about losing days of progress if
								something goes wrong. We take full advantage of complete off-site backups and
								verbose block logging.
							</>,
							<>
								<H>Battle tested.</H> We only rely on the best open-source mods and software, with
								talented developers in the community to fix issues if they arise.
							</>
						]}
					/>
				</section>

				<hr id="join" />

				<section className="flex flex-col gap-12 text-center markdown my-36">
					<header className="text-5xl">This is Prosperity</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						Ready to join our community? Join our Discord and apply to be whitelisted now.
					</p>
					<div>
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
								<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
							</button>
						</A>
						<div className="mt-6 text-sm text-zinc-400 max-w-[50ch] mx-auto">
							If you are a member of the server find joining information <A className="underline hover:no-underline" href="/wiki">here</A>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
