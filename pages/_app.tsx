import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import Nav from "../components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter|DM+Sans" />
      </head>
      <Nav></Nav>
      {/* Container for all content */}
      <div className="px-24 xl:px-48 2xl:px-72">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
