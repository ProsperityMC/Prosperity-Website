import Head from "next/head";

export default function Gallery(): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | Gallery</title>
        <meta name="description" content="Fancy screenshots from the Prosperity server."/>
      </Head>
      <p className="text-6xl">Gallery page</p>
    </>
  );
}
