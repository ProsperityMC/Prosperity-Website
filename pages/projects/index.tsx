import { InferGetStaticPropsType } from "next";
import Image from "next/image";
import A from "@components/A";
import { projectPageDataGetAll } from "@lib/lib";

export async function getStaticProps() {
	const allData = await projectPageDataGetAll();

	return { props: { allData } };
}

export default function Projects({ allData }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<div className="markdown">
			<section className="flex flex-col gap-12 text-center markdown">
				<header className="text-4xl type-header">Built On Prosperity</header>
				<p className="text-lg text-zinc-400 font-medium max-w-2xl mx-auto">
					A detailed gallery of projects and places on Prosperity.
				</p>
				<section className="columns-1 md:columns-2 w-full overflow-hidden gap-8 space-y-8">
					{allData.map((p) =>
						p.imageFiles.map((i) => (
							<A
								href={`/projects/${i.replace(/(_+.\.png)|(\.png)/, "")}`}
								className="block relative group">
								<Image
									className="bg-zinc-800 rounded-lg"
									src={`/projects/${i}`}
									width={1920}
									height={1080}
									quality={50}
									alt={p.meta?.short || ""}
								/>
								<p className="text-left select-none w-full px-4 py-4 rounded-b-lg bg-gradient-to-t from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 duration-150 absolute bottom-0 left-0">
									{p.meta?.short}
								</p>
							</A>
						))
					)}
				</section>
				<A href="/wiki/features" className="my-20 block md:flex text-left justify-between group">
					<p className="group-hover:text-zinc-300 transition-colors duration-150 text-lg text-zinc-400 font-medium">
						Looking to add your creation to the project gallery?
					</p>
					<p className="text-lg font-medium custom-link group-hover:underline">
						How To Submit A Project
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
			{/* {searchParam ? (
				<>
					<div className="bg-black/30 flex w-screen h-screen fixed left-0 top-0 z-50 backdrop-blur-md py-8 px-24 justify-around">
						<Image
							className="w-auto h-full rounded-xl z-[60]"
							src={`${imagePath.short}/${searchParam}`}
							width={1920}
							height={1080}
							quality={100}
							priority={true}
							alt={""}
						/>
						<A className="fixed w-full h-full top-0 left-0" href="/projects" />
					</div>
				</>
			) : (
				<></>
			)} */}
		</div>
	);
}
