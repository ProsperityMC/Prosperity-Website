import { ArrowRightIcon } from "@heroicons/react/20/solid";
import A from "@components/A";

export default function HighlightLinkBanner(props: {
	content: string | React.ReactNode;
	linkContent: string | React.ReactNode;
	href: string;
}) {
	return (
		<A href={props.href} className="block md:flex text-left justify-between mt-8 group">
			<p className="group-hover:text-zinc-200 transition-colors duration-150 text-lg text-zinc-300 font-medium">
				{props.content}
			</p>
			<p className="text-lg font-medium custom-link group-hover:underline">
				{props.linkContent}
				<ArrowRightIcon className="w-5 h-5 inline-block align-middle" />
			</p>
		</A>
	);
}
