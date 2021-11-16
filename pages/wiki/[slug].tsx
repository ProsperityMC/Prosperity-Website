import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { allWikis } from ".contentlayer/data";
import type { Wiki } from ".contentlayer/types";
import { FC } from "react";

export async function getStaticPaths() {
  const paths = allWikis.map((_) => `/wiki/${_._raw.flattenedPath}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const wiki = allWikis.find((_) => _._raw.flattenedPath === params.slug);
  return {
    props: {
      wiki,
    },
  };
}

export default function WikiPage({ wiki }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Prosperity | {wiki.title}</title>
      </Head>
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
        {wiki.body.raw}
      </ReactMarkdown>
    </>
  );
}
