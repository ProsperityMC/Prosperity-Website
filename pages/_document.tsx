export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <title>Prosperity</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=jetbrains+mono|montserrat|inter"
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from "next/document";
