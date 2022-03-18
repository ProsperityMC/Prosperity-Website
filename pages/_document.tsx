export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=jetbrains+mono|montserrat|inter&display=optional"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
