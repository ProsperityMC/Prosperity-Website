import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/nav";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter|DM+Sans|Source+Code+Pro"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="The Prosperity Minecraft server." />
        <meta
          name="keywords"
          content="Prosperity, Prosperity MC, Prosperity SMP, Prosperity Wiki, Minecraft, Minecraft server"
        />
        <meta property="og:site_name" content="Prosperity MC" />
        <meta name="theme-color" content="#FFC10B" />
        <meta property="og:type" content="website" />
      </Head>
      <Nav></Nav>
      <div className="px-12 mt-[7rem] sm:px-24 xl:px-48 2xl:px-72">
        <Component {...pageProps} />
      </div>
    </>
  );
}
