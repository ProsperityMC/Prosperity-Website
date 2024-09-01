import Image from "next/image";

export default function SchematicCard(props: {
	title: string | React.ReactNode;
	content: string | React.ReactNode;
	imageUrl: string;
	imageAlt: string;
	credits: { username: string; userIconUrl: string }[];
}) {
	return (
		<div className="p-4 pb-6 block hover:bg-zinc-900 text-left rounded-md duration-200 transform focus:border-yellow-400 bg-zinc-800 border border-zinc-700 w-full">
			<Image
				className="max-w-xs mx-auto"
				alt={props.imageAlt}
				src={props.imageUrl}
				width={512}
				height={512}
			/>
			<header className="text-lg type-header my-1.5">
				{props.title}
			</header>
			<p className="mb-1.4">{props.content}</p>
			<div className="flex gap-4 mt-4 items-center">
				{props.credits.map((credit) => (
					<Image
						key={credit.username}
						alt=""
						src={credit.userIconUrl}
						width={256}
						height={256}
						className="w-6 h-6 bg-zinc-800 rounded-full border-none"
					/>
				))}
				<header className="text-sm">
					{props.credits.map((credit) => credit.username).join(", ")}
				</header>
			</div>
		</div>
	);
}
