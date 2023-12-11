import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slideshow(props: {
	images: { src: string; width: number; height: number; alt: string }[];
	autoScroll?: boolean;
	autoScrollDuration?: number;
	autoScrollDirection?: "forward" | "backward";
	quality?: number;
}) {
	const [imageIndex, setImageIndex] = useState(0);
	const advance = (direction: "forward" | "backward") => {
		const maxIndex = props.images.length - 1;

		if (direction == "forward") {
			setImageIndex(imageIndex + 1 > maxIndex ? 0 : imageIndex + 1);
		} else {
			setImageIndex(imageIndex - 1 < 0 ? maxIndex : imageIndex - 1);
		}
	};

	if (props.autoScroll) {
		useEffect(() => {
			const timer = setInterval(
				() => advance(props.autoScrollDirection || "forward"),
				props.autoScrollDuration || 2000
			);

			return () => clearInterval(timer);
		});
	}

	return (
		<div className="aspect-video">
			{props.images.map((image, index) => (
				<Image
					priority={index == 0 ? true : false}
					hidden={imageIndex == index ? false : true}
					key={image.src}
					className="rounded-lg w-auto h-full mx-auto bg-zinc-800"
					src={image.src}
					width={image.width}
					height={image.height}
					alt={image.alt}
					quality={props.quality || 75}
					loading="eager"
				/>
			))}
			<div className="py-4 flex justify-center self-center">
				<span className="flex gap-6">
					<button
						className="text-zinc-50 active:text-yellow-500 duration-200"
						onClick={() => advance("backward")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<p className="text-sm text-zinc-300 self-center select-none">
						{imageIndex + 1} of {props.images.length}
					</p>
					<button
						className="text-zinc-50 active:text-yellow-500 duration-200"
						onClick={() => advance("forward")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							className="w-5 h-5">
							<path
								fillRule="evenodd"
								d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</span>
			</div>
		</div>
	);
}
