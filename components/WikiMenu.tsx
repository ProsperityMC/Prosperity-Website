import { WikiData } from "@lib/lib";
import A from "./A";

export default function WikiMenu(props: {
	pages: WikiData[];
	baseUrl: string;
}) {
	// Sorting pages by alphabetical order of the title
	// otherwise the pages will be sorted by the file name
	// which may not match the title
	const pages = props.pages.sort((a, b) => {
		const nameA = a.meta?.title?.toLowerCase() || a.slug;
		const nameB = b.meta?.title?.toLowerCase() || a.slug;

		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;

		return 0;
	});
	const categories = props.pages
		.map((page) => page.meta?.category?.toLowerCase())
		.filter((v, i, list) => list.indexOf(v) === i)
		.sort();

	return (
		<div className="whitespace-pre">
			<div className="flex sticky top-20 flex-col gap-2 pr-4 select-none w-56">
				<A
					href="/wiki"
					className="font-header font-medium"
					activeClassName="text-white border-l-2 px-4 border-yellow-500 hover:border-yellow-400 duration-150">
					Index
				</A>
				{pages
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
						{pages
							.filter((page) => page.meta?.publish != false)
							.filter(
								(page) =>
									page.meta?.category?.toLowerCase() ==
										category?.toLowerCase() &&
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
