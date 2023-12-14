import { Left, Right } from "@components/Icons";
import { ReactNode, useEffect, useState } from "react";

const API_URL = "https://raw.githubusercontent.com/sppmacd/Prosperity-Map-Server/main/maps";

interface Area {
	/// Dimension (overworld, the_nether, the_end)
	dimension: string;
	xmin: number;
	xmax: number;
	zmin: number;
	zmax: number;
	/// The zoom level as used in squaremap (0- 8 blocks per pixel, 1 - 4, 2 - 2, 3 - 1 (full resolution))
	zoom: number;
	/// How many blocks per pixel we scale down after retrieving data from the server
	scaledown: number;
	/// List of files (dates) for the area
	files: string[];
}

type AreaList = { [name: string]: Area };

function getAreaInfoText(area: Area) {
	const bpp = 2 ** (3 - area.zoom) * (area.scaledown ?? 1);
	return `${area.dimension} • x: ${area.xmin}..${area.xmax} • z: ${area.zmin}..${area.zmax} • blocks per pixel: ${bpp}`;
}

function Button(
	props: React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> & { children: ReactNode }
) {
	return (
		<button
			className={
				(props.className ?? "") +
				" transition-colors border border-zinc-500 rounded-md px-1 bg-zinc-700 hover:bg-zinc-600 disabled:border-zinc-600 disabled:bg-inherit"
			}
			{...props}>
			{props.children}
		</button>
	);
}

function AreaWidget({ name, area }: { name: string; area: Area }) {
	const [counter, setCounter] = useState(area.files.length - 1);

	return (
		<div className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 flex flex-col items-center">
			<h2 className="text-2xl mb-2">{name}</h2>
			<div className="info mb-2">{getAreaInfoText(area)}</div>
			<div className="flex justify-center items-center mb-2 gap-2">
				<Button
					name="prev"
					onClick={() => {
						setCounter(counter - 1);
					}}
					disabled={counter == 0}>
					{Left}
				</Button>
				<span className="date">{area.files[counter]}</span>
				<Button
					name="next"
					onClick={() => {
						setCounter(counter + 1);
					}}
					disabled={counter == area.files.length - 1}>
					{Right}
				</Button>
			</div>
			<div className="flex justify-center">
				<img width="600" height="600" src={`${API_URL}/${area.files[counter]}/${name}.png`} />
			</div>
		</div>
	);
}

export default function HistoricalMaps() {
	const [areas, setAreas] = useState<AreaList | string>("Loading...");

	useEffect(() => {
		async function f() {
			const json: AreaList = await (await fetch(`${API_URL}/list.json`)).json();
			console.log(json);
			setAreas(json);
		}
		f().catch((e) => {
			setAreas(e.toString());
		});
	}, []);

	return (
		<div className="flex flex-col gap-12 text-center markdown">
			<header className="text-4xl type-header">Prosperity historical maps</header>
			{typeof areas === "object" ? (
				<div className="flex flex-wrap gap-8 justify-center">
					{Object.entries(areas).map(([name, area]) => {
						return <AreaWidget key={name} name={name} area={area} />;
					})}
				</div>
			) : (
				areas
			)}
		</div>
	);
}
