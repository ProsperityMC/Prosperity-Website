import Image from "next/image";
import Head from "next/head";

import MainImage from "public/index/main.png";
import Slideshow from "@components/Slideshow";
import A from "@components/A";

function Highlight(props: { children: React.ReactNode }) {
	return <span className="text-zinc-100">{props.children}</span>;
}

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
			<Head>
				<title>This is Prosperity</title>
				<meta property="og:title" content="This is Prosperity" />
				<meta
					property="og:description"
					content="Prosperity is a Minecraft community focused on high-level technical and building gameplay"
				/>
			</Head>
			<div className="absolute top-0 left-0 w-full h-[60rem] -z-50 opacity-50">
				<Image
					priority={true}
					quality={90}
					className="blur-sm md:blur-none duration-200 object-cover object-bottom"
					alt=""
					src={MainImage}
					fill
				/>
			</div>
			<main className="markdown">
				<section className="flex flex-col gap-12 text-center markdown my-52">
					<header className="text-6xl type-header">Build Different, Go Beyond</header>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
						Prosperity is a Minecraft community focused on high-level technical and building
						gameplay. <Highlight>Create</Highlight>, <Highlight>engineer</Highlight>, and{" "}
						<Highlight>grow</Highlight> on a server intent on providing the best possible experience
						for everyone.
					</p>
					<div className="space-x-12">
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
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
							</button>
						</A>
						<A href="/wiki/new-player-guide" className="hidden md:inline custom-link type-header">
							New Player Guide{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5 inline-block align-middle">
								<path d="M10.75 16.82A7.462 7.462 0 0115 15.5c.71 0 1.396.098 2.046.282A.75.75 0 0018 15.06v-11a.75.75 0 00-.546-.721A9.006 9.006 0 0015 3a8.963 8.963 0 00-4.25 1.065V16.82zM9.25 4.065A8.963 8.963 0 005 3c-.85 0-1.673.118-2.454.339A.75.75 0 002 4.06v11a.75.75 0 00.954.721A7.506 7.506 0 015 15.5c1.579 0 3.042.487 4.25 1.32V4.065z" />
							</svg>
						</A>
					</div>
				</section>
				<hr id="learn-more" />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">A Playground For Architects</header>
					<p>
						For those who wish to build, this is a great place to be. With no shortage of community
						projects to contribute to, and a technical community giving you access to endless
						resources, you can expand the scope of your builds further than ever before.
					</p>
					<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Work better together in survival and creative.</Highlight> Take advantage
							of a powerful creative server, real-time schematic syncing, and a cooperative
							community willing to help with large scale builds.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>A wider palette than ever.</Highlight> With more renewable resources
							Prosperity can allow you to build with blocks you never would have dreamed of before.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Building together.</Highlight> With a strong community focus you don't need
							to worry about griefing, trolls, or claims disrupting or ruining your hard work.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Updates in weeks, not months.</Highlight> We work hard to update to the
							most recent version of the game quickly so you can have access to new features faster.
						</p>
					</div>
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
					<A href="/projects" className="block md:flex text-left justify-between mt-8 group">
						<p className="group-hover:text-zinc-300 transition-colors duration-150 text-lg text-zinc-400 font-medium">
							Explore more builds, farms, and projects done on the server
						</p>
						<p className="text-lg font-medium custom-link group-hover:underline">
							Project Gallery
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
						</p>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Expanding The Minds of Engineers</header>
					<p>
						Technical gameplay is at the core of Prosperity, with the server focused heavily on
						allowing experimentation and new ideas.
					</p>
					<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Redstone without compromise.</Highlight> Build what you want without
							worrying about Redstone functionality being broken and limited. Make your farms,
							storage systems, and machines on your terms.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Start strong.</Highlight> Join an established server and skip the early
							game grind. Prosperity already has existing infrastructure and{" "}
							<Highlight>over 30 perimeters</Highlight>.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Collaborate and learn.</Highlight> Meet an existing community of dedicated
							and talented Redstone engineers with wide ranging-expertise. Study our existing
							schematics and huge creative test world.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Expand your ambitions.</Highlight> Take advantage of our carefully thought
							out additions to Redstone mechanics, farms, and quality-of-life additions. Build new
							farms for sand, Elytra, sponges, and more.
						</p>
					</div>
					<A href="/wiki/features" className="block md:flex text-left justify-between mt-8 group">
						<p className="group-hover:text-zinc-300 transition-colors duration-150 text-lg text-zinc-400 font-medium">
							See what's new for technical players
						</p>
						<p className="text-lg font-medium custom-link group-hover:underline">
							Mechanics & Features
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
						</p>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Designed On Prosperity</header>
					<p>Explore the tech created by our members.</p>
					<div className="grid grid-cols-1 lg:grid-cols-3 transition-colors gap-8 w-full">
						<div className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
							<Image
								className="max-w-xs mx-auto"
								alt=""
								src="/index/schematics/8x-speed-trencher.png"
								width={512}
								height={512}
							/>
							<header className="text-lg type-header my-1.5">8x Speed Trencher</header>
							<p className="mb-1.4">
								A wicked fast trencher, in-part responsible for the huge number of perimeters on the
								server.
							</p>
							<div className="flex gap-4 mt-1.5 items-center">
								<Image
									alt=""
									src="/index/users/sg.webp"
									width={256}
									height={256}
									className="w-8 h-8 bg-zinc-800 rounded-full border-none"
								/>
								<header className="text-lg">Sg</header>
							</div>
						</div>
						<div className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
							<Image
								className="max-w-xs mx-auto"
								alt=""
								src="/index/schematics/void-trader.png"
								width={512}
								height={512}
							/>
							<header className="text-lg type-header my-1.5">Void Trading Hall</header>
							<p className="mb-1.4">
								A fast, highly performant, void trading hall. Utilizes chainstone and auto-crafting.
							</p>
							<div className="flex gap-4 mt-1.5 items-center">
								<Image
									alt=""
									src="/index/users/madpancho.webp"
									width={256}
									height={256}
									className="w-8 h-8 bg-zinc-800 rounded-full border-none"
								/>
								<Image
									alt=""
									src="/index/users/devil.webp"
									width={256}
									height={256}
									className="w-8 h-8 bg-zinc-800 rounded-full border-none"
								/>
								<Image
									alt=""
									src="/index/users/bothebot.webp"
									width={256}
									height={256}
									className="w-8 h-8 bg-zinc-800 rounded-full border-none"
								/>
								<Image
									alt=""
									src="/index/users/sg.webp"
									width={256}
									height={256}
									className="w-8 h-8 bg-zinc-800 rounded-full border-none"
								/>
								<header className="text-lg">Mad, Devil, BotheBot, & Sg</header>
							</div>
						</div>
						<div className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
							<Image
								className="max-w-xs mx-auto"
								alt=""
								src="/index/schematics/shulker-loader.png"
								width={512}
								height={512}
							/>
							<header className="text-lg type-header my-1.5">Fast Shulker Loader</header>
							<p className="mb-1.4">
								A fast and satisfying design for loading preset Shulker configurations.
							</p>
							<div className="flex gap-4 mt-1.5 items-center">
								<Image
									alt=""
									src="/index/users/index.webp"
									width={256}
									height={256}
									className="w-8 h-8 bg-zinc-800 rounded-full border-none"
								/>
								<header className="text-lg">Index</header>
							</div>
						</div>
					</div>
					<A href="/schematics" className="block md:flex text-left justify-between mt-8 group">
						<p className="group-hover:text-zinc-300 transition-colors duration-150 text-lg text-zinc-400 font-medium">
							See the complete schematic archive
						</p>
						<p className="text-lg font-medium custom-link group-hover:underline">
							Schematic Archive
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
						</p>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">By The Community, For The Community</header>
					<p>
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
					<A
						href="/wiki/admin-overview"
						className="block md:flex text-left justify-between mt-8 group">
						<p className="group-hover:text-zinc-300 transition-colors duration-150 text-lg text-zinc-400 font-medium">
							Read more about how we keep the server safe and civil
						</p>
						<p className="text-lg font-medium custom-link group-hover:underline">
							Public Admin Documentation
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
						</p>
					</A>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-20">
					<header className="text-4xl type-header">Fast and Reliable</header>
					<p>
						Key to both technical gameplay and quality-of-life, we take performance and reliability
						seriously.
					</p>
					<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>20 TPS.</Highlight> Enjoy consistent, solid, performance without worrying
							about game breaking optimization plugins.{" "}
							<Highlight>Don't just run one world eater</Highlight>, run two, or three!
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Dedicated Hardware.</Highlight> Prosperity is hosted on dedicated high-end
							hardware from a trustworthy host in Los Angeles, California.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Extensive backups and logging.</Highlight> Don't worry about losing days of
							progress if something goes wrong. We take full advantage of complete off-site backups
							and verbose block logging.
						</p>
						<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left">
							<Highlight>Battle tested.</Highlight> We only rely on the best open-source mods and
							software, with talented developers in the community to fix issues if they arise.
						</p>
					</div>
				</section>
				<hr />
				<section className="flex flex-col gap-12 text-center markdown my-36">
					<header className="text-5xl">This is Prosperity</header>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
						Ready to join our community? Join our Discord and apply to be whitelisted now.
					</p>
					<div>
						<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
							<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
								Join The Server
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
							</button>
						</A>
					</div>
				</section>
			</main>
		</>
	);
}
