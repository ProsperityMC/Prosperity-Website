import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

export interface AProps
	extends LinkProps,
		Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> {
	children?: React.ReactNode;
	activeClassName?: string;
	activeLooseMatch?: boolean;
	noIcon?: boolean;
}

/** Wrapper of the `next/link` element with additional UI functionality.  */
export default function A(props: AProps) {
	const { asPath, isReady } = useRouter();
	const isExternal = props.href.toString().startsWith("http");
	const [computedClassName, setComputedClassName] = useState(props.className);

	useEffect(() => {
		if (!isReady || isExternal) {
			return;
		}

		const path = new URL((props.as || props.href) as string, location.href).pathname;
		const activePath = new URL(asPath, location.href).pathname;

		if ((props.activeLooseMatch && activePath.includes(path)) || path == activePath) {
			setComputedClassName(`${props.className} ${props.activeClassName}`.trim());
		} else {
			setComputedClassName(`${props.className}`);
		}
	});

	return (
		<Link
			{...props}
			className={computedClassName}
			target={isExternal ? "_blank" : ""}
			referrerPolicy="no-referrer">
			{props.children}
			{isExternal && !props.noIcon ? (
				<ArrowUpRightIcon className="w-5 h-5 inline-block align-middle" />
			) : (
				<></>
			)}
		</Link>
	);
}
