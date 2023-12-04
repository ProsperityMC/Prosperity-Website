import Image from "next/image";
import { useEffect, useState } from "react";

export default function Slideshow(props: {
	images: { src: string; width: number; height: number; alt: string }[];
	autoScroll?: boolean;
	autoScrollDuration?: number;
	autoScrollDirection?: "forward" | "backward";
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
		<div>
			{props.images.map((image, index) => (
				<Image
					priority={index == 0 ? true : false}
					hidden={imageIndex == index ? false : true}
					key={image.src}
					className="rounded-lg"
					src={image.src}
					width={image.width}
					height={image.height}
					alt={image.alt}
				/>
			))}
			<div className="py-4 flex justify-between self-center">
				<p>{props.images[imageIndex].alt}</p>
				<span className="flex gap-6">
					<button
						className="text-zinc-50 active:text-yellow-500 duration-200"
						onClick={() => advance("backward")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
					<p className="text-sm text-zinc-400 self-center select-none">
						{imageIndex + 1} of {props.images.length}
					</p>
					<button
						className="text-zinc-50 active:text-yellow-500 duration-200"
						onClick={() => advance("forward")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="w-6 h-6">
							<path
								fillRule="evenodd"
								d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				</span>
			</div>
		</div>
	);
}
