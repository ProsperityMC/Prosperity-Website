import Head from "next/head";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { allPages } from ".contentlayer/data";
import type { Page } from ".contentlayer/types";
import { FC } from "react";

export async function getStaticPaths() {
  const paths = allPages.map((_) => `/wiki/${_._raw.flattenedPath}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const page = allPages.find((_) => _._raw.flattenedPath === params.slug);
  return {
    props: {
      page,
    },
  };
}

const WikiPage: FC<{ page: Page }> = ({ page }) => {
  return (
    <>
      <Head>
        <title>Prosperity | {page.title}</title>
      </Head>
      <ReactMarkdown className="markdown" remarkPlugins={[remarkGfm]}>
        {page.body.raw}
      </ReactMarkdown>
    </>
  );
};

export default WikiPage;
