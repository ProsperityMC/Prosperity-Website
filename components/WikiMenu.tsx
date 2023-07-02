import { WikiData } from "@lib/wiki";
import A from "./A";

export default function WikiMenu(props: { pages: WikiData[]; baseUrl: string }) {
	return (
		<div className="whitespace-pre">
			<div className="flex sticky top-20 flex-col gap-2 pr-4 select-none">
				<A href="/wiki" className="font-header font-medium" activeClassName="text-white">
					Index
				</A>
				{props.pages
					.filter((page) => page.meta?.publish != false)
					.map((page) => (
						<A
							key={page.slug}
							href={`${props.baseUrl}/${page.slug}`}
							className="font-header font-medium"
							activeClassName="text-white">
							{page.meta?.title || page.slug}
						</A>
					))}
			</div>
		</div>
	);
}
