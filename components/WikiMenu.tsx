import A from "@components/A";

export default function WikiMenu(props: { slugs: { params: { slug: string } }[] }) {
	return (
		<div className="flex flex-col">
			{props.slugs.map((slug) => (
				<A key={slug.params.slug} href={slug.params.slug} className="font-header font-medium" activeClassName="text-white">
					{slug.params.slug}
				</A>
			))}
		</div>
	);
}
