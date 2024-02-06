import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

import A from "@components/A";

export default function Schematics() {
	return (
		<div className="markdown">
			<section className="flex flex-col gap-12 text-center markdown">
				<header className="text-4xl type-header">Designed On Prosperity</header>
				<p className="text-lg text-zinc-300 font-medium max-w-2xl mx-auto">
					Feature not implemented yet, come back later.
				</p>
				<A href="https://www.youtube.com/watch?v=mpsaq5V237w" noIcon={true}>
					<button className="bg-yellow-500 hover:bg-yellow-400 duration-150 text-zinc-900 px-14 py-2 type-header rounded justify-items-end">
						Damn That's Crazy Bro{" "}
						<ExclamationCircleIcon className="w-5 h-5 inline-block align-middle" />
					</button>
				</A>
			</section>
		</div>
	);
}
