import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import Nav from "../components/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter|DM+Sans|Source+Code+Pro" />
      </head>
      <Nav></Nav>
      {/* Container for all content */}
      <div className="x-break">
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
