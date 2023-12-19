import { Left, Right } from "@components/Icons";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";

const API_URL = "https://raw.githubusercontent.com/sppmacd/Prosperity-Maps/maps/maps";

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

function AreaWidget({ name, area, visible }: { name: string; area: Area; visible: boolean }) {
	const Map = dynamic(() => import("@components/Map"), {
		ssr: false
	});

	const [counter, setCounter] = useState(area.files.length - 1);

	if (!visible) {
		return null;
	}

	return (
		<div className="bg-zinc-800 p-2 flex flex-col">
			<div className="info mb-2 inline-flex gap-2 items-center">
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
				<div className="flex-1" />
				{getAreaInfoText(area)}
			</div>
			<Map url={`${API_URL}/${area.files[counter]}/${name}/{x}/{y}.webp`} />
		</div>
	);
}

function TabButton(
	props: React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> & { children: ReactNode; active: boolean }
) {
	return (
		<button
			className={`px-2 hover:bg-zinc-700 ${props.active ? "bg-zinc-600" : ""} flex-shrink-0 h-10`}
			onClick={props.onClick}>
			{props.children}
		</button>
	);
}

export default function HistoricalMaps() {
	const [areas, setAreas] = useState<AreaList | string>("Loading...");
	const [currentArea, setCurrentArea] = useState<string>("");

	useEffect(() => {
		async function f() {
			const json: AreaList = await (await fetch(`${API_URL}/list.json`)).json();
			console.log(json);
			setAreas(json);
			setCurrentArea(Object.keys(json)[0]);
		}
		f().catch((e) => {
			setAreas(e.toString());
		});
	}, []);

	return (
		<div className="flex flex-col gap-12 text-center markdown">
			{typeof areas == "object" ? (
				<div className="border border-zinc-700 rounded-lg overflow-hidden">
					<div className="bg-zinc-800 flex border-b border-zinc-700 overflow-x-scroll">
						{Object.entries(areas).map(([k, v]) => {
							return (
								<TabButton onClick={() => setCurrentArea(k)} active={k == currentArea} key={k}>
									{k}
								</TabButton>
							);
						})}
					</div>
					<div>
						{Object.entries(areas).map(([k, v]) => {
							// We store all area widgets components to remember counter for
							// each tab separately
							return (
								<AreaWidget
									name={currentArea}
									area={areas[currentArea]}
									visible={k == currentArea}
									key={k}
								/>
							);
						})}
					</div>
				</div>
			) : null}
		</div>
	);
}
