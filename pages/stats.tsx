import Head from "next/head";

export default function Stats(): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | Stats</title>
        <meta
          name="description"
          content="Live resource usage and performance metrics for Prosperity."
        />
      </Head>
      <p className="text-6xl">Stats page</p>
    </>
  );
}
