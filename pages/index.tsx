import Image from "next/image";

import Slideshow from "@components/Slideshow";
import A from "@components/A";
import GlowingImage from "@components/GlowingImage";

function Highlight(props: { children: React.ReactNode }) {
	return <span className="text-zinc-100">{props.children}</span>;
}

export default function Home() {
	const testimonials: { user: string; iconUrl?: string; text: JSX.Element }[] = [
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus nemo alias ad? Id?
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error.
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus nemo alias ad? Id? Lorem
					ipsum dolor sit amet consecte. Possimus ut delectus doloremque, perspiciatis consectetur
					molestiae impedit?
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet.
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus nemo alias ad? Id? rem
					quibusdam laboriosam ma. Ra.
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque, esse dolore! Laudantium quis, error, aspernatur maxime veniam
					laborum rem quibusdam laboriosam magnam, ut beatae vero accusamus.
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing.
				</>
			)
		},
		{
			user: "Username",
			text: (
				<>
					<Highlight>Prosperity is great.</Highlight> Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Neque. Lorem ipsum dolor sit amet consectetur adipisi.
				</>
			)
		}
	];

	return (
		<main className="markdown">
			<section className="flex flex-col gap-12 text-center markdown my-52">
				<header className="text-6xl">Go Beyond Minecraft</header>
				<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
					Prosperity is a Minecraft community focused on high-level technical and building gameplay.{" "}
					<Highlight>Create</Highlight>, <Highlight>engineer</Highlight> and{" "}
					<Highlight>grow</Highlight> in a server intent on providing the best possible experience
					for everyone.
				</p>
				<div className="space-x-12">
					<A
						href="https://discord.gg/hfTxZ4XxYj"
						noIcon={true}
						className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
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
					</A>
					<A href="#learn-more" className="hidden md:inline-flex custom-link type-header">
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
				<div className="block md:flex text-left justify-between my-8">
					<p className="text-lg text-zinc-400 font-medium">
						Conubia nostra, per inceptos hymenaeos.Morbi pellentesque, mauris interdum porta.
					</p>
					<A href="#learn-more" className="text-lg font-medium custom-link">
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
						<Highlight>Redstone without comprimise.</Highlight> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi mollitia cum
						dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem placeat?
					</p>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl text-right justify-self-end">
						<Highlight>Redstone without comprimise.</Highlight> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi mollitia cum
						dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem placeat?
					</p>
					<p className="text-lg text-zinc-400 font-medium max-w-2xl text-left justify-self-start">
						<Highlight>Redstone without comprimise.</Highlight> Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Consectetur, hic, deleniti at sed est animi mollitia cum
						dolores enim dolor fuga. Quo, delectus enim recusandae quia a eum rem placeat?
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
				<div className="columns-1 space-y-8 md:space-y-0 transition-colors md:columns-3 gap-8 w-full">
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
				<div className="block md:flex text-left justify-between my-8">
					<p className="text-lg text-zinc-400 font-medium">
						Conubia nostra, per inceptos hymenaeos.Morbi pellentesque, mauris interdum porta.
					</p>
					<A href="#learn-more" className="text-lg font-medium custom-link">
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
				<div className="columns-1 md:columns-2 lg:columns-3 gap-8 my-12 overflow-hidden">
					{testimonials.map((comment) => (
						<div className="break-inside-avoid-column border border-zinc-700 p-4 mb-4 rounded-md text-left">
							<div className="flex gap-4 mb-1.5 items-center">
								<div className="w-8 h-8 bg-zinc-700 rounded-full" />
								<header className="text-lg">{comment.user}</header>
							</div>
							{comment.text}
						</div>
					))}
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
				<div className="flex gap-4 md:gap-12">
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
	);
}
