import A from "@components/A";

export default function Donate() {
	return (
		<div className="markdown">
			<header className="text-4xl text-center">Support Prosperity</header>
			<p className="text-zinc-400 text-lg text-center max-w-2xl mx-auto">
				Prosperity will always be free for everyone to enjoy. If you are able you can help ensure
				that we are able to stay online for years to come.
			</p>
			<section className="flex gap-8 my-6 mx-auto max-w-6xl">
				<div className="py-6 rounded-md duration-150 w-full bg-zinc-800 p-4 border border-zinc-700 markdown bg-gradient-to-tl from-40% from-transparent to-lime-500/40">
					<header className="text-2xl">Noble Engineer</header>
					<p>
						The foundation of Prosperity, a noble and respectable class who chooses to support the
						community with an honorable monthly donation.
					</p>
					<ul role="list">
						<li>Perk</li>
						<li>Perk</li>
						<li>Perk</li>
						<li>Perk</li>
					</ul>
					<header className="mt-16 text-2xl">
						$8.00 <p className="inline text-zinc-400 text-base align-top">/mo</p>
					</header>
					<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-8 py-1 type-header rounded justify-items-end">
						Donate
					</button>
				</div>
				<div className="py-6 rounded-md duration-150 w-full bg-zinc-800 p-4 border border-zinc-700 markdown bg-gradient-to-tl from-40% from-transparent to-stone-500/40">
					<header className="text-2xl">Adept Industralist</header>
					<p>
						Those who go beyond the norm and have truly been inspired. A class of inventors and
						innovators who support Prosperity with a great monthly donation.
					</p>
					<ul role="list">
						<li>Perk</li>
						<li>Perk</li>
						<li>Perk</li>
						<li>Perk</li>
					</ul>
					<header className="mt-16 text-2xl">
						$16.00 <p className="inline text-zinc-400 text-base align-top">/mo</p>
					</header>
					<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-8 py-1 type-header rounded justify-items-end">
						Donate
					</button>
				</div>
				<div className="py-6 rounded-md duration-150 w-full bg-zinc-800 p-4 border border-zinc-700 markdown bg-gradient-to-tl from-40% from-transparent to-purple-500/40">
					<header className="text-2xl">Grand High Architect</header>
					<p>
						The high-minded and imaginative architect class. Prosperity has proved a grand canvas
						for those who choose to support with an extravagant monthly donation.
					</p>
					<ul role="list">
						<li>Perk</li>
						<li>Perk</li>
						<li>Perk</li>
						<li>Perk</li>
					</ul>
					<header className="mt-16 text-2xl">
						$24.00 <p className="inline text-zinc-400 text-base align-top">/mo</p>
					</header>
					<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-8 py-1 type-header rounded justify-items-end">
						Donate
					</button>
				</div>
			</section>
			<section className="flex gap-12 mx-auto">
				<A className="custom-link" href="#">
					How we use donations
				</A>
				<A className="custom-link" href="https://">
					View on Patreon
				</A>
				<A className="custom-link" href="https://">
					Financial stats
				</A>
			</section>
		</div>
	);
}
