import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Head from "next/head";
import Nav from "../components/nav";

export function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter|DM+Sans|Source+Code+Pro" />
      </Head>
      <div className="x-break">
        <Nav></Nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
