import Image from "next/image";
import { ImageProps } from "next/dist/client/image";

interface GlowingImageProps extends ImageProps {
	class?: string;
}

export default function GlowingImage(props: GlowingImageProps) {
	return (
		<div className={`relative group ${props?.class}`}>
			<Image className="rounded-lg bg-gradient-to-r to-zinc-900" {...props} />
			<Image
				className="group-hover:opacity-100 duration-200 absolute blur-2xl scale-120 opacity-70 select-none saturate-200 mix-blend-lighten -z-50 top-0 right-0 rounded-lg bg-gradient-to-r to-zinc-900"
				{...props}
			/>
		</div>
	);
}
