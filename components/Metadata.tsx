import Head from "next/head";

export default function Metadata(props: {
	author?: string;
	title?: string;
	description?: string;
	imageUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
	themeColor?: string;
}) {
	return (
		<Head>
			{props.title ? <title>{props.title}</title>:<></>}
			{props.title ? <meta property="og:title" content={props.title} />:<></>}
			{props.title ? <meta property="twitter:title" content={props.title} />:<></>}
			{props.description ? <meta property="description" content={props.description} />:<></>}
			{props.description ? <meta property="og:description" content={props.description}/>:<></>}
			{props.description ? <meta property="twitter:description" content={props.description} />:<></>}
			{props.imageUrl ? <meta property="og:image" content={props.imageUrl} />:<></>}
			{props.imageUrl ? <meta property="twitter:image" content={props.imageUrl} />:<></>}
			{props.imageWidth ? <meta property="og:image:width" content={props.imageWidth.toString()} />:<></>}
			{props.imageHeight ? <meta property="og:image:height" content={props.imageHeight.toString()} />:<></>}
			{props.author ? <meta name="author" content={props.author} />:<></>}
			{props.themeColor ? <meta name="theme-color" content={props.themeColor} />:<></>}
		</Head>
	);
}
