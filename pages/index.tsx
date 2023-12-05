import Image from "next/image";

import Slideshow from "@components/Slideshow";
import A from "@components/A";
import GlowingImage from "@components/GlowingImage";

export default function Home() {
	return (
		<main className="markdown">
			<section className="flex flex-col gap-12 text-center markdown my-52">
				<header className="text-6xl">Go Beyond Minecraft</header>
				<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
					Prosperity is a Minecraft community focused on high-level technical and building gameplay.{" "}
					<span className="text-zinc-100">Create</span>,{" "}
					<span className="text-zinc-100">engineer</span> and{" "}
					<span className="text-zinc-100">grow</span> in a server intent on providing the best
					possible experience for everyone.
				</p>
				<div className="space-x-12">
					<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
						<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
							Join The Server
						</button>
					</A>
					<A href="#learn-more" className="custom-link">
						More About Prosperity
					</A>
				</div>
			</section>
			<hr id="learn-more" />
			<section className="flex flex-col gap-12 text-center markdown my-20">
				<header className="text-4xl">A Playground For Architects</header>
				<p>
					Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
					suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
					Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
					justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					hymenaeos.Morbi pellentesque, mauris interdum porta tincidunt, neque orci molestie mauris,
					vitae iaculis dolor felis at nunc.
				</p>
				<Slideshow
					images={[
						{
							src: "/index/builds/a.png",
							width: 1920,
							height: 1080,
							alt: '"The Aabshaar Minar" by Mhov, Rotor, and gharmonica'
						},
						{
							src: "/index/builds/b.png",
							width: 1920,
							height: 1080,
							alt: '"The Eye Of Index" by Index'
						},
						{
							src: "/index/builds/c.png",
							width: 1920,
							height: 1080,
							alt: "Nether hub by MadPancho"
						},
						{
							src: "/index/builds/d.png",
							width: 1920,
							height: 1080,
							alt: "Sand castle by CarbonGhost"
						}
					]}
				/>
				<div className="flex justify-between my-8">
					<p className="text-lg text-zinc-400 font-medium">
						Conubia nostra, per inceptos hymenaeos.Morbi pellentesque, mauris interdum porta.
					</p>
					<A href="#learn-more" className="text-lg font-medium custom-link">
						Project Gallery
					</A>
				</div>
			</section>
			<hr />
			<section className="flex flex-col gap-12 text-center markdown my-20">
				<header className="text-4xl">Expanding The Minds of Engineers</header>
				<p>
					Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
					suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
					Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
					justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					hymenaeos.Morbi pellentesque, mauris interdum porta tincidunt, neque orci molestie mauris,
					vitae iaculis dolor felis at nunc.
				</p>
				<div className="grid grid-cols-1 gap-12 my-12">
					<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left justify-self-start">
						<span className="text-zinc-100">Redstone without comprimise.</span> Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi
						mollitia cum dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem
						placeat?
					</p>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl text-right justify-self-end">
						<span className="text-zinc-100">Redstone without comprimise.</span> Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi
						mollitia cum dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem
						placeat?
					</p>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left justify-self-start">
						<span className="text-zinc-100">Redstone without comprimise.</span> Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi
						mollitia cum dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem
						placeat?
					</p>
				</div>
				<header className="text-3xl">Designed On Prosperity, Used Everywhere Else</header>
				<p>
					Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
					suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
					Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
					justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					hymenaeos.Morbi pellentesque, mauris interdum porta tincidunt, neque orci molestie mauris,
					vitae iaculis dolor felis at nunc.
				</p>
				<div className="flex gap-12 w-full">
					<button className="hover:brightness-110 text-left pb-6 rounded-md duration-200 transform focus:border-yellow-500 bg-zinc-800 p-4 border border-zinc-700 w-full">
						<div className="border-zinc-600 w-full h-52 border rounded-md mb-3" />
						<header className="text-lg my-1.5">A Cool Machine</header>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quia nisi
							deserunt eaque reprehenderit magnam
						</p>
					</button>
					<button className="hover:brightness-110 text-left pb-6 rounded-md duration-200 transform focus:border-yellow-500 bg-zinc-800 p-4 border border-zinc-700 w-full">
						<div className="border-zinc-600 w-full h-52 border rounded-md mb-3" />
						<header className="text-lg my-1.5">A Cool Machine</header>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quia nisi
							deserunt eaque reprehenderit magnam
						</p>
					</button>
					<button className="hover:brightness-110 text-left pb-6 rounded-md duration-200 transform focus:border-yellow-500 bg-zinc-800 p-4 border border-zinc-700 w-full">
						<div className="border-zinc-600 w-full h-52 border rounded-md mb-3" />
						<header className="text-lg my-1.5">A Cool Machine</header>
						<p>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quia nisi
							deserunt eaque reprehenderit magnam
						</p>
					</button>
				</div>
				<div className="flex justify-between my-8">
					<p className="text-lg text-zinc-400 font-medium">
						Conubia nostra, per inceptos hymenaeos.Morbi pellentesque, mauris interdum porta.
					</p>
					<A href="#learn-more" className="text-lg font-medium custom-link">
						Schematic Archive
					</A>
				</div>
			</section>
			<hr />
			<section className="flex flex-col gap-12 text-center markdown my-20">
				<header className="text-4xl">By The Community, For The Community</header>
				<p>
					Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
					suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
					Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
					justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					hymenaeos.Morbi pellentesque, mauris interdum porta tincidunt, neque orci molestie mauris,
					vitae iaculis dolor felis at nunc. Lorem ipsum dolor, sit amet consectetur adipisicing
					elit. Facilis qui ut vitae odit officia eligendi.
				</p>
				<div className="columns-4 overflow-hidden gap-x-4 my-12">
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi mollitia cum
						dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem placeat? Lorem
						ipsum, dolor sit amet consectetur.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi mollitia cum
						dolores enim dolor fuga.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi mollitia cum
						dolores enim dolor fuga. Quo, delectus enim recusandae.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic. consectetur adipisicing elit.
						Consectetur, hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum.
						consectetur adipisicing elit.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Eum, alias. Odit. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Eum, alias. Odit.
					</div>
					<div className="border border-zinc-700 p-4 break-inside-avoid-column mb-4 rounded-md text-left">
						<div className="flex gap-4 mb-1.5 items-center">
							<div className="w-8 h-8 bg-zinc-700 rounded-full" />
							<header className="text-lg">Username</header>
						</div>
						<span className="text-zinc-100">Prosperity is great.</span> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic. Lorem ipsum, dolor sit amet ex quidem
						quod doloremque porro sit sequi, distinctio adipisci!
					</div>
				</div>
			</section>
			<hr />
			<section className="flex flex-col gap-12 text-center markdown my-20">
				<header className="text-4xl">Fast and Reliable</header>
				<p>
					Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
					suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
					Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
					justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
					hymenaeos. Morbi pellentesque.
				</p>
				<div className="flex gap-12">
					<header className="text-lg mx-auto text-yellow-500">24 / 7 uptime</header>
					<header className="text-lg mx-auto text-yellow-500">20 TPS</header>
					<header className="text-lg mx-auto text-yellow-500">Dedicated Hardware</header>
					<header className="text-lg mx-auto text-yellow-500">Extensive Backups + Logs</header>
				</div>
			</section>
			<hr />
			<section className="flex flex-col gap-12 text-center markdown my-52">
				<header className="text-4xl">Go Beyond Minecraft</header>
				<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
					Apply to join Prosperity and join a likeminded community of architects and engineers.
				</p>
				<div>
					<A href="https://discord.gg/hfTxZ4XxYj" noIcon={true}>
						<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
							Join The Server
						</button>
					</A>
				</div>
			</section>
		</main>

		// <div className="flex flex-col gap-8 text-center markdown">
		// 	{/* <div id="headline" /> */}
		// 	{/* <header className="mt-24 text-5xl">This Is Prosperity</header> */}

		// 	<section className="bg-zinc-800 w-full h-[75vh]">

		// 	</section>

		// 	<section className="text-left self-center max-w-5xl markdown">
		// 		<header className="text-center text-5xl">A Playground For Architects</header>
		// 		<p>
		// 			Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
		// 			suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
		// 			Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
		// 			justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
		// 			hymenaeos.Morbi pellentesque, mauris interdum porta tincidunt, neque orci molestie mauris,
		// 			vitae iaculis dolor felis at nunc.
		// 			<br />
		// 			<br />
		// 			Maecenas eu diam a leo porta interdum. In non massa quis odio feugiat sagittis. Quisque ac
		// 			lorem. Maecenas ut sem sed ipsum suscipit malesuada. Nulla quis dui quis ante fermentum
		// 			interdum. Proin eget est a augue vehicula mattis. Pellentesque sed nisi at nisi
		// 			scelerisque iaculis. Phasellus orci. Nulla adipiscing. Suspendisse et leo vel elit
		// 			ullamcorper gravida. Proin tempor, ligula ut tincidunt tempor, mauris nibh feugiat odio,
		// 			nec tincidunt erat orci dictum purus. Etiam luctus odio. Aliquam
		// 		</p>
		// 	</section>
		// 	<Slideshow
		// 		images={[
		// 			{
		// 				src: "/index/builds/a.png",
		// 				width: 1920,
		// 				height: 1080,
		// 				alt: '"The Aabshaar Minar" by Mhov, Rotor, and gharmonica'
		// 			},
		// 			{
		// 				src: "/index/builds/b.png",
		// 				width: 1920,
		// 				height: 1080,
		// 				alt: '"The Eye Of Index" by Index'
		// 			},
		// 			{ src: "/index/builds/c.png", width: 1920, height: 1080, alt: "Nether hub by MadPancho" },
		// 			{
		// 				src: "/index/builds/d.png",
		// 				width: 1920,
		// 				height: 1080,
		// 				alt: "Sand castle by CarbonGhost"
		// 			}
		// 		]}
		// 	/>
		// 	<hr />
		// 	<section className="flex mx-auto gap-8 text-left max-w-5xl">
		// 		<div>
		// 			<header className="text-lg mb-1.5">Collaborate</header>
		// 			<p>
		// 				Maecenas condimentum tincidunt lorem. Vestibulum vel tellus. Sed vulputate. Morbi massa
		// 				nunc,
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<header className="text-lg mb-1.5">Learn</header>
		// 			<p>
		// 				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptates
		// 				dignissimos tempore ab.
		// 			</p>
		// 		</div>
		// 		<div>
		// 			<header className="text-lg mb-1.5">Create</header>
		// 			<p>
		// 				Aenean risus est, porttitor vel, placerat sit amet, vestibulum sit amet, nibh. Ut
		// 				faucibus justo quis
		// 			</p>
		// 		</div>
		// 	</section>
		// 	<hr />
		// 	<section className="text-left self-center markdown">
		// 		<header className="text-center text-5xl">Expanding The Minds Of Engineers</header>
		// 		<p className="mx-auto max-w-5xl">
		// 			Pellentesque nec lectus non risus auctor lobortis. Vestibulum sit amet dolor a ante
		// 			suscipit pulvinar. Sed lacinia. Aliquam erat volutpat. In hac habitasse platea dictumst.
		// 			Vivamus sit amet sem vitae tellus ultricies consequat. Integer tincidunt tellus eget
		// 			justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
		// 			hymenaeos.Morbi pellentesque, mauris interdum porta tincidunt, neque orci molestie mauris,
		// 			vitae iaculis dolor felis at nunc.
		// 			<br />
		// 			<br />
		// 			Maecenas eu diam a leo porta interdum. In non massa quis odio feugiat sagittis. Quisque ac
		// 			lorem. Maecenas ut sem sed ipsum suscipit malesuada. Nulla quis dui quis ante fermentum
		// 			interdum. Proin eget est a augue vehicula mattis. Pellentesque sed nisi at nisi
		// 			scelerisque iaculis. Phasellus orci. Nulla adipiscing. Suspendisse et leo vel elit
		// 			ullamcorper gravida. Proin tempor, ligula ut tincidunt tempor, mauris nibh feugiat odio,
		// 			nec tincidunt erat orci dictum purus. Etiam luctus odio. Aliquam
		// 		</p>
		// 		<section className="flex flex-col gap-12 my-12">
		// 			<div className="bg-gradient-to-b from-zinc-950 absolute w-full top-0" />
		// 			<div className="flex gap-12">
		// 				<p className="text-lg max-w-sm self-center">
		// 					Lorem ipsum dolor sit amet consectetur <b className="text-zinc-100">adipisicing</b>{" "}
		// 					elit. Atque quae architecto dolores consequuntur nihil veritatis blanditiis,
		// 					reiciendis dolorum facilis perferendis cupiditate laborum aspernatur{" "}
		// 					<b className="text-zinc-100">Maecenas condimentum</b> tincidunt lorem. Vestibulum vel
		// 					tellus. Sed vulputate. Morbi massa nunc,
		// 					<br />
		// 					<br />
		// 					<b className="text-zinc-100">Lorem ipsum dolor</b> sit amet consectetur adipisicing
		// 					elit. Atque quae architecto dolores consequuntur nihil veritatis blanditiis,
		// 					reiciendis dolorum facilis perferendis cupiditate laborum aspernatur eius quas velit
		// 					quaerat odio sed quis.
		// 				</p>
		// 				<GlowingImage src={"/index/builds/d.png"} alt="" width={1920} height={1080} />
		// 			</div>
		// 			<div className="flex gap-12">
		// 				<GlowingImage src={"/index/builds/c.png"} alt="" width={1920} height={1080} />
		// 				<p className="text-lg max-w-sm self-center">
		// 					Lorem ipsum dolor sit amet consectetur <b className="text-zinc-100">adipisicing</b>{" "}
		// 					elit. Atque quae architecto dolores consequuntur nihil veritatis blanditiis,
		// 					reiciendis dolorum facilis perferendis cupiditate laborum aspernatur{" "}
		// 					<b className="text-zinc-100">Maecenas condimentum</b> tincidunt lorem. Vestibulum vel
		// 					tellus. Sed vulputate. Morbi massa nunc,
		// 					<br />
		// 					<br />
		// 					<b className="text-zinc-100">Lorem ipsum dolor</b> sit amet consectetur adipisicing
		// 					elit. Atque quae architecto dolores consequuntur nihil veritatis blanditiis,
		// 					reiciendis dolorum.
		// 				</p>
		// 			</div>
		// 		</section>
		// 	</section>
		// </div>
	);
}
