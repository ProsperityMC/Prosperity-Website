import { MDXComponents } from "mdx/types";

import A from "@components/A";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	const LinkHeadingFragment = (props: { children: React.ReactNode; id: string }) => (
		<a className="group" href={`#${props.id}`}>
			{props.children}
			<svg
				className="w-5 h-5 fill-transparent duration-75 group-hover:fill-zinc-500/100 inline-flex align-middle ml-2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20">
				<path
					fillRule="evenodd"
					d="M9.493 2.853a.75.75 0 00-1.486-.205L7.545 6H4.198a.75.75 0 000 1.5h3.14l-.69 5H3.302a.75.75 0 000 1.5h3.14l-.435 3.148a.75.75 0 001.486.205L7.955 14h2.986l-.434 3.148a.75.75 0 001.486.205L12.456 14h3.346a.75.75 0 000-1.5h-3.14l.69-5h3.346a.75.75 0 000-1.5h-3.14l.435-3.147a.75.75 0 00-1.486-.205L12.045 6H9.059l.434-3.147zM8.852 7.5l-.69 5h2.986l.69-5H8.852z"
					clipRule="evenodd"
				/>
			</svg>
		</a>
	);

	return {
		h1: ({ children, id }) => (
			<h1 id={id}>
				<LinkHeadingFragment id={id as string}>{children}</LinkHeadingFragment>
			</h1>
		),
		h2: ({ children, id }) => (
			<h2 id={id}>
				<LinkHeadingFragment id={id as string}>{children}</LinkHeadingFragment>
			</h2>
		),
		h3: ({ children, id }) => (
			<h3 id={id}>
				<LinkHeadingFragment id={id as string}>{children}</LinkHeadingFragment>
			</h3>
		),
		h4: ({ children, id }) => (
			<h4 id={id}>
				<LinkHeadingFragment id={id as string}>{children}</LinkHeadingFragment>
			</h4>
		),
		h5: ({ children, id }) => (
			<h5 id={id}>
				<LinkHeadingFragment id={id as string}>{children}</LinkHeadingFragment>
			</h5>
		),
		h6: ({ children, id }) => (
			<h6 id={id}>
				<LinkHeadingFragment id={id as string}>{children}</LinkHeadingFragment>
			</h6>
		),
		a: ({ children, href }) => (
			<A className="custom-link" href={href || "#"}>
				{children}
			</A>
		),
		...components
	};
}
