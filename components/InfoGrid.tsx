export default function InfoGrid(props: { sections: string[] | React.ReactNode[] }) {
	return (
		<div className="grid grid-cols-1 grid-rows-4 xl:grid-rows-2 xl:grid-cols-2 gap-12  max-w-screen-lg mx-auto">
			{props.sections.map((content) => (
				<p className="text-lg text-zinc-300 font-medium max-w-2xl text-left">{content}</p>
			))}
		</div>
	);
}
