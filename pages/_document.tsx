export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=JetBrains+Mono|Montserrat:100,200,300,400,500,600,700,800,900,i|Inter:100,200,300,400,500,600,700,800,900,i&display=optional"
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
