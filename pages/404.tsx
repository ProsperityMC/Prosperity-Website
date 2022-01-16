import Head from "next/head";

export default function NotFound(): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | Error page</title>
        <meta name="description" content="A page that does not exist." />
      </Head>
      <div className="text-6xl">Error, page not found</div>
    </>
  );
}
