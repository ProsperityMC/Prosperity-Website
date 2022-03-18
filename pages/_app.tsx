export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Nav />
      <div className="mt-[6.5rem] responsive-width">
        <Component {...pageProps} />
      </div>
    </>
  );
}

import Nav from "@components/nav";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/globals.css";
