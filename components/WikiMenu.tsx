import { WikiData } from "@lib/lib";
import A from "./A";

export default function WikiMenu(props: {
	pages: WikiData[];
	baseUrl: string;
}) {
	const categories = props.pages
		.map((page) => page.meta?.category)
		.filter((v, i, list) => list.indexOf(v) === i)
		.sort();

	return (
		<div className="whitespace-pre">
			<div className="flex sticky top-20 flex-col gap-2 pr-4 select-none">
				<A
					href="/wiki"
					className="font-header font-medium"
					activeClassName="text-white border-l-2 px-4 border-yellow-500 hover:border-yellow-400 duration-150">
					Index
				</A>
				{props.pages
					.filter((page) => page.meta?.publish != false)
					.filter((page) => page.meta?.category === undefined)
					.map((page) => (
						<A
							key={page.slug}
							href={`${props.baseUrl}/${page.slug}`}
							className="font-header font-medium"
							activeClassName="text-white border-l-2 px-4 border-yellow-500 hover:border-yellow-400 duration-150">
							{page.meta?.title || page.slug}
						</A>
					))}

				{categories.map((category) => (
					<>
						{category ? (
							<header className="type-sub-header text-xs text-zinc-400 mt-4">
								{category}
							</header>
						) : (
							<></>
						)}
						{props.pages
							.filter((page) => page.meta?.publish != false)
							.filter(
								(page) =>
									page.meta?.category == category &&
									page.meta?.category !== undefined
							)
							.map((page) => (
								<A
									key={page.slug}
									href={`${props.baseUrl}/${page.slug}`}
									className="font-header font-medium"
									activeClassName="text-white border-l-2 px-4 border-yellow-500 hover:border-yellow-400 duration-150">
									{page.meta?.title || page.slug}
								</A>
							))}
					</>
				))}
			</div>
		</div>
	);
}
