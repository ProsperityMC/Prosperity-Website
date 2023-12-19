import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import css from "./Map.module.css";
// import L from "leaflet";

export default function Map(props: { url: string }) {
	const minZoom = 0;
	const maxZoom = 8;
	const toLatLng = (x: number, y: number) => L.CRS.Simple.pointToLatLng(new L.Point(x, y), 2);

	const bounds = L.latLngBounds(toLatLng(-10000, -10000), toLatLng(10000, 10000));

	console.log("TEST");
	return (
		<div className={`w-full ${css.Map}`} style={{ height: "700px" }}>
			<MapContainer
				center={[0, 0]}
				zoom={0}
				crs={L.CRS.Simple}
				maxBounds={bounds}
				minZoom={minZoom}
				maxZoom={maxZoom}
				zoomSnap={0}>
				<TileLayer
					url={props.url}
					attribution="(c) Prosperity players. Rendered by Squaremap"
					tileSize={512}
					noWrap={true}
					bounds={bounds}
					maxNativeZoom={3}
					minNativeZoom={3}
				/>
			</MapContainer>
		</div>
	);
}
