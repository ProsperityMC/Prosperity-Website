export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity</title>
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
      <Nav />
      <div className="mt-[6.5rem] responsive-width">
        <Component {...pageProps} />
      </div>
    </>
  );
}

import Head from "next/head";
import Nav from "@components/nav";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/globals.css";
