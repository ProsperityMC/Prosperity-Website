import A from "@components/A";
import { ShareIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function News() {
	return (
		<div className="markdown">
			<section className="flex flex-col gap-12 text-center markdown">
				<div className="markdown">
					<header className="text-4xl type-header">News & Announcements</header>
					<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
						Explore the builds, farms, and projects created on Prosperity.
					</p>
				</div>
			</section>
			<section className="flex flex-col">
				<div>
					<header className="py-4 text-yellow-500 mx-auto max-w-5xl w-full">
						January 1st, 2024
					</header>
					<div className="markdown max-w-4xl mx-auto border-l-2 border-yellow-500 pl-8 py-4">
						<h1>2024 is Here</h1>
						<p>
							Hello everyone. As time marches forwards and the calendar turns over to a new year I
							would like to say thanks. To everyone who, living in an era of unrestricted access to
							infinite entertainment, decided to spend their time here.
							<br />
							<br />
							Trivial and low-stakes as it may be, creating and maintaining a space where a
							community like this can develop brings me great joy.
							<br />
							<br />
							May 2024 be good and prosperous for you all.
						</p>
						<hr />
						<section className="flex justify-between items-center">
							<div>
								<div className="flex gap-4 items-center">
									<Image
										alt=""
										src="/index/users/carbonghost.webp"
										width={256}
										height={256}
										className="w-8 h-8 bg-zinc-800 rounded-full border-none"
									/>
									<header className="text-lg">CarbonGhost</header>
								</div>
							</div>
							<div className="flex gap-8 items-center">
								<div>01/01/2024 12:00 AM</div>
								<A
									href="#"
									noIcon={true}
									className="type-header bg-zinc-800 group hover:bg-zinc-900 py-1 duration-150 text-zinc-300 px-6 rounded  border border-zinc-700 focus:border-yellow-400">
									Share{"  "}
									<ShareIcon className="w-5 h-5 inline-block align-text-top" />
								</A>
							</div>
						</section>
					</div>
				</div>
				<div>
					<header className="py-4 text-yellow-500 mx-auto max-w-5xl w-full">
						December 10th, 20234
					</header>
					<div className="markdown max-w-4xl mx-auto border-l-2 border-yellow-500 pl-8 py-4">
						<h1>Donations & More</h1>
						<p>
							Hello everyone, today we're happy to announce, among other things, that you can now
							support Prosperity with a monthly or one-time donation and help us stay online for
							years to come. For now the main benefit is simply supporting the server, however we
							are open to suggestions for more we could do. See the donations page
							<br />
							<br />
							<h3>Re imagined Website</h3>
                            <br />
							Along with this announcement I'm also pleased to release the newly redesigned and
							rewritten website. I've been working late into the night on this over the past week
							and I think it befits beautiful builds it showcases. Check it out
							<br />
							<br />
							<h3>Next Server Game Night</h3>
							<br />
							We would also like to let everyone know that the next community game night will occur,
							starting on, Saturday, December 16, 2023 11:00 PM.
							<br />
							<br />
							We will be playing Xonotic on our server, so you may wish to download and start
							learning the game.
							<br />
							<br />
							<h3>Server Changes</h3>
							<br />
							<ul>
								<li>Added Axiom to the creative server</li>
								<li>Added Redstone Multimeter to the creative server</li>
							</ul>
						</p>
						<hr />
						<section className="flex justify-between items-center">
							<div>
								<div className="flex gap-4 items-center">
									<Image
										alt=""
										src="/index/users/carbonghost.webp"
										width={256}
										height={256}
										className="w-8 h-8 bg-zinc-800 rounded-full border-none"
									/>
									<header className="text-lg">CarbonGhost</header>
								</div>
							</div>
							<div className="flex gap-8 items-center">
								<div>01/01/2024 12:00 AM</div>
								<A
									href="#"
									noIcon={true}
									className="type-header bg-zinc-800 group hover:bg-zinc-900 py-1 duration-150 text-zinc-300 px-6 rounded  border border-zinc-700 focus:border-yellow-400">
									Share{"  "}
									<ShareIcon className="w-5 h-5 inline-block align-text-top" />
								</A>
							</div>
						</section>
					</div>
				</div>
			</section>
		</div>
	);
}
